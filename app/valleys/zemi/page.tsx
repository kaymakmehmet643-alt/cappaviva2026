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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - ZEMI VALLEY
// =======================================================
const ZEMI_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Hidden Emerald Canyon",
    heroDesc: "Escape the crowds in Cappadocia's greenest valley, a 5.6 km sanctuary of lush orchards, singing birds, and hidden cave churches.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A GUIDED HIKE",
    statLoc: "Goreme, Türkiye",
    statTime: "Best Time: Early Morning",
    statStay: "Rec. Time: 3–4 Hours",

    // 2. ABOUT
    aboutTitle: "About Zemi Valley",
    aboutTags: ["📍 Starts near Babayan", "🌳 Lush Greenery", "⛪ El Nazar Church", "🥾 5.6km Trekking Route", "🤫 Off the Beaten Path", "💧 Water Streams", "🐦 Rich Birdlife"],
    aboutText1: "Zemi Valley is arguably the most adventurous, lush, and uncrowded hiking trail in central Cappadocia. Stretching approximately 5.6 kilometers from the Nevsehir-Urgup road down into Goreme, it offers a stark contrast to the arid landscapes of other valleys. Here, you'll walk through dense tunnels of poplar and fruit trees, guided by the sound of a small seasonal stream.",
    aboutText2: "Unlike Pigeon or Rose valleys, Zemi is largely inaccessible to ATVs or horses, making it a peaceful sanctuary for hikers. Hidden along its winding path are spectacular, lesser-known historical sites like El Nazar Church, Sarnic (Cistern) Church, and Sakli (Hidden) Church, carved into the imposing fairy chimneys that line the canyon walls.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "El Nazar Church", desc: "A remarkable 10th-century church carved into a free-standing fairy chimney with well-preserved frescoes.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Sarnıç (Cistern) Church", desc: "Originally used as a water cistern, this ancient rock-cut church sits quietly deep in the valley.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "The Green Tunnels", desc: "Walk through dense, jungle-like archways formed by mulberry, plum, and poplar trees.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Görkündere Ridge", desc: "A scenic section near the end of the valley featuring tall, distinct, phallic-shaped fairy chimneys.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Saklı (Hidden) Church", desc: "True to its name, this church is tucked away on a steep slope, rewarding those who seek it.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Babayan Trailhead", desc: "The quiet, elevated start of the valley offering sweeping views before plunging into the green canyon.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Zemi Valley",
    todoCards: [
      { icon: "🥾", title: "Zemi Guided Trekking", price: 40, rating: "5.0", dur: "4 Hours", link: "/tours/hiking" },
      { icon: "👑", title: "Private VIP Hike", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🐦", title: "Nature & Bird Watching", price: 50, rating: "4.8", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "⛪", title: "Hidden Churches Walk", price: 45, rating: "4.9", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "📸", title: "Nature Photoshoot", price: 100, rating: "4.7", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🟢", title: "Cappadocia Green Tour", price: 65, rating: "4.8", dur: "Full Day", link: "/tours/green-tour" },
      { icon: "🚘", title: "Classic Car (Valley Exit)", price: 80, rating: "4.9", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Zemi Experience Guide",
    expList: [
      { num: "01", title: "Hike Downhill from Babayan", desc: "Start at the Nevsehir-Urgup road viewpoint and hike downwards towards Goreme for an easier, scenic 3-hour trek." },
      { num: "02", title: "Discover El Nazar Church", desc: "Find this stunning 10th-century church carved into a cone-shaped rock near the Goreme exit of the valley." },
      { num: "03", title: "Navigate the Obstacles", desc: "Enjoy a bit of light adventure; the trail sometimes requires hopping over small streams or using ropes on slippery tuff slopes." },
      { num: "04", title: "Pick Fresh Fruit", desc: "Depending on the season, you can forage for wild plums, mulberries, and apples growing naturally along the trail." },
      { num: "05", title: "Escape the Crowds", desc: "Embrace the silence. Zemi is often bypassed by large tour groups, making it your own private Cappadocian paradise." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1 Hour (Short Walk)", desc: "Start from Goreme and only walk up to El Nazar and Sakli Church, then return." },
      { day: "3-4 Hours (Full Trek)", desc: "The recommended time to complete the entire 5.6km trail from top to bottom, including church visits." },
      { day: "Half Day (Exploration)", desc: "Combine the full Zemi hike with a visit to the nearby Goreme Open Air Museum." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Inside the Green Tunnel", time: "Midday", for: "Jungle Vibes", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "El Nazar Church Exterior", time: "Morning", for: "Historic Architecture", diff: "Easy", img: "/images/churches/tokali.jpg" },
      { name: "Görkündere Fairy Chimneys", time: "Afternoon", for: "Classic Rock Pillars", diff: "Medium", img: "/images/valleys/love-valley.jpg" },
      { name: "Valley Entrance View", time: "Early Morning", for: "Wide Landscapes", diff: "Easy", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["💧 Bring Your Own Water (Crucial)", "🍇 Wild Fruit Trees (Seasonal)", "☕ Small Tea Stand at El Nazar", "🍽️ Restaurants in Goreme Town (End of Trail)"],
    stayList: ["📍 (No Hotels Inside the Valley)", "🏕️ Wild Camping (Check local rules)", "💎 Boutique Cave Hotels in Goreme (10 mins)", "🏘️ Guesthouses in Uchisar (15 mins)"],

    // 10. TRANSPORT
    transTitle: "How to Access Zemi Valley?",
    transList: ["🥾 Upper Trailhead: Located on the Nevsehir-Urgup road, past the Uchisar junction. Best reached by taxi from Goreme.", "🥾 Lower Trailhead: Starts near the Tourist Hotel in Goreme, following the signs for El Nazar Church.", "🚕 Taxi: Take a taxi to the upper trailhead and walk down. It’s cheap, easy, and saves you from a steep uphill climb."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "The best time! The stream flows, birds sing, and fruit trees bloom." },
      { name: "🍂 Autumn", desc: "Beautiful yellow and golden leaves contrast with the white rocks." },
      { name: "☀️ Summer", desc: "Very shaded and cool inside the canyon, but start early to beat the heat." },
      { name: "❄️ Winter", desc: "Can be quite slippery and muddy; recommended only for experienced hikers." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Zemi is wilder than Pigeon or Rose Valley. Wear proper hiking boots as there are a few slippery descents and muddy spots.",
      "Unlike other valleys, there are almost no cafes or facilities inside Zemi. Bring at least 1.5 liters of water and snacks.",
      "Look out for yellow and red painted arrows on rocks to stay on the main trail, as some forks lead to dead ends.",
      "ATVs and horses rarely enter the deep parts of this valley, so you won't have to deal with dust clouds.",
      "El Nazar Church is technically managed by the museum authority and may require a small entrance fee or Museum Pass."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Goreme Open Air Museum", time: "10 min walk", link: "/museums/goreme" },
      { name: "Goreme Center", time: "15 min walk", link: "/destinations/goreme" },
      { name: "Pigeon Valley", time: "10 min drive", link: "/valleys/pigeon-valley" },
      { name: "Rose Valley", time: "10 min drive", link: "/valleys/rose-valley" },
      { name: "Uchisar Castle", time: "15 min drive", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Zemi Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Zemi Valley suitable for beginners?", a: "It requires a moderate level of fitness. While mostly flat, there are a couple of steep, slippery descents and sometimes you have to cross a small stream. It is more challenging than Pigeon Valley." },
      { q: "Can I ride an ATV or Horse here?", a: "Due to the narrow paths, dense trees, and steep drops, Zemi Valley is generally restricted to hikers. You won't find ATV tours deep in this canyon." },
      { q: "Where does the name Zemi come from?", a: "The valley is named after the Zemi stream (Zemi Deresi) that runs through its center, giving life to its lush vegetation." }
    ],

    // 17. CTA
    ctaTitle: "Ready for a True Nature Hike?",
    ctaDesc: "Book a guided trekking tour through Zemi Valley and escape into Cappadocia's greenest canyon.",
    btnPlan: "BOOK YOUR HIKE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Gizli Zümrüt Kanyonu",
    heroDesc: "Kalabalıktan uzaklaşın. Yemyeşil meyve ağaçları, kuş sesleri ve gizli kaya kiliseleriyle dolu 5.6 kilometrelik huzur rotası.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "YÜRÜYÜŞ TURU REZERVE ET",
    statLoc: "Göreme, Türkiye",
    statTime: "En İyi Zaman: Sabah Erken",
    statStay: "Önerilen Süre: 3–4 Saat",

    // 2. ABOUT
    aboutTitle: "Zemi Vadisi Hakkında",
    aboutTags: ["📍 Başlangıç Babayan Yolu", "🌳 Yemyeşil Orman Dokusu", "⛪ El Nazar Kilisesi", "🥾 5.6 km Trekking Rotası", "🤫 Sessiz ve Sakin", "💧 Su Kaynakları", "🐦 Zengin Kuş Türleri"],
    aboutText1: "Zemi Vadisi, Kapadokya'nın en maceracı, en yeşil ve en az kalabalık yürüyüş rotalarından biridir. Nevşehir-Ürgüp yolu üzerindeki tepe noktasından başlayıp Göreme'ye kadar inen yaklaşık 5.6 kilometrelik bu kanyon, diğer vadilerin kurak manzarasına kıyasla adeta bir ormanı andırır. Erik ve kavak ağaçlarının oluşturduğu yeşil tünellerden geçerken size küçük bir dere eşlik eder.",
    aboutText2: "Güvercinlik veya Gül vadilerinin aksine, Zemi Vadisi'nin derinliklerine ATV veya at turları pek giremez. Bu da burayı sadece doğa yürüyüşçüleri (hiker) için ayrılmış sessiz bir sığınağa dönüştürür. Kanyon duvarlarına oyulmuş El Nazar, Sarnıç ve Saklı Kilise gibi muhteşem tarihi yapılar, vadinin kıvrımlı yollarında keşfedilmeyi bekler.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "El Nazar Kilisesi", desc: "Vadinin Göreme çıkışına yakın, çadır formundaki dev bir peribacasına oyulmuş 10. yüzyıl freskli kilise.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Sarnıç Kilisesi", desc: "Geçmişte su sarnıcı olarak kullanılmış, vadinin derinliklerinde sessizce oturan antik kaya kilisesi.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Yeşil Ağaç Tünelleri", desc: "Kavak, dut ve erik ağaçlarının dallarıyla oluşturduğu orman benzeri doğal yürüyüş tünelleri.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Görkündere Sırtı", desc: "Vadinin sonuna doğru, uzun ve çok belirgin şekilli peribacalarının bulunduğu etkileyici bölge.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Saklı Kilise", desc: "Adı gibi dik bir yamaca gizlenmiş, sadece onu arayan dikkatli yürüyüşçülerin bulabildiği gizemli şapel.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Babayan Yolu Girişi", desc: "Vadinin en üst noktası; yeşil kanyona dalmadan önce Kapadokya'yı yüksekten izleyebileceğiniz tepe.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Zemi Vadisi Deneyimleri",
    todoCards: [
      { icon: "🥾", title: "Zemi Rehberli Yürüyüş", price: 40, rating: "5.0", dur: "4 Saat", link: "/tours/hiking" },
      { icon: "👑", title: "VIP Özel Kanyon Turu", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "🐦", title: "Doğa ve Kuş Gözlem", price: 50, rating: "4.8", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "⛪", title: "Gizli Kiliseler Rotası", price: 45, rating: "4.9", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "📸", title: "Doğal Konsept Dış Çekim", price: 100, rating: "4.7", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🟢", title: "Kapadokya Yeşil Tur", price: 65, rating: "4.8", dur: "Tam Gün", link: "/tours/green-tour" },
      { icon: "🚘", title: "Vadi Çıkışı Klasik Araç", price: 80, rating: "4.9", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🔴", title: "Kapadokya Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Zemi Deneyim Rehberi",
    expList: [
      { num: "01", title: "Tepeden Aşağıya Yürüyün", desc: "Yürüyüşe Nevşehir-Ürgüp yolu üzerindeki başlangıç noktasından başlayarak Göreme'ye doğru inin; çok daha az yorulursunuz." },
      { num: "02", title: "El Nazar Kilisesi'ni Bulun", desc: "Vadinin sonuna doğru devasa konik bir kayaya oyulmuş 10. yüzyıl harikası El Nazar Kilisesi'ni mutlaka inceleyin." },
      { num: "03", title: "Hafif Maceraya Atılın", desc: "Zemi sıradan bir yürüyüş yolu değildir; bazen küçük su birikintilerinden atlamanız veya kaygan tüf zeminlerden destekle inmeniz gerekebilir." },
      { num: "04", title: "Dalından Meyve Toplayın", desc: "Mevsimine göre patika boyunca tamamen doğal yetişen erik, elma ve dut ağaçlarından meyve koparıp yiyebilirsiniz." },
      { num: "05", title: "Sessizliği Dinleyin", desc: "Zemi, tur otobüslerinin gürültüsünden ve ATV tozundan tamamen uzaktır. Durun ve sadece rüzgar ile kuş seslerini dinleyin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1 Saat (Kısa Yürüyüş)", desc: "Sadece Göreme'den girip El Nazar ve Saklı Kilise'yi görüp geri dönmek isteyenler için." },
      { day: "3-4 Saat (Tam Trekking)", desc: "Zemi'nin hakkını vermek ve 5.6 km'lik tüm kanyonu yukarıdan aşağıya yürümek için gereken süre." },
      { day: "Yarım Gün (Kombine)", desc: "Zemi Vadisi yürüyüşünün ardından rotayı komşu Göreme Açık Hava Müzesi'ne bağlayın." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Yeşil Tünellerin İçi", time: "Öğle", for: "Orman ve Doğa Hissi", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "El Nazar Dış Cephesi", time: "Sabah", for: "Tarihi ve Mimari Açı", diff: "Kolay", img: "/images/churches/tokali.jpg" },
      { name: "Görkündere Peribacaları", time: "Akşamüstü", for: "Klasik Kapadokya", diff: "Orta", img: "/images/valleys/love-valley.jpg" },
      { name: "Üst Vadi Giriş Manzarası", time: "Sabah Erken", for: "Geniş Kanyon Açısı", diff: "Kolay", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["💧 Suyunuzu Yanınızda Getirin (Önemli)", "🍇 Doğal Yabani Meyve Ağaçları", "☕ El Nazar Yanında Küçük Çay Ocağı", "🍽️ Göreme Merkez Restoranları (Yol Bitişi)"],
    stayList: ["📍 (Vadi içinde tesis veya otel yoktur)", "🏕️ Doğal Kamp İmkanı (Yerel kuralları kontrol edin)", "💎 Göreme Mağara Otelleri (10 dk)", "🏘️ Uçhisar Konakları (15 dk)"],

    // 10. TRANSPORT
    transTitle: "Zemi Vadisi'ne Nasıl Gidilir?",
    transList: ["🥾 Üst Giriş (Babayan Yolu): Nevşehir-Ürgüp yolu üzerinde, Uçhisar kavşağını geçtikten sonradır. Göreme'den taksiyle buraya çıkıp aşağı yürümek en mantıklısıdır.", "🥾 Alt Giriş (Göreme): Göreme Turist Hotel civarından başlar, El Nazar Kilisesi tabelalarını takip ederek vadiye aşağıdan girebilirsiniz.", "🚕 Taksi ile: Başlangıç noktasına taksi ile gitmek çok ucuzdur ve sizi dik bir yokuşu tırmanmaktan kurtarır."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Açık ara en iyi mevsim! Dere akar, kuşlar öter ve meyve ağaçları çiçek açar." },
      { name: "🍂 Sonbahar", desc: "Sapsarı yapraklar ile beyaz peribacalarının harika renk kontrastı." },
      { name: "☀️ Yaz", desc: "Kanyonun içi ağaçlık ve gölgedir, ancak sıcaktan kaçmak için sabah erken başlanmalı." },
      { name: "❄️ Kış", desc: "Oldukça kaygan ve çamurlu olabilir; sadece tecrübeli yürüyüşçülere önerilir." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Zemi, Güvercinlik veya Gül vadisinden daha 'vahşi' bir yapıdadır. Mutlaka iyi tutunan bir trekking ayakkabısı giyin.",
      "Vadi içinde mola verebileceğiniz veya su alabileceğiniz bir tesis yoktur. Yanınıza mutlaka en az 1.5 litre su ve atıştırmalık alın.",
      "Kayalardaki kırmızı ve sarı boyalı ok işaretlerini takip edin; bazı patikalar çıkmaz sokağa veya derin uçurumlara çıkabilir.",
      "ATV turları ve at safarileri bu vadinin derinliklerine giremediği için toz bulutlarına maruz kalmadan tertemiz bir hava soluyabilirsiniz.",
      "El Nazar Kilisesi müze yönetimine bağlıdır, içeri girmek için Müzekart veya cüzi bir giriş ücreti gerekebilir."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Göreme Açık Hava Müzesi", time: "10 dk yürüyüş", link: "/museums/goreme" },
      { name: "Göreme Merkez", time: "15 dk yürüyüş", link: "/destinations/goreme" },
      { name: "Güvercinlik Vadisi", time: "10 dk araçla", link: "/valleys/pigeon-valley" },
      { name: "Gül Vadisi", time: "10 dk araçla", link: "/valleys/rose-valley" },
      { name: "Uçhisar Kalesi", time: "15 dk araçla", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Zemi Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Zemi Vadisi yeni başlayanlar için uygun mu?", a: "Orta düzeyde bir kondisyon gerektirir. Genel olarak düz olsa da, dere yataklarından atlamanız veya bazı kaygan dik yerlerden inmeniz gerekebilir. Güvercinlik Vadisi'ne göre biraz daha zordur." },
      { q: "Burada ATV veya At turu yapabilir miyim?", a: "Hayır. Yolların çok dar, ağaçlık ve yer yer dik uçurumlu olması nedeniyle Zemi Vadisi'nin derinlikleri motorlu araçlara ve atlı safarilere kapalıdır. Sadece yürüyüşçülere aittir." },
      { q: "Zemi adı nereden geliyor?", a: "Vadi, ortasından geçen ve ona bu yemyeşil hayatı veren Zemi Deresi'nden adını almaktadır." }
    ],

    // 17. CTA
    ctaTitle: "Gerçek Bir Doğa Yürüyüşüne Hazır Mısın?",
    ctaDesc: "Zemi Vadisi'nde rehberli trekking turu rezerve et ve Kapadokya'nın gizli yeşil zümrütünü keşfet.",
    btnPlan: "YÜRÜYÜŞ REZERVASYONU YAP"
  },
  es: {
    heroSub: "El Cañón Esmeralda Oculto",
    heroDesc: "Escapa de las multitudes en el valle más verde de Capadocia, un santuario de 5.6 km con huertos, cantos de pájaros e iglesias secretas.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR TREKKING GUIADO",
    statLoc: "Göreme, Turquía",
    statTime: "Mejor Época: Mañana Temprano",
    statStay: "Tiempo Rec: 3–4 Horas",

    aboutTitle: "Sobre el Valle de Zemi",
    aboutTags: ["📍 Cerca de Babayan", "🌳 Vegetación Exuberante", "⛪ Iglesia de El Nazar", "🥾 Ruta de 5.6km", "🤫 Fuera de Ruta", "💧 Arroyos Frescos", "🐦 Abundante Vida Silvestre"],
    aboutText1: "El Valle de Zemi es probablemente la ruta de senderismo más aventurera, verde y menos concurrida del centro de Capadocia. Con 5.6 km desde la carretera de Nevsehir-Urgup hasta Göreme, contrasta con los paisajes áridos de otros valles. Caminarás por túneles densos de árboles frutales.",
    aboutText2: "A diferencia de los valles de las Palomas o Rosado, Zemi es inaccesible para vehículos ATV o caballos, lo que lo convierte en un santuario pacífico para los excursionistas. Esconde espectaculares iglesias rupestres como El Nazar, la Iglesia de la Cisterna (Sarnic) y la Iglesia Oculta (Sakli).",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Iglesia El Nazar", desc: "Una notable iglesia del siglo X tallada en una chimenea de hadas con frescos bien conservados.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Iglesia Sarnıç (Cisterna)", desc: "Originalmente usada como cisterna de agua, esta antigua iglesia rupestre se asienta en lo profundo del valle.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Túneles Verdes", desc: "Camina a través de arcos densos similares a la jungla formados por moreras y ciruelos.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Cresta Görkündere", desc: "Sección escénica cerca del final del valle con altas chimeneas de hadas.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Iglesia Saklı (Oculta)", desc: "Haciendo honor a su nombre, escondida en una pendiente pronunciada para los más aventureros.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Inicio en Babayan", desc: "El inicio elevado del valle que ofrece amplias vistas antes de sumergirse en el cañón.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    todoTitle: "Experiencias en Zemi",
    todoCards: [
      { icon: "🥾", title: "Trekking Guiado Zemi", price: 40, rating: "5.0", dur: "4 Horas", link: "/tours/hiking" },
      { icon: "👑", title: "Trekking VIP Privado", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🐦", title: "Observación de Aves", price: 50, rating: "4.8", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "⛪", title: "Ruta de Iglesias Ocultas", price: 45, rating: "4.9", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "📸", title: "Sesión de Fotos Natural", price: 100, rating: "4.7", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🟢", title: "Tour Verde", price: 65, rating: "4.8", dur: "Día Completo", link: "/tours/green-tour" },
      { icon: "🚘", title: "Coche Clásico (Salida)", price: 80, rating: "4.9", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🔴", title: "Tour Rojo", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Camina Cuesta Abajo desde Babayan", desc: "Comienza en la carretera superior y desciende hacia Göreme para una caminata escénica más fácil." },
      { num: "02", title: "Descubre El Nazar", desc: "Encuentra esta impresionante iglesia tallada en una roca cónica cerca de la salida del valle." },
      { num: "03", title: "Supera los Obstáculos", desc: "Disfruta de una ligera aventura; a veces deberás saltar pequeños arroyos o bajar pendientes de toba." },
      { num: "04", title: "Fruta Fresca Silvestre", desc: "Según la temporada, recoge ciruelas y moras silvestres que crecen naturalmente en el sendero." },
      { num: "05", title: "Escapa de las Multitudes", desc: "Disfruta del silencio. Zemi suele ser ignorado por los grandes grupos turísticos." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1 Hora (Paseo Corto)", desc: "Entra desde Göreme, visita El Nazar y la Iglesia Oculta, y regresa." },
      { day: "3-4 Horas (Trekking Completo)", desc: "El tiempo para completar los 5.6 km de principio a fin, incluyendo las iglesias." },
      { day: "Medio Día", desc: "Combina la caminata de Zemi con el Museo al Aire Libre de Göreme." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Interior del Túnel Verde", time: "Mediodía", for: "Vibras de Jungla", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Exterior de El Nazar", time: "Mañana", for: "Arquitectura Rupestre", diff: "Fácil", img: "/images/churches/tokali.jpg" },
      { name: "Chimeneas de Görkündere", time: "Tarde", for: "Pilares Clásicos", diff: "Medio", img: "/images/valleys/love-valley.jpg" },
      { name: "Entrada del Valle", time: "Mañana Temprano", for: "Paisajes Amplios", diff: "Fácil", img: "/images/destinations/uchisar.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["💧 Lleva tu propia agua (Vital)", "🍇 Árboles Frutales (En temporada)", "☕ Puesto de Té en El Nazar", "🍽️ Restaurantes en Göreme (Final)"],
    stayList: ["📍 (Sin hoteles dentro del valle)", "🏕️ Acampada Libre (Consulta normas)", "💎 Hoteles Cueva en Göreme (10 min)", "🏘️ Pensiones en Uchisar (15 min)"],

    transTitle: "¿Cómo Acceder al Valle de Zemi?",
    transList: ["🥾 Inicio Superior: En la carretera de Nevsehir-Urgup. Mejor llegar en taxi desde Göreme y caminar hacia abajo.", "🥾 Inicio Inferior: Cerca del Tourist Hotel en Göreme, siguiendo las señales de El Nazar.", "🚕 Taxi: La mejor opción es tomar un taxi al inicio superior; es barato y te ahorra una subida muy empinada."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Primavera", desc: "¡La mejor época! El arroyo fluye, los pájaros cantan y los árboles florecen." },
      { name: "🍂 Otoño", desc: "Hojas doradas contrastan con las rocas blancas." },
      { name: "☀️ Verano", desc: "Fresco bajo la sombra, pero empieza temprano." },
      { name: "❄️ Invierno", desc: "Puede ser resbaladizo; solo para excursionistas experimentados." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Zemi es más 'salvaje'. Usa botas de trekking ya que hay bajadas resbaladizas.",
      "A diferencia de otros valles, casi no hay instalaciones. Lleva al menos 1.5 litros de agua.",
      "Sigue las flechas pintadas (rojas/amarillas) para no perder el sendero principal.",
      "Al no haber ATV ni caballos, no tendrás que lidiar con el polvo constante.",
      "La Iglesia El Nazar puede requerir una pequeña tarifa de entrada o Museum Pass."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Museo al Aire Libre de Göreme", time: "10 min caminando", link: "/museums/goreme" },
      { name: "Centro de Göreme", time: "15 min caminando", link: "/destinations/goreme" },
      { name: "Valle de las Palomas", time: "10 min en coche", link: "/valleys/pigeon-valley" },
      { name: "Valle Rosado", time: "10 min en coche", link: "/valleys/rose-valley" },
      { name: "Uchisar", time: "15 min en coche", link: "/destinations/uchisar" }
    ],

    popToursTitle: "Tours que Visitan Zemi",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es apto para principiantes?", a: "Requiere un nivel moderado de condición física. Es más exigente que el Valle de las Palomas, con algunos pasos resbaladizos." },
      { q: "¿Puedo hacer un tour en ATV aquí?", a: "No. Debido a los senderos estrechos y la vegetación densa, el interior profundo del valle de Zemi es solo para caminantes." },
      { q: "¿De dónde viene el nombre Zemi?", a: "Toma su nombre del arroyo Zemi que atraviesa el cañón, dando vida a toda la vegetación circundante." }
    ],

    ctaTitle: "¿Listo para una Verdadera Caminata Natural?",
    ctaDesc: "Reserva un tour de trekking guiado por Zemi y escapa al cañón más verde de Capadocia.",
    btnPlan: "RESERVAR TU CAMINATA"
  }
};

export default function ZemiValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = ZEMI_DICT[aktifDil] || ZEMI_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-emerald-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Zemi Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-slate-900/50 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-emerald-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            ZEMI VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 hover:scale-105 transition-all shadow-xl shadow-emerald-600/30">
              {t.btnExplore}
            </a>
            <Link href="/tours/hiking" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
          <div className="w-16 h-1.5 bg-emerald-500 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-emerald-500 pl-4">
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
            <div className="w-16 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-emerald-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-emerald-50/50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-emerald-500 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-emerald-500 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-emerald-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-emerald-100 hover:bg-emerald-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-emerald-400">Where to Stay?</h3>
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
      <section className="py-24 bg-emerald-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/hiking" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-600 transition-all">
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
                  <span className="text-emerald-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-emerald-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[5]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(16,185,129,0.2)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Zemi Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Zemi Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12576.438289456865!2d34.8329!3d38.6432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6701048b6c53%3A0xe9f7bbecdfd8ccf2!2sZemi%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-emerald-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-emerald-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/hiking" className="bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}