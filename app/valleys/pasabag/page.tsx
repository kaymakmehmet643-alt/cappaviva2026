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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - PASABAG MONKS VALLEY
// =======================================================
const PASABAG_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Valley of the Monks",
    heroDesc: "Home to Cappadocia's most dramatic multi-capped fairy chimneys and the ancient rock-cut hermit cells of Saint Simeon.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK THE RED TOUR",
    statLoc: "Avanos - Goreme",
    statTime: "Best Time: Morning",
    statStay: "Rec. Time: 1–1.5 Hours",

    // 2. ABOUT
    aboutTitle: "About Pasabag (Monks Valley)",
    aboutTags: ["📍 Between Avanos & Goreme", "🍄 Mushroom-Capped Chimneys", "⛪ St. Simeon Hermit Cell", "🍇 Pasha's Historic Vineyards", "👮 Rock-Cut Police Station", "🎟️ Ticketed Site (Museum Pass)", "🔴 Red Tour Highlight"],
    aboutText1: "Pasabag (meaning 'Pasha’s Vineyard') contains the most striking and best-preserved collection of multi-capped fairy chimneys in all of Cappadocia. Some of these colossal stone pillars branch out into two or three mushroom-like caps high in the sky.",
    aboutText2: "In the 5th century, Christian hermits and monks led by Saint Simeon secluded themselves here to live solitary lives of prayer away from worldly distractions. They carved chapel rooms and hermit shelters deep into the upper caps of the tallest pillars. Today, modern boardwalks allow visitors to wander safely among these geological wonders.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Three-Headed Fairy Chimney", desc: "The iconic multi-branch pillar housing the hermit chapel of Saint Simeon.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Hermitage of St. Simeon", desc: "Climb into the rock shelter where Saint Simeon lived in absolute seclusion.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Fairy Chimney Police Station", desc: "One of the most photographed curiosities: an active police post inside a hollow rock.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Ancient Vineyard Paths", desc: "Paved walking paths winding through centuries-old indigenous grapevines.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Twin-Capped Columns", desc: "Spectacular dual-headed chimneys showing the unique stages of basalt cap erosion.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Zelve Connection Road", desc: "Located just 1km from Zelve Open Air Museum, forming a combined archaeological park.", img: "/images/museums/zelve.jpg", link: "/museums/zelve" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Pasabag",
    todoCards: [
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.9", dur: "Full Day", link: "/tours/red-tour" },
      { icon: "🚘", title: "Classic Car Photoshoot", price: 80, rating: "4.8", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "📸", title: "Flying Dress Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🐪", title: "Camel Safari", price: 35, rating: "4.7", dur: "1 Hour", link: "/tours/camel" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.8", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Private VIP Guide", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Pasabag Experience Guide",
    expList: [
      { num: "01", title: "Stand Beneath the Three-Headed Chimney", desc: "Look straight up at the 20-meter triple-branched chimney to comprehend the sheer scale of wind erosion." },
      { num: "02", title: "Visit Saint Simeon's Cell", desc: "Step inside the interior chapel to see the rock-carved seating, niche altars, and small monk sleeping quarters." },
      { num: "03", title: "Photograph the Stone Police Station", desc: "Snap a souvenir photo of the official Turkish Gendarmerie post carved directly into an ancient rock column." },
      { num: "04", title: "Combine with Zelve Valley", desc: "Your entrance ticket includes both Pasabag and Zelve. Walk or drive 2 minutes down the road to explore both." },
      { num: "05", title: "Taste Fresh Pomegranate Juice", desc: "Cool off under the pergola cafes outside the main gate with freshly squeezed juice and local dried figs." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "45–60 Minutes", desc: "Sufficient to walk the paved circular boardwalk, visit the chapel, and take landmark photos." },
      { day: "Red Tour Stop", desc: "Most guided day excursions allocate 50 minutes for guided storytelling and independent exploration." },
      { day: "Combined Half Day", desc: "Dedicate 3 hours to thoroughly explore both Pasabag and the neighbouring Zelve Open Air Museum." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Three-Headed Chimney Base", time: "Morning", for: "Iconic Wide Angle", diff: "Easy", img: "/images/valleys/love-valley.jpg" },
      { name: "Boardwalk Vineyard Path", time: "Daytime", for: "Symmetrical Perspectives", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "Inside St. Simeon Cell", time: "Midday", for: "Historic Interiors", diff: "Medium", img: "/images/churches/tokali.jpg" },
      { name: "Outside the Entry Gate", time: "Late Afternoon", for: "Distant Skyline", diff: "Easy", img: "/images/valleys/rose-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Nearby Stays",
    eatList: ["☕ Shaded Gate Cafés & Tea Gardens", "🥤 Fresh Pomegranate & Orange Squeezers", "🥞 Traditional Hot Gözleme Stalls", "🍽️ Pottery Kebabs in Avanos (8 mins away)"],
    stayList: ["📍 (No Accommodations Inside Protected Site)", "🏺 Riverside Boutique Hotels in Avanos (8 mins)", "💎 Cave Hotels in Goreme (12 mins)", "🏰 Historical Mansions in Cavusin (8 mins)"],

    // 10. TRANSPORT
    transTitle: "How to Access Pasabag?",
    transList: ["🔴 Join the Red Tour: The premier way to visit with hotel pickup, entrance fees, and guide included.", "🚗 By Rental Car: Located along the Avanos-Zelve roadway with a large asphalt parking lot.", "🚌 Public Minibus: Minibuses operating between Avanos and Goreme/Zelve pass the entrance regularly.", "🚕 By Taxi: A quick 10-minute taxi ride from either Goreme, Cavusin, or Avanos."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌅 Early Morning", desc: "Arrive at opening (08:00) before tour buses arrive for completely empty paths." },
      { name: "🌇 Golden Hour", desc: "Late afternoon sun illuminates the dark basalt caps against white tuff." },
      { name: "🌸 Spring", desc: "Pleasant temperatures for walking the paved outdoor boardwalks." },
      { name: "❄️ Winter", desc: "Snow resting on the mushroom caps looks like frosted cupcakes." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Pasabag is a paid archaeological site under the Ministry of Culture. Museum Pass Turkey is fully valid here.",
      "Your entry ticket is a combined pass that also grants entry to Zelve Open Air Museum on the exact same day.",
      "The site features smooth wooden and stone walking boardwalks, making it very accessible for strollers and elders.",
      "Do not climb on the fragile rock formations beyond the boundary ropes to prevent erosion and rockfall accidents.",
      "Bring sun protection during summer; the open valley floor reflects midday heat off the light stone."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Zelve Open Air Museum", time: "2 min drive", link: "/museums/zelve" },
      { name: "Devrent (Imagination) Valley", time: "5 min drive", link: "/valleys/devrent" },
      { name: "Cavusin Village", time: "8 min drive", link: "/destinations/cavusin" },
      { name: "Avanos Town", time: "8 min drive", link: "/destinations/avanos" },
      { name: "Goreme Center", time: "12 min drive", link: "/destinations/goreme" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Pasabag",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Why is it called Monks Valley?", a: "Because Christian hermits who followed the ascetic path of Saint Simeon the Stylite hollowed out these tall pillars to live as recluses, dedicating their lives to solitary meditation." },
      { q: "How did the chimneys get multiple caps?", a: "The hard basalt caprock layers eroded at different speeds than the softer volcanic ash (tuff) beneath, creating columns that gradually split into two or three distinct heads." },
      { q: "Can I use my Museum Pass here?", a: "Yes. Pasabag is part of the Zelve-Pasabag archaeological site and accepts Museum Pass Turkey. Your ticket is valid for both sites on the same day." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Monks Valley?",
    ctaDesc: "Book the Red Tour or a private vehicle excursion to discover Pasabag and Zelve today.",
    btnPlan: "BOOK THE RED TOUR"
  },
  tr: {
    // 1. HERO
    heroSub: "Rahipler ve Keşişler Vadisi",
    heroDesc: "Kapadokya'nın en görkemli çok şapkalı peribacalarına ve Aziz Simeon'un tarihi inziva hücrelerine ev sahipliği yapan eşsiz bir açık hava müzesi.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "KIRMIZI TUR REZERVE ET",
    statLoc: "Avanos - Göreme",
    statTime: "En İyi Zaman: Sabah",
    statStay: "Önerilen Süre: 1–1.5 Saat",

    // 2. ABOUT
    aboutTitle: "Paşabağ (Rahipler Vadisi) Hakkında",
    aboutTags: ["📍 Avanos ile Göreme Arasında", "🍄 Mantar Başlıklı Peribacaları", "⛪ Aziz Simeon Çile Hücresi", "🍇 Paşa'nın Tarihi Bağları", "👮 Peribacası İçi Jandarma Karakolu", "🎟️ Müzekart Geçerli", "🔴 Kırmızı Turun Yıldızı"],
    aboutText1: "Paşabağ (eski adıyla Keşişler veya Rahipler Vadisi), Kapadokya'da mantar formundaki çok başlı peribacalarının en görkemli ve en iyi korunmuş örneklerine ev sahipliği yapar. Buradaki bazı devasa kaya sütunları gökyüzüne doğru iki ve üç şapkaya ayrılarak yükselir.",
    aboutText2: "5. yüzyılda Aziz Simeon'un öğretisini takip eden Hristiyan keşişler, dünyevi hayattan uzaklaşmak ve yalnız kalmak amacıyla bu vadiye sığınmışlardır. En yüksek peribacalarının şapkalarına odalar, şapeller ve çile hücreleri oymuşlardır. Günümüzde vadi, düzenli ahşap yürüyüş yollarıyla ziyaretçilerini büyülemektedir.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Üç Başlı Peribacası", desc: "İçinde Aziz Simeon'un inziva hücresi ve şapelini barındıran üç çatallı ikonik sütun.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Aziz Simeon Şapeli ve Hücresi", desc: "Aziz Simeon'un dünyadan izole şekilde yaşadığı kaya oyma çilehaneyi yakından görün.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Peribacası Jandarma Karakolu", desc: "İçi oyularak aktif güvenlik noktası haline getirilmiş, en çok fotoğraflanan kaya karakol.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Tarihi Bağ Yolları", desc: "Asırlık yerel üzüm asmalarının arasından geçen düzenli yürüyüş parkurları.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Çift Şapkalı Sütunlar", desc: "Bazalt tabakanın tüf üzerinde oluşturduğu farklı erozyon evrelerini sergileyen peribacaları.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Zelve Bağlantısı", desc: "Yalnızca 1 km mesafedeki Zelve Açık Hava Müzesi ile birleşik biletli arkeolojik park.", img: "/images/museums/zelve.jpg", link: "/museums/zelve" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Paşabağ Deneyimleri",
    todoCards: [
      { icon: "🔴", title: "Kapadokya Kırmızı Tur", price: 60, rating: "4.9", dur: "Tam Gün", link: "/tours/red-tour" },
      { icon: "🚘", title: "Klasik Araçla Çekim", price: 80, rating: "4.8", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "📸", title: "Uçan Elbise Dış Çekim", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🐪", title: "Deve Safarisi", price: 35, rating: "4.7", dur: "1 Saat", link: "/tours/camel" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.8", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Özel Rehberli Tur", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Paşabağ Deneyim Rehberi",
    expList: [
      { num: "01", title: "Üç Başlı Dev Sütunun Altında Durun", desc: "Yaklaşık 20 metre yüksekliğindeki üç çatallı peribacasının dibine geçip rüzgar erozyonunun gücüne hayran kalın." },
      { num: "02", title: "Aziz Simeon'un Hücresine Bakın", desc: "Kayaya oyulmuş şapelin içine göz atarak keşişlerin taş yataklarını ve oturma nişlerini inceleyin." },
      { num: "03", title: "Kaya Jandarma Karakolunu Çekin", desc: "Dünyanın en sıra dışı karakol binalarından biri olan peribacasını mutlaka fotoğraflayın." },
      { num: "04", title: "Zelve Ören Yeri ile Birleştirin", desc: "Aldığınız bilet aynı gün Zelve Açık Hava Müzesi'nde de geçerlidir; 2 dakika ilerideki Zelve'yi kesinlikle kaçırmayın." },
      { num: "05", title: "Girişte Taze Meyve Suyu İçin", desc: "Ören yeri çıkışındaki gölgelik kafelerde taze sıkılmış nar-portakal suyu molası verin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "45–60 Dakika", desc: "Ahşap yollarda yürümek, şapeli görmek ve fotoğraf çekilmek için ideal bir süredir." },
      { day: "Kırmızı Tur Molası", desc: "Günlük rehberli turlar burada anlatım ve serbest zaman dahil yaklaşık 50 dakika mola verir." },
      { day: "Zelve ile Yarım Gün", desc: "Paşabağ ve hemen komşusu Zelve Açık Hava Müzesi'ni sindirerek gezmek için 3 saat ayırın." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Üç Başlı Peribacası Etekleri", time: "Sabah", for: "Geniş Açı İkonik Kare", diff: "Kolay", img: "/images/valleys/love-valley.jpg" },
      { name: "Ahşap Yürüyüş Yolu", time: "Gündüz", for: "Derinlik ve Perspektif", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Aziz Simeon Şapeli İçi", time: "Öğle", for: "Tarihi İç Mekan", diff: "Orta", img: "/images/churches/tokali.jpg" },
      { name: "Giriş Meydanı Silüeti", time: "Akşamüstü", for: "Peribacaları Kümesi", diff: "Kolay", img: "/images/valleys/rose-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["☕ Girişteki Gölgelik Çay Bahçeleri", "🥤 Taze Nar ve Portakal Suyu Tezgâhları", "🥞 Sıcak Gözleme ve Ayran Çadırları", "🍽️ Avanos'ta Çömlek Kebabı (8 dk araçla)"],
    stayList: ["📍 (Sit Alanı İçinde Otel Bulunmaz)", "🏺 Avanos Nehir Kenarı Otelleri (8 dk)", "💎 Göreme Butik Mağara Otelleri (12 dk)", "🏰 Çavuşin Köyü Konakları (8 dk)"],

    // 10. TRANSPORT
    transTitle: "Paşabağ'a Nasıl Gidilir?",
    transList: ["🔴 Kırmızı Tur'a Katılın: Ulaşım, biletler ve rehberlik dahil en konforlu yöntemdir.", "🚗 Kiralık Araçla: Avanos-Zelve yolu üzerindedir; geniş ve asfalt bir otoparkı mevcuttur.", "🚌 Minibüsle: Avanos ile Göreme/Zelve arasında çalışan ilçe minibüsleri kapının önünden geçer.", "🚕 Taksiyle: Göreme, Çavuşin veya Avanos merkezlerinden taksi ile 10 dakikada varılır."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌅 Sabah Erken (08:00)", desc: "Tur otobüsleri gelmeden önce sessiz ve boş patikalarda yürümek için." },
      { name: "🌇 Akşamüstü", desc: "Yatık güneş ışıkları koyu renkli şapkaların detaylarını belirginleştirir." },
      { name: "🌸 İlkbahar", desc: "Açık alandaki ahşap yollarda rahat hava sıcaklığında yürümek için idealdir." },
      { name: "❄️ Kış", desc: "Mantar başlıklı peribacalarının üzerindeki kar örtüsü eşsiz bir kartpostal görüntüsü sunar." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Paşabağ, T.C. Kültür ve Turizm Bakanlığı'na bağlı biletli bir ören yeridir. Müzekart geçerlidir.",
      "Aldığınız giriş bileti aynı gün Zelve Açık Hava Müzesi'ne de giriş hakkı sağlar. Sakın biletinizi atmayın!",
      "Zemin düzgün ahşap ve taş yollardan oluştuğu için pusetli çocuklu aileler ve yaşlılar için çok uygundur.",
      "Erozyon ve güvenlik gerekçesiyle halatla çevrili sınırların dışına çıkıp peribacalarına tırmanmak yasaktır.",
      "Yazın vadi tabanı güneşi yansıtır, yanınızda şapka ve güneş gözlüğü bulundurmanız tavsiye edilir."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Zelve Açık Hava Müzesi", time: "2 dk araçla", link: "/museums/zelve" },
      { name: "Devrent (Hayal) Vadisi", time: "5 dk araçla", link: "/valleys/devrent" },
      { name: "Çavuşin Köyü", time: "8 dk araçla", link: "/destinations/cavusin" },
      { name: "Avanos Çömlek Kasabası", time: "8 dk araçla", link: "/destinations/avanos" },
      { name: "Göreme Merkez", time: "12 dk araçla", link: "/destinations/goreme" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Paşabağ'ı Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Neden Rahipler veya Keşişler Vadisi deniyor?", a: "Hristiyanlıkta Aziz Simeon'un çileci yaşam tarzını benimseyen keşişler dünyadan elini eteğini çekip bu peribacalarına oydukları hücrelerde münzevi bir yaşam sürdükleri için bu adı almıştır." },
      { q: "Peribacaları nasıl çok şapkalı olmuş?", a: "Sert bazalt kaya tabakaları altındaki yumuşak tüf tabakasına kıyasla rüzgar ve yağmurla farklı hızlarda aşınmış, zamanla tek gövde üzerinde iki veya üç ayrı mantar kafa oluşmuştur." },
      { q: "Müzekart geçerli mi?", a: "Evet. Paşabağ resmi bir ören yeridir ve Müzekart geçerlidir. Bilet aldığınızda bu bilet aynı gün Zelve Açık Hava Müzesi'ni de kapsar." }
    ],

    // 17. CTA
    ctaTitle: "Paşabağ'ı Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kırmızı Tur rezervasyonu yaparak Paşabağ ve Zelve'yi uzman rehber eşliğinde keşfet.",
    btnPlan: "KIRMIZI TUR'U İNCELE"
  },
  es: {
    heroSub: "El Valle de los Monjes",
    heroDesc: "Hogar de las chimeneas de hadas multicabezas más espectaculares de Capadocia y las antiguas celdas eremíticas de San Simeón.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR EL TOUR ROJO",
    statLoc: "Avanos - Göreme",
    statTime: "Mejor Época: Mañana",
    statStay: "Tiempo Rec: 1–1.5 Horas",

    aboutTitle: "Sobre Pasabag (Valle de los Monjes)",
    aboutTags: ["📍 Entre Avanos y Göreme", "🍄 Chimeneas con Sombrero de Hongo", "⛪ Celda de San Simeón", "🍇 Viñedos del Pashá", "👮 Puesto de Policía en la Roca", "🎟️ Entrada con Museum Pass", "🔴 Parada del Tour Rojo"],
    aboutText1: "Pasabag (que significa 'Viñedo del Pashá') contiene la colección más llamativa de chimeneas de hadas multicabezas de toda Capadocia. Algunos de estos pilares se ramifican en dos o tres sombreros en lo alto.",
    aboutText2: "En el siglo V, monjes y ermitaños liderados por San Simeón se aislaron aquí para orar en soledad. Tallaron capillas y refugios en las copas de las columnas más altas. Hoy, senderos de madera permiten recorrer este paisaje con total comodidad.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Chimenea de Tres Cabezas", desc: "El pilar icónico que alberga la capilla eremítica de San Simeón.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Ermita de San Simeón", desc: "Conoce el refugio donde San Simeón vivió en absoluto retiro espiritual.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Puesto de Policía en la Roca", desc: "Una comisaría activa de la gendarmería tallada dentro de una chimenea de hadas.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Senderos entre Viñedos", desc: "Pasarelas peatonales que serpentean entre viñedos centenarios.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Columnas de Doble Sombrero", desc: "Pilares espectaculares que muestran el proceso de erosión del basalto.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Conexión con Zelve", desc: "A solo 1 km del Museo de Zelve, formando un parque arqueológico conjunto.", img: "/images/museums/zelve.jpg", link: "/museums/zelve" }
    ],

    todoTitle: "Experiencias en Pasabag",
    todoCards: [
      { icon: "🔴", title: "Tour Rojo de Capadocia", price: 60, rating: "4.9", dur: "Día Completo", link: "/tours/red-tour" },
      { icon: "🚘", title: "Sesión en Coche Clásico", price: 80, rating: "4.8", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "📸", title: "Sesión Vestido Volador", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🐪", title: "Safari en Camello", price: 35, rating: "4.7", dur: "1 Hora", link: "/tours/camel" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.8", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Guía Privado VIP", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Párate bajo la Chimenea de Tres Cabezas", desc: "Mira hacia arriba a este pilar de 20 metros para apreciar la escala de la erosión del viento." },
      { num: "02", title: "Conoce la Celda de San Simeón", desc: "Observa los altares tallados y los nichos donde dormían los monjes ermitaños." },
      { num: "03", title: "Fotografía la Comisaría de Roca", desc: "Una de las fotos más curiosas: un puesto de gendarmería dentro de una formación natural." },
      { num: "04", title: "Visita Zelve en la Misma Entrada", desc: "Tu billete incluye tanto Pasabag como Zelve el mismo día; no te pierdas el cañón vecino." },
      { num: "05", title: "Prueba Zumo de Granada Fresco", desc: "Refréscate en las terrazas sombreadas a la entrada del recinto arqueológico." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "45–60 Minutos", desc: "Tiempo ideal para recorrer las pasarelas, visitar la capilla y tomar fotos." },
      { day: "Parada del Tour Rojo", desc: "Los tours guiados dedican unos 50 minutos entre explicación y tiempo libre." },
      { day: "Medio Día con Zelve", desc: "Dedica 3 horas para explorar con calma tanto Pasabag como el Museo al Aire Libre de Zelve." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Frente a las Tres Cabezas", time: "Mañana", for: "Gran Angular Icónico", diff: "Fácil", img: "/images/valleys/love-valley.jpg" },
      { name: "Pasarela entre Viñedos", time: "Día", for: "Perspectiva y Profundidad", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Interior Capilla San Simeón", time: "Mediodía", for: "Detalles Históricos", diff: "Medio", img: "/images/churches/tokali.jpg" },
      { name: "Entrada y Silueta General", time: "Tarde", for: "Conjunto de Rocas", diff: "Fácil", img: "/images/valleys/rose-valley.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["☕ Terrazas Sombreadas a la Entrada", "🥤 Zumo Fresco de Granada y Naranja", "🥞 Puestos de Gözleme Tradicional", "🍽️ Restaurantes de Kebab en Avanos (8 min)"],
    stayList: ["📍 (Sin hoteles dentro del parque protegido)", "🏺 Hoteles Junto al Río en Avanos (8 min)", "💎 Hoteles Cueva en Göreme (12 min)", "🏰 Mansiones en Çavuşin (8 min)"],

    transTitle: "¿Cómo Llegar a Pasabag?",
    transList: ["🔴 Tour Rojo: La forma más cómoda con transporte, entradas y guía incluidos.", "🚗 Coche de Alquiler: En la carretera Avanos-Zelve, con amplio aparcamiento asfaltado.", "🚌 Minibús: Líneas locales entre Avanos y Göreme/Zelve paran frente a la entrada.", "🚕 Taxi: A 10 minutos desde Göreme, Çavuşin o Avanos."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌅 Mañana Temprano (08:00)", desc: "Antes de la llegada de los autobuses para disfrutar los caminos vacíos." },
      { name: "🌇 Tarde", desc: "La luz rasante acentúa el contraste de los sombreros oscuros." },
      { name: "🌸 Primavera", desc: "Clima fresco perfecto para pasear por las pasarelas al aire libre." },
      { name: "❄️ Invierno", desc: "La nieve sobre los sombreros de hongo crea una postal inolvidable." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Pasabag es un yacimiento de pago del Ministerio de Cultura. El Museum Pass Turquía es válido aquí.",
      "Tu entrada combinada te permite entrar también al Museo al Aire Libre de Zelve el mismo día.",
      "Los senderos son pasarelas llanas de madera y piedra, ideales para carritos de bebé y personas mayores.",
      "Por seguridad y conservación, no salgas de las pasarelas ni intentes escalar las formaciones.",
      "En verano la piedra clara refleja el calor; lleva sombrero, gafas de sol y agua."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Museo al Aire Libre de Zelve", time: "2 min en coche", link: "/museums/zelve" },
      { name: "Valle de Devrent", time: "5 min en coche", link: "/valleys/devrent" },
      { name: "Pueblo de Çavuşin", time: "8 min en coche", link: "/destinations/cavusin" },
      { name: "Avanos", time: "8 min en coche", link: "/destinations/avanos" },
      { name: "Göreme", time: "12 min en coche", link: "/destinations/goreme" }
    ],

    popToursTitle: "Tours que Visitan Pasabag",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Por qué se llama Valle de los Monjes?", a: "Porque monjes ermitaños que seguían a San Simeón habitaron estas altas columnas para vivir en oración solitaria y contemplación." },
      { q: "¿Por qué tienen varios sombreros las rocas?", a: "La capa superior de basalto duro se erosionó a un ritmo diferente que la toba volcánica blanda inferior, dividiéndose gradualmente en dos o tres cabezas." },
      { q: "¿Sirve el Museum Pass?", a: "Sí. Pasabag forma parte del sitio arqueológico Zelve-Pasabag y acepta el Museum Pass Turquía. La entrada sirve para ambos recintos en el mismo día." }
    ],

    ctaTitle: "¿Listo para Descubrir Pasabag?",
    ctaDesc: "Reserva el Tour Rojo o un recorrido privado para explorar Pasabag y Zelve hoy.",
    btnPlan: "RESERVAR EL TOUR ROJO"
  }
};

export default function PasabagValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = PASABAG_DICT[aktifDil] || PASABAG_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/love-valley.jpg" alt="Pasabag Monks Valley" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            PAŞABAĞ
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
              {t.btnExplore}
            </a>
            <Link href="/tours/red-tour" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
            <h3 className="text-3xl font-black mb-8 text-slate-900">Food & Drink</h3>
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
            <Link href="/tours/red-tour" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Book The Red Tour &rarr;
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
          {[t.todoCards[0], t.todoCards[1], t.todoCards[4]].map((card: any, idx: number) => (
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

      {/* 15. GOOGLE MAP (Paşabağ) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Paşabağ (Monks Valley) Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12571.359281721516!2d34.8512!3d38.6775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6a18d18471b7%3A0xa19bf0800d3d52d!2sPa%C5%9Faba%C4%9F%20%C3%96renyeri!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
            <Link href="/tours/red-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}