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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - ROSE VALLEY
// =======================================================
const ROSE_VALLEY_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Pink-Hued Marvel of Cappadocia",
    heroDesc: "Famous for its rose-colored rock formations that glow brilliantly at sunset and its hidden cave churches waiting to be explored.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A SUNSET TOUR",
    statLoc: "Goreme - Cavusin",
    statTime: "Best Time: Sunset",
    statStay: "Rec. Time: 2–4 Hours",

    // 2. ABOUT
    aboutTitle: "About Rose Valley",
    aboutTags: ["📍 Near Goreme", "🌅 Ultimate Sunset Spot", "🌸 Pink Mineral Rocks", "🥾 Interconnected Trails", "⛪ Hidden Cave Churches", "🥤 Fresh Juice Cafes", "🐎 Horse Safari Route"],
    aboutText1: "Rose Valley (Gül Vadisi) gets its name from the rose-colored minerals in the rock formations that tint the entire valley pink. As the sun sets, these colors intensify, creating a spectacular, glowing landscape that draws hikers and photographers from around the world.",
    aboutText2: "Running parallel to the equally stunning Red Valley, Rose Valley is an intricate network of hiking trails that lead you through deep canyons, past local orchards, and into ancient rock-cut churches like the famous Church of the Cross (Haçlı Kilise). It's the perfect blend of natural beauty and historical exploration.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Church of the Cross (Haçlı Kilise)", desc: "An ancient cave church with a beautifully preserved ceiling cross and stunning frescoes.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Columned Church (Kolonlu Kilise)", desc: "A massive, hidden church carved into the rock, featuring tall pillars holding up the ceiling.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Rose Valley Sunset Point", desc: "The ridges above the valley offer the absolute best sunset panorama in all of Cappadocia.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Hidden Cave Cafés", desc: "Small, family-run cafes tucked into the rocks offering fresh pomegranate and orange juice.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "The Ridges & Tunnels", desc: "Hike through narrow rock tunnels and walk along spectacular ridgelines.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Red Valley Connection", desc: "Rose Valley naturally merges with Red Valley, allowing you to hike both in one trip.", img: "/images/valleys/red-valley.jpg", link: "/valleys/red-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Rose Valley",
    todoCards: [
      { icon: "🌅", title: "Sunset ATV Safari", price: 35, rating: "4.9", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🐎", title: "Sunset Horseback Ride", price: 45, rating: "4.8", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🥾", title: "Guided Trekking Tour", price: 40, rating: "5.0", dur: "3.5 Hours", link: "/tours/hiking" },
      { icon: "🚘", title: "Classic Car Photoshoot", price: 80, rating: "4.9", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🍷", title: "Sunset Wine Tasting", price: 50, rating: "4.8", dur: "2 Hours", link: "/book" },
      { icon: "📸", title: "Professional Photoshoot", price: 100, rating: "4.7", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.8", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Private VIP Hike", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Rose Valley Experience Guide",
    expList: [
      { num: "01", title: "Catch the Sunset Glow", desc: "The rocks literally change color as the sun goes down. Be at a high vantage point for the golden hour." },
      { num: "02", title: "Drink Fresh Pomegranate Juice", desc: "Stop at the small cave cafe right below Haçlı Kilise for the best freshly squeezed juice after a long walk." },
      { num: "03", title: "Explore Haçlı Kilise", desc: "Climb the wooden stairs to enter the Church of the Cross. Don't forget to look up at the beautifully carved ceiling." },
      { num: "04", title: "Hike the Ridge Trail", desc: "Walk along the panoramic ridges that separate Rose and Red valleys for breathtaking aerial views." },
      { num: "05", title: "Join a Horse Safari", desc: "The dusty, winding trails of Rose Valley are the most authentic and popular routes for horseback riding in Cappadocia." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1.5 Hours (ATV/Horse)", desc: "Perfect if you join an organized sunset tour. You will see the best spots without the heavy hiking." },
      { day: "3-4 Hours (Trekking)", desc: "Highly recommended. Hike from Goreme through Rose Valley, visit the churches, and end at sunset point." },
      { day: "Sunset Only", desc: "Drive straight to the viewing point just to watch the rocks turn pink over a glass of local wine." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Sunset Viewpoint", time: "Sunset", for: "Pink Glowing Rocks", diff: "Easy", img: "/images/valleys/rose-valley.jpg" },
      { name: "Haçlı Kilise Cafe", time: "Afternoon", for: "Authentic Vibes", diff: "Medium", img: "/images/destinations/avanos.jpg" },
      { name: "The Rock Tunnels", time: "Daytime", for: "Adventure Shots", diff: "Medium", img: "/images/valleys/baglidere.jpg" },
      { name: "Horseback on Ridges", time: "Golden Hour", for: "Epic Silhouettes", diff: "Easy", img: "/images/destinations/cavusin.jpg" }
    ],

    // 8 & 9. EAT & STAY (Valley specific)
    eatStayTitle: "Refreshments & Nearby Spots",
    eatList: ["🥤 Haçlı Kilise Fresh Juice Cafe", "☕ Hidden Cave Tea Gardens", "🍷 Sunset Point Pop-up Wine Bars", "🍇 Local Grape and Apricot Orchards"],
    stayList: ["📍 (No Hotels inside the Valley)", "💎 Cavusin Village Hotels (5 mins away)", "🏘️ Goreme Cave Suites (10 mins away)", "🏕️ Sunset Point Camping"],

    // 10. TRANSPORT
    transTitle: "How to Access Rose Valley?",
    transList: ["🥾 Walking: You can start the hike from behind Goreme town or from Cavusin village.", "🚗 Driving: You can drive to the 'Kızılçukur Sunset Viewpoint' (entrance fee applies) and look down into Rose Valley.", "🐎 Guided Tours: The easiest way to navigate the confusing trails is via a guided horse, ATV, or trekking tour."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌅 Early Morning", desc: "Quiet hiking and watching balloons from a distance." },
      { name: "🌇 Sunset", desc: "The valley's namesake pink colors come alive." },
      { name: "🌸 Spring", desc: "Pleasant temperatures for the 3-4 hour hike." },
      { name: "🍂 Autumn", desc: "Grape harvesting season in the valley's local vineyards." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "The trails connecting Rose Valley (Güllüdere) and Red Valley (Kızılçukur) can be confusing. Using an offline map app like Maps.me is highly recommended.",
      "Wear proper trekking shoes with good grip. The volcanic tuff rock can be very slippery, especially on descents.",
      "If you are hiking in the late afternoon, make sure to time your walk so you end up at the sunset viewpoint before it gets dark.",
      "Bring cash! The small cave cafes selling fresh juice and tea deep in the valley do not accept credit cards.",
      "You will see many vineyards and fruit trees. These belong to local farmers, please do not pick the fruit."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Valleys",
    nearbyList: [
      { name: "Red Valley", time: "Connected", link: "/valleys/red-valley" },
      { name: "Sword Valley", time: "15 min hike", link: "/valleys/kiliclar" },
      { name: "Cavusin Village", time: "20 min hike", link: "/destinations/cavusin" },
      { name: "Goreme", time: "10 min drive", link: "/destinations/goreme" },
      { name: "Love Valley", time: "15 min drive", link: "/valleys/love-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Rose Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "What is the difference between Rose Valley and Red Valley?", a: "They are two parallel valleys that merge into each other. Rose Valley (Güllüdere) has slightly lighter, pinkish rocks and more famous churches, while Red Valley (Kızılçukur) has sharper, deep red ridges. Most hiking routes combine both." },
      { q: "Is there an entrance fee?", a: "Hiking into the valley from Goreme or Cavusin is free. However, if you drive a car to the official Sunset Viewpoint at the top, there is a small vehicle entry fee." },
      { q: "Is the trail suitable for children?", a: "The main trails are generally safe, but there are steep, slippery sections and a few ladders to climb near the churches. It is suitable for active children over 7-8 years old." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Rose Valley?",
    ctaDesc: "Book your guided hike, sunset ATV, or horseback safari today.",
    btnPlan: "BOOK YOUR EXPERIENCE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Pembe Rüyası",
    heroDesc: "Gün batımında pembe ve kızıl renklere bürünen eşsiz kayaları ve gizli mağara kiliseleriyle Gül Vadisi, doğa ve tarih severlerin gözdesidir.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "GÜN BATIMI TURU REZERVE ET",
    statLoc: "Göreme - Çavuşin",
    statTime: "En İyi Zaman: Gün Batımı",
    statStay: "Önerilen Süre: 2–4 Saat",

    // 2. ABOUT
    aboutTitle: "Gül Vadisi (Rose Valley) Hakkında",
    aboutTags: ["📍 Göreme Yakınlarında", "🌅 Mükemmel Gün Batımı", "🌸 Pembe Kayalar", "🥾 Bağlantılı Yürüyüş Rotaları", "⛪ Gizli Kaya Kiliseleri", "🥤 Taze Meyve Suyu Kafeleri", "🐎 Atlı Safari Rotası"],
    aboutText1: "Gül Vadisi (Güllüdere), adını kayalarının içindeki minerallerin vadiye verdiği pembe/gül rengi tondan alır. Özellikle güneş batarken bu renkler yoğunlaşır ve tüm vadi adeta parlayarak fotoğrafçılar ve yürüyüşçüler için muazzam bir manzara oluşturur.",
    aboutText2: "Hemen yanındaki Kızıl Vadi (Red Valley) ile paralel uzanan Gül Vadisi, derin kanyonlar, yerel üzüm bağları ve Haçlı Kilise gibi muazzam kaya kiliseleriyle dolu karmaşık bir yürüyüş ağına sahiptir. Doğal güzellik ile tarihi keşfin en güzel harmanlandığı yerdir.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Haçlı Kilise (Church of the Cross)", desc: "Tavanında devasa bir haç kabartması bulunan ve harika fresklere sahip tarihi mağara kilise.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Kolonlu Kilise", desc: "Kayaların içine gizlenmiş, tavanı destekleyen uzun sütunlarıyla dikkat çeken devasa yapı.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Gül Vadisi Gün Batımı Noktası", desc: "Vadinin sırtlarında yer alan, Kapadokya'nın açık ara en iyi gün batımı izleme noktası.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Gizli Vadi Kafeleri", desc: "Kayalara oyulmuş, yürüyüşçülere taze sıkım nar ve portakal suyu sunan şirin mola yerleri.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Sırtlar ve Tüneller", desc: "Dar kaya tünellerinden geçerek vadinin panoramik sırtlarında yürüyüş yapın.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Kızıl Vadi (Red Valley) Bağlantısı", desc: "Gül Vadisi doğal olarak Kızıl Vadi ile birleşir, ikisini tek yürüyüşte gezebilirsiniz.", img: "/images/valleys/red-valley.jpg", link: "/valleys/red-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Gül Vadisi Deneyimleri",
    todoCards: [
      { icon: "🌅", title: "Gün Batımı ATV Safari", price: 35, rating: "4.9", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🐎", title: "Atlı Safari Turu", price: 45, rating: "4.8", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🥾", title: "Rehberli Vadi Yürüyüşü", price: 40, rating: "5.0", dur: "3.5 Saat", link: "/tours/hiking" },
      { icon: "🚘", title: "Klasik Araç ile Fotoğraf", price: 80, rating: "4.9", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🍷", title: "Gün Batımında Şarap Tadımı", price: 50, rating: "4.8", dur: "2 Saat", link: "/book" },
      { icon: "📸", title: "Profesyonel Dış Çekim", price: 100, rating: "4.7", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.8", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "👑", title: "VIP Özel Trekking", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Gül Vadisi Deneyim Rehberi",
    expList: [
      { num: "01", title: "Altın Saati (Golden Hour) Yakalayın", desc: "Güneş batarken kayalar kelimenin tam anlamıyla renk değiştirir. Bu anı kaçırmamak için yüksek bir sırtta yerinizi alın." },
      { num: "02", title: "Taze Nar Suyu İçin", desc: "Uzun bir yürüyüşün ardından Haçlı Kilise'nin hemen altındaki küçük salaş kafede soluklanıp taze nar suyu için." },
      { num: "03", title: "Haçlı Kilise'yi Keşfedin", desc: "Ahşap merdivenleri tırmanarak kiliseye girin ve tavana oyulmuş mükemmel haç detayını inceleyin." },
      { num: "04", title: "Sırt (Ridge) Parkurunda Yürüyün", desc: "Gül ve Kızıl vadileri birbirinden ayıran panoramik sırtlarda yürüyerek nefes kesici kuşbakışı manzaralar görün." },
      { num: "05", title: "Atlı Safariye Çıkın", desc: "Gül Vadisi'nin tozlu ve kıvrımlı patikaları, Kapadokya'da atlı safari için en otantik ve popüler rotadır." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1.5 Saat (ATV/At)", desc: "Yürümek istemiyorsanız organize bir safari turuyla en iyi noktaları hızlıca görebilirsiniz." },
      { day: "3-4 Saat (Trekking)", desc: "Şiddetle tavsiye edilir! Göreme'den başlayıp kiliseleri gezin ve turu gün batımı noktasında bitirin." },
      { day: "Sadece Gün Batımı", desc: "Direkt seyir terasına araçla çıkıp, yerel şarabınızı yudumlayarak kayaların pembeye dönmesini izleyin." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Gün Batımı Terası", time: "Gün Batımı", for: "Pembe Parlayan Kayalar", diff: "Kolay", img: "/images/valleys/rose-valley.jpg" },
      { name: "Haçlı Kilise Kafesi", time: "Öğleden Sonra", for: "Otantik Vadi Molası", diff: "Orta", img: "/images/destinations/avanos.jpg" },
      { name: "Kaya Tünelleri", time: "Gündüz", for: "Maceracı Kareler", diff: "Orta", img: "/images/valleys/baglidere.jpg" },
      { name: "Sırtlarda Atlılar", time: "Altın Saat", for: "Efsanevi Silüetler", diff: "Kolay", img: "/images/destinations/cavusin.jpg" }
    ],

    // 8 & 9. EAT & STAY (Valley specific)
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["🥤 Haçlı Kilise Önü Taze Meyve Suyu", "☕ Gizli Mağara Çay Bahçeleri", "🍷 Gün Batımı Noktası Pop-up Şarap Standları", "🍇 Yerel Üzüm ve Kayısı Bağları"],
    stayList: ["📍 (Vadi içinde otel bulunmaz)", "💎 Çavuşin Köyü Otelleri (5 dk uzaklıkta)", "🏘️ Göreme Mağara Otelleri (10 dk uzaklıkta)", "🏕️ Gün Batımı Noktasında Kamp"],

    // 10. TRANSPORT
    transTitle: "Gül Vadisi'ne Nasıl Gidilir?",
    transList: ["🥾 Yürüyerek: Yürüyüşe Göreme'nin arka taraflarından veya Çavuşin köyünden başlayabilirsiniz.", "🚗 Araçla: Vadiye inilmez ancak araçla 'Kızılçukur Seyir Terası'na çıkıp Gül Vadisi'ne yukarıdan bakabilirsiniz (Otopark ücretlidir).", "🐎 Turlarla: Patikalar karmaşık olduğu için en iyi yöntem rehberli bir ATV, at veya yürüyüş turuna katılmaktır."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌅 Sabah Erken", desc: "Sessiz bir yürüyüş ve uzaktan sıcak hava balonlarını izlemek için." },
      { name: "🌇 Gün Batımı", desc: "Vadinin adını aldığı pembe renklerin canlandığı en popüler andır." },
      { name: "🌸 İlkbahar", desc: "3-4 saatlik uzun doğa yürüyüşleri için mükemmel hava sıcaklığı." },
      { name: "🍂 Sonbahar", desc: "Vadi içindeki yerel üzüm bağlarında hasat zamanı." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Gül Vadisi (Rose Valley) ve Kızıl Vadi (Red Valley) yolları birbirine çok karışır. Kesinlikle Maps.me gibi çevrimdışı bir harita uygulaması kullanın.",
      "Mutlaka altı iyi tutunan bir spor/trekking ayakkabısı giyin. Volkanik tüf kayalar, özellikle yokuş aşağı inerken çok kaygan olabilir.",
      "Eğer yürüyüşünüzü öğleden sonra yapıyorsanız, zamanlamanızı iyi ayarlayın ki hava kararmadan seyir terasına (zirveye) ulaşmış olun.",
      "Yanınızda nakit bulundurun! Vadinin derinliklerindeki çay ve meyve suyu satan salaş kafelerde kredi kartı geçmez.",
      "Yürüyüş boyunca birçok üzüm bağı ve meyve ağacı göreceksiniz. Bunlar yerel köylülere aittir, lütfen izinsiz meyve koparmayın."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Vadileri Keşfedin",
    nearbyList: [
      { name: "Kızıl Vadi (Red Valley)", time: "Bağlantılı", link: "/valleys/red-valley" },
      { name: "Kılıçlar Vadisi", time: "15 dk yürüyüş", link: "/valleys/kiliclar" },
      { name: "Çavuşin Köyü", time: "20 dk yürüyüş", link: "/destinations/cavusin" },
      { name: "Göreme", time: "10 dk araçla", link: "/destinations/goreme" },
      { name: "Aşk Vadisi", time: "15 dk araçla", link: "/valleys/love-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Gül Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Gül Vadisi (Rose) ile Kızıl Vadi (Red) arasındaki fark nedir?", a: "Birbirine paralel ve iç içe geçmiş iki vadidir. Gül Vadisi daha çok pembemsi kayalara ve ünlü kiliselere sahipken, Kızıl Vadi daha keskin ve koyu kızıl sırtlara sahiptir. Çoğu yürüyüş rotası ikisini birleştirir." },
      { q: "Giriş ücretli mi?", a: "Göreme veya Çavuşin üzerinden vadiye yürüyerek girmek tamamen ücretsizdir. Ancak araçla tepedeki resmi Seyir Terası'na çıkarsanız küçük bir araç giriş/otopark ücreti alınır." },
      { q: "Yürüyüş parkuru çocuklar için uygun mu?", a: "Ana patikalar genelde güvenlidir ancak dik ve kaygan inişler ile kiliselerin girişinde tırmanılacak bazı merdivenler vardır. 7-8 yaş üzeri aktif çocuklar için daha uygundur." }
    ],

    // 17. CTA
    ctaTitle: "Gül Vadisi'ni Keşfetmeye Hazır Mısın?",
    ctaDesc: "Rehberli yürüyüş, gün batımı ATV veya atlı safari turunu hemen ayırt.",
    btnPlan: "DENEYİMİNİ REZERVE ET"
  },
  es: {
    heroSub: "La Maravilla Rosada de Capadocia",
    heroDesc: "Famoso por sus formaciones rocosas de color rosa que brillan al atardecer y sus iglesias ocultas en cuevas.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR TOUR DE ATARDECER",
    statLoc: "Göreme - Çavuşin",
    statTime: "Mejor Época: Atardecer",
    statStay: "Tiempo Rec: 2–4 Horas",

    aboutTitle: "Sobre el Valle Rosado",
    aboutTags: ["📍 Cerca de Göreme", "🌅 Ideal para Atardecer", "🌸 Rocas Rosadas", "🥾 Senderos Conectados", "⛪ Iglesias Ocultas", "🥤 Cafés de Zumo", "🐎 Ruta a Caballo"],
    aboutText1: "El Valle Rosado (Güllüdere) recibe su nombre de los minerales que tiñen de rosa las formaciones rocosas. Al atardecer, estos colores se intensifican creando un paisaje espectacular.",
    aboutText2: "Paralelo al Valle Rojo, es una red de senderos que te llevan a través de cañones profundos, huertos locales y antiguas iglesias como la Iglesia de la Cruz (Haçlı Kilise).",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Iglesia de la Cruz (Haçlı Kilise)", desc: "Antigua iglesia con una cruz tallada en el techo y frescos impresionantes.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Iglesia de las Columnas", desc: "Una enorme iglesia escondida en la roca con altos pilares.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Mirador del Atardecer", desc: "Las crestas sobre el valle ofrecen el mejor panorama de Capadocia al atardecer.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Cafés Ocultos", desc: "Pequeños cafés familiares en la roca que ofrecen zumo de granada fresco.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Crestas y Túneles", desc: "Camina por túneles estrechos de roca y crestas espectaculares.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Conexión Valle Rojo", desc: "El Valle Rosado se fusiona con el Valle Rojo en la misma caminata.", img: "/images/valleys/red-valley.jpg", link: "/valleys/red-valley" }
    ],

    todoTitle: "Experiencias en el Valle",
    todoCards: [
      { icon: "🌅", title: "Safari ATV al Atardecer", price: 35, rating: "4.9", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🐎", title: "Paseo a Caballo", price: 45, rating: "4.8", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🥾", title: "Trekking Guiado", price: 40, rating: "5.0", dur: "3.5 Horas", link: "/tours/hiking" },
      { icon: "🚘", title: "Coche Clásico", price: 80, rating: "4.9", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🍷", title: "Cata de Vinos", price: 50, rating: "4.8", dur: "2 Horas", link: "/book" },
      { icon: "📸", title: "Sesión Fotográfica", price: 100, rating: "4.7", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.8", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Trekking VIP", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Atrapa el Brillo del Atardecer", desc: "Las rocas cambian de color con el sol. Ve a lo alto para la hora dorada." },
      { num: "02", title: "Zumo de Granada", desc: "Descansa en el café bajo Haçlı Kilise para un zumo recién exprimido." },
      { num: "03", title: "Explora Haçlı Kilise", desc: "Sube las escaleras de madera para ver el techo tallado." },
      { num: "04", title: "Camina por la Cresta", desc: "Disfruta de vistas aéreas impresionantes." },
      { num: "05", title: "Safari a Caballo", desc: "Es la ruta más auténtica para montar a caballo en Capadocia." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1.5 Horas (ATV/Caballo)", desc: "Ideal si te unes a un tour para ver los mejores puntos sin caminar mucho." },
      { day: "3-4 Horas (Trekking)", desc: "Recomendado. Camina desde Göreme y termina en el mirador al atardecer." },
      { day: "Solo Atardecer", desc: "Conduce directo al mirador para ver las rocas con una copa de vino." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Mirador del Atardecer", time: "Atardecer", for: "Rocas Brillantes", diff: "Fácil", img: "/images/valleys/rose-valley.jpg" },
      { name: "Café Haçlı Kilise", time: "Tarde", for: "Vibras Auténticas", diff: "Medio", img: "/images/destinations/avanos.jpg" },
      { name: "Túneles de Roca", time: "Día", for: "Aventura", diff: "Medio", img: "/images/valleys/baglidere.jpg" },
      { name: "Caballos en Crestas", time: "Hora Dorada", for: "Siluetas", diff: "Fácil", img: "/images/destinations/cavusin.jpg" }
    ],

    eatStayTitle: "Refrescos y Lugares Cercanos",
    eatList: ["🥤 Café de Zumo en Haçlı Kilise", "☕ Jardines de Té Ocultos", "🍷 Bares de Vino al Atardecer", "🍇 Huertos de Uvas y Albaricoques"],
    stayList: ["📍 (Sin hoteles en el valle)", "💎 Hoteles en Çavuşin (5 min)", "🏘️ Suites en Göreme (10 min)", "🏕️ Camping en el Mirador"],

    transTitle: "¿Cómo Acceder al Valle Rosado?",
    transList: ["🥾 Caminando: Inicia desde Göreme o Çavuşin.", "🚗 Conduciendo: Ve al 'Mirador del Atardecer de Kızılçukur' (se paga entrada).", "🐎 Tours Guiados: La forma más fácil es un tour a caballo, ATV o trekking."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌅 Mañana Temprano", desc: "Para caminar tranquilo y ver globos de lejos." },
      { name: "🌇 Atardecer", desc: "Cuando los colores rosas cobran vida." },
      { name: "🌸 Primavera", desc: "Clima agradable para el trekking." },
      { name: "🍂 Otoño", desc: "Temporada de cosecha en los viñedos." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Los senderos pueden ser confusos. Usa una app como Maps.me.",
      "Usa zapatos de trekking con buen agarre; la roca puede ser resbaladiza.",
      "Calcula bien el tiempo para llegar al mirador antes de que oscurezca.",
      "¡Lleva efectivo! Los pequeños cafés no aceptan tarjetas.",
      "No recojas frutas de los viñedos locales."
    ],

    nearbyTitle: "Explora Valles Cercanos",
    nearbyList: [
      { name: "Valle Rojo", time: "Conectado", link: "/valleys/red-valley" },
      { name: "Valle de las Espadas", time: "15 min", link: "/valleys/kiliclar" },
      { name: "Çavuşin", time: "20 min", link: "/destinations/cavusin" },
      { name: "Göreme", time: "10 min", link: "/destinations/goreme" },
      { name: "Valle del Amor", time: "15 min", link: "/valleys/love-valley" }
    ],

    popToursTitle: "Tours que Visitan el Valle",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Cuál es la diferencia entre el Valle Rosado y el Valle Rojo?", a: "Son paralelos. El Rosado tiene rocas más claras y famosas iglesias; el Rojo tiene crestas carmesí más afiladas." },
      { q: "¿Hay que pagar entrada?", a: "Caminar desde Göreme es gratis. Conducir hasta el mirador oficial tiene una pequeña tarifa." },
      { q: "¿Es adecuado para niños?", a: "Sí, pero hay bajadas resbaladizas y escaleras. Recomendado para niños activos mayores de 7 años." }
    ],

    ctaTitle: "¿Listo para Explorar el Valle Rosado?",
    ctaDesc: "Reserva tu trekking guiado, ATV al atardecer o safari a caballo hoy.",
    btnPlan: "RESERVAR TU EXPERIENCIA"
  }
};

export default function RoseValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = ROSE_VALLEY_DICT[aktifDil] || ROSE_VALLEY_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-pink-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/rose-valley.jpg" alt="Rose Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 via-slate-900/50 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-pink-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            ROSE VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-pink-400 hover:scale-105 transition-all shadow-xl shadow-pink-500/20">
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
          <div className="w-16 h-1.5 bg-pink-500 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-pink-500 pl-4">
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
            <div className="w-16 h-1.5 bg-pink-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-pink-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-pink-500 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-pink-500 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-pink-50 border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-pink-500 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-pink-500 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-pink-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-pink-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-pink-100 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-pink-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-pink-400">Where to Stay?</h3>
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
      <section className="py-24 bg-pink-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/hiking" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Book Guided Trekking &rarr;
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
                  <span className="text-pink-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-pink-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-pink-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[2]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(236,72,153,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-pink-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-pink-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Rose Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Rose Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12574.653303666245!2d34.8466!3d38.6534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a67bc45dbcc71%3A0xcaf63d3a0eeb9eeb!2sRose%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-pink-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-pink-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book?package=atv" className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-pink-400 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}