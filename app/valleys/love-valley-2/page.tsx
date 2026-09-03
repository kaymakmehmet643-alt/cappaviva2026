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
// 📚 17 BÖLÜMLÜK SÖZLÜK - LOVE VALLEY PANORAMA
// =======================================================
const PANORAMA_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Ultimate Sunrise Viewpoint",
    heroDesc: "Known locally as Lovers' Hill, this panoramic cliff edge offers the most spectacular view of hot air balloons floating over giant fairy chimneys.",
    btnExplore: "EXPLORE THE VIEWPOINT",
    btnBookHero: "BOOK A PHOTOSHOOT",
    statLoc: "Goreme, Türkiye",
    statTime: "Best Time: Sunrise",
    statStay: "Rec. Time: 1–2 Hours",

    // 2. ABOUT
    aboutTitle: "About Love Valley Panorama",
    aboutTags: ["📍 Above Goreme", "🎈 #1 Balloon Viewpoint", "💍 Proposal Hotspot", "📸 Heart Swings", "🚘 Classic Car Center", "☕ Cliffside Cafes", "🌅 Lovers' Hill (Aşıklar Tepesi)"],
    aboutText1: "Love Valley Panorama, locally known as Aşıklar Tepesi (Lovers' Hill), is a dramatic cliffside terrace looking directly down into the famous Love Valley. Unlike the valley floor which is meant for hiking, the panorama is entirely dedicated to breathtaking views, photography, and romance.",
    aboutText2: "Every morning before dawn, this viewpoint transforms into a magical theater. Hundreds of hot air balloons launch nearby and drift right past the viewing decks, often so close you can hear the roar of their burners. With its iconic heart-shaped swings, vintage cars parked on the cliff edge, and cozy tea gardens, it is the undisputed capital of Cappadocian romance and the region's top spot for marriage proposals.",

    // 3. MUST SEE
    mustSeeTitle: "Viewpoint Highlights",
    mustSeeCards: [
      { name: "The Heart Swings", desc: "Iconic flower-decorated swings positioned right on the cliff edge for the perfect romantic photo.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Sunrise Balloon Spectacle", desc: "The ultimate front-row seat to watch hundreds of balloons drift over the fairy chimneys.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Vintage Car Terrace", desc: "A designated area where classic 1960s convertibles line up for magical golden-hour photoshoots.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Giant Fairy Chimneys", desc: "Look straight down to see the massive 40-meter-tall pillar rock formations of Love Valley from above.", img: "/images/valleys/love-valley.jpg", link: "/valleys/love-valley" },
      { name: "Cliffside Tea Gardens", desc: "Small, rustic cafes offering hot Turkish tea and coffee with an unobstructed view of the valley.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "The Evil Eye Tree", desc: "A dry tree branch beautifully adorned with traditional blue evil eye beads for good luck.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences at the Panorama",
    todoCards: [
      { icon: "🚘", title: "Classic Car Sunrise Tour", price: 80, rating: "5.0", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "👗", title: "Flying Dress Photoshoot", price: 120, rating: "4.9", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "💍", title: "Marriage Proposal Setup", price: 250, rating: "5.0", dur: "2 Hours", link: "/book" },
      { icon: "🏍️", title: "Sunset ATV Safari", price: 35, rating: "4.8", dur: "2 Hours", link: "/tours/atv" },
      { icon: "🐎", title: "Horseback Sunset View", price: 45, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "📸", title: "Professional Photographer", price: 90, rating: "4.9", dur: "1.5 Hours", link: "/tours/photoshooting" },
      { icon: "☕", title: "Turkish Breakfast View", price: 20, rating: "4.6", dur: "Flexible", link: "/book" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Panorama Experience Guide",
    expList: [
      { num: "01", title: "Arrive Before Dawn", desc: "To see the balloons, you must be here around 5:30 AM (in summer). Grab a coffee and watch the sky change colors." },
      { num: "02", title: "Rent a Flying Dress", desc: "The winds at the cliff edge are perfect for the famous long 'flying dresses'. Book a local photographer for an epic souvenir." },
      { num: "03", title: "Pose on the Swings", desc: "Wait your turn for the heart-shaped swings. They are positioned to capture the valley perfectly in the background." },
      { num: "04", title: "Sip Salep in Winter", desc: "If visiting in winter, buy a hot, cinnamon-dusted Salep from a vendor while watching the snow-covered fairy chimneys." },
      { num: "05", title: "Plan a Surprise Proposal", desc: "Coordinate with local agencies to have a red carpet, flowers, and champagne ready for a sunset proposal." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1 Hour (Quick Stop)", desc: "Drive up, take photos on the swings, enjoy the view, and head to your next destination." },
      { day: "2-3 Hours (Sunrise)", desc: "Arrive in the dark, watch the balloons launch, fly over, and land, followed by a hot tea." },
      { day: "Half Day (Photoshoot)", desc: "Take your time with a professional flying dress or classic car photoshoot at different spots." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "The Floral Heart Swing", time: "Sunrise", for: "Romantic Portraits", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "Hood of a Classic Car", time: "Golden Hour", for: "Vintage Luxury", diff: "Easy", img: "/images/destinations/goreme.jpg" },
      { name: "Cliff Edge Standing", time: "Daytime", for: "Epic Scale", diff: "Medium", img: "/images/valleys/love-valley.jpg" },
      { name: "Evil Eye Tree", time: "Afternoon", for: "Cultural Vibe", diff: "Easy", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["☕ Panoramic Tea Gardens", "🥤 Fresh Pomegranate Juice Vendors", "🍿 Roasted Nuts & Snacks", "🍽️ Hearty Breakfast Cafes (Goreme - 5 mins)"],
    stayList: ["📍 (No Hotels directly on the Panorama)", "💎 Goreme Cave Suites (5 mins drive)", "🏰 Uchisar Luxury Hotels (10 mins drive)", "⛺ Viewpoint Camping (Check local rules)"],

    // 10. TRANSPORT
    transTitle: "How to Access the Panorama?",
    transList: ["🚗 By Car/Taxi: Drive from Goreme towards Uchisar and turn right at the 'Aşıklar Tepesi' or 'Love Valley Panorama' sign. It is a paved road to the top.", "🥾 Walking from Goreme: It’s a steep 25-minute uphill walk from Goreme town center.", "🚐 Organized Tours: Almost all Red Tours, Classic Car tours, and ATV Safaris include a long stop here."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌅 Sunrise", desc: "The absolute peak time. Crowded, but the balloon views are unmatched anywhere in the world." },
      { name: "🌇 Sunset", desc: "Very popular for proposals and romantic photos as the rocks turn a warm golden hue." },
      { name: "☀️ Midday", desc: "Quiet and empty. Best time to get photos on the swings without waiting in line." },
      { name: "❄️ Winter", desc: "The white snow capping the phallic rocks offers a stunning and humorous contrast." }
    ],

    // 12. TIPS
    tipsTitle: "Local Panorama Tips",
    tipsList: [
      "There is a small municipal entrance/parking fee per vehicle to access the panorama viewpoint.",
      "The 'Heart Swings' are often owned by the cafes. You may need to buy a tea or pay a small fee to use them.",
      "At sunrise, the cliff edge is extremely crowded with tripods, photographers, and classic cars. Be patient.",
      "It gets very windy and chilly on the viewing terrace before the sun comes up, even in summer. Bring a jacket.",
      "Important: You cannot drive your car down into the valley floor from here. This is strictly a top-down viewpoint."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Love Valley Floor", time: "15 min drive around", link: "/valleys/love-valley" },
      { name: "Goreme Center", time: "5 min drive", link: "/destinations/goreme" },
      { name: "Uchisar Castle", time: "10 min drive", link: "/destinations/uchisar" },
      { name: "Pigeon Valley", time: "10 min drive", link: "/valleys/pigeon-valley" },
      { name: "White Valley", time: "15 min drive", link: "/valleys/white-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Love Valley Panorama",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is the Panorama different from Love Valley?", a: "Yes. Love Valley (Baglidere) is the canyon floor where you hike. The Panorama (Aşıklar Tepesi) is the cliff-top viewing terrace overlooking the valley." },
      { q: "Do I have to pay to use the swings?", a: "The swings are usually set up by the local cafes on the cliff. They generally ask you to order a drink or pay a small tip (a few Euros) for unlimited photos." },
      { q: "Is it guaranteed to see balloons at sunrise?", a: "Balloons fly roughly 250+ days a year. However, if the wind is too strong, the Civil Aviation Authority cancels all flights. Check the weather the night before." }
    ],

    // 17. CTA
    ctaTitle: "Ready for the Ultimate View?",
    ctaDesc: "Book a Classic Car sunrise tour or an unforgettable Flying Dress photoshoot at Love Valley Panorama.",
    btnPlan: "BOOK YOUR EXPERIENCE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Romantizm Başkenti",
    heroDesc: "Aşıklar Tepesi olarak bilinen bu uçurum kenarı; sıcak hava balonlarını, devasa peribacalarını ve gün doğumunu izlemek için dünyadaki en efsanevi seyir terasıdır.",
    btnExplore: "MANZARAYI KEŞFET",
    btnBookHero: "FOTOĞRAF ÇEKİMİ REZERVE ET",
    statLoc: "Göreme, Türkiye",
    statTime: "En İyi Zaman: Gün Doğumu",
    statStay: "Önerilen Süre: 1–2 Saat",

    // 2. ABOUT
    aboutTitle: "Aşk Vadisi Panoraması (Aşıklar Tepesi)",
    aboutTags: ["📍 Göreme'nin Tepesinde", "🎈 1 Numaralı Balon İzleme Yeri", "💍 Evlilik Teklifi Merkezi", "📸 Kalpli Salıncaklar", "🚘 Klasik Araç Çekimleri", "☕ Manzaralı Kafeler", "🌅 Gün Doğumu Şöleni"],
    aboutText1: "Yerel halk tarafından Aşıklar Tepesi olarak bilinen Aşk Vadisi Panoraması, vadinin o devasa peribacalarına doğrudan yukarıdan bakan, uçurum kenarına kurulmuş muazzam bir seyir terasıdır. Trekking yapılan vadi tabanının (Bağlıdere) aksine, bu tepe tamamen nefes kesici manzaralar, profesyonel fotoğrafçılık ve romantizm için tasarlanmıştır.",
    aboutText2: "Her sabah gün ağarmadan önce bu seyir terası adeta büyülü bir tiyatro sahnesine dönüşür. Yakınlardan kalkan yüzlerce sıcak hava balonu, uçurumun hemen önünden süzülerek geçer; o kadar yakındırlar ki brülörlerinin ateş sesini duyabilirsiniz. Çiçekli kalp salıncakları, uçuruma dizilmiş klasik Amerikan arabaları ve şık kafeleriyle burası, Kapadokya'da evlilik tekliflerinin ve romantik anıların tartışmasız başkentidir.",

    // 3. MUST SEE
    mustSeeTitle: "Seyir Terasında Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Kalpli Salıncaklar", desc: "Arkanıza vadiyi ve balonları alarak kusursuz romantik fotoğraflar çekilebileceğiniz çiçekli salıncaklar.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Gün Doğumu Balon Şöleni", desc: "Yüzlerce balonun vadinin içinden süzülerek gökyüzüne yükselişini VIP koltuktan izleme şansı.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Klasik Araç Terası", desc: "1960 model üstü açık klasik arabaların uçurum kenarına dizildiği ikonik fotoğraf alanı.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Devasa Peribacaları", desc: "Aşağıya baktığınızda, Aşk Vadisi'nin 40 metre uzunluğundaki kule şeklindeki formasyonlarını kuşbakışı görün.", img: "/images/valleys/love-valley.jpg", link: "/valleys/love-valley" },
      { name: "Uçurum Kenarı Kafeler", desc: "Vadinin sonsuz manzarasına karşı sıcak Türk çayı ve kahvesi yudumlayabileceğiniz küçük, şirin kafeler.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Nazar Boncuklu Ağaç", desc: "Kapadokya geleneği olarak dalları mavi nazar boncuklarıyla süslenmiş şans ağaçları.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Aşıklar Tepesi Deneyimleri",
    todoCards: [
      { icon: "🚘", title: "Klasik Araçla Gün Doğumu", price: 80, rating: "5.0", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "👗", title: "Uçan Elbise Dış Çekim", price: 120, rating: "4.9", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "💍", title: "VIP Evlilik Teklifi", price: 250, rating: "5.0", dur: "2 Saat", link: "/book" },
      { icon: "🏍️", title: "Gün Batımı ATV Safari", price: 35, rating: "4.8", dur: "2 Saat", link: "/tours/atv" },
      { icon: "🐎", title: "Atlı Manzara Turu", price: 45, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "📸", title: "Profesyonel Fotoğrafçı", price: 90, rating: "4.9", dur: "1.5 Saat", link: "/tours/photoshooting" },
      { icon: "☕", title: "Manzaraya Karşı Kahvaltı", price: 20, rating: "4.6", dur: "Esnek", link: "/book" },
      { icon: "🔴", title: "Kapadokya Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Seyir Terası Deneyim Rehberi",
    expList: [
      { num: "01", title: "Gün Ağarmadan Orada Olun", desc: "Balonları yakalamak için (yaz aylarında) sabah 05:30 sularında tepede olmalısınız. Kahvenizi alın ve gökyüzünün renk değiştirmesini izleyin." },
      { num: "02", title: "Uçan Elbise Kiralayın", desc: "Uçurum kenarındaki rüzgar, meşhur 'uçan elbise' (flying dress) çekimleri için kusursuzdur. Hayatınızın fotoğrafını çektirin." },
      { num: "03", title: "Salıncakta Poz Verin", desc: "Kalpli salıncaklar için sıranızı bekleyin. Açıları, arkanızdaki vadiyi mükemmel bir şekilde çerçeveleyecek şekilde ayarlanmıştır." },
      { num: "04", title: "Kışın Sıcak Sahlep İçin", desc: "Kışın geldiyseniz, karlar altındaki peribacalarını izlerken seyyar satıcılardan tarçınlı sıcak bir sahlep alın." },
      { num: "05", title: "Sürpriz Bir Teklif Planlayın", desc: "Yerel acentelerle anlaşıp kırmızı halı, kemancı ve şampanya eşliğinde gün batımında unutulmaz bir evlilik teklifi organize edin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1 Saat (Kısa Mola)", desc: "Aracınızla tepeye çıkın, salıncakta fotoğraf çekilin, çay için ve diğer vadilere doğru yola devam edin." },
      { day: "2-3 Saat (Gün Doğumu)", desc: "Karanlıkta gelin, balonların kalkışını, vadi üzerinden süzülüşünü izleyin ve kahvaltıyla final yapın." },
      { day: "Yarım Gün (Dış Çekim)", desc: "Önce klasik araç, ardından uçan elbise ile tepenin farklı noktalarında geniş bir fotoğraf prodüksiyonu yapın." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Çiçekli Kalp Salıncak", time: "Gün Doğumu", for: "Romantik Portreler", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Klasik Aracın Kaputu", time: "Altın Saat", for: "Nostaljik Lüks", diff: "Kolay", img: "/images/destinations/goreme.jpg" },
      { name: "Uçurum Kenarı", time: "Gündüz", for: "Muazzam Derinlik Hissi", diff: "Orta", img: "/images/valleys/love-valley.jpg" },
      { name: "Nazar Boncuklu Ağaç", time: "Akşamüstü", for: "Kültürel ve Otantik", diff: "Kolay", img: "/images/destinations/uchisar.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["☕ Panoramik Çay Bahçeleri ve Gözlemeciler", "🥤 Taze Sıkım Nar ve Portakal Suyu", "🍿 Kavrulmuş Kuruyemiş ve Atıştırmalıklar", "🍽️ Serpme Kahvaltı (Göreme'de - 5 dk)"],
    stayList: ["📍 (Seyir terasında otel bulunmaz)", "💎 Göreme Mağara Otelleri (5 dk araçla)", "🏰 Uçhisar Lüks Otelleri (10 dk araçla)", "⛺ Uçurum Kenarı Kamp (Kurallara dikkat ederek)"],

    // 10. TRANSPORT
    transTitle: "Aşıklar Tepesi'ne Nasıl Gidilir?",
    transList: ["🚗 Araç/Taksi İle: Göreme'den Uçhisar'a doğru çıkarken 'Aşıklar Tepesi' tabelasından sağa dönün. Tepeye kadar düzgün bir parke yol vardır.", "🥾 Yürüyerek: Göreme merkezden tırmanarak çıkmak isterseniz oldukça dik bir yokuşu 25 dakikada yürümeniz gerekir.", "🚐 Turlarla: Kırmızı Tur (Red Tour), ATV Safarileri ve Klasik Araç turlarının neredeyse tamamı burada uzun bir mola verir."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌅 Gün Doğumu", desc: "Zirve zamanıdır. Kalabalık olur ancak balonların oluşturduğu manzara dünyada eşsizdir." },
      { name: "🌇 Gün Batımı", desc: "Kayalar altın rengine dönerken evlilik teklifleri ve romantik fotoğraflar için en popüler andır." },
      { name: "☀️ Öğle Saatleri", desc: "Çok sakin ve boştur. Salıncaklarda sıra beklemeden rahatça fotoğraf çekilmek için en iyi zamandır." },
      { name: "❄️ Kış", desc: "Belirgin şekilli kayaların üzerine yağan kar, manzaraya ilginç ve çok güzel bir kontrast katar." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Seyir terasına girişte araç başı alınan küçük bir belediye otopark/giriş ücreti vardır.",
      "Kalpli salıncaklar genellikle uçurumdaki kafelere aittir. Kullanmak için bir çay sipariş etmeniz veya küçük bir bahşiş vermeniz beklenebilir.",
      "Gün doğumunda uçurumun kenarı tripodlar, fotoğrafçılar ve klasik araçlarla tıklım tıklım olur. Sabırlı olun ve yerinizi erken kapın.",
      "Yazın bile olsa güneş doğmadan önce tepe inanılmaz rüzgarlı ve soğuk olur. Yanınıza mutlaka kalın bir hırka veya ceket alın.",
      "Dikkat: Aracınızla bu tepeden vadinin tabanına inemezsiniz. Burası sadece yukarıdan manzarayı izlemek (panorama) içindir."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Aşk Vadisi Tabanı (Bağlıdere)", time: "15 dk araçla (Dolaşarak)", link: "/valleys/baglidere" },
      { name: "Göreme Merkez", time: "5 dk araçla", link: "/destinations/goreme" },
      { name: "Uçhisar Kalesi", time: "10 dk araçla", link: "/destinations/uchisar" },
      { name: "Güvercinlik Vadisi", time: "10 dk araçla", link: "/valleys/pigeon-valley" },
      { name: "Beyaz Vadi", time: "15 dk araçla", link: "/valleys/white-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Aşıklar Tepesi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Panorama ile Aşk Vadisi (Bağlıdere) farklı yerler mi?", a: "Evet. Aşk Vadisi (Bağlıdere) aşağıda trekking yapılan kanyonun tabanıdır. Panorama (Aşıklar Tepesi) ise bu vadiye yukarıdan bakan seyir terasıdır." },
      { q: "Salıncaklarda fotoğraf çekilmek ücretli mi?", a: "Salıncaklar kafeler tarafından kurulmuştur. Genellikle bir içecek sipariş etmeniz veya sembolik bir ücret/bahşiş bırakmanız karşılığında sınırsız fotoğraf çekilebilirsiniz." },
      { q: "Gün doğumunda balonları görmek kesin mi?", a: "Balonlar yılda ortalama 250+ gün uçar. Ancak rüzgar çok şiddetliyse Sivil Havacılık uçuşları iptal eder. Gitmeden bir gece önce hava durumunu ve uçuş durumunu kontrol edin." }
    ],

    // 17. CTA
    ctaTitle: "O Efsanevi Manzaraya Hazır Mısın?",
    ctaDesc: "Aşk Vadisi Panoraması'nda unutulmaz bir uçan elbise çekimi veya klasik araç turunu hemen rezerve et.",
    btnPlan: "DENEYİMİNİ REZERVE ET"
  },
  es: {
    heroSub: "El Mirador Definitivo al Amanecer",
    heroDesc: "Conocido como la Colina de los Enamorados, este acantilado ofrece la vista más espectacular de los globos aerostáticos sobre el Valle del Amor.",
    btnExplore: "EXPLORAR EL MIRADOR",
    btnBookHero: "RESERVAR SESIÓN FOTOGRÁFICA",
    statLoc: "Göreme, Turquía",
    statTime: "Mejor Época: Amanecer",
    statStay: "Tiempo Rec: 1–2 Horas",

    aboutTitle: "Sobre el Mirador del Valle del Amor",
    aboutTags: ["📍 Sobre Göreme", "🎈 Mirador #1 de Globos", "💍 Punto de Propuestas", "📸 Columpios de Corazón", "🚘 Centro de Coches Clásicos", "☕ Cafés en el Acantilado", "🌅 Colina de los Enamorados"],
    aboutText1: "El Mirador del Valle del Amor, conocido localmente como Aşıklar Tepesi (Colina de los Enamorados), es una terraza dramática en un acantilado que mira directamente al famoso Valle del Amor. A diferencia del fondo del valle que es para hacer senderismo, el panorama está dedicado a las vistas, la fotografía y el romance.",
    aboutText2: "Cada mañana antes del amanecer, este mirador se transforma en un teatro mágico. Cientos de globos despegan cerca y flotan junto a las cubiertas de observación, a menudo tan cerca que puedes escuchar el rugido de sus quemadores. Con sus icónicos columpios, coches clásicos y acogedores jardines de té, es la capital indiscutible del romance capadocio.",

    mustSeeTitle: "Puntos Destacados del Mirador",
    mustSeeCards: [
      { name: "Columpios de Corazón", desc: "Columpios decorados con flores posicionados en el borde del acantilado para la foto romántica perfecta.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Espectáculo de Globos", desc: "El asiento en primera fila definitivo para ver cientos de globos flotar sobre las chimeneas de hadas.", img: "/images/destinations/goreme.jpg", link: "#" },
      { name: "Terraza de Coches Clásicos", desc: "Un área donde los descapotables clásicos se alinean para sesiones mágicas en la hora dorada.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Chimeneas Gigantes", desc: "Mira hacia abajo para ver las masivas formaciones rocosas de 40 metros del Valle del Amor.", img: "/images/valleys/love-valley.jpg", link: "/valleys/love-valley" },
      { name: "Cafés del Acantilado", desc: "Pequeños cafés rústicos que ofrecen té y café turco caliente con una vista sin obstrucciones.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Árbol del Ojo Turco", desc: "Una rama seca de árbol bellamente adornada con cuentas azules del mal de ojo para la buena suerte.", img: "/images/destinations/uchisar.jpg", link: "#" }
    ],

    todoTitle: "Experiencias en el Mirador",
    todoCards: [
      { icon: "🚘", title: "Amanecer en Coche Clásico", price: 80, rating: "5.0", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "👗", title: "Sesión de Vestido Volador", price: 120, rating: "4.9", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "💍", title: "Propuesta de Matrimonio", price: 250, rating: "5.0", dur: "2 Horas", link: "/book" },
      { icon: "🏍️", title: "Safari ATV al Atardecer", price: 35, rating: "4.8", dur: "2 Horas", link: "/tours/atv" },
      { icon: "🐎", title: "Caballos al Atardecer", price: 45, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "📸", title: "Fotógrafo Profesional", price: 90, rating: "4.9", dur: "1.5 Horas", link: "/tours/photoshooting" },
      { icon: "☕", title: "Desayuno con Vistas", price: 20, rating: "4.6", dur: "Flexible", link: "/book" },
      { icon: "🔴", title: "Tour Rojo de Capadocia", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Llega Antes del Amanecer", desc: "Para ver los globos, debes estar aquí sobre las 5:30 AM (verano). Toma un café y mira el cielo cambiar de color." },
      { num: "02", title: "Alquila un Vestido Volador", desc: "El viento del acantilado es perfecto para los famosos 'flying dresses'. Reserva un fotógrafo para un recuerdo épico." },
      { num: "03", title: "Posa en los Columpios", desc: "Espera tu turno. Están posicionados para capturar el valle perfectamente de fondo." },
      { num: "04", title: "Bebe Salep en Invierno", desc: "Si visitas en invierno, compra un Salep caliente (bebida turca) mientras miras las rocas nevadas." },
      { num: "05", title: "Planea una Sorpresa", desc: "Coordina con agencias locales para tener alfombra roja, flores y champán para una propuesta al atardecer." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1 Hora (Parada Rápida)", desc: "Sube, toma fotos en los columpios, disfruta la vista y dirígete a tu siguiente destino." },
      { day: "2-3 Horas (Amanecer)", desc: "Llega a oscuras, mira los globos despegar, volar y aterrizar, seguido de un té caliente." },
      { day: "Medio Día (Sesión de Fotos)", desc: "Tómate tu tiempo con un vestido volador profesional o una sesión de coche clásico en diferentes puntos." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Columpio de Corazón", time: "Amanecer", for: "Retratos Románticos", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Capó de Coche Clásico", time: "Hora Dorada", for: "Lujo Vintage", diff: "Fácil", img: "/images/destinations/goreme.jpg" },
      { name: "De pie en el Acantilado", time: "Día", for: "Escala Épica", diff: "Medio", img: "/images/valleys/love-valley.jpg" },
      { name: "Árbol del Ojo Turco", time: "Tarde", for: "Ambiente Cultural", diff: "Fácil", img: "/images/destinations/uchisar.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["☕ Jardines de Té Panorámicos", "🥤 Puestos de Zumo Fresco", "🍿 Frutos Secos y Aperitivos", "🍽️ Cafés para Desayuno (Göreme - 5 mins)"],
    stayList: ["📍 (Sin Hoteles en el Mirador)", "💎 Suites Cueva en Göreme (A 5 min)", "🏰 Hoteles de Lujo en Uchisar (A 10 min)", "⛺ Acampada (Revisa normas locales)"],

    transTitle: "¿Cómo Acceder al Mirador?",
    transList: ["🚗 En Coche/Taxi: Conduce desde Göreme hacia Uchisar y gira a la derecha en la señal de 'Aşıklar Tepesi'. Es carretera asfaltada.", "🥾 Caminando: Es una empinada caminata cuesta arriba de 25 minutos desde el centro de Göreme.", "🚐 Tours Organizados: Casi todos los Tours Rojos, de Coches Clásicos y Safaris ATV hacen una larga parada aquí."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌅 Amanecer", desc: "Hora punta absoluta. Concurrido, pero las vistas de globos no tienen rival en el mundo." },
      { name: "🌇 Atardecer", desc: "Muy popular para propuestas y fotos románticas cuando las rocas se vuelven doradas." },
      { name: "☀️ Mediodía", desc: "Tranquilo y vacío. Mejor momento para fotos en los columpios sin hacer cola." },
      { name: "❄️ Invierno", desc: "La nieve blanca sobre las rocas fálicas ofrece un contraste hermoso y divertido." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Hay una pequeña tarifa de entrada/estacionamiento municipal por vehículo.",
      "Los 'Columpios de Corazón' pertenecen a los cafés. Puede que tengas que comprar un té o pagar una propina para usarlos.",
      "Al amanecer, el acantilado se llena de trípodes y fotógrafos. Sé paciente.",
      "Hace mucho viento y frío antes de que salga el sol, incluso en verano. Lleva una chaqueta.",
      "Importante: No puedes bajar en coche al fondo del valle desde aquí. Es estrictamente un mirador superior."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Fondo del Valle del Amor", time: "15 min conduciendo", link: "/valleys/baglidere" },
      { name: "Centro de Göreme", time: "5 min conduciendo", link: "/destinations/goreme" },
      { name: "Castillo de Uchisar", time: "10 min conduciendo", link: "/destinations/uchisar" },
      { name: "Valle de las Palomas", time: "10 min conduciendo", link: "/valleys/pigeon-valley" },
      { name: "Valle Blanco", time: "15 min conduciendo", link: "/valleys/white-valley" }
    ],

    popToursTitle: "Tours que Visitan el Mirador",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es el Panorama diferente al Valle del Amor?", a: "Sí. El Valle del Amor (Baglidere) es el cañón abajo donde se camina. El Panorama (Aşıklar Tepesi) es la terraza superior en el acantilado." },
      { q: "¿Tengo que pagar para usar los columpios?", a: "Suelen ser instalados por los cafés locales. Te pedirán pedir una bebida o dejar una propina para tomar fotos ilimitadas." },
      { q: "¿Está garantizado ver globos al amanecer?", a: "Vuelan unos 250+ días al año. Sin embargo, si el viento es fuerte, Aviación Civil cancela los vuelos. Revisa el clima la noche anterior." }
    ],

    ctaTitle: "¿Listo para la Vista Definitiva?",
    ctaDesc: "Reserva un tour en Coche Clásico o una sesión de Vestido Volador en el Mirador del Valle del Amor.",
    btnPlan: "RESERVAR TU EXPERIENCIA"
  }
};

export default function LoveValleyPanoramaPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = PANORAMA_DICT[aktifDil] || PANORAMA_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-fuchsia-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/love-panorama.jpg" alt="Love Valley Panorama Aşıklar Tepesi" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/50 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-fuchsia-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            LOVE VALLEY PANORAMA
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-fuchsia-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-fuchsia-500 hover:scale-105 transition-all shadow-xl shadow-fuchsia-600/30">
              {t.btnExplore}
            </a>
            <Link href="/tours/photoshooting" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
          <div className="w-16 h-1.5 bg-fuchsia-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-fuchsia-500 pl-4">
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
            <div className="w-16 h-1.5 bg-fuchsia-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-fuchsia-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-fuchsia-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-fuchsia-600 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-fuchsia-50/50 border-y border-fuchsia-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-fuchsia-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-fuchsia-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-fuchsia-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-fuchsia-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-fuchsia-100 hover:bg-fuchsia-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-fuchsia-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-fuchsia-400">Where to Stay?</h3>
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
      <section className="py-24 bg-fuchsia-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/classic-car" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-fuchsia-600 transition-all">
              Book Classic Car Tour &rarr;
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
                  <span className="text-fuchsia-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-fuchsia-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-fuchsia-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[2]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(217,70,239,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-fuchsia-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-fuchsia-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Panorama) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Love Valley Panorama Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12574.960205804791!2d34.8197779!3d38.6575775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a67bc45dbcc71%3A0xcaf63d3a0eeb9eeb!2sA%C5%9F%C4%B1klar%20Tepesi!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-fuchsia-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-fuchsia-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/photoshooting" className="bg-fuchsia-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-fuchsia-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}