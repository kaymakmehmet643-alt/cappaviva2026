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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - KILICLAR (SWORD) VALLEY
// =======================================================
const KILICLAR_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Valley of Sharp Peaks & Safaris",
    heroDesc: "Home to sword-like fairy chimneys, a thrilling 300-meter dark rock tunnel, and the absolute best routes for ATV and Horseback safaris.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK ATV SAFARI",
    statLoc: "Goreme, Türkiye",
    statTime: "Best Time: Afternoon",
    statStay: "Rec. Time: 1–2 Hours",

    // 2. ABOUT
    aboutTitle: "About Kılıçlar (Sword) Valley",
    aboutTags: ["📍 Next to Goreme Museum", "🗡️ Sword-like Chimneys", "🚇 300m Rock Tunnel", "🏍️ #1 ATV Safari Route", "🐎 Horseback Trails", "⛪ Kılıçlar Church", "💨 Action & Adventure"],
    aboutText1: "Sword Valley (Kılıçlar Vadisi) is the smallest yet most action-packed canyon in Cappadocia. Located just across from the famous Goreme Open Air Museum, it gets its name from the distinctly sharp, pointed fairy chimneys that rise from the valley floor like drawn swords.",
    aboutText2: "While it is a fantastic place for a short, adventurous hike, Kılıçlar is predominantly known as the primary playground for Cappadocia's ATV and Horse safaris. The valley's signature feature is a thrilling 300-meter-long, pitch-black rock tunnel that riders and hikers must navigate to reach the other side. It also houses impressive rock-cut sanctuaries like the Kılıçlar and Virgin Mary churches.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "The 300-Meter Tunnel", desc: "A long, dark, and exciting natural tunnel that you can walk, ride a horse, or drive an ATV through.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Pointed Fairy Chimneys", desc: "The unique, sword-shaped rock formations that give the valley its sharp name.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Kılıçlar Church", desc: "A beautifully decorated 10th-century cave church with 33 stunning frescoes depicting biblical scenes.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Virgin Mary Church", desc: "Another significant rock-cut church nestled within the narrow gorge of the valley.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "The Narrow Gorge", desc: "A dramatic, tight canyon section where the cliff walls close in around the trail.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Goreme Panorama Exit", desc: "The trail exit offering sweeping views over the town of Goreme and the balloon launch sites.", img: "/images/destinations/goreme.jpg", link: "/destinations/goreme" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Sword Valley",
    todoCards: [
      { icon: "🏍️", title: "ATV Adventure Safari", price: 35, rating: "5.0", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🐎", title: "Horseback Canyon Ride", price: 45, rating: "4.9", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🥾", title: "Guided Short Hike", price: 35, rating: "4.8", dur: "1.5 Hours", link: "/tours/hiking" },
      { icon: "🚙", title: "Jeep Safari (Off-road)", price: 45, rating: "4.8", dur: "2 Hours", link: "/tours/jeep-safari" },
      { icon: "📸", title: "Action Photoshoot", price: 100, rating: "4.7", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "👑", title: "Private Safari Guide", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" },
      { icon: "🚘", title: "Classic Car at Entry", price: 80, rating: "4.8", dur: "2 Hours", link: "/tours/classic-car" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Sword Valley Experience Guide",
    expList: [
      { num: "01", title: "Ride Through the Dark Tunnel", desc: "The ultimate Kılıçlar experience. Join an ATV or Horse tour and navigate the thrilling 300m tunnel." },
      { num: "02", title: "Visit Kılıçlar Church", desc: "Stop near the entrance to admire one of the finest frescoed churches outside the Open Air Museum." },
      { num: "03", title: "Dodge the Dust", desc: "Embrace the wild safari vibe. Wear a bandana and sunglasses if you're hiking, as the ATVs kick up epic dust clouds." },
      { num: "04", title: "Hike the Narrow Gorge", desc: "If walking, enjoy the tight, high-walled sections of the canyon that make you feel like an explorer." },
      { num: "05", title: "Combine with Goreme Museum", desc: "Since the valley entrance is directly opposite the Goreme Open Air Museum, do both in one morning." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1-2 Hours (Safari)", desc: "The standard time it takes to ride through the valley and its tunnel on an ATV or Horse." },
      { day: "1 Hour (Short Hike)", desc: "Perfect for a quick, adventurous walk starting from Goreme and looping back." },
      { day: "Half Day (With Museum)", desc: "Visit the Goreme Open Air Museum first, then cross the road to explore Sword Valley." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Inside the 300m Tunnel", time: "Daytime", for: "Action & Silhouettes", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "Among Pointed Chimneys", time: "Afternoon", for: "Classic Valley Shots", diff: "Medium", img: "/images/valleys/love-panorama.jpg" },
      { name: "Horseback in the Gorge", time: "Golden Hour", for: "Wild West Vibes", diff: "Easy", img: "/images/valleys/rose-valley.jpg" },
      { name: "Kılıçlar Church Frescoes", time: "Morning", for: "Historical Detail", diff: "Easy", img: "/images/churches/tokali.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["🥤 Fresh Juice Stands at the Entrance", "☕ Small Tea Kiosks near the Museum", "🍽️ Restaurants in Goreme Town (15 min walk)"],
    stayList: ["📍 (No Hotels in the Valley)", "💎 Goreme Cave Suites (15 mins walk)", "🏰 Cavusin Village Guesthouses (10 mins drive)", "⛺ Kaya Camping (Nearby Ortahisar)"],

    // 10. TRANSPORT
    transTitle: "How to Access Sword Valley?",
    transList: ["🥾 On Foot: Walk 15 minutes from Goreme town center towards the Open Air Museum. The entrance is on your left.", "🏍️ By Tour: The absolute best way to experience it is by booking an ATV or Horseback safari, which includes hotel pickup.", "🚗 By Car: You can park at the Goreme Open Air Museum parking lot and simply walk across the road."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌅 Early Morning", desc: "The only time the valley is quiet enough for a peaceful, dust-free hike." },
      { name: "🌇 Late Afternoon", desc: "The peak action time! Join the ATV safaris heading towards the sunset." },
      { name: "🌸 Spring", desc: "Comfortable weather for riding through the canyon." },
      { name: "🍂 Autumn", desc: "Crisp air and great lighting for action photography." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "This is Safari Central! If you are hiking, be prepared to share the narrow paths with convoys of ATVs and horses.",
      "Bring a bandana or face mask. The dry volcanic dust kicked up by vehicles in the enclosed gorge is intense.",
      "The 300-meter tunnel is completely dark in the middle. Use your phone's flashlight and watch your step.",
      "Kılıçlar Church is a protected site and you may be asked to show your Museum Pass by attendants near the museum.",
      "If you want a quiet, meditative hike, choose Zemi or Pigeon Valley instead. Come to Sword Valley for action!"
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Goreme Open Air Museum", time: "Right Across", link: "/museums/goreme" },
      { name: "Rose Valley", time: "Connected", link: "/valleys/rose-valley" },
      { name: "Red Valley", time: "10 min drive", link: "/valleys/red-valley" },
      { name: "Meskendir Valley", time: "10 min hike", link: "/valleys/meskendir" },
      { name: "Goreme Center", time: "15 min walk", link: "/destinations/goreme" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Sword Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Why is it called Sword Valley?", a: "The valley is filled with tall, unusually sharp and pointed fairy chimneys that look like blades or swords pointing at the sky." },
      { q: "Is it safe to hike here?", a: "Yes, but you must be cautious. Because it is the main route for ATV and horse safaris, hikers need to step aside frequently to let the tours pass. The dust can also be overwhelming." },
      { q: "Can I walk through the 300m tunnel?", a: "Yes, the tunnel is open to hikers, horses, and ATVs. It is dark, so a flashlight is necessary, but it is a fun and safe adventure." }
    ],

    // 17. CTA
    ctaTitle: "Ready for an Action Safari?",
    ctaDesc: "Book your ATV or Horseback adventure through Sword Valley's thrilling tunnels today.",
    btnPlan: "BOOK YOUR SAFARI"
  },
  tr: {
    // 1. HERO
    heroSub: "Sivri Kayalar ve Safari Vadisi",
    heroDesc: "Kılıcı andıran sivri peribacaları, 300 metrelik heyecan verici karanlık tüneli ve Kapadokya'nın en iyi ATV ve At safari parkurlarına ev sahipliği yapar.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "ATV SAFARİ REZERVE ET",
    statLoc: "Göreme, Türkiye",
    statTime: "En İyi Zaman: Öğleden Sonra",
    statStay: "Önerilen Süre: 1–2 Saat",

    // 2. ABOUT
    aboutTitle: "Kılıçlar Vadisi Hakkında",
    aboutTags: ["📍 Göreme Açık Hava Müzesi Karşısı", "🗡️ Kılıç Benzeri Peribacaları", "🚇 300m Kaya Tüneli", "🏍️ #1 ATV Safari Rotası", "🐎 Atlı Safari Parkuru", "⛪ Kılıçlar Kilisesi", "💨 Aksiyon ve Macera"],
    aboutText1: "Kılıçlar Vadisi (Sword Valley), Kapadokya'nın en küçük ama aksiyonu en bol kanyonudur. Dünyaca ünlü Göreme Açık Hava Müzesi'nin hemen karşısında yer alan vadi, adını tabandan gökyüzüne çekilmiş kılıçlar gibi yükselen ince, uzun ve sivri uçlu peribacalarından alır.",
    aboutText2: "Kısa ve maceracı bir doğa yürüyüşü için harika bir yer olsa da, Kılıçlar daha çok Kapadokya'nın ATV ve Atlı safari etkinliklerinin ana oyun alanı olarak bilinir. Vadinin en ikonik özelliği, hem yürüyerek hem de ATV veya atla geçilebilen zifiri karanlık 300 metrelik kaya tünelidir. Ayrıca muazzam fresklere sahip Kılıçlar ve Meryem Ana kiliselerini barındırır.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "300 Metrelik Tünel", desc: "İçinden yürüyerek, atla veya ATV ile geçebileceğiniz uzun, karanlık ve heyecan verici doğal geçit.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Sivri Peribacaları", desc: "Vadiye o keskin adını veren, gökyüzünü delen benzersiz kılıç şeklindeki kaya oluşumları.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Kılıçlar Kilisesi", desc: "İncil'den sahneleri betimleyen 33 adet muazzam freske sahip, 10. yüzyıldan kalma harika bir mağara kilisesi.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Meryem Ana Kilisesi", desc: "Vadinin dar kanyon yapısının içine gizlenmiş bir diğer önemli tarihi kaya kilisesi.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Dar Kanyon Boğazı", desc: "Yüksek kaya duvarlarının patikanın etrafını sararak daraldığı, macera hissi veren kanyon bölümü.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Göreme Panoraması", desc: "Vadinin bitişinde Göreme kasabasına ve balon kalkış alanlarına bakan yüksek seyir noktası.", img: "/images/destinations/goreme.jpg", link: "/destinations/goreme" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Kılıçlar Vadisi Deneyimleri",
    todoCards: [
      { icon: "🏍️", title: "ATV Macera Safarisi", price: 35, rating: "5.0", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🐎", title: "Atlı Kanyon Safarisi", price: 45, rating: "4.9", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🥾", title: "Kısa Vadi Yürüyüşü", price: 35, rating: "4.8", dur: "1.5 Saat", link: "/tours/hiking" },
      { icon: "🚙", title: "Jeep Safari (Off-road)", price: 45, rating: "4.8", dur: "2 Saat", link: "/tours/jeep-safari" },
      { icon: "📸", title: "Aksiyon Dış Çekimi", price: 100, rating: "4.7", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "👑", title: "VIP Safari Rehberi", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "🔴", title: "Kapadokya Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" },
      { icon: "🚘", title: "Girişte Klasik Araç", price: 80, rating: "4.8", dur: "2 Saat", link: "/tours/classic-car" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Kılıçlar Deneyim Rehberi",
    expList: [
      { num: "01", title: "Karanlık Tünelden Geçin", desc: "Gerçek Kılıçlar deneyimi budur. Bir ATV veya At turuna katılın ve 300 metrelik o heyecan verici karanlık tüneli geçin." },
      { num: "02", title: "Kılıçlar Kilisesi'ni Ziyaret Edin", desc: "Açık Hava Müzesi dışındaki en iyi freskli kiliselerden birini görmek için vadi girişinde mola verin." },
      { num: "03", title: "Tozla Mücadele Edin", desc: "Eğer vadide yürüyorsanız Vahşi Batı hissine hazır olun! ATV'lerin kaldırdığı toz bulutları için yanınıza mutlaka bandana alın." },
      { num: "04", title: "Dar Boğazda Yürüyün", desc: "Kanyonun duvarlarının birbirine yaklaştığı dar bölümlerde kendinizi gerçek bir kaşif gibi hissedin." },
      { num: "05", title: "Göreme Müzesi ile Birleştirin", desc: "Vadi girişi Göreme Açık Hava Müzesi'nin tam karşısında olduğundan, sabah her ikisini de tek seferde halledebilirsiniz." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1-2 Saat (Safari)", desc: "Vadiyi ve ünlü tüneli bir ATV veya Atlı safari ile geçmek için ayrılan standart tur süresi." },
      { day: "1 Saat (Kısa Yürüyüş)", desc: "Göreme'den yürüyerek kanyona girip, ana güzellikleri gördükten sonra geri dönmek için idealdir." },
      { day: "Yarım Gün (Müzeyle)", desc: "Önce Açık Hava Müzesi'ni gezip, ardından yolun karşısına geçerek Kılıçlar'da macera yaşayın." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "300m Tünel İçi", time: "Gündüz", for: "Aksiyon ve Silüet", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Sivri Peribacaları Arası", time: "Öğleden Sonra", for: "İkonik Vadi Manzarası", diff: "Orta", img: "/images/valleys/love-panorama.jpg" },
      { name: "Kanyonda Atlılar", time: "Altın Saat", for: "Vahşi Batı Konsepti", diff: "Kolay", img: "/images/valleys/rose-valley.jpg" },
      { name: "Kılıçlar Kilisesi Freskleri", time: "Sabah", for: "Tarihi Detaylar", diff: "Kolay", img: "/images/churches/tokali.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["🥤 Girişteki Taze Meyve Suyu Stantları", "☕ Müze Çevresindeki Çay Büfeleri", "🍽️ Göreme Merkez Restoranları (15 dk yürüme)"],
    stayList: ["📍 (Vadi içinde otel bulunmaz)", "💎 Göreme Mağara Otelleri (15 dk yürüme)", "🏰 Çavuşin Köyü Konakları (10 dk araçla)", "⛺ Kaya Kamping (Ortahisar'da)"],

    // 10. TRANSPORT
    transTitle: "Kılıçlar Vadisi'ne Nasıl Gidilir?",
    transList: ["🥾 Yürüyerek: Göreme merkezden Açık Hava Müzesi'ne doğru 15 dakika yürüyün. Vadi girişi solunuzda kalacaktır.", "🏍️ Tur ile: Burayı deneyimlemenin açık ara en iyi yolu, otel transferi de sağlayan bir ATV veya Atlı Safari rezerve etmektir.", "🚗 Araçla: Göreme Açık Hava Müzesi'nin otoparkına aracınızı bırakıp yolun karşısına yürüyerek geçebilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌅 Sabah Erken", desc: "Sessiz, tozsuz ve huzurlu bir yürüyüş yapabileceğiniz tek zaman dilimidir." },
      { name: "🌇 Akşamüstü", desc: "Aksiyonun zirve yaptığı an! Gün batımına giden ATV ve at konvoylarının arasına katılın." },
      { name: "🌸 İlkbahar", desc: "Kanyonun içinde safari yapmak için en ferah hava koşulları." },
      { name: "🍂 Sonbahar", desc: "Aksiyon fotoğrafçılığı için mükemmel yatık ışık ve serin bir hava." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Burası Safari Merkezidir! Eğer yürüyüş yapıyorsanız, dar patikaları kalabalık ATV ve at konvoylarıyla paylaşmaya hazır olun.",
      "Mutlaka yüzünüzü kapatacak bir bandana takın. Dar kanyonda motorların kaldırdığı volkanik toz çok yoğundur.",
      "300 metrelik tünelin ortası zifiri karanlıktır. Telefonunuzun fenerini açık tutun ve yere dikkatlice basarak ilerleyin.",
      "Kılıçlar Kilisesi Kültür Bakanlığına bağlıdır, girişinde müze görevlilerine Müzekart göstermeniz istenebilir.",
      "Sessiz ve meditatif bir doğa yürüyüşü istiyorsanız Zemi veya Güvercinlik'i seçin. Kılıçlar Vadisi'ne aksiyon ve eğlence için gelin!"
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Göreme Açık Hava Müzesi", time: "Tam Karşısı", link: "/museums/goreme" },
      { name: "Gül Vadisi (Rose Valley)", time: "Bağlantılı", link: "/valleys/rose-valley" },
      { name: "Kızıl Vadi (Red Valley)", time: "10 dk araçla", link: "/valleys/red-valley" },
      { name: "Meskendir Vadisi", time: "10 dk yürüyüş", link: "/valleys/meskendir" },
      { name: "Göreme Merkez", time: "15 dk yürüyüş", link: "/destinations/goreme" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Kılıçlar Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Neden Kılıçlar Vadisi deniyor?", a: "Vadi, gökyüzüne doğru yöneltilmiş ince kılıçları andıran oldukça uzun ve sivri uçlu peribacalarıyla dolu olduğu için bu adı almıştır." },
      { q: "Burada yürüyüş yapmak güvenli mi?", a: "Evet, ancak dikkatli olmalısınız. Burası ATV ve atlı safarilerin ana güzergahı olduğu için, yürüyüşçülerin sık sık kenara çekilip turlara yol vermesi gerekir. Ayrıca çok fazla toz yutabilirsiniz." },
      { q: "300 metrelik tünelden yürüyerek geçilebilir mi?", a: "Evet, tünel yürüyüşçülere, atlara ve ATV'lere açıktır. İçi karanlık olduğu için el feneri şarttır ancak oldukça eğlenceli ve güvenli bir maceradır." }
    ],

    // 17. CTA
    ctaTitle: "Aksiyon ve Safariye Hazır Mısın?",
    ctaDesc: "Kılıçlar Vadisi'nin heyecan verici tünellerinden geçecek ATV veya Atlı Safari turunu hemen rezerve et.",
    btnPlan: "SAFARİ REZERVASYONU YAP"
  },
  es: {
    heroSub: "El Valle de los Picos y Safaris",
    heroDesc: "Hogar de chimeneas de hadas afiladas como espadas, un emocionante túnel oscuro de 300 metros y las mejores rutas para safaris en ATV y a caballo.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR SAFARI EN ATV",
    statLoc: "Göreme, Turquía",
    statTime: "Mejor Época: Tarde",
    statStay: "Tiempo Rec: 1–2 Horas",

    aboutTitle: "Sobre el Valle de las Espadas (Kılıçlar)",
    aboutTags: ["📍 Frente al Museo de Göreme", "🗡️ Rocas como Espadas", "🚇 Túnel de 300m", "🏍️ Ruta #1 de ATV", "🐎 Senderos Ecuestres", "⛪ Iglesia de Kılıçlar", "💨 Acción y Aventura"],
    aboutText1: "El Valle de las Espadas (Kılıçlar) es el cañón más pequeño pero con más acción de Capadocia. Situado justo enfrente del Museo al Aire Libre de Göreme, recibe su nombre por las chimeneas de hadas afiladas y puntiagudas que se alzan como espadas desenvainadas.",
    aboutText2: "Aunque es ideal para una caminata corta, Kılıçlar es conocido como el terreno de juego principal para los safaris en ATV y a caballo. Su característica principal es un emocionante túnel de roca de 300 metros de largo y completamente oscuro que jinetes y caminantes deben atravesar. También alberga impresionantes iglesias rupestres.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Túnel de 300 Metros", desc: "Un túnel natural largo, oscuro y emocionante que puedes cruzar a pie, a caballo o en ATV.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Chimeneas Puntiagudas", desc: "Las únicas formaciones en forma de espada que le dan al valle su afilado nombre.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Iglesia de Kılıçlar", desc: "Una hermosa iglesia del siglo X con 33 impresionantes frescos bíblicos.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Iglesia de la Virgen María", desc: "Otra iglesia significativa tallada en la roca dentro de la parte más estrecha del cañón.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Desfiladero Estrecho", desc: "Una sección dramática y ajustada donde las paredes del acantilado se cierran sobre el camino.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Salida a Göreme", desc: "El final del sendero ofrece vistas panorámicas del pueblo de Göreme y los globos.", img: "/images/destinations/goreme.jpg", link: "/destinations/goreme" }
    ],

    todoTitle: "Experiencias en el Valle",
    todoCards: [
      { icon: "🏍️", title: "Safari de Aventura ATV", price: 35, rating: "5.0", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🐎", title: "Paseo a Caballo", price: 45, rating: "4.9", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🥾", title: "Caminata Corta Guiada", price: 35, rating: "4.8", dur: "1.5 Horas", link: "/tours/hiking" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.8", dur: "2 Horas", link: "/tours/jeep-safari" },
      { icon: "📸", title: "Sesión Fotográfica de Acción", price: 100, rating: "4.7", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "👑", title: "Guía Privado de Safari", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🔴", title: "Tour Rojo de Capadocia", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" },
      { icon: "🚘", title: "Coche Clásico (Entrada)", price: 80, rating: "4.8", dur: "2 Horas", link: "/tours/classic-car" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Cruza el Túnel Oscuro", desc: "La experiencia definitiva de Kılıçlar. Únete a un tour en ATV o a caballo y atraviesa el túnel de 300m." },
      { num: "02", title: "Visita la Iglesia de Kılıçlar", desc: "Haz una parada cerca de la entrada para admirar una de las iglesias con mejores frescos fuera del museo." },
      { num: "03", title: "Esquiva el Polvo", desc: "Prepárate para la aventura pura. Usa una bandana si caminas, ya que los ATV levantan nubes de polvo épicas." },
      { num: "04", title: "Camina por el Desfiladero", desc: "Si vas a pie, disfruta de las secciones estrechas de paredes altas que te hacen sentir como un explorador." },
      { num: "05", title: "Combínalo con el Museo", desc: "Como la entrada está justo enfrente del Museo de Göreme, haz ambas cosas en una mañana." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1-2 Horas (Safari)", desc: "El tiempo estándar que se tarda en recorrer el valle y su túnel en un ATV o a caballo." },
      { day: "1 Hora (Caminata Corta)", desc: "Perfecto para un paseo rápido y aventurero saliendo desde Göreme y volviendo." },
      { day: "Medio Día (Con Museo)", desc: "Visita primero el Museo al Aire Libre de Göreme, luego cruza la calle para explorar el Valle de las Espadas." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Dentro del Túnel de 300m", time: "Día", for: "Acción y Siluetas", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Entre Rocas Puntiagudas", time: "Tarde", for: "Tomas Clásicas", diff: "Medio", img: "/images/valleys/love-panorama.jpg" },
      { name: "A Caballo en el Desfiladero", time: "Hora Dorada", for: "Estilo Salvaje Oeste", diff: "Fácil", img: "/images/valleys/rose-valley.jpg" },
      { name: "Frescos de la Iglesia", time: "Mañana", for: "Detalle Histórico", diff: "Fácil", img: "/images/churches/tokali.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["🥤 Puestos de Zumo Fresco en la Entrada", "☕ Pequeños Quioscos de Té cerca del Museo", "🍽️ Restaurantes en Göreme (15 min a pie)"],
    stayList: ["📍 (No hay hoteles en el valle)", "💎 Hoteles Cueva en Göreme (15 min a pie)", "🏰 Pensiones en Çavuşin (10 min en coche)", "⛺ Kaya Camping (Cerca de Ortahisar)"],

    transTitle: "¿Cómo Llegar al Valle de las Espadas?",
    transList: ["🥾 A Pie: Camina 15 minutos desde el centro de Göreme hacia el Museo al Aire Libre. La entrada está a la izquierda.", "🏍️ Con Tour: La mejor forma de experimentarlo es reservando un safari en ATV o a caballo, que incluye recogida.", "🚗 En Coche: Puedes aparcar en el aparcamiento del Museo de Göreme y simplemente cruzar la calle a pie."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌅 Mañana Temprano", desc: "El único momento en que el valle es lo bastante tranquilo para caminar sin polvo." },
      { name: "🌇 Tarde", desc: "¡La hora de la acción! Únete a los safaris en ATV que se dirigen al atardecer." },
      { name: "🌸 Primavera", desc: "Clima cómodo para conducir a través del cañón." },
      { name: "🍂 Otoño", desc: "Aire fresco y excelente luz para la fotografía de acción." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "¡Este es el centro de los safaris! Si vas a pie, prepárate para compartir los caminos estrechos con convoys de ATV y caballos.",
      "Lleva una bandana o mascarilla. El polvo volcánico seco que levantan los vehículos en el cañón cerrado es intenso.",
      "El túnel de 300 metros es totalmente oscuro en el medio. Usa la linterna de tu móvil y cuidado por dónde pisas.",
      "La Iglesia Kılıçlar es un sitio protegido y los guardias pueden pedirte el Museum Pass.",
      "Si buscas una caminata meditativa y tranquila, elige el Valle de Zemi o el de las Palomas. ¡Ven aquí para la acción!"
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Museo de Göreme", time: "Justo Enfrente", link: "/museums/goreme" },
      { name: "Valle Rosado", time: "Conectado", link: "/valleys/rose-valley" },
      { name: "Valle Rojo", time: "10 min en coche", link: "/valleys/red-valley" },
      { name: "Valle de Meskendir", time: "10 min a pie", link: "/valleys/meskendir" },
      { name: "Centro de Göreme", time: "15 min a pie", link: "/destinations/goreme" }
    ],

    popToursTitle: "Tours que Visitan el Valle de las Espadas",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Por qué se llama Valle de las Espadas?", a: "El valle está lleno de chimeneas de hadas altas y puntiagudas que parecen espadas o cuchillas apuntando al cielo." },
      { q: "¿Es seguro caminar por aquí?", a: "Sí, pero debes ser precavido. Al ser la ruta principal de safaris, los senderistas deben apartarse frecuentemente para dejar pasar a los tours. El polvo también puede ser abrumador." },
      { q: "¿Puedo cruzar el túnel de 300m a pie?", a: "Sí, el túnel está abierto para peatones, caballos y ATVs. Es oscuro, así que necesitas linterna, pero es una aventura divertida y segura." }
    ],

    ctaTitle: "¿Listo para un Safari de Acción?",
    ctaDesc: "Reserva hoy tu aventura en ATV o a caballo por los emocionantes túneles del Valle de las Espadas.",
    btnPlan: "RESERVAR TU SAFARI"
  }
};

export default function SwordValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = KILICLAR_DICT[aktifDil] || KILICLAR_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-cyan-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Sword Valley Safari" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/40 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-cyan-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            SWORD VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-500 hover:scale-105 transition-all shadow-xl shadow-cyan-600/30">
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
          <div className="w-16 h-1.5 bg-cyan-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-cyan-500 pl-4">
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
            <div className="w-16 h-1.5 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-cyan-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-cyan-50/50 border-y border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-cyan-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-cyan-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-cyan-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-cyan-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-cyan-100 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-cyan-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-cyan-400">Where to Stay?</h3>
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
      <section className="py-24 bg-cyan-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/atv" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-600 transition-all">
              Book ATV Safari &rarr;
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
                  <span className="text-cyan-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-cyan-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-cyan-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[3]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-cyan-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Sword Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Sword Valley (Kılıçlar) Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12576.438289456865!2d34.838!3d38.646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6701048b6c53%3A0xe9f7bbecdfd8ccf2!2sK%C4%B1l%C4%B1%C3%A7lar%20Vadisi!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-cyan-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-cyan-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/atv" className="bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-cyan-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}