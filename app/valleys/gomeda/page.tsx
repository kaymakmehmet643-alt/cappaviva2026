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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - GOMEDA VALLEY
// =======================================================
const GOMEDA_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Mystical Gorge of Cappadocia",
    heroDesc: "A mysterious, uncrowded canyon filled with dark caves, hidden churches, a flowing stream, and ancient Greek history.",
    btnExplore: "EXPLORE THE GORGE",
    btnBookHero: "BOOK JEEP SAFARI",
    statLoc: "Mustafapasa (Sinasos)",
    statTime: "Best Time: Morning",
    statStay: "Rec. Time: 3–4 Hours",

    // 2. ABOUT
    aboutTitle: "About Gomeda Valley",
    aboutTags: ["📍 Near Mustafapasa", "🦇 Dark Cave Tunnels", "⛪ Alakara Church", "💧 Mineral Water Spring", "🥾 6km Trekking Route", "🤫 Totally Off-Grid", "👻 Mystical Atmosphere"],
    aboutText1: "Gomeda Valley is often described as the most mystical and mysterious canyon in Cappadocia. Located near the historic Greek village of Mustafapasa (formerly Sinasos), it offers a wildly different experience from the bright, open landscapes of Goreme. Here, the valley walls are darker, the vegetation is dense, and the atmosphere feels ancient and secretive.",
    aboutText2: "The valley connects seamlessly with Uzengi Valley, creating a continuous 6-kilometer trekking route. Along the way, you will walk alongside a shallow river, explore multi-level pigeon lofts carved into towering cliffs, and discover ancient rock-cut sanctuaries like the Alakara Church. Because it is completely off the standard tourist radar, hiking Gomeda feels like a true Indiana Jones adventure.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Alakara Church", desc: "An ancient cave church built by the Greek orthodox community featuring faded but beautiful frescoes.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Multi-Level Dovecotes", desc: "Massive cliff faces carved with hundreds of pigeon houses, painted to attract the birds.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "The Dark Caves", desc: "Unmapped, deep cave systems that you can explore with a flashlight. Watch out for harmless bats!", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Uzengi Mineral Spring", desc: "A naturally carbonated mineral water spring emerging directly from the rocks in the valley floor.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "St. Basilios Church", desc: "A lesser-known Byzantine church hidden among the dense flora near the valley entrance.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Mustafapasa Village", desc: "The charming, historic town where the valley begins, famous for its grand Greek stone mansions.", img: "/images/destinations/uchisar.jpg", link: "/destinations/mustafapasa" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Gomeda",
    todoCards: [
      { icon: "🚙", title: "Off-Road Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Gomeda Guided Trek", price: 40, rating: "5.0", dur: "4 Hours", link: "/tours/hiking" },
      { icon: "👑", title: "Private VIP Exploration", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🚵‍♂️", title: "Mountain Bike Trail", price: 50, rating: "4.7", dur: "3 Hours", link: "/tours/biking" },
      { icon: "📸", title: "Mystical Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Horseback Adventure", price: 45, rating: "4.8", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🔵", title: "Cappadocia Blue Tour", price: 65, rating: "4.8", dur: "Full Day", link: "/book" },
      { icon: "🚘", title: "Classic Car at Village", price: 80, rating: "4.8", dur: "2 Hours", link: "/tours/classic-car" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Gomeda Experience Guide",
    expList: [
      { num: "01", title: "Bring a Flashlight", desc: "You will encounter pitch-black caves and underground passageways. A phone flashlight works, but a headlamp is better." },
      { num: "02", title: "Walk Through the Stream", desc: "The trail crosses the Gomeda stream multiple times. Wear waterproof hiking boots or shoes you don't mind getting muddy." },
      { num: "03", title: "Taste the Mineral Water", desc: "Find the natural spring in Uzengi Valley. The locals swear by this naturally sparkling, iron-rich water." },
      { num: "04", title: "Explore Mustafapasa First", desc: "Before entering the wild valley, spend an hour admiring the beautiful stone carvings of the old Greek houses in Sinasos." },
      { num: "05", title: "Embrace the Solitude", desc: "You might hike for hours without seeing another human. Enjoy the eerie, completely isolated nature of the canyon." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "3-4 Hours (Full Hike)", desc: "The time required to hike from Mustafapasa through Gomeda and out via Uzengi Valley." },
      { day: "Jeep Safari (2 Hours)", desc: "The most popular way to see the valley without getting your feet wet. Off-road vehicles can navigate the stream." },
      { day: "Half Day (With Town)", desc: "Combine your valley trek with a cultural tour of the historic Mustafapasa (Sinasos) village." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Cliff Dovecotes", time: "Morning", for: "Architectural Scale", diff: "Medium", img: "/images/valleys/rose-valley.jpg" },
      { name: "Dark Cave Entrances", time: "Daytime", for: "Mystical Silhouettes", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "River Crossings", time: "Midday", for: "Jungle/Adventure Vibes", diff: "Medium", img: "/images/valleys/love-valley.jpg" },
      { name: "Mustafapasa Architecture", time: "Anytime", for: "Historic Stone Facades", diff: "Easy", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["💧 Bring Your Own Water (No facilities inside)", "🍽️ Old Greek Mansions turned Restaurants (Mustafapasa)", "☕ Historic Village Square Cafes (Mustafapasa)", "🥤 Uzengi Mineral Spring (Natural source)"],
    stayList: ["📍 (No Hotels Inside the Valley)", "🏛️ Restored Greek Mansion Hotels in Mustafapasa", "💎 Cave Hotels in Ortahisar (10 mins away)", "⛺ Wild Camping (For experienced campers)"],

    // 10. TRANSPORT
    transTitle: "How to Access Gomeda?",
    transList: ["🚙 Jeep Safari: The most practical way to explore the valley's muddy and wet terrain.", "🥾 By Foot: The trailhead starts just outside the town of Mustafapasa (Sinasos).", "🚕 Taxi: Take a 15-minute taxi ride from Urgup to the Mustafapasa entrance.", "🚌 Public Bus: Local buses run regularly between Urgup and Mustafapasa town square."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Late Spring", desc: "The stream is full, the flora is vibrant, and the temperature is perfect." },
      { name: "☀️ Summer", desc: "Cool and shaded deep inside the caves, making it a great midday escape." },
      { name: "🍂 Autumn", desc: "The valley fills with mystical mist and beautiful falling leaves." },
      { name: "❄️ Winter", desc: "Not recommended. The stream freezes and the dark caves become too cold." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Prepare to get your feet wet. The path frequently crisscrosses the river, and during spring, the water level rises.",
      "Bring a flashlight! The caves here are deep, dark, and mostly unlit. Exploring them is safe but requires light.",
      "There is no mobile phone signal deep inside the canyon. Download offline maps (like Maps.me) before you enter.",
      "You might encounter small, harmless fruit bats inside the deeper caves. Do not disturb them.",
      "Gomeda seamlessly turns into Uzengi Valley. The entire route is about 6km, ending near the town of Ortahisar or Urgup."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Mustafapasa (Sinasos)", time: "Trailhead", link: "/destinations/mustafapasa" },
      { name: "Pancarlik Valley", time: "10 min drive", link: "/valleys/pancarlik" },
      { name: "Ortahisar Castle", time: "15 min drive", link: "/destinations/ortahisar" },
      { name: "Urgup Town", time: "15 min drive", link: "/destinations/urgup" },
      { name: "Zemi Valley", time: "20 min drive", link: "/valleys/zemi" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Gomeda",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Gomeda Valley safe?", a: "Yes, it is physically safe, but it has a very isolated and slightly spooky atmosphere due to the dark caves and lack of crowds. It is highly recommended to hike with a partner or a guide." },
      { q: "Do I need to pay an entrance fee?", a: "No, Gomeda Valley is completely free and open to the public. However, reaching the starting point usually requires a taxi or a rental car." },
      { q: "Are the bats dangerous?", a: "Not at all. The caves host small colonies of bats. If you shine a light on them, they might fly around, but they are completely harmless to humans." }
    ],

    // 17. CTA
    ctaTitle: "Ready for an Off-Grid Adventure?",
    ctaDesc: "Book an off-road Jeep Safari or guided trekking tour to uncover the mysteries of Gomeda.",
    btnPlan: "BOOK YOUR ADVENTURE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Gizemli Kanyonu",
    heroDesc: "Karanlık mağaraları, dereleri, devasa güvercinlikleri ve efsanelere konu olmuş mistik atmosferiyle kalabalıktan tamamen izole bir macera.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "JEEP SAFARİ REZERVE ET",
    statLoc: "Mustafapaşa (Sinasos)",
    statTime: "En İyi Zaman: Sabah",
    statStay: "Önerilen Süre: 3–4 Saat",

    // 2. ABOUT
    aboutTitle: "Gomeda Vadisi Hakkında",
    aboutTags: ["📍 Mustafapaşa Yakınlarında", "🦇 Karanlık Mağaralar", "⛪ Alakara Kilisesi", "💧 Doğal Maden Suyu", "🥾 6 km Trekking Rotası", "🤫 Tamamen Issız", "👻 Mistik Atmosfer"],
    aboutText1: "Gomeda Vadisi, Kapadokya'nın en mistik, gizemli ve hatta biraz ürkütücü kanyonu olarak bilinir. Tarihi bir Rum kasabası olan Mustafapaşa'nın (Sinasos) hemen çıkışında yer alan bu vadi, Göreme'nin aydınlık ve açık manzaralarından çok farklı bir deneyim sunar. Burada vadi duvarları daha karanlık, bitki örtüsü vahşi ve atmosfer antik sırlar saklıyormuş gibi hissettirir.",
    aboutText2: "Vadi, doğal olarak Üzengi Vadisi ile birleşerek yaklaşık 6 kilometrelik kesintisiz bir yürüyüş parkuru oluşturur. Yürüyüşünüz boyunca sığ bir derenin yanından ve bazen içinden geçecek, uçurumlara oyulmuş çok katlı devasa güvercinlikleri inceleyecek ve Alakara Kilisesi gibi gizli kalmış tarihi yapıları keşfedeceksiniz. Klasik turist rotalarının tamamen dışında olduğu için, Gomeda'da yürümek gerçek bir kaşif macerasıdır.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Alakara Kilisesi", desc: "Bölgedeki Rum Ortodoks topluluğu tarafından kayalara oyulmuş, freskleri solmuş olsa da mimarisiyle etkileyen tarihi kilise.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Çok Katlı Güvercinlikler", desc: "Kanyon duvarlarına bir apartman gibi kat kat oyulmuş ve kuşları çekmek için boyanmış devasa güvercinlikler.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Karanlık Mağaralar", desc: "Sadece el feneriyle girilebilen, haritalanmamış derin mağara sistemleri. Zararsız yarasalara dikkat edin!", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Üzengi Doğal Maden Suyu", desc: "Vadi tabanında kayaların arasından fokurdayarak çıkan, demir açısından çok zengin doğal maden suyu kaynağı.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Aziz Basilios Kilisesi", desc: "Vadi girişine yakın, bitki örtüsünün arasına saklanmış daha az bilinen bir Bizans kaya kilisesi.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Mustafapaşa (Sinasos)", desc: "Vadinin başladığı, muazzam taş işçiliğine sahip eski Rum konaklarıyla meşhur tarihi kasaba.", img: "/images/destinations/uchisar.jpg", link: "/destinations/mustafapasa" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Gomeda Vadisi Deneyimleri",
    todoCards: [
      { icon: "🚙", title: "Off-Road Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Rehberli Gomeda Trekking", price: 40, rating: "5.0", dur: "4 Saat", link: "/tours/hiking" },
      { icon: "👑", title: "VIP Özel Kanyon Turu", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "🚵‍♂️", title: "Dağ Bisikleti Turu", price: 50, rating: "4.7", dur: "3 Saat", link: "/tours/biking" },
      { icon: "📸", title: "Mistik Dış Çekim", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Atlı Kanyon Macerası", price: 45, rating: "4.8", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🔵", title: "Kapadokya Mavi Tur", price: 65, rating: "4.8", dur: "Tam Gün", link: "/book" },
      { icon: "🚘", title: "Mustafapaşa Klasik Araç", price: 80, rating: "4.8", dur: "2 Saat", link: "/tours/classic-car" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Gomeda Deneyim Rehberi",
    expList: [
      { num: "01", title: "Yanınızda El Feneri Bulundurun", desc: "Zifiri karanlık mağara ve yeraltı geçitleriyle karşılaşacaksınız. Telefon ışığı işe yarar ama kafa lambası çok daha iyidir." },
      { num: "02", title: "Derenin İçinden Yürüyün", desc: "Patika sık sık derenin içinden geçer. Çamurlanmasını umursamayacağınız su geçirmez bir yürüyüş ayakkabısı giyin." },
      { num: "03", title: "Doğal Maden Suyunu Tadın", desc: "Üzengi Vadisi kesişimindeki kaynağı bulun. Yerel halk bu demir kokulu, doğal karbonatlı suyun şifalı olduğuna inanır." },
      { num: "04", title: "Önce Mustafapaşa'yı Gezin", desc: "Vahşi vadiye girmeden önce, eski adıyla Sinasos olan Mustafapaşa'nın taş konaklarını ve sokaklarını mutlaka gezin." },
      { num: "05", title: "Issızlığın Keyfini Çıkarın", desc: "Saatlerce başka bir insan görmeden yürüyebilirsiniz. Kanyonun bu ürkütücü ama bir o kadar da huzurlu doğasını hissedin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "3-4 Saat (Tam Yürüyüş)", desc: "Mustafapaşa'dan başlayıp Gomeda ve Üzengi Vadisi'ni baştan sona yürüyerek geçmek için gereken süre." },
      { day: "2 Saat (Jeep Safari)", desc: "Ayaklarınızı ıslatmadan vadiyi gezmenin en popüler yolu. Off-road araçları dere yatağından rahatça geçer." },
      { day: "Yarım Gün (Kombine Tur)", desc: "Tarihi Mustafapaşa (Sinasos) gezisi ile uzun bir vadi yürüyüşünü birleştirmek için idealdir." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Dev Güvercinlik Uçurumları", time: "Sabah", for: "Mimari ve Büyüklük", diff: "Orta", img: "/images/valleys/rose-valley.jpg" },
      { name: "Karanlık Mağara Girişleri", time: "Gündüz", for: "Mistik Silüetler", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Dere Geçişleri", time: "Öğle", for: "Macera ve Orman Hissi", diff: "Orta", img: "/images/valleys/love-valley.jpg" },
      { name: "Mustafapaşa Mimaris", time: "Her Zaman", for: "Tarihi Taş Konaklar", diff: "Kolay", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["💧 Suyunuzu Kendiniz Getirin (İçeride tesis yoktur)", "🍽️ Eski Rum Konaklarından Çevirme Restoranlar (Mustafapaşa)", "☕ Tarihi Köy Meydanı Kahvehaneleri (Mustafapaşa)", "🥤 Üzengi Doğal Maden Suyu Kaynağı"],
    stayList: ["📍 (Vadi içinde otel bulunmaz)", "🏛️ Restore Edilmiş Tarihi Konak Otelleri (Mustafapaşa)", "💎 Ortahisar Mağara Otelleri (10 dk araçla)", "⛺ Vahşi Kamp (Sadece tecrübeli kampçılar için)"],

    // 10. TRANSPORT
    transTitle: "Gomeda Vadisi'ne Nasıl Gidilir?",
    transList: ["🚙 Jeep Safari İle: Vadinin çamurlu ve sulu parkurunu zorlanmadan gezmenin en pratik ve eğlenceli yoludur.", "🥾 Yürüyerek (Başlangıç): Yürüyüş parkuru Mustafapaşa (Sinasos) kasabasının hemen dışından, Cumhuriyet Meydanı'nın biraz ilerisinden başlar.", "🚕 Taksi İle: Ürgüp merkezden Mustafapaşa girişine taksiyle sadece 15 dakikada ulaşabilirsiniz.", "🚌 Minibüs İle: Ürgüp ile Mustafapaşa arasında gün boyunca düzenli sefer yapan ilçe minibüsleri vardır."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar Sonu", desc: "Derenin suyu gürdür, flora canlanmıştır ve hava sıcaklığı yürüyüş için idealdir." },
      { name: "☀️ Yaz", desc: "Gölgelik ağaçlar ve mağaraların içi yazın öğle sıcağından kaçmak için harikadır." },
      { name: "🍂 Sonbahar", desc: "Vadi mistik bir sise bürünür ve dökülen sarı yapraklar manzarayı güzelleştirir." },
      { name: "❄️ Kış", desc: "Tavsiye edilmez. Dere donabilir, zemin çok kayganlaşır ve karanlık mağaralar dondurucu olur." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Ayaklarınızın ıslanmasına hazırlıklı olun. Patika sık sık dereden karşıya geçer, özellikle bahar aylarında su seviyesi yükselebilir.",
      "El feneri şart! Buradaki mağaralar çok derin, karanlık ve ışıksızdır. Keşfetmek çok güvenli ve eğlencelidir ama ışık gerekir.",
      "Kanyonun derinliklerinde telefon çekmez. Vadiye girmeden önce mutlaka Maps.me gibi çevrimdışı bir harita indirin.",
      "Derin mağaralarda zararsız küçük meyve yarasaları ile karşılaşabilirsiniz. Işık tuttuğunuzda uçuşabilirler, onlara zarar vermeyin.",
      "Gomeda, kesintisiz bir şekilde Üzengi Vadisi'ne bağlanır. Toplam rota 6 km civarıdır ve Ürgüp/Ortahisar yakınlarında biter."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Mustafapaşa (Sinasos)", time: "Başlangıç Noktası", link: "/destinations/mustafapasa" },
      { name: "Pancarlık Vadisi", time: "10 dk araçla", link: "/valleys/pancarlik" },
      { name: "Ortahisar Kalesi", time: "15 dk araçla", link: "/destinations/ortahisar" },
      { name: "Ürgüp Merkez", time: "15 dk araçla", link: "/destinations/urgup" },
      { name: "Zemi Vadisi", time: "20 dk araçla", link: "/valleys/zemi" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Gomeda Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Gomeda Vadisi yürüyüş için güvenli mi?", a: "Fiziksel olarak oldukça güvenlidir ancak tamamen ıssız olması, karanlık mağaraları ve yoğun ağaçlık dokusu nedeniyle ürkütücü (spooky) bir atmosfere sahiptir. Tek başınıza değil, bir partnerle veya rehberle yürümeniz tavsiye edilir." },
      { q: "Vadiye giriş ücretli mi?", a: "Hayır, Gomeda Vadisi tamamen ücretsizdir ve halka açıktır. Herhangi bir gişe veya turnike yoktur." },
      { q: "Mağaralardaki yarasalar tehlikeli mi?", a: "Kesinlikle hayır. Bu mağaralar küçük yarasalara ev sahipliği yapar. Fener tuttuğunuzda rahatsız olup uçuşabilirler ancak insanlara hiçbir zararları yoktur." }
    ],

    // 17. CTA
    ctaTitle: "Mistik Bir Maceraya Hazır Mısın?",
    ctaDesc: "Gomeda'nın gizemlerini çözmek için Jeep Safari veya rehberli trekking turunuzu hemen ayırtın.",
    btnPlan: "MACERANI REZERVE ET"
  },
  es: {
    heroSub: "El Cañón Místico de Capadocia",
    heroDesc: "Un cañón misterioso y solitario lleno de cuevas oscuras, iglesias ocultas, un arroyo y antigua historia griega.",
    btnExplore: "EXPLORAR EL CAÑÓN",
    btnBookHero: "RESERVAR SAFARI EN JEEP",
    statLoc: "Mustafapaşa (Sinasos)",
    statTime: "Mejor Época: Mañana",
    statStay: "Tiempo Rec: 3–4 Horas",

    aboutTitle: "Sobre el Valle de Gomeda",
    aboutTags: ["📍 Cerca de Mustafapaşa", "🦇 Túneles de Cuevas Oscuras", "⛪ Iglesia de Alakara", "💧 Manantial de Agua Mineral", "🥾 Ruta de Trekking de 6km", "🤫 Totalmente Aislado", "👻 Atmósfera Mística"],
    aboutText1: "El Valle de Gomeda se describe a menudo como el cañón más místico y misterioso de Capadocia. Situado cerca del histórico pueblo griego de Mustafapaşa (antiguamente Sinasos), ofrece una experiencia radicalmente diferente a los paisajes luminosos de Göreme. Aquí, las paredes son más oscuras y la atmósfera se siente antigua y secreta.",
    aboutText2: "El valle se conecta directamente con el Valle de Uzengi, creando una ruta continua de 6 kilómetros. En el camino, caminarás junto a un río poco profundo, explorarás palomares multinivel excavados en altos acantilados y descubrirás antiguos santuarios como la Iglesia de Alakara. Al estar fuera del radar turístico habitual, caminar por Gomeda parece una verdadera aventura de Indiana Jones.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Iglesia de Alakara", desc: "Una antigua iglesia cueva construida por la comunidad ortodoxa griega con frescos descoloridos pero hermosos.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Palomares de Varios Niveles", desc: "Enormes acantilados tallados con cientos de casas de palomas, pintadas para atraer a las aves.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Las Cuevas Oscuras", desc: "Sistemas de cuevas profundas no cartografiadas que puedes explorar con linterna. ¡Cuidado con los murciélagos!", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Manantial Mineral de Uzengi", desc: "Una fuente de agua mineral naturalmente carbonatada que emerge directamente de las rocas en el valle.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Iglesia de San Basilio", desc: "Una iglesia bizantina menos conocida oculta entre la densa flora cerca de la entrada del valle.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Pueblo de Mustafapaşa", desc: "El encantador e histórico pueblo donde comienza el valle, famoso por sus grandes mansiones de piedra griegas.", img: "/images/destinations/uchisar.jpg", link: "/destinations/mustafapasa" }
    ],

    todoTitle: "Experiencias en Gomeda",
    todoCards: [
      { icon: "🚙", title: "Safari en Jeep 4x4", price: 45, rating: "4.9", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Trekking Guiado Gomeda", price: 40, rating: "5.0", dur: "4 Horas", link: "/tours/hiking" },
      { icon: "👑", title: "Exploración VIP Privada", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🚵‍♂️", title: "Ruta en Bicicleta", price: 50, rating: "4.7", dur: "3 Horas", link: "/tours/biking" },
      { icon: "📸", title: "Sesión de Fotos Mística", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Aventura a Caballo", price: 45, rating: "4.8", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🔵", title: "Tour Azul de Capadocia", price: 65, rating: "4.8", dur: "Día Completo", link: "/book" },
      { icon: "🚘", title: "Coche Clásico en Sinasos", price: 80, rating: "4.8", dur: "2 Horas", link: "/tours/classic-car" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Lleva una Linterna", desc: "Encontrarás cuevas totalmente oscuras y pasadizos subterráneos. La luz del móvil sirve, pero un frontal es mejor." },
      { num: "02", title: "Camina por el Arroyo", desc: "El sendero cruza el arroyo Gomeda varias veces. Lleva calzado impermeable o que no te importe manchar de barro." },
      { num: "03", title: "Prueba el Agua Mineral", desc: "Encuentra el manantial natural en el Valle de Uzengi. Los lugareños aprecian mucho esta agua carbonatada rica en hierro." },
      { num: "04", title: "Explora Mustafapaşa Primero", desc: "Antes de entrar al valle salvaje, admira las hermosas tallas en piedra de las antiguas casas griegas en Sinasos." },
      { num: "05", title: "Abraza la Soledad", desc: "Puedes caminar horas sin ver a nadie. Disfruta de la naturaleza misteriosa y completamente aislada del cañón." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "3-4 Horas (Ruta Completa)", desc: "El tiempo necesario para caminar desde Mustafapaşa a través de Gomeda y salir por Uzengi." },
      { day: "Safari en Jeep (2 Horas)", desc: "La forma más popular de ver el valle sin mojarte los pies. Los 4x4 pueden navegar por el arroyo." },
      { day: "Medio Día (Con el Pueblo)", desc: "Combina tu caminata por el valle con un recorrido cultural por el histórico pueblo de Mustafapaşa." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Palomares en el Acantilado", time: "Mañana", for: "Escala Arquitectónica", diff: "Medio", img: "/images/valleys/rose-valley.jpg" },
      { name: "Entradas de Cuevas Oscuras", time: "Día", for: "Siluetas Místicas", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Cruces de Río", time: "Mediodía", for: "Vibras de Jungla/Aventura", diff: "Medio", img: "/images/valleys/love-valley.jpg" },
      { name: "Arquitectura de Mustafapaşa", time: "Cualquier momento", for: "Fachadas Históricas", diff: "Fácil", img: "/images/destinations/uchisar.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["💧 Trae tu propia agua (Sin instalaciones dentro)", "🍽️ Antiguas Mansiones Griegas hechas Restaurantes (Mustafapaşa)", "☕ Cafés Históricos en la Plaza (Mustafapaşa)", "🥤 Manantial Mineral de Uzengi (Fuente natural)"],
    stayList: ["📍 (Sin Hoteles Dentro del Valle)", "🏛️ Hoteles en Mansiones Griegas Restauradas (Mustafapaşa)", "💎 Hoteles Cueva en Ortahisar (10 mins)", "⛺ Acampada Libre (Para campistas experimentados)"],

    transTitle: "¿Cómo Acceder a Gomeda?",
    transList: ["🚙 Safari en Jeep: La forma más práctica de explorar el terreno húmedo y fangoso del valle.", "🥾 A Pie: El inicio del sendero comienza a las afueras del pueblo de Mustafapaşa (Sinasos).", "🚕 Taxi: Un viaje de 15 minutos en taxi desde Ürgüp hasta la entrada de Mustafapaşa.", "🚌 Autobús Público: Los autobuses locales funcionan regularmente entre Ürgüp y la plaza de Mustafapaşa."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Finales de Primavera", desc: "El arroyo está lleno, la flora es vibrante y la temperatura es perfecta." },
      { name: "☀️ Verano", desc: "Fresco y sombreado en lo profundo de las cuevas, un gran escape del mediodía." },
      { name: "🍂 Otoño", desc: "El valle se llena de niebla mística y hermosas hojas cayendo." },
      { name: "❄️ Invierno", desc: "No recomendado. El arroyo se congela y las cuevas oscuras son demasiado frías." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Prepárate para mojarte los pies. El camino cruza frecuentemente el río, y durante la primavera el agua sube.",
      "¡Lleva linterna! Las cuevas son profundas, oscuras y sin iluminación. Explorarlas es seguro pero requiere luz.",
      "No hay señal de móvil en lo profundo del cañón. Descarga mapas sin conexión (como Maps.me) antes de entrar.",
      "Puedes encontrar pequeños murciélagos frugívoros inofensivos. No los molestes.",
      "Gomeda se convierte sin interrupción en el Valle de Uzengi. Toda la ruta es de unos 6km, terminando cerca de Ortahisar."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Mustafapaşa (Sinasos)", time: "Inicio de Ruta", link: "/destinations/mustafapasa" },
      { name: "Valle de Pancarlık", time: "10 min en coche", link: "/valleys/pancarlik" },
      { name: "Castillo de Ortahisar", time: "15 min en coche", link: "/destinations/ortahisar" },
      { name: "Centro de Ürgüp", time: "15 min en coche", link: "/destinations/urgup" },
      { name: "Valle de Zemi", time: "20 min en coche", link: "/valleys/zemi" }
    ],

    popToursTitle: "Tours que Visitan Gomeda",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es seguro el Valle de Gomeda?", a: "Sí, físicamente es seguro, pero tiene una atmósfera aislada y ligeramente espeluznante debido a las cuevas oscuras. Se recomienda caminar acompañado o con guía." },
      { q: "¿Tengo que pagar entrada?", a: "No, el Valle de Gomeda es completamente gratuito y abierto al público. Sin embargo, llegar al inicio suele requerir taxi o coche." },
      { q: "¿Son peligrosos los murciélagos?", a: "En absoluto. Las cuevas albergan pequeñas colonias. Si les enfocas con luz pueden revolotear, pero son completamente inofensivos para los humanos." }
    ],

    ctaTitle: "¿Listo para una Aventura Fuera de Ruta?",
    ctaDesc: "Reserva un Safari en Jeep 4x4 o un trekking guiado para descubrir los misterios de Gomeda.",
    btnPlan: "RESERVAR TU AVENTURA"
  }
};

export default function GomedaValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = GOMEDA_DICT[aktifDil] || GOMEDA_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-indigo-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Gomeda Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-indigo-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            GOMEDA
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-indigo-500 hover:scale-105 transition-all shadow-xl shadow-indigo-600/30">
              {t.btnExplore}
            </a>
            <Link href="/tours/jeep-safari" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
          <div className="w-16 h-1.5 bg-indigo-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-indigo-500 pl-4">
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
            <div className="w-16 h-1.5 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-indigo-600 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-indigo-50/50 border-y border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-indigo-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-indigo-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-indigo-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-indigo-100 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-indigo-400">Where to Stay?</h3>
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
      <section className="py-24 bg-indigo-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/jeep-safari" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-indigo-600 transition-all">
              Book Jeep Safari &rarr;
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
                  <span className="text-indigo-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-indigo-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[4]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(79,70,229,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-indigo-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Gomeda) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Gomeda Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12583.567085387498!2d34.8812!3d38.583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a65d506d1a1b1%3A0xc0c8d10edc911b34!2sGomeda%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-indigo-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-indigo-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/jeep-safari" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}