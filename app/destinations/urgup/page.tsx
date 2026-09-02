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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - ÜRGÜP
// =======================================================
const URGUP_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "Wine, History & Elegant Cappadocia",
    heroDesc: "Known for its exquisite stone mansions, boutique wineries, and vibrant nightlife, Urgup is the sophisticated face of Cappadocia.",
    btnExplore: "EXPLORE URGUP",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: Sep – Oct (Grape Harvest)",
    statStay: "Rec. Stay: 2 Days",

    // 2. ABOUT
    aboutTitle: "About Urgup",
    aboutTags: ["📍 Lively Town Center", "🍷 Boutique Wineries", "🏰 Elegant Stone Mansions", "🧚‍♀️ The Three Beauties", "📸 Asmali Konak", "🍽️ Fine Dining", "🌙 Nightlife"],
    aboutText1: "Unlike the predominantly cave-centric Goreme, Urgup is defined by its masterful stonemasonry. Historically the richest town in the region, it features grand stone mansions intricately carved with Seljuk and Ottoman motifs.",
    aboutText2: "Today, Urgup stands out as the culinary and nightlife capital of Cappadocia. It is the heart of the region's winemaking industry, hosting wine tasting rooms and offering a slightly more modern, upscale experience while still retaining its historical charm.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Urgup",
    mustSeeCards: [
      { name: "Three Beauties (Üç Güzeller)", desc: "The iconic symbol of Cappadocia. Two large and one small fairy chimney representing a family.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Temenni Hill", desc: "Climb to the top for a panoramic view of Urgup and Mount Erciyes.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Local Wineries", desc: "Turasan and Kocabag wineries offer exquisite volcanic wine tastings.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Asmali Konak", desc: "A famous historic Greek stone mansion with stunning architecture.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Mustafapasa (Sinasos)", desc: "A nearby old Greek village with spectacular masonry and quiet streets.", img: "/images/destinations/cavusin.jpg", link: "/destinations/mustafapasa" },
      { name: "Urgup City Center", desc: "Bustling streets with local spice shops, cafes, and lively bars.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do in Urgup",
    todoCards: [
      { icon: "🍷", title: "Wine Tasting Tour", price: 35, rating: "4.8", dur: "2 Hours", link: "#" },
      { icon: "🏎️", title: "Classic Car Safari", price: 80, rating: "4.9", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🎈", title: "Hot Air Balloon", price: 160, rating: "4.9", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🍽️", title: "Turkish Night Show", price: 55, rating: "4.8", dur: "3 Hours", link: "/tours/turkish-night" },
      { icon: "🐴", title: "Horse Riding", price: 40, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🏺", title: "Avanos Pottery Trip", price: 20, rating: "4.7", dur: "Half Day", link: "/tours/pottery" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" },
      { icon: "🚙", title: "Private VIP Tour", price: 120, rating: "5.0", dur: "Custom", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Urgup Experience Guide",
    expList: [
      { num: "01", title: "Photograph the Three Beauties at Sunset", desc: "The colors of the sky behind the iconic chimneys are mesmerizing." },
      { num: "02", title: "Taste Wine at Turasan", desc: "Try the local 'Emir' grape wine, unique to the volcanic soils of Cappadocia." },
      { num: "03", title: "Drink Turkish Coffee at Temenni Hill", desc: "Enjoy a traditional coffee while looking down at the entire town." },
      { num: "04", title: "Explore Mustafapasa", desc: "Take a 10-minute drive to this incredible historical Greek village." },
      { num: "05", title: "Experience the Turkish Night", desc: "Urgup is the central location for traditional underground cave dinner shows." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "1 Day", desc: "Three Beauties + Wine Tasting + Temenni Hill + Turkish Night." },
      { day: "2 Days", desc: "Day 1 + Mustafapasa + Classic Car Tour + Fine Dining." },
      { day: "Stay Base", desc: "A great base if you prefer comfortable stone mansions over caves." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots in Urgup",
    photoCards: [
      { name: "Three Beauties", time: "Sunset", for: "Iconic Chimneys", diff: "Easy", img: "/images/destinations/urgup.jpg" },
      { name: "Temenni Hill", time: "Morning", for: "Town Panorama", diff: "Medium", img: "/images/valleys/love-panorama.jpg" },
      { name: "Mustafapasa Doors", time: "Afternoon", for: "Greek Architecture", diff: "Easy", img: "/images/museums/goreme.jpg" },
      { name: "Classic Car at Rose Valley", time: "Sunset", for: "Vintage & Romance", diff: "Easy", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["🍷 Upscale Wine Houses", "🥩 Fine Dining Meat Restaurants", "☕ Historical Stone Cafés", "🌙 Lively Bars & Nightlife"],
    stayList: ["🏰 Luxury Stone Mansions", "🏨 Boutique Historical Hotels", "🥂 Elegant Honeymoon Suites", "💰 Comfortable Town Center Inns", "🏊 Hotels with Outdoor Pools"],

    // 10. TRANSPORT
    transTitle: "How to Get to Urgup?",
    transList: ["✈️ From Kayseri Airport (ASR) - 55m (Closest major town to ASR)", "✈️ From Nevsehir Airport (NAV) - 45m", "🚕 Taxi from Goreme - 15 mins", "🚌 Direct Bus from Major Cities"],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Pleasant walks." },
      { name: "☀️ Summer", desc: "Jun-Aug: Lively nights, cool breezes." },
      { name: "🍇 Autumn", desc: "Sep-Oct: GRAPE HARVEST FESTIVAL!" },
      { name: "❄️ Winter", desc: "Dec-Feb: Cozy fireplaces and wine." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "Balloons do not fly directly over Urgup, but shuttles will pick you up and take you to Goreme in just 15 minutes.",
      "If you love wine, plan your trip for September during the 'Bağbozumu' (Grape Harvest) Festival.",
      "Urgup is generally flatter and easier to walk around compared to Uchisar or Goreme.",
      "The nightlife here is more active; you can find live music and wine bars open late.",
      "Be prepared for crowds at the Three Beauties during sunset; arrive a bit early for good parking."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Mustafapasa", time: "10 min", link: "/destinations/mustafapasa" },
      { name: "Ortahisar", time: "10 min", link: "/destinations/ortahisar" },
      { name: "Goreme", time: "15-20 min", link: "/destinations/goreme" },
      { name: "Avanos", time: "20 min", link: "/destinations/avanos" },
      { name: "Uchisar", time: "25 min", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Popular Tours from Urgup",

    // 16. FAQ
    faqTitle: "Urgup Frequently Asked Questions",
    faqs: [
      { q: "What is the difference between Urgup and Goreme?", a: "Goreme is rural, full of cave hotels, and has balloons flying overhead. Urgup is more developed, elegant, famous for historical stone mansions, wineries, and better nightlife." },
      { q: "Can I take a hot air balloon flight if I stay in Urgup?", a: "Absolutely! The balloon companies provide free early morning transfers from your Urgup hotel to the launch site." },
      { q: "Is Urgup good for families?", a: "Yes, very much so. The streets are wider and flatter, hotels often have more standard amenities (like large pools), and there are plenty of dining options for kids." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Urgup?",
    ctaDesc: "Discover the elegant side of Cappadocia with Cappaviva.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Şarap, Tarih ve Kapadokya'nın Zarif Yüzü",
    heroDesc: "Göz alıcı taş konakları, butik şarap evleri ve canlı gece hayatıyla Ürgüp, Kapadokya'nın en elit ve modern yüzüdür.",
    btnExplore: "ÜRGÜP'Ü KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Eylül – Ekim (Bağbozumu)",
    statStay: "Önerilen Süre: 2 Gün",

    // 2. ABOUT
    aboutTitle: "Ürgüp Hakkında",
    aboutTags: ["📍 Canlı Şehir Merkezi", "🍷 Butik Şarap Evleri", "🏰 Zarif Taş Konaklar", "🧚‍♀️ Üç Güzeller", "📸 Asmalı Konak", "🍽️ Lüks Restoranlar", "🌙 Gece Hayatı"],
    aboutText1: "Mağara (cave) konseptinin ağır bastığı Göreme'nin aksine Ürgüp, muazzam taş işçiliğiyle tanımlanır. Tarihsel olarak bölgenin en zengin kasabası olan Ürgüp, Selçuklu ve Osmanlı motifleriyle ince ince işlenmiş devasa taş konaklara ev sahipliği yapar.",
    aboutText2: "Günümüzde Ürgüp, Kapadokya'nın gastronomi ve gece hayatı başkenti olarak öne çıkar. Bölgenin şarapçılık endüstrisinin kalbidir. Tarihi cazibesini korurken, aynı zamanda daha modern, lüks ve konforlu bir seyahat deneyimi sunar.",

    // 3. MUST SEE
    mustSeeTitle: "Ürgüp'te Keşfedin",
    mustSeeCards: [
      { name: "Üç Güzeller", desc: "Kapadokya'nın ikonik sembolü. Bir aileyi temsil eden iki büyük, bir küçük şapkalı peribacası.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Temenni Tepesi", desc: "Tüm Ürgüp'ü ve Erciyes Dağı'nı kuşbakışı görmek için zirveye çıkın.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Yerel Şarap Mahzenleri", desc: "Turasan ve Kocabağ şarap evlerinde volkanik şarap tadımı yapın.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Asmalı Konak", desc: "Dizilere konu olan, nefes kesici mimariye sahip meşhur eski Rum taş konağı.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Mustafapaşa (Sinasos)", desc: "Ürgüp'e 10 dk mesafede, muazzam taş işçiliği ve sessiz sokaklarıyla eski bir Rum köyü.", img: "/images/destinations/cavusin.jpg", link: "/destinations/mustafapasa" },
      { name: "Ürgüp Şehir Merkezi", desc: "Baharatçılar, kafeler, şık restoranlar ve canlı barlarla dolu sokaklar.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Ürgüp'te Yapılabilecekler",
    todoCards: [
      { icon: "🍷", title: "Şarap Tadım Turu", price: 35, rating: "4.8", dur: "2 Saat", link: "#" },
      { icon: "🏎️", title: "Klasik Araç Safari", price: 80, rating: "4.9", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🎈", title: "Sıcak Hava Balonu", price: 160, rating: "4.9", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🍽️", title: "Türk Gecesi", price: 55, rating: "4.8", dur: "3 Saat", link: "/tours/turkish-night" },
      { icon: "🐴", title: "Atlı Safari", price: 40, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🏺", title: "Avanos Çömlek Turu", price: 20, rating: "4.7", dur: "Yarım Gün", link: "/tours/pottery" },
      { icon: "🔴", title: "Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" },
      { icon: "🚙", title: "VIP Özel Tur", price: 120, rating: "5.0", dur: "Kişiye Özel", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Ürgüp Deneyim Rehberi",
    expList: [
      { num: "01", title: "Gün Batımında Üç Güzelleri Fotoğraflayın", desc: "İkonik kayaların arkasındaki gökyüzünün renkleri büyüleyicidir." },
      { num: "02", title: "Turasan'da Şarap Tadın", desc: "Kapadokya'nın volkanik topraklarına özgü 'Emir' üzümü şarabını mutlaka deneyin." },
      { num: "03", title: "Temenni Tepesi'nde Türk Kahvesi", desc: "Tüm kasabaya yukarıdan bakarken geleneksel kahvenizi yudumlayın." },
      { num: "04", title: "Mustafapaşa'yı Keşfedin", desc: "Arabayla sadece 10 dakika uzaklıktaki bu inanılmaz tarihi Rum köyüne gidin." },
      { num: "05", title: "Türk Gecesi'ne Katılın", desc: "Ürgüp, yeraltı mağara restoranlarında düzenlenen otantik şovların merkezidir." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Ürgüp'e Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1 Gün", desc: "Üç Güzeller + Şarap Tadımı + Temenni Tepesi + Türk Gecesi." },
      { day: "2 Gün", desc: "1. Gün + Mustafapaşa + Klasik Araç Turu + Akşam lüks bir yemek." },
      { day: "Konaklama", desc: "Mağara odalar yerine ferah, şık ve lüks taş konakları tercih edenler için en iyi üs." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Üç Güzeller", time: "Gün Batımı", for: "İkonik Peri Bacaları", diff: "Kolay", img: "/images/destinations/urgup.jpg" },
      { name: "Temenni Tepesi", time: "Sabah", for: "Kasaba Manzarası", diff: "Orta", img: "/images/valleys/love-panorama.jpg" },
      { name: "Mustafapaşa Kapıları", time: "Öğleden Sonra", for: "Rum Mimarisi", diff: "Kolay", img: "/images/museums/goreme.jpg" },
      { name: "Kızılçukur'da Klasik Araç", time: "Gün Batımı", for: "Vintage & Romantik", diff: "Kolay", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["🍷 Lüks Şarap Evleri", "🥩 Gurme Et Restoranları", "☕ Tarihi Taş Kafeler", "🌙 Canlı Barlar ve Gece Hayatı"],
    stayList: ["🏰 Lüks Taş Konaklar", "🏨 Butik Tarihi Oteller", "🥂 Zarif Balayı Süitleri", "💰 Konforlu Merkez Otelleri", "🏊 Açık Havuzlu Tesisler"],

    // 10. TRANSPORT
    transTitle: "Ürgüp'e Nasıl Gidilir?",
    transList: ["✈️ Kayseri Havalimanından (ASR) - 55dk (Havalimanına en yakın büyük ilçe)", "✈️ Nevşehir Havalimanından (NAV) - 45dk", "🚕 Göreme'den Taksi ile - 15dk", "🚌 Büyükşehirlerden Direkt Otobüs"],

    // 11. BEST TIME
    seasonTitle: "Ürgüp'ü Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Keyifli yürüyüşler." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Canlı geceler, serin akşam rüzgarı." },
      { name: "🍇 Sonbahar", desc: "Eylül-Ekim: BAĞBOZUMU FESTİVALİ!" },
      { name: "❄️ Kış", desc: "Ara-Şub: Şömine ateşi ve şarap keyfi." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Balonlar Ürgüp'ün tam üzerinden geçmez. Ancak endişelenmeyin, tur firmaları sizi sabah otelinizden alıp 15 dakikada Göreme'deki uçuş alanına götürür.",
      "Şarap seviyorsanız, gezinizi mutlaka Eylül ayındaki 'Bağbozumu Festivali'ne denk getirmeye çalışın.",
      "Ürgüp, Göreme veya Uçhisar'a kıyasla daha düz ayak bir yerleşime sahiptir, yürüyerek gezmesi kolaydır.",
      "Bölgedeki gece hayatı burada daha aktiftir; geç saatlere kadar açık canlı müzik ve şarap evleri bulabilirsiniz.",
      "Gün batımında Üç Güzeller çok kalabalık olur; iyi bir fotoğraf karesi ve park yeri için biraz erken gidin."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Mustafapaşa", time: "10 dk", link: "/destinations/mustafapasa" },
      { name: "Ortahisar", time: "10 dk", link: "/destinations/ortahisar" },
      { name: "Göreme", time: "15-20 dk", link: "/destinations/goreme" },
      { name: "Avanos", time: "20 dk", link: "/destinations/avanos" },
      { name: "Uçhisar", time: "25 dk", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Ürgüp Çıkışlı Popüler Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Ürgüp ile Göreme arasındaki fark nedir?", a: "Göreme tam bir 'köy' havasındadır, mağara otelleri çoktur ve sabahları balonlar tepenizden uçar. Ürgüp ise daha gelişmiş, tarihi taş konakları, şarap evleri, şık restoranları ve hareketli gece hayatıyla daha 'şehir' ve elit bir karaktere sahiptir." },
      { q: "Ürgüp'te kalırsam balon turuna katılabilir miyim?", a: "Kesinlikle! Balon firmaları sizi sabah erkenden Ürgüp'teki otelinizden ücretsiz transferle alıp havalanma alanına getirirler." },
      { q: "Ürgüp çocuklu aileler için uygun mu?", a: "Çok uygundur. Sokakları daha düz ve geniştir. Otellerin çoğunda büyük yüzme havuzları veya geniş avlular bulunur, yemek seçenekleri daha çeşitlidir." }
    ],

    // 17. CTA
    ctaTitle: "Ürgüp'ü Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın şık ve zarif yüzünü Cappaviva ayrıcalığıyla deneyimle.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "Vino, Historia y Capadocia Elegante",
    heroDesc: "Conocido por sus exquisitas mansiones de piedra, bodegas boutique y vibrante vida nocturna.",
    btnExplore: "EXPLORAR URGUP",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: Sep – Oct",
    statStay: "Estancia Rec: 2 Días",
    aboutTitle: "Sobre Ürgüp",
    aboutTags: ["📍 Centro Animado", "🍷 Bodegas Boutique", "🏰 Mansiones de Piedra", "🧚‍♀️ Las Tres Bellezas", "📸 Asmali Konak", "🍽️ Alta Cocina", "🌙 Vida Nocturna"],
    aboutText1: "A diferencia de Göreme, Ürgüp se define por su magistral cantería y grandes mansiones históricas.",
    aboutText2: "Hoy es la capital culinaria y de vida nocturna de Capadocia, ofreciendo una experiencia de lujo más moderna.",
    mustSeeTitle: "Descubre Ürgüp",
    mustSeeCards: [
      { name: "Las Tres Bellezas", desc: "El símbolo icónico de Capadocia.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Colina Temenni", desc: "Vista panorámica de Ürgüp y el Monte Erciyes.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Bodegas Locales", desc: "Degustaciones de vinos volcánicos exquisitos.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Asmali Konak", desc: "Histórica mansión griega de piedra.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Mustafapasa (Sinasos)", desc: "Antiguo pueblo griego cercano.", img: "/images/destinations/cavusin.jpg", link: "/destinations/mustafapasa" },
      { name: "Centro de Ürgüp", desc: "Calles concurridas, especias y bares.", img: "/images/destinations/urgup.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🍷", title: "Cata de Vinos", price: 35, rating: "4.8", dur: "2 Horas", link: "#" },
      { icon: "🏎️", title: "Auto Clásico", price: 80, rating: "4.9", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🎈", title: "Vuelo en Globo", price: 160, rating: "4.9", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🍽️", title: "Noche Turca", price: 55, rating: "4.8", dur: "3 Horas", link: "/tours/turkish-night" },
      { icon: "🐴", title: "Paseo a Caballo", price: 40, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🏺", title: "Taller Cerámica", price: 20, rating: "4.7", dur: "Medio Día", link: "/tours/pottery" },
      { icon: "🔴", title: "Tour Rojo", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" },
      { icon: "🚙", title: "Tour VIP Privado", price: 120, rating: "5.0", dur: "Personal", link: "/tours/private-tours" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Fotografía las Tres Bellezas", desc: "Los colores del cielo al atardecer son fascinantes." },
      { num: "02", title: "Cata de Vinos en Turasan", desc: "Prueba el vino de uva 'Emir' local." },
      { num: "03", title: "Café en la Colina Temenni", desc: "Disfruta de un café turco tradicional con vistas." },
      { num: "04", title: "Explora Mustafapasa", desc: "Pueblo histórico a 10 minutos." },
      { num: "05", title: "Noche Turca", desc: "Espectáculos en restaurantes cueva subterráneos." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "1 Día", desc: "Tres Bellezas + Vinos + Colina Temenni + Noche Turca." },
      { day: "2 Días", desc: "Día 1 + Mustafapasa + Auto Clásico + Alta Cocina." },
      { day: "Base de Estancia", desc: "Gran base si prefieres mansiones de piedra a cuevas." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Tres Bellezas", time: "Atardecer", for: "Chimeneas", diff: "Fácil", img: "/images/destinations/urgup.jpg" },
      { name: "Colina Temenni", time: "Mañana", for: "Panorama", diff: "Medio", img: "/images/valleys/love-panorama.jpg" },
      { name: "Mustafapasa", time: "Tarde", for: "Arquitectura Griega", diff: "Fácil", img: "/images/museums/goreme.jpg" },
      { name: "Auto Clásico", time: "Atardecer", for: "Romance", diff: "Fácil", img: "/images/destinations/uchisar.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["🍷 Bodegas Exclusivas", "🥩 Carnes de Alta Cocina", "☕ Cafés Históricos", "🌙 Bares y Vida Nocturna"],
    stayList: ["🏰 Mansiones de Piedra", "🏨 Hoteles Boutique Históricos", "🥂 Suites de Luna de Miel", "💰 Posadas Cómodas", "🏊 Hoteles con Piscina"],
    transTitle: "¿Cómo Llegar?",
    transList: ["✈️ Desde Kayseri (ASR) - 55m", "✈️ Desde Nevsehir (NAV) - 45m", "🚕 Taxi desde Göreme - 15m", "🚌 Autobús Directo"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Paseos agradables." },
      { name: "☀️ Verano", desc: "Noches animadas." },
      { name: "🍇 Otoño", desc: "Festival de la Uva." },
      { name: "❄️ Invierno", desc: "Acogedor con vino." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "Los globos no vuelan sobre Ürgüp, pero te trasladan a Göreme.",
      "El festival de la uva en septiembre es increíble.",
      "Es más plano y fácil de caminar que Göreme.",
      "La vida nocturna es más activa aquí.",
      "Las Tres Bellezas se llenan al atardecer."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Mustafapasa", time: "10 min", link: "/destinations/mustafapasa" },
      { name: "Ortahisar", time: "10 min", link: "/destinations/ortahisar" },
      { name: "Göreme", time: "15-20 min", link: "/destinations/goreme" },
      { name: "Avanos", time: "20 min", link: "/destinations/avanos" },
      { name: "Uchisar", time: "25 min", link: "/destinations/uchisar" }
    ],
    popToursTitle: "Tours Populares",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Diferencia entre Ürgüp y Göreme?", a: "Göreme es cuevas y globos; Ürgüp es mansiones, vino y elegancia." },
      { q: "¿Puedo volar en globo si me alojo aquí?", a: "Sí, las compañías ofrecen traslados gratuitos." },
      { q: "¿Es bueno para familias?", a: "Sí, es más plano y los hoteles tienen más comodidades estándar." }
    ],
    ctaTitle: "¿Listo para Explorar Ürgüp?",
    ctaDesc: "Descubre el lado elegante de Capadocia.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function UrgupPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = URGUP_DICT[aktifDil] || URGUP_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/urgup.jpg" alt="Urgup" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6">
            ÜRGÜP
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
            <span className="bg-black/50 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-xl text-xs font-bold tracking-wider">🍇 {t.statTime}</span>
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
          {[t.todoCards[0], t.todoCards[1], t.todoCards[3]].map((card: any, idx: number) => (
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
          <h2 className="text-3xl font-black text-slate-900 mb-8">Urgup Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12579.54471556041!2d34.902645!3d38.632296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6f8b918a2283%3A0xc0fb1d32db82c5a0!2zw5xyZ8O8cCwgTmV2xZ9laGly!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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