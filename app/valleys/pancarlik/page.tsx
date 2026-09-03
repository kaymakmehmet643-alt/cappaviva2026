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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - PANCARLIK VALLEY
// =======================================================
const PANCARLIK_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Beet-Red Valley of Frescoes",
    heroDesc: "A peaceful, undulating landscape connecting Ortahisar to Mustafapasa, renowned for its beet-red frescoes, wild camping, and sweeping pastel hills.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A JEEP SAFARI",
    statLoc: "Ortahisar, Türkiye",
    statTime: "Best Time: Sunset",
    statStay: "Rec. Time: 2–3 Hours",

    // 2. ABOUT
    aboutTitle: "About Pancarlik Valley",
    aboutTags: ["📍 South of Ortahisar", "⛪ Beet-Red Frescoes", "🚵‍♂️ Mountain Biking Hub", "⛺ Wild Camping Spot", "🤫 Totally Off-the-Grid", "🌄 Majestic Sunsets", "⛪ Sarica Church"],
    aboutText1: "Pancarlik Valley is one of Cappadocia's best-kept secrets. Situated just south of Ortahisar and stretching towards the Greek village of Mustafapasa, this wide, undulating valley is characterized by its smooth, pastel-colored tuff hills that wave like a frozen sea of pink, white, and pale green.",
    aboutText2: "The valley takes its name—Pancarlik (Beetroot)—from the striking, beet-red frescoes found inside the main Pancarlik Church. Because it is wide open and receives very little tourist traffic, it has become a premier destination for mountain biking, off-road Jeep safaris, and wild camping under the incredibly clear Cappadocian night sky.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Pancarlik Church", desc: "A remarkable 11th-century monastic church famous for its exceptionally well-preserved beet-red frescoes.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Sarica Church", desc: "A beautifully restored, isolated rock-cut church standing proudly in the middle of the valley.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "The Rolling Hills", desc: "The smooth, wave-like rock formations painted naturally in layers of pink, yellow, and white.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Kepez Church", desc: "A lesser-known, historic rock sanctuary hidden along the trekking paths leading to Mustafapasa.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Pancarlik Sunset Point", desc: "The high ridges offering a panoramic, silent view of the sun setting over the colorful rock waves.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Ortahisar Castle Backdrop", desc: "The looming silhouette of the giant Ortahisar rock castle guarding the entrance to the valley.", img: "/images/destinations/ortahisar.jpg", link: "/destinations/ortahisar" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Pancarlik",
    todoCards: [
      { icon: "🚙", title: "Sunset Jeep Safari", price: 45, rating: "5.0", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "🚵‍♂️", title: "Mountain Biking (MTB)", price: 50, rating: "4.9", dur: "3 Hours", link: "/tours/biking" },
      { icon: "⛺", title: "Wild Camping Setup", price: 30, rating: "4.8", dur: "Overnight", link: "/book" },
      { icon: "🥾", title: "Ortahisar to Sinasos Trek", price: 40, rating: "4.8", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "📸", title: "Golden Hour Photoshoot", price: 100, rating: "4.7", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Valley Horseback Ride", price: 45, rating: "4.8", dur: "2 Hours", link: "/tours/horse" },
      { icon: "👑", title: "Private Church Tour", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🍷", title: "Sunset Wine Picnic", price: 35, rating: "4.9", dur: "2 Hours", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Pancarlik Experience Guide",
    expList: [
      { num: "01", title: "See the Beet-Red Frescoes", desc: "Step inside Pancarlik Church. The unique dark red pigment used for the religious art is unlike any other church in the region." },
      { num: "02", title: "Camp Under the Stars", desc: "With wide open spaces and zero light pollution, this valley is the ultimate spot in Cappadocia to pitch a tent." },
      { num: "03", title: "Rent a Mountain Bike", desc: "The rolling, smooth hills of Pancarlik make it the absolute best valley for off-road cycling and MTB trails." },
      { num: "04", title: "Visit Sarica Church", desc: "Walk to the completely isolated, beautifully restored Sarica Church. It looks like a lone sandcastle in the valley." },
      { num: "05", title: "Watch the Silent Sunset", desc: "Unlike the crowded Red Valley viewpoint, you can watch the sunset here in total, undisturbed silence." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "1 Hour (Churches)", desc: "Drive to the main parking area, visit Pancarlik and Sarica churches, and take some photos." },
      { day: "2-3 Hours (Jeep/MTB)", desc: "The standard time needed to explore the rolling hills via a Jeep Safari or on a mountain bike." },
      { day: "Half Day (Trekking)", desc: "Hike the full trail starting from Ortahisar, passing through Pancarlik, and ending in Mustafapasa." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Pancarlik Church Interior", time: "Morning", for: "Red Fresco Art", diff: "Easy", img: "/images/churches/tokali.jpg" },
      { name: "The Wavy Pink Hills", time: "Late Afternoon", for: "Pastel Landscapes", diff: "Easy", img: "/images/valleys/rose-valley.jpg" },
      { name: "Sarica Church Exterior", time: "Daytime", for: "Isolated Architecture", diff: "Easy", img: "/images/churches/karanlik.jpg" },
      { name: "Sunset on the Ridge", time: "Sunset", for: "Golden Hour Glow", diff: "Easy", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["💧 Bring Your Own Supplies (No cafes in the valley)", "🍷 Bring local wine for a sunset picnic", "🍽️ Restaurants in Ortahisar (Valley Entrance)", "☕ Historic cafes in Mustafapasa (Valley Exit)"],
    stayList: ["⛺ Wild Camping (Pancarlik is highly recommended)", "🏰 Cave Hotels in Ortahisar (10 mins away)", "🏛️ Greek Mansions in Mustafapasa (15 mins away)", "📍 (No hotels inside the actual valley)"],

    // 10. TRANSPORT
    transTitle: "How to Access Pancarlik?",
    transList: ["🚗 By Car: The easiest way. There is an asphalt/dirt road leading straight to the Pancarlik Church from Ortahisar. Plenty of free parking.", "🚙 By Jeep Safari: The most fun way to navigate the undulating, dusty trails. Safaris usually include this valley.", "🥾 By Foot: You can easily walk here from the center of Ortahisar in about 30 minutes."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌇 Sunset", desc: "The pastel pink and white rocks glow beautifully under the setting sun. Very quiet." },
      { name: "🌸 Spring", desc: "Perfect temperature for mountain biking or long trekking towards Mustafapasa." },
      { name: "🌌 Night", desc: "The ultimate time for astrophotography and camping due to zero light pollution." },
      { name: "❄️ Winter", desc: "The wavy hills covered in snow look like a surreal white desert." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Pancarlik Church is an official site. There is usually a small entrance fee (or you can use the Museum Pass Turkey).",
      "Because the valley is so wide and open, there is very little shade. Bring a hat and sunscreen during summer.",
      "If you are camping, make sure to bring all your water and food. There are no facilities after dark.",
      "The trail from Pancarlik down to Mustafapasa is excellent, but keep an eye out for local village dogs.",
      "This is one of the few valleys in Cappadocia where you can legally and safely fly a drone without crowds."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Ortahisar Castle", time: "10 min drive", link: "/destinations/ortahisar" },
      { name: "Mustafapasa (Sinasos)", time: "15 min drive", link: "/destinations/mustafapasa" },
      { name: "Gomeda Valley", time: "15 min drive", link: "/valleys/gomeda" },
      { name: "Uzengi Valley", time: "15 min drive", link: "/valleys/uzengi" },
      { name: "Urgup Center", time: "15 min drive", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Pancarlik",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Why is it called Pancarlik (Beetroot) Valley?", a: "The name comes from the distinct, dark beetroot-red (pancar) pigment used extensively in the frescoes of the main church, as well as the pinkish-red hue of the rocks at sunset." },
      { q: "Is Pancarlik good for camping?", a: "Yes, it is widely considered the best spot for wild camping in central Cappadocia. It is safe, flat in many areas, and far from the light pollution of Goreme." },
      { q: "Can I drive my rental car here?", a: "Yes. Unlike narrower valleys, Pancarlik has a decent dirt/asphalt access road that takes you right up to the main church. However, deep valley exploration requires a 4x4 or walking." }
    ],

    // 17. CTA
    ctaTitle: "Ready for an Off-the-Grid Adventure?",
    ctaDesc: "Book a Jeep Safari, a mountain bike tour, or a sunset picnic in the peaceful Pancarlik Valley today.",
    btnPlan: "BOOK YOUR ADVENTURE"
  },
  tr: {
    // 1. HERO
    heroSub: "Pancar Kırmızısı Fresklerin Vadisi",
    heroDesc: "Ortahisar'dan Mustafapaşa'ya uzanan; pancar kırmızısı freskleri, dalgalı pembe tepeleri ve efsanevi kamp rotalarıyla sessiz bir cennet.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "JEEP SAFARİ REZERVE ET",
    statLoc: "Ortahisar, Türkiye",
    statTime: "En İyi Zaman: Gün Batımı",
    statStay: "Önerilen Süre: 2–3 Saat",

    // 2. ABOUT
    aboutTitle: "Pancarlık Vadisi Hakkında",
    aboutTags: ["📍 Ortahisar'ın Güneyinde", "⛪ Pancar Kırmızısı Freskler", "🚵‍♂️ Dağ Bisikleti Merkezi", "⛺ Kamp ve Karavan Alanı", "🤫 Kalabalıktan Uzak", "🌄 Sessiz Gün Batımı", "⛪ Sarıca Kilisesi"],
    aboutText1: "Pancarlık Vadisi, Kapadokya'nın en iyi saklanan sırlarından biridir. Ortahisar kasabasının hemen güneyinde yer alan ve eski bir Rum köyü olan Mustafapaşa'ya (Sinasos) doğru uzanan bu geniş vadi; pembe, beyaz ve uçuk yeşil tonlarında donmuş bir denizi andıran dalgalı tüf tepeleriyle karakterizedir.",
    aboutText2: "Vadi, adını ana kilisesi olan Pancarlık Kilisesi'nin içindeki dikkat çekici 'pancar kırmızısı' fresklerden alır. Çok geniş bir alana yayıldığı ve büyük tur otobüslerinin radarına girmediği için; dağ bisikleti (MTB), off-road Jeep safarileri ve Kapadokya'nın berrak yıldızlı gökyüzü altında kamp yapmak için bir numaralı destinasyon haline gelmiştir.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Pancarlık Kilisesi", desc: "Bölgedeki diğer kiliselerden farklı olarak çok yoğun bir kırmızı (pancar) renkle boyanmış 11. yüzyıl kilisesi.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Sarıca Kilisesi", desc: "Vadinin ortasında tek başına gururla duran, mükemmel şekilde restore edilmiş izole kaya kilisesi.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Dalgalı Tüf Tepeleri", desc: "Pembe, sarı ve beyaz katmanlar halinde doğal olarak boyanmış, pürüzsüz dalga benzeri kaya oluşumları.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Kepez Kilisesi", desc: "Mustafapaşa'ya giden yürüyüş yolu üzerinde saklanmış, daha az bilinen tarihi bir kaya sığınağı.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Pancarlık Gün Batımı Noktası", desc: "Kızıl Vadi'nin kalabalığı olmadan, renkli kaya dalgalarının üzerinde batan güneşi izleyebileceğiniz sessiz tepeler.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Ortahisar Kalesi Silüeti", desc: "Vadinin girişini koruyan ve arka planda muazzam bir silüet oluşturan devasa kaya kale.", img: "/images/destinations/ortahisar.jpg", link: "/destinations/ortahisar" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Pancarlık Vadisi Deneyimleri",
    todoCards: [
      { icon: "🚙", title: "Gün Batımı Jeep Safari", price: 45, rating: "5.0", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "🚵‍♂️", title: "Dağ Bisikleti (MTB)", price: 50, rating: "4.9", dur: "3 Saat", link: "/tours/biking" },
      { icon: "⛺", title: "Vahşi Doğa Kampı", price: 30, rating: "4.8", dur: "1 Gece", link: "/book" },
      { icon: "🥾", title: "Ortahisar-Sinasos Yürüyüşü", price: 40, rating: "4.8", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "📸", title: "Altın Saat Dış Çekimi", price: 100, rating: "4.7", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Vadide Atlı Safari", price: 45, rating: "4.8", dur: "2 Saat", link: "/tours/horse" },
      { icon: "👑", title: "Özel Kilise Keşfi", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "🍷", title: "Gün Batımı Şarap Pikniği", price: 35, rating: "4.9", dur: "2 Saat", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Pancarlık Deneyim Rehberi",
    expList: [
      { num: "01", title: "Kırmızı Freskleri İnceleyin", desc: "Pancarlık Kilisesi'ne girin. Dini sanat için kullanılan koyu kırmızı pigment, bölgedeki hiçbir kiliseye benzemez." },
      { num: "02", title: "Yıldızların Altında Kamp Kurun", desc: "Geniş açık alanları ve sıfır ışık kirliliği ile bu vadi, Kapadokya'da çadır kurmak için en mükemmel noktadır." },
      { num: "03", title: "Dağ Bisikleti Kiralayın", desc: "Pancarlık'ın pürüzsüz ve dalgalı tepeleri, onu off-road bisiklet turları için açık ara en eğlenceli vadi yapar." },
      { num: "04", title: "Sarıca Kilisesi'ne Yürüyün", desc: "Vadinin ortasında kumdan bir kale gibi tek başına duran, harika restore edilmiş Sarıca Kilisesi'ne mutlaka uğrayın." },
      { num: "05", title: "Sessiz Gün Batımını İzleyin", desc: "Kızılçukur'un kalabalığı ve gürültüsü olmadan, gün batımını sadece rüzgar sesi eşliğinde huzurla izleyin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "1 Saat (Kiliseler)", desc: "Aracınızla ana otoparka gidin, Pancarlık ve Sarıca kiliselerini ziyaret edip fotoğraflar çekin." },
      { day: "2-3 Saat (Jeep/Bisiklet)", desc: "Dalgalı tepeleri bir Jeep Safari veya dağ bisikleti ile keşfetmek için gereken standart macera süresi." },
      { day: "Yarım Gün (Tam Trekking)", desc: "Ortahisar'dan başlayıp Pancarlık içinden geçerek Mustafapaşa'da son bulan uzun yürüyüş rotası." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Pancarlık Kilise İçi", time: "Sabah", for: "Kırmızı Fresk Sanatı", diff: "Kolay", img: "/images/churches/tokali.jpg" },
      { name: "Dalgalı Pembe Tepeler", time: "Akşamüstü", for: "Pastel Doğa Manzarası", diff: "Kolay", img: "/images/valleys/rose-valley.jpg" },
      { name: "Sarıca Kilisesi Dış Cephe", time: "Gündüz", for: "İzole Mimari Çekim", diff: "Kolay", img: "/images/churches/karanlik.jpg" },
      { name: "Sırtlarda Gün Batımı", time: "Gün Batımı", for: "Altın Saat Işığı", diff: "Kolay", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["💧 Hazırlıklı Gelin (Vadi içinde kafe yoktur)", "🍷 Gün batımı pikniği için yöresel şarabınızı alın", "🍽️ Ortahisar Merkez Restoranları (Girişte)", "☕ Mustafapaşa Tarihi Kafeleri (Çıkışta)"],
    stayList: ["⛺ Vahşi Kamp ve Karavan (Pancarlık en popüler yerdir)", "🏰 Ortahisar Mağara Otelleri (10 dk uzaklıkta)", "🏛️ Mustafapaşa Rum Konakları (15 dk uzaklıkta)", "📍 (Vadi içinde konaklama tesisi bulunmaz)"],

    // 10. TRANSPORT
    transTitle: "Pancarlık'a Nasıl Gidilir?",
    transList: ["🚗 Kendi Aracınızla: En kolay yoldur. Ortahisar'dan Pancarlık Kilisesi'ne kadar giden düzgün bir toprak/asfalt yol vardır. Ücretsiz otoparkı geniştir.", "🚙 Jeep Safari İle: Tozlu ve dalgalı parkurları aşmanın en eğlenceli yoludur. Safariler genellikle bu vadiye mutlaka uğrar.", "🥾 Yürüyerek: Ortahisar merkezinden yaklaşık 30 dakikalık keyifli bir yürüyüşle vadiye ulaşabilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌇 Gün Batımı", desc: "Pastel pembe ve beyaz kayalar batan güneşin altında muazzam parlar. Çok sessizdir." },
      { name: "🌸 İlkbahar", desc: "Dağ bisikleti sürmek veya Mustafapaşa'ya doğru uzun bir yürüyüş yapmak için mükemmel hava." },
      { name: "🌌 Gece", desc: "Sıfır ışık kirliliği sayesinde astrofotoğrafçılık (yıldız çekimi) ve kamp için Kapadokya'nın en iyi yeridir." },
      { name: "❄️ Kış", desc: "Karla kaplanan dalgalı tepeler sürreal bir beyaz çöl gibi görünür." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Pancarlık Kilisesi resmi bir müzedir. Girişte küçük bir ücret ödemeniz veya Müzekart göstermeniz gerekebilir.",
      "Vadi çok geniş ve açık olduğu için gölgelik alan azdır. Yaz aylarında mutlaka şapka ve güneş kremi getirin.",
      "Eğer kamp yapacaksanız, tüm su ve yiyeceğinizi yanınızda getirdiğinizden emin olun. Hava karardıktan sonra etrafta hiçbir tesis kalmaz.",
      "Pancarlık'tan Mustafapaşa'ya inen yürüyüş yolu harikadır, ancak zaman zaman yerel köy köpekleriyle karşılaşabilirsiniz.",
      "Burası, kalabalıklar olmadan ve güvenle drone uçurabileceğiniz Kapadokya'daki nadir vadilerden biridir."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Ortahisar Kalesi", time: "10 dk araçla", link: "/destinations/ortahisar" },
      { name: "Mustafapaşa (Sinasos)", time: "15 dk araçla", link: "/destinations/mustafapasa" },
      { name: "Gomeda Vadisi", time: "15 dk araçla", link: "/valleys/gomeda" },
      { name: "Üzengi Vadisi", time: "15 dk araçla", link: "/valleys/uzengi" },
      { name: "Ürgüp Merkez", time: "15 dk araçla", link: "/destinations/urgup" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Pancarlık Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Neden Pancarlık Vadisi deniyor?", a: "Adını, ana kilisedeki fresklerde yoğun olarak kullanılan ve başka kiliselerde pek görülmeyen 'pancar kırmızısı' pigmentinden ve gün batımında kayaların aldığı pembemsi/kızıl renkten alır." },
      { q: "Pancarlık kamp yapmak için uygun mu?", a: "Evet, burası Kapadokya'nın merkezi sayılan bölgeler içinde vahşi kamp (wild camping) için en iyi yer kabul edilir. Güvenlidir, düz alanları boldur ve Göreme'nin ışık kirliliğinden uzaktır." },
      { q: "Kiralık aracımla kiliseye kadar gidebilir miyim?", a: "Evet. Diğer dar vadilerin aksine Pancarlık'ın ana kilisesine kadar giden düzgün bir yolu ve otoparkı vardır. Ancak vadinin daha derinlerine inmek için 4x4 veya yürüyüş gerekir." }
    ],

    // 17. CTA
    ctaTitle: "Sessiz Bir Maceraya Hazır Mısın?",
    ctaDesc: "Pancarlık'ın dalgalı tepelerinde Jeep Safari, dağ bisikleti turu veya gün batımı pikniği için yerini hemen ayırt.",
    btnPlan: "MACERANI REZERVE ET"
  },
  es: {
    heroSub: "El Valle Rojo Remolacha",
    heroDesc: "Un paisaje ondulado y pacífico que conecta Ortahisar con Mustafapasa, famoso por sus frescos color remolacha, acampada libre y colinas pastel.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR SAFARI EN JEEP",
    statLoc: "Ortahisar, Turquía",
    statTime: "Mejor Época: Atardecer",
    statStay: "Tiempo Rec: 2–3 Horas",

    aboutTitle: "Sobre el Valle de Pancarlik",
    aboutTags: ["📍 Al sur de Ortahisar", "⛪ Frescos Color Remolacha", "🚵‍♂️ Centro de Bicicleta de Montaña", "⛺ Zona de Acampada Libre", "🤫 Totalmente Aislado", "🌄 Atardeceres Majestuosos", "⛪ Iglesia Sarica"],
    aboutText1: "El Valle de Pancarlik es uno de los secretos mejor guardados de Capadocia. Situado justo al sur de Ortahisar y extendiéndose hacia el pueblo griego de Mustafapasa, este valle amplio y ondulado se caracteriza por sus colinas de toba de colores pastel que ondean como un mar congelado de rosa, blanco y verde pálido.",
    aboutText2: "El valle toma su nombre—Pancarlik (Remolacha)—de los llamativos frescos de color rojo remolacha que se encuentran en la principal Iglesia de Pancarlik. Al ser muy abierto y recibir poco tráfico, se ha convertido en un destino principal para ciclismo de montaña, safaris en Jeep 4x4 y acampada libre bajo el cielo nocturno hiperclaro de Capadocia.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Iglesia de Pancarlik", desc: "Extraordinaria iglesia monástica del siglo XI famosa por sus frescos color remolacha excepcionalmente conservados.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Iglesia de Sarica", desc: "Una iglesia rupestre maravillosamente restaurada y aislada que se erige con orgullo en medio del valle.", img: "/images/churches/karanlik.jpg", link: "#" },
      { name: "Las Colinas Onduladas", desc: "Formaciones rocosas suaves en forma de ola, pintadas naturalmente en capas de rosa, amarillo y blanco.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Iglesia Kepez", desc: "Un histórico santuario rupestre menos conocido oculto en los senderos hacia Mustafapasa.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Mirador del Atardecer", desc: "Las crestas altas ofrecen una vista panorámica y silenciosa de la puesta de sol sobre las olas de roca.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Fondo del Castillo de Ortahisar", desc: "La inmensa silueta del castillo de roca de Ortahisar custodiando la entrada al valle.", img: "/images/destinations/ortahisar.jpg", link: "/destinations/ortahisar" }
    ],

    todoTitle: "Experiencias en Pancarlik",
    todoCards: [
      { icon: "🚙", title: "Safari Jeep al Atardecer", price: 45, rating: "5.0", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "🚵‍♂️", title: "Bici de Montaña (MTB)", price: 50, rating: "4.9", dur: "3 Horas", link: "/tours/biking" },
      { icon: "⛺", title: "Acampada Libre", price: 30, rating: "4.8", dur: "1 Noche", link: "/book" },
      { icon: "🥾", title: "Trekking Ortahisar-Sinasos", price: 40, rating: "4.8", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "📸", title: "Sesión Hora Dorada", price: 100, rating: "4.7", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Paseo a Caballo", price: 45, rating: "4.8", dur: "2 Horas", link: "/tours/horse" },
      { icon: "👑", title: "Tour Privado de Iglesias", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🍷", title: "Picnic de Vino al Atardecer", price: 35, rating: "4.9", dur: "2 Horas", link: "/book" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Mira los Frescos Rojos", desc: "Entra a la Iglesia de Pancarlik. El pigmento rojo oscuro usado en el arte religioso es diferente a cualquier otra iglesia de la región." },
      { num: "02", title: "Acampa Bajo las Estrellas", desc: "Con espacios amplios y cero contaminación lumínica, este valle es el mejor lugar de Capadocia para montar una tienda." },
      { num: "03", title: "Alquila una Bici (MTB)", desc: "Las colinas suaves y onduladas de Pancarlik lo hacen el mejor valle absoluto para rutas de ciclismo off-road." },
      { num: "04", title: "Visita la Iglesia Sarica", desc: "Camina hacia la hermosa y aislada Iglesia Sarica. Parece un castillo de arena solitario en el valle." },
      { num: "05", title: "Atardecer en Silencio", desc: "A diferencia del concurrido Valle Rojo, aquí puedes ver la puesta de sol en un silencio total y sin molestias." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "1 Hora (Iglesias)", desc: "Conduce al aparcamiento principal, visita las iglesias Pancarlik y Sarica, y haz algunas fotos." },
      { day: "2-3 Horas (Jeep/MTB)", desc: "El tiempo estándar para explorar las colinas onduladas mediante un Safari en Jeep o en bicicleta." },
      { day: "Medio Día (Trekking)", desc: "Recorre la ruta completa comenzando en Ortahisar, pasando por Pancarlik y terminando en Mustafapasa." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Interior Iglesia Pancarlik", time: "Mañana", for: "Arte de Frescos Rojos", diff: "Fácil", img: "/images/churches/tokali.jpg" },
      { name: "Colinas Rosadas Onduladas", time: "Tarde", for: "Paisajes Pastel", diff: "Fácil", img: "/images/valleys/rose-valley.jpg" },
      { name: "Exterior Iglesia Sarica", time: "Día", for: "Arquitectura Aislada", diff: "Fácil", img: "/images/churches/karanlik.jpg" },
      { name: "Atardecer en la Cresta", time: "Atardecer", for: "Brillo de Hora Dorada", diff: "Fácil", img: "/images/valleys/baglidere.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["💧 Trae tus propios suministros (No hay cafés)", "🍷 Trae vino local para un picnic al atardecer", "🍽️ Restaurantes en Ortahisar (Entrada)", "☕ Cafés históricos en Mustafapasa (Salida)"],
    stayList: ["⛺ Acampada Libre (Pancarlik es muy recomendado)", "🏰 Hoteles Cueva en Ortahisar (A 10 min)", "🏛️ Mansiones Griegas en Mustafapasa (A 15 min)", "📍 (Sin hoteles dentro del valle)"],

    transTitle: "¿Cómo Acceder a Pancarlik?",
    transList: ["🚗 En Coche: La forma más fácil. Hay un buen camino de tierra/asfalto directo a la iglesia desde Ortahisar. Mucho aparcamiento gratuito.", "🚙 En Safari Jeep: La forma más divertida de navegar por los senderos polvorientos. Los safaris suelen incluir este valle.", "🥾 A Pie: Puedes caminar fácilmente desde el centro de Ortahisar en unos 30 minutos."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌇 Atardecer", desc: "Las rocas pastel brillan hermosamente bajo el sol poniente. Muy tranquilo." },
      { name: "🌸 Primavera", desc: "Temperatura perfecta para bicicleta de montaña o senderismo hacia Mustafapasa." },
      { name: "🌌 Noche", desc: "El momento definitivo para astrofotografía y acampada por la nula luz artificial." },
      { name: "❄️ Invierno", desc: "Las colinas onduladas cubiertas de nieve parecen un desierto blanco surrealista." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "La Iglesia de Pancarlik es un sitio oficial. Suele haber una pequeña entrada (o puedes usar el Museum Pass).",
      "Como el valle es muy abierto, hay poca sombra. Lleva sombrero y crema solar en verano.",
      "Si vas a acampar, asegúrate de llevar toda el agua y comida. No hay instalaciones de noche.",
      "El sendero hacia Mustafapasa es excelente, pero ten cuidado con los perros de las aldeas locales.",
      "Es uno de los pocos valles donde puedes volar un dron legalmente y sin multitudes."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Castillo de Ortahisar", time: "10 min en coche", link: "/destinations/ortahisar" },
      { name: "Mustafapasa (Sinasos)", time: "15 min en coche", link: "/destinations/mustafapasa" },
      { name: "Valle de Gomeda", time: "15 min en coche", link: "/valleys/gomeda" },
      { name: "Valle de Uzengi", time: "15 min en coche", link: "/valleys/uzengi" },
      { name: "Centro de Ürgüp", time: "15 min en coche", link: "/destinations/urgup" }
    ],

    popToursTitle: "Tours que Visitan Pancarlik",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Por qué se llama Valle de Pancarlik (Remolacha)?", a: "El nombre proviene del distintivo pigmento rojo oscuro tipo remolacha (pancar) usado en los frescos de la iglesia principal, y del tono rosado de las rocas al atardecer." },
      { q: "¿Es bueno para acampar?", a: "Sí, es considerado el mejor lugar para acampada libre en el centro de Capadocia. Es seguro, plano y lejos de la contaminación lumínica de Göreme." },
      { q: "¿Puedo llegar con mi coche de alquiler?", a: "Sí. A diferencia de otros valles, tiene un camino de acceso decente hasta la iglesia principal. Sin embargo, explorar más a fondo requiere 4x4 o ir a pie." }
    ],

    ctaTitle: "¿Listo para una Aventura Aislada?",
    ctaDesc: "Reserva hoy un Safari en Jeep, un tour en MTB o un picnic al atardecer en el pacífico Valle de Pancarlik.",
    btnPlan: "RESERVAR TU AVENTURA"
  }
};

export default function PancarlikValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = PANCARLIK_DICT[aktifDil] || PANCARLIK_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-rose-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/rose-valley.jpg" alt="Pancarlik Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950/50 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-rose-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            PANCARLIK
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-rose-500 hover:scale-105 transition-all shadow-xl shadow-rose-600/30">
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
          <div className="w-16 h-1.5 bg-rose-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-rose-500 pl-4">
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
            <div className="w-16 h-1.5 bg-rose-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-rose-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-rose-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-rose-600 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-rose-50/50 border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-rose-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-rose-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-rose-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-rose-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-rose-100 hover:bg-rose-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-rose-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-rose-400">Where to Stay?</h3>
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
      <section className="py-24 bg-rose-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/jeep-safari" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-rose-600 transition-all">
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
                  <span className="text-rose-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-rose-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-rose-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[5]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(225,29,72,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-rose-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-rose-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Pancarlık) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Pancarlık Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12581.428458739199!2d34.871!3d38.614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a65d506d1a1b1%3A0xc0c8d10edc911b34!2sPancarl%C4%B1k%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-rose-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-rose-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/jeep-safari" className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-rose-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}