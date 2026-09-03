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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - CAT VALLEY
// =======================================================
const CAT_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Canyon of Silent Dovecotes",
    heroDesc: "Escape the tourist crowds and hike a completely isolated 7km canyon lined with massive, cliff-face pigeon lofts and wild nature.",
    btnExplore: "EXPLORE THE CANYON",
    btnBookHero: "BOOK A GUIDED HIKE",
    statLoc: "Cat Town, Nevsehir",
    statTime: "Best Time: Morning",
    statStay: "Rec. Time: 3–4 Hours",

    // 2. ABOUT
    aboutTitle: "About Çat Valley",
    aboutTags: ["📍 Near Nevsehir Center", "🕊️ Giant Cliff Dovecotes", "🥾 7km Flat Trekking", "🤫 Absolute Silence", "🌲 Wild Flora & Fauna", "🚜 Off-the-Grid", "🛡️ Untouched Nature"],
    aboutText1: "Cat Valley (Çat Vadisi) is one of the most secluded and untouched canyons in the Cappadocia region. Located near the town of Cat, just outside the central city of Nevsehir, it remains completely off the radar of standard tourist buses and large tour groups. It offers a pure, undisturbed hiking experience.",
    aboutText2: "The valley is predominantly famous for its spectacular dovecotes (pigeon houses). While Pigeon Valley in Uchisar is well-known, Cat Valley boasts massive, multi-story pigeon lofts carved directly into the high, sheer cliff walls, creating a surreal 'skyscraper' effect for birds. Walking the 7-kilometer trail provides an intimate connection with nature, completely free from the noise of ATVs or crowds.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "The Great Dovecote Walls", desc: "Look up at the towering cliff faces to see hundreds of pigeon holes meticulously carved by ancient farmers.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "The 7km Canyon Trail", desc: "A relatively flat and wide trekking path that follows a dry riverbed deep through the isolated gorge.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Fırın Asma", desc: "A notable rock formation and cave area within the valley that local shepherds and hikers use for resting.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Wild Fruit Trees", desc: "Depending on the season, forage for wild walnuts, apples, and apricots growing naturally on the valley floor.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Cat Town Entrance", desc: "The quiet, rural town of Cat where the trek begins, offering a glimpse into authentic, non-touristy Cappadocian life.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Gulsehir Connection", desc: "The valley stretches out towards Gulsehir, connecting different historical micro-regions of Nevsehir.", img: "/images/valleys/love-valley.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Çat Valley",
    todoCards: [
      { icon: "🥾", title: "Guided Cat Trekking", price: 45, rating: "5.0", dur: "4 Hours", link: "/tours/hiking" },
      { icon: "👑", title: "Private VIP Hike", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🐦", title: "Bird & Nature Watching", price: 40, rating: "4.8", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "📸", title: "Untouched Photoshoot", price: 100, rating: "4.7", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "⛺", title: "Wild Camping Setup", price: 30, rating: "4.6", dur: "Overnight", link: "/book" },
      { icon: "🚙", title: "Off-Road Jeep Drop-off", price: 40, rating: "4.8", dur: "1 Hour", link: "/tours/jeep-safari" },
      { icon: "🐎", title: "Horseback Adventure", price: 50, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🍷", title: "Secluded Picnic", price: 30, rating: "4.9", dur: "2 Hours", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Çat Valley Experience Guide",
    expList: [
      { num: "01", title: "Hike the Full Length", desc: "The valley is 7 kilometers long and mostly flat. Dedicate a morning to walk its entirety to truly appreciate the changing cliff structures." },
      { num: "02", title: "Examine the Pigeon Lofts", desc: "Bring binoculars or a good camera zoom. The pigeon houses carved high up the walls are architectural marvels of early agriculture." },
      { num: "03", title: "Embrace the Silence", desc: "Turn off your phone and listen. This is one of the very few places in Cappadocia where you will not hear an engine or a crowd." },
      { num: "04", title: "Bring a Picnic", desc: "There are zero cafes or restaurants inside the canyon. Find a shaded spot under a walnut tree and enjoy a packed lunch." },
      { num: "05", title: "Explore Local Flora", desc: "The valley floor is rich with local herbs and wild fruit. In autumn, the changing colors of the leaves create a stunning contrast." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "3-4 Hours (Full Trek)", desc: "The standard time required to hike the 7km trail at a comfortable pace, taking photos of the high cliffs." },
      { day: "1-2 Hours (Short Walk)", desc: "Walk in from the Cat town entrance, see the most impressive dovecotes, and head back out." },
      { day: "Half Day (With Nevsehir)", desc: "Combine the valley hike with a visit to the newly opened Kayaşehir Underground City in Nevsehir center." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "The High Dovecotes", time: "Morning", for: "Architectural Scale", diff: "Medium", img: "/images/valleys/rose-valley.jpg" },
      { name: "The Endless Trail", time: "Daytime", for: "Canyon Depth", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "Fırın Asma Caves", time: "Midday", for: "Cave Exploration", diff: "Medium", img: "/images/churches/karanlik.jpg" },
      { name: "Cat Valley Entrance", time: "Afternoon", for: "Village Meets Canyon", diff: "Easy", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["💧 Bring Your Own Water (Crucial, no facilities)", "🥪 Pack a Picnic or Snacks", "☕ Local Teahouses in Cat Town (Start of Trail)", "🍽️ Restaurants in Nevsehir Center (15 mins away)"],
    stayList: ["📍 (No Hotels in the Valley)", "⛺ Wild Camping (Ideal for experienced campers)", "🏢 Business Hotels in Nevsehir Center (15 mins)", "💎 Cave Hotels in Goreme (30 mins drive)"],

    // 10. TRANSPORT
    transTitle: "How to Access Çat Valley?",
    transList: ["🚗 By Car: The easiest way. Drive from Nevsehir to the town of Cat (Çat Kasabası). The valley entrance is clearly marked just outside the town.", "🚕 By Taxi: Take a 15-minute taxi ride from Nevsehir city center to the trailhead.", "🚌 Public Transport: Minibuses run between Nevsehir center and Cat town. From the town square, it's a short walk to the valley entrance."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "The weather is perfect, the valley floor is green, and the wild fruit trees are blooming." },
      { name: "🍂 Autumn", desc: "Crisp trekking weather and beautiful yellowing leaves across the canyon." },
      { name: "☀️ Summer", desc: "It can get very hot, and shade is limited in some sections. Start the hike very early." },
      { name: "❄️ Winter", desc: "Desolate and cold. The stark grey cliffs against the white snow look dramatic but require good gear." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "This valley has absolutely no commercial facilities. No cafes, no toilets, no ticket booths. You must be self-sufficient.",
      "Bring plenty of water (at least 2 liters per person) if you plan to walk the full 7 kilometers.",
      "The trail is generally flat and easy to follow, making it less strenuous than Meskendir or Zemi, but it is long.",
      "You might encounter local shepherds grazing their flocks. They are friendly, but be respectful of their animals.",
      "Because it is so isolated, it's highly recommended to hike with a partner rather than completely alone."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Nevsehir Center", time: "15 min drive", link: "/destinations/nevsehir" },
      { name: "Kayasehir (Rock City)", time: "15 min drive", link: "/museums/kayasehir" },
      { name: "Gulsehir & St. Jean Church", time: "20 min drive", link: "/destinations/gulsehir" },
      { name: "Goreme Center", time: "30 min drive", link: "/destinations/goreme" },
      { name: "Uchisar Castle", time: "25 min drive", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Çat Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Çat Valley part of the daily tours?", a: "No. Cat Valley is completely off the standard Red, Green, or Blue Tour itineraries. You must arrange a private tour, drive, or take a taxi to get here." },
      { q: "Is it difficult to hike?", a: "The terrain itself is not difficult; it is mostly a flat walk through the canyon floor. However, the length (7km) and lack of facilities require good stamina and preparation." },
      { q: "Why are there so many pigeon houses?", a: "Historically, the local farmers relied heavily on pigeon manure (guano) to fertilize their vineyards and crops in the volcanic soil. Cat Valley had the perfect high, sheer cliffs to carve these massive lofts safely away from predators." }
    ],

    // 17. CTA
    ctaTitle: "Ready for Absolute Silence?",
    ctaDesc: "Book a private guided trek through Çat Valley and explore Cappadocia far from the crowds.",
    btnPlan: "BOOK A PRIVATE HIKE"
  },
  tr: {
    // 1. HERO
    heroSub: "Sessiz Güvercinlikler Kanyonu",
    heroDesc: "Turist kalabalıklarından tamamen uzak, devasa kaya uçurumlarına oyulmuş güvercinliklerle dolu 7 kilometrelik ıssız bir kanyon yürüyüşü.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "YÜRÜYÜŞ TURU REZERVE ET",
    statLoc: "Çat Kasabası, Nevşehir",
    statTime: "En İyi Zaman: Sabah",
    statStay: "Önerilen Süre: 3–4 Saat",

    // 2. ABOUT
    aboutTitle: "Çat Vadisi Hakkında",
    aboutTags: ["📍 Nevşehir Merkeze Yakın", "🕊️ Dev Uçurum Güvercinlikleri", "🥾 7 km Düz Trekking", "🤫 Mutlak Sessizlik", "🌲 Vahşi Flora", "🚜 Gözlerden Uzak", "🛡️ El Değmemiş Doğa"],
    aboutText1: "Çat Vadisi, Kapadokya bölgesinin turizmden en uzak, en bakir ve en izole kanyonlarından biridir. Nevşehir il merkezinin hemen dışındaki Çat Kasabası'ndan başlayan bu vadi; standart tur otobüslerinin, ATV konvoylarının ve kalabalık turist gruplarının radarından tamamen çıkmıştır. Size sadece doğanın sesini dinleyebileceğiniz saf bir yürüyüş deneyimi sunar.",
    aboutText2: "Vadi, adını yüksek kaya duvarlarına oyulmuş gösterişli ve çok katlı güvercinliklerinden alır. Uçhisar'daki Güvercinlik Vadisi çok popüler olsa da, Çat Vadisi'ndeki güvercinlikler adeta kuşlar için inşa edilmiş devasa 'gökdelenleri' andırır. 7 kilometrelik vadi tabanında yürümek, doğayla baş başa kalmak ve kalabalıklardan kaçmak isteyen gerçek doğa tutkunları için eşsiz bir fırsattır.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Dev Güvercinlik Duvarları", desc: "Kanyonun sarp uçurumlarına yüzlerce yuva şeklinde oyulmuş, tarihi tarım kültürünün mirası dev güvercinlikler.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "7 Kilometrelik Kanyon Yolu", desc: "Kuru bir dere yatağını takip ederek vadinin derinliklerine ilerleyen, sessiz ve nispeten düz yürüyüş parkuru.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Fırın Asma Mevkii", desc: "Vadinin içinde yer alan, yerel çobanların ve yürüyüşçülerin dinlenmek için kullandığı doğal kaya ve mağara oluşumu.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Yabani Meyve Ağaçları", desc: "Vadi tabanında kendi kendine yetişen ve mevsimine göre toplayabileceğiniz ceviz, elma ve erik ağaçları.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Çat Kasabası Girişi", desc: "Yürüyüşün başladığı, Kapadokya'nın turistik olmayan, gerçek kırsal Anadolu yaşamını görebileceğiniz sakin kasaba.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Gülşehir Bağlantısı", desc: "Vadinin Nevşehir'in farklı tarihi mikro-bölgelerini birbirine bağlayarak Gülşehir (Açıksaray) yönüne doğru uzanması.", img: "/images/valleys/love-valley.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Çat Vadisi Deneyimleri",
    todoCards: [
      { icon: "🥾", title: "Rehberli Çat Yürüyüşü", price: 45, rating: "5.0", dur: "4 Saat", link: "/tours/hiking" },
      { icon: "👑", title: "VIP Özel Trekking", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "🐦", title: "Doğa & Kuş Gözlemi", price: 40, rating: "4.8", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "📸", title: "İzole Dış Çekim", price: 100, rating: "4.7", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "⛺", title: "Vahşi Doğa Kampı", price: 30, rating: "4.6", dur: "1 Gece", link: "/book" },
      { icon: "🚙", title: "Off-Road Araçla Bırakma", price: 40, rating: "4.8", dur: "1 Saat", link: "/tours/jeep-safari" },
      { icon: "🐎", title: "Sessiz Atlı Safari", price: 50, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🍷", title: "Kanyonda Özel Piknik", price: 30, rating: "4.9", dur: "2 Saat", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Çat Vadisi Deneyim Rehberi",
    expList: [
      { num: "01", title: "Tüm Parkuru Yürüyün", desc: "Vadi 7 km uzunluğundadır ve tabanı düzdür. Değişen kaya yapılarını ve dev güvercinlikleri görmek için tam bir sabahınızı buraya ayırın." },
      { num: "02", title: "Güvercinlikleri İnceleyin", desc: "Yanınızda dürbün veya iyi zoom yapan bir kamera getirin. Uçurumlara oyulmuş bu yapılar erken dönem tarım mimarisinin harikalarıdır." },
      { num: "03", title: "Sessizliği Kucaklayın", desc: "Telefonunuzu kapatın ve dinleyin. Burası Kapadokya'da motor veya insan kalabalığı sesi duymayacağınız çok nadir yerlerden biridir." },
      { num: "04", title: "Piknik Yapın", desc: "İçeride hiçbir tesis yoktur. Yanınıza yemeğinizi alın, büyük bir ceviz ağacının gölgesinde oturup kendi pikniğinizi yapın." },
      { num: "05", title: "Florayı Keşfedin", desc: "Vadi tabanı yerel otlar ve yabani meyvelerle doludur. Sonbaharda yaprakların sararmasıyla kanyon muazzam bir renge bürünür." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "3-4 Saat (Tam Yürüyüş)", desc: "7 kilometrelik parkuru yavaş bir tempoda, fotoğraf çekerek ve mola vererek baştan sona yürümek için." },
      { day: "1-2 Saat (Kısa Yürüyüş)", desc: "Çat kasabası girişinden vadiye girip, en etkileyici dev güvercinlikleri gördükten sonra geri dönmek için." },
      { day: "Yarım Gün (Nevşehir ile)", desc: "Yürüyüşün ardından Nevşehir merkezde yeni açılan devasa Kayaşehir (Yeraltı Şehri) kompleksini gezebilirsiniz." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Dev Güvercinlik Duvarları", time: "Sabah", for: "Büyüklük ve Mimari", diff: "Orta", img: "/images/valleys/rose-valley.jpg" },
      { name: "Sonsuz Kanyon Yolu", time: "Gündüz", for: "Derinlik Perspektifi", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Fırın Asma Kayalıkları", time: "Öğle", for: "Mağara Keşfi", diff: "Orta", img: "/images/churches/karanlik.jpg" },
      { name: "Çat Kasabası Girişi", time: "Akşamüstü", for: "Kırsal Yaşam", diff: "Kolay", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["💧 Suyunuzu Yanınızda Getirin (İçeride tesis yoktur)", "🥪 Kumanya veya Piknik Hazırlayın", "☕ Çat Kasabası Köy Kahveleri (Yürüyüş öncesi/sonrası)", "🍽️ Nevşehir Merkez Restoranları (15 dk uzaklıkta)"],
    stayList: ["📍 (Vadi içinde otel bulunmaz)", "⛺ Vahşi Kamp (Sadece tecrübeli kampçılar için)", "🏢 Nevşehir Merkez Şehir Otelleri (15 dk)", "💎 Göreme Mağara Otelleri (30 dk sürüş)"],

    // 10. TRANSPORT
    transTitle: "Çat Vadisi'ne Nasıl Gidilir?",
    transList: ["🚗 Kendi Aracınızla: En kolay yoldur. Nevşehir merkezden Çat Kasabası'na sürün. Kasabanın hemen dışındaki vadi girişi tabelalarla belirtilmiştir.", "🚕 Taksi İle: Nevşehir merkezden veya terminalden taksiyle 10-15 dakikada yürüyüş başlangıcına ulaşabilirsiniz.", "🚌 Toplu Taşıma: Nevşehir merkezden Çat kasabasına giden köy minibüslerini kullanarak kasaba meydanında inebilir, girişe kısa bir yürüyüşle ulaşabilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Hava mükemmeldir, vadi tabanı yeşerir ve meyve ağaçları çiçek açar." },
      { name: "🍂 Sonbahar", desc: "Uzun doğa yürüyüşü (trekking) için en ideal serin hava ve sararan yaprak manzaraları." },
      { name: "☀️ Yaz", desc: "Çok sıcak olabilir ve vadi geniş olduğu için bazı yerlerde gölge azdır. Yürüyüşe mutlaka erken başlayın." },
      { name: "❄️ Kış", desc: "Issız ve soğuktur. Beyaz kar altındaki gri uçurumlar çok dramatik görünür ancak hazırlıklı olmak gerekir." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Bu vadide kesinlikle hiçbir ticari tesis yoktur. Kafe, tuvalet veya gişe bulamazsınız. Tamamen kendi kendinize yetmelisiniz.",
      "7 kilometrelik parkurun tamamını yürümeyi planlıyorsanız, kişi başı en az 2 litre su bulundurduğunuzdan emin olun.",
      "Zemin genelde düzdür ve takip etmesi kolaydır. Zemi veya Meskendir kadar engebeli değildir ama mesafe olarak uzundur.",
      "Vadi içinde sürülerini otlatan yerel çobanlarla karşılaşabilirsiniz. Köpeklerine dikkat edin ve hayvanları ürkütmeyin.",
      "Çok izole ve sakin bir yer olduğu için, tamamen tek başınıza olmak yerine bir arkadaşınızla veya grupla yürümeniz tavsiye edilir."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Nevşehir Merkez", time: "15 dk araçla", link: "/destinations/nevsehir" },
      { name: "Kayaşehir (Yeraltı Şehri)", time: "15 dk araçla", link: "/museums/kayasehir" },
      { name: "Gülşehir & St. Jean", time: "20 dk araçla", link: "/destinations/gulsehir" },
      { name: "Göreme Merkez", time: "30 dk araçla", link: "/destinations/goreme" },
      { name: "Uçhisar Kalesi", time: "25 dk araçla", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Çat Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Çat Vadisi günlük turlara (Kırmızı/Yeşil) dahil mi?", a: "Hayır. Çat Vadisi standart Kırmızı, Yeşil veya Mavi tur rotalarının tamamen dışındadır. Buraya gelmek için kendi aracınızı kullanmalı, taksi tutmalı veya özel bir tur ayarlamalısınız." },
      { q: "Yürüyüş parkuru zor mu?", a: "Arazinin kendisi zor değildir; kanyon tabanı boyunca genellikle düz bir yürüyüştür. Ancak 7 kilometrelik uzunluğu ve hiçbir mola tesisinin olmaması nedeniyle iyi bir dayanıklılık gerektirir." },
      { q: "Neden bu kadar çok güvercinlik var?", a: "Tarihsel olarak bölge çiftçileri, volkanik toprakta yetişen bağlarını gübrelemek için güvercin gübresine muhtaçtı. Çat Vadisi'nin sarp ve çok yüksek uçurumları, bu güvercinlikleri yırtıcı hayvanlardan uzak ve güvenli bir şekilde inşa etmek için kusursuzdu." }
    ],

    // 17. CTA
    ctaTitle: "Mutlak Sessizliğe Hazır Mısın?",
    ctaDesc: "Özel rehberli bir Çat Vadisi yürüyüşü rezerve edin ve Kapadokya'yı kalabalıklardan çok uzakta keşfedin.",
    btnPlan: "ÖZEL YÜRÜYÜŞ REZERVE ET"
  },
  es: {
    heroSub: "El Cañón de los Palomares Silenciosos",
    heroDesc: "Escapa de las multitudes y recorre un cañón completamente aislado de 7 km flanqueado por masivos palomares en los acantilados.",
    btnExplore: "EXPLORAR EL CAÑÓN",
    btnBookHero: "RESERVAR TREKKING PRIVADO",
    statLoc: "Pueblo de Çat, Nevşehir",
    statTime: "Mejor Época: Mañana",
    statStay: "Tiempo Rec: 3–4 Horas",

    aboutTitle: "Sobre el Valle de Çat",
    aboutTags: ["📍 Cerca de Nevşehir", "🕊️ Palomares Gigantes", "🥾 Trekking Llano de 7km", "🤫 Silencio Absoluto", "🌲 Flora Salvaje", "🚜 Fuera de Ruta", "🛡️ Naturaleza Intacta"],
    aboutText1: "El Valle de Çat (Çat Vadisi) es uno de los cañones más apartados y vírgenes de Capadocia. Situado cerca del pueblo de Çat, a las afueras de la ciudad central de Nevşehir, se mantiene completamente fuera del radar de los autobuses turísticos y grandes grupos. Ofrece una experiencia de senderismo pura y sin perturbaciones.",
    aboutText2: "El valle es famoso por sus espectaculares palomares. Mientras que el Valle de las Palomas en Uchisar es muy conocido, el Valle de Çat cuenta con enormes palomares de varios pisos excavados directamente en las altas paredes de los acantilados, creando un efecto de 'rascacielos' para aves. Caminar por su sendero de 7 km proporciona una conexión íntima con la naturaleza, sin ruido de ATVs ni multitudes.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "La Gran Pared de Palomares", desc: "Mira hacia los altos acantilados para ver cientos de agujeros para palomas meticulosamente tallados.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "El Sendero de 7km", desc: "Un camino de trekking relativamente plano y ancho que sigue el lecho de un río seco por el desfiladero.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Cuevas de Fırın Asma", desc: "Una notable formación rocosa y zona de cuevas que pastores y senderistas usan para descansar.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Árboles Frutales", desc: "Dependiendo de la temporada, recoge nueces, manzanas y albaricoques que crecen de forma natural.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Entrada del Pueblo Çat", desc: "El tranquilo pueblo rural donde comienza el trekking, ofreciendo un vistazo a la vida local.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Conexión a Gülşehir", desc: "El valle se extiende hacia Gülşehir, conectando diferentes micro-regiones históricas de Nevşehir.", img: "/images/valleys/love-valley.jpg", link: "#" }
    ],

    todoTitle: "Experiencias en Çat",
    todoCards: [
      { icon: "🥾", title: "Trekking Guiado", price: 45, rating: "5.0", dur: "4 Horas", link: "/tours/hiking" },
      { icon: "👑", title: "Caminata VIP Privada", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🐦", title: "Observación de Aves", price: 40, rating: "4.8", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "📸", title: "Sesión de Fotos Aislada", price: 100, rating: "4.7", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "⛺", title: "Acampada Libre", price: 30, rating: "4.6", dur: "1 Noche", link: "/book" },
      { icon: "🚙", title: "Drop-off en Jeep 4x4", price: 40, rating: "4.8", dur: "1 Hora", link: "/tours/jeep-safari" },
      { icon: "🐎", title: "Aventura a Caballo", price: 50, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🍷", title: "Picnic Aislado", price: 30, rating: "4.9", dur: "2 Horas", link: "/book" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Recorre Todo el Cañón", desc: "El valle tiene 7 km de longitud y es mayormente plano. Dedica una mañana a recorrerlo entero para apreciar los acantilados." },
      { num: "02", title: "Examina los Palomares", desc: "Lleva prismáticos o buen zoom. Las casas de palomas talladas en lo alto son maravillas arquitectónicas agrícolas." },
      { num: "03", title: "Abraza el Silencio", desc: "Apaga el móvil y escucha. Este es uno de los pocos lugares en Capadocia donde no escucharás motores ni multitudes." },
      { num: "04", title: "Lleva un Picnic", desc: "No hay cafés ni restaurantes. Busca la sombra de un nogal y disfruta de tu propio almuerzo empaquetado." },
      { num: "05", title: "Explora la Flora Local", desc: "El suelo del valle es rico en hierbas y frutos silvestres. En otoño, los colores de las hojas crean un contraste impresionante." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "3-4 Horas (Trekking Completo)", desc: "El tiempo estándar para recorrer los 7 km a un ritmo cómodo, tomando fotos de los altos acantilados." },
      { day: "1-2 Horas (Paseo Corto)", desc: "Entra desde el pueblo de Çat, observa los palomares más impresionantes y vuelve a salir." },
      { day: "Medio Día (Con Nevşehir)", desc: "Combina la caminata con una visita a la recién abierta Ciudad Subterránea de Kayaşehir en el centro de Nevşehir." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Palomares en las Alturas", time: "Mañana", for: "Escala Arquitectónica", diff: "Medio", img: "/images/valleys/rose-valley.jpg" },
      { name: "El Sendero Interminable", time: "Día", for: "Profundidad del Cañón", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Cuevas de Fırın Asma", time: "Mediodía", for: "Exploración de Cuevas", diff: "Medio", img: "/images/churches/karanlik.jpg" },
      { name: "Entrada del Valle Çat", time: "Tarde", for: "Contraste Pueblo-Cañón", diff: "Fácil", img: "/images/destinations/uchisar.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["💧 Trae tu propia agua (Vital, sin instalaciones)", "🥪 Lleva Picnic o Snacks", "☕ Casas de Té en el Pueblo Çat (Inicio)", "🍽️ Restaurantes en el centro de Nevşehir (A 15 min)"],
    stayList: ["📍 (Sin Hoteles en el Valle)", "⛺ Acampada Libre (Ideal para expertos)", "🏢 Hoteles Urbanos en Nevşehir (A 15 min)", "💎 Hoteles Cueva en Göreme (A 30 min)"],

    transTitle: "¿Cómo Acceder al Valle de Çat?",
    transList: ["🚗 En Coche: La forma más fácil. Conduce desde Nevşehir al pueblo de Çat. La entrada está claramente marcada justo a las afueras.", "🚕 En Taxi: Un viaje de 15 minutos en taxi desde el centro de Nevşehir hasta el inicio del sendero.", "🚌 Transporte Público: Minibuses operan entre el centro de Nevşehir y el pueblo de Çat. Desde la plaza, es un corto paseo hasta la entrada."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Primavera", desc: "El clima es perfecto, el suelo está verde y los árboles frutales florecen." },
      { name: "🍂 Otoño", desc: "Clima fresco para el trekking y hermosas hojas amarillentas en todo el cañón." },
      { name: "☀️ Verano", desc: "Hace mucho calor y la sombra es escasa. Empieza la caminata muy temprano." },
      { name: "❄️ Invierno", desc: "Desolado y frío. Los acantilados grises contra la nieve lucen dramáticos pero requieren buen equipo." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Este valle no tiene absolutamente ninguna instalación comercial. Ni cafés, ni baños. Debes ser autosuficiente.",
      "Lleva mucha agua (al menos 2 litros por persona) si planeas caminar los 7 kilómetros completos.",
      "El sendero es llano y fácil de seguir, pero su longitud requiere resistencia.",
      "Puedes encontrarte pastores locales. Son amables, pero respeta a sus animales y perros guardianes.",
      "Al estar tan aislado, se recomienda encarecidamente caminar acompañado en lugar de hacerlo completamente solo."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Centro de Nevşehir", time: "15 min en coche", link: "/destinations/nevsehir" },
      { name: "Kayaşehir (Ciudad Roca)", time: "15 min en coche", link: "/museums/kayasehir" },
      { name: "Gülşehir y San Juan", time: "20 min en coche", link: "/destinations/gulsehir" },
      { name: "Centro de Göreme", time: "30 min en coche", link: "/destinations/goreme" },
      { name: "Castillo de Uchisar", time: "25 min en coche", link: "/destinations/uchisar" }
    ],

    popToursTitle: "Tours que Visitan el Valle de Çat",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Está el Valle de Çat incluido en los tours diarios?", a: "No. El Valle de Çat está completamente fuera de los itinerarios estándar de los Tours Rojo, Verde o Azul. Debes ir por tu cuenta o contratar un tour privado." },
      { q: "¿Es difícil la caminata?", a: "El terreno no es difícil; es un paseo mayormente plano por el fondo del cañón. Sin embargo, su longitud (7km) y la falta de instalaciones requieren buena preparación." },
      { q: "¿Por qué hay tantas casas de palomas?", a: "Históricamente, los agricultores dependían del estiércol de paloma (guano) para fertilizar el suelo volcánico. El Valle de Çat tenía los acantilados altos perfectos para tallar estos refugios lejos de los depredadores." }
    ],

    ctaTitle: "¿Listo para el Silencio Absoluto?",
    ctaDesc: "Reserva un trekking guiado privado por el Valle de Çat y explora Capadocia lejos de las multitudes.",
    btnPlan: "RESERVAR CAMINATA PRIVADA"
  }
};

export default function CatValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = CAT_DICT[aktifDil] || CAT_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-stone-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Cat Valley Cappadocia Dovecotes" fill priority unoptimized className="object-cover opacity-50 grayscale-[20%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-stone-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            ÇAT VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-stone-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-500 hover:scale-105 transition-all shadow-xl shadow-stone-600/30">
              {t.btnExplore}
            </a>
            <Link href="/tours/private-tours" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
          <div className="w-16 h-1.5 bg-stone-500 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-stone-500 pl-4">
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
            <div className="w-16 h-1.5 bg-stone-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-stone-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-stone-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-stone-600 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-stone-50/50 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-stone-500 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
                <div className="text-3xl font-black text-stone-500 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-stone-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-stone-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-stone-200 hover:bg-stone-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
                <div className="group bg-[#F8FAFC] border border-slate-200 rounded-3xl overflow-hidden h-full flex flex-col shadow-sm">
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
          <div className="w-16 h-1.5 bg-stone-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-stone-400">Where to Stay?</h3>
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
                <li key={i} className="text-lg font-medium text-slate-700 border-b border-slate-200 pb-4">{item}</li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* 10. TRANSPORT */}
      <section className="py-24 bg-stone-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/private-tours" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-600 transition-all">
              Book Private Guide &rarr;
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
                <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
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
                <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-200 text-slate-700 font-medium">
                  <span className="text-stone-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-stone-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-stone-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[3]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-[0_0_35px_rgba(120,113,108,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-stone-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-200 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Çat Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Çat Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.662235948348!2d34.646!3d38.604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a71d604b9c1d1%3A0x6bcfd30a6c08c!2s%C3%87at%20Vadisi!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-stone-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-stone-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/private-tours" className="bg-stone-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}