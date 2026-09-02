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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - NEVŞEHİR
// =======================================================
const NEVSEHIR_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Capital & The Hidden Underground City",
    heroDesc: "The administrative heart of Cappadocia, home to the bustling local life, the historic castle, and the newly discovered massive Kayaşehir underground settlement.",
    btnExplore: "EXPLORE NEVSEHIR",
    btnBookHero: "BOOK A TOUR",
    statLoc: "Cappadocia, Türkiye",
    statTime: "Best Time: Year-Round",
    statStay: "Rec. Stay: Half to 1 Day",

    // 2. ABOUT
    aboutTitle: "About Nevsehir",
    aboutTags: ["📍 The Provincial Capital", "🏰 Nevsehir Castle", "⛰️ Kayasehir (Rock City)", "🚌 Main Transport Hub", "🛍️ Local Bazaars & Shopping", "🥩 Nevsehir Tava (Local Dish)", "🏢 Modern & Historic"],
    aboutText1: "Nevsehir is the provincial capital and the main gateway to the Cappadocia region. While tourists usually flock to the fairy chimney towns like Goreme or Uchisar, Nevsehir center offers a completely different, authentic Turkish city experience.",
    aboutText2: "Recently, Nevsehir has become a major destination in its own right due to the discovery and opening of 'Kayasehir' (Rock City)—an absolutely massive historical hillside settlement and underground city spreading around the Nevsehir Castle. It is the largest discovered historical rock settlement in the region.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Nevsehir",
    mustSeeCards: [
      { name: "Kayasehir (Rock City)", desc: "A massive, newly opened underground and hillside settlement surrounding the castle.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Nevsehir Castle", desc: "A Seljuk-era fortress sitting at the highest point of the city center.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Kursunlu Mosque", desc: "An elegant 18th-century Ottoman mosque built by Grand Vizier Damat Ibrahim Pasha.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Nevsehir Museum", desc: "Showcasing archaeological and ethnographic artifacts from Phrygian to Ottoman times.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Forum Kapadokya", desc: "The largest modern shopping mall in the region for all your modern needs.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Nar Town", desc: "A quiet suburb of Nevsehir featuring beautiful old cave houses and a crater lake.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do",
    todoCards: [
      { icon: "⛰️", title: "Kayasehir Tour", price: 25, rating: "4.8", dur: "2 Hours", link: "#" },
      { icon: "🚐", title: "Airport Transfer", price: 15, rating: "4.9", dur: "Flexible", link: "/transfer" },
      { icon: "🛍️", title: "Local Market Tour", price: 20, rating: "4.7", dur: "2 Hours", link: "#" },
      { icon: "🔵", title: "Cappadocia Blue Tour", price: 65, rating: "4.8", dur: "Full Day", link: "#" },
      { icon: "🟢", title: "Cappadocia Green Tour", price: 65, rating: "4.9", dur: "Full Day", link: "/tours/green-tour" },
      { icon: "🎈", title: "Balloon Tour (Goreme)", price: 160, rating: "4.9", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🍽️", title: "Culinary Tour", price: 40, rating: "4.7", dur: "3 Hours", link: "#" },
      { icon: "👑", title: "Private VIP Tour", price: 120, rating: "5.0", dur: "Full Day", link: "/tours/private" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Nevsehir Experience Guide",
    expList: [
      { num: "01", title: "Explore Kayasehir", desc: "Walk through the newly unearthed rock-carved neighborhoods and tunnels beneath the castle." },
      { num: "02", title: "Eat 'Nevsehir Tava'", desc: "Taste the city's signature dish: meat, garlic, and peppers slow-cooked in a copper pan at a local tradesmen restaurant." },
      { num: "03", title: "Shop at the Local Bazaar", desc: "Experience real Turkish daily life and buy fresh spices, dried fruits, and nuts at the local market." },
      { num: "04", title: "Visit Kursunlu Mosque", desc: "Admire the Ottoman architecture of the mosque complex built by Nevsehir's most famous son, Damat Ibrahim Pasha." },
      { num: "05", title: "Take in the View from the Castle", desc: "Climb up to the Nevsehir Castle for a sweeping view of the modern city meeting the ancient rocks." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Perfect for exploring Kayasehir, the Castle, and having a local lunch." },
      { day: "Transit Base", desc: "You will likely pass through here via bus or airport transfer." },
      { day: "Business Base", desc: "Great if you need modern amenities, banks, or shopping malls." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Kayasehir Tunnels", time: "Daytime", for: "Underground Vibes", diff: "Medium", img: "/images/destinations/ortahisar.jpg" },
      { name: "Nevsehir Castle", time: "Sunset", for: "City Panorama", diff: "Medium", img: "/images/destinations/uchisar.jpg" },
      { name: "Kursunlu Courtyard", time: "Morning", for: "Ottoman Architecture", diff: "Easy", img: "/images/churches/tokali.jpg" },
      { name: "Nar Suburb", time: "Afternoon", for: "Old Cave Houses", diff: "Easy", img: "/images/destinations/cavusin.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["🥩 Authentic Tradesmen Restaurants (Esnaf Lokantası)", "🥘 Pan-Cooked Meat (Tava) Specialists", "☕ Modern City Cafés", "🛒 Shopping Mall Food Courts"],
    stayList: ["🏢 Modern Chain Hotels", "💰 Budget City Hotels", "🛎️ Business Centers", "🛌 Local Pensions"],

    // 10. TRANSPORT
    transTitle: "How to Get to Nevsehir?",
    transList: ["✈️ Nevsehir Kapadokya Airport (NAV) - Just 30 mins away.", "🚌 Nevsehir Intercity Bus Terminal - Connects to everywhere in Turkey.", "🚕 Minibuses to Goreme, Uchisar, Urgup depart from here every 30 mins."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Comfortable weather for city walking." },
      { name: "☀️ Summer", desc: "Can be hot; visit Kayasehir to cool down." },
      { name: "🍂 Autumn", desc: "Perfect time for local harvests." },
      { name: "❄️ Winter", desc: "City life continues normally regardless of snow." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "Nevsehir is the cheapest place in Cappadocia for everyday shopping, souvenirs, and dining.",
      "If you want to try authentic Turkish food outside of tourist traps, visit an 'Esnaf Lokantası' in the city center.",
      "Kayasehir is very large and involves a lot of walking on uneven surfaces; wear sports shoes.",
      "If you are taking an intercity bus, your ticket will likely say 'Nevsehir'. From the bus station, you take a free shuttle or minibus to Goreme/Urgup.",
      "The city center does not have fairy chimneys; you need to travel 15 mins to the tourist towns to see them."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Uchisar", time: "10 min", link: "/destinations/uchisar" },
      { name: "Goreme", time: "15 min", link: "/destinations/goreme" },
      { name: "Ortahisar", time: "20 min", link: "/destinations/ortahisar" },
      { name: "Avanos", time: "20 min", link: "/destinations/avanos" },
      { name: "Urgup", time: "25 min", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Including Nevsehir",

    // 16. FAQ
    faqTitle: "Nevsehir Frequently Asked Questions",
    faqs: [
      { q: "Is Nevsehir the same as Cappadocia?", a: "Cappadocia is the historical region, while Nevsehir is the modern province and city center that encompasses the main Cappadocian towns." },
      { q: "Should I stay in Nevsehir center?", a: "Most tourists prefer staying in Goreme, Uchisar, or Urgup for the cave hotels and balloon views. Stay in Nevsehir center if you are on a strict budget, traveling for business, or prefer modern city hotels." },
      { q: "Is Kayasehir the same as Derinkuyu?", a: "No. Derinkuyu is a deep vertical underground city further south. Kayasehir is a massive historical hillside settlement and underground complex right in the city center beneath the castle." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Nevsehir?",
    ctaDesc: "Discover the administrative heart and the hidden rock city of Cappadocia.",
    btnPlan: "PLAN YOUR TRIP"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Başkenti ve Gizli Yeraltı Şehri",
    heroDesc: "Tarihi kalesi, hareketli yerel yaşamı ve yeni keşfedilen devasa yamaç yerleşkesi Kayaşehir ile Nevşehir, Kapadokya'nın idari kalbidir.",
    btnExplore: "NEVŞEHİR'İ KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Dört Mevsim",
    statStay: "Önerilen Süre: Yarım – 1 Gün",

    // 2. ABOUT
    aboutTitle: "Nevşehir Hakkında",
    aboutTags: ["📍 İl Merkezi", "🏰 Nevşehir Kalesi", "⛰️ Kayaşehir", "🚌 Ana Ulaşım Merkezi", "🛍️ Yerel Çarşılar", "🥩 Nevşehir Tava", "🏢 Modern ve Tarihi"],
    aboutText1: "Nevşehir, Kapadokya bölgesinin ana giriş kapısı ve il merkezidir. Turistler genellikle Göreme veya Uçhisar gibi peribacası kasabalarına akın etse de, Nevşehir merkezi tamamen farklı, otantik ve yaşanılan bir Türk şehri deneyimi sunar.",
    aboutText2: "Son yıllarda Nevşehir Kalesi'nin etrafında keşfedilen ve ziyarete açılan 'Kayaşehir', şehri başlı başına dev bir turizm noktası haline getirmiştir. Dünyanın bilinen en büyük yamaç yeraltı yerleşkelerinden biri olan Kayaşehir, şehrin tarihi derinliğini gözler önüne serer.",

    // 3. MUST SEE
    mustSeeTitle: "Nevşehir'de Keşfedin",
    mustSeeCards: [
      { name: "Kayaşehir (Yeraltı Şehri)", desc: "Kalenin etrafını saran, yeni ziyarete açılan devasa tarihi yamaç yerleşkesi ve yeraltı şehri.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Nevşehir Kalesi", desc: "Şehir merkezinin en yüksek noktasında yer alan, görkemli Selçuklu dönemi kalesi.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Kurşunlu Camii ve Külliyesi", desc: "Sadrazam Damat İbrahim Paşa tarafından 18. yüzyılda yaptırılan zarif Osmanlı eseri.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Nevşehir Müzesi", desc: "Friglerden Osmanlı'ya kadar bölgenin arkeolojik ve etnografik eserlerinin sergilendiği müze.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Forum Kapadokya", desc: "Tüm modern ihtiyaçlarınızı karşılayabileceğiniz, bölgenin en büyük alışveriş merkezi.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Nar Kasabası", desc: "Nevşehir'in hemen yanı başında, eski mağara evleri ve yeşil dokusuyla sessiz bir mahalle.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Nevşehir'de Yapılabilecekler",
    todoCards: [
      { icon: "⛰️", title: "Kayaşehir Turu", price: 25, rating: "4.8", dur: "2 Saat", link: "#" },
      { icon: "🚐", title: "Havalimanı Transferi", price: 15, rating: "4.9", dur: "Esnek", link: "/transfer" },
      { icon: "🛍️", title: "Yerel Çarşı Turu", price: 20, rating: "4.7", dur: "2 Saat", link: "#" },
      { icon: "🔵", title: "Mavi Tur", price: 65, rating: "4.8", dur: "Tam Gün", link: "#" },
      { icon: "🟢", title: "Yeşil Tur (Yeraltı Şehirleri)", price: 65, rating: "4.9", dur: "Tam Gün", link: "/tours/green-tour" },
      { icon: "🎈", title: "Balon Turu (Göreme'ye Transfer)", price: 160, rating: "4.9", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🍽️", title: "Gastronomi Turu", price: 40, rating: "4.7", dur: "3 Saat", link: "#" },
      { icon: "👑", title: "VIP Özel Tur", price: 120, rating: "5.0", dur: "Tam Gün", link: "/tours/private" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Nevşehir Deneyim Rehberi",
    expList: [
      { num: "01", title: "Kayaşehir'de Tarihe Dokunun", desc: "Nevşehir Kalesi'nin altındaki yeni keşfedilen tarihi mahallelerde ve tünellerde yürüyün." },
      { num: "02", title: "Orijinal 'Nevşehir Tava' Yiyin", desc: "Merkezdeki esnaf lokantalarında, bakır tavada ağır ağır pişen et, sarımsak ve biberin muazzam uyumunu tadın." },
      { num: "03", title: "Yerel Pazarda Alışveriş Yapın", desc: "Gerçek Türk günlük yaşamını deneyimleyin; taze baharatlar, kuru yemişler ve kabak çekirdeği alın." },
      { num: "04", title: "Kurşunlu Külliyesi'ni İnceleyin", desc: "Nevşehir'in kurucusu Damat İbrahim Paşa'nın memleketine bıraktığı Osmanlı zarafetini görün." },
      { num: "05", title: "Kaleden Şehri Seyredin", desc: "Modern şehir ile antik kayaların birleştiği manzarayı görmek için Nevşehir Kalesi'ne çıkın." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Nevşehir'e Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Kayaşehir'i gezmek, kaleye çıkmak ve merkezde güzel bir esnaf yemeği yemek için idealdir." },
      { day: "Ulaşım Üssü", desc: "Şehirlerarası otobüs veya havalimanı transferi için mutlaka buradan geçeceksiniz." },
      { day: "Modern İhtiyaçlar", desc: "AVM, banka, hastane veya uygun fiyatlı alışveriş için en iyi noktadır." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Kayaşehir Tünelleri", time: "Gündüz", for: "Tarihi ve Gizemli", diff: "Orta", img: "/images/destinations/ortahisar.jpg" },
      { name: "Nevşehir Kalesi", time: "Gün Batımı", for: "Şehir Panoraması", diff: "Orta", img: "/images/destinations/uchisar.jpg" },
      { name: "Kurşunlu Camii Avlusu", time: "Sabah", for: "Osmanlı Mimarisi", diff: "Kolay", img: "/images/churches/tokali.jpg" },
      { name: "Nar Kasabası", time: "Öğleden Sonra", for: "Eski Taş Evler", diff: "Kolay", img: "/images/destinations/cavusin.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["🥩 Orijinal Esnaf Lokantaları", "🥘 Meşhur Nevşehir Tava Ustaları", "☕ Modern Şehir Kafeleri", "🛒 AVM Restoranları"],
    stayList: ["🏢 Modern Zincir Oteller", "💰 Uygun Fiyatlı Şehir Otelleri", "🛎️ İş (Business) Otelleri", "🛌 Yerel Pansiyonlar"],

    // 10. TRANSPORT
    transTitle: "Nevşehir'e Nasıl Gidilir?",
    transList: ["✈️ Nevşehir Kapadokya Havalimanı (NAV) - Merkeze sadece 30 dk uzaklıkta.", "🚌 Nevşehir Şehirlerarası Otobüs Terminali - Türkiye'nin her yerine bağlanır.", "🚕 Göreme, Uçhisar ve Ürgüp'e merkezden her yarım saatte bir minibüs kalkar."],

    // 11. BEST TIME
    seasonTitle: "Nevşehir'i Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Şehir gezisi için ılık ve rahat hava." },
      { name: "☀️ Yaz", desc: "Sıcak olabilir; serinlemek için Kayaşehir'e inin." },
      { name: "🍂 Sonbahar", desc: "Yerel hasat ve taze kuruyemiş zamanı." },
      { name: "❄️ Kış", desc: "Karda bile şehir hayatı aktif olarak devam eder." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Nevşehir merkezi, turistik kasabalara kıyasla yemek, alışveriş ve hediyelik eşya konusunda bölgenin en ucuz yeridir.",
      "Turistik restoranlar yerine gerçek bir Türk yemeği (kuru fasulye, pilav, tava) yemek istiyorsanız merkezdeki esnaf lokantalarına gidin.",
      "Kayaşehir (Yeraltı Şehri) çok büyüktür ve engebeli yollara sahiptir; gezerken mutlaka spor ayakkabı giyin.",
      "Şehirlerarası otobüs biletinizde genellikle 'Nevşehir' yazar. Otogarda inince Göreme veya Ürgüp'e gitmek için firmanın ücretsiz servisini veya ilçe minibüslerini kullanmalısınız.",
      "Nevşehir merkezinde peribacası veya mağara otel bulunmaz; bunları görmek için 10-15 dakika mesafedeki turistik kasabalara geçmelisiniz."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Uçhisar", time: "10 dk", link: "/destinations/uchisar" },
      { name: "Göreme", time: "15 dk", link: "/destinations/goreme" },
      { name: "Ortahisar", time: "20 dk", link: "/destinations/ortahisar" },
      { name: "Avanos", time: "20 dk", link: "/destinations/avanos" },
      { name: "Ürgüp", time: "25 dk", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Nevşehir Çıkışlı/Bağlantılı Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Nevşehir ile Kapadokya aynı yer mi?", a: "Kapadokya tarihi ve coğrafi bölgenin adıdır. Nevşehir ise bu bölgenin turistik kasabalarını (Göreme, Ürgüp, Avanos vb.) sınırları içinde barındıran modern il merkezinin adıdır." },
      { q: "Konaklamak için Nevşehir merkez tercih edilmeli mi?", a: "Turistler peribacaları ve mağara oteller için genelde Göreme veya Uçhisar'ı tercih eder. Ancak iş seyahati yapıyorsanız, bütçeniz kısıtlıysa veya modern zincir otelleri seviyorsanız merkez iyi bir seçenektir." },
      { q: "Kayaşehir ile Derinkuyu aynı yer mi?", a: "Hayır. Derinkuyu dikey olarak derinlere inen tarihi bir yeraltı şehridir. Kayaşehir ise Nevşehir Kalesi'nin yamaçlarında yer alan devasa, yeni keşfedilmiş tarihi bir yerleşkedir." }
    ],

    // 17. CTA
    ctaTitle: "Nevşehir'i Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın idari başkentini ve tarihi Kayaşehir'i deneyimle.",
    btnPlan: "SEYAHATİNİ PLANLA"
  },
  es: {
    heroSub: "La Capital y la Ciudad Subterránea Oculta",
    heroDesc: "El corazón administrativo de Capadocia, hogar de la vida local, el castillo histórico y el enorme asentamiento recién descubierto de Kayaşehir.",
    btnExplore: "EXPLORAR NEVSEHIR",
    btnBookHero: "RESERVAR TOUR",
    statLoc: "Capadocia, Turquía",
    statTime: "Mejor Época: Todo el año",
    statStay: "Estancia Rec: Medio a 1 Día",
    aboutTitle: "Sobre Nevşehir",
    aboutTags: ["📍 La Capital", "🏰 Castillo de Nevsehir", "⛰️ Kayasehir", "🚌 Centro de Transporte", "🛍️ Compras", "🥩 Nevsehir Tava", "🏢 Moderno e Histórico"],
    aboutText1: "Nevşehir es la capital de la provincia. Aunque los turistas acuden a Göreme, el centro ofrece una experiencia de ciudad turca completamente auténtica.",
    aboutText2: "Con el reciente descubrimiento de 'Kayaşehir', un enorme asentamiento histórico en la ladera del castillo, la ciudad se ha convertido en un destino importante.",
    mustSeeTitle: "Descubre Nevşehir",
    mustSeeCards: [
      { name: "Kayaşehir (Ciudad de Roca)", desc: "Enorme asentamiento subterráneo recién abierto.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Castillo de Nevşehir", desc: "Fortaleza selyúcida en el punto más alto.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Mezquita Kursunlu", desc: "Elegante mezquita otomana del siglo XVIII.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Museo de Nevşehir", desc: "Artefactos arqueológicos desde los frigios hasta los otomanos.", img: "/images/museums/goreme.jpg", link: "#" },
      { name: "Forum Kapadokya", desc: "El centro comercial más grande de la región.", img: "/images/destinations/urgup.jpg", link: "#" },
      { name: "Nar", desc: "Un barrio tranquilo con antiguas casas cueva.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "⛰️", title: "Tour Kayasehir", price: 25, rating: "4.8", dur: "2 Horas", link: "#" },
      { icon: "🚐", title: "Traslado Aeropuerto", price: 15, rating: "4.9", dur: "Flexible", link: "/transfer" },
      { icon: "🛍️", title: "Mercado Local", price: 20, rating: "4.7", dur: "2 Horas", link: "#" },
      { icon: "🔵", title: "Tour Azul", price: 65, rating: "4.8", dur: "Día Completo", link: "#" },
      { icon: "🟢", title: "Tour Verde", price: 65, rating: "4.9", dur: "Día Completo", link: "/tours/green-tour" },
      { icon: "🎈", title: "Vuelo en Globo", price: 160, rating: "4.9", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🍽️", title: "Tour Culinario", price: 40, rating: "4.7", dur: "3 Horas", link: "#" },
      { icon: "👑", title: "Tour VIP Privado", price: 120, rating: "5.0", dur: "Personalizado", link: "/tours/private" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Explora Kayasehir", desc: "Camina por el recién descubierto asentamiento de roca." },
      { num: "02", title: "Prueba 'Nevsehir Tava'", desc: "Carne y pimientos cocinados a fuego lento." },
      { num: "03", title: "Compra en el Bazar", desc: "Experimenta la vida diaria y compra especias frescas." },
      { num: "04", title: "Visita Mezquita Kursunlu", desc: "Arquitectura otomana en el centro." },
      { num: "05", title: "Sube al Castillo", desc: "Vista panorámica de la ciudad moderna y la historia." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Para Kayasehir y el castillo." },
      { day: "Base de Tránsito", desc: "Pasarás por aquí en autobús o hacia el aeropuerto." },
      { day: "Base de Negocios", desc: "Ideal para necesidades modernas y compras." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Túneles de Kayasehir", time: "Día", for: "Historia", diff: "Medio", img: "/images/destinations/ortahisar.jpg" },
      { name: "Castillo", time: "Atardecer", for: "Panorama", diff: "Medio", img: "/images/destinations/uchisar.jpg" },
      { name: "Patio Kursunlu", time: "Mañana", for: "Arquitectura", diff: "Fácil", img: "/images/churches/tokali.jpg" },
      { name: "Barrio Nar", time: "Tarde", for: "Casas Antiguas", diff: "Fácil", img: "/images/destinations/cavusin.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["🥩 Restaurantes de Trabajadores", "🥘 Especialistas en 'Tava'", "☕ Cafés Modernos", "🛒 Patios de Comidas"],
    stayList: ["🏢 Hoteles de Cadena", "💰 Hoteles Económicos", "🛎️ Hoteles de Negocios", "🛌 Pensiones Locales"],
    transTitle: "¿Cómo Llegar?",
    transList: ["✈️ Aeropuerto de Nevsehir (NAV) - 30m", "🚌 Terminal Principal de Autobuses", "🚕 Minibuses a Göreme/Uchisar cada 30m"],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Agradable para caminar." },
      { name: "☀️ Verano", desc: "Calor; refréscate en Kayasehir." },
      { name: "🍂 Otoño", desc: "Tiempo de cosecha local." },
      { name: "❄️ Invierno", desc: "La ciudad no se detiene con la nieve." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "Es el lugar más barato para comer y comprar.",
      "Para comida auténtica, busca un 'Esnaf Lokantası'.",
      "El billete de autobús dice Nevsehir; toma un enlace a Göreme desde la estación.",
      "El centro no tiene chimeneas de hadas, debes viajar 15 min a los pueblos."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Uchisar", time: "10 min", link: "/destinations/uchisar" },
      { name: "Göreme", time: "15 min", link: "/destinations/goreme" },
      { name: "Ortahisar", time: "20 min", link: "/destinations/ortahisar" },
      { name: "Avanos", time: "20 min", link: "/destinations/avanos" },
      { name: "Urgup", time: "25 min", link: "/destinations/urgup" }
    ],
    popToursTitle: "Tours Conectados a Nevşehir",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Nevşehir es lo mismo que Capadocia?", a: "Capadocia es la región; Nevşehir es la provincia administrativa." },
      { q: "¿Debo quedarme en el centro?", a: "Solo si buscas hoteles modernos o ahorrar. Los turistas prefieren Göreme." },
      { q: "¿Kayasehir es lo mismo que Derinkuyu?", a: "No. Derinkuyu es vertical, Kayasehir es un enorme asentamiento en ladera." }
    ],
    ctaTitle: "¿Listo para Explorar Nevşehir?",
    ctaDesc: "Descubre la capital administrativa de Capadocia.",
    btnPlan: "PLANIFICA TU VIAJE"
  }
};

export default function NevsehirPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = NEVSEHIR_DICT[aktifDil] || NEVSEHIR_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/destinations/nevsehir.jpg" alt="Nevsehir Capital" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6">
            NEVŞEHİR
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
          <h2 className="text-3xl font-black text-slate-900 mb-8">Nevsehir Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25159.208665672808!2d34.693835!3d38.624471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6b2c2b3e4f5%3A0x1a2b3c4d5e6f7g8!2sNev%C5%9Fehir%20Merkez!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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