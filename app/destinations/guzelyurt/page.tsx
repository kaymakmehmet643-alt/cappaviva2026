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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - GÜZELYURT
// =======================================================
const GUZELYURT_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Hidden Monastic Retreat (Gelveri)",
    heroDesc: "Far from the tourist crowds, Guzelyurt is an untouched masterpiece of Cappadocian history, featuring ancient underground cities, Greek stone mansions, and the spectacular Monastery Valley.",
    btnExplore: "EXPLORE GUZELYURT",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Aksaray/Cappadocia, Türkiye",
    statTime: "Best Time: Apr – Oct",
    statStay: "Rec. Stay: 1–2 Days",

    // 2. ABOUT
    aboutTitle: "About Guzelyurt",
    aboutTags: ["📍 Historic 'Gelveri'", "⛪ St. Gregory Church", "🥾 Monastery Valley", "🚇 City-Center Underground City", "🏺 Amphora Winemaking", "📸 Untouched Architecture", "🧘 Absolute Peace"],
    aboutText1: "Historically known as Gelveri, Guzelyurt is located in the western part of the Cappadocia region (within Aksaray province). Until the 1924 population exchange, it was a prosperous Greek Orthodox settlement. The town's architecture features magnificent 100- to 200-year-old stone mansions with intricately carved facades.",
    aboutText2: "Guzelyurt is profoundly significant in Christian history as the home of St. Gregory of Nazianzus, one of the founding fathers of Orthodox theology. The town sits right on top of a massive underground city, and its 'Monastery Valley' contains dozens of rock-cut churches, offering an experience similar to the Goreme Open Air Museum but without the crowds.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Guzelyurt",
    mustSeeCards: [
      { name: "Monastery Valley (Manastır Vadisi)", desc: "A 5km lush gorge containing over 50 rock-cut churches and underground settlements.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "High Church (Yüksek Kilise)", desc: "Perched on a steep rock overlooking a crater lake. Best spot for sunset viewing.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "St. Gregory Church", desc: "Built in 385 AD, this historic church was later converted into the Buyuk Kilise Mosque.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Guzelyurt Underground City", desc: "Located right under the town square, complete with hidden tunnels and ventilation shafts.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Red Church (Kızıl Kilise)", desc: "An iconic 6th-century free-standing church located in an open field near Sivrihisar.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Historic Gelveri Houses", desc: "Wander the silent streets to admire the original Greek stone masonry and wooden doors.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do",
    todoCards: [
      { icon: "🥾", title: "Monastery Valley Hike", price: 30, rating: "4.9", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🚇", title: "Underground City Tour", price: 25, rating: "4.8", dur: "1.5 Hours", link: "#" },
      { icon: "🟢", title: "Green Tour (Ihlara)", price: 65, rating: "4.9", dur: "Full Day", link: "/tours/green-tour" },
      { icon: "🍷", title: "Amphora Wine Tasting", price: 30, rating: "4.8", dur: "1.5 Hours", link: "#" },
      { icon: "📸", title: "Photography Tour", price: 40, rating: "4.7", dur: "2 Hours", link: "#" },
      { icon: "🚙", title: "Ihlara & Belisirma Jeep Safari", price: 50, rating: "4.8", dur: "3 Hours", link: "/tours/jeep-safari" },
      { icon: "⛪", title: "Red Church Excursion", price: 20, rating: "4.6", dur: "1 Hour", link: "#" },
      { icon: "👑", title: "Private VIP Tour", price: 120, rating: "5.0", dur: "Full Day", link: "/tours/private" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Guzelyurt Experience Guide",
    expList: [
      { num: "01", title: "Hike the Monastery Valley", desc: "Walk the silent trail and discover rock-cut chapels with completely intact acoustics." },
      { num: "02", title: "Watch the Sunset at High Church", desc: "Climb up to Yüksek Kilise and watch the sun set over the Hasan Mountain and the crater lake." },
      { num: "03", title: "Descend into the Earth", desc: "Explore the Guzelyurt Underground City right in the middle of the town square." },
      { num: "04", title: "Taste Amphora Wine", desc: "Guzelyurt is reviving the ancient Roman tradition of fermenting wine in clay pots (Küp Şarabı)." },
      { num: "05", title: "Photograph the Red Church", desc: "Drive a few minutes out of town to see one of the oldest standing brick churches in the world." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Perfect for the Underground City, St. Gregory Church, and a quick walk in the valley." },
      { day: "1 Day", desc: "Full hike of Monastery Valley + High Church sunset + Local dinner." },
      { day: "Stay Base", desc: "The ultimate base if you want to explore Ihlara Valley and avoid Goreme's crowds entirely." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "High Church Panorama", time: "Sunset", for: "Lake & Hasan Mtn", diff: "Medium", img: "/images/destinations/uchisar.jpg" },
      { name: "Gelveri Streets", time: "Morning", for: "Stone Architecture", diff: "Easy", img: "/images/destinations/urgup.jpg" },
      { name: "Red Church (Kızıl Kilise)", time: "Afternoon", for: "Isolated Church", diff: "Easy", img: "/images/churches/karanlik.jpg" },
      { name: "Monastery Valley Ruins", time: "Daytime", for: "Cave Churches", diff: "Medium", img: "/images/valleys/love-panorama.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["☕ Historic Town Square Cafés", "🍽️ Local Anatolian Home Cooking", "🍷 Amphora (Küp) Wine Cellars", "🥖 Traditional Bakeries"],
    stayList: ["🏰 Restored Greek Stone Mansions", "💎 Monasteries Converted to Hotels", "🧘 Serene Courtyard Retreats", "💰 Authentic Guesthouses"],

    // 10. TRANSPORT
    transTitle: "How to Get to Guzelyurt?",
    transList: ["🚗 From Goreme / Nevsehir - About 1 hour and 15 minutes by car.", "🚗 From Aksaray Center - 45 minutes.", "✈️ From Nevsehir Airport (NAV) - 1h 20m.", "💡 Renting a car is highly recommended as public transport is limited."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Green valleys, perfect for hiking." },
      { name: "☀️ Summer", desc: "Jun-Aug: Cool breezes, uncrowded streets." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Golden leaves and wine making." },
      { name: "❄️ Winter", desc: "Dec-Feb: Silent, snowy, and incredibly authentic." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "Guzelyurt is largely undiscovered by mass tourism. Respect the quiet, local village atmosphere.",
      "The town is very close to the famous Ihlara Valley (only 15 mins away). You can easily do both in one day.",
      "Bring a small flashlight! Many of the rock-cut churches in Monastery Valley are unlit and deeply carved.",
      "Try the local 'Küp Şarabı' (Amphora Wine). Winemakers here ferment the grapes in clay pots buried underground, just like the Romans did.",
      "Unlike Goreme, you won't find balloons here, but you will find unparalleled history and peace."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Ihlara Valley", time: "15 min", link: "#" },
      { name: "Derinkuyu", time: "40 min", link: "#" },
      { name: "Nevsehir", time: "1h 10m", link: "/destinations/nevsehir" },
      { name: "Goreme", time: "1h 20m", link: "/destinations/goreme" },
      { name: "Uchisar", time: "1h 15m", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Including Guzelyurt",

    // 16. FAQ
    faqTitle: "Guzelyurt Frequently Asked Questions",
    faqs: [
      { q: "Is Guzelyurt in Cappadocia?", a: "Yes. Even though it is administratively in the Aksaray province, it is a crucial part of the historical and geographical Cappadocia region." },
      { q: "Do I need a rental car?", a: "Yes, it is highly recommended. Guzelyurt is about an hour away from the main tourist hubs (Goreme/Urgup), and public transport is scarce." },
      { q: "Is it better than Goreme?", a: "It depends on what you want. If you want balloons, nightlife, and shopping, choose Goreme. If you want deep history, hiking, and total silence, choose Guzelyurt." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Guzelyurt?",
    ctaDesc: "Step off the beaten path and discover Cappadocia's hidden monastic sanctuary.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Gizli Manastır Vadisi",
    heroDesc: "Turist kalabalığından uzakta; antik yeraltı şehirleri, görkemli Rum taş evleri ve eşsiz Manastır Vadisi ile Güzelyurt, Kapadokya tarihinin el değmemiş şaheseridir.",
    btnExplore: "GÜZELYURT'U KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Aksaray/Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Nisan – Ekim",
    statStay: "Önerilen Süre: 1–2 Gün",

    // 2. ABOUT
    aboutTitle: "Güzelyurt Hakkında",
    aboutTags: ["📍 Tarihi 'Gelveri'", "⛪ Aziz Gregorius Kilisesi", "🥾 Manastır Vadisi", "🚇 Yeraltı Şehri", "🏺 Küp (Amfora) Şarabı", "📸 El Değmemiş Mimari", "🧘 Mutlak Sessizlik"],
    aboutText1: "Eski adıyla Gelveri olarak bilinen Güzelyurt, Kapadokya bölgesinin batı ucunda (Aksaray il sınırları içinde) yer alır. 1924 mübadelesine kadar varlıklı bir Rum Ortodoks yerleşimi olan kasaba, ince işçilikle oyulmuş 100-200 yıllık muazzam taş konaklara ev sahipliği yapar.",
    aboutText2: "Ortodoks teolojisinin kurucularından Aziz Gregorius'un (Nazianzoslu) memleketi olan Güzelyurt, Hristiyanlık tarihi için çok büyük bir öneme sahiptir. Kasaba meydanının hemen altında devasa bir yeraltı şehri bulunur. Göreme Açık Hava Müzesi'nin kalabalıksız ve doğal halini andıran 'Manastır Vadisi' ise onlarca kaya kilisesi barındırır.",

    // 3. MUST SEE
    mustSeeTitle: "Güzelyurt'ta Keşfedin",
    mustSeeCards: [
      { name: "Manastır Vadisi", desc: "İçinde 50'den fazla kaya oyma kilise ve yeraltı yerleşimi barındıran 5 kilometrelik yemyeşil bir vadi.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Yüksek Kilise", desc: "Bir krater gölüne bakan sarp bir kayalığın üzerine tünemiş, gün batımı manzarasıyla ünlü kilise.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Aziz Gregorius Kilisesi (Cami)", desc: "M.S. 385 yılında inşa edilen ve mübadele sonrası Büyük Kilise Camii adını alan tarihi yapı.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Güzelyurt Yeraltı Şehri", desc: "Kasaba meydanının hemen altında yer alan, gizli tünelleri ve havalandırma bacalarıyla tarihi şehir.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Kızıl Kilise", desc: "Sivrihisar köyü yakınlarında, tarlanın ortasında tek başına yükselen eşsiz bir 6. yüzyıl kilisesi.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Tarihi Gelveri Evleri", desc: "Orijinal Rum taş mimarisini ve ahşap oyma kapıları görmek için sessiz sokaklarda kaybolun.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Güzelyurt'ta Yapılabilecekler",
    todoCards: [
      { icon: "🥾", title: "Manastır Vadisi Yürüyüşü", price: 30, rating: "4.9", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🚇", title: "Yeraltı Şehri Turu", price: 25, rating: "4.8", dur: "1.5 Saat", link: "#" },
      { icon: "🟢", title: "Yeşil Tur (Ihlara)", price: 65, rating: "4.9", dur: "Tam Gün", link: "/tours/green-tour" },
      { icon: "🍷", title: "Küp Şarabı Tadımı", price: 30, rating: "4.8", dur: "1.5 Saat", link: "#" },
      { icon: "📸", title: "Fotoğraf ve Mimari Turu", price: 40, rating: "4.7", dur: "2 Saat", link: "#" },
      { icon: "🚙", title: "Ihlara Jeep Safari", price: 50, rating: "4.8", dur: "3 Saat", link: "/tours/jeep-safari" },
      { icon: "⛪", title: "Kızıl Kilise Gezisi", price: 20, rating: "4.6", dur: "1 Saat", link: "#" },
      { icon: "👑", title: "VIP Özel Tur", price: 120, rating: "5.0", dur: "Tam Gün", link: "/tours/private" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Güzelyurt Deneyim Rehberi",
    expList: [
      { num: "01", title: "Manastır Vadisi'ni Yürüyün", desc: "Sessiz patikada yürüyün ve akustiği tamamen korunmuş kaya oyma şapelleri keşfedin." },
      { num: "02", title: "Yüksek Kilise'de Gün Batımı", desc: "Sarp kayalığa tırmanın ve Hasan Dağı ile krater gölünün arkasından batan güneşi izleyin." },
      { num: "03", title: "Yerin Altına İnin", desc: "Kasaba meydanından giriş yapılan Güzelyurt Yeraltı Şehri'nin dar tünellerini keşfedin." },
      { num: "04", title: "Küp Şarabı Tadın", desc: "Güzelyurt'ta şaraplar hala antik Roma dönemindeki gibi toprağa gömülü toprak küplerde (amfora) mayalanır." },
      { num: "05", title: "Aziz Gregorius'u Ziyaret Edin", desc: "Ortodoks dünyası için büyük önem taşıyan bu görkemli tarihi yapının mimarisini inceleyin." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Güzelyurt'a Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Yeraltı Şehri, Kilise Cami ve kısa bir vadi yürüyüşü için yeterlidir." },
      { day: "1 Gün", desc: "Manastır Vadisi tam turu + Yüksek Kilise gün batımı + Yerel akşam yemeği." },
      { day: "Konaklama", desc: "Ihlara Vadisi'ni rahatça gezmek ve Göreme'nin kalabalığından tamamen kaçmak için mükemmel bir üs." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Yüksek Kilise Manzarası", time: "Gün Batımı", for: "Hasan Dağı ve Göl", diff: "Orta", img: "/images/destinations/uchisar.jpg" },
      { name: "Gelveri Sokakları", time: "Sabah", for: "Taş Mimari", diff: "Kolay", img: "/images/destinations/urgup.jpg" },
      { name: "Kızıl Kilise", time: "Öğleden Sonra", for: "İzole Kilise Manzarası", diff: "Kolay", img: "/images/churches/karanlik.jpg" },
      { name: "Manastır Vadisi", time: "Gündüz", for: "Mağara Kiliseler", diff: "Orta", img: "/images/valleys/love-panorama.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["☕ Tarihi Meydan Kahvehaneleri", "🍽️ Yöresel Anadolu Ev Yemekleri", "🍷 Küp Şarabı Mahzenleri", "🥖 Geleneksel Fırınlar"],
    stayList: ["🏰 Restore Edilmiş Rum Konakları", "💎 Otele Çevrilmiş Manastırlar", "🧘 Huzurlu Butik Oteller", "💰 Otantik Pansiyonlar"],

    // 10. TRANSPORT
    transTitle: "Güzelyurt'a Nasıl Gidilir?",
    transList: ["🚗 Göreme / Nevşehir'den - Arabayla yaklaşık 1 saat 15 dakika.", "🚗 Aksaray Merkezden - Sadece 45 dakika.", "✈️ Nevşehir Havalimanından (NAV) - 1s 20dk.", "💡 Toplu taşıma çok kısıtlı olduğu için araç kiralayarak gelmeniz şiddetle tavsiye edilir."],

    // 11. BEST TIME
    seasonTitle: "Güzelyurt'u Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Yemyeşil vadiler, yürüyüş için ideal." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Göreme'ye göre daha serin ve kalabalıksız." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Şarap yapımı ve altın renkli doğa." },
      { name: "❄️ Kış", desc: "Ara-Şub: Karlar altında son derece sessiz ve otantik." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Güzelyurt henüz kitle turizmi tarafından keşfedilmemiştir. Köyün sessiz ve yerel dokusuna saygı gösterin.",
      "Ünlü Ihlara Vadisi'ne sadece 15 dakika uzaklıktadır. İkisini aynı gün içinde rahatlıkla gezebilirsiniz.",
      "Manastır Vadisi'ndeki birçok kaya kilisesinde aydınlatma yoktur, yanınızda mutlaka küçük bir el feneri bulundurun.",
      "Yerel 'Küp Şarabı'nı mutlaka deneyin. Üzümler tıpkı Romalılar dönemindeki gibi toprağa gömülü kil küplerde fermente edilir.",
      "Göreme'nin aksine burada sıcak hava balonu uçmaz, ancak inanılmaz bir tarih ve mutlak huzur bulursunuz."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Ihlara Vadisi", time: "15 dk", link: "#" },
      { name: "Derinkuyu", time: "40 dk", link: "#" },
      { name: "Nevşehir", time: "1s 10dk", link: "/destinations/nevsehir" },
      { name: "Göreme", time: "1s 20dk", link: "/destinations/goreme" },
      { name: "Uçhisar", time: "1s 15dk", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Güzelyurt ve Ihlara'yı Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Güzelyurt Kapadokya'da mı?", a: "Evet. İdari olarak Aksaray iline bağlı olsa da, coğrafi ve tarihi Kapadokya bölgesinin çok önemli bir parçasıdır." },
      { q: "Araç kiralamak şart mı?", a: "Evet, şiddetle tavsiye edilir. Ana turistik merkezlere (Göreme/Ürgüp) yaklaşık 1 saat uzaklıktadır ve toplu taşıma çok kısıtlıdır." },
      { q: "Göreme'den daha mı iyi?", a: "Ne aradığınıza bağlıdır. Balon, gece hayatı ve çok sayıda restoran arıyorsanız Göreme'yi seçin. Kalabalıktan uzak tarih, uzun yürüyüşler ve mutlak sessizlik arıyorsanız Güzelyurt'u seçin." }
    ],

    // 17. CTA
    ctaTitle: "Güzelyurt'u Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın gizli manastır vadisine doğru yola çıkın.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "El Refugio Monástico Oculto (Gelveri)",
    heroDesc: "Lejos de las multitudes, Guzelyurt es una obra maestra virgen con ciudades subterráneas y el espectacular Valle de los Monasterios.",
    btnExplore: "EXPLORAR GUZELYURT",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Aksaray/Capadocia, Turquía",
    statTime: "Mejor Época: Abr – Oct",
    statStay: "Estancia Rec: 1–2 Días",
    aboutTitle: "Sobre Guzelyurt",
    aboutTags: ["📍 Histórico 'Gelveri'", "⛪ Iglesia de San Gregorio", "🥾 Valle Monasterios", "🚇 Ciudad Subterránea", "🏺 Vino en Ánforas", "📸 Arquitectura Intacta", "🧘 Paz Absoluta"],
    aboutText1: "Conocido históricamente como Gelveri, fue un próspero asentamiento griego ortodoxo hasta 1924. Cuenta con magníficas mansiones de piedra de hasta 200 años de antigüedad.",
    aboutText2: "Es el hogar de San Gregorio de Nacianzo. La ciudad se asienta sobre una ciudad subterránea, y su 'Valle del Monasterio' ofrece docenas de iglesias en cuevas sin las multitudes de Göreme.",
    mustSeeTitle: "Descubre Guzelyurt",
    mustSeeCards: [
      { name: "Valle del Monasterio", desc: "Desfiladero de 5 km con más de 50 iglesias en roca.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Alta Iglesia (Yüksek Kilise)", desc: "Sobre una roca escarpada frente a un lago de cráter. Ideal al atardecer.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Iglesia de San Gregorio", desc: "Construida en 385 d.C., ahora es una mezquita histórica.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Ciudad Subterránea", desc: "Justo debajo de la plaza del pueblo.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Iglesia Roja (Kızıl Kilise)", desc: "Icónica iglesia del siglo VI en campo abierto.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Casas Históricas de Gelveri", desc: "Calles silenciosas con mampostería griega original.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🥾", title: "Caminata en Monasterios", price: 30, rating: "4.9", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🚇", title: "Ciudad Subterránea", price: 25, rating: "4.8", dur: "1.5 Horas", link: "#" },
      { icon: "🟢", title: "Tour Verde (Ihlara)", price: 65, rating: "4.9", dur: "Día Completo", link: "/tours/green-tour" },
      { icon: "🍷", title: "Cata de Vino (Ánfora)", price: 30, rating: "4.8", dur: "1.5 Horas", link: "#" },
      { icon: "📸", title: "Tour Fotográfico", price: 40, rating: "4.7", dur: "2 Horas", link: "#" },
      { icon: "🚙", title: "Safari en Jeep Ihlara", price: 50, rating: "4.8", dur: "3 Horas", link: "/tours/jeep-safari" },
      { icon: "⛪", title: "Excursión Iglesia Roja", price: 20, rating: "4.6", dur: "1 Hora", link: "#" },
      { icon: "👑", title: "Tour VIP Privado", price: 120, rating: "5.0", dur: "Día Completo", link: "/tours/private" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Camina por el Valle", desc: "Descubre capillas talladas con acústica intacta." },
      { num: "02", title: "Atardecer en Alta Iglesia", desc: "Vistas al Monte Hasan y al lago." },
      { num: "03", title: "Desciende a la Tierra", desc: "Explora la Ciudad Subterránea en la plaza." },
      { num: "04", title: "Prueba el Vino de Ánfora", desc: "Fermentado en vasijas de barro bajo tierra." },
      { num: "05", title: "Fotografía la Iglesia Roja", desc: "Una de las iglesias de ladrillo más antiguas." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Ciudad subterránea, iglesia y un paseo rápido." },
      { day: "1 Día", desc: "Valle completo + Atardecer + Cena local." },
      { day: "Base de Estancia", desc: "Ideal para explorar Ihlara y evitar multitudes." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Panorama Alta Iglesia", time: "Atardecer", for: "Monte Hasan", diff: "Medio", img: "/images/destinations/uchisar.jpg" },
      { name: "Calles Gelveri", time: "Mañana", for: "Arquitectura", diff: "Fácil", img: "/images/destinations/urgup.jpg" },
      { name: "Iglesia Roja", time: "Tarde", for: "Aislamiento", diff: "Fácil", img: "/images/churches/karanlik.jpg" },
      { name: "Ruinas del Valle", time: "Día", for: "Cuevas", diff: "Medio", img: "/images/valleys/love-panorama.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["☕ Cafés de la Plaza", "🍽️ Comida Casera Anatolia", "🍷 Bodegas de Vino de Ánfora", "🥖 Panaderías Tradicionales"],
    stayList: ["🏰 Mansiones de Piedra", "💎 Monasterios Convertidos", "🧘 Retiros Serenos", "💰 Pensiones Auténticas"],
    transTitle: "¿Cómo Llegar?",
    transList: ["🚗 Desde Göreme/Nevsehir - 1h 15m.", "🚗 Desde Aksaray - 45m.", "✈️ Desde Nevsehir (NAV) - 1h 20m.", "💡 Se recomienda alquilar un coche."],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Valles verdes, perfecto para caminar." },
      { name: "☀️ Verano", desc: "Calles sin aglomeraciones." },
      { name: "🍂 Otoño", desc: "Hojas doradas y elaboración de vino." },
      { name: "❄️ Invierno", desc: "Silencioso, nevado y auténtico." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "Respeta el ambiente tranquilo del pueblo.",
      "Está a solo 15 minutos del famoso Valle de Ihlara.",
      "Lleva linterna para las iglesias en cuevas sin luz.",
      "Prueba el 'Küp Şarabı' (Vino de Ánfora).",
      "No hay globos aquí, solo historia y paz."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Valle de Ihlara", time: "15 min", link: "#" },
      { name: "Derinkuyu", time: "40 min", link: "#" },
      { name: "Nevsehir", time: "1h 10m", link: "/destinations/nevsehir" },
      { name: "Göreme", time: "1h 20m", link: "/destinations/goreme" },
      { name: "Uchisar", time: "1h 15m", link: "/destinations/uchisar" }
    ],
    popToursTitle: "Tours que incluyen Guzelyurt",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Está en Capadocia?", a: "Sí, aunque administrativamente en Aksaray, es parte crucial de la región histórica." },
      { q: "¿Necesito coche?", a: "Sí, el transporte público es escaso." },
      { q: "¿Es mejor que Göreme?", a: "Para paz, historia profunda y senderismo solitario, sí. Para globos y vida nocturna, Göreme." }
    ],
    ctaTitle: "¿Listo para Explorar Guzelyurt?",
    ctaDesc: "Descubre el santuario monástico oculto de Capadocia.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function GuzelyurtPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = GUZELYURT_DICT[aktifDil] || GUZELYURT_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/ortahisar.jpg" alt="Guzelyurt Gelveri" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            GÜZELYURT
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
          {[t.todoCards[2], t.todoCards[5], t.todoCards[1]].map((card: any, idx: number) => (
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
          <h2 className="text-3xl font-black text-slate-900 mb-8">Guzelyurt Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12644.200780287514!2d34.3644917!3d38.2758197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d5ce105d15fa57%3A0xeab5e8f498cdd88!2sG%C3%BCzelyurt%2C%20Aksaray!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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