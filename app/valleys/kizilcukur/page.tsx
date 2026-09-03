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
// 📚 17 BÖLÜMLÜK SÖZLÜK - KIZILCUKUR SUNSET POINT
// =======================================================
const KIZILCUKUR_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Sunset Capital of Cappadocia",
    heroDesc: "Gather at the edge of the crimson cliffs to witness the most spectacular sunset in Turkey, featuring classic cars, local wine, and glowing valleys.",
    btnExplore: "EXPLORE THE VIEWPOINT",
    btnBookHero: "BOOK SUNSET SAFARI",
    statLoc: "Ortahisar, Türkiye",
    statTime: "Best Time: Golden Hour",
    statStay: "Rec. Time: 1–2 Hours",

    // 2. ABOUT
    aboutTitle: "About Kızılçukur Panorama",
    aboutTags: ["📍 Above Red Valley", "🌅 #1 Sunset Destination", "🍷 Cliffside Wine Tasting", "🚘 Classic Car Hotspot", "🎟️ Ticketed Entry Area", "🏍️ ATV Safari Finish Line", "📸 Epic Golden Hour"],
    aboutText1: "While Red Valley is a place you hike, Kızılçukur Panorama is the place you celebrate. This expansive viewing terrace sits at the very top of the canyon, offering an unobstructed, 360-degree view of the deep crimson ridges that give the valley its name. As the sun begins to set, the iron-rich volcanic rocks reflect the light, glowing in intense shades of red, pink, and orange.",
    aboutText2: "Every evening, this panoramic terrace turns into a vibrant festival of light and romance. Convoys of ATV safaris finish their tours here, vintage American classic cars line up along the cliff edge for photoshoots, and travelers from around the world sit at the rustic cafes, sipping local Cappadocian wine as they watch the sun dip below the horizon.",

    // 3. MUST SEE
    mustSeeTitle: "Viewpoint Highlights",
    mustSeeCards: [
      { name: "The Crimson Ridges", desc: "Look down into the sharp, knife-edge rock formations of Red Valley turning fiery red at sunset.", img: "/images/valleys/red-valley.jpg", link: "#" },
      { name: "Classic Car Lineup", desc: "Dozens of colorful, vintage convertibles parked along the cliff edge, creating a nostalgic movie-set vibe.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Cliffside Cafes", desc: "Rustic viewing platforms offering comfortable seating, Turkish tea, and local wine right on the edge of the canyon.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "The Sunset Spectacle", desc: "The main event. Watch the landscape transform its colors minute by minute as the sun goes down.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "ATV Safari Convoys", desc: "Feel the energy as hundreds of ATVs arrive from the dusty trails to park and watch the sunset together.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Trailhead to the Valley", desc: "The starting point of the hiking trail that plunges deep into the beautiful Red and Rose valleys below.", img: "/images/valleys/rose-valley.jpg", link: "/valleys/red-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences at Kızılçukur",
    todoCards: [
      { icon: "🚘", title: "Classic Car Sunset", price: 80, rating: "5.0", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🏍️", title: "Sunset ATV Safari", price: 35, rating: "4.9", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🍷", title: "Cliffside Wine Tasting", price: 30, rating: "4.8", dur: "1.5 Hours", link: "/book" },
      { icon: "🐎", title: "Horseback Sunset View", price: 45, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "👗", title: "Flying Dress Photoshoot", price: 120, rating: "4.9", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "💍", title: "Romantic Proposal Setup", price: 250, rating: "5.0", dur: "2 Hours", link: "/book" },
      { icon: "🚙", title: "Jeep Safari (Sunset)", price: 45, rating: "4.8", dur: "2 Hours", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Guided Valley Descent", price: 35, rating: "4.8", dur: "2 Hours", link: "/tours/hiking" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Kızılçukur Experience Guide",
    expList: [
      { num: "01", title: "Arrive One Hour Early", desc: "The sunset is spectacular, but the colors of the rocks start changing 45 minutes before the sun actually disappears. Get there early to secure a spot." },
      { num: "02", title: "Toast with Local Wine", desc: "Kızılçukur is famous for sunset wine tasting. Bring a bottle of local Cappadocian wine (like Turasan or Kocabag) or buy a glass from the cafes." },
      { num: "03", title: "Rent a Classic Car", desc: "For the ultimate Cappadocian photo, rent a 1960s convertible. The drivers know exactly where to park on the cliff for the best angles." },
      { num: "04", title: "Walk the Upper Ridges", desc: "Don't just stand at the main cafe. Walk along the upper ridge paths to find a quieter, more private spot to watch the sun go down." },
      { num: "05", title: "Watch the Afterglow", desc: "Don't leave immediately after the sun sets! The 15 minutes of twilight (the afterglow) often paints the sky in unbelievable shades of purple." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1.5 Hours (The Sunset)", desc: "Arrive 45 minutes before sunset, grab a drink, watch the spectacle, and enjoy the twilight before heading to dinner." },
      { day: "2-3 Hours (Safari Finish)", desc: "Join an ATV or Horse tour that explores the valleys first and finishes here perfectly in time for the golden hour." },
      { day: "1 Hour (Daytime View)", desc: "Visit during the day for a quiet, crowd-free panoramic view of the red canyons before starting your hike." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Cliff Edge with Wine", time: "Sunset", for: "Romantic Lifestyle", diff: "Easy", img: "/images/valleys/red-valley.jpg" },
      { name: "Classic Car Silhouette", time: "Golden Hour", for: "Vintage Magic", diff: "Easy", img: "/images/destinations/goreme.jpg" },
      { name: "Overlooking the Ridges", time: "Daytime", for: "Canyon Scale", diff: "Medium", img: "/images/valleys/rose-valley.jpg" },
      { name: "ATV Convoy Arrival", time: "Late Afternoon", for: "Action & Dust", diff: "Easy", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["🍷 Sunset Wine & Beer Bars", "☕ Viewpoint Cafes (Tea & Coffee)", "🍿 Roasted Nuts & Snacks Kiosks", "🍽️ Fine Dining in Ortahisar (10 mins drive)"],
    stayList: ["📍 (No Hotels directly at the Panorama)", "🏰 Ortahisar Cave Suites (10 mins drive)", "💎 Goreme Boutique Hotels (15 mins drive)", "⛺ Wild Camping on the further ridges"],

    // 10. TRANSPORT
    transTitle: "How to Access Kızılçukur?",
    transList: ["🚗 By Car: The most common way. Drive from Ortahisar following the 'Kızılçukur' signs. There is a large parking lot, but it fills up fast at sunset.", "🎟️ Entrance Fee: Since this is an official panoramic viewpoint maintained by the municipality, there is a small entry/parking fee per vehicle.", "🏍️ By Safari Tour: Almost all sunset ATV, Jeep, and Horse safaris end their routes exactly at this viewpoint."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌇 Sunset", desc: "The reason this place exists. It is crowded, festive, and absolutely breathtaking." },
      { name: "🌅 Sunrise", desc: "While Love Valley is better for balloons, you can still see them from afar here in complete silence." },
      { name: "☀️ Midday", desc: "The cafes are empty, the lighting is bright, and you can enjoy the vast canyon views peacefully." },
      { name: "🍂 Autumn", desc: "The air is crisp, the sky is clear, and the sunset colors are at their most vibrant." }
    ],

    // 12. TIPS
    tipsTitle: "Local Panorama Tips",
    tipsList: [
      "Traffic can get jammed! The road leading to Kızılçukur gets very busy 30 minutes before sunset. Leave your hotel early.",
      "Bring a jacket, even in mid-summer. Once the sun dips below the horizon, the cliff-top wind becomes instantly chilly.",
      "If you want to buy alcohol (wine or beer) at the cafes, bring cash. Some small pop-up bars don't have credit card machines.",
      "Stay behind the safety fences. The sheer drop into the canyon is extremely deep and the gravel edge can be slippery.",
      "Don't rush to leave. Let the massive crowds and tour buses depart first while you enjoy the twilight."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Red Valley (Hike)", time: "Starts Here", link: "/valleys/red-valley" },
      { name: "Rose Valley", time: "Connected", link: "/valleys/rose-valley" },
      { name: "Ortahisar Castle", time: "10 min drive", link: "/destinations/ortahisar" },
      { name: "Goreme Open Air Museum", time: "15 min drive", link: "/museums/goreme" },
      { name: "Pancarlik Valley", time: "15 min drive", link: "/valleys/pancarlik" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Kızılçukur Sunset Point",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Kızılçukur different from Red Valley?", a: "Geographically, they are the same place. Kızılçukur is the Turkish name. However, tourists use 'Red Valley' to mean the hiking trails down in the canyon, and 'Kızılçukur' to mean this panoramic sunset viewing terrace at the top." },
      { q: "Do I have to pay to enter the sunset point?", a: "Yes, there is a toll booth on the road leading up to the panorama. The local municipality charges a small fee per vehicle or per person for parking and upkeep." },
      { q: "Can I do a hot air balloon flight from here?", a: "No, balloons do not take off from here. They launch closer to Goreme and Love Valley. Kızılçukur is strictly famous for its sunset, not sunrise balloons." }
    ],

    // 17. CTA
    ctaTitle: "Ready for the Ultimate Sunset?",
    ctaDesc: "Book your Classic Car tour, ATV Safari, or a romantic wine setup at Kızılçukur Panorama today.",
    btnPlan: "BOOK YOUR SUNSET EXPERIENCE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'da Gün Batımının Başkenti",
    heroDesc: "Klasik araçlar, yöresel şaraplar ve alev kırmızısına dönen vadiler eşliğinde Türkiye'nin en görkemli gün batımına tanık olmak için uçurumun kenarında yerinizi alın.",
    btnExplore: "MANZARAYI KEŞFET",
    btnBookHero: "GÜN BATIMI SAFARİSİ REZERVE ET",
    statLoc: "Ortahisar, Türkiye",
    statTime: "En İyi Zaman: Altın Saat (Akşamüstü)",
    statStay: "Önerilen Süre: 1–2 Saat",

    // 2. ABOUT
    aboutTitle: "Kızılçukur Seyir Terası Hakkında",
    aboutTags: ["📍 Kızıl Vadi'nin Zirvesi", "🌅 1 Numaralı Gün Batımı Yeri", "🍷 Uçurumda Şarap Keyfi", "🚘 Klasik Araç Merkezi", "🎟️ Ücretli Giriş / Otopark", "🏍️ ATV Turlarının Bitiş Noktası", "📸 Efsanevi Altın Saat"],
    aboutText1: "Red Valley (Kızıl Vadi) içinde yürüyüş yapılan bir kanyonsa, Kızılçukur Seyir Terası o yürüyüşün kutlandığı yerdir. Kanyonun en tepesinde yer alan bu devasa teras, vadiye adını veren kızıl sırtların 360 derecelik kesintisiz manzarasını sunar. Güneş batmaya başladığında, demir açısından zengin volkanik kayalar ışığı yansıtarak kırmızı, pembe ve turuncunun en yoğun tonlarında adeta parlar.",
    aboutText2: "Her akşam bu panoramik teras ışığın, eğlencenin ve romantizmin bir festivaline dönüşür. Tozlu yollardan gelen ATV safari konvoyları turlarını burada tamamlar, 1960 model Amerikan klasik araçları fotoğraf çekimleri için uçurum kenarına dizilir ve dünyanın dört bir yanından gelen gezginler salaş kafelerde oturup Kapadokya şaraplarını yudumlayarak güneşin ufkun altına süzülüşünü izler.",

    // 3. MUST SEE
    mustSeeTitle: "Seyir Terasında Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Alev Kırmızısı Sırtlar", desc: "Gün batımında kelimenin tam anlamıyla alev alev yanan Kızıl Vadi'nin bıçak sırtı kaya oluşumlarına yukarıdan bakın.", img: "/images/valleys/red-valley.jpg", link: "#" },
      { name: "Klasik Araç Korteji", desc: "Uçurum kenarına dizilmiş onlarca renkli üstü açık nostaljik aracın yarattığı film seti atmosferi.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Uçurum Kenarı Kafeler", desc: "Kanyonun tam kenarında sıcak Türk çayı, kahve ve yöresel şarap sunan otantik ve rahat localar.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Gün Batımı Şöleni", desc: "Ana etkinlik. Güneş batarken manzaranın renklerinin dakikadan dakikaya nasıl değiştiğini büyülenerek izleyin.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "ATV Safari Konvoyları", desc: "Tozlu vadilerden çıkıp gün batımını izlemek için terasta toplanan yüzlerce ATV'nin yarattığı o yüksek enerji.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Vadi Yürüyüş Yolu Girişi", desc: "Kızıl ve Gül vadilerinin derinliklerine inen efsanevi trekking parkurunun başlangıç noktası.", img: "/images/valleys/rose-valley.jpg", link: "/valleys/red-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Kızılçukur Deneyimleri",
    todoCards: [
      { icon: "🚘", title: "Klasik Araçla Gün Batımı", price: 80, rating: "5.0", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🏍️", title: "Gün Batımı ATV Safari", price: 35, rating: "4.9", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🍷", title: "Uçurumda Şarap Tadımı", price: 30, rating: "4.8", dur: "1.5 Saat", link: "/book" },
      { icon: "🐎", title: "Atlı Manzara Turu", price: 45, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "👗", title: "Uçan Elbise Dış Çekimi", price: 120, rating: "4.9", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "💍", title: "Romantik Evlilik Teklifi", price: 250, rating: "5.0", dur: "2 Saat", link: "/book" },
      { icon: "🚙", title: "Jeep Safari (Akşamüstü)", price: 45, rating: "4.8", dur: "2 Saat", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Rehberli Vadi İnişi", price: 35, rating: "4.8", dur: "2 Saat", link: "/tours/hiking" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Kızılçukur Deneyim Rehberi",
    expList: [
      { num: "01", title: "Bir Saat Erken Gidin", desc: "Güneşin batışı muazzamdır ama kayaların rengi güneş ufuktan kaybolmadan 45 dakika önce değişmeye başlar. İyi bir yer kapmak için erken gidin." },
      { num: "02", title: "Yerel Şarapla Kadeh Kaldırın", desc: "Kızılçukur şarap eşliğinde gün batımıyla meşhurdur. Yanınızda yerel bir Kapadokya şarabı (Turasan veya Kocabağ gibi) getirin veya kafelerden bir kadeh alın." },
      { num: "03", title: "Klasik Araç Kiralayın", desc: "En havalı Kapadokya karesi için 1960 model bir araç kiralayın. Şoförler en iyi açılar için arabayı uçurumun neresine park edeceklerini çok iyi bilirler." },
      { num: "04", title: "Üst Sırtlarda Yürüyün", desc: "Sadece ana kafenin olduğu yerde kalmayın. Güneşi daha sessiz ve size özel bir noktadan izlemek için üst sırtlardaki patikalarda biraz yürüyün." },
      { num: "05", title: "Alacakaranlığı (Afterglow) Bekleyin", desc: "Güneş batar batmaz hemen ayrılmayın! Batan güneşin ardından gelen o 15 dakikalık alacakaranlık, gökyüzünü inanılmaz mor tonlarına boyar." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1.5 Saat (Gün Batımı İzleme)", desc: "Güneş batmadan 45 dakika önce gelin, içeceğinizi alın, şöleni izleyin ve akşam yemeğine geçmeden önce alacakaranlığın tadını çıkarın." },
      { day: "2-3 Saat (Safari Bitişi)", desc: "Önce vadileri gezen, ardından altın saatte (golden hour) tam zamanında burada bitecek bir ATV veya At turuna katılın." },
      { day: "1 Saat (Gündüz Manzarası)", desc: "Vadi yürüyüşünüze başlamadan önce kızıl kanyonların kalabalıktan uzak ve panoramik manzarasını görmek için gündüz uğrayın." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Şarapla Uçurum Kenarı", time: "Gün Batımı", for: "Romantik ve Lüks", diff: "Kolay", img: "/images/valleys/red-valley.jpg" },
      { name: "Klasik Araç Silüeti", time: "Altın Saat", for: "Nostaljik Büyü", diff: "Kolay", img: "/images/destinations/goreme.jpg" },
      { name: "Kanyon Sırtları", time: "Gündüz", for: "Derinlik ve Ölçek", diff: "Orta", img: "/images/valleys/rose-valley.jpg" },
      { name: "ATV Konvoyu Gelişi", time: "Akşamüstü", for: "Aksiyon ve Toz", diff: "Kolay", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["🍷 Gün Batımı Şarap ve Bira Barları", "☕ Manzaralı Kafeler (Çay, Kahve, Gözleme)", "🍿 Kavrulmuş Kuruyemiş ve Mısır Kioskları", "🍽️ Ortahisar'da Akşam Yemeği (10 dk araçla)"],
    stayList: ["📍 (Seyir terasında doğrudan otel bulunmaz)", "🏰 Ortahisar Mağara Süitleri (10 dk araçla)", "💎 Göreme Butik Otelleri (15 dk araçla)", "⛺ İlerideki Sırtlarda Vahşi Kamp"],

    // 10. TRANSPORT
    transTitle: "Kızılçukur'a Nasıl Gidilir?",
    transList: ["🚗 Araçla: En yaygın yoldur. Ortahisar'dan 'Kızılçukur' tabelalarını takip ederek asfalt yoldan çıkabilirsiniz. Büyük bir otopark vardır ancak gün batımında hızla dolar.", "🎟️ Giriş Ücreti: Burası belediye tarafından bakımı yapılan resmi bir seyir terası olduğundan, araç veya kişi başı küçük bir gişe/otopark ücreti alınır.", "🏍️ Safari Turlarıyla: Gün batımı ATV, Jeep ve Atlı safarilerinin neredeyse tamamı turlarını tam olarak bu seyir terasında bitirir."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌇 Gün Batımı", desc: "Buranın varoluş amacıdır. Çok kalabalık, çok şenlikli ve kesinlikle nefes kesicidir." },
      { name: "🌅 Gün Doğumu", desc: "Balonları yakından görmek için Aşk Vadisi daha iyi olsa da, buradan da mutlak bir sessizlik içinde uzaktan izleyebilirsiniz." },
      { name: "☀️ Gündüz", desc: "Kafeler boştur, ışık parlaktır ve uçsuz bucaksız kanyon manzarasının tadını huzurla çıkarabilirsiniz." },
      { name: "🍂 Sonbahar", desc: "Hava berraktır, gökyüzü açıktır ve gün batımında kayaların kırmızısı yılın en canlı tonlarına ulaşır." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Trafik sıkışabilir! Kızılçukur'a çıkan yol gün batımından 30 dakika önce çok yoğun olur. Otelinizden mutlaka erken çıkın.",
      "Yazın ortası bile olsa yanınıza bir hırka veya ceket alın. Güneş ufkun altına indiği anda uçurumun tepesindeki rüzgar anında buz gibi olur.",
      "Kafelerde veya küçük stantlarda şarap/bira alacaksanız yanınızda nakit bulundurun, bazılarında pos cihazı çekmeyebilir.",
      "Güvenlik çitlerinin arkasında kalın. Kanyona doğru olan uçurum son derece derindir ve çakıllı kenarlar kaygan olabilir.",
      "Güneş battıktan sonra gitmek için acele etmeyin. Siz alacakaranlığın (afterglow) tadını çıkarırken bırakın büyük tur otobüsleri ve kalabalık önce çıksın, trafiğe kalmayın."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Kızıl Vadi (Yürüyüş)", time: "Buradan Başlar", link: "/valleys/red-valley" },
      { name: "Gül Vadisi", time: "Bağlantılı", link: "/valleys/rose-valley" },
      { name: "Ortahisar Kalesi", time: "10 dk araçla", link: "/destinations/ortahisar" },
      { name: "Göreme Açık Hava Müzesi", time: "15 dk araçla", link: "/museums/goreme" },
      { name: "Pancarlık Vadisi", time: "15 dk araçla", link: "/valleys/pancarlik" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Kızılçukur Seyir Terası'na Gelen Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Kızılçukur ile Red Valley (Kızıl Vadi) farklı yerler mi?", a: "Coğrafi olarak tamamen aynı yerdir. 'Kızılçukur' orijinal Türkçe adıdır. Ancak turistler kanyonun içindeki yürüyüş parkurlarına 'Red Valley' derken, tepedeki bu biletli, kafeli ve kalabalık seyir terasına 'Kızılçukur' derler." },
      { q: "Gün batımı noktasına girmek ücretli mi?", a: "Evet, seyir terasına çıkan yolda bir gişe vardır. Yerel belediye, otopark ve çevre bakımı için araç başına veya kişi başı (yaya iseniz) küçük bir giriş ücreti almaktadır." },
      { q: "Buradan sıcak hava balonuna binebilir miyim?", a: "Hayır, balonlar buradan kalkmaz. Kalkış alanları Göreme ve Aşk Vadisi tarafındadır. Kızılçukur gün doğumu balonlarıyla değil, efsanevi gün batımı manzarasıyla ünlüdür." }
    ],

    // 17. CTA
    ctaTitle: "Efsanevi Gün Batımına Hazır Mısın?",
    ctaDesc: "Kızılçukur Seyir Terası'nda klasik araç turunuzu, ATV safarinizi veya romantik şarap konseptinizi hemen ayırtın.",
    btnPlan: "GÜN BATIMI REZERVASYONU YAP"
  },
  es: {
    heroSub: "La Capital del Atardecer en Capadocia",
    heroDesc: "Reúnete al borde de los acantilados carmesí para presenciar el atardecer más espectacular de Turquía, con coches clásicos, vino local y valles resplandecientes.",
    btnExplore: "EXPLORAR EL MIRADOR",
    btnBookHero: "RESERVAR SAFARI AL ATARDECER",
    statLoc: "Ortahisar, Turquía",
    statTime: "Mejor Época: Hora Dorada",
    statStay: "Tiempo Rec: 1–2 Horas",

    aboutTitle: "Sobre el Mirador de Kızılçukur",
    aboutTags: ["📍 Sobre el Valle Rojo", "🌅 Destino #1 de Atardecer", "🍷 Vino en el Acantilado", "🚘 Zona de Coches Clásicos", "🎟️ Entrada de Pago", "🏍️ Meta de Safari ATV", "📸 Épica Hora Dorada"],
    aboutText1: "Mientras que el Valle Rojo es un lugar para caminar, el Mirador de Kızılçukur es el lugar para celebrar. Esta amplia terraza se asienta en lo más alto del cañón, ofreciendo una vista de 360 grados de las profundas crestas rojas. Al ponerse el sol, las rocas volcánicas reflejan la luz, brillando en intensos tonos de rojo, rosa y naranja.",
    aboutText2: "Cada tarde, esta terraza se convierte en un festival de luz y romance. Los convoyes de ATV terminan sus tours aquí, coches clásicos americanos se alinean para fotos, y viajeros de todo el mundo se sientan en los cafés rústicos bebiendo vino de Capadocia mientras ven el sol esconderse bajo el horizonte.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Crestas Carmesí", desc: "Mira hacia abajo a las afiladas formaciones del Valle Rojo que se vuelven rojo fuego al atardecer.", img: "/images/valleys/red-valley.jpg", link: "#" },
      { name: "Exhibición de Coches Clásicos", desc: "Docenas de descapotables vintage aparcados al borde del acantilado, creando un ambiente de película.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Cafés del Acantilado", desc: "Plataformas de observación rústicas que ofrecen té turco y vino local justo en el borde del cañón.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "El Espectáculo del Atardecer", desc: "El evento principal. Observa cómo el paisaje transforma sus colores minuto a minuto.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Llegada de ATVs", desc: "Siente la energía mientras cientos de ATVs llegan de los senderos polvorientos para ver el atardecer.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Inicio del Sendero", desc: "El punto de partida de la ruta de senderismo que se adentra en los valles Rojo y Rosado.", img: "/images/valleys/rose-valley.jpg", link: "/valleys/red-valley" }
    ],

    todoTitle: "Experiencias en Kızılçukur",
    todoCards: [
      { icon: "🚘", title: "Coche Clásico al Atardecer", price: 80, rating: "5.0", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🏍️", title: "Safari ATV (Atardecer)", price: 35, rating: "4.9", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🍷", title: "Vino en el Acantilado", price: 30, rating: "4.8", dur: "1.5 Horas", link: "/book" },
      { icon: "🐎", title: "Caballos al Atardecer", price: 45, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "👗", title: "Sesión Vestido Volador", price: 120, rating: "4.9", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "💍", title: "Propuesta Romántica", price: 250, rating: "5.0", dur: "2 Horas", link: "/book" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.8", dur: "2 Horas", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Descenso Guiado al Valle", price: 35, rating: "4.8", dur: "2 Horas", link: "/tours/hiking" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Llega una Hora Antes", desc: "El atardecer es espectacular, pero los colores cambian 45 minutos antes de que el sol desaparezca. Llega temprano para coger sitio." },
      { num: "02", title: "Brinda con Vino Local", desc: "Kızılçukur es famoso por el vino al atardecer. Trae una botella de vino capadocio (Turasan o Kocabag) o pide una copa en los cafés." },
      { num: "03", title: "Alquila un Coche Clásico", desc: "Para la foto definitiva, alquila un descapotable de los 60. Los conductores saben dónde aparcar para obtener los mejores ángulos." },
      { num: "04", title: "Camina por las Crestas Altas", desc: "No te quedes solo en el café principal. Camina por los senderos superiores para encontrar un lugar más privado." },
      { num: "05", title: "Espera el Crepúsculo", desc: "¡No te vayas de inmediato! Los 15 minutos de luz tras la puesta de sol (afterglow) tiñen el cielo de increíbles tonos morados." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1.5 Horas (El Atardecer)", desc: "Llega 45 min antes, toma una bebida, mira el espectáculo y disfruta el crepúsculo antes de cenar." },
      { day: "2-3 Horas (Fin de Safari)", desc: "Únete a un tour en ATV o caballo que explore los valles y termine aquí justo para la hora dorada." },
      { day: "1 Hora (Vista Diurna)", desc: "Visita durante el día para disfrutar de una vista panorámica tranquila de los cañones antes de hacer senderismo." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Borde del Acantilado con Vino", time: "Atardecer", for: "Estilo Romántico", diff: "Fácil", img: "/images/valleys/red-valley.jpg" },
      { name: "Silueta de Coche Clásico", time: "Hora Dorada", for: "Magia Vintage", diff: "Fácil", img: "/images/destinations/goreme.jpg" },
      { name: "Vistas desde la Cresta", time: "Día", for: "Escala del Cañón", diff: "Medio", img: "/images/valleys/rose-valley.jpg" },
      { name: "Llegada de ATVs", time: "Tarde", for: "Acción y Polvo", diff: "Fácil", img: "/images/valleys/baglidere.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["🍷 Bares de Vino y Cerveza al Atardecer", "☕ Cafés del Mirador (Té y Café)", "🍿 Kioscos de Nueces y Snacks", "🍽️ Cena en Ortahisar (A 10 min)"],
    stayList: ["📍 (Sin Hoteles directamente en el Mirador)", "🏰 Suites Cueva en Ortahisar (A 10 min)", "💎 Hoteles Boutique en Göreme (A 15 min)", "⛺ Acampada Libre en las crestas lejanas"],

    transTitle: "¿Cómo Acceder a Kızılçukur?",
    transList: ["🚗 En Coche: La forma más común. Conduce desde Ortahisar siguiendo las señales de 'Kızılçukur'. Hay un gran aparcamiento, pero se llena rápido.", "🎟️ Tarifa de Entrada: Al ser un mirador oficial municipal, hay una pequeña tarifa de entrada/aparcamiento por vehículo.", "🏍️ En Tour Safari: Casi todos los safaris al atardecer en ATV, Jeep y a caballo terminan exactamente en este mirador."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌇 Atardecer", desc: "La razón de ser de este lugar. Está concurrido, es festivo y absolutamente impresionante." },
      { name: "🌅 Amanecer", desc: "Aunque el Valle del Amor es mejor para los globos, desde aquí puedes verlos de lejos en total silencio." },
      { name: "☀️ Mediodía", desc: "Los cafés están vacíos, la luz es brillante y puedes disfrutar de las vistas pacíficamente." },
      { name: "🍂 Otoño", desc: "El aire es fresco, el cielo está claro y los colores del atardecer son más vibrantes que nunca." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "¡Puede haber atascos! La carretera se llena 30 minutos antes del atardecer. Sal de tu hotel temprano.",
      "Lleva una chaqueta, incluso en verano. Cuando el sol se oculta, el viento en el acantilado se vuelve frío al instante.",
      "Si quieres comprar alcohol en los cafés, lleva efectivo. Algunos bares pequeños no tienen datáfono.",
      "Mantente detrás de las vallas de seguridad. La caída al cañón es profunda y la grava puede ser resbaladiza.",
      "No te apresures a irte. Deja que las multitudes y los autobuses salgan primero mientras disfrutas del crepúsculo."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Valle Rojo (Trekking)", time: "Inicia Aquí", link: "/valleys/red-valley" },
      { name: "Valle Rosado", time: "Conectado", link: "/valleys/rose-valley" },
      { name: "Castillo de Ortahisar", time: "10 min en coche", link: "/destinations/ortahisar" },
      { name: "Museo de Göreme", time: "15 min en coche", link: "/museums/goreme" },
      { name: "Valle de Pancarlik", time: "15 min en coche", link: "/valleys/pancarlik" }
    ],

    popToursTitle: "Tours que Visitan el Mirador de Kızılçukur",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es Kızılçukur diferente del Valle Rojo?", a: "Geográficamente, son el mismo lugar. Sin embargo, los turistas usan 'Red Valley' para los senderos en el cañón, y 'Kızılçukur' para esta terraza panorámica en la cima." },
      { q: "¿Tengo que pagar para entrar al mirador?", a: "Sí, hay una caseta de peaje en la carretera de acceso. El municipio cobra una pequeña tarifa por vehículo o persona para el mantenimiento." },
      { q: "¿Puedo volar en globo desde aquí?", a: "No, los globos no despegan desde aquí. Lo hacen más cerca de Göreme. Kızılçukur es famoso por su atardecer, no por los globos del amanecer." }
    ],

    ctaTitle: "¿Listo para el Atardecer Definitivo?",
    ctaDesc: "Reserva hoy tu tour en Coche Clásico, Safari en ATV o una romántica sesión de vino en el Mirador de Kızılçukur.",
    btnPlan: "RESERVAR TU EXPERIENCIA"
  }
};

export default function KizilcukurPanoramaPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = KIZILCUKUR_DICT[aktifDil] || KIZILCUKUR_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-red-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/red-valley.jpg" alt="Kizilcukur Sunset Point Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/60 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-red-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-[7rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            KIZILCUKUR
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-500 hover:scale-105 transition-all shadow-xl shadow-red-600/30">
              {t.btnExplore}
            </a>
            <Link href="/tours/atv" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-red-500 pl-4">
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
            <div className="w-16 h-1.5 bg-red-500 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-red-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-red-50/50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-red-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-red-500 shrink-0">{exp.num}</div>
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

      {/* 8 & 9. EAT & STAY */}
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
      <section className="py-24 bg-red-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/atv" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-600 transition-all">
              Book Sunset Safari &rarr;
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
          {[t.todoCards[0], t.todoCards[1], t.todoCards[2]].map((card: any, idx: number) => (
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

      {/* 15. GOOGLE MAP (Kizilcukur Sunset Point) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Kızılçukur Sunset Panorama Map</h2>
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
            <Link href="/tours/atv" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-red-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}