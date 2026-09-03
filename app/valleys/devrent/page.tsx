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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - DEVRENT VALLEY
// =======================================================
const DEVRENT_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Valley of Imagination",
    heroDesc: "A lunar landscape filled with animal-shaped fairy chimneys, where wind and water have sculpted nature's most whimsical art gallery.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK THE RED TOUR",
    statLoc: "Avanos, Türkiye",
    statTime: "Best Time: Morning/Afternoon",
    statStay: "Rec. Time: 45 Mins",

    // 2. ABOUT
    aboutTitle: "About Devrent (Imagination) Valley",
    aboutTags: ["📍 Near Avanos & Zelve", "🐪 The Famous Camel Rock", "🌙 Lunar Landscape", "🧠 Pure Imagination", "📸 Quick Photo Stop", "🚫 No Cave Churches", "👨‍👩‍👧 Family Friendly"],
    aboutText1: "Unlike the other valleys in Cappadocia, Devrent Valley (also widely known as Imagination Valley) has never been inhabited by humans. You won't find any rock-cut churches, ancient monasteries, or hidden pigeon houses here. Instead, you will find a spectacular lunar landscape shaped entirely by nature.",
    aboutText2: "Over millions of years, wind and water erosion have sculpted the volcanic tuff into bizarre, fascinating shapes. The most famous is the giant camel-shaped rock near the entrance. As you walk through the short trails, your imagination will run wild as you spot rocks resembling kissing ducks, dolphins, seals, and even a silhouette of the Virgin Mary.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "The Camel Rock", desc: "The iconic symbol of Devrent Valley. This giant natural rock formation perfectly resembles a resting camel.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Kissing Birds", desc: "Look closely at the pillars to spot two fairy chimneys that look like penguins or ducks kissing.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "The Virgin Mary (Nun)", desc: "A tall, isolated rock formation that many believe resembles the silhouette of a nun or the Virgin Mary holding a child.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "The Lunar Landscape", desc: "The deep, barren, and rolling tuff hills give the valley an otherworldly, moon-like appearance.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Napoleon's Hat", desc: "Another famous formation that strongly resembles the iconic bicorne hat worn by Napoleon Bonaparte.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "The Dolphin", desc: "Let your imagination run wild as you spot a rock that looks like a dolphin leaping out of the stone waves.", img: "/images/destinations/goreme.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Devrent Valley",
    todoCards: [
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.9", dur: "Full Day", link: "/tours/red-tour" },
      { icon: "🚘", title: "Classic Car Photoshoot", price: 80, rating: "4.8", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🐪", title: "Camel Safari", price: 35, rating: "4.7", dur: "1 Hour", link: "/tours/camel" },
      { icon: "📸", title: "Flying Dress Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Jeep Safari Adventure", price: 45, rating: "4.8", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Private Minivan Tour", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Devrent Valley Experience Guide",
    expList: [
      { num: "01", title: "Find the Famous Camel", desc: "The very first thing you will see is the fenced-off Camel Rock. It's the most photographed rock in Cappadocia!" },
      { num: "02", title: "Play the Shape Game", desc: "Wander around the short paths with your family or friends and compete to see who can spot the most animal shapes in the rocks." },
      { num: "03", title: "Take Lunar Landscape Photos", desc: "The barren, sweeping curves of the tuff rock here provide an incredible, otherworldly backdrop for photography." },
      { num: "04", title: "Join the Red Tour", desc: "Devrent Valley is a core stop on the popular Red Tour. Booking this tour is the easiest way to experience the valley with a guide." },
      { num: "05", title: "Shop for Souvenirs", desc: "Browse the small local stalls at the valley entrance for traditional Cappadocian trinkets and fresh juices." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "30-45 Minutes", desc: "Devrent Valley does not have long trekking routes. A 45-minute stop is perfect for walking around and taking photos." },
      { day: "Red Tour Stop", desc: "Most visitors spend about 30 minutes here as part of their guided daily Red Tour itinerary." },
      { day: "Quick Photo Break", desc: "If you are driving between Avanos and Goreme, it's a great 15-minute pull-over spot." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "In Front of the Camel", time: "Morning", for: "Iconic Tourist Shot", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "Among the Pink Rocks", time: "Late Afternoon", for: "Lunar Backgrounds", diff: "Easy", img: "/images/valleys/rose-valley.jpg" },
      { name: "High Viewpoint", time: "Daytime", for: "Valley Panorama", diff: "Medium", img: "/images/destinations/uchisar.jpg" },
      { name: "Classic Car by the Rocks", time: "Sunset", for: "Vintage Photography", diff: "Easy", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["🥤 Fresh Orange & Pomegranate Juice Stalls", "🍦 Traditional Maraş Ice Cream", "🥜 Local Nuts and Snack Stands", "🍽️ Fine Dining in Nearby Avanos (10 mins)"],
    stayList: ["📍 (No Hotels or Caves in the Valley)", "🏺 Avanos Riverside Hotels (10 mins away)", "🏘️ Goreme Cave Suites (15 mins away)", "🏰 Zelve / Aktepe Guesthouses"],

    // 10. TRANSPORT
    transTitle: "How to Access Devrent Valley?",
    transList: ["🔴 Join the Red Tour: The easiest and most informative way. Devrent is a standard stop.", "🚗 By Car: Located on the road between Avanos and the Zelve Open Air Museum. Very easy to find with a free parking area.", "🚕 By Taxi: A quick 10-15 minute ride from Goreme or Avanos town centers."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌅 Morning", desc: "Great lighting for photos and avoiding the large tour bus crowds." },
      { name: "☀️ Late Afternoon", desc: "The sun brings out the pink and golden hues of the rocks." },
      { name: "🌸 Spring", desc: "Pleasant weather for exploring the sun-exposed terrain." },
      { name: "❄️ Winter", desc: "Snow resting on the camel rock makes for a unique, rare photograph." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "The famous Camel Rock is fenced off for its protection. Please do not cross the fence or attempt to climb it, as the tuff rock is very fragile.",
      "There is virtually no shade in Devrent Valley. If you visit in the summer midday, bring a hat, sunscreen, and water.",
      "The terrain is dry, powdery, and can be slippery. Wear comfortable sneakers rather than sandals or heels.",
      "You don't need a map here. The valley is compact and you can wander safely without fear of getting lost.",
      "Let your imagination take over! The joy of this valley is seeing shapes that others might not notice."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Zelve Open Air Museum", time: "5 min drive", link: "/museums/zelve" },
      { name: "Pasabag (Monks Valley)", time: "5 min drive", link: "/valleys/pasabag" },
      { name: "Avanos Pottery Town", time: "10 min drive", link: "/destinations/avanos" },
      { name: "Goreme Center", time: "15 min drive", link: "/destinations/goreme" },
      { name: "Uchisar", time: "20 min drive", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Devrent Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Why is it called Imagination Valley?", a: "Because the rocks naturally resemble animals and objects. What you see depends entirely on your imagination. There are no man-made structures here." },
      { q: "Are there any cave churches or underground cities here?", a: "No. Devrent Valley is completely natural. It was never used as a settlement by the Romans or early Christians, unlike Goreme or Zelve." },
      { q: "Do I need to hike for hours?", a: "Not at all! Devrent Valley is a small, compact area right off the main road. It takes only 30 to 45 minutes to walk around and see the main shapes." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Spark Your Imagination?",
    ctaDesc: "Book the Red Tour to discover Devrent Valley, Pasabag, and Avanos with an expert guide.",
    btnPlan: "BOOK THE RED TOUR"
  },
  tr: {
    // 1. HERO
    heroSub: "Hayal Gücü Vadisi",
    heroDesc: "Rüzgarın ve suyun doğanın en eğlenceli heykellerini yarattığı, hayvan şeklindeki peribacalarıyla dolu Ay yüzeyini andıran eşsiz bir vadi.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "KIRMIZI TUR REZERVE ET",
    statLoc: "Avanos, Türkiye",
    statTime: "En İyi Zaman: Sabah/Öğleden Sonra",
    statStay: "Önerilen Süre: 45 Dakika",

    // 2. ABOUT
    aboutTitle: "Devrent (Hayal) Vadisi Hakkında",
    aboutTags: ["📍 Avanos & Zelve Yakınlarında", "🐪 Meşhur Deve Kayası", "🌙 Ay Yüzeyi Manzarası", "🧠 Tamamen Hayal Gücü", "📸 Kısa Fotoğraf Molası", "🚫 Kaya Kilisesi Yoktur", "👨‍👩‍👧 Aile Dostu Parkur"],
    aboutText1: "Kapadokya'daki diğer vadilerin aksine, Devrent Vadisi'nde (bilinen adıyla Hayal Vadisi) tarih boyunca hiçbir insan yaşamamıştır. Burada kaya oyma kiliseler, antik manastırlar veya gizli güvercinlikler bulamazsınız. Bunun yerine, tamamen doğa tarafından şekillendirilmiş büyüleyici bir 'Ay yüzeyi' coğrafyası bulacaksınız.",
    aboutText2: "Milyonlarca yıl boyunca rüzgar ve su erozyonu, volkanik tüf kayalarını tuhaf ve büyüleyici heykellere dönüştürmüştür. En bilineni, girişin hemen yanındaki devasa deve şeklindeki peribacasıdır. Kısa patikalarda yürürken; öpüşen kuşlara, yunuslara, fok balıklarına ve hatta Meryem Ana silüetine benzeyen kayalar göreceksiniz. Gerisi tamamen hayal gücünüze kalmış!",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Deve Peribacası (Camel Rock)", desc: "Devrent Vadisi'nin simgesi. Dinlenen bir deveyi kusursuz bir şekilde andıran bu devasa doğal oluşum.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Öpüşen Kuşlar", desc: "Kayalıklara dikkatlice bakın, penguen veya ördeğe benzeyen iki peribacasının öpüştüğünü göreceksiniz.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Meryem Ana Silüeti", desc: "Çocuğunu kucağında tutan bir rahibe veya Meryem Ana silüetini andıran yalnız ve uzun kaya formasyonu.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Ay Yüzeyi Coğrafyası", desc: "Derin, çorak ve dalgalı tüf tepeleri, vadiye dünya dışı, Ay'a benzer bir görünüm kazandırır.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Napolyon'un Şapkası", desc: "Napolyon Bonapart'ın taktığı ikonik bikorn şapkaya çok benzeyen bir başka ünlü kaya oluşumu.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Yunus Balığı", desc: "Taş dalgaların arasından sıçrayan bir yunus balığına benzeyen kayayı bulmak için hayal gücünüzü kullanın.", img: "/images/destinations/goreme.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Devrent Vadisi Deneyimleri",
    todoCards: [
      { icon: "🔴", title: "Kapadokya Kırmızı Tur", price: 60, rating: "4.9", dur: "Tam Gün", link: "/tours/red-tour" },
      { icon: "🚘", title: "Klasik Araçla Dış Çekim", price: 80, rating: "4.8", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🐪", title: "Camel Safari", price: 35, rating: "4.7", dur: "1 Saat", link: "/tours/camel" },
      { icon: "📸", title: "Uçan Elbise Çekimi", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Jeep Safari Macerası", price: 45, rating: "4.8", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "👑", title: "VIP Özel Minivan Turu", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Devrent Deneyim Rehberi",
    expList: [
      { num: "01", title: "Meşhur Deveyi Bulun", desc: "Vadiye geldiğinizde göreceğiniz ilk şey çitlerle koruma altına alınmış Deve Kayasıdır. Kapadokya'nın en çok fotoğraflanan doğal anıtıdır." },
      { num: "02", title: "Şekil Bulma Oyunu Oynayın", desc: "Aileniz veya arkadaşlarınızla kısa patikalarda dolaşın ve kayalarda kimin daha çok hayvan şekli bulabileceği konusunda yarışın." },
      { num: "03", title: "Sürreal Fotoğraflar Çekin", desc: "Bitki örtüsü olmayan çorak ve dalgalı tüf kayalar, fotoğraflarınız için dünya dışı (sürreal) bir arka plan sağlar." },
      { num: "04", title: "Kırmızı Tur'a (Red Tour) Katılın", desc: "Devrent Vadisi, popüler Kırmızı Tur'un vazgeçilmez durağıdır. Bu tur, vadiyi bir rehber eşliğinde keşfetmenin en kolay yoludur." },
      { num: "05", title: "Girişteki Çarşıyı Gezin", desc: "Vadi girişindeki küçük yerel tezgahlardan Kapadokya hediyelik eşyaları alabilir ve taze sıkılmış meyve suyu içebilirsiniz." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "30-45 Dakika", desc: "Devrent Vadisi'nde uzun trekking rotaları yoktur. Etrafta dolaşıp fotoğraf çekmek için 45 dakikalık bir mola mükemmeldir." },
      { day: "Kırmızı Tur Molası", desc: "Günlük tura katılan ziyaretçiler, rehber eşliğinde burada genellikle 30-40 dakika arası zaman geçirir." },
      { day: "Kısa Fotoğraf Molası", desc: "Avanos ile Göreme arasında aracınızla seyahat ediyorsanız, yol üstünde harika bir 15 dakikalık mola yeridir." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Deve Kayasının Önü", time: "Sabah", for: "İkonik Kapadokya Karesi", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Dalgalı Pembe Kayalar", time: "Öğleden Sonra", for: "Ay Yüzeyi Arka Planı", diff: "Kolay", img: "/images/valleys/rose-valley.jpg" },
      { name: "Yüksek Tepeler", time: "Gündüz", for: "Vadi Panoraması", diff: "Orta", img: "/images/destinations/uchisar.jpg" },
      { name: "Kayalar Arasında Klasik Araç", time: "Gün Batımı", for: "Nostaljik Çekim", diff: "Kolay", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["🥤 Taze Sıkım Portakal ve Nar Suyu Standları", "🍦 Geleneksel Maraş Dondurmacıları", "🥜 Yerel Kuruyemiş ve Hediyelik Eşya Tezgahları", "🍽️ Avanos'ta Nehir Kenarı Restoranları (10 dk)"],
    stayList: ["📍 (Vadi içinde otel veya mağara ev yoktur)", "🏺 Avanos Kızılırmak Kenarı Otelleri (10 dk uzaklıkta)", "🏘️ Göreme Mağara Otelleri (15 dk uzaklıkta)", "🏰 Zelve ve Aktepe Çevresi Pansiyonlar"],

    // 10. TRANSPORT
    transTitle: "Devrent Vadisi'ne Nasıl Gidilir?",
    transList: ["🔴 Kırmızı Tur'a (Red Tour) Katılın: En kolay ve bilgilendirici yol budur. Tur sizi otelinizden alır ve doğrudan buraya getirir.", "🚗 Özel Araçla: Avanos ile Zelve Açık Hava Müzesi arasındaki ana yol üzerindedir. Bulması çok kolaydır ve ücretsiz geniş bir otoparkı vardır.", "🚕 Taksi ile: Göreme veya Avanos ilçe merkezlerinden taksi ile sadece 10-15 dakikada ulaşabilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌅 Sabah Erken", desc: "Fotoğraflar için harika bir ışık vardır ve büyük tur otobüsleri gelmeden sakindir." },
      { name: "☀️ Öğleden Sonra", desc: "Güneş, kayaların pembe ve altın sarısı tonlarını ortaya çıkarır." },
      { name: "🌸 İlkbahar", desc: "Gölge olmayan bu vadide dolaşmak için en ferah ve serin mevsimdir." },
      { name: "❄️ Kış", desc: "Deve kayasının üzerine yağan kar, son derece nadir ve güzel bir fotoğraf karesi sunar." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Meşhur Deve Kayası, zarar görmemesi için tahta çitlerle koruma altına alınmıştır. Tüf kayalar çok kırılgan olduğu için lütfen çitleri aşmayın veya kayaya tırmanmaya çalışmayın.",
      "Devrent Vadisi'nde ağaç veya gölgelik alan neredeyse hiç yoktur. Yaz aylarında öğle sıcağında ziyaret ediyorsanız mutlaka şapka, güneş kremi ve su bulundurun.",
      "Zemin kuru, tozlu ve zaman zaman kaygan olabilir. Sandalet veya topuklu ayakkabı yerine rahat bir spor ayakkabı tercih edin.",
      "Burada haritaya ihtiyacınız yok. Vadi küçük ve kompakttır, kaybolma korkusu olmadan güvenle etrafta dolaşabilirsiniz.",
      "Hayal gücünüzü serbest bırakın! Bu vadinin asıl keyfi, başkalarının fark etmediği şekilleri kayalarda görebilmektir."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Zelve Açık Hava Müzesi", time: "5 dk araçla", link: "/museums/zelve" },
      { name: "Paşabağ Vadisi (Monks)", time: "5 dk araçla", link: "/valleys/pasabag" },
      { name: "Avanos Çömlek Kasabası", time: "10 dk araçla", link: "/destinations/avanos" },
      { name: "Göreme Merkez", time: "15 dk araçla", link: "/destinations/goreme" },
      { name: "Uçhisar", time: "20 dk araçla", link: "/destinations/uchisar" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Devrent Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Neden Hayal (Imagination) Vadisi deniyor?", a: "Çünkü kayalar doğal olarak hayvanlara ve nesnelere benzemektedir. Gördüğünüz şeyler tamamen sizin hayal gücünüze bağlıdır. Burada insan yapımı hiçbir yapı yoktur." },
      { q: "Burada kaya kilisesi veya yeraltı şehri var mı?", a: "Hayır. Devrent Vadisi tamamen doğaldır. Göreme veya Zelve'nin aksine, Romalılar veya ilk Hristiyanlar tarafından hiçbir zaman bir yerleşim yeri olarak kullanılmamıştır." },
      { q: "Saatlerce yürümem gerekecek mi?", a: "Kesinlikle hayır! Devrent Vadisi, ana yolun hemen kenarında küçük ve kompakt bir alandır. Etrafta dolaşmak ve ana şekilleri görmek sadece 30 ila 45 dakika sürer." }
    ],

    // 17. CTA
    ctaTitle: "Hayal Gücünüzü Canlandırmaya Hazır Mısınız?",
    ctaDesc: "Devrent Vadisi, Paşabağ ve Avanos'u uzman bir rehber eşliğinde keşfetmek için Kırmızı Tur'u hemen rezerve edin.",
    btnPlan: "KIRMIZI TUR'U İNCELE"
  },
  es: {
    heroSub: "El Valle de la Imaginación",
    heroDesc: "Un paisaje lunar lleno de chimeneas de hadas con formas de animales, donde el viento y el agua han esculpido la galería de arte más caprichosa de la naturaleza.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR EL TOUR ROJO",
    statLoc: "Avanos, Turquía",
    statTime: "Mejor Época: Mañana/Tarde",
    statStay: "Tiempo Rec: 45 Mins",

    aboutTitle: "Sobre el Valle de Devrent",
    aboutTags: ["📍 Cerca de Avanos y Zelve", "🐪 La Famosa Roca Camello", "🌙 Paisaje Lunar", "🧠 Pura Imaginación", "📸 Parada Fotográfica", "🚫 Sin Iglesias en Cuevas", "👨‍👩‍👧 Ideal para Familias"],
    aboutText1: "A diferencia de otros valles en Capadocia, el Valle de Devrent (conocido como Valle de la Imaginación) nunca ha sido habitado por humanos. No encontrarás iglesias talladas en la roca ni monasterios; en su lugar, encontrarás un paisaje lunar espectacular moldeado completamente por la naturaleza.",
    aboutText2: "A lo largo de millones de años, la erosión ha esculpido la toba volcánica en formas fascinantes. La más famosa es la roca gigante en forma de camello. Al caminar por sus cortos senderos, verás rocas que parecen patos besándose, delfines, e incluso la silueta de la Virgen María. ¡Deja volar tu imaginación!",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "La Roca Camello", desc: "El símbolo icónico del Valle de Devrent. Una formación natural gigante que parece un camello descansando.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Pájaros Besándose", desc: "Mira de cerca los pilares para ver dos chimeneas de hadas que parecen pingüinos o patos besándose.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "La Virgen María", desc: "Una formación rocosa aislada que muchos creen que se asemeja a la silueta de una monja o la Virgen.", img: "/images/destinations/uchisar.jpg", link: "#" },
      { name: "Paisaje Lunar", desc: "Las colinas de toba profunda y estéril le dan al valle un aspecto lunar de otro mundo.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Sombrero de Napoleón", desc: "Otra formación famosa que se asemeja fuertemente al icónico sombrero bicornio usado por Napoleón.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "El Delfín", desc: "Deja volar tu imaginación y descubre una roca que parece un delfín saltando de las olas de piedra.", img: "/images/destinations/goreme.jpg", link: "#" }
    ],

    todoTitle: "Experiencias en Devrent",
    todoCards: [
      { icon: "🔴", title: "Tour Rojo de Capadocia", price: 60, rating: "4.9", dur: "Día Completo", link: "/tours/red-tour" },
      { icon: "🚘", title: "Fotos con Coche Clásico", price: 80, rating: "4.8", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🐪", title: "Safari en Camello", price: 35, rating: "4.7", dur: "1 Hora", link: "/tours/camel" },
      { icon: "📸", title: "Sesión Vestido Volador", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.8", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "👑", title: "Tour Privado VIP", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Encuentra el Famoso Camello", desc: "Lo primero que verás es la Roca Camello cercada. ¡Es la roca más fotografiada de Capadocia!" },
      { num: "02", title: "Juega a Encontrar Formas", desc: "Pasea por los senderos cortos con tu familia y compite para ver quién encuentra más formas de animales." },
      { num: "03", title: "Toma Fotos Lunares", desc: "Las curvas estériles de la roca de toba proporcionan un telón de fondo increíble para la fotografía." },
      { num: "04", title: "Únete al Tour Rojo", desc: "El Valle de Devrent es una parada principal en el popular Tour Rojo. Es la forma más fácil de visitarlo con un guía." },
      { num: "05", title: "Compra Souvenirs", desc: "Explora los pequeños puestos locales en la entrada para comprar baratijas y zumos frescos." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "30-45 Minutos", desc: "No tiene largas rutas de trekking. Una parada de 45 minutos es perfecta para caminar y tomar fotos." },
      { day: "Parada del Tour Rojo", desc: "La mayoría de los visitantes pasan unos 30 minutos aquí como parte de su itinerario guiado del Tour Rojo." },
      { day: "Parada Fotográfica", desc: "Si conduces entre Avanos y Göreme, es un lugar fantástico para detenerse 15 minutos." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Frente al Camello", time: "Mañana", for: "Foto Turística Icónica", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Entre las Rocas", time: "Tarde", for: "Fondos Lunares", diff: "Fácil", img: "/images/valleys/rose-valley.jpg" },
      { name: "Mirador Alto", time: "Día", for: "Panorama del Valle", diff: "Medio", img: "/images/destinations/uchisar.jpg" },
      { name: "Coche Clásico y Rocas", time: "Atardecer", for: "Fotografía Vintage", diff: "Fácil", img: "/images/valleys/baglidere.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["🥤 Puestos de Zumo Fresco", "🍦 Helado Tradicional Maraş", "🥜 Puestos de Frutos Secos", "🍽️ Restaurantes en Avanos (10 min)"],
    stayList: ["📍 (Sin hoteles ni cuevas en el valle)", "🏺 Hoteles en Avanos (10 min)", "🏘️ Suites Cueva en Göreme (15 min)", "🏰 Pensiones en Zelve / Aktepe"],

    transTitle: "¿Cómo Llegar al Valle de Devrent?",
    transList: ["🔴 Tour Rojo: La forma más fácil. Devrent es una parada estándar.", "🚗 En Coche: En la carretera entre Avanos y el Museo de Zelve. Fácil de encontrar con aparcamiento gratuito.", "🚕 En Taxi: Un rápido viaje de 10-15 minutos desde Göreme o Avanos."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌅 Mañana", desc: "Buena luz para fotos y evitar la multitud de autobuses." },
      { name: "☀️ Tarde", desc: "El sol resalta los tonos rosados y dorados de las rocas." },
      { name: "🌸 Primavera", desc: "Clima agradable para explorar el terreno expuesto al sol." },
      { name: "❄️ Invierno", desc: "La nieve sobre la roca camello hace una foto única y rara." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "La famosa Roca Camello está vallada para su protección. No cruces la valla, la roca de toba es muy frágil.",
      "Prácticamente no hay sombra. Si visitas al mediodía en verano, lleva sombrero, protector solar y agua.",
      "El terreno es seco y polvoriento. Usa zapatillas cómodas en lugar de sandalias o tacones.",
      "No necesitas un mapa. El valle es pequeño y puedes deambular con seguridad sin miedo a perderte.",
      "¡Deja volar tu imaginación! La alegría de este valle es ver formas que otros podrían no notar."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Museo al Aire Libre de Zelve", time: "5 min en coche", link: "/museums/zelve" },
      { name: "Pasabag (Valle de los Monjes)", time: "5 min en coche", link: "/valleys/pasabag" },
      { name: "Avanos", time: "10 min en coche", link: "/destinations/avanos" },
      { name: "Göreme", time: "15 min en coche", link: "/destinations/goreme" },
      { name: "Uchisar", time: "20 min en coche", link: "/destinations/uchisar" }
    ],

    popToursTitle: "Tours que Visitan el Valle de Devrent",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Por qué se llama Valle de la Imaginación?", a: "Porque las rocas se asemejan a animales y objetos. Lo que ves depende de tu imaginación. No hay estructuras hechas por el hombre." },
      { q: "¿Hay iglesias en cuevas o ciudades subterráneas aquí?", a: "No. El Valle de Devrent es completamente natural. Nunca fue un asentamiento." },
      { q: "¿Tengo que caminar durante horas?", a: "¡En absoluto! Es un área pequeña junto a la carretera principal. Toma solo 30 a 45 minutos caminar y ver las formas principales." }
    ],

    ctaTitle: "¿Listo para Despertar tu Imaginación?",
    ctaDesc: "Reserva el Tour Rojo para descubrir el Valle de Devrent, Pasabag y Avanos con un guía experto.",
    btnPlan: "RESERVAR EL TOUR ROJO"
  }
};

export default function DevrentValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = DEVRENT_DICT[aktifDil] || DEVRENT_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Devrent Imagination Valley" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            DEVRENT VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
              {t.btnExplore}
            </a>
            <Link href="/tours/red-tour" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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

      {/* 8 & 9. EAT & STAY */}
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
            <Link href="/tours/red-tour" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Book The Red Tour &rarr;
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
          {[t.todoCards[0], t.todoCards[2], t.todoCards[4]].map((card: any, idx: number) => (
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

      {/* 15. GOOGLE MAP (Devrent Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Devrent Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12570.612015840615!2d34.8705!3d38.6738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6a6a9b40fa97%3A0xbcc0e2b4d18c1b35!2sDevrent%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
            <Link href="/tours/red-tour" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}