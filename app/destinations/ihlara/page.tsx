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
// 📚 17 BÖLÜMLÜK DEV REHBER SÖZLÜĞÜ - IHLARA
// =======================================================
const IHLARA_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Grand Canyon of Cappadocia",
    heroDesc: "A lush, 14-kilometer gorge carved by the Melendiz River, filled with hidden rock-cut churches, nature trails, and riverside dining.",
    btnExplore: "EXPLORE IHLARA",
    btnBookHero: "BOOK GREEN TOUR",
    statLoc: "Aksaray/Cappadocia, Türkiye",
    statTime: "Best Time: Apr – Oct",
    statStay: "Rec. Stay: 1 Day Trip",

    // 2. ABOUT
    aboutTitle: "About Ihlara Valley",
    aboutTags: ["📍 14km Long Canyon", "🌊 Melendiz River", "🥾 Trekking Paradise", "⛪ 100+ Cave Churches", "🍽️ Belisirma Riverside Food", "🏰 Selime Monastery", "🌿 Lush Green Oasis"],
    aboutText1: "Ihlara Valley is a massive gorge created by the cracking and collapsing of the earth's crust as the Melendiz River eroded the volcanic rock over millions of years. The result is a stunning 14-kilometer canyon with walls up to 150 meters high.",
    aboutText2: "Unlike the rest of Cappadocia's dry, lunar landscape, the bottom of Ihlara Valley is a lush, green oasis. Due to its hidden nature and water supply, it became the perfect sanctuary for early Christians who carved over 100 churches into the canyon walls. Today, it is the absolute best trekking route in the region and the centerpiece of the famous 'Cappadocia Green Tour'.",

    // 3. MUST SEE
    mustSeeTitle: "Discover Ihlara",
    mustSeeCards: [
      { name: "The 397 Steps", desc: "The iconic main entrance to the valley, offering breathtaking panoramic views as you descend into the gorge.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Agacalti Church", desc: "The most famous church at the valley entrance, featuring incredibly vivid frescoes depicting Daniel in the Lion's Den.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Belisirma Village", desc: "Located in the middle of the valley. Stop here to eat lunch at restaurants built directly over the rushing river.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Selime Monastery", desc: "Located at the end of the valley, this is the largest rock-cut monastery in Cappadocia, resembling a Star Wars set.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Yilanli Church (Snake Church)", desc: "Known for its unique frescoes depicting sinners being bitten by snakes in the afterlife.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Melendiz River", desc: "The lifeblood of the valley. You will walk alongside its soothing sounds throughout your entire hike.", img: "/images/destinations/ortahisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Things To Do",
    todoCards: [
      { icon: "🟢", title: "Cappadocia Green Tour", price: 65, rating: "4.9", dur: "Full Day", link: "/tours/green-tour" },
      { icon: "🥾", title: "Ihlara Trekking (7km)", price: 40, rating: "4.8", dur: "Half Day", link: "/tours/hiking" },
      { icon: "🍽️", title: "Riverside Lunch Trip", price: 30, rating: "4.7", dur: "3 Hours", link: "#" },
      { icon: "🏰", title: "Selime & Derinkuyu", price: 55, rating: "4.8", dur: "Full Day", link: "#" },
      { icon: "👑", title: "Private Ihlara VIP", price: 120, rating: "5.0", dur: "Full Day", link: "/tours/private" },
      { icon: "📸", title: "Canyon Photo Safari", price: 45, rating: "4.7", dur: "2 Hours", link: "#" },
      { icon: "⛺", title: "Valley Camping Guide", price: 20, rating: "4.6", dur: "Custom", link: "#" },
      { icon: "🚙", title: "Ihlara Jeep Transfer", price: 50, rating: "4.8", dur: "2 Hours", link: "/tours/jeep-safari" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Ihlara Experience Guide",
    expList: [
      { num: "01", title: "Descend the 397 Steps", desc: "Start from the main gate and take in the sheer scale of the canyon as you walk down the famous wooden stairs." },
      { num: "02", title: "Hike the 4km Route", desc: "Walk the most popular trail from the main entrance to Belisirma Village alongside the rushing river." },
      { num: "03", title: "Dine on the Water", desc: "Sit cross-legged in a wooden cabana built directly over the Melendiz River in Belisirma." },
      { num: "04", title: "Climb Selime Monastery", desc: "Explore the massive tunnels, kitchens, and cathedrals of this epic rock fortress at the valley's exit." },
      { num: "05", title: "Find the Hidden Frescoes", desc: "Step off the main path and explore the dark, ancient cave churches carved high into the canyon walls." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "How Many Days Do You Need?",
    daysList: [
      { day: "Half Day", desc: "Perfect for the standard 4km walk from the entrance to Belisirma and having lunch." },
      { day: "1 Day (Green Tour)", desc: "The best way! Combines Derinkuyu Underground City, Ihlara Valley, and Selime." },
      { day: "Stay Base", desc: "Most tourists do not stay here. It's best visited as a day trip from Goreme or Guzelyurt." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Top of the 397 Steps", time: "Morning", for: "Gorge Panorama", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "Riverside Cabanas", time: "Lunchtime", for: "Dining on Water", diff: "Easy", img: "/images/destinations/avanos.jpg" },
      { name: "Selime Monastery", time: "Afternoon", for: "Epic Rock Fortress", diff: "Medium", img: "/images/destinations/uchisar.jpg" },
      { name: "Agacalti Church", time: "Daytime", for: "Ancient Frescoes", diff: "Easy", img: "/images/churches/tokali.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Local Picks: Eat & Stay",
    eatList: ["🌊 Belisirma Water Cabanas", "🐟 Fresh River Trout", "🥩 Pottery Kebab at the Canyon", "☕ Village Tea Houses"],
    stayList: ["📍 (Day Trip is Recommended)", "🏡 Guzelyurt Mansions (15 mins away)", "🏕️ Ihlara Village Pensions", "💎 Goreme Hotels (1h 15m away)"],

    // 10. TRANSPORT
    transTitle: "How to Get to Ihlara?",
    transList: ["🟢 Join the 'Green Tour' - The easiest and cheapest way, includes guide, transport, lunch, and tickets.", "🚗 Drive from Goreme - 1 hour and 15 minutes by rental car.", "🚕 Private Taxi / VIP Minivan - Can be arranged from any hotel.", "🚌 Public Transport - Difficult. Requires taking a bus to Aksaray, then a minibus to Ihlara."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Mar-May: Rushing river, blooming flowers." },
      { name: "☀️ Summer", desc: "Jun-Aug: The canyon is shaded and much cooler than the rest of Cappadocia." },
      { name: "🍂 Autumn", desc: "Sep-Nov: Stunning yellow and red leaves." },
      { name: "❄️ Winter", desc: "Dec-Feb: Extremely quiet, sometimes snowy." }
    ],

    // 12. TIPS
    tipsTitle: "Local Tips",
    tipsList: [
      "The Turkish Museum Pass is valid for the Ihlara Valley entrance and Selime Monastery.",
      "Wear very comfortable trekking shoes. The path is flat but rocky, and the stairs are steep.",
      "Bring mosquito repellent in the summer due to the river.",
      "If you drive your own car, park at the main entrance. You can hike to Belisirma, have lunch, and take a taxi back to your car.",
      "There are no hot air balloons flying over Ihlara Valley."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby",
    nearbyList: [
      { name: "Selime", time: "Valley Exit", link: "#" },
      { name: "Guzelyurt", time: "15 min", link: "/destinations/guzelyurt" },
      { name: "Derinkuyu", time: "45 min", link: "#" },
      { name: "Goreme", time: "1h 15m", link: "/destinations/goreme" },
      { name: "Uchisar", time: "1h 10m", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Including Ihlara",

    // 16. FAQ
    faqTitle: "Ihlara Frequently Asked Questions",
    faqs: [
      { q: "How long is the Ihlara Valley walk?", a: "The entire valley is 14km. However, most tourists walk the 4km section from the main entrance (397 steps) to Belisirma Village, which takes about 1.5 hours." },
      { q: "Is the Green Tour worth it?", a: "Yes, 100%. Ihlara Valley and Derinkuyu are far from the main towns (over an hour drive). The Green Tour makes logistics, tickets, and lunch incredibly easy." },
      { q: "Can I bring a stroller or wheelchair?", a: "No. The main entrance has 397 steep stairs, and the canyon floor is a natural dirt and rock path, making it inaccessible for wheels." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Ihlara?",
    ctaDesc: "Discover the green oasis and ancient canyon of Cappadocia.",
    btnPlan: "BOOK THE GREEN TOUR"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Vahası ve Kanyonu",
    heroDesc: "Melendiz Çayı'nın milyonlarca yılda oyduğu, içine gizlenmiş kiliseleri, yemyeşil doğası ve su üstü restoranlarıyla Ihlara Vadisi eşsiz bir doğa harikasıdır.",
    btnExplore: "IHLARA'YI KEŞFET",
    btnBookHero: "YEŞİL TUR REZERVASYONU",
    statLoc: "Aksaray/Kapadokya, Türkiye",
    statTime: "En İyi Zaman: Nisan – Ekim",
    statStay: "Önerilen Süre: Günübirlik",

    // 2. ABOUT
    aboutTitle: "Ihlara Vadisi Hakkında",
    aboutTags: ["📍 14 km Uzunluğunda Kanyon", "🌊 Melendiz Çayı", "🥾 Trekking Cenneti", "⛪ 100'den Fazla Kaya Kilisesi", "🍽️ Belisırma Su Üstü Restoranları", "🏰 Selime Manastırı", "🌿 Yemyeşil Vaha"],
    aboutText1: "Ihlara Vadisi, volkanik patlamalar sonucu oluşan tüf tabakasının tektonik hareketlerle çatlaması ve Melendiz Çayı'nın bu çatlağı milyonlarca yıl boyunca aşındırmasıyla oluşmuştur. Duvar yüksekliği yer yer 150 metreyi bulan 14 kilometrelik devasa bir kanyondur.",
    aboutText2: "Kapadokya'nın geri kalanındaki kurak manzaraların aksine, vadinin tabanı Melendiz Çayı sayesinde adeta gizli bir vahadır. Suyun ve saklanma kolaylığının verdiği avantajla, ilk Hristiyanlar kanyon duvarlarına 100'den fazla kilise oymuştur. Bugün burası Kapadokya'nın en iyi yürüyüş rotası ve dünyaca ünlü 'Kapadokya Yeşil Turu'nun (Green Tour) ana merkezidir.",

    // 3. MUST SEE
    mustSeeTitle: "Ihlara'da Keşfedin",
    mustSeeCards: [
      { name: "397 Basamak", desc: "Vadiye inen ana giriş kapısı. Aşağı inerken tüm kanyonun nefes kesici manzarasını izlersiniz.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Ağaçaltı Kilisesi", desc: "Vadi girişindeki en ünlü kilise. Aslanlar çukurundaki Daniel'i tasvir eden canlı fresklere sahiptir.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Belisırma Köyü", desc: "Vadinin tam ortasındaki köy. Yürüyüş sonrası Melendiz çayı üzerine kurulan çardaklarda yemek yiyebilirsiniz.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Selime Manastırı", desc: "Vadinin çıkışında yer alan, Star Wars setini andıran Kapadokya'nın en büyük kaya oyma manastırıdır.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Yılanlı Kilise", desc: "Öteki dünyada yılanlar tarafından ısırılan günahkarları tasvir eden ilginç freskleriyle ünlüdür.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Melendiz Çayı", desc: "Vadinin can damarı. Tüm yürüyüşünüz boyunca suyun o huzur verici sesi size eşlik eder.", img: "/images/destinations/ortahisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Ihlara'da Yapılabilecekler",
    todoCards: [
      { icon: "🟢", title: "Kapadokya Yeşil Tur", price: 65, rating: "4.9", dur: "Tam Gün", link: "/tours/green-tour" },
      { icon: "🥾", title: "Ihlara Doğa Yürüyüşü", price: 40, rating: "4.8", dur: "Yarım Gün", link: "/tours/hiking" },
      { icon: "🍽️", title: "Nehirde Öğle Yemeği", price: 30, rating: "4.7", dur: "3 Saat", link: "#" },
      { icon: "🏰", title: "Selime ve Derinkuyu Turu", price: 55, rating: "4.8", dur: "Tam Gün", link: "#" },
      { icon: "👑", title: "VIP Ihlara Turu", price: 120, rating: "5.0", dur: "Tam Gün", link: "/tours/private" },
      { icon: "📸", title: "Kanyon Fotoğraf Safarisi", price: 45, rating: "4.7", dur: "2 Saat", link: "#" },
      { icon: "⛺", title: "Vadide Kamp & Doğa", price: 20, rating: "4.6", dur: "Esnek", link: "#" },
      { icon: "🚙", title: "Ihlara Transferi (Araç)", price: 50, rating: "4.8", dur: "2 Saat", link: "/tours/jeep-safari" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Ihlara Deneyim Rehberi",
    expList: [
      { num: "01", title: "397 Basamaktan İnin", desc: "Ana gişeden girin ve ahşap merdivenlerden inerken devasa kanyonun ihtişamını hissedin." },
      { num: "02", title: "4 Kilometrelik Klasik Rotayı Yürüyün", desc: "Melendiz Çayı'nın şırıltısı eşliğinde, ana girişten Belisırma Köyü'ne kadar doğanın tadını çıkarın." },
      { num: "03", title: "Su Üstünde Yemek Yiyin", desc: "Belisırma'da akan nehrin tam üzerine kurulmuş ahşap çardaklarda bağdaş kurup kiremitte köfte yiyin." },
      { num: "04", title: "Selime Manastırı'na Tırmanın", desc: "Vadinin bitişindeki bu devasa kaya kalesinin tünellerini, kiliselerini ve yeraltı mutfaklarını keşfedin." },
      { num: "05", title: "Gizli Kiliseleri Keşfedin", desc: "Ana yoldan sapın ve kanyon duvarlarının yükseklerine oyulmuş, freskleri hala canlı olan antik mağara kiliselerine girin." }
    ],

    // 6. HOW MANY DAYS
    daysTitle: "Ihlara'ya Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün", desc: "Ana girişten Belisırma'ya kadar yürüyüp (4 km) öğle yemeği yemek için ideal." },
      { day: "1 Gün (Yeşil Tur)", desc: "En mantıklısı! Yeraltı şehri, Ihlara yürüyüşü ve Selime'yi tek günde halledersiniz." },
      { day: "Konaklama", desc: "Ihlara'da çok az otel vardır, turistler genelde Göreme veya Güzelyurt'ta kalıp buraya günübirlik gelir." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "397 Basamağın Zirvesi", time: "Sabah", for: "Kanyon Manzarası", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Belisırma Su Köşkleri", time: "Öğle", for: "Nehirde Yemek", diff: "Kolay", img: "/images/destinations/avanos.jpg" },
      { name: "Selime Manastırı", time: "Öğleden Sonra", for: "Devasa Kaya Kalesi", diff: "Orta", img: "/images/destinations/uchisar.jpg" },
      { name: "Ağaçaltı Kilisesi", time: "Her Zaman", for: "Antik Freskler", diff: "Kolay", img: "/images/churches/tokali.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Yerel Seçimlerimiz",
    eatList: ["🌊 Belisırma Su Üstü Çardakları", "🐟 Taze Nehir Alabalığı", "🥩 Kiremitte Köfte ve Testi Kebabı", "☕ Köy Çay Bahçeleri"],
    stayList: ["📍 (Günübirlik Seyahat Önerilir)", "🏡 Güzelyurt Konakları (15 dk uzaklıkta)", "🏕️ Ihlara Kasabası Pansiyonları", "💎 Göreme Otelleri (1s 15dk uzaklıkta)"],

    // 10. TRANSPORT
    transTitle: "Ihlara Vadisi'ne Nasıl Gidilir?",
    transList: ["🟢 'Yeşil Tur'a (Green Tour) Katılın - Ulaşım, biletler, rehber ve yemek dahil olduğu için en kolay ve ucuz yoldur.", "🚗 Araçla Göreme'den - Kiralık araçla yaklaşık 1 saat 15 dakika sürer.", "🚕 Özel Transfer / VIP Minivan - Otelinizden direkt ayarlanabilir.", "🚌 Toplu Taşıma - Oldukça zordur. Önce Aksaray merkeze gidip oradan Ihlara dolmuşuna binmeniz gerekir."],

    // 11. BEST TIME
    seasonTitle: "Ihlara'yı Ne Zaman Ziyaret Etmeli?",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Mart-Mayıs: Nehir gürül gürül akar, doğa uyanır." },
      { name: "☀️ Yaz", desc: "Haziran-Ağu: Vadi tabanı gölgeliktir, Kapadokya'nın en serin yeridir." },
      { name: "🍂 Sonbahar", desc: "Eylül-Kasım: Sararan yapraklarla muazzam manzaralar." },
      { name: "❄️ Kış", desc: "Ara-Şub: Son derece ıssızdır, bazen karla kaplanır." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Ihlara Vadisi girişinde ve Selime Manastırı'nda T.C. vatandaşları için Müzekart geçerlidir.",
      "Yürüyüş yolu düz ancak topraktır, mutlaka rahat bir spor ayakkabı giyin.",
      "Yaz aylarında nehirden dolayı sivrisinek olabilir, yanınızda koruyucu sprey bulundurun.",
      "Eğer kendi aracınızla geldiyseniz ve Ihlara girişinden Belisırma'ya kadar yürüdüyseniz, aracınızı almak için Belisırma'dan gişelere taksi ile dönebilirsiniz.",
      "Göreme'nin aksine Ihlara Vadisi'nde sıcak hava balonu uçuşu yapılmaz."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevreyi Keşfedin",
    nearbyList: [
      { name: "Selime", time: "Vadi Çıkışı", link: "#" },
      { name: "Güzelyurt", time: "15 dk", link: "/destinations/guzelyurt" },
      { name: "Derinkuyu Yeraltı", time: "45 dk", link: "#" },
      { name: "Nevşehir", time: "1 saat", link: "/destinations/nevsehir" },
      { name: "Göreme", time: "1s 15dk", link: "/destinations/goreme" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Ihlara'yı Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Ihlara Vadisi yürüyüşü ne kadar sürer?", a: "Vadinin tamamı 14 kilometredir. Ancak turistlerin %90'ı ana girişten (397 basamak) başlayıp restoranların olduğu Belisırma köyüne kadar olan 4 kilometrelik kısmı yürür. Bu da yaklaşık 1,5 saat sürer." },
      { q: "Yeşil Tur (Green Tour) satın almaya değer mi?", a: "Kesinlikle evet. Ihlara ve Derinkuyu Göreme'den çok uzaktır (yaklaşık 80 km). Yeşil tur size ulaşım, rehberlik, müze giriş biletleri ve Belisırma'da öğle yemeği sağladığı için hem çok pratik hem de daha ekonomiktir." },
      { q: "Bebek arabası veya tekerlekli sandalye ile inilebilir mi?", a: "Hayır. Vadiye inen ana giriş 397 dik basamaktan oluşur ve vadi tabanı doğal toprak/kayalık patikadır." }
    ],

    // 17. CTA
    ctaTitle: "Ihlara Vadisi'ni Keşfetmeye Hazır Mısın?",
    ctaDesc: "Kapadokya'nın yemyeşil kanyonunu ve sular altındaki kiliselerini keşfet.",
    btnPlan: "YEŞİL TUR'U İNCELE"
  },
  es: {
    heroSub: "El Gran Cañón de Capadocia",
    heroDesc: "Un desfiladero verde de 14 km tallado por el Río Melendiz, lleno de iglesias en cuevas, senderos y restaurantes sobre el agua.",
    btnExplore: "EXPLORAR IHLARA",
    btnBookHero: "RESERVAR TOUR VERDE",
    statLoc: "Aksaray/Capadocia, Turquía",
    statTime: "Mejor Época: Abr – Oct",
    statStay: "Estancia Rec: Excursión de 1 Día",
    aboutTitle: "Sobre el Valle de Ihlara",
    aboutTags: ["📍 Cañón de 14km", "🌊 Río Melendiz", "🥾 Paraíso del Trekking", "⛪ +100 Iglesias", "🍽️ Comida en Belisirma", "🏰 Monasterio Selime", "🌿 Oasis Verde"],
    aboutText1: "Ihlara es un cañón masivo creado por la erosión del río Melendiz sobre la roca volcánica durante millones de años, con paredes de hasta 150 metros.",
    aboutText2: "A diferencia del paisaje lunar del resto de Capadocia, Ihlara es un oasis exuberante. Fue un santuario para los primeros cristianos, quienes tallaron más de 100 iglesias. Hoy es el centro del famoso 'Tour Verde'.",
    mustSeeTitle: "Descubre Ihlara",
    mustSeeCards: [
      { name: "Los 397 Escalones", desc: "La entrada principal icónica con vistas impresionantes al descender.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Iglesia Agacalti", desc: "Famosa iglesia en la entrada con frescos muy vívidos.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Pueblo de Belisirma", desc: "Ubicado en el medio del valle. Come en cabañas sobre el río.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Monasterio de Selime", desc: "El monasterio más grande de Capadocia, parece un set de Star Wars.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Iglesia Yilanli (Serpiente)", desc: "Frescos únicos de pecadores mordidos por serpientes.", img: "/images/churches/yahya.jpg", link: "#" },
      { name: "Río Melendiz", desc: "Caminarás junto a sus sonidos relajantes durante toda la ruta.", img: "/images/destinations/ortahisar.jpg", link: "#" }
    ],
    todoTitle: "Mejores Actividades",
    todoCards: [
      { icon: "🟢", title: "Tour Verde Capadocia", price: 65, rating: "4.9", dur: "Día Completo", link: "/tours/green-tour" },
      { icon: "🥾", title: "Senderismo (7km)", price: 40, rating: "4.8", dur: "Medio Día", link: "/tours/hiking" },
      { icon: "🍽️", title: "Almuerzo en el Río", price: 30, rating: "4.7", dur: "3 Horas", link: "#" },
      { icon: "🏰", title: "Selime y Derinkuyu", price: 55, rating: "4.8", dur: "Día Completo", link: "#" },
      { icon: "👑", title: "Tour VIP Privado", price: 120, rating: "5.0", dur: "Día Completo", link: "/tours/private" },
      { icon: "📸", title: "Safari Fotográfico", price: 45, rating: "4.7", dur: "2 Horas", link: "#" },
      { icon: "⛺", title: "Acampar en el Valle", price: 20, rating: "4.6", dur: "Flexible", link: "#" },
      { icon: "🚙", title: "Traslado en Jeep", price: 50, rating: "4.8", dur: "2 Horas", link: "/tours/jeep-safari" }
    ],
    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Baja los 397 Escalones", desc: "Disfruta de la magnitud del cañón al descender." },
      { num: "02", title: "Camina la Ruta de 4km", desc: "El sendero más popular hasta Belisirma junto al río." },
      { num: "03", title: "Cena sobre el Agua", desc: "Come en cabañas de madera construidas directamente sobre el río." },
      { num: "04", title: "Explora Selime", desc: "Descubre túneles y catedrales de esta enorme fortaleza de roca." },
      { num: "05", title: "Busca los Frescos Ocultos", desc: "Entra a las antiguas iglesias oscuras talladas en las paredes." }
    ],
    daysTitle: "¿Cuántos Días Necesitas?",
    daysList: [
      { day: "Medio Día", desc: "Caminata estándar de 4km y almuerzo." },
      { day: "1 Día (Tour Verde)", desc: "¡La mejor opción! Combina Ihlara, Ciudad Subterránea y Selime." },
      { day: "Base de Estancia", desc: "Se visita mejor como excursión desde Göreme." }
    ],
    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Cima de las Escaleras", time: "Mañana", for: "Panorama", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Cabañas en el Río", time: "Almuerzo", for: "Comida en el Agua", diff: "Fácil", img: "/images/destinations/avanos.jpg" },
      { name: "Monasterio Selime", time: "Tarde", for: "Fortaleza", diff: "Medio", img: "/images/destinations/uchisar.jpg" },
      { name: "Iglesia Agacalti", time: "Día", for: "Frescos Antiguos", diff: "Fácil", img: "/images/churches/tokali.jpg" }
    ],
    eatStayTitle: "Nuestras Recomendaciones",
    eatList: ["🌊 Cabañas de Belisirma", "🐟 Trucha Fresca", "🥩 Kebab Cerca del Cañón", "☕ Casas de Té"],
    stayList: ["📍 (Recomendado Ir de Excursión)", "🏡 Mansiones Guzelyurt", "🏕️ Pensiones de Ihlara", "💎 Hoteles de Göreme (A 1h 15m)"],
    transTitle: "¿Cómo Llegar?",
    transList: ["🟢 Tour Verde - La forma más fácil y barata.", "🚗 En coche - 1h 15m desde Göreme.", "🚕 Taxi Privado - Desde cualquier hotel.", "🚌 Transporte Público - Difícil (requiere cambio en Aksaray)."],
    seasonTitle: "¿Cuándo Visitar?",
    seasons: [
      { name: "🌸 Primavera", desc: "Flores y río caudaloso." },
      { name: "☀️ Verano", desc: "Sombreado y mucho más fresco que Göreme." },
      { name: "🍂 Otoño", desc: "Hojas amarillas impresionantes." },
      { name: "❄️ Invierno", desc: "Muy tranquilo, a veces con nieve." }
    ],
    tipsTitle: "Consejos Locales",
    tipsList: [
      "El Museum Pass es válido aquí.",
      "Usa zapatos muy cómodos, el camino es de tierra.",
      "Lleva repelente de mosquitos en verano.",
      "Si vas en coche, camina a Belisirma y toma un taxi de vuelta al aparcamiento.",
      "No hay globos en el Valle de Ihlara."
    ],
    nearbyTitle: "Explora Cerca",
    nearbyList: [
      { name: "Selime", time: "Salida del Valle", link: "#" },
      { name: "Guzelyurt", time: "15 min", link: "/destinations/guzelyurt" },
      { name: "Derinkuyu", time: "45 min", link: "#" },
      { name: "Göreme", time: "1h 15m", link: "/destinations/goreme" },
      { name: "Uchisar", time: "1h 10m", link: "/destinations/uchisar" }
    ],
    popToursTitle: "Tours que incluyen Ihlara",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Cuánto dura la caminata?", a: "La mayoría camina los 4km desde la entrada principal hasta Belisirma, toma 1.5 horas." },
      { q: "¿Vale la pena el Tour Verde?", a: "Sí, 100%. Ihlara está muy lejos de Göreme, el tour hace que la logística y el almuerzo sean fáciles." },
      { q: "¿Puedo llevar cochecito de bebé?", a: "No, hay 397 escaleras y el camino es de tierra." }
    ],
    ctaTitle: "¿Listo para Explorar Ihlara?",
    ctaDesc: "Descubre el oasis verde de Capadocia.",
    btnPlan: "RESERVAR EL TOUR VERDE"
  }
};

export default function IhlaraPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = IHLARA_DICT[aktifDil] || IHLARA_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-green-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/love-panorama.jpg" alt="Ihlara Valley" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-green-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            IHLARA
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-green-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-green-400 hover:scale-105 transition-all shadow-xl shadow-green-500/20">
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
          <div className="w-16 h-1.5 bg-green-500 mt-6 rounded-full"></div>
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
          <div className="w-16 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-green-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-green-50 border-y border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-green-500 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-green-500 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
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
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-green-100 hover:bg-green-500 px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
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
      <section className="py-24 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/green-tour" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Book Green Tour &rarr;
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
          <div className="w-16 h-1.5 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[4]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(34,197,94,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
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

      {/* 15. GOOGLE MAP */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Ihlara Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12648.74950346387!2d34.29339235!3d38.24103195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d5ce9a8d542387%3A0xe104db801b7a69b7!2sIhlara%20Vadisi!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
            <Link href="/tours/green-tour" className="bg-green-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-green-400 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}