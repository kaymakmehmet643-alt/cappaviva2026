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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - PIGEON VALLEY
// =======================================================
const PIGEON_VALLEY_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Historic Dovecotes Trail",
    heroDesc: "Connecting Uchisar Castle to Goreme, Pigeon Valley is famous for centuries-old carved pigeon lofts, scenic viewpoints, and lush hiking trails.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A GUIDED HIKE",
    statLoc: "Uchisar - Goreme",
    statTime: "Best Time: Morning & Sunset",
    statStay: "Rec. Time: 2 Hours",

    // 2. ABOUT
    aboutTitle: "About Pigeon Valley (Güvercinlik)",
    aboutTags: ["📍 Between Uchisar & Goreme", "🕊️ Century-Old Dovecotes", "🧿 Iconic Evil Eye Tree", "🥾 4km Easy Hiking Trail", "🏰 Uchisar Castle Views", "🍇 Fruit & Walnut Orchards", "☕ Cliffside Viewpoint Cafes"],
    aboutText1: "Pigeon Valley (Güvercinlik Vadisi) stretches for roughly 4 kilometers between the towering citadel of Uchisar Castle and the town of Goreme. The valley takes its name from the thousands of pigeon houses (dovecotes) hand-carved into the volcanic tuff cliffs since ancient Byzantine times.",
    aboutText2: "Historically, locals relied on pigeon droppings as a rich organic fertilizer for the infertile volcanic soil, crucial for cultivating grapes and vegetables. Today, it stands as one of the most accessible, scenic, and rewarding nature walks in Cappadocia, offering lush greenery, cave architecture, and iconic panorama viewpoints.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "The Evil Eye Tree", desc: "The legendary viewpoint tree decorated with thousands of blue evil eye beads overlooking the valley.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Historic Cliff Dovecotes", desc: "Marvel at multi-tiered pigeon lofts painted with traditional red folk motifs high on cliff faces.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Uchisar Castle Panorama", desc: "The upper rim offers a majestic vista of Cappadocia's highest rock castle framing the canyon.", img: "/images/destinations/uchisar.jpg", link: "/destinations/uchisar" },
      { name: "Valley Floor Walking Trail", desc: "A serene, shaded pathway tracing a seasonal brook flanked by quince, apple, and walnut trees.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Pigeon Feeding Terrace", desc: "Gather with hundreds of fluttering pigeons at the scenic feeding decks on the Uchisar ridge.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Goreme Valley Exit", desc: "The lower trailhead delivers walkers right into the cave neighborhoods on the fringe of Goreme.", img: "/images/destinations/goreme.jpg", link: "/destinations/goreme" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Pigeon Valley",
    todoCards: [
      { icon: "🥾", title: "Guided Downhill Trek", price: 35, rating: "4.9", dur: "2.5 Hours", link: "/tours/hiking" },
      { icon: "🐎", title: "Horseback Trail Ride", price: 40, rating: "4.8", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🚘", title: "Classic Car at Viewpoint", price: 80, rating: "4.9", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🏍️", title: "ATV Ridge Safari", price: 35, rating: "4.8", dur: "2 Hours", link: "/tours/atv" },
      { icon: "📸", title: "Panoramic Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🟢", title: "Cappadocia Green Tour", price: 65, rating: "4.9", dur: "Full Day", link: "/tours/green-tour" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" },
      { icon: "👑", title: "Private VIP Valley Tour", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Pigeon Valley Experience Guide",
    expList: [
      { num: "01", title: "Hike Downhill from Uchisar", desc: "Start from Uchisar Castle and walk down towards Goreme. Going downhill saves energy and keeps the best views directly in front of you." },
      { num: "02", title: "Snap the Evil Eye Tree", desc: "Stop at the viewpoint near Uchisar to photograph the ceramic pots and blue evil eye charms hanging against the valley backdrop." },
      { num: "03", title: "Feed the Flock of Doves", desc: "Grab a small cup of grain from local vendors at the viewpoint deck and watch dozens of friendly pigeons swarm in around you." },
      { num: "04", title: "Spot the Painted Lofts", desc: "Look up at the cliffs along the trail to spot traditional red paint and plaster details used to attract pigeons to nest." },
      { num: "05", title: "Enjoy Fresh Tea on the Cliff", desc: "Relax with freshly brewed Turkish tea or fresh pomegranate juice at one of the rustic cafes overlooking the canyon." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "30–45 Mins (Viewpoint)", desc: "Quick panoramic stop at the Uchisar overlook for photos, tea, and pigeon feeding." },
      { day: "1.5–2 Hours (One-Way Hike)", desc: "The ideal duration to walk the full downhill trail from Uchisar to Goreme at an easy pace." },
      { day: "Half Day (Exploration)", desc: "Combine climbing Uchisar Castle, hiking through Pigeon Valley, and having lunch in Goreme." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Evil Eye Tree & Castle", time: "Morning", for: "Iconic Souvenir Shot", diff: "Easy", img: "/images/valleys/love-panorama.jpg" },
      { name: "Cliffside Dovecote Facades", time: "Daytime", for: "Architectural Detail", diff: "Medium", img: "/images/valleys/rose-valley.jpg" },
      { name: "Looking Up at Uchisar", time: "Afternoon", for: "Scale & Dramatic Height", diff: "Easy", img: "/images/destinations/uchisar.jpg" },
      { name: "Lush Valley Tunnel Path", time: "Late Morning", for: "Nature & Greenery", diff: "Easy", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["☕ Cliffside Panorama Tea Gardens", "🥤 Fresh Pomegranate & Orange Stands", "🥜 Dried Fruits & Roasted Pumpkin Seeds", "🍽️ Traditional Cave Restaurants in Uchisar & Goreme"],
    stayList: ["🏰 Luxury Cave Suites in Uchisar (Edge of Valley)", "💎 Boutique Cave Hotels in Goreme (Trail End)", "🛎️ Heritage Mansions with Valley Terraces", "📍 (No overnight camping inside the canyon)"],

    // 10. TRANSPORT
    transTitle: "How to Access Pigeon Valley?",
    transList: ["🥾 Upper Trailhead (Uchisar): Located directly below Uchisar Castle on the main road between Nevsehir and Goreme.", "🥾 Lower Trailhead (Goreme): Begins on the southern edge of Goreme near the canal and dirt track leading uphill.", "🚌 Public Minibus: Local minibuses run between Goreme and Uchisar every 30 minutes, dropping you right at the trailhead.", "🚕 Taxi / Private Transfer: Easily hailed from either town center for a quick 5-minute ride."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Lush vegetation, blooming orchards, and pleasant trail temperatures." },
      { name: "☀️ Summer", desc: "Hike early in the morning before noon heat builds inside the canyon." },
      { name: "🍂 Autumn", desc: "Golden leaves across the valley floor and crisp hiking conditions." },
      { name: "❄️ Winter", desc: "Snow highlights the white tuff formations and dovecote cutouts." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Always start the hike in Uchisar and walk down to Goreme. Walking in reverse requires continuous uphill climbing on loose gravel.",
      "Wear sturdy shoes with good tread. The initial descent from Uchisar has slick patches of powdery volcanic dust.",
      "The trail is generally well-marked with wooden signs and trail posts, making it very safe for self-guided solo hikers.",
      "Keep small cash change on hand if you want to buy bird feed or fresh juice at the viewpoints.",
      "Combine this trail with Love Valley on the opposite side of Goreme for a full day of independent walking."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Uchisar Castle", time: "Trailhead", link: "/destinations/uchisar" },
      { name: "Goreme Center", time: "Trail End", link: "/destinations/goreme" },
      { name: "Love Valley", time: "10 min drive", link: "/valleys/love-valley" },
      { name: "White Valley", time: "Connected", link: "/valleys/white-valley" },
      { name: "Zemi Valley", time: "10 min drive", link: "/valleys/zemi" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Pigeon Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Why are there so many pigeons in this valley?", a: "Historically, farmers needed fertilizer for vineyards in the nutrient-poor volcanic soil. They carved pigeon houses high in the rock to harvest manure and eggs for agricultural and fresco-painting purposes." },
      { q: "How difficult is the hike?", a: "It is rated as easy to moderate. When walking downhill from Uchisar to Goreme, it takes about 1.5 to 2 hours of gentle walking along dirt paths suitable for most fitness levels." },
      { q: "Is Pigeon Valley included in regular daily tours?", a: "Yes. Almost all Red Tours and Green Tours include a photo stop at the famous Pigeon Valley panorama viewpoint in Uchisar." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore Pigeon Valley?",
    ctaDesc: "Book your guided hike, horseback ride, or sunset safari today.",
    btnPlan: "BOOK YOUR EXPERIENCE"
  },
  tr: {
    // 1. HERO
    heroSub: "Tarihi Güvercinlikler ve Doğa Yolu",
    heroDesc: "Uçhisar Kalesi ile Göreme arasında uzanan; asırlık kaya oyma güvercinlikleri, nazar boncuklu ağaçları ve yeşil patikalarıyla ünlü Güvercinlik Vadisi.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "YÜRÜYÜŞ TURU REZERVE ET",
    statLoc: "Uçhisar - Göreme",
    statTime: "En İyi Zaman: Sabah & Gün Batımı",
    statStay: "Önerilen Süre: 2 Saat",

    // 2. ABOUT
    aboutTitle: "Güvercinlik Vadisi Hakkında",
    aboutTags: ["📍 Uçhisar ile Göreme Arasında", "🕊️ Asırlık Güvercinlikler", "🧿 Nazar Boncuklu Ağaç", "🥾 4 km Kolay Yürüyüş Yolu", "🏰 Uçhisar Kalesi Manzarası", "🍇 Meyve & Ceviz Bahçeleri", "☕ Seyir Tepesi Kafeleri"],
    aboutText1: "Güvercinlik Vadisi, Uçhisar Kalesi'nin heybetli eteklerinden başlayıp Göreme kasabasının girişine kadar yaklaşık 4 kilometre boyunca uzanır. Vadi, adını Bizans döneminden bu yana volkanik tüf kayaların dik yamaçlarına el işçiliğiyle oyulmuş binlerce güvercin yuvasından alır.",
    aboutText2: "Kapadokya halkı geçmişte, bölgenin volkanik ama verimsiz topraklarında bağcılık yapabilmek için güvercin gübresini organik gübre olarak kullanmıştır. Günümüzde bu vadi; yemyeşil doğası, gölgeli yürüyüş parkuru, panoramik seyir terasları ve kültürel dokusuyla Kapadokya'nın en çok tercih edilen yürüyüş rotasıdır.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Nazar Boncuklu Ağaç", desc: "Uçhisar seyir noktasında vadiye karşı binlerce nazar boncuğu ve çömlekle süslenmiş ikonik ağaç.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Tarihi Kaya Güvercinlikleri", desc: "Kaya yüzeylerine oyulmuş, dış cepheleri geleneksel aşı boyalarıyla süslenmiş çok katlı güvercin yuvaları.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Uçhisar Kalesi Panoraması", desc: "Vadinin üst kenarından Kapadokya'nın en yüksek noktası olan kaleyi tüm heybetiyle izleyin.", img: "/images/destinations/uchisar.jpg", link: "/destinations/uchisar" },
      { name: "Vadi Tabanı Yürüyüş Patikası", desc: "Ceviz, ayva ve elma ağaçlarının gölgesinde uzanan huzurlu ve hafif eğimli yürüyüş yolu.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Güvercin Besleme Terası", desc: "Uçhisar seyir noktasında yüzlerce güvercinin arasına karışarak yem verebileceğiniz teras.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Göreme Vadi Çıkışı", desc: "Yürüyüşün sonunda sizi Göreme'nin otantik mağara mahallelerine çıkaran keyifli bitiş noktası.", img: "/images/destinations/goreme.jpg", link: "/destinations/goreme" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Güvercinlik Vadisi Deneyimleri",
    todoCards: [
      { icon: "🥾", title: "Rehberli Vadi İniş Yürüyüşü", price: 35, rating: "4.9", dur: "2.5 Saat", link: "/tours/hiking" },
      { icon: "🐎", title: "Atlı Safari Turu", price: 40, rating: "4.8", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🚘", title: "Seyir Tepesinde Klasik Araç", price: 80, rating: "4.9", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🏍️", title: "ATV Sırt Safarisi", price: 35, rating: "4.8", dur: "2 Saat", link: "/tours/atv" },
      { icon: "📸", title: "Fotoğraf Çekimi", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🟢", title: "Kapadokya Yeşil Tur", price: 65, rating: "4.9", dur: "Tam Gün", link: "/tours/green-tour" },
      { icon: "🔴", title: "Kapadokya Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" },
      { icon: "👑", title: "VIP Özel Vadi Turu", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Güvercinlik Deneyim Rehberi",
    expList: [
      { num: "01", title: "Uçhisar'dan Aşağıya Doğru Yürüyün", desc: "Yürüyüşe mutlaka Uçhisar Kalesi tarafından başlayıp Göreme'ye doğru inin; iniş rotası hem yormaz hem de manzarayı önünüze serer." },
      { num: "02", title: "Nazar Boncuklu Ağacı Fotoğraflayın", desc: "Uçhisar seyir alanındaki meşhur nazar boncuklu ağacın önünde klasik Kapadokya fotoğrafınızı çektirin." },
      { num: "03", title: "Güvercinlere Yem Atın", desc: "Seyir noktasındaki yerel satıcılardan yem alıp vadiye adını veren yüzlerce güvercini besleyin." },
      { num: "04", title: "Boyalı Güvercinlikleri İnceleyin", desc: "Kaya duvarlarındaki oyuklara yakından bakın; güvercinleri çekmek için taşlara sürülen geleneksel kırmızı boyaları görebilirsiniz." },
      { num: "05", title: "Uçurum Kenarında Çay Molası Verin", desc: "Seyir terasındaki salaş kafelerden taze sıkma nar suyu veya sıcak bir çay alıp vadi derinliğini izleyin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "30–45 Dk (Seyir Molası)", desc: "Sadece Uçhisar seyir terasına uğrayıp fotoğraf çekmek, güvercin beslemek ve çay içmek için." },
      { day: "1.5–2 Saat (Tek Yön Yürüyüş)", desc: "Uçhisar'dan Göreme'ye vadi tabanını dinlene dinlene yürümek için ideal süre." },
      { day: "Yarım Gün (Kombine Plan)", desc: "Uçhisar Kalesi'ne çıkış + Güvercinlik Vadisi yürüyüşü + Göreme'de öğle yemeği." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Nazar Ağacı ve Kale", time: "Sabah", for: "İkonik Kapadokya Karesi", diff: "Kolay", img: "/images/valleys/love-panorama.jpg" },
      { name: "Kaya Güvercinlikleri", time: "Gündüz", for: "Mimari ve Tarih", diff: "Orta", img: "/images/valleys/rose-valley.jpg" },
      { name: "Vadi Tabanından Kale Manzarası", time: "Öğleden Sonra", for: "Heybetli Açı", diff: "Kolay", img: "/images/destinations/uchisar.jpg" },
      { name: "Ağaç Tünelli Patika", time: "Öğle", for: "Yemyeşil Doğa", diff: "Kolay", img: "/images/valleys/baglidere.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["☕ Uçhisar Sırtı Panoramik Çay Bahçeleri", "🥤 Taze Sıkılmış Nar ve Portakal Suyu Standları", "🥜 Yöresel Kuru Yemiş ve Kabak Çekirdeği", "🍽️ Uçhisar & Göreme Mağara Restoranları"],
    stayList: ["🏰 Uçhisar Lüks Mağara Süitleri (Vadi Kenarı)", "💎 Göreme Butik Otelleri (Yürüyüş Bitişi)", "🛎️ Vadi Manzaralı Teras Konakları", "📍 (Vadi içinde konaklama tesisi bulunmaz)"],

    // 10. TRANSPORT
    transTitle: "Güvercinlik Vadisi'ne Nasıl Gidilir?",
    transList: ["🥾 Üst Başlangıç (Uçhisar): Uçhisar Kalesi'nin hemen alt tarafında, Nevşehir-Göreme ana yolu üzerindedir.", "🥾 Alt Başlangıç (Göreme): Göreme merkezinden Uçhisar yönüne giden çıkıştan toprak patikaya girilir.", "🚌 Dolmuşla: Nevşehir-Göreme dolmuşları her 30 dakikada bir vadi başlangıç noktasından geçer.", "🚕 Taksi: Göreme veya Uçhisar merkezden 5 dakikalık taksi mesafesindedir."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Çiçek açan meyve bahçeleri ve serin yürüyüş havası." },
      { name: "☀️ Yaz", desc: "Öğle sıcağına kalmamak için sabah erken saatlerde yürünmeli." },
      { name: "🍂 Sonbahar", desc: "Sararan ceviz yapraklarıyla vadi tabanında nostaljik yürüyüş." },
      { name: "❄️ Kış", desc: "Beyaz tüf kayalar ile karın oluşturduğu huzurlu sessizlik." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Yürüyüşü mutlaka Uçhisar'dan Göreme'ye doğru (aşağı yönde) yapın. Tersine yürümek kumlu yokuş yukarı sürekli tırmanış gerektirir.",
      "Tabanı kaymayan spor ayakkabı giyin; Uçhisar'dan vadi tabanına ilk iniş noktası ince tüf tozu yüzünden biraz kaygandır.",
      "Patika boyunca tahta yön levhaları vardır, rehbersiz olarak kendi başınıza çok rahat ve güvenle yürüyebilirsiniz.",
      "Seyir tepesinde güvercin yemi almak veya taze meyve suyu içmek için yanınızda bozuk para bulundurun.",
      "Yürüyüşü tamamlayıp Göreme'ye ulaştıktan sonra aynı gün Aşk Vadisi'ne devam ederek harika bir tam gün yürüyüş rotası oluşturabilirsiniz."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Uçhisar Kalesi", time: "Başlangıçta", link: "/destinations/uchisar" },
      { name: "Göreme Merkez", time: "Bitişte", link: "/destinations/goreme" },
      { name: "Aşk Vadisi (Love Valley)", time: "10 dk araçla", link: "/valleys/love-valley" },
      { name: "Beyaz Vadi", time: "Bağlantılı", link: "/valleys/white-valley" },
      { name: "Zemi Vadisi", time: "10 dk araçla", link: "/valleys/zemi" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Güvercinlik Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Neden bu kadar çok güvercin var?", a: "Eski dönemlerde bölge halkı volkanik kayalara güvercinlikler oyarak güvercin gübresini toplamış ve bu gübreyi üzüm bağlarında kullanarak Kapadokya'nın ünlü bağcılık kültürünü yaşatmıştır." },
      { q: "Yürüyüş ne kadar sürer ve zor mu?", a: "Kolay-orta seviye bir parkurdur. Uçhisar'dan Göreme'ye iniş yönünde yüründüğünde yaklaşık 4 kilometredir ve sakin bir tempoda 1.5 - 2 saat sürer." },
      { q: "Günlük turlarda vadiye gidiliyor mu?", a: "Evet. Bölgedeki neredeyse tüm Kırmızı ve Yeşil turların programında Uçhisar'daki Güvercinlik Vadisi seyir terasında fotoğraf molası bulunur." }
    ],

    // 17. CTA
    ctaTitle: "Güvercinlik Vadisi'ni Keşfetmeye Hazır Mısın?",
    ctaDesc: "Rehberli yürüyüş, atlı safari veya klasik araç turu için hemen yerini ayırt.",
    btnPlan: "DENEYİMİNİ REZERVE ET"
  },
  es: {
    heroSub: "El Sendero Histórico de Palomares",
    heroDesc: "Conectando el Castillo de Uchisar con Göreme, el Valle de las Palomas es famoso por sus palomares tallados, miradores y verdes senderos.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR TREKKING GUIADO",
    statLoc: "Uchisar - Göreme",
    statTime: "Mejor Época: Mañana y Atardecer",
    statStay: "Tiempo Rec: 2 Horas",

    aboutTitle: "Sobre el Valle de las Palomas",
    aboutTags: ["📍 Entre Uchisar y Göreme", "🕊️ Palomares Centenarios", "🧿 Árbol del Ojo Turco", "🥾 Sendero Fácil de 4km", "🏰 Vistas del Castillo de Uchisar", "🍇 Huertos Frutales", "☕ Cafés con Vistas Panorámicas"],
    aboutText1: "El Valle de las Palomas (Güvercinlik Vadisi) se extiende a lo largo de 4 kilómetros entre el Castillo de Uchisar y el pueblo de Göreme. Toma su nombre de los miles de palomares tallados a mano en los acantilados de toba volcánica desde la época bizantina.",
    aboutText2: "Históricamente, los agricultores recolectaban el estiércol de paloma como fertilizante orgánico para los viñedos en suelos volcánicos. Hoy es uno de los paseos naturales más accesibles y hermosos de Capadocia, con vegetación frutal y miradores icónicos.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Árbol del Ojo Turco", desc: "El legendario mirador decorado con amuletos azules y vasijas de barro sobre el cañón.", img: "/images/valleys/love-panorama.jpg", link: "#" },
      { name: "Palomares en Acantilados", desc: "Admira los palomares multinivel pintados con motivos tradicionales en la roca.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Mirador del Castillo de Uchisar", desc: "Vistas espectaculares del punto más alto de Capadocia vigilando el valle.", img: "/images/destinations/uchisar.jpg", link: "/destinations/uchisar" },
      { name: "Sendero en el Fondo del Valle", desc: "Caminata serena y sombreada junto a nogales, membrilleros y manzanos.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Terraza de Alimentación de Palomas", desc: "Comparte con cientos de palomas en los muelles panorámicos de Uchisar.", img: "/images/destinations/cavusin.jpg", link: "#" },
      { name: "Salida hacia Göreme", desc: "El sendero desemboca directamente en los barrios cueva del pueblo de Göreme.", img: "/images/destinations/goreme.jpg", link: "/destinations/goreme" }
    ],

    todoTitle: "Experiencias en el Valle",
    todoCards: [
      { icon: "🥾", title: "Trekking Guiado de Bajada", price: 35, rating: "4.9", dur: "2.5 Horas", link: "/tours/hiking" },
      { icon: "🐎", title: "Paseo a Caballo", price: 40, rating: "4.8", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🚘", title: "Coche Clásico en el Mirador", price: 80, rating: "4.9", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🏍️", title: "Safari ATV por la Cresta", price: 35, rating: "4.8", dur: "2 Horas", link: "/tours/atv" },
      { icon: "📸", title: "Sesión Fotográfica", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🟢", title: "Tour Verde de Capadocia", price: 65, rating: "4.9", dur: "Día Completo", link: "/tours/green-tour" },
      { icon: "🔴", title: "Tour Rojo de Capadocia", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" },
      { icon: "👑", title: "Tour Privado VIP", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Camina de Uchisar a Göreme", desc: "Empieza la ruta en Uchisar para caminar en descenso; es más descansado y tendrás las mejores vistas de frente." },
      { num: "02", title: "Fotografía el Árbol del Ojo Turco", desc: "El punto fotográfico clásico de Capadocia con amuletos azules y el cañón de fondo." },
      { num: "03", title: "Alimenta a las Palomas", desc: "Compra grano a los vendedores locales y disfruta viendo a cientos de palomas revolotear." },
      { num: "04", title: "Observa los Palomares Pintados", desc: "Fíjate en las marcas rojas tradicionales usadas para atraer a las aves a anidar en las rocas." },
      { num: "05", title: "Toma Té Turco en el Borde", desc: "Relájate con té turco caliente o zumo de granada en las terrazas con vista al cañón." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "30–45 Mins (Solo Mirador)", desc: "Parada rápida en el mirador de Uchisar para fotos, té y alimentar palomas." },
      { day: "1.5–2 Horas (Caminata Completa)", desc: "El tiempo ideal para descender todo el sendero desde Uchisar hasta Göreme con calma." },
      { day: "Medio Día (Combinado)", desc: "Castillo de Uchisar + Caminata por el Valle de las Palomas + Almuerzo en Göreme." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Árbol del Ojo Turco & Castillo", time: "Mañana", for: "Foto Clásica de Capadocia", diff: "Fácil", img: "/images/valleys/love-panorama.jpg" },
      { name: "Fachadas de Palomares", time: "Día", for: "Historia y Arquitectura", diff: "Medio", img: "/images/valleys/rose-valley.jpg" },
      { name: "Castillo desde el Fondo", time: "Tarde", for: "Escala y Altura", diff: "Fácil", img: "/images/destinations/uchisar.jpg" },
      { name: "Sendero Verde entre Árboles", time: "Mediodía", for: "Naturaleza", diff: "Fácil", img: "/images/valleys/baglidere.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["☕ Jardines de Té Panorámicos en Uchisar", "🥤 Zumo Fresco de Granada y Naranja", "🥜 Frutos Secos y Semillas de Calabaza", "🍽️ Restaurantes Cueva en Uchisar y Göreme"],
    stayList: ["🏰 Suites Cueva de Lujo en Uchisar (Borde del Valle)", "💎 Hoteles Boutique en Göreme (Final del Sendero)", "🛎️ Mansiones Históricas con Terrazas", "📍 (No hay zonas de acampada dentro del cañón)"],

    transTitle: "¿Cómo Llegar al Valle de las Palomas?",
    transList: ["🥾 Entrada Superior (Uchisar): Debajo del Castillo de Uchisar, en la carretera principal entre Nevsehir y Göreme.", "🥾 Entrada Inferior (Göreme): Inicia en el extremo sur de Göreme siguiendo el camino de tierra hacia la colina.", "🚌 Minibús Público: Salen cada 30 minutos entre Göreme y Uchisar dejándote en la misma entrada.", "🚕 Taxi: A solo 5 minutos en coche desde el centro de Göreme o Uchisar."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Primavera", desc: "Huertos en flor y temperaturas ideales para caminar." },
      { name: "☀️ Verano", desc: "Haz la caminata temprano por la mañana para evitar el calor." },
      { name: "🍂 Otoño", desc: "Hojas doradas de nogal a lo largo del sendero." },
      { name: "❄️ Invierno", desc: "El blanco de la toba volcánica y la nieve crean un paisaje sereno." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Inicia siempre en Uchisar y baja hacia Göreme. Caminar en sentido contrario exige subida continua sobre grava.",
      "Lleva calzado con buena tracción; la primera bajada desde Uchisar puede ser resbaladiza por el polvo volcánico.",
      "El sendero cuenta con señalización de madera y es muy seguro para recorrerlo por cuenta propia.",
      "Lleva cambio en efectivo si deseas comprar comida para las palomas o zumo en los puestos miradores.",
      "Al terminar en Göreme, puedes enlazar con el Valle del Amor para un día completo de caminatas independientes."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Castillo de Uchisar", time: "En el Inicio", link: "/destinations/uchisar" },
      { name: "Centro de Göreme", time: "Al Final", link: "/destinations/goreme" },
      { name: "Valle del Amor", time: "10 min en coche", link: "/valleys/love-valley" },
      { name: "Valle Blanco", time: "Conectado", link: "/valleys/white-valley" },
      { name: "Valle de Zemi", time: "10 min en coche", link: "/valleys/zemi" }
    ],

    popToursTitle: "Tours que Visitan el Valle de las Palomas",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Por qué hay tantas palomas en este valle?", a: "Antiguamente se tallaban palomares en los acantilados para recoger el estiércol, que servía como fertilizante natural esencial para los viñedos en el suelo volcánico." },
      { q: "¿Qué tan difícil es la caminata?", a: "Es de nivel fácil a moderado. Al caminar cuesta abajo desde Uchisar a Göreme, son unos 4 km que se recorren en 1.5 a 2 horas a paso relajado." },
      { q: "¿Está incluido en los tours diarios?", a: "Sí. Casi todos los Tours Rojos y Tours Verdes incluyen una parada fotográfica en el mirador panorámico del Valle de las Palomas en Uchisar." }
    ],

    ctaTitle: "¿Listo para Recorrer el Valle de las Palomas?",
    ctaDesc: "Reserva tu caminata guiada, paseo a caballo o tour clásico hoy.",
    btnPlan: "RESERVAR TU EXPERIENCIA"
  }
};

export default function PigeonValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = PIGEON_VALLEY_DICT[aktifDil] || PIGEON_VALLEY_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-yellow-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Pigeon Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-yellow-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            PIGEON VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl shadow-yellow-500/20">
              {t.btnExplore}
            </a>
            <Link href="/book?package=horse" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 transition-all">
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
            <Link href="/transfer" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
              Book Airport Transfer &rarr;
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
          {[t.todoCards[0], t.todoCards[1], t.todoCards[5]].map((card: any, idx: number) => (
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

      {/* 15. GOOGLE MAP (Pigeon Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Pigeon Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12577.208665672808!2d34.805!3d38.636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6838a5df766f%3A0x6b4fb6c17d84f4e7!2zR8O8dmVyY2lubGlrIFZhZGlzaQ!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
            <Link href="/book?package=horse" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}