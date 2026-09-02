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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - AVANOS
// =======================================================
const AVANOS_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Town of Pottery & Art",
    heroDesc: "Divided by the Red River, Avanos is the artistic soul of Cappadocia, famous for its ancient terracotta workshops and riverside charm.",
    btnExplore: "EXPLORE AVANOS",
    btnBookHero: "BOOK A WORKSHOP",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: May – Sep",
    statStay: "Rec. Stay: 1–2 Days",

    // 2. ABOUT
    aboutTitle: "About Avanos",
    aboutTags: ["📍 The Riverside Town", "🏺 Terracotta & Pottery", "🌊 The Red River (Kızılırmak)", "🌉 Swinging Bridge", "🛶 Gondola Rides", "🏛️ Zelve & Pasabag", "🌿 Lush & Relaxing"],
    aboutText1: "Unlike the dry, lunar landscapes of the rest of Cappadocia, Avanos is full of life and greenery, thanks to the Kızılırmak (Red River) flowing right through its center. It is the longest river in Turkey and the lifeblood of the town.",
    aboutText2: "For over 4,000 years, since the Hittite period, locals have been gathering the red clay from the riverbanks to create exquisite pottery. Today, Avanos is a vibrant artisan hub where you can still watch masters shape clay on foot-powered wheels and even try it yourself.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Avanos",
    mustSeeCards: [
      { name: "Swinging Bridge", desc: "The iconic wooden suspension bridge over the Red River. A must-cross for every visitor.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Pottery Workshops", desc: "Step into ancient cave studios to watch masters at work and buy authentic souvenirs.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Hair Museum (Chez Galip)", desc: "One of the world's most bizarre museums, featuring thousands of locks of hair.", img: "/images/museums/hair.jpg", link: "/museums/hair-museum" },
      { name: "Pasabag (Monks Valley)", desc: "Located in the Avanos district, home to the most striking multi-headed fairy chimneys.", img: "/images/valleys/pasabag.jpg", link: "/valleys/pasabag" },
      { name: "Zelve Open Air Museum", desc: "An incredible abandoned cave town spread across three valleys.", img: "/images/museums/zelve.jpg", link: "/museums/zelve" },
      { name: "Sarihan Caravanserai", desc: "A magnificent 13th-century Seljuk inn, now hosting mystical Whirling Dervish ceremonies.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do in Avanos",
    todoCards: [
      { icon: "🏺", title: "Pottery Workshop", price: 20, rating: "4.9", dur: "1.5 Hours", link: "/tours/pottery" },
      { icon: "🛶", title: "River Gondola Ride", price: 15, rating: "4.7", dur: "45 Mins", link: "#" },
      { icon: "🚤", title: "Jet Boat Safari", price: 35, rating: "4.8", dur: "30 Mins", link: "#" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.9", dur: "Full Day", link: "/tours/red-tour" },
      { icon: "🏇", title: "Riverside Horse Riding", price: 40, rating: "4.8", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🌌", title: "Whirling Dervishes", price: 35, rating: "4.9", dur: "1 Hour", link: "/tours/sema" },
      { icon: "🏍️", title: "ATV Safari in Zelve", price: 35, rating: "4.7", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🍷", title: "River Dinner", price: 40, rating: "4.6", dur: "2 Hours", link: "#" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Avanos Experience Guide",
    expList: [
      { num: "01", title: "Make Your Own Pottery", desc: "Sit at the kick-wheel, get your hands dirty with red clay, and craft your own masterpiece." },
      { num: "02", title: "Feed the Ducks by the River", desc: "Grab a simit (Turkish bagel) and relax on the green banks of the Red River." },
      { num: "03", title: "Cross the Swinging Bridge at Sunset", desc: "The views of the river and town are exceptionally beautiful during the golden hour." },
      { num: "04", title: "Visit the Hair Museum", desc: "Leave a lock of your hair at Chez Galip's famous cave museum if you dare." },
      { num: "05", title: "Watch the Whirling Dervishes", desc: "Experience the spiritual Sema ceremony at the historic Sarihan Caravanserai." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Perfect for a pottery workshop, crossing the bridge, and a riverside lunch." },
      { day: "1 Day", desc: "Pottery + River Activities + Zelve Open Air Museum & Pasabag." },
      { day: "Stay Base", desc: "A fantastic, relaxing alternative to Goreme if you love water and greenery." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots in Avanos",
    photoCards: [
      { name: "Swinging Bridge", time: "Sunset", for: "River Views", diff: "Easy", img: "/images/destinations/avanos.jpg" },
      { name: "Pottery Cave Studios", time: "Daytime", for: "Artisan Portraits", diff: "Easy", img: "/images/museums/goreme.jpg" },
      { name: "Pasabag Fairy Chimneys", time: "Morning", for: "Surreal Rocks", diff: "Easy", img: "/images/valleys/pasabag.jpg" },
      { name: "Red River Banks", time: "Afternoon", for: "Nature & Geese", diff: "Easy", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["🌊 Riverside Cafés", "🏺 Traditional Pottery Kebab", "🐟 Fresh Fish Restaurants", "🍦 Local Ice Cream Shops"],
    stayList: ["🏡 Boutique Stone Mansions", "🌊 Riverside Hotels", "🏰 Historic Cave Suites", "💰 Budget-Friendly Guesthouses", "🏊 Hotels with Big Pools"],

    // 10. TRANSPORT
    transTitle: "How to Get to Avanos?",
    transList: ["✈️ From Nevsehir Airport (NAV) - 40m", "✈️ From Kayseri Airport (ASR) - 1h 05m", "🚌 Frequent Minibuses (Dolmuş) from Goreme - 15 mins", "🚕 Taxi from Goreme - 10 mins"],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Green banks, blooming trees." },
      { name: "☀️ Summer", desc: "Jun-Aug: Perfect for Jet Boat & Gondola." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Calm walks along the river." },
      { name: "❄️ Winter", desc: "Dec-Feb: Quiet artisan atmosphere." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "Do NOT wear white clothes if you plan to sit at the pottery wheel; the red clay splashes easily!",
      "Prices for ceramics vary greatly. Standard tourist pieces are cheap, but master-crafted, hand-painted Hittite replicas are valuable art investments.",
      "The Swinging Bridge is for pedestrians only and will bounce as you walk—it's part of the fun.",
      "If you're visiting in summer, the riverside cafes are much cooler than the dusty valleys of Goreme.",
      "Pasabag and Zelve are technically in the Avanos district, making Avanos a great base for exploring the northern highlights."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Cavusin", time: "5 min", link: "/destinations/cavusin" },
      { name: "Goreme", time: "15 min", link: "/destinations/goreme" },
      { name: "Zelve", time: "10 min", link: "/museums/zelve" },
      { name: "Urgup", time: "20 min", link: "/destinations/urgup" },
      { name: "Uchisar", time: "20 min", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Popular Tours in Avanos",

    // 16. FAQ
    faqTitle: "Avanos Frequently Asked Questions",
    faqs: [
      { q: "Is Avanos worth visiting?", a: "Absolutely. It offers a completely different, lush, riverside vibe compared to the rocky landscapes of Goreme, plus it is the center of Cappadocian art." },
      { q: "Can anyone try making pottery?", a: "Yes! Almost all major workshops offer a free or low-cost demonstration where you can sit at the wheel and try shaping the clay yourself." },
      { q: "Do hot air balloons fly over Avanos?", a: "Usually no. Balloons fly over Goreme and Cavusin. However, the launch sites are just a 10-15 minute drive from Avanos, and tour companies provide transfers." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Avanos?",
    ctaDesc: "Discover the artistic and natural beauty of Cappadocia.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Sanat ve Seramiğin Başkenti",
    heroDesc: "Kızılırmak'ın ikiye böldüğü Avanos; binlerce yıllık çömlek atölyeleri, yemyeşil doğası ve nehir aktiviteleriyle Kapadokya'nın sanat ruhudur.",
    btnExplore: "AVANOS'U KEŞFET",
    btnBookHero: "ATÖLYE REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Mayıs – Eylül",
    statStay: "Önerilen Süre: 1–2 Gün",

    // 2. ABOUT
    aboutTitle: "Avanos Hakkında",
    aboutTags: ["📍 Nehir Kasabası", "🏺 Çömlek & Seramik Sanatı", "🌊 Kızılırmak", "🌉 Asma Köprü", "🛶 Gondol & Jet Boat", "🏛️ Zelve & Paşabağ", "🌿 Yeşil ve Huzurlu"],
    aboutText1: "Kapadokya'nın geri kalanındaki kurak ve kayalık coğrafyanın aksine Avanos, tam ortasından geçen Kızılırmak sayesinde yemyeşil ve hayat doludur. Türkiye'nin en uzun nehri olan Kızılırmak, bu kasabanın can damarıdır.",
    aboutText2: "Hititler döneminden beri, 4.000 yılı aşkın süredir bölge halkı Kızılırmak'ın kızıl çamurunu alıp muazzam çömlekler ve seramikler üretmektedir. Bugün Avanos, ustaların ayakla çevrilen tezgahlarda kil şekillendirdiği ve sizin de bu sanatı deneyimleyebileceğiniz canlı bir sanat merkezidir.",

    // 3. MUST SEE
    mustSeeTitle: "Avanos'ta Keşfedin",
    mustSeeCards: [
      { name: "Sallanan Köprü (Asma Köprü)", desc: "Kızılırmak üzerindeki ikonik ahşap asma köprü. Her ziyaretçinin mutlaka geçmesi gereken bir nokta.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Çömlek Atölyeleri", desc: "Ustaları çalışırken izlemek ve kendi çömleğinizi yapmak için devasa yeraltı atölyelerine adım atın.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Saç Müzesi (Chez Galip)", desc: "Binlerce kadın saçı tutamının sergilendiği, dünyanın en ilginç müzelerinden biri.", img: "/images/museums/hair.jpg", link: "/museums/hair-museum" },
      { name: "Paşabağ (Keşişler Vadisi)", desc: "En görkemli çok başlı peribacalarının bulunduğu, Avanos sınırları içindeki efsanevi vadi.", img: "/images/valleys/pasabag.jpg", link: "/valleys/pasabag" },
      { name: "Zelve Açık Hava Müzesi", desc: "Üç vadiye yayılan, inanılmaz bir terk edilmiş mağara-köy yerleşkesi.", img: "/images/museums/zelve.jpg", link: "/museums/zelve" },
      { name: "Sarıhan Kervansarayı", desc: "Günümüzde mistik Sema (Mevlevi) törenlerine ev sahipliği yapan görkemli 13. yüzyıl Selçuklu hanı.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Avanos'ta Yapılabilecekler",
    todoCards: [
      { icon: "🏺", title: "Çömlek Atölyesi", price: 20, rating: "4.9", dur: "1.5 Saat", link: "/tours/pottery" },
      { icon: "🛶", title: "Kızılırmak Gondol Turu", price: 15, rating: "4.7", dur: "45 Dk", link: "#" },
      { icon: "🚤", title: "Jet Boat Safari", price: 35, rating: "4.8", dur: "30 Dk", link: "#" },
      { icon: "🔴", title: "Kırmızı Tur", price: 60, rating: "4.9", dur: "Tam Gün", link: "/tours/red-tour" },
      { icon: "🏇", title: "Nehir Kenarı At Turu", price: 40, rating: "4.8", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🌌", title: "Sema Gösterisi (Dervişler)", price: 35, rating: "4.9", dur: "1 Saat", link: "/tours/sema" },
      { icon: "🏍️", title: "Zelve ATV Safari", price: 35, rating: "4.7", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🍷", title: "Nehir Kenarı Akşam Yemeği", price: 40, rating: "4.6", dur: "2 Saat", link: "#" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Avanos Deneyim Rehberi",
    expList: [
      { num: "01", title: "Kendi Çömleğinizi Yapın", desc: "Tezgaha oturun, ellerinizi kızıl çamura bulayın ve kendi şaheserinizi yaratın." },
      { num: "02", title: "Kızılırmak'ta Ördekleri Besleyin", desc: "Bir simit alın ve nehrin yeşil kıyılarında dinlenerek kuğuları ve ördekleri besleyin." },
      { num: "03", title: "Gün Batımında Asma Köprüden Geçin", desc: "Nehir ve kasabanın gün batımındaki kızıl yansıması muazzam bir manzara sunar." },
      { num: "04", title: "Saç Müzesini Ziyaret Edin", desc: "Chez Galip'in ünlü mağara müzesini gezin, isterseniz kendi saçınızdan bir tutam bırakın." },
      { num: "05", title: "Sarıhan'da Sema Töreni İzleyin", desc: "Tarihi kervansarayın büyüleyici akustiğinde mistik Mevlevi törenine şahit olun." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Avanos'a Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Bir çömlek atölyesini gezmek, köprüden geçmek ve nehir kenarında yemek için ideal." },
      { day: "1 Gün", desc: "Çömlek + Nehir Aktiviteleri (Gondol/JetBoat) + Paşabağ & Zelve gezisi." },
      { day: "Konaklama", desc: "Su ve yeşilliği seviyorsanız, Göreme'nin tozlu vadilerine harika ve dinlendirici bir alternatiftir." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Sallanan Köprü", time: "Gün Batımı", for: "Nehir Manzarası", diff: "Kolay", img: "/images/destinations/avanos.jpg" },
      { name: "Çömlek Atölyeleri", time: "Öğle", for: "Sanat & Ustalık", diff: "Kolay", img: "/images/museums/goreme.jpg" },
      { name: "Paşabağ Peri Bacaları", time: "Sabah", for: "Sürreal Kayalar", diff: "Kolay", img: "/images/valleys/pasabag.jpg" },
      { name: "Kızılırmak Kıyısı", time: "İkindi", for: "Doğa & Kuğular", diff: "Kolay", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["🌊 Nehir Kenarı Kafeleri", "🏺 Orijinal Testi Kebabı", "🐟 Taze Balık Restoranları", "🍦 Yöresel Dondurmacılar"],
    stayList: ["🏡 Butik Taş Konaklar", "🌊 Nehir Manzaralı Oteller", "🏰 Tarihi Mağara Süitleri", "💰 Uygun Fiyatlı Pansiyonlar", "🏊 Büyük Havuzlu Tesisler"],

    // 10. TRANSPORT
    transTitle: "Avanos'a Nasıl Gidilir?",
    transList: ["✈️ Nevşehir Havalimanından (NAV) - 40dk", "✈️ Kayseri Havalimanından (ASR) - 1s 05dk", "🚌 Göreme'den Sık Minibüs (Dolmuş) - 15dk", "🚕 Göreme'den Taksi ile - 10dk"],

    // 11. BEST TIME
    seasonTitle: "Avanos'u Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Yemyeşil nehir kıyıları." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Jet Boat ve Gondol zamanı." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Nehir kenarında sakin yürüyüşler." },
      { name: "❄️ Kış", desc: "Ara-Şub: Sessiz atölyeler ve soba başı." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Çömlek tezgahına oturacaksanız beyaz veya açık renkli kıyafetler GİYMEYİN; çamur çok kolay sıçrar!",
      "Avanos'taki seramik fiyatları çok değişkendir. Hediyelik eşyalar ucuzdur ancak Hitit teknikleriyle elde boyanmış usta işi eserler değerli birer sanat yatırımıdır.",
      "Sallanan köprü (Asma Köprü) sadece yayalar içindir ve üzerinden geçerken sallanır; korkmayın, bu işin eğlencesidir.",
      "Yaz aylarında Göreme vadileri çok tozlu ve sıcakken, Kızılırmak kenarındaki kafeler serinlemek için harika bir kaçış noktasıdır.",
      "Kapadokya'nın en popüler noktalarından Paşabağ ve Zelve, Avanos ilçesine bağlıdır. Avanos'u merkez seçerek kuzey bölgesini rahatça gezebilirsiniz."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Çavuşin", time: "5 dk", link: "/destinations/cavusin" },
      { name: "Zelve", time: "10 dk", link: "/museums/zelve" },
      { name: "Göreme", time: "15 dk", link: "/destinations/goreme" },
      { name: "Ürgüp", time: "20 dk", link: "/destinations/urgup" },
      { name: "Uçhisar", time: "20 dk", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Avanos Çıkışlı Popüler Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Avanos'u gezmeye değer mi?", a: "Kesinlikle. Göreme'nin kayalık ve kuru yapısının aksine yemyeşil, nehir kenarında, sanatla iç içe bambaşka bir Kapadokya yüzü sunar." },
      { q: "Herkes çömlek yapmayı deneyebilir mi?", a: "Evet! Çoğu atölyede ustalar size kısa bir gösteri sunar ve ardından çarkın başına geçip kendi çamurunuzu şekillendirmenize izin verir." },
      { q: "Avanos'ta sıcak hava balonu var mı?", a: "Avanos'un tam üzerinden balon uçmaz. Ancak balon kalkış alanları (Göreme/Çavuşin) Avanos'a sadece 10-15 dakika uzaklıktadır. Tur firmaları sizi sabah otelinizden alır." }
    ],

    // 17. CTA
    ctaTitle: "Avanos'u Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın sanat merkezini Cappaviva ayrıcalığıyla deneyimle.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "El Pueblo de la Cerámica y el Arte",
    heroDesc: "Dividido por el Río Rojo, Avanos es el alma artística de Capadocia, famoso por sus talleres de terracota.",
    btnExplore: "EXPLORAR AVANOS",
    btnBookHero: "RESERVAR TALLER",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: May – Sep",
    statStay: "Estancia Rec: 1–2 Días",
    aboutTitle: "Sobre Avanos",
    aboutTags: ["📍 Pueblo Ribereño", "🏺 Cerámica y Arte", "🌊 El Río Rojo", "🌉 Puente Colgante", "🛶 Paseos en Góndola", "🏛️ Zelve y Pasabag", "🌿 Verde y Relajante"],
    aboutText1: "A diferencia de los paisajes áridos de Capadocia, Avanos está lleno de vida y vegetación gracias al Río Rojo (Kızılırmak).",
    aboutText2: "Durante 4.000 años, los lugareños han utilizado la arcilla roja del río para crear exquisita cerámica.",
    mustSeeTitle: "Descubre Avanos",
    mustSeeCards: [
      { name: "Puente Colgante", desc: "Icónico puente de madera sobre el Río Rojo.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Talleres de Cerámica", desc: "Estudios en cuevas donde trabajan los maestros.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Museo del Cabello", desc: "Un museo extraño con miles de mechones de cabello.", img: "/images/museums/hair.jpg", link: "/museums/hair-museum" },
      { name: "Pasabag", desc: "El valle de los monjes con impresionantes chimeneas.", img: "/images/valleys/pasabag.jpg", link: "/valleys/pasabag" },
      { name: "Museo al Aire Libre Zelve", desc: "Pueblo cueva abandonado en tres valles.", img: "/images/museums/zelve.jpg", link: "/museums/zelve" },
      { name: "Caravasar Sarihan", desc: "Posada selyúcida del siglo XIII (Derviches Giróvagos).", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🏺", title: "Taller de Cerámica", price: 20, rating: "4.9", dur: "1.5 Horas", link: "/tours/pottery" },
      { icon: "🛶", title: "Góndola en el Río", price: 15, rating: "4.7", dur: "45 Min", link: "#" },
      { icon: "🚤", title: "Jet Boat", price: 35, rating: "4.8", dur: "30 Min", link: "#" },
      { icon: "🔴", title: "Tour Rojo", price: 60, rating: "4.9", dur: "Día Completo", link: "/tours/red-tour" },
      { icon: "🏇", title: "Paseo a Caballo", price: 40, rating: "4.8", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🌌", title: "Derviches Giróvagos", price: 35, rating: "4.9", dur: "1 Hora", link: "/tours/sema" },
      { icon: "🏍️", title: "ATV en Zelve", price: 35, rating: "4.7", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🍷", title: "Cena en el Río", price: 40, rating: "4.6", dur: "2 Horas", link: "#" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Haz tu propia cerámica", desc: "Ensúciate las manos y moldea tu obra." },
      { num: "02", title: "Alimenta a los patos", desc: "Relájate en las orillas verdes del río." },
      { num: "03", title: "Cruza el Puente Colgante", desc: "Especialmente hermoso al atardecer." },
      { num: "04", title: "Visita el Museo del Cabello", desc: "Deja un mechón de tu cabello si te atreves." },
      { num: "05", title: "Derviches Giróvagos", desc: "Experimenta la ceremonia espiritual." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Taller de cerámica, puente y almuerzo." },
      { day: "1 Día", desc: "Cerámica + Río + Pasabag y Zelve." },
      { day: "Base de Estancia", desc: "Alternativa relajante si amas el agua y el verdor." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Puente Colgante", time: "Atardecer", for: "Río", diff: "Fácil", img: "/images/destinations/avanos.jpg" },
      { name: "Talleres", time: "Día", for: "Arte", diff: "Fácil", img: "/images/museums/goreme.jpg" },
      { name: "Pasabag", time: "Mañana", for: "Rocas", diff: "Fácil", img: "/images/valleys/pasabag.jpg" },
      { name: "Orillas del Río", time: "Tarde", for: "Naturaleza", diff: "Fácil", img: "/images/destinations/uchisar.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["🌊 Cafés Ribereños", "🏺 Kebab de Cerámica", "🐟 Pescado Fresco", "🍦 Heladerías Locales"],
    stayList: ["🏡 Mansiones Boutique", "🌊 Hoteles en el Río", "🏰 Suites Cueva", "💰 Pensiones", "🏊 Hoteles con Piscina"],
    transTitle: "¿Cómo Llegar?",
    transList: ["✈️ Nevsehir (NAV) - 40m", "✈️ Kayseri (ASR) - 1h 05m", "🚌 Minibús desde Göreme - 15m", "🚕 Taxi desde Göreme - 10m"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Orillas verdes." },
      { name: "☀️ Verano", desc: "Ideal para el río." },
      { name: "🍂 Otoño", desc: "Paseos tranquilos." },
      { name: "❄️ Invierno", desc: "Ambiente artístico silencioso." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "NO uses ropa blanca si vas a hacer cerámica.",
      "El puente se mueve mientras caminas, es divertido.",
      "En verano, los cafés del río son más frescos.",
      "Pasabag y Zelve están muy cerca de Avanos."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Cavusin", time: "5 min", link: "/destinations/cavusin" },
      { name: "Zelve", time: "10 min", link: "/museums/zelve" },
      { name: "Göreme", time: "15 min", link: "/destinations/goreme" },
      { name: "Urgup", time: "20 min", link: "/destinations/urgup" },
      { name: "Uchisar", time: "20 min", link: "/destinations/uchisar" }
    ],
    popToursTitle: "Tours Populares",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Vale la pena Avanos?", a: "Sí, es el centro del arte y ofrece un ambiente ribereño único." },
      { q: "¿Puedo hacer cerámica?", a: "Sí, casi todos los talleres te permiten probar." },
      { q: "¿Hay globos aquí?", a: "No vuelan sobre Avanos, pero las zonas de despegue están cerca." }
    ],
    ctaTitle: "¿Listo para Explorar Avanos?",
    ctaDesc: "Descubre el arte y la naturaleza con Cappaviva.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function AvanosPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = AVANOS_DICT[aktifDil] || AVANOS_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/avanos.jpg" alt="Avanos" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6">
            AVANOS
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
              {t.btnExplore}
            </a>
            <Link href="/tours/pottery" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
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
          {[t.todoCards[0], t.todoCards[3], t.todoCards[5]].map((card: any, idx: number) => (
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
          <h2 className="text-3xl font-black text-slate-900 mb-8">Avanos Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12570.669527632617!2d34.8340156!3d38.715368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a657c91357cd3%3A0xe1db6e01a884f35e!2sAvanos%2C%20Nev%C5%9Fehir!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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