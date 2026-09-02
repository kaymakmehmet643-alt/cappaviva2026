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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - LOVE VALLEY
// =======================================================
const LOVE_VALLEY_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Most Iconic Fairy Chimneys",
    heroDesc: "Famous for its unique rock formations and breathtaking hot air balloon views at sunrise, Love Valley is the ultimate Cappadocian landscape.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A HIKE OR ATV",
    statLoc: "Goreme, Türkiye",
    statTime: "Best Time: Sunrise",
    statStay: "Rec. Time: 2–3 Hours",

    // 2. ABOUT
    aboutTitle: "About Love Valley",
    aboutTags: ["📍 Goreme Outskirts", "🎈 Prime Sunrise Spot", "⛰️ Iconic Fairy Chimneys", "🥾 Baglidere Trekking", "🏍️ ATV Safari Route", "📸 Panorama Point", "🌅 Aşıklar Tepesi"],
    aboutText1: "Love Valley (officially part of the Baglidere Valley) is arguably the most famous and photographed landscape in Cappadocia. Its name comes from the distinctly phallic-shaped fairy chimneys that tower over the valley floor, some reaching up to 40 meters high.",
    aboutText2: "The valley offers two entirely different experiences: You can either hike through the bottom of the valley, walking right at the base of these giant pillars, or you can drive to the 'Love Valley Panorama' (Aşıklar Tepesi) at the top of the canyon to look down upon the majestic landscape as hot air balloons float over it.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Giant Fairy Chimneys", desc: "Walk right to the base of the massive pillar-like formations in the valley floor.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Love Valley Panorama", desc: "The famous viewing point at the top of the cliff, perfect for photos with the swing.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Sunrise Balloon Flight", desc: "Love Valley is the main flight path for the morning hot air balloons.", img: "/images/destinations/goreme.jpg", link: "/tours/balloon" },
      { name: "Baglidere Trekking Route", desc: "A beautiful, uncrowded 5km hiking trail connecting Goreme to Uchisar.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "The Heart Swings", desc: "Iconic photo spots at the panorama viewpoint, specifically designed for couples.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "White Valley Connect", desc: "Love Valley naturally connects to the stunning White Valley as you hike uphill.", img: "/images/valleys/white-valley.jpg", link: "/valleys/white-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Love Valley",
    todoCards: [
      { icon: "🎈", title: "Sunrise Balloon Flight", price: 160, rating: "5.0", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🏍️", title: "ATV Safari Tour", price: 35, rating: "4.8", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🥾", title: "Guided Trekking", price: 40, rating: "4.9", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🚘", title: "Classic Car at Sunrise", price: 80, rating: "4.9", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "📸", title: "Flying Dress Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Horseback Riding", price: 40, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.8", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Love Valley Experience Guide",
    expList: [
      { num: "01", title: "Watch the Balloons at Sunrise", desc: "Arrive at the panorama point before dawn. As the sun rises, hundreds of balloons drift directly over the fairy chimneys." },
      { num: "02", title: "Hike the Valley Floor", desc: "Start from the Goreme-Avanos road and hike 4km through the bottom of the valley, walking among the giant pillars." },
      { num: "03", title: "Take a Classic Car Tour", desc: "Rent a vintage car and drive to the viewing point for a nostalgic and incredibly photogenic sunrise experience." },
      { num: "04", title: "Join an ATV Safari", desc: "Feel the adrenaline as you ride a quad bike through the dusty trails of the valley during the golden hour." },
      { num: "05", title: "Sip Turkish Tea at the Edge", desc: "Sit at one of the small local cafes at the panorama point and enjoy a hot tea with an unmatched view." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1 Hour (Quick Stop)", desc: "Drive to the Love Valley Panorama point, take photos, and have a quick tea." },
      { day: "2-3 Hours (Hiking)", desc: "Hike the entire length of the valley floor from Goreme towards Uchisar." },
      { day: "Early Morning (Sunrise)", desc: "Dedicate your dawn hours here specifically for the hot air balloon spectacle." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "The Heart Swing", time: "Sunrise", for: "Balloons & Couples", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "Base of the Chimneys", time: "Morning", for: "Scale & Perspective", diff: "Medium", img: "/images/valleys/love-valley.jpg" },
      { name: "Classic Car at the Edge", time: "Sunrise", for: "Vintage Vibes", diff: "Easy", img: "/images/destinations/goreme.jpg" },
      { name: "White Valley Connect", time: "Afternoon", for: "Nature & Hiking", diff: "Hard", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY (Valley specific)
    eatStayTitle: "Refreshments & Nearby Spots",
    eatList: ["☕ Panorama Cliff Cafés", "🥤 Fresh Pomegranate Juice Stands", "🍿 Small Gözleme Tents", "🍽️ Fine Dining in Nearby Goreme"],
    stayList: ["📍 (No Hotels in the Valley)", "💎 Goreme Cave Hotels (5 mins away)", "🏰 Uchisar Luxury Suites (10 mins away)", "🏕️ Camping (Permit Required)"],

    // 10. TRANSPORT
    transTitle: "How to Access Love Valley?",
    transList: ["🚗 To the Panorama Point: Drive from Goreme towards Uchisar, turn right at the 'Aşıklar Tepesi' sign.", "🥾 To the Valley Floor (Hike): The entrance is on the Goreme-Avanos road, near the carpet factories.", "🏍️ Join an ATV or Horse Safari from Goreme for guided access."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌅 Sunrise", desc: "The ultimate time. Hundreds of balloons fill the sky." },
      { name: "🌇 Sunset", desc: "Golden light hits the fairy chimneys perfectly." },
      { name: "🌸 Spring", desc: "Wildflowers bloom at the bottom of the valley." },
      { name: "❄️ Winter", desc: "Snow-capped fairy chimneys look magical." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "The 'Panorama Point' and the 'Valley Floor' are two different locations. You cannot easily drive your car down from the panorama point.",
      "If you are hiking the valley floor in summer, bring plenty of water. It gets extremely hot and there are very few shaded areas.",
      "During sunrise, the panorama point gets very crowded with tourist buses and classic cars. Arrive early for the best photo spot.",
      "The dirt roads leading to the valley can be very dusty due to ATV tours in the late afternoon.",
      "The hike through Baglidere (Love Valley) connects directly to White Valley, ending right beneath Uchisar Castle."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Valleys",
    nearbyList: [
      { name: "White Valley", time: "Connected", link: "/valleys/white-valley" },
      { name: "Pigeon Valley", time: "10 min", link: "/valleys/pigeon-valley" },
      { name: "Goreme Center", time: "5 min", link: "/destinations/goreme" },
      { name: "Uchisar", time: "10 min", link: "/destinations/uchisar" },
      { name: "Red Valley", time: "15 min", link: "/valleys/red-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Love Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Why is it called Love Valley?", a: "The valley is famous for its pillar-like fairy chimneys, which have a very distinct phallic shape. Over time, locals and tourists humorously named it Love Valley." },
      { q: "Is the Love Valley hike difficult?", a: "The hike through the valley floor is mostly flat and relatively easy, making it suitable for beginners. It takes about 2 hours to walk the 4.5km trail." },
      { q: "Can I see hot air balloons from here?", a: "Yes! Love Valley Panorama (Aşıklar Tepesi) is arguably the best place in all of Cappadocia to watch the hot air balloons at sunrise." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Love Valley?",
    ctaDesc: "Book your sunrise classic car tour, ATV safari, or guided hike today.",
    btnPlan: "BOOK YOUR EXPERIENCE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın En İkonik Peribacaları",
    heroDesc: "Eşsiz kaya oluşumları ve gün doğumundaki nefes kesici balon manzaralarıyla Aşk Vadisi (Bağlıdere), Kapadokya'nın en popüler noktasıdır.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "TUR REZERVASYONU",
    statLoc: "Göreme, Türkiye",
    statTime: "En İyi Zaman: Gün Doğumu",
    statStay: "Önerilen Süre: 2–3 Saat",

    // 2. ABOUT
    aboutTitle: "Aşk Vadisi Hakkında",
    aboutTags: ["📍 Göreme Sınırlarında", "🎈 En İyi Balon İzleme Noktası", "⛰️ İkonik Peribacaları", "🥾 Bağlıdere Yürüyüş Rotası", "🏍️ ATV Safari Parkuru", "📸 Aşıklar Tepesi", "🌅 Gün Doğumu"],
    aboutText1: "Aşk Vadisi (resmi adıyla Bağlıdere Vadisi), Kapadokya'nın açık ara en ünlü ve en çok fotoğrafı çekilen vadisidir. Adını, vadi tabanından yükselen ve boyları 40 metreyi bulan son derece belirgin (fallik) şekilli peribacalarından alır.",
    aboutText2: "Vadi iki tamamen farklı deneyim sunar: Ya vadi tabanına inip bu devasa sütunların hemen dibinde doğa yürüyüşü (trekking) yapabilirsiniz, ya da kanyonun en üst noktasında bulunan 'Aşıklar Tepesi'ne (Panorama) çıkarak vadinin üzerinden süzülen yüzlerce sıcak hava balonunu kuşbakışı izleyebilirsiniz.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Devasa Peribacaları", desc: "Vadi tabanında yer alan devasa sütun şeklindeki peribacalarının hemen dibinde yürüyün.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Aşıklar Tepesi (Panorama)", desc: "Vadinin en üstündeki seyir terası. Kalpli salıncaklar ve balon manzarası için kusursuzdur.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Gün Doğumu Balon Manzarası", desc: "Aşk Vadisi, sabah kalkan sıcak hava balonlarının ana uçuş rotalarından biridir.", img: "/images/destinations/goreme.jpg", link: "/tours/balloon" },
      { name: "Bağlıdere Trekking Rotası", desc: "Göreme'den başlayıp Uçhisar'a kadar uzanan 5 kilometrelik doğa harikası yürüyüş yolu.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Fotoğraf Çekim Noktaları", desc: "Seyir terasında çiftler için özel olarak hazırlanmış salıncaklar ve otantik dekorlar.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Beyaz Vadi Bağlantısı", desc: "Aşk Vadisi tabanından yukarı doğru yürüdüğünüzde doğal olarak muazzam Beyaz Vadi'ye geçersiniz.", img: "/images/valleys/white-valley.jpg", link: "/valleys/white-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Aşk Vadisi Deneyimleri",
    todoCards: [
      { icon: "🎈", title: "Balon Uçuşu", price: 160, rating: "5.0", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🏍️", title: "ATV Safari Turu", price: 35, rating: "4.8", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🥾", title: "Rehberli Vadi Yürüyüşü", price: 40, rating: "4.9", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🚘", title: "Klasik Araç ile Gün Doğumu", price: 80, rating: "4.9", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "📸", title: "Uçan Elbise Fotoğraf Çekimi", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Atlı Safari", price: 40, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🚙", title: "Jeep Safari", price: 45, rating: "4.8", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "🔴", title: "Kırmızı Tur (Red Tour)", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Aşk Vadisi Deneyim Rehberi",
    expList: [
      { num: "01", title: "Gün Doğumunda Balonları İzleyin", desc: "Güneş doğmadan önce Aşıklar Tepesi'ne gidin. Yüzlerce balon vadinin ve sizin tam üzerinizden geçecektir." },
      { num: "02", title: "Vadi Tabanında Yürüyüş Yapın", desc: "Göreme-Avanos yolundaki girişten başlayarak, dev peribacalarının arasında 4 km boyunca yürüyün." },
      { num: "03", title: "Klasik Araç Kiralayın", desc: "Üstü açık eski model bir araçla seyir terasına çıkarak nostaljik ve inanılmaz fotojenik bir anı yakalayın." },
      { num: "04", title: "ATV Safarisine Katılın", desc: "Gün batımına doğru (Golden Hour) vadinin tozlu yollarında ATV motorlarla adrenalin dolu bir tura çıkın." },
      { num: "05", title: "Uçurumun Kenarında Çay İçin", desc: "Aşıklar Tepesi'ndeki küçük salaş kafelerde oturup, vadinin eşsiz manzarasına karşı Türk çayınızı yudumlayın." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1 Saat (Kısa Mola)", desc: "Sadece Aşıklar Tepesi seyir terasına çıkıp fotoğraf çekilmek ve manzarayı izlemek için yeterlidir." },
      { day: "2-3 Saat (Doğa Yürüyüşü)", desc: "Vadi tabanına inip, Göreme'den Uçhisar'a doğru tüm kanyonu yürümek isteyenler için." },
      { day: "Sabahın Erken Saatleri", desc: "Sıcak hava balonu şölenini izlemek için kesinlikle gün doğumunda burada olmalısınız." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Kalpli Salıncak (Seyir Terası)", time: "Gün Doğumu", for: "Çiftler ve Balonlar", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Peribacalarının Dibi", time: "Sabah", for: "Büyüklük ve Perspektif", diff: "Orta", img: "/images/valleys/love-valley.jpg" },
      { name: "Klasik Araç ile Uçurum", time: "Gün Doğumu", for: "Nostaljik Konsept", diff: "Kolay", img: "/images/destinations/goreme.jpg" },
      { name: "Beyaz Vadi Birleşimi", time: "Öğleden Sonra", for: "Doğa ve Yürüyüş", diff: "Zor", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY (Valley specific)
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["☕ Aşıklar Tepesi Kafeleri", "🥤 Taze Nar ve Portakal Suyu Standları", "🍿 Küçük Gözleme Çadırları", "🍽️ Göreme Merkez Restoranları (5 dk)"],
    stayList: ["📍 (Vadi içinde otel bulunmaz)", "💎 Göreme Mağara Otelleri (5 dk uzaklıkta)", "🏰 Uçhisar Lüks Süitleri (10 dk uzaklıkta)", "🏕️ Vadi Tabanında Kamp (İzin Gerekli)"],

    // 10. TRANSPORT
    transTitle: "Aşk Vadisi'ne Nasıl Gidilir?",
    transList: ["🚗 Seyir Terasına (Aşıklar Tepesi): Göreme'den Uçhisar'a doğru giderken 'Aşıklar Tepesi' tabelasından sağa sapın.", "🥾 Vadi Tabanına (Yürüyüş İçin): Göreme-Avanos yolu üzerinde, halı fabrikalarını geçtikten sonraki toprak yoldan girilir.", "🏍️ ATV veya At Turu: Göreme'deki tur şirketleriyle anlaşarak vadiye direkt rehberli geçiş yapabilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌅 Gün Doğumu", desc: "Açık ara en iyi zaman. Gökyüzü balonlarla ve harika renklerle dolar." },
      { name: "🌇 Gün Batımı", desc: "Kayaların üzerine vuran kızıl ışık fotoğraflar için kusursuzdur." },
      { name: "🌸 İlkbahar", desc: "Vadi tabanında rengarenk kır çiçekleri açar." },
      { name: "❄️ Kış", desc: "Karlar altındaki peribacaları adeta bir masal diyarını andırır." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Dikkat: 'Aşıklar Tepesi Seyir Terası' ile 'Vadi Tabanı (Yürüyüş Alanı)' araçla birbirine doğrudan bağlı değildir. Tepeden aşağı araba ile inemezsiniz.",
      "Yaz aylarında vadi tabanında yürüyecekseniz yanınıza bol su alın. İçeride gölgelik alan ve tesis neredeyse hiç yoktur.",
      "Gün doğumunda seyir terası tur otobüsleri ve klasik araçlarla çok kalabalık olur. İyi bir fotoğraf noktası kapmak için erkenden gidin.",
      "Vadiye inen toprak yollar, özellikle gün batımına doğru yoğunlaşan ATV turları yüzünden çok tozlu olabilir.",
      "Bağlıdere (Aşk) Vadisi'nde başlayan yürüyüş, muazzam Beyaz Vadi (White Valley) ile birleşerek Uçhisar Kalesi'nin hemen altında son bulur."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Vadileri Keşfedin",
    nearbyList: [
      { name: "Beyaz Vadi", time: "Bağlantılı", link: "/valleys/white-valley" },
      { name: "Güvercinlik Vadisi", time: "10 dk", link: "/valleys/pigeon-valley" },
      { name: "Göreme Merkez", time: "5 dk", link: "/destinations/goreme" },
      { name: "Uçhisar", time: "10 dk", link: "/destinations/uchisar" },
      { name: "Kızıl Vadi", time: "15 dk", link: "/valleys/red-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Aşk Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Neden Aşk Vadisi (Love Valley) deniyor?", a: "Vadide yer alan devasa peribacalarının oldukça belirgin olan (fallik) yapısından dolayı hem yereller hem de turistler buraya mizahi bir şekilde Aşk Vadisi adını takmıştır." },
      { q: "Vadi yürüyüşü zor mu?", a: "Vadi tabanındaki yürüyüş rotası genel olarak düz ve oldukça kolaydır. Başlangıç seviyesindeki yürüyüşçüler için uygundur. Tüm parkuru yürümek yaklaşık 2 saat sürer." },
      { q: "Buradan sıcak hava balonları izlenir mi?", a: "Kesinlikle! Aşk Vadisi'nin tepesindeki seyir alanı (Aşıklar Tepesi), Kapadokya'da balonları izlemek ve fotoğraflamak için açık ara en popüler ve en iyi konumdur." }
    ],

    // 17. CTA
    ctaTitle: "Aşk Vadisi'ni Keşfetmeye Hazır Mısın?",
    ctaDesc: "Balon turları, klasik araç kiralama veya ATV safari için hemen rezervasyon yap.",
    btnPlan: "DENEYİMİNİ REZERVE ET"
  },
  es: {
    heroSub: "Las Chimeneas de Hadas Más Icónicas",
    heroDesc: "Famoso por sus formaciones rocosas únicas y vistas de globos al amanecer, el Valle del Amor es el paisaje definitivo de Capadocia.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR UN TOUR",
    statLoc: "Göreme, Turquía",
    statTime: "Mejor Época: Amanecer",
    statStay: "Tiempo Rec: 2–3 Horas",

    aboutTitle: "Sobre el Valle del Amor",
    aboutTags: ["📍 Cerca de Göreme", "🎈 Ideal al Amanecer", "⛰️ Chimeneas Icónicas", "🥾 Trekking Baglidere", "🏍️ Ruta ATV", "📸 Mirador Panorámico", "🌅 Aşıklar Tepesi"],
    aboutText1: "El Valle del Amor (oficialmente Valle de Baglidere) es el paisaje más famoso y fotografiado. Su nombre proviene de las chimeneas de hadas con forma fálica que alcanzan hasta 40 metros de altura.",
    aboutText2: "El valle ofrece dos experiencias: caminar por el fondo del cañón junto a los pilares gigantes, o conducir hasta el mirador panorámico (Aşıklar Tepesi) en la cima del acantilado para ver los globos al amanecer.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Chimeneas Gigantes", desc: "Camina hasta la base de las formaciones masivas en el fondo del valle.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Mirador del Valle del Amor", desc: "El famoso mirador en la cima del acantilado, perfecto para fotos.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Vuelo al Amanecer", desc: "El valle es la principal ruta de vuelo de los globos aerostáticos.", img: "/images/destinations/goreme.jpg", link: "/tours/balloon" },
      { name: "Ruta de Trekking Baglidere", desc: "Un hermoso sendero de 5 km sin aglomeraciones.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Columpios del Corazón", desc: "Puntos de fotos icónicos en el mirador, diseñados para parejas.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Conexión Valle Blanco", desc: "El Valle del Amor se conecta naturalmente con el impresionante Valle Blanco.", img: "/images/valleys/white-valley.jpg", link: "/valleys/white-valley" }
    ],

    todoTitle: "Experiencias en el Valle",
    todoCards: [
      { icon: "🎈", title: "Vuelo en Globo", price: 160, rating: "5.0", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🏍️", title: "Safari ATV", price: 35, rating: "4.8", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🥾", title: "Trekking Guiado", price: 40, rating: "4.9", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🚘", title: "Coche Clásico al Amanecer", price: 80, rating: "4.9", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "📸", title: "Sesión de Fotos", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Paseo a Caballo", price: 40, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.8", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "🔴", title: "Tour Rojo", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Mira los Globos al Amanecer", desc: "Llega al mirador antes del alba. Cientos de globos pasarán sobre ti." },
      { num: "02", title: "Camina por el Valle", desc: "Comienza desde la carretera y camina 4km entre los pilares gigantes." },
      { num: "03", title: "Tour en Coche Clásico", desc: "Alquila un coche vintage y conduce hasta el mirador para fotos increíbles." },
      { num: "04", title: "Safari en ATV", desc: "Siente la adrenalina conduciendo un cuatriciclo por los senderos polvorientos." },
      { num: "05", title: "Té Turco al Borde", desc: "Siéntate en un café local en el mirador y disfruta de un té caliente con vista." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1 Hora (Parada Rápida)", desc: "Mirador del Valle del Amor, fotos y un té rápido." },
      { day: "2-3 Horas (Trekking)", desc: "Camina toda la longitud del valle desde Göreme hacia Uchisar." },
      { day: "Madrugada (Amanecer)", desc: "Dedica tus horas de la mañana aquí específicamente para el espectáculo de globos." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Columpio del Corazón", time: "Amanecer", for: "Globos y Parejas", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Base de Chimeneas", time: "Mañana", for: "Perspectiva", diff: "Medio", img: "/images/valleys/love-valley.jpg" },
      { name: "Coche Clásico", time: "Amanecer", for: "Vibraciones Vintage", diff: "Fácil", img: "/images/destinations/goreme.jpg" },
      { name: "Conexión Valle Blanco", time: "Tarde", for: "Naturaleza", diff: "Difícil", img: "/images/valleys/baglidere.jpg" }
    ],

    eatStayTitle: "Refrescos y Lugares Cercanos",
    eatList: ["☕ Cafés del Mirador", "🥤 Zumo de Granada Fresco", "🍿 Puestos de Gozleme", "🍽️ Restaurantes en Göreme"],
    stayList: ["📍 (Sin hoteles en el valle)", "💎 Hoteles Cueva en Göreme (5 min)", "🏰 Suites en Uchisar (10 min)", "🏕️ Camping (Requiere Permiso)"],

    transTitle: "¿Cómo Acceder al Valle del Amor?",
    transList: ["🚗 Al Mirador: Conduce desde Göreme hacia Uchisar, gira a la derecha en la señal 'Aşıklar Tepesi'.", "🥾 Al Fondo del Valle (Caminata): La entrada está en la carretera Göreme-Avanos.", "🏍️ Únete a un safari en ATV o a caballo desde Göreme."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌅 Amanecer", desc: "Cientos de globos llenan el cielo." },
      { name: "🌇 Atardecer", desc: "La luz dorada golpea las chimeneas perfectamente." },
      { name: "🌸 Primavera", desc: "Flores silvestres florecen en el valle." },
      { name: "❄️ Invierno", desc: "Las chimeneas cubiertas de nieve se ven mágicas." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "El 'Mirador' y el 'Fondo del Valle' son lugares diferentes. No puedes conducir fácilmente entre ellos.",
      "Lleva mucha agua si caminas en verano. Hace calor y hay poca sombra.",
      "El mirador se llena mucho al amanecer. Llega temprano.",
      "Los caminos de tierra pueden ser polvorientos por los tours en ATV.",
      "La caminata por Baglidere se conecta directamente con el Valle Blanco."
    ],

    nearbyTitle: "Explora Valles Cercanos",
    nearbyList: [
      { name: "Valle Blanco", time: "Conectado", link: "/valleys/white-valley" },
      { name: "Valle de las Palomas", time: "10 min", link: "/valleys/pigeon-valley" },
      { name: "Göreme", time: "5 min", link: "/destinations/goreme" },
      { name: "Uchisar", time: "10 min", link: "/destinations/uchisar" },
      { name: "Valle Rojo", time: "15 min", link: "/valleys/red-valley" }
    ],

    popToursTitle: "Tours que Visitan el Valle",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Por qué se llama Valle del Amor?", a: "Por sus formaciones rocosas con forma fálica. Los lugareños y turistas lo llamaron humorísticamente Valle del Amor." },
      { q: "¿Es difícil la caminata?", a: "Es plana y relativamente fácil. Tarda unas 2 horas en recorrer los 4.5km." },
      { q: "¿Puedo ver globos desde aquí?", a: "¡Sí! El mirador del Valle del Amor es probablemente el mejor lugar de Capadocia para ver los globos." }
    ],

    ctaTitle: "¿Listo para Explorar el Valle del Amor?",
    ctaDesc: "Reserva tu tour en coche clásico, safari en ATV o caminata guiada hoy.",
    btnPlan: "RESERVAR TU EXPERIENCIA"
  }
};

export default function LoveValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = LOVE_VALLEY_DICT[aktifDil] || LOVE_VALLEY_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/love-panorama.jpg" alt="Love Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            LOVE VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
              {t.btnExplore}
            </a>
            <Link href="/book" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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

      {/* 8 & 9. EAT & STAY (Valley specific) */}
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
              Book VIP Transfer &rarr;
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
          {[t.todoCards[0], t.todoCards[3], t.todoCards[4]].map((card: any, idx: number) => (
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

      {/* 15. GOOGLE MAP (Love Valley Panorama) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Love Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12574.960205804791!2d34.8197779!3d38.6575775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a67bc45dbcc71%3A0xcaf63d3a0eeb9eeb!2sLove%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
            <Link href="/book" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}