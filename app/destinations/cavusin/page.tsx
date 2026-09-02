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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - ÇAVUŞİN
// =======================================================
const CAVUSIN_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Historic Ghost Village",
    heroDesc: "An abandoned rock-carved town, ancient churches, and the absolute best starting point for hiking the Red and Rose valleys.",
    btnExplore: "EXPLORE CAVUSIN",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: Apr – Oct",
    statStay: "Rec. Stay: Half to 1 Day",

    // 2. ABOUT
    aboutTitle: "About Cavusin",
    aboutTags: ["📍 The Ghost Village", "🏛️ Church of St. John", "🥾 Red & Rose Valley Gateway", "🏍️ ATV Safari Hub", "🐎 Horseback Riding Center", "📸 Dramatic Ruins", "🏺 Local Pottery"],
    aboutText1: "Cavusin is one of the oldest settlements in Cappadocia. Located midway between Goreme and Avanos, its most striking feature is the 'Old Cavusin Village'—a colossal rock face honeycombed with abandoned houses that look like a giant slice of Swiss cheese.",
    aboutText2: "The village was evacuated in the 1950s due to the danger of falling rocks. Today, this 'Ghost Village' stands as a dramatic monument to Cappadocian history. Cavusin is also deeply religious in its past, housing the 5th-century Church of St. John the Baptist, one of the oldest and largest rock-cut basilicas in the region.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Cavusin",
    mustSeeCards: [
      { name: "Old Cavusin (Ghost Village)", desc: "Hike up through the abandoned rock houses for a dramatic and historical experience.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Church of St. John the Baptist", desc: "A colossal 5th-century rock-cut basilica offering stunning views from its courtyard.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Nicephorus Phocas Church", desc: "Often called Cavusin Church, famous for its detailed frescoes of the Byzantine Emperor.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Red Valley (Kizilcukur)", desc: "Cavusin is the starting point for the spectacular Red Valley hiking trail.", img: "/images/valleys/red.jpg", link: "/valleys/red-valley" },
      { name: "Rose Valley (Gulludere)", desc: "A valley named for its rose-colored rocks, accessible directly from the village.", img: "/images/valleys/gulludere.jpg", link: "/valleys/gulludere" },
      { name: "Local Ceramic Workshops", desc: "Smaller and more intimate pottery studios compared to the large factories of Avanos.", img: "/images/museums/goreme.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do",
    todoCards: [
      { icon: "🥾", title: "Red & Rose Valley Hike", price: 30, rating: "4.9", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🏍️", title: "ATV Safari", price: 35, rating: "4.8", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🐎", title: "Horse Riding", price: 40, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "🎈", title: "Hot Air Balloon", price: 160, rating: "4.9", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🌅", title: "Sunset Tour", price: 50, rating: "4.8", dur: "3 Hours", link: "/tours/sunset" },
      { icon: "🏺", title: "Pottery Making", price: 20, rating: "4.7", dur: "1 Hour", link: "/tours/pottery" },
      { icon: "🔴", title: "Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Cavusin Experience Guide",
    expList: [
      { num: "01", title: "Hike the Ghost Village", desc: "Carefully climb the narrow paths of the abandoned village to reach the summit for a 360° view." },
      { num: "02", title: "Explore St. John the Baptist", desc: "Stand in the courtyard of this ancient church and imagine the monastic life of the 5th century." },
      { num: "03", title: "Ride an ATV into the Sunset", desc: "Cavusin is the undisputed hub for ATV tours heading into the Red and Sword Valleys." },
      { num: "04", title: "Trek the Rose Valley", desc: "Start from Cavusin and hike through the pink-hued fairy chimneys of Gulludere." },
      { num: "05", title: "Try the Local Gözleme", desc: "Sit in the village square and enjoy a traditional Turkish flatbread made by local women." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Perfect for climbing the old village and visiting the St. John Church." },
      { day: "1 Day", desc: "Old Village + Afternoon ATV Safari + Hiking into Red Valley." },
      { day: "Stay Base", desc: "Great for hikers and adventure lovers who want quick access to the valleys." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots in Cavusin",
    photoCards: [
      { name: "Ghost Village Facade", time: "Morning", for: "Dramatic Ruins", diff: "Easy", img: "/images/destinations/cavusin.jpg" },
      { name: "St. John's Courtyard", time: "Afternoon", for: "Historic Views", diff: "Medium", img: "/images/churches/yahya.jpg" },
      { name: "Rose Valley Entrance", time: "Sunset", for: "Pink Fairy Chimneys", diff: "Easy", img: "/images/valleys/gulludere.jpg" },
      { name: "Summit of Old Cavusin", time: "Sunset", for: "Balloon Views", diff: "Hard", img: "/images/valleys/love-panorama.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["☕ Traditional Tea Gardens", "🥞 Gozleme (Pancake) Houses", "🍽️ Local Family Restaurants", "🍷 Viewpoint Cafés"],
    stayList: ["🏨 Boutique Cave Hotels", "💰 Backpacker Hostels", "🏡 Authentic Stone Houses", "🌄 Valley View Suites", "🧘 Quiet Retreats"],

    // 10. TRANSPORT
    transTitle: "How to Get to Cavusin?",
    transList: ["🚌 Minibus from Goreme - Just 5 mins!", "🚶 Walking from Goreme - 30-40 mins via the dirt paths", "✈️ From Nevsehir Airport (NAV) - 40m", "✈️ From Kayseri Airport (ASR) - 1h 10m"],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Best time for valley hiking." },
      { name: "☀️ Summer", desc: "Jun-Aug: Hot, but great for sunset ATVs." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Perfect trekking weather." },
      { name: "❄️ Winter", desc: "Dec-Feb: The ruins look stunning under snow." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "The paths in the abandoned Ghost Village can be very slippery and crumbling. Wear shoes with excellent grip.",
      "Do not enter areas marked as dangerous; rockfalls are still a natural risk in the old town.",
      "Cavusin is the starting point for most ATV and Horse safaris, meaning the dirt roads nearby can get dusty around sunset.",
      "If you are hiking from Cavusin to Red Valley, bring plenty of water as there are limited facilities on the trail.",
      "Try the local 'Gözleme' (Turkish flatbread) in the village square; it's authentic and delicious."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Goreme", time: "5 min", link: "/destinations/goreme" },
      { name: "Avanos", time: "10 min", link: "/destinations/avanos" },
      { name: "Zelve", time: "10 min", link: "/museums/zelve" },
      { name: "Uchisar", time: "15 min", link: "/destinations/uchisar" },
      { name: "Urgup", time: "20 min", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Popular Tours from Cavusin",

    // 16. FAQ
    faqTitle: "Cavusin Frequently Asked Questions",
    faqs: [
      { q: "Is Cavusin safe to visit?", a: "Yes, the main pathways of the Old Village are open to tourists. Just stick to the designated paths and avoid climbing over unstable rocks." },
      { q: "Can I walk from Goreme to Cavusin?", a: "Yes! It's a beautiful, relatively flat 30-40 minute walk or a 5-minute drive from Goreme." },
      { q: "Is the Red Tour going to Cavusin?", a: "Yes, almost all Red Tour itineraries make a stop at the Cavusin Ghost Village and the local ancient churches." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Cavusin?",
    ctaDesc: "Discover the ghost village and adventure hub of Cappadocia.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Tarihi Hayalet Köyü",
    heroDesc: "Kaya düşmeleri nedeniyle terk edilmiş devasa eski köyü, antik kiliseleri ve macera turlarıyla Çavuşin, Kapadokya'nın gizli hazinesidir.",
    btnExplore: "ÇAVUŞİN'İ KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Nisan – Ekim",
    statStay: "Önerilen Süre: Yarım – 1 Gün",

    // 2. ABOUT
    aboutTitle: "Çavuşin Hakkında",
    aboutTags: ["📍 Hayalet Köy (Eski Çavuşin)", "🏛️ Vaftizci Yahya Kilisesi", "🥾 Kızıl ve Güllüdere Vadisi Girişi", "🏍️ ATV Safari Merkezi", "🐎 Atlı Safari Rotaları", "📸 Dramatik Yıkıntılar", "🏺 Çömlek Atölyeleri"],
    aboutText1: "Göreme ile Avanos arasında yer alan Çavuşin, bölgenin en eski yerleşimlerinden biridir. Kasabanın en çarpıcı özelliği, adeta dev bir İsviçre peynirini andıran, yüzlerce mağara evin oyulduğu devasa kaya kütlesi olan 'Eski Çavuşin Köyü'dür.",
    aboutText2: "Bu devasa kaya yerleşkesi, 1950'li yıllarda kaya düşmesi (heyelan) tehlikesi nedeniyle boşaltılmış ve halk ovaya taşınmıştır. Bugün bu 'Hayalet Köy', eşsiz fotoğraflar sunan dramatik bir anıttır. Ayrıca Çavuşin, 5. yüzyıldan kalma devasa Vaftizci Yahya Kilisesi ile Hristiyanlık tarihi için de çok kilit bir noktadır.",

    // 3. MUST SEE
    mustSeeTitle: "Çavuşin'de Keşfedin",
    mustSeeCards: [
      { name: "Eski Çavuşin (Hayalet Köy)", desc: "Terk edilmiş eski taş ve mağara evlerin arasında zirveye doğru tarihi bir tırmanış yapın.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Vaftizci Yahya Kilisesi", desc: "Bölgenin en eski ve en büyüklerinden biri olan, geniş avlulu 5. yüzyıl kilisesi.", img: "/images/churches/yahya.jpg", link: "/churches/vaftizci-yahya" },
      { name: "Çavuşin Kilisesi (Nicephorus Phocas)", desc: "Bizans İmparatoru'nun freskleriyle meşhur, yol kenarındaki tarihi kilise.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Kızılçukur Vadisi (Red Valley)", desc: "Kapadokya'nın en görkemli vadi yürüyüşünün ve gün batımının başladığı nokta.", img: "/images/valleys/red.jpg", link: "/valleys/red-valley" },
      { name: "Güllüdere Vadisi (Rose Valley)", desc: "Kızıl-gül rengi kayalarıyla meşhur, Çavuşin'den direkt giriş yapılan yürüyüş vadisi.", img: "/images/valleys/gulludere.jpg", link: "/valleys/gulludere" },
      { name: "Çavuşin Seramik Atölyeleri", desc: "Avanos'taki devasa fabrikalara kıyasla daha samimi ve küçük çömlek atölyeleri.", img: "/images/museums/goreme.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Çavuşin'de Yapılabilecekler",
    todoCards: [
      { icon: "🥾", title: "Kızıl & Güllüdere Yürüyüşü", price: 30, rating: "4.9", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🏍️", title: "ATV Safari", price: 35, rating: "4.8", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🐎", title: "Atlı Safari", price: 40, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "🎈", title: "Sıcak Hava Balonu", price: 160, rating: "4.9", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🌅", title: "Gün Batımı Turu", price: 50, rating: "4.8", dur: "3 Saat", link: "/tours/sunset" },
      { icon: "🏺", title: "Çömlek Yapımı", price: 20, rating: "4.7", dur: "1 Saat", link: "/tours/pottery" },
      { icon: "🔴", title: "Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Çavuşin Deneyim Rehberi",
    expList: [
      { num: "01", title: "Hayalet Köy'e Tırmanın", desc: "Terk edilmiş evlerin dar patikalarından zirveye çıkarak 360° Kapadokya manzarasını izleyin." },
      { num: "02", title: "Vaftizci Yahya Kilisesi'ni Bulun", desc: "Bu devasa yapının eski avlusunda durup 5. yüzyıl manastır hayatını hayal edin." },
      { num: "03", title: "Gün Batımına Doğru ATV Sürün", desc: "Kızıl ve Kılıçlar vadisine giden tozlu yollarda adrenalin dolu bir ATV turuna çıkın." },
      { num: "04", title: "Güllüdere'de Doğa Yürüyüşü Yapın", desc: "Pembe renkli peribacalarının arasından süzülerek harika bir trekking rotasını tamamlayın." },
      { num: "05", title: "Meydanda Gözleme Yiyin", desc: "Köy meydanındaki teyzelerin yaptığı orijinal el açması gözlemelerin tadına bakın." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Çavuşin'e Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Eski köyü tırmanmak ve Vaftizci Yahya Kilisesi'ni gezmek için ideal." },
      { day: "1 Gün", desc: "Eski Köy + Öğleden sonra ATV Safari + Kızıl Vadi yürüyüşü." },
      { day: "Konaklama", desc: "Doğa yürüyüşü (trekking) ve ATV/At turlarını sevenler için en stratejik başlangıç üssü." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Hayalet Köy Ön Cephesi", time: "Sabah", for: "Dramatik Yıkıntılar", diff: "Kolay", img: "/images/destinations/cavusin.jpg" },
      { name: "Vaftizci Yahya Avlusu", time: "Öğleden Sonra", for: "Tarihi Manzara", diff: "Orta", img: "/images/churches/yahya.jpg" },
      { name: "Güllüdere Vadisi Girişi", time: "Gün Batımı", for: "Pembe Peribacaları", diff: "Kolay", img: "/images/valleys/gulludere.jpg" },
      { name: "Eski Çavuşin Zirvesi", time: "Gün Batımı", for: "Balonlar ve Manzara", diff: "Zor", img: "/images/valleys/love-panorama.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["☕ Geleneksel Çay Bahçeleri", "🥞 El Açması Gözlemeciler", "🍽️ Yerel Aile Restoranları", "🍷 Manzaralı Kafeler"],
    stayList: ["🏨 Butik Mağara Oteller", "💰 Sırt Çantalı (Backpacker) Hostelleri", "🏡 Otantik Taş Evler", "🌄 Vadi Manzaralı Süitler", "🧘 Huzurlu Pansiyonlar"],

    // 10. TRANSPORT
    transTitle: "Çavuşin'e Nasıl Gidilir?",
    transList: ["🚌 Göreme'den Minibüs ile - Sadece 5 dakika!", "🚶 Göreme'den Yürüyerek - Toprak patikadan 30-40 dakika", "✈️ Nevşehir Havalimanından (NAV) - 40dk", "✈️ Kayseri Havalimanından (ASR) - 1s 10dk"],

    // 11. BEST TIME
    seasonTitle: "Çavuşin'i Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Vadi yürüyüşü için en iyi hava." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Sıcak, ancak ATV ve at turları için popüler." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Trekking için kusursuz sıcaklık." },
      { name: "❄️ Kış", desc: "Ara-Şub: Kar altındaki terk edilmiş köy efsane görünür." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Hayalet Köy'e tırmanırken patikalar çok kaygan olabilir; altı iyi tutunan sağlam bir spor ayakkabı giyin.",
      "Tehlikeli (Kaya Düşebilir) uyarısı olan alanlara kesinlikle girmeyin, eski yapılarda risk devam etmektedir.",
      "Bölgedeki ATV ve Atlı safari turlarının büyük çoğunluğu Çavuşin çevresinden başlar, bu yüzden gün batımına doğru yollar tozlu olabilir.",
      "Kızılçukur (Red Valley) vadisine yürüyüşe çıkacaksanız yanınıza bol su alın, vadide tesis sınırlıdır.",
      "Çavuşin meydanında çay ve gözleme molası vermeden kasabadan ayrılmayın."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Göreme", time: "5 dk", link: "/destinations/goreme" },
      { name: "Avanos", time: "10 dk", link: "/destinations/avanos" },
      { name: "Zelve", time: "10 dk", link: "/museums/zelve" },
      { name: "Uçhisar", time: "15 dk", link: "/destinations/uchisar" },
      { name: "Ürgüp", time: "20 dk", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Çavuşin Çıkışlı Popüler Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Çavuşin Hayalet Köyü gezmek güvenli mi?", a: "Evet, köyün ana yürüyüş rotaları turistlere açıktır. Sadece tabelalarla belirlenmiş güvenli yollarda kalmalı ve çürük kayaların üzerine çıkmamalısınız." },
      { q: "Göreme'den Çavuşin'e yürünebilir mi?", a: "Kesinlikle! Göreme'den Çavuşin'e toprak yollardan, peribacalarının arasından çok keyifli, düz bir rotada 30-40 dakikada yürüyebilirsiniz." },
      { q: "Kırmızı Tur (Red Tour) Çavuşin'e uğruyor mu?", a: "Evet, Kırmızı Tur rotalarının neredeyse tamamı Eski Çavuşin Köyü'nde mola verir." }
    ],

    // 17. CTA
    ctaTitle: "Çavuşin'i Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın hayalet köyünü ve macera merkezini Cappaviva ile deneyimle.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "El Histórico Pueblo Fantasma",
    heroDesc: "Un pueblo abandonado excavado en la roca, iglesias antiguas y el mejor punto de partida para los valles.",
    btnExplore: "EXPLORAR CAVUSIN",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: Abr – Oct",
    statStay: "Estancia Rec: Medio - 1 Día",
    aboutTitle: "Sobre Çavuşin",
    aboutTags: ["📍 El Pueblo Fantasma", "🏛️ Iglesia de San Juan", "🥾 Puerta a los Valles", "🏍️ Centro de ATV", "🐎 Paseos a Caballo", "📸 Ruinas Dramáticas", "🏺 Cerámica"],
    aboutText1: "Çavuşin es uno de los asentamientos más antiguos. Su característica más llamativa es el 'Viejo Çavuşin', una colosal pared de roca llena de casas abandonadas.",
    aboutText2: "El pueblo fue evacuado en los años 50 por peligro de desprendimiento de rocas. Hoy, este 'Pueblo Fantasma' es un monumento espectacular. También alberga la Iglesia de San Juan Bautista (siglo V).",
    mustSeeTitle: "Descubre Çavuşin",
    mustSeeCards: [
      { name: "Viejo Çavuşin (Pueblo Fantasma)", desc: "Sube por las casas de roca abandonadas para una experiencia dramática.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Iglesia de San Juan Bautista", desc: "Basílica del siglo V con impresionantes vistas desde su patio.", img: "/images/churches/yahya.jpg", link: "/churches/vaftizci-yahya" },
      { name: "Iglesia Nicephorus Phocas", desc: "Famosa por sus frescos del Emperador Bizantino.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Valle Rojo (Kizilcukur)", desc: "El punto de partida para este espectacular sendero.", img: "/images/valleys/red.jpg", link: "/valleys/red-valley" },
      { name: "Valle de las Rosas (Gulludere)", desc: "Accesible directamente desde el pueblo.", img: "/images/valleys/gulludere.jpg", link: "/valleys/gulludere" },
      { name: "Talleres de Cerámica", desc: "Estudios de cerámica más pequeños y acogedores que en Avanos.", img: "/images/museums/goreme.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🥾", title: "Caminata Valles Rojo y Rosa", price: 30, rating: "4.9", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🏍️", title: "Safari ATV", price: 35, rating: "4.8", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🐎", title: "Paseo a Caballo", price: 40, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.9", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "🎈", title: "Vuelo en Globo", price: 160, rating: "4.9", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🌅", title: "Tour Atardecer", price: 50, rating: "4.8", dur: "3 Horas", link: "/tours/sunset" },
      { icon: "🏺", title: "Taller de Cerámica", price: 20, rating: "4.7", dur: "1 Hora", link: "/tours/pottery" },
      { icon: "🔴", title: "Tour Rojo", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Sube al Pueblo Fantasma", desc: "Sube por los senderos estrechos hasta la cima." },
      { num: "02", title: "Explora San Juan Bautista", desc: "Imagina la vida monástica del siglo V." },
      { num: "03", title: "Safari en ATV", desc: "Çavuşin es el centro de los tours en cuatrimoto." },
      { num: "04", title: "Camina por el Valle de las Rosas", desc: "A través de las chimeneas de hadas de color rosa." },
      { num: "05", title: "Prueba el Gozleme Local", desc: "Pan plano tradicional turco en la plaza." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Pueblo viejo e iglesias." },
      { day: "1 Día", desc: "Pueblo Viejo + ATV + Senderismo." },
      { day: "Base de Estancia", desc: "Ideal para excursionistas y amantes de la aventura." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Fachada del Pueblo Fantasma", time: "Mañana", for: "Ruinas", diff: "Fácil", img: "/images/destinations/cavusin.jpg" },
      { name: "Patio de San Juan", time: "Tarde", for: "Historia", diff: "Medio", img: "/images/churches/yahya.jpg" },
      { name: "Entrada Valle Rosas", time: "Atardecer", for: "Chimeneas", diff: "Fácil", img: "/images/valleys/gulludere.jpg" },
      { name: "Cima del Viejo Çavuşin", time: "Atardecer", for: "Globos", diff: "Difícil", img: "/images/valleys/love-panorama.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["☕ Jardines de Té", "🥞 Casas de Gozleme", "🍽️ Restaurantes Familiares", "🍷 Cafés con Vista"],
    stayList: ["🏨 Hoteles Cueva", "💰 Hostales", "🏡 Casas de Piedra", "🌄 Suites con Vistas", "🧘 Retiros Tranquilos"],
    transTitle: "¿Cómo Llegar?",
    transList: ["🚌 Minibús desde Göreme - 5 mins", "🚶 Caminando desde Göreme - 30-40 mins", "✈️ Desde Nevsehir (NAV) - 40m", "✈️ Desde Kayseri (ASR) - 1h 10m"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Mejor clima para caminar." },
      { name: "☀️ Verano", desc: "Calor, genial para ATVs." },
      { name: "🍂 Otoño", desc: "Clima de trekking perfecto." },
      { name: "❄️ Invierno", desc: "Las ruinas bajo la nieve." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "Los caminos en el pueblo fantasma son resbaladizos.",
      "Evita las zonas marcadas como peligrosas.",
      "Hay mucho polvo de ATVs al atardecer.",
      "Lleva mucha agua si caminas a los valles.",
      "No te vayas sin probar el Gozleme."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Göreme", time: "5 min", link: "/destinations/goreme" },
      { name: "Avanos", time: "10 min", link: "/destinations/avanos" },
      { name: "Zelve", time: "10 min", link: "/museums/zelve" },
      { name: "Uchisar", time: "15 min", link: "/destinations/uchisar" },
      { name: "Urgup", time: "20 min", link: "/destinations/urgup" }
    ],
    popToursTitle: "Tours Populares",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es seguro visitar el pueblo fantasma?", a: "Sí, mantente en los caminos designados." },
      { q: "¿Puedo caminar desde Göreme?", a: "Sí, es un agradable paseo de 30-40 minutos." },
      { q: "¿El Tour Rojo visita Çavuşin?", a: "Sí, la mayoría hacen una parada aquí." }
    ],
    ctaTitle: "¿Listo para Explorar Çavuşin?",
    ctaDesc: "Descubre el pueblo fantasma de Capadocia.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function CavusinPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = CAVUSIN_DICT[aktifDil] || CAVUSIN_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/cavusin.jpg" alt="Cavusin" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6">
            ÇAVUŞİN
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

      {/* 2. ABOUT */}
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-yellow-500 pl-4">
              {t.aboutText2}
            </p>
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

      {/* 5. MUST DO (Editorial Guide) */}
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
            VIEW TRAVEL PLANS &rarr;
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
                      <p>Focus: <span className="text-slate-900">{spot.for}</span></p>
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
          {[t.todoCards[0], t.todoCards[1], t.todoCards[7]].map((card: any, idx: number) => (
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

      {/* 15. GOOGLE MAP */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Cavusin Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12574.63665796245!2d34.8340333!3d38.6713219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a67e411ba7ec3%3A0xe5a2ebed10c52bb!2zw4dhdnXFn2luLCBOZXXFn2VoaXI!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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