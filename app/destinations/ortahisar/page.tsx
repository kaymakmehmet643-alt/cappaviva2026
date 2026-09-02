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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - ORTAHİSAR
// =======================================================
const ORTAHISAR_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Authentic Rock Castle Village",
    heroDesc: "Centered around a massive 90-meter natural rock fortress, Ortahisar is the most authentic, quiet, and traditional village in Cappadocia.",
    btnExplore: "EXPLORE ORTAHISAR",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: Apr – Oct",
    statStay: "Rec. Stay: 1–2 Days",

    // 2. ABOUT
    aboutTitle: "About Ortahisar",
    aboutTags: ["📍 Traditional Village Life", "🏰 Giant Rock Fortress", "🍋 Natural Cold Storages", "🥾 Balkan Creek Valley", "📸 Uncrowded Panoramas", "🍷 Local Winemaking", "🧘 Quiet & Peaceful"],
    aboutText1: "Ortahisar means 'Middle Castle', perfectly describing its geographical location in the center of the Cappadocian towns. However, unlike the bustling tourist hubs, Ortahisar has beautifully preserved its traditional Turkish village lifestyle.",
    aboutText2: "One of the most unique features of Ortahisar is its 'Cold Storage Caves'. Hundreds of caves carved into the volcanic tuff are used to naturally store the Mediterranean's citrus fruits, mostly lemons and oranges, keeping the town agriculturally rich year-round.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Ortahisar",
    mustSeeCards: [
      { name: "Ortahisar Castle", desc: "A colossal 90-meter high rock formation. Climb to the top for a spectacular view of Mount Erciyes.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Balkan Creek Valley", desc: "A hidden gem for hikers featuring ancient rock-cut churches and lush greenery.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Pancarlik Valley", desc: "Famous for its pink and wavy rock formations and the historic Pancarlik Church.", img: "/images/valleys/pancarlik.jpg", link: "/valleys/pancarlik" },
      { name: "Ethnography Museum", desc: "A beautiful museum depicting the traditional life, culture, and crafts of Cappadocia.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Ali Reis Church", desc: "A lesser-known, deeply historic rock-cut church near the town center.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Natural Cold Storages", desc: "Caves where thousands of tons of lemons are stored without electricity.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do",
    todoCards: [
      { icon: "🏰", title: "Castle Summit Climb", price: 5, rating: "4.8", dur: "1 Hour", link: "#" },
      { icon: "🥾", title: "Balkan Valley Hike", price: 30, rating: "4.9", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🏍️", title: "ATV Safari", price: 35, rating: "4.8", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "🎈", title: "Hot Air Balloon", price: 160, rating: "4.9", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🌅", title: "Sunset View Tour", price: 50, rating: "4.8", dur: "3 Hours", link: "/tours/sunset" },
      { icon: "🐎", title: "Horse Riding", price: 40, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🔴", title: "Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Ortahisar Experience Guide",
    expList: [
      { num: "01", title: "Climb the Ortahisar Castle", desc: "The stairs are steep, but the view of Mount Erciyes from the peak is unparalleled." },
      { num: "02", title: "Stroll Through the Old Village", desc: "Get lost in the narrow, cobblestone streets where locals still live in traditional stone houses." },
      { num: "03", title: "Hike the Pancarlik Valley", desc: "Experience one of the quietest and most colorful hiking trails in Cappadocia." },
      { num: "04", title: "Visit the Lemon Storages", desc: "Ask a local to see the caves where thousands of lemons are kept naturally cool." },
      { num: "05", title: "Have a Traditional Turkish Tea", desc: "Sit at a local coffeehouse in the town square and chat with the friendly villagers." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Climb the Castle, visit the museum, and enjoy a quiet lunch." },
      { day: "1 Day", desc: "Castle + Valley Hiking in Pancarlik + Exploring the backstreets." },
      { day: "Stay Base", desc: "An excellent, quiet base for travelers who want to avoid tourist crowds." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots in Ortahisar",
    photoCards: [
      { name: "Castle Viewpoint", time: "Sunset", for: "Village Panorama", diff: "Easy", img: "/images/destinations/ortahisar.jpg" },
      { name: "Pancarlik Valley", time: "Morning", for: "Pink Rock Formations", diff: "Easy", img: "/images/valleys/pancarlik.jpg" },
      { name: "Cobblestone Streets", time: "Anytime", for: "Authentic Village Life", diff: "Easy", img: "/images/destinations/urgup.jpg" },
      { name: "Castle Summit", time: "Afternoon", for: "Mount Erciyes View", diff: "Hard", img: "/images/valleys/love-panorama.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["☕ Traditional Village Teahouses", "🍽️ Authentic Home-Cooked Meals", "🍷 Boutique Wineries", "🥩 Stone House Restaurants"],
    stayList: ["🏡 Boutique Stone Mansions", "💎 Restored Cave Hotels", "🧘 Quiet Village Retreats", "💰 Budget-Friendly Pensions", "🏰 Castle View Suites"],

    // 10. TRANSPORT
    transTitle: "How to Get to Ortahisar?",
    transList: ["✈️ From Kayseri Airport (ASR) - 1h 05m", "✈️ From Nevsehir Airport (NAV) - 40m", "🚌 Minibus from Urgup or Goreme - 10 mins", "🚕 Taxi from Goreme - 5 mins"],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Blooming fruit trees." },
      { name: "☀️ Summer", desc: "Jun-Aug: Cool breezes, uncrowded." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Harvest season, colorful." },
      { name: "❄️ Winter", desc: "Dec-Feb: The real quiet Anatolian winter." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "Ortahisar Castle is slightly less crowded than Uchisar Castle, making it a great alternative for sunset views.",
      "The stairs to the top of the castle are steep and narrow; definitely wear sturdy sneakers.",
      "Because it's a traditional village, the restaurants here offer some of the most authentic home-style Turkish food.",
      "Don't leave without tasting the local lemons and citrus fruits stored in the caves; they are famous nationwide.",
      "Balloons don't fly over the town, but the launch sites are just a 10-minute drive away."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Urgup", time: "5 min", link: "/destinations/urgup" },
      { name: "Goreme", time: "10 min", link: "/destinations/goreme" },
      { name: "Uchisar", time: "15 min", link: "/destinations/uchisar" },
      { name: "Cavusin", time: "15 min", link: "/destinations/cavusin" },
      { name: "Avanos", time: "25 min", link: "/destinations/avanos" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Popular Tours Including Ortahisar",

    // 16. FAQ
    faqTitle: "Ortahisar Frequently Asked Questions",
    faqs: [
      { q: "Is Ortahisar better than Uchisar?", a: "They are different. Uchisar is more luxurious and tourist-focused. Ortahisar is quieter, more authentic, and reflects true Turkish village life." },
      { q: "Can I climb Ortahisar Castle?", a: "Yes, it is open to the public. The climb involves steep stairs and offers an incredible panoramic view." },
      { q: "Is Ortahisar a good place to stay?", a: "If you want to escape the tourist crowds, experience real local culture, and still be only 10 minutes away from Goreme, it is the perfect place." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Ortahisar?",
    ctaDesc: "Discover the authentic heart of Cappadocia with Cappaviva.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın En Otantik Kalesi",
    heroDesc: "90 metre yüksekliğindeki devasa bir doğal kaya kalesinin etrafında şekillenen Ortahisar, Kapadokya'nın en sakin ve geleneksel köyüdür.",
    btnExplore: "ORTAHİSAR'I KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Nisan – Ekim",
    statStay: "Önerilen Süre: 1–2 Gün",

    // 2. ABOUT
    aboutTitle: "Ortahisar Hakkında",
    aboutTags: ["📍 Geleneksel Köy Hayatı", "🏰 Devasa Kaya Kalesi", "🍋 Doğal Soğuk Hava Depoları", "🥾 Balkan Deresi Vadisi", "📸 Sakin Manzaralar", "🍷 Yöresel Şaraplar", "🧘 Otantik ve Huzurlu"],
    aboutText1: "Ortahisar, isminden de anlaşılacağı üzere Kapadokya kasabalarının tam ortasında yer alır. Turistik karmaşadan uzak yapısıyla, geleneksel Türk köy yaşamını günümüzde en iyi koruyan bölgedir.",
    aboutText2: "Ortahisar'ın en büyük ekonomik gücü turizmden ziyade 'Soğuk Hava Depoları'dır. Tüf kayalara oyulmuş yüzlerce devasa mağara, Akdeniz'in narenciyelerini (özellikle limon ve portakal) doğal yollarla aylarca taze tutmak için kullanılır.",

    // 3. MUST SEE
    mustSeeTitle: "Ortahisar'da Keşfedin",
    mustSeeCards: [
      { name: "Ortahisar Kalesi", desc: "90 metre yüksekliğindeki dev kaya oluşumu. Zirveden Erciyes Dağı manzarası muazzamdır.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Balkan Deresi Vadisi", desc: "Eski kiliselerle dolu, yemyeşil doğasıyla yürüyüşçüler için gizli bir cennet.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Pancarlık Vadisi", desc: "Pembe renkli dalgalı kaya oluşumları ve tarihi Pancarlık Kilisesi ile meşhurdur.", img: "/images/valleys/pancarlik.jpg", link: "/valleys/pancarlik" },
      { name: "Etnografya Müzesi", desc: "Kapadokya'nın geleneksel köy yaşamını ve kültürünü anlatan harika bir müze.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Ali Reis Kilisesi", desc: "Merkeze çok yakın, daha az bilinen tarihi bir kaya kilisesi.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Soğuk Hava Depoları", desc: "Elektrik kullanılmadan binlerce ton limonun saklandığı devasa yeraltı mağaraları.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Ortahisar'da Yapılabilecekler",
    todoCards: [
      { icon: "🏰", title: "Kale Tırmanışı", price: 5, rating: "4.8", dur: "1 Saat", link: "#" },
      { icon: "🥾", title: "Pancarlık Yürüyüşü", price: 30, rating: "4.9", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🏍️", title: "ATV Safari", price: 35, rating: "4.8", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "🎈", title: "Sıcak Hava Balonu", price: 160, rating: "4.9", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🌅", title: "Gün Batımı Turu", price: 50, rating: "4.8", dur: "3 Saat", link: "/tours/sunset" },
      { icon: "🐎", title: "At Turu", price: 40, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🔴", title: "Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Ortahisar Deneyim Rehberi",
    expList: [
      { num: "01", title: "Ortahisar Kalesi'ne Tırmanın", desc: "Merdivenler diktir ama zirvedeki Erciyes Dağı manzarası tüm yorgunluğunuzu alır." },
      { num: "02", title: "Eski Köy Sokaklarında Kaybolun", desc: "Halkın hala geleneksel taş evlerde yaşadığı dar parke taşlı sokaklarda yürüyün." },
      { num: "03", title: "Pancarlık Vadisi'nde Yürüyüş Yapın", desc: "Kapadokya'nın en sessiz ve renkli vadi rotalarından birini deneyimleyin." },
      { num: "04", title: "Limon Mağaralarını Görün", desc: "Bölge halkına rica edip tonlarca narenciyenin doğal olarak soğutulduğu depoları görün." },
      { num: "05", title: "Köy Kahvesinde Çay İçin", desc: "Meydandaki kahvehaneye oturun ve samimi yerel halkla sohbet edin." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Ortahisar'a Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Kaleye tırmanış, müzeyi ziyaret ve meydanda sessiz bir öğle yemeği." },
      { day: "1 Gün", desc: "Kale + Pancarlık'ta Vadi Yürüyüşü + Arka sokakların keşfi." },
      { day: "Konaklama", desc: "Turist kalabalığından tamamen uzaklaşmak isteyenler için mükemmel bir sessiz üs." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Kale Seyir Terası", time: "Gün Batımı", for: "Köy Panoraması", diff: "Kolay", img: "/images/destinations/ortahisar.jpg" },
      { name: "Pancarlık Vadisi", time: "Sabah", for: "Pembe Kayalar", diff: "Kolay", img: "/images/valleys/pancarlik.jpg" },
      { name: "Taş Sokaklar", time: "Her Zaman", for: "Otantik Köy Hayatı", diff: "Kolay", img: "/images/destinations/urgup.jpg" },
      { name: "Kale Zirvesi", time: "Öğleden Sonra", for: "Erciyes Manzarası", diff: "Zor", img: "/images/valleys/love-panorama.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["☕ Geleneksel Köy Kahvehaneleri", "🍽️ Otantik Ev Yemekleri", "🍷 Butik Şarap Evleri", "🥩 Taş Konak Restoranları"],
    stayList: ["🏡 Butik Taş Konaklar", "💎 Restore Edilmiş Mağara Oteller", "🧘 Huzurlu Köy Pansiyonları", "💰 Uygun Fiyatlı Evler", "🏰 Kale Manzaralı Odalar"],

    // 10. TRANSPORT
    transTitle: "Ortahisar'a Nasıl Gidilir?",
    transList: ["✈️ Kayseri Havalimanından (ASR) - 1s 05dk", "✈️ Nevşehir Havalimanından (NAV) - 40dk", "🚌 Ürgüp veya Göreme'den Minibüs - 10dk", "🚕 Göreme'den Taksi ile - Sadece 5dk"],

    // 11. BEST TIME
    seasonTitle: "Ortahisar'ı Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Çiçek açan meyve ağaçları." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Serin rüzgarlar, kalabalıksız ortam." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Hasat zamanı ve harika renkler." },
      { name: "❄️ Kış", desc: "Ara-Şub: Gerçek bir Anadolu kışı sessizliği." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Ortahisar Kalesi, Uçhisar'a göre daha az kalabalıktır, gün batımını sakin izlemek için harika bir alternatiftir.",
      "Kalenin zirvesine çıkan merdivenler dar ve çok diktir; kesinlikle sağlam bir spor ayakkabı giyin.",
      "Hala gerçek bir köy olduğu için, Kapadokya'daki en otantik anne (ev) yemeklerini buradaki küçük esnaf lokantalarında bulabilirsiniz.",
      "Mağaralardan çıkan limonları ve portakalları mutlaka tadın, doğal soğutma sayesinde çok suludurlar.",
      "Balonlar tam köyün üzerinden uçmaz ancak Göreme'deki kalkış alanları arabayla sadece 10 dakika uzaklıktadır."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Ürgüp", time: "5 dk", link: "/destinations/urgup" },
      { name: "Göreme", time: "10 dk", link: "/destinations/goreme" },
      { name: "Uçhisar", time: "15 dk", link: "/destinations/uchisar" },
      { name: "Çavuşin", time: "15 dk", link: "/destinations/cavusin" },
      { name: "Avanos", time: "25 dk", link: "/destinations/avanos" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Ortahisar Çıkışlı Popüler Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Ortahisar mı yoksa Uçhisar mı daha iyi?", a: "İkisi farklıdır. Uçhisar daha lüks, premium ve turistik bir yapıdadır. Ortahisar ise çok daha otantik, sakin ve gerçek Anadolu köy yaşantısını yansıtır." },
      { q: "Ortahisar Kalesi'ne çıkmak tehlikeli mi?", a: "Hayır, ziyarete açıktır. Ancak çok dik ve dar merdivenleri vardır, yaşlılar veya yükseklik korkusu olanlar için zorlayıcı olabilir." },
      { q: "Konaklamak için Ortahisar iyi bir yer mi?", a: "Turist kalabalığından tamamen kaçmak, yerel kültürü yaşamak ve tüm aktivitelere sadece 10 dakika mesafede olmak istiyorsanız Kapadokya'nın en iyi yeridir." }
    ],

    // 17. CTA
    ctaTitle: "Ortahisar'ı Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın gizli ve otantik ruhunu Cappaviva ile deneyimle.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "El Auténtico Pueblo de Roca",
    heroDesc: "Centrado alrededor de una fortaleza de roca natural de 90 metros, Ortahisar es el pueblo más auténtico y tranquilo.",
    btnExplore: "EXPLORAR ORTAHISAR",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: Abr – Oct",
    statStay: "Estancia Rec: 1–2 Días",
    aboutTitle: "Sobre Ortahisar",
    aboutTags: ["📍 Vida de Pueblo", "🏰 Castillo de Roca", "🍋 Almacenes de Limones", "🥾 Valle Balkan", "📸 Panoramas Tranquilos", "🍷 Bodegas", "🧘 Paz y Silencio"],
    aboutText1: "Ortahisar significa 'Castillo del Medio'. A diferencia de los centros turísticos, conserva maravillosamente su estilo de vida tradicional.",
    aboutText2: "Su característica más singular son las 'Cuevas de Almacenamiento Frío', donde se guardan miles de toneladas de cítricos del Mediterráneo.",
    mustSeeTitle: "Descubre Ortahisar",
    mustSeeCards: [
      { name: "Castillo de Ortahisar", desc: "Formación rocosa de 90 metros con vistas al Monte Erciyes.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Valle Balkan", desc: "Joya escondida para excursionistas con iglesias antiguas.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Valle Pancarlik", desc: "Famoso por rocas rosadas onduladas.", img: "/images/valleys/pancarlik.jpg", link: "/valleys/pancarlik" },
      { name: "Museo Etnográfico", desc: "Muestra la vida y artesanía tradicional.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Iglesia Ali Reis", desc: "Iglesia histórica menos conocida.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Cuevas Frías", desc: "Donde se almacenan los limones sin electricidad.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🏰", title: "Subida al Castillo", price: 5, rating: "4.8", dur: "1 Hora", link: "#" },
      { icon: "🥾", title: "Caminata Valle Balkan", price: 30, rating: "4.9", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🏍️", title: "Safari ATV", price: 35, rating: "4.8", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.9", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "🎈", title: "Vuelo en Globo", price: 160, rating: "4.9", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🌅", title: "Tour Atardecer", price: 50, rating: "4.8", dur: "3 Horas", link: "/tours/sunset" },
      { icon: "🐎", title: "Paseo a Caballo", price: 40, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🔴", title: "Tour Rojo", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Sube al Castillo", desc: "La vista del Monte Erciyes no tiene paralelo." },
      { num: "02", title: "Pasea por el Pueblo", desc: "Piérdete en calles empedradas." },
      { num: "03", title: "Camina por Pancarlik", desc: "Sendero tranquilo y colorido." },
      { num: "04", title: "Cuevas de Limones", desc: "Mira cómo se enfrían naturalmente los cítricos." },
      { num: "05", title: "Té Turco", desc: "Relájate con los lugareños en la plaza." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Castillo y almuerzo tranquilo." },
      { day: "1 Día", desc: "Castillo + Caminata en Pancarlik + Pueblo." },
      { day: "Base de Estancia", desc: "Excelente base para evitar multitudes." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Mirador del Castillo", time: "Atardecer", for: "Panorama", diff: "Fácil", img: "/images/destinations/ortahisar.jpg" },
      { name: "Valle Pancarlik", time: "Mañana", for: "Rocas Rosadas", diff: "Fácil", img: "/images/valleys/pancarlik.jpg" },
      { name: "Calles de Piedra", time: "Cualquiera", for: "Autenticidad", diff: "Fácil", img: "/images/destinations/urgup.jpg" },
      { name: "Cima del Castillo", time: "Tarde", for: "Monte Erciyes", diff: "Difícil", img: "/images/valleys/love-panorama.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["☕ Casas de Té", "🍽️ Comidas Caseras", "🍷 Bodegas Boutique", "🥩 Casas de Piedra"],
    stayList: ["🏡 Mansiones Boutique", "💎 Hoteles Cueva", "🧘 Retiros Silenciosos", "💰 Pensiones Económicas", "🏰 Vistas al Castillo"],
    transTitle: "¿Cómo Llegar?",
    transList: ["✈️ Desde Kayseri (ASR) - 1h 05m", "✈️ Desde Nevsehir (NAV) - 40m", "🚌 Minibús desde Göreme - 10m", "🚕 Taxi desde Göreme - 5m"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Árboles frutales floreciendo." },
      { name: "☀️ Verano", desc: "Brisas frescas y poca gente." },
      { name: "🍂 Otoño", desc: "Época de cosecha." },
      { name: "❄️ Invierno", desc: "El verdadero invierno de Anatolia." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "Menos concurrido que Uchisar; genial para el atardecer.",
      "Usa zapatillas resistentes para las escaleras del castillo.",
      "Ofrece la comida casera turca más auténtica.",
      "No te vayas sin probar los limones de las cuevas.",
      "A solo 10 minutos de los sitios de despegue de globos."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Urgup", time: "5 min", link: "/destinations/urgup" },
      { name: "Göreme", time: "10 min", link: "/destinations/goreme" },
      { name: "Uchisar", time: "15 min", link: "/destinations/uchisar" },
      { name: "Cavusin", time: "15 min", link: "/destinations/cavusin" },
      { name: "Avanos", time: "25 min", link: "/destinations/avanos" }
    ],
    popToursTitle: "Tours Populares",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Mejor Ortahisar o Uchisar?", a: "Uchisar es más lujoso. Ortahisar es más auténtico y tranquilo." },
      { q: "¿Se puede subir al castillo?", a: "Sí, aunque las escaleras son empinadas." },
      { q: "¿Es un buen lugar para quedarse?", a: "Sí, si quieres paz y cultura local a solo 10 minutos de Göreme." }
    ],
    ctaTitle: "¿Listo para Explorar Ortahisar?",
    ctaDesc: "Descubre el corazón auténtico de Capadocia.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function OrtahisarPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = ORTAHISAR_DICT[aktifDil] || ORTAHISAR_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/ortahisar.jpg" alt="Ortahisar" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6">
            ORTAHİSAR
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
          {[t.todoCards[0], t.todoCards[4], t.todoCards[7]].map((card: any, idx: number) => (
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
          <h2 className="text-3xl font-black text-slate-900 mb-8">Ortahisar Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12582.493863481245!2d34.85501865!3d38.62174355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6f3b0e3532f3%3A0xe5a3c2005e0ec843!2zT3J0YWhpc2FyLCBOZXXFn2VoaXI!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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