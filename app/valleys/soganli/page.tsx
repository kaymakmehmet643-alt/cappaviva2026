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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - SOGANLI VALLEY
// =======================================================
const SOGANLI_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Untouched Historic Village",
    heroDesc: "Discover an authentic Cappadocian village famous for its handmade rag dolls, unique domed rock churches, and peaceful hot air balloon flights.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A BALLOON FLIGHT",
    statLoc: "Yesilhisar (Kayseri)",
    statTime: "Best Time: Morning",
    statStay: "Rec. Time: 3–4 Hours",

    // 2. ABOUT
    aboutTitle: "About Soganli Valley",
    aboutTags: ["📍 Kayseri Border", "🪆 Handcrafted Rag Dolls", "⛪ Kubbeli (Domed) Church", "🎈 Alternative Balloon Route", "🏺 Authentic Village Life", "🕊️ Ancient Dovecotes", "🥾 Peaceful Trekking"],
    aboutText1: "Located about an hour's drive from the bustling center of Goreme, Soganli Valley offers a rare glimpse into the untouched, authentic village life of the Cappadocia region. Historically, it was a prominent Byzantine monastic center, housing hundreds of monks and featuring some of the most uniquely architected rock-cut churches in the area.",
    aboutText2: "Today, Soganli is famous worldwide for two things: the intricately handcrafted 'Soganli Dolls' made by the local village women, and the recently launched hot air balloon flights that offer a peaceful, uncrowded alternative to the Goreme skies. With its deep canyons, lush greenery, and striking Domed Church (Kubbeli Kilise), it's a paradise for history buffs and nature lovers.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Kubbeli Church (Domed Church)", desc: "A magnificent 10th-century church uniquely carved from the outside to feature a stunning stone dome.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Soganli Village Square", desc: "The heart of the village where local women sell their famous, colorful handmade rag dolls.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Karabas Church", desc: "Known as the 'Black Head' church, featuring incredibly detailed and well-preserved Byzantine frescoes.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Soganli Balloon Flights", desc: "The new, serene hot air balloon route offering spectacular sunrise views over the untouched canyons.", img: "/images/valleys/love-panorama.jpg", link: "/tours/balloon" },
      { name: "Yilanli (Serpent) Church", desc: "A fascinating rock-cut sanctuary featuring a unique fresco of St. George slaying a dragon/serpent.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Hidden Cave Pigeon Lofts", desc: "Look up at the cliffs to spot ancient dovecotes carved into the high rock faces by early farmers.", img: "/images/valleys/baglidere.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Soganli",
    todoCards: [
      { icon: "🎈", title: "Soganli Balloon Flight", price: 140, rating: "5.0", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🔵", title: "Cappadocia Blue Tour", price: 65, rating: "4.8", dur: "Full Day", link: "/book" },
      { icon: "🥾", title: "Soganli Guided Trek", price: 45, rating: "4.9", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "👑", title: "Private VIP Excursion", price: 130, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "📸", title: "Authentic Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🚘", title: "Classic Car at Sunrise", price: 80, rating: "4.7", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🚙", title: "Jeep Safari Adventure", price: 50, rating: "4.8", dur: "3 Hours", link: "/tours/jeep-safari" },
      { icon: "🍷", title: "Local Village Lunch", price: 25, rating: "4.9", dur: "1.5 Hours", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Soganli Experience Guide",
    expList: [
      { num: "01", title: "Buy a Handmade Soganli Doll", desc: "Support the local community by purchasing a traditional rag doll directly from the village women who make them." },
      { num: "02", title: "Fly in a Hot Air Balloon", desc: "Experience the sunrise from above. Soganli balloons fly lower through the deep canyons, offering a highly intimate flight." },
      { num: "03", title: "Marvel at the Domed Church", desc: "Hike up to the Kubbeli Church. Unlike most cave churches carved inward, this one was carved from the outside to create a perfect dome." },
      { num: "04", title: "Hike the Dual Canyons", desc: "Soganli splits into two separate valley forks. Hike the northern path for churches, and the southern path for pure nature." },
      { num: "05", title: "Enjoy a Village Breakfast", desc: "Sit under the apple trees in the village square and enjoy a traditional Turkish breakfast or hot gözleme." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "Half Day (Tour Visit)", desc: "Usually visited as part of the Blue Tour or a private itinerary, spending about 3 hours exploring the village and churches." },
      { day: "Sunrise Flight + Breakfast", desc: "Arrive before dawn for the balloon flight, followed by a local village breakfast and a short hike." },
      { day: "Full Day (Deep Trekking)", desc: "Hike both the northern and southern forks of the valley, taking time to explore every hidden church." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Exterior of Kubbeli Church", time: "Morning", for: "Unique Architecture", diff: "Easy", img: "/images/churches/tokali.jpg" },
      { name: "Balloons Over the Canyon", time: "Sunrise", for: "Peaceful Skyscapes", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "The Doll Makers", time: "Daytime", for: "Cultural Portraits", diff: "Easy", img: "/images/destinations/avanos.jpg" },
      { name: "Karabas Church Frescoes", time: "Midday", for: "Historical Art", diff: "Medium", img: "/images/churches/karanlik.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["☕ Village Square Tea Gardens", "🥞 Hot Gözleme (Turkish Flatbread) Tents", "🍎 Fresh Local Apples and Walnuts", "🍽️ Traditional Set-Menu Tour Restaurants"],
    stayList: ["📍 (Limited accommodation inside the valley)", "🏡 Local Village Guesthouses (Basic)", "💎 Cave Hotels in Urgup (45 mins away)", "🏰 Luxury Suites in Goreme (60 mins away)"],

    // 10. TRANSPORT
    transTitle: "How to Access Soganli?",
    transList: ["🚙 Private Tour / Car: The best way to reach Soganli. It is located about 40km (1 hour drive) south of Goreme in the Yesilhisar district of Kayseri.", "🔵 Blue Tour: Soganli is a staple stop on the 'Blue Tour' itineraries offered by many agencies.", "🚌 Public Transport: Very difficult. You would need to take a bus to Nevsehir, then to Derinkuyu, and negotiate a local taxi from there."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "The valley is incredibly green, and the apple and apricot trees are in full bloom." },
      { name: "🌅 Sunrise", desc: "The best time if you want to watch or participate in the Soganli hot air balloon flights." },
      { name: "🍂 Autumn", desc: "Pleasant trekking weather and the locals are harvesting walnuts and grapes." },
      { name: "❄️ Winter", desc: "Very quiet and cold, but the snow-dusted domed churches look magical." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Bring cash! The village women selling dolls and the small tea gardens usually do not accept credit cards.",
      "Soganli is an official open-air museum site. You will need to pay an entrance fee or show your Museum Pass at the toll booth.",
      "If you book a balloon flight here, be aware that the pickup time from Goreme will be earlier due to the 1-hour drive.",
      "The walking paths are mostly flat and well-maintained, making it a very family-friendly exploration site.",
      "Please ask for permission before taking close-up portrait photos of the village women crafting the dolls."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Derinkuyu Underground City", time: "30 min drive", link: "/museums/derinkuyu" },
      { name: "Kaymakli Underground City", time: "40 min drive", link: "/museums/kaymakli" },
      { name: "Urgup Town", time: "45 min drive", link: "/destinations/urgup" },
      { name: "Mustafapasa (Sinasos)", time: "45 min drive", link: "/destinations/mustafapasa" },
      { name: "Goreme Center", time: "60 min drive", link: "/destinations/goreme" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Soganli",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Why are the Soganli dolls so famous?", a: "The tradition started decades ago when local mothers made cloth dolls for their children. Tourists loved them, and it soon became the main source of income for the village women. Today, 'Soganli Bez Bebekleri' is a registered geographical indication." },
      { q: "Are there hot air balloons in Soganli?", a: "Yes! In recent years, Soganli has become the premier alternative balloon flight zone. It offers a quieter, highly scenic flight directly through the deep canyons, away from the heavy traffic of Goreme." },
      { q: "Is it worth the 1-hour drive from Goreme?", a: "Absolutely. If you want to escape the crowds, see unique external-carved churches (Kubbeli), and experience genuine village culture, Soganli is a must-visit." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Discover Soganli?",
    ctaDesc: "Book a peaceful balloon flight or a private excursion to this untouched historic village today.",
    btnPlan: "BOOK YOUR EXPERIENCE"
  },
  tr: {
    // 1. HERO
    heroSub: "Bozulmamış Tarihi Köy",
    heroDesc: "Meşhur bez bebekleri, dışarıdan kubbe şeklinde oyulmuş benzersiz kaya kiliseleri ve sakin sıcak hava balonu uçuşlarıyla el değmemiş bir Kapadokya harikası.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "BALON TURU REZERVE ET",
    statLoc: "Yeşilhisar (Kayseri)",
    statTime: "En İyi Zaman: Sabah",
    statStay: "Önerilen Süre: 3–4 Saat",

    // 2. ABOUT
    aboutTitle: "Soğanlı Vadisi Hakkında",
    aboutTags: ["📍 Kayseri Sınırında", "🪆 El Yapımı Bez Bebekler", "⛪ Kubbeli Kilise", "🎈 Alternatif Balon Rotası", "🏺 Otantik Köy Hayatı", "🕊️ Tarihi Güvercinlikler", "🥾 Huzurlu Doğa Yürüyüşü"],
    aboutText1: "Göreme'nin hareketli merkezine yaklaşık bir saatlik sürüş mesafesinde (Kayseri, Yeşilhisar) bulunan Soğanlı Vadisi, Kapadokya bölgesinin el değmemiş otantik köy yaşamına eşsiz bir bakış sunar. Tarihsel olarak, yüzlerce keşişe ev sahipliği yapan ve bölgedeki en benzersiz mimariye sahip kaya kiliselerini barındıran önemli bir Bizans manastır merkeziydi.",
    aboutText2: "Günümüzde Soğanlı, tüm dünyada iki şeyle ünlüdür: Köy kadınları tarafından el emeğiyle yapılan 'Soğanlı Bez Bebekleri' ve Göreme semalarına huzurlu, kalabalıktan uzak bir alternatif sunan sıcak hava balonu uçuşları. Derin kanyonları, yemyeşil doğası ve görkemli Kubbeli Kilisesi ile tarih ve doğa tutkunları için tam bir cennettir.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Kubbeli Kilise", desc: "Dışarıdan oyularak kusursuz bir taş kubbe haline getirilmiş, mimarisiyle Kapadokya'da tek olan 10. yüzyıl kilisesi.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Soğanlı Köy Meydanı", desc: "Yerel kadınların meşhur renkli bez bebeklerini sergilediği ve sattığı, vadinin kültürel kalbi.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Karabaş Kilisesi", desc: "Son derece detaylı ve iyi korunmuş Bizans dönemi freskleriyle bilinen tarihi kaya kilisesi.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Soğanlı Balon Uçuşları", desc: "Bozulmamış kanyonların üzerinden süzülen, huzurlu ve yeni nesil sıcak hava balonu rotası.", img: "/images/valleys/love-panorama.jpg", link: "/tours/balloon" },
      { name: "Yılanlı Kilise", desc: "İçerisinde Aziz George'un bir ejderhayı/yılanı öldürdüğü freskin bulunduğu gizemli tapınak.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Kaya Güvercinlikleri", desc: "Yüksek uçurumlara dikkatlice baktığınızda ilk çiftçilerin kayalara oyduğu antik güvercin yuvalarını görebilirsiniz.", img: "/images/valleys/baglidere.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Soğanlı Deneyimleri",
    todoCards: [
      { icon: "🎈", title: "Soğanlı Balon Turu", price: 140, rating: "5.0", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🔵", title: "Kapadokya Mavi Tur", price: 65, rating: "4.8", dur: "Tam Gün", link: "/book" },
      { icon: "🥾", title: "Rehberli Vadi Yürüyüşü", price: 45, rating: "4.9", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "👑", title: "VIP Özel Soğanlı Turu", price: 130, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "📸", title: "Otantik Dış Çekim", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🚘", title: "Gün Doğumu Klasik Araç", price: 80, rating: "4.7", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🚙", title: "Jeep Safari Macerası", price: 50, rating: "4.8", dur: "3 Saat", link: "/tours/jeep-safari" },
      { icon: "🍷", title: "Yerel Köy Yemeği", price: 25, rating: "4.9", dur: "1.5 Saat", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Soğanlı Deneyim Rehberi",
    expList: [
      { num: "01", title: "El Yapımı Bez Bebek Alın", desc: "Köy meydanındaki kadınlardan bu geleneksel bebekleri satın alarak yerel halkın geçimine doğrudan destek olun." },
      { num: "02", title: "Vadide Balonla Uçun", desc: "Soğanlı balonları, kanyonların içine kadar girerek çok daha alçak ve butik bir uçuş deneyimi sunar." },
      { num: "03", title: "Kubbeli Kilise'yi İnceleyin", desc: "İçeri doğru oyulan klasik kiliselerin aksine, dıştan tıraşlanarak kubbe şekli verilmiş bu mimari harikayı mutlaka görün." },
      { num: "04", title: "İki Kanyonu da Gezin", desc: "Soğanlı iki ayrı çatal vadiye ayrılır. Kiliseleri görmek için kuzey, saf doğa için güney rotasını yürüyün." },
      { num: "05", title: "Köy Kahvaltısı Yapın", desc: "Köy meydanındaki elma ağaçlarının altında, teyzelerin açtığı sıcak gözlemelerle harika bir kahvaltı molası verin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "Yarım Gün (Tur Ziyareti)", desc: "Genellikle Mavi Tur (Blue Tour) veya özel turlar kapsamında kiliseleri ve köyü gezmek için 3 saat ayrılır." },
      { day: "Balon + Kahvaltı", desc: "Sabah gün ağarmadan balon uçuşu yapıp, ardından köyde kahvaltı ederek güne harika başlayabilirsiniz." },
      { day: "Tam Gün (Trekking)", desc: "Vadinin hem kuzey hem güney kollarını yürüyerek tüm gizli kiliseleri detaylıca keşfetmek isteyenler için." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Kubbeli Kilise Dış Cephesi", time: "Sabah", for: "Eşsiz Mimari", diff: "Kolay", img: "/images/churches/tokali.jpg" },
      { name: "Kanyon Üzerinde Balonlar", time: "Gün Doğumu", for: "Huzurlu Gökyüzü", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Bez Bebek Yapan Kadınlar", time: "Gündüz", for: "Kültürel Portreler", diff: "Kolay", img: "/images/destinations/avanos.jpg" },
      { name: "Karabaş Kilisesi Freskleri", time: "Öğle", for: "Tarihi Sanat", diff: "Orta", img: "/images/churches/karanlik.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["☕ Köy Meydanı Çay Bahçeleri", "🥞 Odun Ateşinde Sıcak Gözleme Çadırları", "🍎 Yerel Elma ve Ceviz Tezgâhları", "🍽️ Tur Menüsü Veren Geleneksel Restoranlar"],
    stayList: ["📍 (Vadi içinde otel kısıtlıdır)", "🏡 Yerel Köy Pansiyonları (Temel standartlarda)", "💎 Ürgüp Mağara Otelleri (45 dk uzaklıkta)", "🏰 Göreme Lüks Süitler (60 dk uzaklıkta)"],

    // 10. TRANSPORT
    transTitle: "Soğanlı Vadisi'ne Nasıl Gidilir?",
    transList: ["🚙 Özel Tur / Kiralık Araç: En iyi yöntemdir. Göreme'nin 40 km (1 saat) güneyinde, Kayseri'nin Yeşilhisar ilçesinde yer alır.", "🔵 Mavi Tur (Blue Tour): Seyahat acenteleri tarafından düzenlenen Mavi Tur'un ana ve vazgeçilmez durağı Soğanlı'dır.", "🚌 Toplu Taşıma: Oldukça zordur. Önce Nevşehir'e, oradan Derinkuyu'ya geçip oradan yerel bir taksi ayarlamanız gerekir."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Vadi inanılmaz yeşildir ve elma, kayısı ağaçları çiçek açar." },
      { name: "🌅 Gün Doğumu", desc: "Soğanlı'nın yeni nesil balon uçuşlarını izlemek veya katılmak için en doğru zamandır." },
      { name: "🍂 Sonbahar", desc: "Yürüyüş için serin bir hava ve yerel halkın ceviz-üzüm hasadı manzaraları." },
      { name: "❄️ Kış", desc: "Çok sessiz ve soğuktur, ancak kar altındaki Kubbeli Kilise masalsı görünür." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Yanınızda nakit bulundurun! Meydanda bez bebek satan köy kadınları ve küçük çay bahçelerinde kredi kartı geçmez.",
      "Soğanlı resmi bir açık hava müzesi statüsündedir. Gişede Müzekart göstermeniz veya bilet almanız gerekecektir.",
      "Burada bir balon uçuşu rezerve ederseniz, Göreme'den 1 saatlik yolculuk nedeniyle otelden alınış saatiniz daha erken olacaktır.",
      "Yürüyüş yolları genelde düz ve bakımlıdır, bu da burayı çocuklu aileler için çok rahat bir keşif noktası yapar.",
      "Bebekleri üreten köy kadınlarının yakından portre fotoğraflarını çekmeden önce lütfen nazikçe izin isteyin."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Derinkuyu Yeraltı Şehri", time: "30 dk araçla", link: "/museums/derinkuyu" },
      { name: "Kaymaklı Yeraltı Şehri", time: "40 dk araçla", link: "/museums/kaymakli" },
      { name: "Ürgüp Merkez", time: "45 dk araçla", link: "/destinations/urgup" },
      { name: "Mustafapaşa (Sinasos)", time: "45 dk araçla", link: "/destinations/mustafapasa" },
      { name: "Göreme Merkez", time: "60 dk araçla", link: "/destinations/goreme" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Soğanlı Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Soğanlı Bez Bebekleri neden bu kadar meşhur?", a: "Gelenek yıllar önce köydeki annelerin çocukları için çaputlardan bebek yapmasıyla başladı. Turistlerin ilgisini çekince köy kadınlarının ana geçim kaynağı oldu. Bugün 'Soğanlı Bez Bebekleri' coğrafi işaret tescilli resmi bir markadır." },
      { q: "Soğanlı'da sıcak hava balonu uçuyor mu?", a: "Evet! Son yıllarda Soğanlı, Kapadokya'nın en iyi alternatif balon uçuş bölgesi oldu. Göreme'nin yoğun trafiğinden uzak, kanyonların arasından süzülen çok daha huzurlu ve manzaralı bir uçuş sunar." },
      { q: "Göreme'den 1 saatlik yola değer mi?", a: "Kesinlikle. Kalabalıktan kaçmak, dıştan kubbe şeklinde oyulmuş benzersiz kiliseleri (Kubbeli) görmek ve gerçek bir Anadolu köy kültürünü deneyimlemek istiyorsanız Soğanlı'yı mutlaka görmelisiniz." }
    ],

    // 17. CTA
    ctaTitle: "Soğanlı'yı Keşfetmeye Hazır Mısın?",
    ctaDesc: "Bu bozulmamış tarihi köye özel bir tur veya kanyonlar üzerinde huzurlu bir balon uçuşu rezerve et.",
    btnPlan: "DENEYİMİNİ REZERVE ET"
  },
  es: {
    heroSub: "El Pueblo Histórico Intacto",
    heroDesc: "Descubre un auténtico pueblo de Capadocia famoso por sus muñecas de trapo, singulares iglesias con cúpulas y tranquilos vuelos en globo.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR VUELO EN GLOBO",
    statLoc: "Yeşilhisar (Kayseri)",
    statTime: "Mejor Época: Mañana",
    statStay: "Tiempo Rec: 3–4 Horas",

    aboutTitle: "Sobre el Valle de Soğanlı",
    aboutTags: ["📍 Frontera con Kayseri", "🪆 Muñecas de Trapo a Mano", "⛪ Iglesia Kubbeli (Cúpula)", "🎈 Ruta Alternativa de Globos", "🏺 Auténtica Vida de Pueblo", "🕊️ Palomares Antiguos", "🥾 Trekking Pacífico"],
    aboutText1: "Situado a una hora en coche del bullicioso centro de Göreme, el valle de Soğanlı ofrece una rara visión de la auténtica vida rural de Capadocia. Históricamente, fue un prominente centro monástico bizantino con algunas de las iglesias rupestres de arquitectura más singular.",
    aboutText2: "Hoy, Soğanlı es famoso por dos cosas: las intrincadas 'Muñecas de Soğanlı' hechas a mano por las mujeres locales, y los recientes vuelos en globo aerostático que ofrecen una alternativa pacífica a Göreme. Con sus cañones, vegetación y la llamativa Iglesia de la Cúpula, es un paraíso para los amantes de la historia y la naturaleza.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Iglesia Kubbeli (Cúpula)", desc: "Una magnífica iglesia del siglo X tallada por fuera para crear una impresionante cúpula de piedra.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Plaza del Pueblo", desc: "El corazón del pueblo donde las mujeres locales venden sus coloridas muñecas de trapo hechas a mano.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Iglesia Karabaş", desc: "Conocida como la iglesia de la 'Cabeza Negra', con frescos bizantinos increíblemente detallados.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Vuelos en Globo en Soğanlı", desc: "La nueva y serena ruta de globos aerostáticos sobre cañones vírgenes al amanecer.", img: "/images/valleys/love-panorama.jpg", link: "/tours/balloon" },
      { name: "Iglesia Yılanlı (Serpiente)", desc: "Un santuario rupestre con un fresco único de San Jorge matando a un dragón/serpiente.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Palomares Ocultos", desc: "Mira hacia los acantilados para descubrir antiguos palomares tallados por los primeros agricultores.", img: "/images/valleys/baglidere.jpg", link: "#" }
    ],

    todoTitle: "Experiencias en Soğanlı",
    todoCards: [
      { icon: "🎈", title: "Vuelo en Globo (Soğanlı)", price: 140, rating: "5.0", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🔵", title: "Tour Azul de Capadocia", price: 65, rating: "4.8", dur: "Día Completo", link: "/book" },
      { icon: "🥾", title: "Trekking Guiado", price: 45, rating: "4.9", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "👑", title: "Excursión VIP Privada", price: 130, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "📸", title: "Sesión de Fotos Auténtica", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🚘", title: "Coche Clásico al Amanecer", price: 80, rating: "4.7", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🚙", title: "Safari en Jeep", price: 50, rating: "4.8", dur: "3 Horas", link: "/tours/jeep-safari" },
      { icon: "🍷", title: "Almuerzo en el Pueblo", price: 25, rating: "4.9", dur: "1.5 Horas", link: "/book" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Compra una Muñeca Hecha a Mano", desc: "Apoya a la comunidad comprando una muñeca de trapo tradicional a las mujeres del pueblo." },
      { num: "02", title: "Vuela en Globo Aerostático", desc: "Los globos de Soğanlı vuelan más bajo entre los cañones, ofreciendo un vuelo muy íntimo." },
      { num: "03", title: "Maravíllate con la Iglesia de la Cúpula", desc: "A diferencia de las iglesias cueva habituales, esta fue tallada desde el exterior creando una cúpula." },
      { num: "04", title: "Recorre los Dos Cañones", desc: "Soğanlı se bifurca. Camina por la ruta norte para las iglesias y por la sur para la naturaleza pura." },
      { num: "05", title: "Desayuna en el Pueblo", desc: "Siéntate bajo los manzanos en la plaza del pueblo y disfruta de un tradicional gözleme caliente." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "Medio Día (Tour)", desc: "Generalmente se visita como parte del Tour Azul, pasando unas 3 horas explorando iglesias." },
      { day: "Vuelo + Desayuno", desc: "Llega antes del amanecer para el globo, seguido de un desayuno local y una breve caminata." },
      { day: "Día Completo (Trekking)", desc: "Recorre las dos bifurcaciones del valle para explorar cada iglesia escondida." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Exterior de Iglesia Kubbeli", time: "Mañana", for: "Arquitectura Única", diff: "Fácil", img: "/images/churches/tokali.jpg" },
      { name: "Globos sobre el Cañón", time: "Amanecer", for: "Paisajes Pacíficos", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Fabricantes de Muñecas", time: "Día", for: "Retratos Culturales", diff: "Fácil", img: "/images/destinations/avanos.jpg" },
      { name: "Frescos de Karabaş", time: "Mediodía", for: "Arte Histórico", diff: "Medio", img: "/images/churches/karanlik.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["☕ Jardines de Té en la Plaza", "🥞 Puestos de Gözleme Caliente", "🍎 Manzanas y Nueces Locales", "🍽️ Restaurantes Tradicionales de Menú de Tour"],
    stayList: ["📍 (Poco alojamiento en el valle)", "🏡 Pensiones Locales (Básicas)", "💎 Hoteles Cueva en Ürgüp (A 45 min)", "🏰 Suites de Lujo en Göreme (A 60 min)"],

    transTitle: "¿Cómo Acceder a Soğanlı?",
    transList: ["🚙 Tour Privado / Coche: La mejor manera. Está a 40 km (1 hora) al sur de Göreme.", "🔵 Tour Azul: Soğanlı es una parada clave en los itinerarios del 'Tour Azul'.", "🚌 Transporte Público: Muy difícil. Necesitas ir a Nevsehir, luego a Derinkuyu y negociar un taxi local."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Primavera", desc: "El valle es increíblemente verde y los manzanos están en flor." },
      { name: "🌅 Amanecer", desc: "El mejor momento para ver o participar en los vuelos en globo." },
      { name: "🍂 Otoño", desc: "Clima agradable para caminar; los locales cosechan nueces y uvas." },
      { name: "❄️ Invierno", desc: "Muy tranquilo, las iglesias con cúpulas nevadas se ven mágicas." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "¡Lleva efectivo! Las mujeres que venden muñecas y las pequeñas teterías no aceptan tarjetas.",
      "Soğanlı es un museo al aire libre oficial. Necesitas el Museum Pass o pagar entrada.",
      "Si reservas un vuelo en globo aquí, la recogida en Göreme será más temprana debido al viaje de 1 hora.",
      "Los senderos son llanos y están bien mantenidos, ideales para familias con niños.",
      "Pide permiso antes de tomar fotos de cerca a las mujeres del pueblo haciendo muñecas."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Ciudad Subterránea Derinkuyu", time: "30 min en coche", link: "/museums/derinkuyu" },
      { name: "Ciudad Subterránea Kaymakli", time: "40 min en coche", link: "/museums/kaymakli" },
      { name: "Centro de Ürgüp", time: "45 min en coche", link: "/destinations/urgup" },
      { name: "Mustafapaşa (Sinasos)", time: "45 min en coche", link: "/destinations/mustafapasa" },
      { name: "Göreme", time: "60 min en coche", link: "/destinations/goreme" }
    ],

    popToursTitle: "Tours que Visitan Soğanlı",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Por qué son tan famosas las muñecas de Soğanlı?", a: "La tradición comenzó hace décadas cuando las madres locales hacían muñecas de tela para sus hijos. A los turistas les encantaron, y se convirtió en la principal fuente de ingresos. Hoy es una marca registrada." },
      { q: "¿Hay globos aerostáticos en Soğanlı?", a: "¡Sí! Recientemente, Soğanlı se ha convertido en la principal zona alternativa de globos. Ofrece un vuelo más tranquilo entre cañones, lejos del tráfico de Göreme." },
      { q: "¿Vale la pena el viaje de 1 hora desde Göreme?", a: "Totalmente. Si quieres escapar de las multitudes, ver la singular Iglesia de la Cúpula y experimentar la cultura de pueblo, Soğanlı es una visita obligada." }
    ],

    ctaTitle: "¿Listo para Descubrir Soğanlı?",
    ctaDesc: "Reserva un vuelo pacífico en globo o una excursión privada a este histórico pueblo intacto.",
    btnPlan: "RESERVAR TU EXPERIENCIA"
  }
};

export default function SoganliValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = SOGANLI_DICT[aktifDil] || SOGANLI_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-amber-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/churches/tokali.jpg" alt="Soganli Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/50 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-amber-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            SOĞANLI
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-500 hover:scale-105 transition-all shadow-xl shadow-amber-600/30">
              {t.btnExplore}
            </a>
            <Link href="/tours/balloon" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
          <div className="w-16 h-1.5 bg-amber-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-amber-500 pl-4">
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
            <div className="w-16 h-1.5 bg-amber-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-amber-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-amber-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-amber-50/50 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-amber-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-amber-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-amber-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-amber-100 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-amber-400">Where to Stay?</h3>
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
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/book" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-600 transition-all">
              Book The Blue Tour &rarr;
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
                  <span className="text-amber-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-amber-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-amber-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[3]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(217,119,6,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Soganli) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Soğanlı Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.428458739199!2d34.9528!3d38.3444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152bb5d506d1a1b1%3A0xc0c8d10edc911b34!2sSo%C4%9Fanl%C4%B1%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-amber-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-amber-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/balloon" className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}