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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - IHLARA VALLEY
// =======================================================
const IHLARA_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Grand Canyon of Cappadocia",
    heroDesc: "Descend 397 steps into a lush, 14km river canyon packed with ancient rock-cut churches, whispering trees, and over-water restaurants.",
    btnExplore: "EXPLORE THE CANYON",
    btnBookHero: "BOOK THE GREEN TOUR",
    statLoc: "Aksaray Province",
    statTime: "Best Time: Morning",
    statStay: "Rec. Time: 3–4 Hours",

    // 2. ABOUT
    aboutTitle: "About Ihlara Valley",
    aboutTags: ["📍 1 Hour from Goreme", "🌊 Melendiz River", "🥾 14km Canyon Trek", "⛪ Ağaçaltı Church", "🍽️ Belisırma River Cafes", "🏰 Selime Monastery", "🟢 Green Tour Highlight"],
    aboutText1: "Ihlara Valley is a massive 14-kilometer gorge carved by the Melendiz River through volcanic rock. Located in the Aksaray province (about a 1-hour drive from Goreme), it is the jewel of the famous 'Green Tour'. The canyon plunges up to 100 meters deep, creating a unique microclimate where lush greenery and pistachio trees thrive against the stark, sheer cliff faces.",
    aboutText2: "Because of its hidden and secure nature, Ihlara Valley became a major settlement for early Christians escaping Roman persecution. They carved over 100 churches and thousands of dwellings into the canyon walls. Today, hiking alongside the bubbling river, exploring the frescoed churches, and having lunch in cabanas built directly over the water at Belisırma village makes for one of the most unforgettable days in Turkey.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "The 397 Steps", desc: "The dramatic main entrance to the valley, descending deep into the lush canyon floor.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Ağaçaltı Church", desc: "The 'Church Under the Tree' located right at the base of the stairs, famous for its vivid frescoes of Daniel in the Lion's Den.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Melendiz River Walk", desc: "The shaded, flat trekking path that follows the cooling waters of the river through the gorge.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Belisırma River Restaurants", desc: "The midpoint of the trek where you can eat traditional trout or kebabs in wooden cabanas perched over the river.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Yılanlı (Serpent) Church", desc: "A fascinating rock church containing depictions of sinners being bitten by serpents in the afterlife.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Selime Monastery", desc: "The epic conclusion to the valley: the largest religious rock-cut structure in Cappadocia, looking like a Star Wars set.", img: "/images/destinations/uchisar.jpg", link: "/destinations/selime" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Ihlara",
    todoCards: [
      { icon: "🟢", title: "Cappadocia Green Tour", price: 65, rating: "5.0", dur: "Full Day", link: "/tours/green-tour" },
      { icon: "🥾", title: "Ihlara Trekking (Full 14km)", price: 50, rating: "4.9", dur: "6 Hours", link: "/tours/hiking" },
      { icon: "👑", title: "Private VIP Green Tour", price: 150, rating: "5.0", dur: "Full Day", link: "/tours/private-tours" },
      { icon: "📸", title: "Canyon Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🍽️", title: "River Lunch Experience", price: 25, rating: "4.8", dur: "1.5 Hours", link: "/book" },
      { icon: "🚙", title: "Jeep Transfer to Selime", price: 40, rating: "4.7", dur: "1 Hour", link: "/tours/jeep-safari" },
      { icon: "⛪", title: "Cave Churches Guide", price: 30, rating: "4.9", dur: "2 Hours", link: "/book" },
      { icon: "🔴", title: "Add Red Tour (Next Day)", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Ihlara Experience Guide",
    expList: [
      { num: "01", title: "Descend the Famous Stairs", desc: "Start at the main Ihlara entrance. Counting the nearly 400 steps down into the canyon is a Cappadocian tradition." },
      { num: "02", title: "Visit Ağaçaltı Church", desc: "As soon as you reach the bottom of the stairs, turn right to see one of the most vibrant and unique churches in the valley." },
      { num: "03", title: "Hike to Belisırma (4km)", desc: "The most popular section of the trail is the flat, 4km walk from the stairs to Belisırma village alongside the river." },
      { num: "04", title: "Eat Over the Water", desc: "Take off your shoes and sit cross-legged in a wooden cabana built directly over the flowing Melendiz River for lunch." },
      { num: "05", title: "Finish at Selime Monastery", desc: "Drive or hike to the end of the valley to explore Selime Monastery, a massive complex carved high into the mountain." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "Full Day (Green Tour)", desc: "The standard and most convenient way. Includes transport, a 4km hike, river lunch, and Selime Monastery." },
      { day: "Half Day (Independent)", desc: "Drive to Ihlara, hike the 4km section to Belisırma, take a taxi back to your car, and then drive to Selime." },
      { day: "Full 14km Trek", desc: "For hardcore hikers: Start at Ihlara village and walk the entire 14km length of the canyon to Selime." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Top of the 397 Stairs", time: "Morning", for: "Canyon Depth Overview", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "Over-Water Cabanas", time: "Midday", for: "Lunch Vibes", diff: "Easy", img: "/images/destinations/avanos.jpg" },
      { name: "River Wooden Bridges", time: "Daytime", for: "Jungle & Water", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "Selime Monastery Pillars", time: "Afternoon", for: "Star Wars Landscape", diff: "Medium", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["🍽️ Belisırma Over-Water Cabanas (Trout, Kebabs, Meze)", "☕ Small Tea Gardens along the River", "🥤 Fresh Pomegranate Juice at the Entrance", "🥜 Local Pistachio Vendors"],
    stayList: ["📍 (No Hotels Inside the Canyon)", "🏡 Guesthouses in Ihlara Village", "💎 Cave Hotels in Goreme (1-hour drive)", "🏰 Boutique Hotels in Guzelyurt (Nearby)"],

    // 10. TRANSPORT
    transTitle: "How to Access Ihlara?",
    transList: ["🟢 Join the Green Tour: Highly recommended. Because Ihlara is 1 hour away and the hike is linear (start at one point, end at another), the tour's logistics solve all transport issues.", "🚗 By Car: Drive to the main Ihlara entrance. If you hike to Belisırma (4km), you will need to take a local taxi back to your car at the entrance.", "🚌 Public Transport: Not practical from Goreme. Requires multiple bus transfers via Nevsehir and Aksaray."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "The river is full, the canyon is vibrantly green, and the temperature is perfect." },
      { name: "☀️ Summer", desc: "The valley floor is much cooler than Goreme, making it a great escape from the summer heat." },
      { name: "🍂 Autumn", desc: "The trees turning yellow and orange along the river create stunning reflections." },
      { name: "❄️ Winter", desc: "The 397 stairs can be icy and dangerous. Some restaurants in Belisırma may be closed." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Ihlara Valley is an official museum site. You need to buy an entrance ticket or use your Museum Pass Turkey at the top of the stairs.",
      "Comfortable walking shoes are essential. The trail is mostly flat, but it is unpaved, rocky, and can be muddy near the river.",
      "If you drive your own car, park at the main Ihlara Entrance, walk to Belisırma, and hire a local taxi there to drive you back to your car (about 10 mins by road).",
      "Do not miss Selime Monastery at the end of the valley. Your Ihlara Valley ticket usually covers entry to Selime as well.",
      "The 'over-water' tables in Belisırma are incredibly popular. If you are not with a tour, try to arrive before 12:30 PM to secure a good spot."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Selime Monastery", time: "End of Valley", link: "/destinations/selime" },
      { name: "Derinkuyu Underground City", time: "45 min drive", link: "/museums/derinkuyu" },
      { name: "Guzelyurt Underground City", time: "15 min drive", link: "/museums/guzelyurt" },
      { name: "Goreme Center", time: "60 min drive", link: "/destinations/goreme" },
      { name: "Uchisar Castle", time: "60 min drive", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Ihlara Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is the 397-step staircase difficult?", a: "Going down is very easy, but it can be hard on the knees. If you do the standard hike to Belisırma, you do not have to climb back up the stairs; you exit the valley at Belisırma village." },
      { q: "Can I do Ihlara Valley without the Green Tour?", a: "Yes, if you rent a car. However, because it's a linear hike (A to B), you will need to pay a local taxi to bring you back to your parked car. The Green Tour is generally cheaper and much easier logistically." },
      { q: "Can we swim in the Melendiz River?", a: "No, the river is shallow, rocky, and swimming is not permitted. However, sitting in the cabanas over the river and dipping your feet in the water is a popular activity." }
    ],

    // 17. CTA
    ctaTitle: "Ready for the Green Tour?",
    ctaDesc: "Book your all-inclusive Green Tour to easily explore Ihlara Valley, Derinkuyu, and Selime Monastery.",
    btnPlan: "BOOK THE GREEN TOUR"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Büyük Kanyonu",
    heroDesc: "397 basamakla inilen 14 kilometrelik bu yemyeşil kanyonda; kaya kiliselerini, Melendiz Çayı'nı ve su üstü restoranlarını keşfedin.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "YEŞİL TUR'U REZERVE ET",
    statLoc: "Aksaray Sınırları İçinde",
    statTime: "En İyi Zaman: Sabah",
    statStay: "Önerilen Süre: 3–4 Saat",

    // 2. ABOUT
    aboutTitle: "Ihlara Vadisi Hakkında",
    aboutTags: ["📍 Göreme'ye 1 Saat Uzaklıkta", "🌊 Melendiz Çayı", "🥾 14 km Kanyon Yürüyüşü", "⛪ Ağaçaltı Kilisesi", "🍽️ Belisırma Su Üstü Localara", "🏰 Selime Manastırı", "🟢 Yeşil Tur'un (Green Tour) Merkezi"],
    aboutText1: "Ihlara Vadisi, volkanik kayaların Melendiz Çayı tarafından aşındırılmasıyla oluşmuş 14 kilometrelik devasa bir kanyondur. Aksaray sınırları içinde (Göreme'den yaklaşık 1 saatlik sürüş mesafesinde) yer alan vadi, dünyaca ünlü 'Yeşil Tur'un (Green Tour) kalbidir. 100 metreyi bulan kanyon derinliği, çorak Kapadokya coğrafyasının ortasında yemyeşil ağaçların fışkırdığı eşsiz bir mikroiklim yaratır.",
    aboutText2: "Gizli ve korunaklı yapısı nedeniyle Ihlara Vadisi, Roma baskısından kaçan ilk Hristiyanlar için önemli bir sığınak olmuştur. Kanyon duvarlarına 100'den fazla kilise ve binlerce yaşam alanı oymuşlardır. Günümüzde çağıldayan nehir boyunca yürümek, freskli kiliseleri incelemek ve Belisırma köyünde nehrin tam üzerine kurulan ahşap localarda öğle yemeği yemek, bölgedeki en unutulmaz aktivitelerden biridir.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "397 Basamak", desc: "Vadinin görkemli ana girişi; yemyeşil kanyon tabanına inerken nefes kesici bir manzara sunar.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Ağaçaltı Kilisesi", desc: "Merdivenlerin hemen bitiminde yer alan, Aslanlar İnindeki Daniel freskiyle ünlü tarihi kaya kilisesi.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Melendiz Çayı Yürüyüş Yolu", desc: "Kanyon boyunca buz gibi akan nehrin hemen yanından giden gölgeli ve huzurlu yürüyüş parkuru.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Belisırma Nehir Restoranları", desc: "Yürüyüşün mola noktası; nehrin üzerine kurulmuş tahta localarda alabalık veya testi kebabı yiyebileceğiniz köy.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Yılanlı Kilise", desc: "Günahkarların yılanlar tarafından ısırılmasını betimleyen ilginç freskleriyle bilinen tarihi tapınak.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Selime Manastırı", desc: "Vadinin görkemli sonu: Kapadokya'nın en büyük dini yapısı olan ve Star Wars setini andıran devasa kaya manastır.", img: "/images/destinations/uchisar.jpg", link: "/destinations/selime" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Ihlara Vadisi Deneyimleri",
    todoCards: [
      { icon: "🟢", title: "Kapadokya Yeşil Tur (Green Tour)", price: 65, rating: "5.0", dur: "Tam Gün", link: "/tours/green-tour" },
      { icon: "🥾", title: "Uzun Ihlara Yürüyüşü (14km)", price: 50, rating: "4.9", dur: "6 Saat", link: "/tours/hiking" },
      { icon: "👑", title: "VIP Özel Yeşil Tur", price: 150, rating: "5.0", dur: "Tam Gün", link: "/tours/private-tours" },
      { icon: "📸", title: "Kanyon Doğa Çekimi", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🍽️", title: "Nehir Üstü Yemek", price: 25, rating: "4.8", dur: "1.5 Saat", link: "/book" },
      { icon: "🚙", title: "Selime Jeep Transferi", price: 40, rating: "4.7", dur: "1 Saat", link: "/tours/jeep-safari" },
      { icon: "⛪", title: "Kaya Kiliseleri Turu", price: 30, rating: "4.9", dur: "2 Saat", link: "/book" },
      { icon: "🔴", title: "Kırmızı Tur Ekle", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Ihlara Deneyim Rehberi",
    expList: [
      { num: "01", title: "Meşhur Merdivenlerden İnin", desc: "Ihlara ana girişinden başlayın. Kanyona inen o 397 basamağı saymak Kapadokya gezilerinin değişmez bir ritüelidir." },
      { num: "02", title: "Ağaçaltı Kilisesi'ne Uğrayın", desc: "Merdivenler biter bitmez sağa dönün; vadideki en canlı renklere ve eşsiz mimariye sahip bu kiliseyi mutlaka görün." },
      { num: "03", title: "Belisırma'ya Kadar Yürüyün (4km)", desc: "En popüler rota, ana girişten başlayıp Melendiz Çayı'nı takip ederek Belisırma köyüne uzanan 4 kilometrelik düz yürüyüştür." },
      { num: "04", title: "Suyun Üzerinde Yemek Yiyin", desc: "Belisırma'da ayakkabılarınızı çıkarıp Melendiz Çayı'nın sularının hemen üzerine kurulmuş sedirli ahşap localara kurularak yemeğinizi yiyin." },
      { num: "05", title: "Selime Manastırı'nda Final Yapın", desc: "Vadinin bitiş noktası olan Selime Manastırı'na gidin; dağın içine devasa sütunlarla oyulmuş bu katedrali keşfedin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Tam Gün (Yeşil Tur ile)", desc: "En mantıklı ve kolay yoldur. Ulaşım, 4km yürüyüş, nehir üstü öğle yemeği ve Selime Manastırı dahildir." },
      { day: "Yarım Gün (Kendi Aracınızla)", desc: "Ihlara'ya gidin, 4km yürüyüp Belisırma'ya varın. Oradan taksiyle aracınıza dönüp ardından Selime'ye sürün." },
      { day: "Tam 14km Trekking", desc: "Sıkı yürüyüşçüler için: Ihlara kasabasından başlayıp vadinin tamamını (14km) yürüyerek Selime'ye kadar gitmek." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "397 Basamağın Tepesi", time: "Sabah", for: "Kanyon Derinliği Panoraması", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Su Üstü Localara", time: "Öğle", for: "Otantik Yemek Ambiyansı", diff: "Kolay", img: "/images/destinations/avanos.jpg" },
      { name: "Nehir Üstü Tahta Köprüler", time: "Gündüz", for: "Yeşil Doğa ve Su", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Selime Manastırı Sütunları", time: "Akşamüstü", for: "Star Wars Hissi", diff: "Orta", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["🍽️ Belisırma Su Üstü Restoranları (Alabalık, Kiremitte Köfte, Çömlek)", "☕ Nehir Kenarı Küçük Çay Bahçeleri", "🥤 Girişte Taze Nar Suyu Stantları", "🥜 Aksaray Fıstığı ve Kuruyemişçiler"],
    stayList: ["📍 (Kanyon İçinde Otel Yoktur)", "🏡 Ihlara Kasabasındaki Aile Pansiyonları", "💎 Göreme Mağara Otelleri (1 Saat uzaklıkta)", "🏰 Güzelyurt Tarihi Butik Otelleri (Yakında)"],

    // 10. TRANSPORT
    transTitle: "Ihlara Vadisi'ne Nasıl Gidilir?",
    transList: ["🟢 Yeşil Tur (Green Tour) ile: Şiddetle tavsiye edilir. Göreme'ye 1 saat uzaklıkta olduğu ve yürüyüş lineer (A'dan B'ye) olduğu için turların lojistiği her şeyi çözer.", "🚗 Özel Araçla: Ana Ihlara girişine sürün. Belisırma'ya (4km) yürürseniz, girişteki aracınıza dönmek için Belisırma'dan yerel bir taksi tutmanız gerekir.", "🚌 Toplu Taşıma ile: Göreme'den çok zordur. Önce Nevşehir'e, oradan Aksaray'a, oradan da Ihlara otobüslerine aktarma yapmanız gerekir."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Nehir gürül gürül akar, kanyon yemyeşildir ve yürüyüş havası mükemmeldir." },
      { name: "☀️ Yaz", desc: "Vadi tabanı Göreme'ye göre çok daha serindir; yaz sıcağından kaçmak için harika bir sığınaktır." },
      { name: "🍂 Sonbahar", desc: "Sararan yaprakların suyun üzerindeki yansımaları muazzam bir doğa manzarası sunar." },
      { name: "❄️ Kış", desc: "397 basamak buzlu ve tehlikeli olabilir. Belisırma'daki restoranların bir kısmı kışın kapalıdır." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Ihlara Vadisi, Kültür Bakanlığı'na bağlı resmi bir ören yeridir. Girişteki gişelerde Müzekart geçerlidir.",
      "Rahat bir spor ayakkabı şarttır. Yol genelde düzdür ancak toprak ve taşlıktır, nehir kenarında yer yer çamur olabilir.",
      "Kendi aracınızla gidiyorsanız, aracı Ihlara girişinde bırakın, Belisırma'ya kadar 4 km yürüyün. Belisırma'dan bekleyen taksilerle 10 dakikada (karayolundan) aracınızın yanına geri dönün.",
      "Vadinin bitişindeki Selime Manastırı'nı asla es geçmeyin. Aldığınız Ihlara Vadisi bileti genellikle Selime Manastırı girişini de kapsar.",
      "Belisırma'daki 'su üstü' masalar yazın çok kalabalıktır. Eğer bir tura dahil değilseniz, en iyi yeri kapmak için öğlen 12:30'dan önce oraya varmaya çalışın."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Selime Manastırı", time: "Vadinin Bitişi", link: "/destinations/selime" },
      { name: "Derinkuyu Yeraltı Şehri", time: "45 dk araçla", link: "/museums/derinkuyu" },
      { name: "Güzelyurt Yeraltı Şehri", time: "15 dk araçla", link: "/museums/guzelyurt" },
      { name: "Göreme Merkez", time: "60 dk araçla", link: "/destinations/goreme" },
      { name: "Uçhisar Kalesi", time: "60 dk araçla", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Ihlara Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Kanyona inen 397 basamak zorluyor mu?", a: "Aşağı inmek çok kolaydır ancak dizleri yorabilir. Eğer standart Belisırma rotasını (4km) yürürseniz, bu merdivenleri tekrar yukarı tırmanmanıza gerek kalmaz; vadiden doğrudan Belisırma köyüne çıkarsınız." },
      { q: "Yeşil Tur'a katılmadan Ihlara'yı gezebilir miyim?", a: "Evet, araç kiralayarak gidebilirsiniz. Ancak vadi lineer (çizgisel) bir rota olduğu için, yürüyüşün sonunda (Belisırma'da) aracınıza dönmek için taksiye para ödemeniz gerekir. Yeşil Tur hem maliyet hem de lojistik açıdan çok daha pratiktir." },
      { q: "Melendiz Çayı'nda yüzülür mü?", a: "Hayır, çay genel olarak sığdır, taşlıktır ve yüzmek tehlikelidir/yasaktır. Ancak Belisırma'daki localarda otururken ayaklarınızı suya sokmak serinlemek için harika bir yoldur." }
    ],

    // 17. CTA
    ctaTitle: "Yeşil Tur'a Hazır Mısın?",
    ctaDesc: "Ulaşım, öğle yemeği ve biletlerin dahil olduğu Yeşil Tur'u rezerve et; Ihlara, Derinkuyu ve Selime'yi kolayca keşfet.",
    btnPlan: "YEŞİL TUR'U İNCELE"
  },
  es: {
    heroSub: "El Gran Cañón de Capadocia",
    heroDesc: "Desciende 397 escalones hacia un cañón exuberante de 14 km lleno de iglesias rupestres, árboles frondosos y restaurantes sobre el agua.",
    btnExplore: "EXPLORAR EL CAÑÓN",
    btnBookHero: "RESERVAR EL TOUR VERDE",
    statLoc: "Provincia de Aksaray",
    statTime: "Mejor Época: Mañana",
    statStay: "Tiempo Rec: 3–4 Horas",

    aboutTitle: "Sobre el Valle de Ihlara",
    aboutTags: ["📍 A 1 Hora de Göreme", "🌊 Río Melendiz", "🥾 Trekking de 14km", "⛪ Iglesia Ağaçaltı", "🍽️ Cafés en el Río (Belisırma)", "🏰 Monasterio de Selime", "🟢 Principal del Tour Verde"],
    aboutText1: "El Valle de Ihlara es un inmenso desfiladero de 14 km tallado por el río Melendiz a través de la roca volcánica. Ubicado en la provincia de Aksaray (a una hora de Göreme), es la joya del famoso 'Tour Verde'. El cañón tiene hasta 100 metros de profundidad, creando un microclima donde abunda la vegetación verde junto a escarpados acantilados.",
    aboutText2: "Gracias a su naturaleza oculta, Ihlara se convirtió en un gran refugio para los primeros cristianos. Tallaron más de 100 iglesias y viviendas en las paredes. Hoy, caminar junto al río, explorar los frescos y almorzar en cabañas construidas directamente sobre el agua en el pueblo de Belisırma, es uno de los días más inolvidables en Turquía.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Los 397 Escalones", desc: "La dramática entrada principal al valle, descendiendo hacia el exuberante fondo del cañón.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Iglesia Ağaçaltı", desc: "La 'Iglesia Bajo el Árbol' en la base de las escaleras, famosa por sus vivos frescos.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Paseo del Río Melendiz", desc: "Un sendero llano y sombreado que sigue las refrescantes aguas del río por el desfiladero.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Restaurantes de Belisırma", desc: "Punto intermedio donde puedes comer trucha en cabañas de madera sobre el río.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Iglesia Yılanlı", desc: "Fascinante iglesia rupestre con frescos que muestran a pecadores mordidos por serpientes.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Monasterio de Selime", desc: "La épica conclusión del valle: una estructura masiva excavada en la roca que parece de Star Wars.", img: "/images/destinations/uchisar.jpg", link: "/destinations/selime" }
    ],

    todoTitle: "Experiencias en Ihlara",
    todoCards: [
      { icon: "🟢", title: "Tour Verde de Capadocia", price: 65, rating: "5.0", dur: "Día Completo", link: "/tours/green-tour" },
      { icon: "🥾", title: "Trekking Ihlara (14km)", price: 50, rating: "4.9", dur: "6 Horas", link: "/tours/hiking" },
      { icon: "👑", title: "Tour Verde VIP Privado", price: 150, rating: "5.0", dur: "Día Completo", link: "/tours/private-tours" },
      { icon: "📸", title: "Sesión de Fotos en Cañón", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🍽️", title: "Almuerzo en el Río", price: 25, rating: "4.8", dur: "1.5 Horas", link: "/book" },
      { icon: "🚙", title: "Transfer en Jeep a Selime", price: 40, rating: "4.7", dur: "1 Hora", link: "/tours/jeep-safari" },
      { icon: "⛪", title: "Guía de Iglesias Cueva", price: 30, rating: "4.9", dur: "2 Horas", link: "/book" },
      { icon: "🔴", title: "Añadir Tour Rojo", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Baja las Famosas Escaleras", desc: "Contar los casi 400 escalones hacia el cañón es una tradición en Capadocia." },
      { num: "02", title: "Visita la Iglesia Ağaçaltı", desc: "Al final de las escaleras, gira a la derecha para ver una iglesia vibrante y única." },
      { num: "03", title: "Camina a Belisırma (4km)", desc: "La sección más popular: un paseo llano de 4km junto al río hasta el pueblo de Belisırma." },
      { num: "04", title: "Come sobre el Agua", desc: "Quítate los zapatos y siéntate en una cabaña de madera construida directamente sobre el río Melendiz." },
      { num: "05", title: "Termina en Selime", desc: "Conduce o camina hasta el final del valle para explorar el enorme Monasterio de Selime." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "Día Completo (Tour Verde)", desc: "La forma más cómoda. Incluye transporte, caminata de 4km, almuerzo en el río y Selime." },
      { day: "Medio Día (Independiente)", desc: "Conduce a Ihlara, camina 4km a Belisırma, toma un taxi de vuelta a tu coche, y ve a Selime." },
      { day: "Trekking de 14km", desc: "Para excursionistas: Inicia en el pueblo de Ihlara y camina todo el cañón hasta Selime." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Cima de los 397 Escalones", time: "Mañana", for: "Vista de la Profundidad", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Cabañas sobre el Agua", time: "Mediodía", for: "Almuerzo Típico", diff: "Fácil", img: "/images/destinations/avanos.jpg" },
      { name: "Puentes de Madera", time: "Día", for: "Río y Jungla", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Columnas de Selime", time: "Tarde", for: "Paisaje Star Wars", diff: "Medio", img: "/images/destinations/uchisar.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["🍽️ Restaurantes de Belisırma (Trucha, Kebab, Meze)", "☕ Pequeños Cafés junto al Río", "🥤 Zumo de Granada en la Entrada", "🥜 Vendedores Locales de Pistachos"],
    stayList: ["📍 (Sin Hoteles en el Cañón)", "🏡 Pensiones en el Pueblo de Ihlara", "💎 Hoteles Cueva en Göreme (A 1 hora)", "🏰 Hoteles Boutique en Güzelyurt (Cerca)"],

    transTitle: "¿Cómo Acceder a Ihlara?",
    transList: ["🟢 Únete al Tour Verde: Muy recomendado. Como la ruta es lineal y está a 1 hora, el tour resuelve toda la logística.", "🚗 En Coche: Conduce a la entrada. Si caminas 4km hasta Belisırma, necesitarás tomar un taxi local de vuelta a tu coche.", "🚌 Transporte Público: No es práctico desde Göreme. Requiere múltiples transbordos de autobús."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Primavera", desc: "El río lleva agua, el cañón está muy verde y la temperatura es ideal." },
      { name: "☀️ Verano", desc: "El fondo del valle es más fresco que Göreme; un gran escape del calor." },
      { name: "🍂 Otoño", desc: "Los árboles amarillos junto al río crean reflejos impresionantes." },
      { name: "❄️ Invierno", desc: "Las escaleras pueden tener hielo. Algunos restaurantes cierran en invierno." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "El Valle de Ihlara requiere billete de entrada o el Museum Pass Turkey.",
      "Usa calzado cómodo. El camino es llano pero es de tierra, rocas y a veces barro.",
      "Si vas en coche, aparca en la entrada de Ihlara, camina a Belisırma y toma un taxi de vuelta (10 min por carretera).",
      "No te pierdas el Monasterio de Selime al final. La entrada de Ihlara suele incluirlo.",
      "Las mesas 'sobre el agua' en Belisırma son muy populares. Llega antes de las 12:30 para asegurar sitio."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Monasterio de Selime", time: "Final del Valle", link: "/destinations/selime" },
      { name: "Ciudad Subterránea Derinkuyu", time: "45 min en coche", link: "/museums/derinkuyu" },
      { name: "Ciudad Subterránea Güzelyurt", time: "15 min en coche", link: "/museums/guzelyurt" },
      { name: "Göreme", time: "60 min en coche", link: "/destinations/goreme" },
      { name: "Castillo de Uchisar", time: "60 min en coche", link: "/destinations/uchisar" }
    ],

    popToursTitle: "Tours que Visitan Ihlara",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es difícil bajar los 397 escalones?", a: "Bajar es fácil. Si haces la ruta típica hasta Belisırma, no tienes que volver a subirlos; sales del valle por el pueblo de Belisırma." },
      { q: "¿Puedo visitar Ihlara sin el Tour Verde?", a: "Sí, si alquilas un coche. Sin embargo, al ser una ruta lineal, tendrás que pagar un taxi para volver a tu coche. El Tour Verde es más barato y fácil." },
      { q: "¿Se puede nadar en el Río Melendiz?", a: "No, es poco profundo y rocoso. Sin embargo, meter los pies en el agua mientras comes en las cabañas es muy popular." }
    ],

    ctaTitle: "¿Listo para el Tour Verde?",
    ctaDesc: "Reserva tu Tour Verde todo incluido para explorar fácilmente Ihlara, Derinkuyu y el Monasterio de Selime.",
    btnPlan: "RESERVAR EL TOUR VERDE"
  }
};

export default function IhlaraValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = IHLARA_DICT[aktifDil] || IHLARA_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-green-600 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Ihlara Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-green-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            IHLARA
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-green-500 hover:scale-105 transition-all shadow-xl shadow-green-600/30">
              {t.btnExplore}
            </a>
            <Link href="/tours/green-tour" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
          <div className="w-16 h-1.5 bg-green-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-green-500 pl-4">
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
            <div className="w-16 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-green-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-green-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-green-600 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-green-50/50 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-green-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-green-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-green-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-green-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-green-100 hover:bg-green-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-green-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-green-400">Where to Stay?</h3>
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
      <section className="py-24 bg-green-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/green-tour" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-green-600 transition-all">
              Book The Green Tour &rarr;
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
                  <span className="text-green-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-green-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-green-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[4]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(22,163,74,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-green-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Ihlara) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Ihlara Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12646.611681283627!2d34.3013!3d38.2424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d59bdca70a92cd%3A0xe5f9b456ed3a4fb!2sIhlara%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-green-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/green-tour" className="bg-green-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-green-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}