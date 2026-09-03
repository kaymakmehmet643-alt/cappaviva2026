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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - RED VALLEY (KIZIL VADİ)
// =======================================================
const RED_VALLEY_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Legendary Sunset Canyon",
    heroDesc: "Renowned for its dramatic crimson ridges, deep erosion canyons, and the most celebrated sunset spectacle in Cappadocia.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK SUNSET SAFARI",
    statLoc: "Ortahisar - Goreme",
    statTime: "Best Time: Sunset",
    statStay: "Rec. Time: 2–3 Hours",

    // 2. ABOUT
    aboutTitle: "About Red Valley (Kızılçukur)",
    aboutTags: ["📍 Near Ortahisar & Goreme", "🌅 #1 Sunset Spot in Cappadocia", "🔴 Deep Crimson Ridges", "🥾 Epic Ridgeline Trails", "🍷 Sunset Wine Tasting", "🏍️ ATV Safari Finish Line", "📸 Dramatic Golden Hour"],
    aboutText1: "Red Valley (Kızıl Vadi / Kızılçukur) is celebrated worldwide for its dramatic, sharp-ridged tuff formations that turn an intense glowing crimson as the sun dips below the horizon. The iron-rich minerals in the rock create vibrant shades of red, amber, and purple.",
    aboutText2: "Connected seamlessly with Rose Valley, Red Valley offers incredible hiking trails featuring natural rock tunnels, hidden dovecotes, and panoramic ridges. The official viewpoint at the top is the crowning sunset gathering spot in Cappadocia, where classic cars, quad bikes, and travelers assemble every evening.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Kızılçukur Sunset Viewpoint", desc: "The official terrace offering 360-degree panoramic views of the glowing crimson canyons.", img: "/images/valleys/red-valley.jpg", link: "#" },
      { name: "The Crimson Ridges", desc: "Sharp, knife-edge rock ridges sculpted by millions of years of wind and rain erosion.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Rock-Cut Tunnels", desc: "Hidden passages carved through the canyon walls connecting trail sections.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Grape Orchards & Vineyards", desc: "Lush patches of green contrasting against the deep red volcanic rock on the valley floor.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Üzümlü Church (Grape Church)", desc: "A nearby historic rock church famous for its grape-themed ceiling frescoes.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Rose Valley Trail Link", desc: "The natural ridge pass that allows hikers to traverse between Red and Rose valleys.", img: "/images/valleys/love-panorama.jpg", link: "/valleys/rose-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Red Valley",
    todoCards: [
      { icon: "🏍️", title: "Sunset ATV Safari", price: 35, rating: "4.9", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🚘", title: "Classic Car at Sunset", price: 80, rating: "5.0", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🐎", title: "Sunset Horseback Ride", price: 45, rating: "4.8", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🥾", title: "Red Valley Sunset Hike", price: 40, rating: "4.9", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🍷", title: "Sunset Wine Experience", price: 50, rating: "4.8", dur: "2 Hours", link: "/book" },
      { icon: "📸", title: "Flying Dress Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Jeep Safari Sunset", price: 45, rating: "4.8", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Private VIP Sunset Tour", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Red Valley Experience Guide",
    expList: [
      { num: "01", title: "Experience the Sunset Spectacle", desc: "Stand on the edge of the viewpoint as the entire valley turns from gold to deep fiery red in a matter of minutes." },
      { num: "02", title: "Hike Through the Rock Tunnels", desc: "Venture into the valley floor and navigate the dark, cool tunnels carved directly through the rock walls." },
      { num: "03", title: "Toast with Local Wine", desc: "Bring or purchase a glass of local Cappadocian wine to celebrate the sunset along the cliff edge." },
      { num: "04", title: "Arrive in a Vintage Convertible", desc: "Book a classic American car tour to arrive at the viewpoint in style for unforgettable photographs." },
      { num: "05", title: "Hike the Ridge to Rose Valley", desc: "Follow the upper trail connecting Kızılçukur into Güllüdere (Rose Valley) for the ultimate hiking loop." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1 Hour (Sunset Only)", desc: "Drive straight to the Kızılçukur viewing terrace 45 minutes before sunset." },
      { day: "2-3 Hours (Safari)", desc: "Join an ATV, Horse, or Jeep tour that explores the trails and finishes at the viewpoint." },
      { day: "Half Day (Full Hike)", desc: "Trek the full loop through both Red and Rose valleys, exploring cave churches and canyon floors." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Cliff Edge at Sunset", time: "Sunset", for: "Glowing Red Ridges", diff: "Easy", img: "/images/valleys/red-valley.jpg" },
      { name: "Classic Car Silhouette", time: "Golden Hour", for: "Vintage Sunset", diff: "Easy", img: "/images/destinations/goreme.jpg" },
      { name: "Valley Floor Formations", time: "Afternoon", for: "Canyon Drama", diff: "Medium", img: "/images/valleys/rose-valley.jpg" },
      { name: "Upper Ridge Trail", time: "Late Afternoon", for: "Sweeping Aerial Views", diff: "Medium", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY (Valley specific)
    eatStayTitle: "Refreshments & Nearby Spots",
    eatList: ["🍷 Cliffside Wine & Beer Terraces", "☕ Sunset Viewpoint Cafés", "🥞 Gozleme & Snack Stalls", "🍽️ Fine Dining in Ortahisar / Goreme (10 mins)"],
    stayList: ["📍 (No Hotels in the Canyon)", "🏰 Ortahisar Cave Suites (5 mins away)", "💎 Goreme Heritage Hotels (10 mins away)", "🏕️ Viewpoint Camping"],

    // 10. TRANSPORT
    transTitle: "How to Access Red Valley?",
    transList: ["🚗 By Car: The official Kızılçukur Sunset Viewpoint is accessible via road from Ortahisar (a small parking/entry fee applies).", "🥾 On Foot: Hiking trails begin from Cavusin village or from behind the Goreme Open Air Museum road.", "🏍️ By Tour: Sunset ATV, horseback, and Jeep tours provide roundtrip transport directly from your hotel."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌇 Sunset", desc: "The definitive time to visit. Unmatched in all of Turkey." },
      { name: "🌸 Spring", desc: "Mild afternoon temperatures for canyon hikes." },
      { name: "🍂 Autumn", desc: "Crisp air and vibrant red contrasts against clear skies." },
      { name: "❄️ Winter", desc: "Snow on the red ridges creates an unbelievable contrast." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Arrive at least 45 to 60 minutes before sunset. Parking fills up quickly, and the colors start shifting well before the sun actually dips.",
      "Bring a jacket or windbreaker, even in summer. The clifftop viewpoint can get very breezy and chilly once the sun disappears.",
      "If hiking back to Goreme after sunset, bring a headlamp or phone flashlight—the trails become pitch black within 15 minutes.",
      "The parking lot at the viewpoint charges a small municipal entrance fee per vehicle.",
      "Stay on marked paths when hiking along the ridges; the gravel on the slopes can be loose and slippery."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Valleys",
    nearbyList: [
      { name: "Rose Valley", time: "Connected", link: "/valleys/rose-valley" },
      { name: "Ortahisar Castle", time: "5 min drive", link: "/destinations/ortahisar" },
      { name: "Sword Valley", time: "10 min drive", link: "/valleys/kiliclar" },
      { name: "Goreme Center", time: "10 min drive", link: "/destinations/goreme" },
      { name: "Cavusin Village", time: "10 min drive", link: "/destinations/cavusin" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Red Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Red Valley the same as Kızılçukur?", a: "Yes. Kızılçukur is the Turkish name, which translates to 'Red Pit' or 'Red Hollow'. It is widely known in English as Red Valley." },
      { q: "Why do the rocks look red?", a: "The volcanic tuff rock in this specific valley is rich in iron oxide minerals. When the low-angled golden sunlight hits these minerals at sunset, it produces an intense red and orange glow." },
      { q: "Can I do an ATV tour here?", a: "Yes! The ATV safari sunset tour is the most popular way to experience Red Valley, ending right at the sunset viewpoint." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Experience Red Valley?",
    ctaDesc: "Book your sunset ATV safari, classic car tour, or guided hike today.",
    btnPlan: "BOOK YOUR EXPERIENCE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Gün Batımı Başkenti",
    heroDesc: "Kızılın ve morun her tonuna bürünen dik tüf sırtları, derin kanyonları ve dünyaca ünlü gün batımı manzarasıyla Kızıl Vadi (Kızılçukur) eşsizdir.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "GÜN BATIMI TURU REZERVE ET",
    statLoc: "Ortahisar - Göreme",
    statTime: "En İyi Zaman: Gün Batımı",
    statStay: "Önerilen Süre: 2–3 Saat",

    // 2. ABOUT
    aboutTitle: "Kızıl Vadi (Kızılçukur) Hakkında",
    aboutTags: ["📍 Ortahisar ve Göreme Arasında", "🌅 Kapadokya'nın 1 Numaralı Gün Batımı", "🔴 Yoğun Kızıl ve Mor Sırtlar", "🥾 Panoramik Sırt Yolları", "🍷 Gün Batımı Şarap Keyfi", "🏍️ ATV Safari Bitiş Noktası", "📸 Efsanevi Altın Saat"],
    aboutText1: "Kızıl Vadi (Kızılçukur), güneş ufuk çizgisinin altına doğru inerken parlayan alev kırmızısı ve mor renkteki sarp tüf sırtlarıyla tüm dünyada tanınır. Kayaların içindeki zengin demir mineralleri, güneşin batış açısıyla birleştiğinde adeta görsel bir şölen yaratır.",
    aboutText2: "Gül Vadisi ile doğal olarak birleşen vadi; kaya tünelleri, gizli güvercinlikler ve nefes kesen sırt patikalarıyla harika bir yürüyüş rotası sunar. Vadinin tepesindeki seyir terası ise her akşam klasik arabaların, ATV turlarının ve yüzlerce gezginin gün batımını kutlamak için toplandığı ana merkezdir.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Kızılçukur Seyir Tepesi", desc: "Tüm kanyonun kızıla bürünüşünü 360 derece panoramik olarak izleyebileceğiniz resmi seyir terası.", img: "/images/valleys/red-valley.jpg", link: "#" },
      { name: "Kızıl Sırtlar (Ridges)", desc: "Milyonlarca yıllık rüzgar ve yağmur erozyonunun şekillendirdiği bıçak sırtı keskin kayalıklar.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Kaya Oyma Tüneller", desc: "Vadi tabanında parkurları birbirine bağlayan kayaların içine oyulmuş gizli geçitler.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Üzüm Bağları ve Meyve Bahçeleri", desc: "Kızıl kayaların tabanında yerel halkın yetiştirdiği yemyeşil bağlar ve kayısı ağaçları.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Üzümlü Kilise", desc: "Vadi yakınlarında, tavanındaki asma ve üzüm salkımı freskleriyle ünlü tarihi kaya kilisesi.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Gül Vadisi Geçişi", desc: "Kızılçukur'dan Güllüdere'ye (Rose Valley) yürüyerek geçmenizi sağlayan panoramik sırt yolu.", img: "/images/valleys/love-panorama.jpg", link: "/valleys/rose-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Kızıl Vadi Deneyimleri",
    todoCards: [
      { icon: "🏍️", title: "Gün Batımı ATV Safari", price: 35, rating: "4.9", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🚘", title: "Klasik Araç ile Gün Batımı", price: 80, rating: "5.0", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🐎", title: "Atlı Safari (Gün Batımı)", price: 45, rating: "4.8", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🥾", title: "Rehberli Kızıl Vadi Yürüyüşü", price: 40, rating: "4.9", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🍷", title: "Uçurumda Şarap Tadımı", price: 50, rating: "4.8", dur: "2 Saat", link: "/book" },
      { icon: "📸", title: "Uçan Elbise Dış Çekim", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Jeep Safari (Kızılçukur)", price: 45, rating: "4.8", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "👑", title: "VIP Özel Gün Batımı Turu", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Kızıl Vadi Deneyim Rehberi",
    expList: [
      { num: "01", title: "Günün En Büyüleyici Anını İzleyin", desc: "Güneş batarken kayaların dakikalar içinde altından kızıla, ardından mora dönüşünü seyir terasından seyredin." },
      { num: "02", title: "Kaya Tünellerinde Yürüyün", desc: "Vadi tabanına inin ve kayaların içine oyulmuş serin ve karanlık geçitlerden geçerek doğayı keşfedin." },
      { num: "03", title: "Kapadokya Şarabıyla Kadeh Kaldırın", desc: "Seyir terasındaki kafelerden yerel bir kadeh şarap alarak günün bitişini uçurumun kenarında kutlayın." },
      { num: "04", title: "Klasik Araçla Havalı Bir Giriş Yapın", desc: "Üstü açık eski model bir Amerikan arabası kiralayarak gün batımı noktasına nostaljik bir giriş yapın." },
      { num: "05", title: "Gül Vadisi'ne Sırtlardan Geçin", desc: "Kızılçukur'dan başlayıp sırt patikalarını takip ederek Güllüdere'ye inen eşsiz yürüyüş rotasını tamamlayın." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1 Saat (Sadece Gün Batımı)", desc: "Güneş batmadan 45 dakika önce doğrudan arabanızla Kızılçukur seyir terasına çıkın." },
      { day: "2-3 Saat (Safari Turları)", desc: "Vadinin tozlu yollarından geçip seyir tepesinde son bulan ATV veya At turuna katılın." },
      { day: "Yarım Gün (Tam Trekking)", desc: "Kızıl ve Gül vadilerini birbirine bağlayan tünelli ve kiliseli büyük yürüyüş rotasını tamamlayın." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Kızılçukur Seyir Uçurumu", time: "Gün Batımı", for: "Alev Kırmızısı Kayalar", diff: "Kolay", img: "/images/valleys/red-valley.jpg" },
      { name: "Klasik Araç ile Silüet", time: "Altın Saat", for: "Nostaljik Kareler", diff: "Kolay", img: "/images/destinations/goreme.jpg" },
      { name: "Vadi Tabanı Formasyonları", time: "Öğleden Sonra", for: "Kanyon Derinliği", diff: "Orta", img: "/images/valleys/rose-valley.jpg" },
      { name: "Üst Sırt Patikası", time: "Akşamüstü", for: "Kuşbakışı Panorama", diff: "Orta", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY (Valley specific)
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["🍷 Uçurum Kenarı Şarap ve İçecek Terasları", "☕ Kızılçukur Seyir Kafeleri", "🥞 Sıcak Gözleme ve Çay Çadırları", "🍽️ Ortahisar ve Göreme Restoranları (10 dk)"],
    stayList: ["📍 (Vadi içinde otel bulunmaz)", "🏰 Ortahisar Mağara Otelleri (5 dk uzaklıkta)", "💎 Göreme Butik Otelleri (10 dk uzaklıkta)", "🏕️ Seyir Tepesi Çevresinde Kamp"],

    // 10. TRANSPORT
    transTitle: "Kızıl Vadi'ye Nasıl Gidilir?",
    transList: ["🚗 Araçla: Ortahisar üzerinden Kızılçukur Seyir Tepesi tabelalarını takip ederek asfalt yolla doğrudan terasa ulaşabilirsiniz (Araç başı küçük bir belediye giriş ücreti alınır).", "🥾 Yürüyerek: Çavuşin köyünden veya Göreme Açık Hava Müzesi yolundan patikalara girerek yürüyebilirsiniz.", "🏍️ Tur ile: Gün batımı ATV, Jeep veya At turlarına katılarak otelinizden gidiş-dönüş ulaşım sağlayabilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌇 Gün Batımı", desc: "Açık ara en popüler an. Türkiye'nin en iyi gün batımı manzarasıdır." },
      { name: "🌸 İlkbahar", desc: "Vadi yürüyüşleri için serin ve tazeleyici bir hava." },
      { name: "🍂 Sonbahar", desc: "Kızıl kayalar ile sararan yaprakların muhteşem uyumu." },
      { name: "❄️ Kış", desc: "Kızıl kayaların üzerindeki kar tabakası eşsiz bir kontrast oluşturur." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Güneş batmadan en az 45-60 dakika önce tepede olun. Otopark çok çabuk dolar ve kayaların rengi güneş batmadan çok önce değişmeye başlar.",
      "Yazın bile gidiyor olsanız yanınıza mutlaka bir hırka veya rüzgarlık alın. Güneş battığı anda tepe çok rüzgarlı ve serin olur.",
      "Eğer gün batımını vadinin içinde yürürken yakaladıysanız, yanınızda mutlaka el feneri bulundurun. Hava 15 dakika içinde zifiri karanlık olur.",
      "Tepedeki resmi seyir terasına araçla girişte küçük bir belediye otopark/giriş ücreti alınır.",
      "Sırtlarda yürürken patikadan ayrılmayın; kayalık zemin ufalanabilir ve dik yamaçlarda kayma riski vardır."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Vadileri Keşfedin",
    nearbyList: [
      { name: "Gül Vadisi (Rose Valley)", time: "Bağlantılı", link: "/valleys/rose-valley" },
      { name: "Ortahisar Kalesi", time: "5 dk araçla", link: "/destinations/ortahisar" },
      { name: "Kılıçlar Vadisi", time: "10 dk araçla", link: "/valleys/kiliclar" },
      { name: "Göreme Merkez", time: "10 dk araçla", link: "/destinations/goreme" },
      { name: "Çavuşin Köyü", time: "10 dk araçla", link: "/destinations/cavusin" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Kızıl Vadi'yi Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Kızıl Vadi ile Kızılçukur aynı yer mi?", a: "Evet. Bölge halkı tarafından Kızılçukur olarak adlandırılır, yabancı turistler ve turlar ise burayı Red Valley (Kızıl Vadi) olarak bilir." },
      { q: "Kayalar neden bu kadar kırmızı?", a: "Bu vadideki volkanik tüf kayaları demir oksit mineralleri bakımından çok zengindir. Akşam güneşi yatay açıyla vurduğunda bu mineraller alev kırmızısı bir parıltı yayar." },
      { q: "ATV turuyla buraya gidiliyor mu?", a: "Evet! Kapadokya'daki 2 saatlik gün batımı ATV turlarının neredeyse tamamı rotasını Kızılçukur seyir tepesinde gün batımını izleyerek tamamlar." }
    ],

    // 17. CTA
    ctaTitle: "Kızıl Vadi'yi Keşfetmeye Hazır Mısın?",
    ctaDesc: "Gün batımı ATV turu, klasik araç kiralama veya rehberli yürüyüş için hemen yerini ayırt.",
    btnPlan: "DENEYİMİNİ REZERVE ET"
  },
  es: {
    heroSub: "El Cañón Legendario del Atardecer",
    heroDesc: "Famoso por sus espectaculares crestas carmesí, cañones profundos y el atardecer más celebrado de toda Capadocia.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR TOUR DE ATARDECER",
    statLoc: "Ortahisar - Göreme",
    statTime: "Mejor Época: Atardecer",
    statStay: "Tiempo Rec: 2–3 Horas",

    aboutTitle: "Sobre el Valle Rojo (Kızılçukur)",
    aboutTags: ["📍 Cerca de Ortahisar y Göreme", "🌅 El Mejor Atardecer de Capadocia", "🔴 Crestas Carmesí Profundas", "🥾 Senderos Panorámicos", "🍷 Degustación de Vinos", "🏍️ Meta de Safaris en ATV", "📸 Hora Dorada Espectacular"],
    aboutText1: "El Valle Rojo (Kızılçukur) es famoso mundialmente por sus crestas afiladas que se tornan de un rojo ardiente y púrpura cuando el sol se oculta. Los minerales ricos en hierro crean tonalidades impresionantes.",
    aboutText2: "Conectado directamente con el Valle Rosado, ofrece senderos con túneles de roca, palomares y crestas panorámicas. El mirador oficial en la cima es el punto de encuentro definitivo para contemplar el atardecer.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Mirador de Kızılçukur", desc: "La terraza panorámica oficial para contemplar los cañones teñidos de rojo carmesí.", img: "/images/valleys/red-valley.jpg", link: "#" },
      { name: "Crestas Carmesí", desc: "Formaciones rocosas afiladas esculpidas por millones de años de erosión.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Túneles en la Roca", desc: "Pasajes secretos tallados en las paredes del cañón que conectan los senderos.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Viñedos y Huertos", desc: "Verdes viñedos en el fondo del valle que contrastan con la roca volcánica roja.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Iglesia de la Uva (Üzümlü)", desc: "Iglesia histórica en la roca con frescos dedicados a racimos de uva.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Conexión Valle Rosado", desc: "Sendero por la cresta que permite recorrer ambos valles en una sola caminata.", img: "/images/valleys/love-panorama.jpg", link: "/valleys/rose-valley" }
    ],

    todoTitle: "Experiencias en el Valle Rojo",
    todoCards: [
      { icon: "🏍️", title: "Safari ATV al Atardecer", price: 35, rating: "4.9", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🚘", title: "Coche Clásico al Atardecer", price: 80, rating: "5.0", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🐎", title: "Paseo a Caballo", price: 45, rating: "4.8", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🥾", title: "Trekking al Atardecer", price: 40, rating: "4.9", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🍷", title: "Vino al Borde del Cañón", price: 50, rating: "4.8", dur: "2 Horas", link: "/book" },
      { icon: "📸", title: "Sesión Vestido Volador", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.8", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Tour Privado VIP", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Vive el Espectáculo del Atardecer", desc: "Observa cómo el valle cambia de dorado a rojo fuego en cuestión de minutos." },
      { num: "02", title: "Camina por los Túneles", desc: "Baja al fondo del cañón y atraviesa los pasadizos tallados en la roca." },
      { num: "03", title: "Brinda con Vino Local", desc: "Disfruta de una copa de vino de Capadocia al borde del acantilado." },
      { num: "04", title: "Llega en Coche Clásico", desc: "Alquila un descapotable vintage para fotos memorables durante la hora dorada." },
      { num: "05", title: "Cruza al Valle Rosado", desc: "Sigue el sendero superior que une Kızılçukur con Güllüdere para un trekking completo." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1 Hora (Solo Atardecer)", desc: "Conduce hasta el mirador 45 minutos antes del ocaso." },
      { day: "2-3 Horas (Safari)", desc: "Recorre los cañones en ATV o a caballo terminando en el mirador." },
      { day: "Medio Día (Trekking)", desc: "Realiza el circuito completo entre el Valle Rojo y el Valle Rosado." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Acantilado al Atardecer", time: "Atardecer", for: "Rocas Rojas Ardientes", diff: "Fácil", img: "/images/valleys/red-valley.jpg" },
      { name: "Silueta con Coche Clásico", time: "Hora Dorada", for: "Fotos Vintage", diff: "Fácil", img: "/images/destinations/goreme.jpg" },
      { name: "Fondo del Cañón", time: "Tarde", for: "Profundidad", diff: "Medio", img: "/images/valleys/rose-valley.jpg" },
      { name: "Sendero de Cresta", time: "Atardecer", for: "Panoramas Aéreos", diff: "Medio", img: "/images/valleys/baglidere.jpg" }
    ],

    eatStayTitle: "Refrescos y Lugares Cercanos",
    eatList: ["🍷 Terrazas de Vino al Borde del Acantilado", "☕ Cafés del Mirador", "🥞 Puestos de Gozleme Tradicional", "🍽️ Restaurantes en Ortahisar / Göreme (10 min)"],
    stayList: ["📍 (Sin hoteles dentro del cañón)", "🏰 Hoteles Cueva en Ortahisar (5 min)", "💎 Hoteles Boutique en Göreme (10 min)", "🏕️ Camping cerca del Mirador"],

    transTitle: "¿Cómo Acceder al Valle Rojo?",
    transList: ["🚗 En Coche: Se accede por carretera asfaltada desde Ortahisar hasta el mirador de Kızılçukur (se cobra una tarifa municipal).", "🥾 A Pie: Desde el pueblo de Çavuşin o desde la carretera del Museo de Göreme.", "🏍️ En Tour: Los safaris en ATV, Jeep y a caballo incluyen transporte de ida y vuelta desde tu hotel."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌇 Atardecer", desc: "El momento cumbre. Inigualable en toda Turquía." },
      { name: "🌸 Primavera", desc: "Temperaturas frescas ideales para caminar." },
      { name: "🍂 Otoño", desc: "Cielos despejados y contrastes otoñales intensos." },
      { name: "❄️ Invierno", desc: "La nieve sobre las rocas rojas crea un contraste mágico." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Llega al menos 45 a 60 minutos antes del atardecer; el aparcamiento se llena rápido.",
      "Lleva una chaqueta ligera, en la cima corre viento fresco apenas baja el sol.",
      "Si regresas caminando después del atardecer, lleva linterna; oscurece muy rápido.",
      "Se cobra una pequeña tarifa municipal por vehículo en la entrada del mirador.",
      "Mantente en los senderos marcados; el terreno de grava puede ser resbaladizo."
    ],

    nearbyTitle: "Explora Valles Cercanos",
    nearbyList: [
      { name: "Valle Rosado", time: "Conectado", link: "/valleys/rose-valley" },
      { name: "Castillo de Ortahisar", time: "5 min en coche", link: "/destinations/ortahisar" },
      { name: "Valle de las Espadas", time: "10 min en coche", link: "/valleys/kiliclar" },
      { name: "Göreme", time: "10 min en coche", link: "/destinations/goreme" },
      { name: "Pueblo de Çavuşin", time: "10 min en coche", link: "/destinations/cavusin" }
    ],

    popToursTitle: "Tours que Visitan el Valle Rojo",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es lo mismo Valle Rojo que Kızılçukur?", a: "Sí. Kızılçukur es el nombre turco tradicional y Red Valley es su denominación internacional." },
      { q: "¿Por qué las rocas son tan rojas?", a: "La toba volcánica de este valle contiene una alta concentración de óxido de hierro que resplandece intensamente con la luz baja del atardecer." },
      { q: "¿Llegan los tours en ATV hasta aquí?", a: "¡Sí! Casi todos los safaris en ATV de 2 horas al atardecer culminan en el mirador de Kızılçukur." }
    ],

    ctaTitle: "¿Listo para Descubrir el Valle Rojo?",
    ctaDesc: "Reserva tu safari en ATV, tour en coche clásico o trekking guiado hoy.",
    btnPlan: "RESERVAR TU EXPERIENCIA"
  }
};

export default function RedValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = RED_VALLEY_DICT[aktifDil] || RED_VALLEY_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-red-600 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/red-valley.jpg" alt="Red Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/50 via-slate-900/50 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-red-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            RED VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-500 hover:scale-105 transition-all shadow-xl shadow-red-600/30">
              {t.btnExplore}
            </a>
            <Link href="/book?package=atv" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
          <div className="w-16 h-1.5 bg-red-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-red-600 pl-4">
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
            <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-red-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-red-600 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-red-50/60 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-red-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-red-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-red-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-red-100 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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

      {/* 8 & 9. EAT & STAY (Valley specific) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{t.eatStayTitle}</h2>
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-red-400">Where to Stay?</h3>
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
      <section className="py-24 bg-red-50/60">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/atv" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-600 transition-all">
              Book Sunset ATV Tour &rarr;
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
                  <span className="text-red-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-red-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[3]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(220,38,38,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-red-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Kızılçukur / Red Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Red Valley (Kızılçukur) Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12574.887295175945!2d34.8565!3d38.6548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a67e1a76c8c49%3A0xbcf77a28b6d3bce8!2zS8SxesSxbMOndWt1ciBTZXlpciBUZXByc2k!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-red-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-red-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book?package=atv" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}