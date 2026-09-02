"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Global state ve Fiyat bileşeni
import { useSite } from '@/app/context/SiteContext'; 
import Price from '@/components/Price'; 

// =======================================================
// 💫 ÖZEL ANİMASYON BİLEŞENİ
// =======================================================
const RevealOnScroll = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay: `${delay}ms` }} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

// =======================================================
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ
// =======================================================
const GOREME_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Heart of Cappadocia",
    heroDesc: "Surrounded by fairy chimneys, valleys, rock churches, and balloons, Goreme is the ultimate starting point for exploring Cappadocia.",
    btnExplore: "EXPLORE GOREME",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: Apr – Oct",
    statStay: "Rec. Stay: 2–3 Days",

    // 2. ABOUT
    aboutTitle: "About Goreme",
    aboutTags: ["📍 Center of Cappadocia", "🏛️ Historic Rock Churches", "🎈 Balloon Flights", "🥾 Valley Hiking Trails", "📸 Photo Spots", "🍽️ Restaurants & Cafés", "🏨 Cave Hotels"],
    aboutText1: "Goreme is an open-air museum town, globally famous for its volcanic rock formations called 'Fairy Chimneys' and its historical rock-cut churches.",
    aboutText2: "As the epicenter of regional tourism, staying here means you are within walking distance of the best cave hotels, authentic dining, and breathtaking sunrise balloon views.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Goreme",
    mustSeeCards: [
      { name: "Open Air Museum", desc: "UNESCO World Heritage site with rock churches.", img: "/images/museums/goreme.jpg", link: "/museums/goreme" },
      { name: "Tokali Church", desc: "The largest rock-cut church with stunning blue frescoes.", img: "/images/churches/tokali.jpg", link: "/churches/tokali" },
      { name: "Love Valley", desc: "Famous for its gigantic pillar-like fairy chimneys.", img: "/images/valleys/love.jpg", link: "/valleys/love-valley" },
      { name: "Sunset Point", desc: "Best panoramic hill to watch balloons and sunsets.", img: "/images/valleys/love-panorama.jpg", link: "/valleys/kizilcukur" },
      { name: "Pigeon Valley", desc: "Perfect for hiking and panoramic photography.", img: "/images/valleys/pigeon.jpg", link: "/valleys/pigeon-valley" },
      { name: "Goreme Town", desc: "Authentic streets, cave hotels, and carpet shops.", img: "/images/destinations/goreme.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do in Goreme",
    todoCards: [
      { icon: "🎈", title: "Hot Air Balloon", price: 160, rating: "4.9", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🏍️", title: "ATV Safari", price: 35, rating: "4.8", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🐎", title: "Horse Riding", price: 40, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Valley Hiking", price: 30, rating: "4.8", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🌅", title: "Sunset Tour", price: 50, rating: "4.9", dur: "3 Hours", link: "/tours/sunset" },
      { icon: "🏺", title: "Pottery Workshop", price: 20, rating: "4.7", dur: "1.5 Hours", link: "/tours/pottery" },
      { icon: "🍽️", title: "Turkish Night", price: 55, rating: "4.6", dur: "3 Hours", link: "/tours/turkish-night" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Goreme Experience Guide",
    expList: [
      { num: "01", title: "Watch the balloons at sunrise", desc: "The most magical way to start your day in Goreme." },
      { num: "02", title: "Explore the Open Air Museum", desc: "Step inside 11th-century rock-cut sanctuaries." },
      { num: "03", title: "Walk through a Cappadocia valley", desc: "Lose yourself among the fairy chimneys in Zemi or Love Valley." },
      { num: "04", title: "Watch the sunset from a panoramic viewpoint", desc: "See the rocks turn fiery red at Aydin Kiragi." },
      { num: "05", title: "Experience Cappadocia on horseback", desc: "Ride through the 'Land of Beautiful Horses'." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "1 Day", desc: "Goreme Town + Open Air Museum + Sunset Point." },
      { day: "2 Days", desc: "Day 1 + Valley Hiking + Balloon Flight + ATV Tour." },
      { day: "3 Days", desc: "Day 2 + Uchisar Castle + Avanos + Underground City." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots in Goreme",
    photoCards: [
      { name: "Balloon Viewpoint", time: "Sunrise", for: "Balloons", diff: "Easy", img: "/images/destinations/goreme.jpg" },
      { name: "Aydin Kiragi", time: "Sunset", for: "Panorama", diff: "Medium", img: "/images/valleys/love-panorama.jpg" },
      { name: "Love Valley", time: "Morning", for: "Fairy Chimneys", diff: "Easy", img: "/images/valleys/love.jpg" },
      { name: "Cave Hotel Terrace", time: "Breakfast", for: "Luxury Shots", diff: "Easy", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["🍽️ Local Restaurants", "☕ Cozy Cafés", "🍳 Turkish Breakfast", "🍷 Rooftop Restaurants"],
    stayList: ["🏨 Cave Hotels", "💎 Luxury Hotels", "💰 Budget Hotels", "🎈 Balloon View Hotels", "❤️ Romantic Hotels"],

    // 10. TRANSPORT
    transTitle: "How to Get to Goreme?",
    transList: ["✈️ From Kayseri Airport (ASR) - 1h 15m", "✈️ From Nevsehir Airport (NAV) - 40m", "🚌 Intercity Bus to Goreme Station"],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Perfect nature." },
      { name: "☀️ Summer", desc: "Jun-Aug: Hot & busy." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Ideal weather." },
      { name: "❄️ Winter", desc: "Dec-Feb: Snowy views." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "Wear comfortable trekking shoes for the valleys.",
      "Be ready before sunrise to see the balloons.",
      "Balloon flights depend entirely on wind conditions.",
      "Carry water for valley hikes.",
      "Visit museums early morning to beat the heat.",
      "Book your tours in advance during high season."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Uchisar", time: "10-15 min", link: "/destinations/uchisar" },
      { name: "Cavusin", time: "10-15 min", link: "/destinations/cavusin" },
      { name: "Ortahisar", time: "15-20 min", link: "/destinations/ortahisar" },
      { name: "Avanos", time: "20-25 min", link: "/destinations/avanos" },
      { name: "Urgup", time: "20-25 min", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Popular Tours From Goreme",

    // 16. FAQ
    faqTitle: "Goreme Frequently Asked Questions",
    faqs: [
      { q: "Is Goreme the best place to stay?", a: "For most tourists, yes. It is the most central and has the highest concentration of cave hotels." },
      { q: "How many days should I stay?", a: "2 to 3 days is perfect to experience a balloon flight, a regional tour, and valley hikes." },
      { q: "Can I walk around Goreme?", a: "The town center is very walkable. However, you need a vehicle or tour for distant valleys and underground cities." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Goreme?",
    ctaDesc: "Discover Cappadocia with a local perspective.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Kalbi",
    heroDesc: "Peri bacaları, vadiler, kaya kiliseleri ve balonlarla çevrili Göreme, Kapadokya'yı keşfetmeye başlamak için en özel noktadır.",
    btnExplore: "GÖREME'Yİ KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Nisan – Ekim",
    statStay: "Önerilen Süre: 2–3 Gün",

    // 2. ABOUT
    aboutTitle: "Göreme Hakkında",
    aboutTags: ["📍 Kapadokya'nın Merkezi", "🏛️ Tarihi Kaya Kiliseleri", "🎈 Balon Uçuşları", "🥾 Vadi Yürüyüş Rotaları", "📸 Fotoğraf Noktaları", "🍽️ Restoran & Kafeler", "🏨 Mağara Oteller"],
    aboutText1: "Göreme, 'Peri Bacaları' olarak bilinen volkanik kaya oluşumları ve tarihi kaya kiliseleriyle dünyaca ünlü, yaşayan bir açık hava müzesidir.",
    aboutText2: "Bölgesel turizmin merkez üssü olması nedeniyle; en iyi mağara otellere, otantik restoranlara ve büyüleyici gün doğumu manzaralarına yürüme mesafesinde olursunuz.",

    // 3. MUST SEE
    mustSeeTitle: "Göreme'de Keşfedin",
    mustSeeCards: [
      { name: "Açık Hava Müzesi", desc: "Kaya kiliseleri ve freskleriyle UNESCO alanı.", img: "/images/museums/goreme.jpg", link: "/museums/goreme" },
      { name: "Tokalı Kilise", desc: "Göreme'nin en büyük, mavi freskli kilisesi.", img: "/images/churches/tokali.jpg", link: "/churches/tokali" },
      { name: "Aşıklar Vadisi", desc: "Devasa peri bacaları ve panoramik manzaralar.", img: "/images/valleys/love.jpg", link: "/valleys/love-valley" },
      { name: "Sunset Point", desc: "Gün batımı ve Göreme manzarası için en iyi tepe.", img: "/images/valleys/love-panorama.jpg", link: "/valleys/kizilcukur" },
      { name: "Güvercinlik Vadisi", desc: "Yürüyüş ve manzara fotoğrafçılığı için ideal.", img: "/images/valleys/pigeon.jpg", link: "/valleys/pigeon-valley" },
      { name: "Göreme Kasabası", desc: "Otantik sokaklar, oteller ve halı dükkanları.", img: "/images/destinations/goreme.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Göreme'de Yapılabilecek Aktiviteler",
    todoCards: [
      { icon: "🎈", title: "Sıcak Hava Balonu", price: 160, rating: "4.9", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🏍️", title: "ATV Safari", price: 35, rating: "4.8", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🐎", title: "At Turu", price: 40, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Vadi Yürüyüşü", price: 30, rating: "4.8", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🌅", title: "Gün Batımı Turu", price: 50, rating: "4.9", dur: "3 Saat", link: "/tours/sunset" },
      { icon: "🏺", title: "Çömlek Atölyesi", price: 20, rating: "4.7", dur: "1.5 Saat", link: "/tours/pottery" },
      { icon: "🍽️", title: "Türk Gecesi", price: 55, rating: "4.6", dur: "3 Saat", link: "/tours/turkish-night" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Göreme Deneyim Rehberi",
    expList: [
      { num: "01", title: "Gün doğumunda balonları izleyin", desc: "Göreme'de güne başlamanın en büyüleyici yolu." },
      { num: "02", title: "Açık Hava Müzesi'ni keşfedin", desc: "11. yüzyıldan kalma kaya kiliselerinin içine adım atın." },
      { num: "03", title: "Vadilerde yürüyüş yapın", desc: "Zemi veya Aşk Vadisi'nde peribacaları arasında kaybolun." },
      { num: "04", title: "Panoramik bir tepeden gün batımını izleyin", desc: "Aydın Kırağı'nda kayaların kızıla bürünmesini seyredin." },
      { num: "05", title: "Kapadokya'yı at sırtında deneyimleyin", desc: "'Güzel Atlar Diyarı'nda vadilerin tozunu attırın." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Göreme'de Kaç Gün Kalınır?",
    daysList: [
      { day: "1 Gün", desc: "Göreme Kasabası + Açık Hava Müzesi + Gün Batımı Tepesi." },
      { day: "2 Gün", desc: "1. Gün + Vadi Yürüyüşü + Balon Turu + ATV Safari." },
      { day: "3 Gün", desc: "2. Gün + Uçhisar Kalesi + Avanos + Yeraltı Şehri." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Balon Seyir Tepesi", time: "Gün Doğumu", for: "Balonlar", diff: "Kolay", img: "/images/destinations/goreme.jpg" },
      { name: "Aydın Kırağı", time: "Gün Batımı", for: "Panoramik Manzara", diff: "Orta", img: "/images/valleys/love-panorama.jpg" },
      { name: "Aşk Vadisi", time: "Sabah", for: "Peri Bacaları", diff: "Kolay", img: "/images/valleys/love.jpg" },
      { name: "Otel Terası", time: "Kahvaltı", for: "Lüks Kareler", diff: "Kolay", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["🍽️ Yöresel Restoranlar", "☕ Kafeler", "🍳 Serpme Kahvaltı", "🍷 Teras (Rooftop) Restoranlar"],
    stayList: ["🏨 Cave (Mağara) Oteller", "💎 Lüks Oteller", "💰 Ekonomik Seçenekler", "🎈 Balon Manzaralı Oteller", "❤️ Romantik Oteller"],

    // 10. TRANSPORT
    transTitle: "Göreme'ye Nasıl Gidilir?",
    transList: ["✈️ Kayseri Havalimanından (ASR) - 1s 15dk", "✈️ Nevşehir Havalimanından (NAV) - 40dk", "🚌 Göreme Otogarına Direkt Otobüs Seferleri"],

    // 11. BEST TIME
    seasonTitle: "Göreme'yi Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Doğa ve balon için ideal." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Sıcak ve yoğun sezon." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Kusursuz hava şartları." },
      { name: "❄️ Kış", desc: "Ara-Şub: Kar manzaraları ve sakinlik." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Vadilerde yürüyüş yaparken rahat, kaymaz ayakkabılar tercih edin.",
      "Balonları görmek için gün doğumundan önce hazır olun.",
      "Balon uçuşlarının hava şartlarına bağlı olduğunu unutmayın.",
      "Vadilere inmeden önce yanınıza mutlaka su alın.",
      "Müze ziyaretlerini sıcaklığın yüksek olmadığı saatlere planlayın.",
      "Yaz aylarında öğle saatlerinde uzun yürüyüşlerden kaçının."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Uçhisar", time: "10-15 dk", link: "/destinations/uchisar" },
      { name: "Çavuşin", time: "10-15 dk", link: "/destinations/cavusin" },
      { name: "Ortahisar", time: "15-20 dk", link: "/destinations/ortahisar" },
      { name: "Avanos", time: "20-25 dk", link: "/destinations/avanos" },
      { name: "Ürgüp", time: "20-25 dk", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Göreme Çıkışlı Popüler Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Kapadokya'da konaklamak için en iyi yer Göreme mi?", a: "Çoğu turist için evet. En merkezi yerdir ve mağara otellerin, restoranların çoğu buradadır." },
      { q: "Göreme'de kaç gün kalmalıyım?", a: "Balon turu, vadi yürüyüşü ve müze gezisi için en ideali 2-3 gündür." },
      { q: "Göreme yürüyerek gezilir mi?", a: "Kasaba merkezi yürüyerek gezilebilir ancak büyük vadiler ve yeraltı şehirleri için araca veya tura ihtiyaç vardır." }
    ],

    // 17. CTA
    ctaTitle: "Göreme'yi Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'yı yerel bir bakış açısıyla keşfet.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  // İspanyolca (es) kısmı yapıyı bozmamak için İngilizce/Türkçe ile aynı hizada kısa tutulabilir.
  es: {
    heroSub: "El Corazón de Capadocia",
    heroDesc: "Rodeado de chimeneas de hadas, iglesias, valles y globos, Göreme es el mejor punto de partida.",
    btnExplore: "EXPLORAR GÖREME",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: Abr – Oct",
    statStay: "Estancia Rec: 2–3 Días",
    aboutTitle: "Sobre Göreme",
    aboutTags: ["📍 Centro de Capadocia", "🏛️ Iglesias Históricas", "🎈 Vuelos en Globo", "🥾 Senderismo", "📸 Puntos de Fotos", "🍽️ Restaurantes", "🏨 Hoteles Cueva"],
    aboutText1: "Göreme es un museo al aire libre famoso por sus chimeneas de hadas.",
    aboutText2: "Como epicentro del turismo, todo está a poca distancia a pie.",
    mustSeeTitle: "Descubre Göreme",
    mustSeeCards: [
      { name: "Museo al Aire Libre", desc: "Patrimonio de la UNESCO.", img: "/images/museums/goreme.jpg", link: "/museums/goreme" },
      { name: "Iglesia Tokali", desc: "La iglesia más grande.", img: "/images/churches/tokali.jpg", link: "/churches/tokali" },
      { name: "Valle del Amor", desc: "Famoso por sus chimeneas.", img: "/images/valleys/love.jpg", link: "/valleys/love-valley" },
      { name: "Sunset Point", desc: "La mejor colina panorámica.", img: "/images/valleys/love-panorama.jpg", link: "/valleys/kizilcukur" },
      { name: "Valle de las Palomas", desc: "Perfecto para caminar.", img: "/images/valleys/pigeon.jpg", link: "/valleys/pigeon-valley" },
      { name: "Pueblo de Göreme", desc: "Calles y hoteles auténticos.", img: "/images/destinations/goreme.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🎈", title: "Vuelo en Globo", price: 160, rating: "4.9", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🏍️", title: "Safari ATV", price: 35, rating: "4.8", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🐎", title: "Paseo a Caballo", price: 40, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.9", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Senderismo", price: 30, rating: "4.8", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🌅", title: "Tour Atardecer", price: 50, rating: "4.9", dur: "3 Horas", link: "/tours/sunset" },
      { icon: "🏺", title: "Taller de Cerámica", price: 20, rating: "4.7", dur: "1.5 Horas", link: "/tours/pottery" },
      { icon: "🍽️", title: "Noche Turca", price: 55, rating: "4.6", dur: "3 Horas", link: "/tours/turkish-night" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Mira los globos al amanecer", desc: "La forma más mágica de empezar." },
      { num: "02", title: "Explora el Museo", desc: "Santuarios del siglo XI." },
      { num: "03", title: "Camina por un valle", desc: "Piérdete entre chimeneas de hadas." },
      { num: "04", title: "Mira el atardecer", desc: "Desde un punto panorámico." },
      { num: "05", title: "Monta a caballo", desc: "Explora antiguos senderos." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "1 Día", desc: "Göreme + Museo + Sunset Point." },
      { day: "2 Días", desc: "Día 1 + Senderismo + Globos." },
      { day: "3 Días", desc: "Día 2 + Uchisar + Avanos." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Mirador de Globos", time: "Amanecer", for: "Globos", diff: "Fácil", img: "/images/destinations/goreme.jpg" },
      { name: "Aydin Kiragi", time: "Atardecer", for: "Panorama", diff: "Medio", img: "/images/valleys/love-panorama.jpg" },
      { name: "Valle del Amor", time: "Mañana", for: "Chimeneas", diff: "Fácil", img: "/images/valleys/love.jpg" },
      { name: "Terraza de Hotel", time: "Desayuno", for: "Fotos de Lujo", diff: "Fácil", img: "/images/destinations/uchisar.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["🍽️ Restaurantes", "☕ Cafeterías", "🍳 Desayunos", "🍷 Rooftops"],
    stayList: ["🏨 Hoteles Cueva", "💎 Lujo", "💰 Económico", "🎈 Vistas a Globos", "❤️ Romántico"],
    transTitle: "¿Cómo Llegar?",
    transList: ["✈️ Kayseri (ASR) - 1h 15m", "✈️ Nevsehir (NAV) - 40m", "🚌 Autobús a Göreme"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Clima perfecto." },
      { name: "☀️ Verano", desc: "Días calurosos." },
      { name: "🍂 Otoño", desc: "Colores hermosos." },
      { name: "❄️ Invierno", desc: "Paisajes nevados." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "Usa zapatos cómodos.",
      "Despierta antes del amanecer.",
      "Los vuelos dependen del viento.",
      "Lleva agua a los valles.",
      "Visita museos temprano.",
      "Reserva tours con antelación."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Uchisar", time: "10-15 min", link: "/destinations/uchisar" },
      { name: "Cavusin", time: "10-15 min", link: "/destinations/cavusin" },
      { name: "Ortahisar", time: "15-20 min", link: "/destinations/ortahisar" },
      { name: "Avanos", time: "20-25 min", link: "/destinations/avanos" },
      { name: "Urgup", time: "20-25 min", link: "/destinations/urgup" }
    ],
    popToursTitle: "Tours Populares",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Vale la pena Göreme?", a: "Sí, es el centro de Capadocia." },
      { q: "¿Cuántos días?", a: "2 a 3 días es perfecto." },
      { q: "¿Puedo caminar?", a: "El centro sí, para los valles necesitas vehículo." }
    ],
    ctaTitle: "¿Listo para Explorar?",
    ctaDesc: "Descubre Capadocia con Cappaviva.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function GoremePage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = GOREME_DICT[aktifDil] || GOREME_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white">
      
      {/* 1. HERO */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/goreme.jpg" alt="Goreme" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-[#F8FAFC]"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-10">
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-2">GÖREME</h1>
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-xl mb-6 drop-shadow-md">
            {t.heroSub}
          </h2>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto mb-10 drop-shadow-md leading-relaxed">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
              {t.btnExplore}
            </a>
            <Link href="/tours" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
              {t.btnBookHero}
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-slate-900/60 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider">{t.statLoc}</span>
            <span className="bg-slate-900/60 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider">{t.statTime}</span>
            <span className="bg-slate-900/60 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-2xl text-xs font-bold tracking-wider">{t.statStay}</span>
          </div>
        </RevealOnScroll>
      </section>

      {/* 2. ABOUT */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.aboutTitle}</h2>
          <div className="w-16 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-wrap content-start gap-3">
            {t.aboutTags.map((tag: string, i: number) => (
              <span key={i} className="bg-white border border-slate-200 text-slate-700 font-bold px-4 py-3 rounded-2xl shadow-sm text-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.aboutQ1}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t.aboutA1} {t.aboutText1}</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.aboutQ2}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t.aboutA2}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.aboutQ3}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{t.aboutA3} {t.aboutText2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MUST SEE (Cards) */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-2 md:mx-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">{t.mustSeeTitle}</h2>
            <div className="w-16 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.mustSeeCards.map((card: any, idx: number) => (
              <RevealOnScroll key={idx} delay={idx * 100}>
                <Link href={card.link} className="group block bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors h-full flex flex-col">
                  <div className="relative w-full h-48 bg-slate-800 overflow-hidden">
                    <Image src={card.img} alt={card.name} fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                    <p className="text-slate-400 text-sm font-medium mb-6 flex-1">{card.desc}</p>
                    <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THINGS TO DO (Sales) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.todoTitle}</h2>
          <div className="w-16 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.todoCards.map((card: any, index: number) => (
            <RevealOnScroll key={index} delay={index * 50}>
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 h-full flex flex-col">
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{card.title}</h3>
                <div className="flex justify-between text-xs font-bold text-slate-500 mb-6 flex-1">
                  <span>⭐ {card.rating}</span>
                  <span>⏱ {card.duration}</span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400">From</span>
                    <Price eur={card.price} className="text-xl font-black text-slate-900" />
                  </div>
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-yellow-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-yellow-50 border-y border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-yellow-500 mt-6 rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 font-medium">An editorial selection of the absolute best moments you can have in Goreme.</p>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-yellow-500 shrink-0">{exp.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{exp.title}</h3>
                  <p className="text-slate-600 font-medium">{exp.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW MANY DAYS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.daysTitle}</h2>
          <div className="w-16 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-yellow-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-yellow-100 hover:bg-yellow-500 px-6 py-3 rounded-xl transition-colors">
            VIEW 3-DAY CAPPADOCIA PLAN &rarr;
          </Link>
        </RevealOnScroll>
      </section>

      {/* 7. PHOTO SPOTS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">📸 {t.photoTitle}</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.photoCards.map((spot: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="group bg-[#F8FAFC] border border-slate-100 rounded-3xl overflow-hidden h-full flex flex-col shadow-sm">
                  <div className="relative w-full h-40 overflow-hidden bg-slate-200">
                     <Image src={spot.img} alt={spot.name} fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{spot.name}</h3>
                    <div className="text-xs font-bold text-slate-500 space-y-2">
                      <p>Time: <span className="text-slate-900">{spot.time}</span></p>
                      <p>For: <span className="text-slate-900">{spot.for}</span></p>
                      <p>Difficulty: <span className="text-slate-900">{spot.diff}</span></p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 8 & 9. EAT & STAY */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.eatStayTitle}</h2>
          <div className="w-16 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-yellow-400">Where to Stay?</h3>
            <ul className="space-y-4">
              {t.stayList.map((item: string, i: number) => (
                <li key={i} className="text-lg font-medium border-b border-white/10 pb-4">{item}</li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="bg-white border border-slate-200 rounded-[3rem] p-10 md:p-12 shadow-sm">
            <h3 className="text-3xl font-black mb-8 text-slate-900">Eat & Drink</h3>
            <ul className="space-y-4">
              {t.eatList.map((item: string, i: number) => (
                <li key={i} className="text-lg font-medium text-slate-700 border-b border-slate-100 pb-4">{item}</li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* 10. TRANSPORT */}
      <section className="py-24 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/transfer" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Book Airport Transfer &rarr;
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* 11 & 12. SEASONS & TIPS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.seasonTitle}</h2>
            <div className="grid grid-cols-2 gap-4">
              {t.seasons.map((season: any, i: number) => (
                <div key={i} className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                  <h4 className="font-black text-slate-900 mb-2">{season.name}</h4>
                  <p className="text-sm font-medium text-slate-500">{season.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">💡 Cappaviva Local Tips</h2>
            <ul className="space-y-4">
              {t.tipsList.map((tip: string, i: number) => (
                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-slate-700 font-medium">
                  <span className="text-yellow-500 mt-0.5">✔</span> {tip}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* 13. EXPLORE NEARBY */}
      <section className="py-20 bg-slate-900 text-white rounded-[3rem] mx-2 md:mx-6 mb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black mb-10 text-yellow-400">{t.nearbyTitle}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {t.nearbyList.map((place: any, i: number) => (
                <Link key={i} href={place.link} className="bg-white/10 border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/20 transition-colors">
                  <span className="font-bold text-lg block">{place.name}</span>
                  <span className="text-xs text-slate-400 font-medium">{place.time}</span>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 14. POPULAR TOURS */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.popToursTitle}</h2>
          <div className="w-16 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sadece en popüler 3 turu buraya koyalım */}
          {[t.todoCards[0], t.todoCards[1], t.todoCards[5]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(234,179,8,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-yellow-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ======================================= */}
      {/* 15. GOOGLE MAP (Gerçek ve İnteraktif) */}
      {/* ======================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Goreme Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25164.673238615436!2d34.80556272551525!3d38.64319409890886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a68817da3b2b3%3A0x6b4dc6ed65251db0!2zR8O2cmVtZSwgTmV2xZ9laGlyIE1lcmtlei9OZXZxZWhpcg!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </RevealOnScroll>
      </section>

      {/* 16. FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900">{t.faqTitle}</h2>
        </RevealOnScroll>
        <div className="space-y-4">
          {t.faqs.map((faq: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <details className="group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-md transition-all cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-lg text-slate-900 outline-none list-none">
                  {faq.q}
                  <span className="text-yellow-500 transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-slate-600 mt-4 font-medium">{faq.a}</p>
              </details>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 17. FINAL CTA */}
      <section className="py-32 bg-slate-900 text-center text-white rounded-t-[4rem]">
        <RevealOnScroll className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-yellow-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}