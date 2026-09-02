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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - MUSTAFAPAŞA
// =======================================================
const MUSTAFAPASA_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Historic Greek Village (Sinasos)",
    heroDesc: "Awarded 'Best Tourism Village' by the UN, Mustafapasa is an open-air museum of spectacular Greek stone masonry and quiet, nostalgic streets.",
    btnExplore: "EXPLORE MUSTAFAPASA",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: Apr – Oct",
    statStay: "Rec. Stay: Half to 1 Day",

    // 2. ABOUT
    aboutTitle: "About Mustafapasa",
    aboutTags: ["📍 Historic 'Sinasos'", "🏛️ Exquisite Stone Mansions", "⛪ Ancient Greek Churches", "🥾 Gomeda Valley", "📸 Architectural Photography", "🏆 UNWTO Best Tourism Village", "🧘 Ultimate Serenity"],
    aboutText1: "Formerly known as Sinasos, Mustafapasa was historically inhabited by wealthy Greek merchants who made their fortunes trading caviar in Istanbul. They returned to build some of the most magnificent, intricately carved stone mansions in all of Cappadocia.",
    aboutText2: "Following the 1924 population exchange between Greece and Turkey, the town became home to Turkish migrants from the Balkans. Today, it remains wonderfully uncrowded. Walking its streets feels like stepping back in time, admiring the ornate doors, arched windows, and silent courtyards of a bygone era.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Mustafapasa",
    mustSeeCards: [
      { name: "Constantine & Helena Church", desc: "A beautifully preserved 19th-century Greek Orthodox church right in the town square.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "St. Nicholas Monastery", desc: "A partially rock-cut, partially masonry monastery located just outside the village.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Old Greek Mansions", desc: "Wander the streets to see mansions with incredible stone carvings and painted facades.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Cappadocia Art & History Museum", desc: "Also known as the Doll Museum, housed in a 150-year-old mansion, showcasing local history.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Gomeda Valley", desc: "A wild, less-explored valley full of dovecotes, dark tunnels, and ancient ruins.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Mustafapasa Square", desc: "The quiet heart of the village, perfect for sipping Turkish tea and admiring the architecture.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do",
    todoCards: [
      { icon: "🥾", title: "Gomeda Valley Hike", price: 30, rating: "4.8", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🚙", title: "Jeep Safari (South)", price: 45, rating: "4.9", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "📸", title: "Architecture Photo Tour", price: 40, rating: "4.8", dur: "2 Hours", link: "#" },
      { icon: "🔵", title: "Cappadocia Blue Tour", price: 65, rating: "4.8", dur: "Full Day", link: "#" },
      { icon: "🏛️", title: "Doll Museum Visit", price: 5, rating: "4.7", dur: "1 Hour", link: "#" },
      { icon: "🍷", title: "Wine Tasting (Urgup)", price: 35, rating: "4.8", dur: "2 Hours", link: "#" },
      { icon: "🐎", title: "Horse Riding", price: 40, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "👑", title: "Private VIP Tour", price: 120, rating: "5.0", dur: "Full Day", link: "/tours/private" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Mustafapasa Experience Guide",
    expList: [
      { num: "01", title: "Admire the Stone Carvings", desc: "Look closely at the doors and windows of the mansions; the stonemasonry here is unmatched." },
      { num: "02", title: "Visit Constantine & Helena", desc: "Step inside this historic church that stands as a symbol of the town's Greek Orthodox past." },
      { num: "03", title: "Hike the Wild Gomeda Valley", desc: "Experience one of the least touristy and most mysterious valleys in Cappadocia." },
      { num: "04", title: "See the Handmade Dolls", desc: "Visit the Art & History Museum to see thousands of handmade dolls reflecting Turkish and Greek culture." },
      { num: "05", title: "Dine in a Restored Mansion", desc: "Enjoy a quiet, romantic dinner in the courtyard of a 200-year-old stone house." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Perfect for a quiet morning walk, visiting the church, and taking architectural photos." },
      { day: "1 Day", desc: "Village Tour + Doll Museum + Afternoon hike in Gomeda Valley." },
      { day: "Stay Base", desc: "An incredibly peaceful base. You'll need a car, but you'll sleep in ultimate silence." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Carved Mansion Doors", time: "Morning", for: "Architectural Details", diff: "Easy", img: "/images/destinations/urgup.jpg" },
      { name: "Church Courtyard", time: "Daytime", for: "Historic Facades", diff: "Easy", img: "/images/churches/tokali.jpg" },
      { name: "Gomeda Valley Ruins", time: "Afternoon", for: "Mysterious Caves", diff: "Medium", img: "/images/valleys/love-panorama.jpg" },
      { name: "Village Square", time: "Sunset", for: "Nostalgic Vibe", diff: "Easy", img: "/images/destinations/cavusin.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["☕ Historic Courtyard Cafés", "🍽️ Greek-Turkish Fusion Food", "🍷 Quiet Fine Dining", "🥞 Local Village Breakfast"],
    stayList: ["🏰 Restored Greek Stone Mansions", "💎 Boutique Heritage Hotels", "🧘 Serene Courtyard Retreats", "💰 Authentic Guesthouses", "👑 Historic Suites"],

    // 10. TRANSPORT
    transTitle: "How to Get to Mustafapasa?",
    transList: ["🚗 From Urgup - Just a 10-minute drive south.", "🚕 Taxi from Goreme - About 25 minutes.", "✈️ From Kayseri Airport (ASR) - 1h 05m", "✈️ From Nevsehir Airport (NAV) - 50m"],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Blooming courtyards." },
      { name: "☀️ Summer", desc: "Jun-Aug: Much quieter than Goreme." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Nostalgic, golden colors." },
      { name: "❄️ Winter", desc: "Dec-Feb: Stone mansions in the snow." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "Mustafapasa is generally skipped by the standard 'Red Tour' crowds, making it perfectly quiet most of the day.",
      "The Gomeda Valley hike can be wild and unmarked in places; going with a guide or a good offline map is recommended.",
      "Look for the 'Sun of Vergina' or cross symbols subtly carved into the old doorways by the original Greek owners.",
      "The town doesn't have a vibrant nightlife; it is designed for those seeking peace, history, and romance.",
      "It is located just 10 minutes from Urgup, so you can easily pop over to Urgup for wine tasting or shopping."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Urgup", time: "10 min", link: "/destinations/urgup" },
      { name: "Ortahisar", time: "15 min", link: "/destinations/ortahisar" },
      { name: "Goreme", time: "25 min", link: "/destinations/goreme" },
      { name: "Uchisar", time: "30 min", link: "/destinations/uchisar" },
      { name: "Avanos", time: "35 min", link: "/destinations/avanos" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Including Mustafapasa",

    // 16. FAQ
    faqTitle: "Mustafapasa Frequently Asked Questions",
    faqs: [
      { q: "What is the difference between Sinasos and Mustafapasa?", a: "They are the same place. Sinasos was its historical Greek name before the 1924 population exchange. It was later renamed Mustafapasa." },
      { q: "Are there fairy chimneys in Mustafapasa?", a: "Not directly in the town center like Goreme. The beauty here is in the stone architecture. However, the nearby Gomeda Valley has rock formations and caves." },
      { q: "Is it worth staying here?", a: "If you rent a car and prefer avoiding tourist crowds to stay in magnificent, quiet, historical stone mansions, it is one of the best choices in Cappadocia." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Mustafapasa?",
    ctaDesc: "Step back in time in Cappadocia's most nostalgic village.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Tarihi Rum Köyü (Sinasos)",
    heroDesc: "BM tarafından 'En İyi Turizm Köyü' seçilen Mustafapaşa; muazzam taş konakları, kiliseleri ve nostaljik sokaklarıyla adeta bir açık hava müzesidir.",
    btnExplore: "MUSTAFAPAŞA'YI KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Nisan – Ekim",
    statStay: "Önerilen Süre: Yarım – 1 Gün",

    // 2. ABOUT
    aboutTitle: "Mustafapaşa Hakkında",
    aboutTags: ["📍 Tarihi Sinasos", "🏛️ İhtişamlı Taş Konaklar", "⛪ Eski Rum Kiliseleri", "🥾 Gomeda Vadisi", "📸 Mimari Fotoğrafçılık", "🏆 UNWTO En İyi Turizm Köyü", "🧘 Kusursuz Sessizlik"],
    aboutText1: "Eski adıyla Sinasos, tarihsel olarak İstanbul'da havyar ticareti yaparak zenginleşen Rum tüccarların memleketiydi. Kazandıkları servetle memleketlerine dönüp, Kapadokya'nın en muazzam ve ince işçilikli taş konaklarını inşa ettiler.",
    aboutText2: "1924 Nüfus Mübadelesi'nden sonra Rumlar Yunanistan'a göç ederken, Balkanlar'dan gelen Türkler buraya yerleşti. Bugün köy, inanılmaz derecede sakin ve korunmuştur. Sokaklarında yürürken görkemli oyma kapılara, kemerli pencerelere ve tarihi avlulara hayran kalacaksınız.",

    // 3. MUST SEE
    mustSeeTitle: "Mustafapaşa'da Keşfedin",
    mustSeeCards: [
      { name: "Constantine ve Helena Kilisesi", desc: "Köy meydanında yer alan, 19. yüzyıldan kalma mükemmel korunmuş bir Rum Ortodoks kilisesi.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Aziz Nikolaos Manastırı", desc: "Köyün hemen dışında, bir kısmı kayaya oyulmuş, bir kısmı taş örme tarihi manastır.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Eski Rum Konakları", desc: "İnanılmaz taş oymacılığına ve boyalı cephelere sahip tarihi konakları görmek için sokaklarda kaybolun.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Kapadokya Sanat ve Tarih Müzesi", desc: "Bebek Müzesi olarak da bilinen, 150 yıllık bir konakta yer alan ve yerel tarihi yansıtan eşsiz bir müze.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Gomeda Vadisi", desc: "Güvercinlikler, karanlık tüneller ve antik kalıntılarla dolu gizemli ve vahşi bir vadi.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Mustafapaşa Meydanı", desc: "Çayınızı yudumlayıp tarihi dokuyu seyredebileceğiniz, köyün sessiz ve nostaljik kalbi.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Mustafapaşa'da Yapılabilecekler",
    todoCards: [
      { icon: "🥾", title: "Gomeda Vadisi Yürüyüşü", price: 30, rating: "4.8", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🚙", title: "Jeep Safari (Güney)", price: 45, rating: "4.9", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "📸", title: "Mimari Fotoğraf Turu", price: 40, rating: "4.8", dur: "2 Saat", link: "#" },
      { icon: "🔵", title: "Mavi Tur (Blue Tour)", price: 65, rating: "4.8", dur: "Tam Gün", link: "#" },
      { icon: "🏛️", title: "Bebek Müzesi Ziyareti", price: 5, rating: "4.7", dur: "1 Saat", link: "#" },
      { icon: "🍷", title: "Ürgüp'te Şarap Tadımı", price: 35, rating: "4.8", dur: "2 Saat", link: "#" },
      { icon: "🐎", title: "Atlı Safari", price: 40, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "👑", title: "VIP Özel Tur", price: 120, rating: "5.0", dur: "Tam Gün", link: "/tours/private" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Mustafapaşa Deneyim Rehberi",
    expList: [
      { num: "01", title: "Taş İşçiliğine Hayran Kalın", desc: "Konakların kapı ve pencerelerine yakından bakın; buradaki taş oymacılığının eşi benzeri yoktur." },
      { num: "02", title: "Constantine ve Helena'yı Ziyaret Edin", desc: "Köyün Rum Ortodoks geçmişinin sembolü olan bu tarihi kilisenin içine adım atın." },
      { num: "03", title: "Vahşi Gomeda Vadisi'nde Yürüyün", desc: "Kapadokya'nın en az turistik, en gizemli ve el değmemiş vadilerinden birini deneyimleyin." },
      { num: "04", title: "El Yapımı Bebekleri İnceleyin", desc: "Türk ve Rum kültürünü yansıtan binlerce el yapımı bebeği görmek için Sanat ve Tarih Müzesi'ne gidin." },
      { num: "05", title: "Tarihi Bir Konakta Yemek Yiyin", desc: "200 yıllık bir taş evin avlusunda sessiz, romantik ve unutulmaz bir akşam yemeği yiyin." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Mustafapaşa'ya Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Sakin bir sabah yürüyüşü, kilise ziyareti ve mimari fotoğraflar çekmek için ideal." },
      { day: "1 Gün", desc: "Köy Turu + Bebek Müzesi + Öğleden sonra Gomeda Vadisi yürüyüşü." },
      { day: "Konaklama", desc: "Araç kiraladıysanız ve mutlak bir sessizlik arıyorsanız Kapadokya'nın en elit konaklama üssüdür." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Oymalı Konak Kapıları", time: "Sabah", for: "Mimari Detaylar", diff: "Kolay", img: "/images/destinations/urgup.jpg" },
      { name: "Kilise Avlusu", time: "Öğle", for: "Tarihi Cepheler", diff: "Kolay", img: "/images/churches/tokali.jpg" },
      { name: "Gomeda Vadisi Kalıntıları", time: "Öğleden Sonra", for: "Gizemli Mağaralar", diff: "Orta", img: "/images/valleys/love-panorama.jpg" },
      { name: "Köy Meydanı", time: "Gün Batımı", for: "Nostaljik Atmosfer", diff: "Kolay", img: "/images/destinations/cavusin.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["☕ Tarihi Avlu Kafeleri", "🍽️ Rum-Türk Füzyon Yemekleri", "🍷 Sessiz Şık Restoranlar", "🥞 Yöresel Köy Kahvaltısı"],
    stayList: ["🏰 Restore Edilmiş Taş Konaklar", "💎 Butik Miras (Heritage) Oteller", "🧘 Sessiz Avlulu Pansiyonlar", "💰 Otantik Konukevleri", "👑 Tarihi Süitler"],

    // 10. TRANSPORT
    transTitle: "Mustafapaşa'ya Nasıl Gidilir?",
    transList: ["🚗 Ürgüp'ten - Güneye doğru sadece 10 dakikalık sürüş mesafesinde.", "🚕 Göreme'den Taksi ile - Yaklaşık 25 dakika.", "✈️ Kayseri Havalimanından (ASR) - 1s 05dk", "✈️ Nevşehir Havalimanından (NAV) - 50dk"],

    // 11. BEST TIME
    seasonTitle: "Mustafapaşa'yı Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Çiçek açan taş avlular." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Göreme'ye kıyasla çok daha serin ve sakin." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Nostaljik ve altın renkli bir atmosfer." },
      { name: "❄️ Kış", desc: "Ara-Şub: Karlar altında adeta bir film seti." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Mustafapaşa, klasik 'Kırmızı Tur' rotasının dışındadır, bu nedenle günün büyük bir kısmında çok sakindir.",
      "Gomeda Vadisi yürüyüşü yer yer işaretlenmemiş ve vahşi olabilir; bir rehberle veya iyi bir çevrimdışı haritayla gitmeniz önerilir.",
      "Eski evlerin kapılarındaki oymalarda eski Rum sahipleri tarafından zarifçe işlenmiş haç sembollerini veya detayları arayın.",
      "Köyde canlı bir gece hayatı yoktur; burası huzur, tarih ve mimari arayanlar için tasarlanmıştır.",
      "Ürgüp'e sadece 10 dakika uzaklıkta olduğu için akşamları şarap tadımı veya alışveriş için rahatça Ürgüp'e geçebilirsiniz."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Ürgüp", time: "10 dk", link: "/destinations/urgup" },
      { name: "Ortahisar", time: "15 dk", link: "/destinations/ortahisar" },
      { name: "Göreme", time: "25 dk", link: "/destinations/goreme" },
      { name: "Uçhisar", time: "30 dk", link: "/destinations/uchisar" },
      { name: "Avanos", time: "35 dk", link: "/destinations/avanos" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Mustafapaşa'yı Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Sinasos ile Mustafapaşa aynı yer mi?", a: "Evet. Sinasos, 1924 nüfus mübadelesinden önceki tarihi Rum adıdır. Daha sonra Mustafapaşa adını almıştır." },
      { q: "Mustafapaşa'da peribacası var mı?", a: "Köy merkezinde Göreme'deki gibi peribacaları yoktur; buranın güzelliği ihtişamlı taş mimarisidir. Ancak hemen yanındaki Gomeda Vadisi'nde kaya oluşumları mevcuttur." },
      { q: "Konaklamak için iyi bir tercih mi?", a: "Eğer altınızda aracınız varsa, turist kalabalığından kaçıp sessiz ve muazzam tarihi taş konaklarda kalmak istiyorsanız Kapadokya'daki en iyi tercihlerden biridir." }
    ],

    // 17. CTA
    ctaTitle: "Mustafapaşa'yı Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın en nostaljik köyünde zamanda yolculuk yap.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "El Histórico Pueblo Griego (Sinasos)",
    heroDesc: "Galardonado como 'Mejor Pueblo Turístico' por la ONU, Mustafapasa es un museo al aire libre de espectacular mampostería griega.",
    btnExplore: "EXPLORAR MUSTAFAPASA",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: Abr – Oct",
    statStay: "Estancia Rec: Medio a 1 Día",
    aboutTitle: "Sobre Mustafapasa",
    aboutTags: ["📍 Histórico 'Sinasos'", "🏛️ Mansiones de Piedra", "⛪ Iglesias Griegas", "🥾 Valle Gomeda", "📸 Arquitectura", "🏆 Mejor Pueblo Turístico ONU", "🧘 Máxima Serenidad"],
    aboutText1: "Antiguamente conocido como Sinasos, estaba habitado por ricos comerciantes griegos que construyeron las mansiones más magníficas de Capadocia.",
    aboutText2: "Tras el intercambio de población de 1924, los griegos se fueron y llegaron turcos de los Balcanes. Hoy, caminar por sus calles es viajar en el tiempo.",
    mustSeeTitle: "Descubre Mustafapasa",
    mustSeeCards: [
      { name: "Iglesia de Constantino y Helena", desc: "Iglesia ortodoxa griega del siglo XIX hermosamente conservada.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Monasterio de San Nicolás", desc: "Monasterio histórico parcialmente excavado en la roca.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Antiguas Mansiones Griegas", desc: "Pasea para ver mansiones con increíbles tallas de piedra.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Museo de Arte e Historia", desc: "También conocido como el Museo de las Muñecas, en una mansión de 150 años.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Valle Gomeda", desc: "Un valle salvaje y poco explorado lleno de cuevas y ruinas.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Plaza de Mustafapasa", desc: "El corazón tranquilo del pueblo, perfecto para tomar té turco.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🥾", title: "Caminata Valle Gomeda", price: 30, rating: "4.8", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.9", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "📸", title: "Tour de Arquitectura", price: 40, rating: "4.8", dur: "2 Horas", link: "#" },
      { icon: "🔵", title: "Tour Azul", price: 65, rating: "4.8", dur: "Día Completo", link: "#" },
      { icon: "🏛️", title: "Museo de Muñecas", price: 5, rating: "4.7", dur: "1 Hora", link: "#" },
      { icon: "🍷", title: "Cata de Vinos (Urgup)", price: 35, rating: "4.8", dur: "2 Horas", link: "#" },
      { icon: "🐎", title: "Paseo a Caballo", price: 40, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "👑", title: "Tour VIP Privado", price: 120, rating: "5.0", dur: "Día Completo", link: "/tours/private" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Admira la Mampostería", desc: "Las tallas de piedra en puertas y ventanas no tienen igual." },
      { num: "02", title: "Visita Constantino y Helena", desc: "Símbolo del pasado ortodoxo griego del pueblo." },
      { num: "03", title: "Camina por el Valle Gomeda", desc: "Uno de los valles más misteriosos de Capadocia." },
      { num: "04", title: "Ve las Muñecas Hechas a Mano", desc: "Miles de muñecas reflejando la cultura greco-turca." },
      { num: "05", title: "Cena en una Mansión", desc: "Disfruta de una cena romántica en un patio de 200 años." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Paseo, iglesia y fotos arquitectónicas." },
      { day: "1 Día", desc: "Pueblo + Museo de Muñecas + Valle Gomeda." },
      { day: "Base de Estancia", desc: "Base increíblemente pacífica si tienes coche." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Puertas de Mansiones", time: "Mañana", for: "Detalles", diff: "Fácil", img: "/images/destinations/urgup.jpg" },
      { name: "Patio de la Iglesia", time: "Día", for: "Historia", diff: "Fácil", img: "/images/churches/tokali.jpg" },
      { name: "Ruinas de Gomeda", time: "Tarde", for: "Cuevas", diff: "Medio", img: "/images/valleys/love-panorama.jpg" },
      { name: "Plaza del Pueblo", time: "Atardecer", for: "Nostalgia", diff: "Fácil", img: "/images/destinations/cavusin.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["☕ Cafés en Patios Históricos", "🍽️ Comida Fusión Greco-Turca", "🍷 Cenas Tranquilas", "🥞 Desayuno de Pueblo"],
    stayList: ["🏰 Mansiones de Piedra Restauradas", "💎 Hoteles Boutique Históricos", "🧘 Retiros Serenos", "💰 Casas de Huéspedes", "👑 Suites Históricas"],
    transTitle: "¿Cómo Llegar?",
    transList: ["🚗 Desde Urgup - 10 minutos al sur.", "🚕 Taxi desde Göreme - 25 minutos.", "✈️ Desde Kayseri (ASR) - 1h 05m", "✈️ Desde Nevsehir (NAV) - 50m"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Patios florecidos." },
      { name: "☀️ Verano", desc: "Mucho más tranquilo que Göreme." },
      { name: "🍂 Otoño", desc: "Nostálgico, colores dorados." },
      { name: "❄️ Invierno", desc: "Mansiones bajo la nieve." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "Ignorado por el 'Tour Rojo', por lo que es muy tranquilo.",
      "El Valle Gomeda es salvaje, ve con mapa o guía.",
      "Busca cruces talladas sutilmente en las puertas viejas.",
      "No hay vida nocturna, es para los que buscan paz.",
      "Urgup está a solo 10 minutos para compras o vinos."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Urgup", time: "10 min", link: "/destinations/urgup" },
      { name: "Ortahisar", time: "15 min", link: "/destinations/ortahisar" },
      { name: "Göreme", time: "25 min", link: "/destinations/goreme" },
      { name: "Uchisar", time: "30 min", link: "/destinations/uchisar" },
      { name: "Avanos", time: "35 min", link: "/destinations/avanos" }
    ],
    popToursTitle: "Tours que incluyen Mustafapasa",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Diferencia entre Sinasos y Mustafapasa?", a: "Es el mismo lugar. Sinasos era su nombre griego." },
      { q: "¿Hay chimeneas de hadas aquí?", a: "No en el centro, la belleza aquí es la arquitectura de piedra." },
      { q: "¿Vale la pena quedarse aquí?", a: "Si tienes coche y buscas paz en mansiones históricas, sí." }
    ],
    ctaTitle: "¿Listo para Explorar Mustafapasa?",
    ctaDesc: "Viaja en el tiempo en el pueblo más nostálgico de Capadocia.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function MustafapasaPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = MUSTAFAPASA_DICT[aktifDil] || MUSTAFAPASA_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/urgup.jpg" alt="Mustafapasa Sinasos" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            MUSTAFAPAŞA
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
          {[t.todoCards[0], t.todoCards[3], t.todoCards[4]].map((card: any, idx: number) => (
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
          <h2 className="text-3xl font-black text-slate-900 mb-8">Mustafapasa Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12586.208665672808!2d34.8876404!3d38.5835905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a65a3c2005e0ec843!2sMustafapa%C5%9Fa%2C%20%C3%9Crg%C3%BCp!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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