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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - UÇHİSAR
// =======================================================
const UCHISAR_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Highest Point of Cappadocia",
    heroDesc: "Towering over the region with its massive rock castle, Uchisar is the peak of panoramic views and luxury cave living.",
    btnExplore: "EXPLORE UCHISAR",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: Apr – Oct",
    statStay: "Rec. Stay: 1–2 Days",

    // 2. ABOUT
    aboutTitle: "About Uchisar",
    aboutTags: ["📍 Highest Viewpoint", "🏰 Historic Rock Fortress", "💎 Luxury Cave Hotels", "🕊️ Pigeon Valley", "📸 Sunset Panoramas", "🍷 Local Wineries", "🧘 Quiet & Exclusive"],
    aboutText1: "Uchisar is famous for the Uchisar Castle, a giant volcanic rock formation that served as the main defense fortress of the region during the Roman and Byzantine periods.",
    aboutText2: "Today, it has transformed into the most exclusive and luxurious neighborhood in Cappadocia. Away from the dense crowds of Goreme, it offers high-end boutique hotels, fine dining, and unmatched panoramic views of Mount Erciyes and the fairy chimneys.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Uchisar",
    mustSeeCards: [
      { name: "Uchisar Castle", desc: "The highest peak in Cappadocia. Climb to the top for a 360-degree view.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Pigeon Valley", desc: "A stunning hiking trail connecting Uchisar to Goreme, filled with ancient pigeon houses.", img: "/images/valleys/pigeon.jpg", link: "/valleys/pigeon-valley" },
      { name: "Cevizli", desc: "A lesser-known area on the northern slope of the castle with fairy chimneys.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Tigraz Castle", desc: "The second largest rock fortress in the town, extending deep underground.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Evil Eye Tree", desc: "The famous tree adorned with blue evil eyes, overlooking Pigeon Valley.", img: "/images/valleys/pigeon.jpg", link: "#" },
      { name: "Local Wineries", desc: "Uchisar is home to prestigious local wine tasting rooms like Kocabag.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do in Uchisar",
    todoCards: [
      { icon: "🏰", title: "Castle Summit Climb", price: 5, rating: "4.8", dur: "1 Hour", link: "#" },
      { icon: "🥾", title: "Pigeon Valley Hike", price: 30, rating: "4.9", dur: "2 Hours", link: "/tours/hiking" },
      { icon: "🍷", title: "Wine Tasting", price: 25, rating: "4.7", dur: "1.5 Hours", link: "#" },
      { icon: "🚙", title: "Private Tour (VIP)", price: 120, rating: "5.0", dur: "Full Day", link: "/tours/private" },
      { icon: "🎈", title: "Hot Air Balloon", price: 160, rating: "4.9", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🌅", title: "Sunset View Tour", price: 50, rating: "4.8", dur: "3 Hours", link: "/tours/sunset" },
      { icon: "🐎", title: "Horse Riding", price: 40, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🔴", title: "Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Uchisar Experience Guide",
    expList: [
      { num: "01", title: "Watch the sunset from the Castle", desc: "See the entire Cappadocia turn red from the highest point." },
      { num: "02", title: "Hike down Pigeon Valley to Goreme", desc: "A beautiful 4km downhill trek starting right from Uchisar." },
      { num: "03", title: "Stay in a Luxury Cave Suite", desc: "Uchisar has the most premium and authentic cave accommodations." },
      { num: "04", title: "Taste Cappadocian Wines", desc: "Visit the local wine houses and taste the region's volcanic soil grapes." },
      { num: "05", title: "Take photos at the Evil Eye Tree", desc: "The most iconic photo spot with Pigeon Valley in the background." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Climb the Castle, take photos at Pigeon Valley." },
      { day: "1 Day", desc: "Castle + Valley Hike + Wine Tasting + Sunset." },
      { day: "Stay Base", desc: "Perfect quiet base for a 3-4 day Cappadocia trip." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots in Uchisar",
    photoCards: [
      { name: "Castle Summit", time: "Sunset", for: "360° Panorama", diff: "Medium", img: "/images/destinations/uchisar.jpg" },
      { name: "Pigeon Valley Tree", time: "Morning", for: "Evil Eyes & Valley", diff: "Easy", img: "/images/valleys/pigeon.jpg" },
      { name: "Cevizli Viewpoint", time: "Anytime", for: "Castle Backdrop", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "Luxury Hotel Terraces", time: "Breakfast", for: "Erciyes Mountain View", diff: "Easy", img: "/images/destinations/goreme.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["🍷 Fine Dining Restaurants", "🍇 Local Wineries", "☕ Viewpoint Cafés", "🍽️ Traditional Stone Houses"],
    stayList: ["💎 Ultra-Luxury Cave Resorts", "🏨 Boutique Stone Mansions", "🧘 Quiet & Romantic Retreats", "🗻 Mount Erciyes View Rooms", "👑 Honeymoon Suites"],

    // 10. TRANSPORT
    transTitle: "How to Get to Uchisar?",
    transList: ["✈️ From Nevsehir Airport (NAV) - 35m", "✈️ From Kayseri Airport (ASR) - 1h 10m", "🚌 Minibus (Dolmuş) from Goreme - 10m", "🚕 Taxi from Goreme - 5 mins"],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Breezy & green." },
      { name: "☀️ Summer", desc: "Jun-Aug: Cooler than Goreme." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Ideal for hiking." },
      { name: "❄️ Winter", desc: "Dec-Feb: Castle under snow." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "The Museum Pass is NOT valid at Uchisar Castle (Municipal fee applies).",
      "The castle summit is very windy; hold onto your hats and phones!",
      "It is an uphill town; wear comfortable shoes.",
      "If hiking Pigeon Valley, it is much easier to start from Uchisar and walk downhill to Goreme.",
      "Book fine dining restaurants in advance, especially for sunset."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Goreme", time: "5-10 min", link: "/destinations/goreme" },
      { name: "Ortahisar", time: "10-15 min", link: "/destinations/ortahisar" },
      { name: "Cavusin", time: "15 min", link: "/destinations/cavusin" },
      { name: "Avanos", time: "20 min", link: "/destinations/avanos" },
      { name: "Urgup", time: "20 min", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Popular Tours Including Uchisar",

    // 16. FAQ
    faqTitle: "Uchisar Frequently Asked Questions",
    faqs: [
      { q: "Is it better to stay in Uchisar or Goreme?", a: "Uchisar is quieter, more luxurious, and offers the best panoramic views. Goreme is livelier, closer to the balloon takeoff areas, and better for budget travelers." },
      { q: "Is it hard to climb Uchisar Castle?", a: "There are many stairs to reach the top. It requires some effort but there are resting spots. It might be challenging for those with mobility issues." },
      { q: "Can I watch hot air balloons from Uchisar?", a: "Yes, you can see them from a distance. However, since the balloons take off near Goreme/Cavusin, they appear smaller from Uchisar compared to Goreme." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Uchisar?",
    ctaDesc: "Discover the peak of Cappadocia with Cappaviva.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Zirvesi",
    heroDesc: "Devasa kaya kalesiyle bölgeye hakim olan Uçhisar, panoramik manzaraların ve lüks mağara otel konaklamasının zirve noktasıdır.",
    btnExplore: "UÇHİSAR'I KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Nisan – Ekim",
    statStay: "Önerilen Süre: 1–2 Gün",

    // 2. ABOUT
    aboutTitle: "Uçhisar Hakkında",
    aboutTags: ["📍 En Yüksek Nokta", "🏰 Tarihi Kaya Kalesi", "💎 Lüks Mağara Oteller", "🕊️ Güvercinlik Vadisi", "📸 Gün Batımı Manzarası", "🍷 Yerel Şarap Evleri", "🧘 Sessiz & Elit"],
    aboutText1: "Uchisar, Roma ve Bizans dönemlerinde bölgenin ana savunma kalesi olarak hizmet veren devasa bir volkanik kaya oluşumu olan Uçhisar Kalesi ile ünlüdür.",
    aboutText2: "Günümüzde Kapadokya'nın en seçkin ve lüks bölgesi haline gelmiştir. Göreme'nin kalabalığından uzakta; üst düzey butik oteller, şık restoranlar ve Erciyes Dağı'nı da içine alan eşsiz panoramik manzaralar sunar.",

    // 3. MUST SEE
    mustSeeTitle: "Uçhisar'da Keşfedin",
    mustSeeCards: [
      { name: "Uçhisar Kalesi", desc: "Kapadokya'nın en yüksek zirvesi. 360 derece manzara için zirveye tırmanın.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Güvercinlik Vadisi", desc: "Antik güvercinliklerle dolu, Uçhisar'dan Göreme'ye uzanan harika bir yürüyüş rotası.", img: "/images/valleys/pigeon.jpg", link: "/valleys/pigeon-valley" },
      { name: "Cevizli Mevkii", desc: "Kalenin kuzey yamacında yer alan, peribacalarıyla dolu daha sakin bir alan.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Tığraz Kalesi", desc: "Kasabanın yeraltına doğru uzanan ikinci büyük kaya kalesi.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Nazar Boncuklu Ağaç", desc: "Güvercinlik Vadisi manzarasına karşı konumlanmış o meşhur fotoğraf noktası.", img: "/images/valleys/pigeon.jpg", link: "#" },
      { name: "Yerel Şarap Evleri", desc: "Kocabağ gibi bölgenin ödüllü şaraplarını tadabileceğiniz nezih mekanlar.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Uçhisar'da Yapılabilecekler",
    todoCards: [
      { icon: "🏰", title: "Kale Tırmanışı", price: 5, rating: "4.8", dur: "1 Saat", link: "#" },
      { icon: "🥾", title: "Güvercinlik Yürüyüşü", price: 30, rating: "4.9", dur: "2 Saat", link: "/tours/hiking" },
      { icon: "🍷", title: "Şarap Tadımı", price: 25, rating: "4.7", dur: "1.5 Saat", link: "#" },
      { icon: "🚙", title: "VIP Özel Tur", price: 120, rating: "5.0", dur: "Tam Gün", link: "/tours/private" },
      { icon: "🎈", title: "Sıcak Hava Balonu", price: 160, rating: "4.9", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🌅", title: "Gün Batımı Turu", price: 50, rating: "4.8", dur: "3 Saat", link: "/tours/sunset" },
      { icon: "🐎", title: "At Turu", price: 40, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🔴", title: "Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Uçhisar Deneyim Rehberi",
    expList: [
      { num: "01", title: "Kaleden gün batımını izleyin", desc: "Tüm Kapadokya'nın kızıla bürünmesini en yüksek noktadan seyredin." },
      { num: "02", title: "Güvercinlik Vadisi'nden Göreme'ye yürüyün", desc: "Uçhisar'dan başlayıp yokuş aşağı inen 4 km'lik harika bir doğa yürüyüşü yapın." },
      { num: "03", title: "Lüks bir mağara otelde konaklayın", desc: "Kapadokya'nın en premium ve elit konaklama deneyimini yaşayın." },
      { num: "04", title: "Kapadokya şaraplarını tadın", desc: "Volkanik topraklarda yetişen üzümlerin tadına yerel şarap evlerinde bakın." },
      { num: "05", title: "Nazar Boncuklu Ağaç'ta fotoğraf çekilin", desc: "Arkanıza Güvercinlik Vadisi'ni alarak o ikonik pozu yakalayın." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Uçhisar'a Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Kaleye tırmanış ve Güvercinlik Vadisi manzarası." },
      { day: "1 Gün", desc: "Kale + Vadi Yürüyüşü + Şarap Tadımı + Gün Batımı yemeği." },
      { day: "Konaklama", desc: "3-4 günlük bir Kapadokya gezisi için en elit ve sessiz merkez." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Kale Zirvesi", time: "Gün Batımı", for: "360° Panoramik Manzara", diff: "Orta", img: "/images/destinations/uchisar.jpg" },
      { name: "Güvercinlik Vadisi", time: "Sabah", for: "Nazar Boncuklu Ağaç", diff: "Kolay", img: "/images/valleys/pigeon.jpg" },
      { name: "Cevizli Mevkii", time: "Her Zaman", for: "Arka Planda Kale", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Otel Terasları", time: "Kahvaltı", for: "Erciyes Dağı Manzarası", diff: "Kolay", img: "/images/destinations/goreme.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["🍷 Fine Dining (Lüks) Restoranlar", "🍇 Şarap Evleri", "☕ Manzaralı Kafeler", "🍽️ Geleneksel Taş Konaklar"],
    stayList: ["💎 Ultra-Lüks Cave Resort'lar", "🏨 Butik Taş Konaklar", "🧘 Sessiz ve Romantik Oteller", "🗻 Erciyes Manzaralı Odalar", "👑 Balayı Süitleri"],

    // 10. TRANSPORT
    transTitle: "Uçhisar'a Nasıl Gidilir?",
    transList: ["✈️ Nevşehir Havalimanından (NAV) - 35dk", "✈️ Kayseri Havalimanından (ASR) - 1s 10dk", "🚌 Göreme'den Minibüs (Dolmuş) - 10dk", "🚕 Göreme'den Taksi ile - 5dk"],

    // 11. BEST TIME
    seasonTitle: "Uçhisar'ı Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Yemyeşil ve esintili." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Göreme'ye göre daha serindir." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Vadi yürüyüşü için ideal." },
      { name: "❄️ Kış", desc: "Ara-Şub: Karlar altında dev bir şato." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Uçhisar Kalesi'nde Müzekart GEÇMEZ (Belediyeye ait cüzi bir giriş ücreti vardır).",
      "Kalenin zirvesi çok rüzgarlıdır; şapkanıza ve telefonunuza dikkat edin!",
      "Yokuşlu bir kasabadır, mutlaka rahat ayakkabı giyin.",
      "Güvercinlik Vadisi'ni yürüyecekseniz, Uçhisar'dan başlayıp Göreme'ye doğru (yokuş aşağı) yürümek çok daha kolaydır.",
      "Özellikle gün batımı saatleri için lüks restoranlara önceden rezervasyon yaptırın."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Göreme", time: "5-10 dk", link: "/destinations/goreme" },
      { name: "Ortahisar", time: "10-15 dk", link: "/destinations/ortahisar" },
      { name: "Çavuşin", time: "15 dk", link: "/destinations/cavusin" },
      { name: "Avanos", time: "20 dk", link: "/destinations/avanos" },
      { name: "Ürgüp", time: "20 dk", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Uçhisar'ı Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Konaklamak için Göreme mi, Uçhisar mı daha iyi?", a: "Uchisar çok daha lüks, sessiz ve manzaralıdır. Dinlenmek ve lüks arayanlar için en iyisidir. Göreme ise daha hareketli ve merkeze yakındır." },
      { q: "Uçhisar Kalesi'ne çıkmak zor mu?", a: "Zirveye çıkmak için epeyce merdiven tırmanmanız gerekir. Yorucudur ancak yol boyunca dinlenme alanları vardır. Manzara kesinlikle buna değer." },
      { q: "Uçhisar'dan balonlar izlenebilir mi?", a: "Evet, uzaklardan izlenebilir. Ancak balonlar Göreme ve Çavuşin civarından kalktığı için, Göreme'ye kıyasla daha küçük görünürler." }
    ],

    // 17. CTA
    ctaTitle: "Uçhisar'ı Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın zirvesini Cappaviva ayrıcalığıyla deneyimle.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "El Punto Más Alto de Capadocia",
    heroDesc: "Con su enorme castillo de roca, Uçhisar es la cima de las vistas panorámicas y la vida de lujo en cuevas.",
    btnExplore: "EXPLORAR UCHISAR",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: Abr – Oct",
    statStay: "Estancia Rec: 1–2 Días",
    aboutTitle: "Sobre Uçhisar",
    aboutTags: ["📍 Mirador Más Alto", "🏰 Fortaleza Histórica", "💎 Hoteles de Lujo", "🕊️ Valle de las Palomas", "📸 Atardeceres", "🍷 Bodegas Locales", "🧘 Tranquilo y Exclusivo"],
    aboutText1: "Uçhisar es famoso por su Castillo, una gigantesca formación rocosa que sirvió como principal fortaleza de defensa.",
    aboutText2: "Hoy es el barrio más exclusivo y lujoso, lejos de las multitudes, ofreciendo hoteles boutique de alta gama y vistas inigualables.",
    mustSeeTitle: "Descubre Uçhisar",
    mustSeeCards: [
      { name: "Castillo de Uçhisar", desc: "El pico más alto de Capadocia.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Valle de las Palomas", desc: "Sendero lleno de antiguos palomares.", img: "/images/valleys/pigeon.jpg", link: "/valleys/pigeon-valley" },
      { name: "Cevizli", desc: "Área tranquila con chimeneas de hadas.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Castillo Tigraz", desc: "Segunda fortaleza de roca en el pueblo.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Árbol del Mal de Ojo", desc: "Punto de fotos sobre el Valle de las Palomas.", img: "/images/valleys/pigeon.jpg", link: "#" },
      { name: "Bodegas Locales", desc: "Salas de degustación de vinos.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🏰", title: "Subida al Castillo", price: 5, rating: "4.8", dur: "1 Hora", link: "#" },
      { icon: "🥾", title: "Valle de las Palomas", price: 30, rating: "4.9", dur: "2 Horas", link: "/tours/hiking" },
      { icon: "🍷", title: "Cata de Vinos", price: 25, rating: "4.7", dur: "1.5 Horas", link: "#" },
      { icon: "🚙", title: "Tour Privado VIP", price: 120, rating: "5.0", dur: "Día Completo", link: "/tours/private" },
      { icon: "🎈", title: "Vuelo en Globo", price: 160, rating: "4.9", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🌅", title: "Tour Atardecer", price: 50, rating: "4.8", dur: "3 Horas", link: "/tours/sunset" },
      { icon: "🐎", title: "Paseo a Caballo", price: 40, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🔴", title: "Tour Rojo", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Atardecer en el Castillo", desc: "Mira toda Capadocia volverse roja." },
      { num: "02", title: "Camina hasta Göreme", desc: "Caminata cuesta abajo por el Valle de las Palomas." },
      { num: "03", title: "Duerme en una Suite de Lujo", desc: "Uçhisar tiene los hoteles cueva más premium." },
      { num: "04", title: "Cata Vinos de Capadocia", desc: "Prueba las uvas de suelo volcánico." },
      { num: "05", title: "Fotos en el Árbol del Mal de Ojo", desc: "El punto fotográfico más icónico." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Castillo y Valle de las Palomas." },
      { day: "1 Día", desc: "Castillo + Senderismo + Vinos." },
      { day: "Base de Estancia", desc: "Base perfecta y tranquila para 3-4 días." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Cima del Castillo", time: "Atardecer", for: "Panorama 360°", diff: "Medio", img: "/images/destinations/uchisar.jpg" },
      { name: "Árbol del Valle", time: "Mañana", for: "Mal de Ojo", diff: "Fácil", img: "/images/valleys/pigeon.jpg" },
      { name: "Mirador Cevizli", time: "Cualquiera", for: "Fondo del Castillo", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Terrazas de Lujo", time: "Desayuno", for: "Monte Erciyes", diff: "Fácil", img: "/images/destinations/goreme.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["🍷 Alta Cocina", "🍇 Bodegas Locales", "☕ Cafeterías Panorámicas", "🍽️ Casas de Piedra Tradicionales"],
    stayList: ["💎 Resorts Ultra-Lujo", "🏨 Mansiones Boutique", "🧘 Retiros Románticos", "🗻 Habitaciones con Vistas", "👑 Suites de Luna de Miel"],
    transTitle: "¿Cómo Llegar?",
    transList: ["✈️ Desde Nevsehir (NAV) - 35m", "✈️ Desde Kayseri (ASR) - 1h 10m", "🚌 Minibús desde Göreme - 10m", "🚕 Taxi desde Göreme - 5m"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Clima perfecto y verde." },
      { name: "☀️ Verano", desc: "Más fresco que Göreme." },
      { name: "🍂 Otoño", desc: "Ideal para caminatas." },
      { name: "❄️ Invierno", desc: "Castillo bajo la nieve." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "El Museum Pass NO es válido en el Castillo.",
      "La cima hace mucho viento; ¡sujeta tu sombrero!",
      "Usa zapatos cómodos para las cuestas.",
      "Camina cuesta abajo hacia Göreme.",
      "Reserva restaurantes finos con antelación."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Göreme", time: "5-10 min", link: "/destinations/goreme" },
      { name: "Ortahisar", time: "10-15 min", link: "/destinations/ortahisar" },
      { name: "Cavusin", time: "15 min", link: "/destinations/cavusin" },
      { name: "Avanos", time: "20 min", link: "/destinations/avanos" },
      { name: "Urgup", time: "20 min", link: "/destinations/urgup" }
    ],
    popToursTitle: "Tours Populares",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Mejor Uçhisar o Göreme?", a: "Uçhisar es más lujoso y tranquilo. Göreme es más animado." },
      { q: "¿Es difícil subir al castillo?", a: "Hay muchas escaleras, requiere esfuerzo pero vale la pena." },
      { q: "¿Puedo ver globos desde aquí?", a: "Sí, a lo lejos, pero se ven más pequeños que en Göreme." }
    ],
    ctaTitle: "¿Listo para Explorar?",
    ctaDesc: "Descubre la cima de Capadocia.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function UchisarPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = UCHISAR_DICT[aktifDil] || UCHISAR_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* ======================================= */}
      {/* 1. HERO - İlk Ekran */}
      {/* ======================================= */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/uchisar.jpg" alt="Uchisar Castle" fill priority unoptimized className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-7xl md:text-[9rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6">
            UÇHİSAR
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
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
            <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wider">📍 {t.statLoc}</span>
            <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wider">☀️ {t.statTime}</span>
            <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wider">⏱ {t.statStay}</span>
          </div>
        </RevealOnScroll>
      </section>

      {/* ======================================= */}
      {/* 2. ABOUT (Hakkında) */}
      {/* ======================================= */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.aboutTitle}</h2>
          <div className="w-16 h-1.5 bg-yellow-500 mt-6 rounded-full"></div>
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
            <p className="text-xl text-slate-700 font-bold leading-relaxed mb-6">
              {t.aboutText1}
            </p>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {t.aboutText2}
            </p>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 3. MUST SEE (Kart Sistemi) */}
      {/* ======================================= */}
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

      {/* ======================================= */}
      {/* 4. THINGS TO DO (Acente Satış) */}
      {/* ======================================= */}
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
                
                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex justify-between text-xs font-bold text-slate-500">
                    <span>⭐ {card.rating}</span>
                    <span>⏱ {card.dur}</span>
                  </div>
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

      {/* ======================================= */}
      {/* 5. MUST DO (Dergi Konsepti) */}
      {/* ======================================= */}
      <section className="py-24 bg-yellow-50 border-y border-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-yellow-500 mt-6 rounded-full mb-8"></div>
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

      {/* ======================================= */}
      {/* 6. HOW MANY DAYS */}
      {/* ======================================= */}
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
            VIEW TRAVEL PLANS &rarr;
          </Link>
        </RevealOnScroll>
      </section>

      {/* ======================================= */}
      {/* 7. PHOTO SPOTS */}
      {/* ======================================= */}
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
                      <p>View: <span className="text-slate-900">{spot.for}</span></p>
                      <p>Difficulty: <span className="text-slate-900">{spot.diff}</span></p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 8 & 9. EAT & STAY */}
      {/* ======================================= */}
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

      {/* ======================================= */}
      {/* 10. TRANSPORT */}
      {/* ======================================= */}
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

      {/* ======================================= */}
      {/* 11 & 12. SEASONS & TIPS */}
      {/* ======================================= */}
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">💡 {t.tipsTitle}</h2>
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

      {/* ======================================= */}
      {/* 13. EXPLORE NEARBY */}
      {/* ======================================= */}
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

      {/* ======================================= */}
      {/* 14. POPULAR TOURS */}
      {/* ======================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.popToursTitle}</h2>
          <div className="w-16 h-1.5 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[7], t.todoCards[3]].map((card: any, idx: number) => (
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
      {/* 15. GOOGLE MAP */}
      {/* ======================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Uchisar Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12583.568165584517!2d34.79383561570775!3d38.62947118002621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a68c07e05e5d3%3A0xc395eb730e2fdf21!2zVcOnSGlzYXIgS2FsZXNp!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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

      {/* ======================================= */}
      {/* 16. FAQ */}
      {/* ======================================= */}
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

      {/* ======================================= */}
      {/* 17. FINAL CTA */}
      {/* ======================================= */}
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