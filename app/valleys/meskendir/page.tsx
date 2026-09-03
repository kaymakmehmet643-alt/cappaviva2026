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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - MESKENDIR VALLEY
// =======================================================
const MESKENDIR_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Valley of Hidden Tunnels",
    heroDesc: "Embark on Cappadocia's most adventurous hiking trail, featuring cool, dark rock tunnels, ancient cedar trees, and the majestic Meskendir Church.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A GUIDED TREK",
    statLoc: "Ortahisar, Türkiye",
    statTime: "Best Time: Morning",
    statStay: "Rec. Time: 2–3 Hours",

    // 2. ABOUT
    aboutTitle: "About Meskendir Valley",
    aboutTags: ["📍 Starts in Ortahisar", "🚇 Rock-Cut Tunnels", "⛪ Meskendir Church", "🥾 4.4km Hiking Trail", "🌲 Cedar & Pine Trees", "⛰️ Steep Descents", "🗺️ Connects to Red Valley"],
    aboutText1: "Meskendir Valley is an adventurer's dream. Stretching approximately 4.4 kilometers from the outskirts of Ortahisar down towards Cavusin, this trail is famous for its numerous rock-cut tunnels and deep, shaded canyon pathways. It is often used by hikers as the epic starting point before merging into the Red and Rose valleys.",
    aboutText2: "Unlike the open and airy landscapes of other valleys, Meskendir feels secluded and rugged. The valley floor is rich with cedar trees and wild vegetation. The absolute highlight is the Meskendir Church, a spectacular ancient rock-cut sanctuary known for the massive, perfectly preserved cross carved into its ceiling.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Meskendir Church", desc: "A magnificent 11th-century rock church featuring a giant geometric cross carved into the flat ceiling.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "The Dark Tunnels", desc: "Walk through several long, cool tunnels carved by ancient waterways through the volcanic tuff.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "The Steep Entrance", desc: "The adventurous start of the trail, featuring a steep, dusty descent into the canyon from Ortahisar.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Cedar Tree Groves", desc: "Enjoy the shade and scent of old cedar and pine trees that line the deeper sections of the valley.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Historic Dovecotes", desc: "Look up at the cliff walls to spot ancient pigeon lofts with their distinctive painted facades.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Red Valley Junction", desc: "The point where Meskendir seamlessly flows into the famous Red Valley, continuing your trek.", img: "/images/valleys/red-valley.jpg", link: "/valleys/red-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Meskendir",
    todoCards: [
      { icon: "🥾", title: "Guided Tunnel Trek", price: 40, rating: "5.0", dur: "4 Hours", link: "/tours/hiking" },
      { icon: "👑", title: "Private VIP Hike", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🐎", title: "Horseback Trail Ride", price: 45, rating: "4.8", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🚵‍♂️", title: "Mountain Biking", price: 50, rating: "4.7", dur: "3 Hours", link: "/tours/biking" },
      { icon: "📸", title: "Adventure Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "⛺", title: "Kaya Camping Stay", price: 30, rating: "4.6", dur: "Overnight", link: "/book" },
      { icon: "🚘", title: "Classic Car at Entry", price: 80, rating: "4.9", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🔴", title: "Cappadocia Red Tour", price: 60, rating: "4.8", dur: "Full Day", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Meskendir Experience Guide",
    expList: [
      { num: "01", title: "Navigate the Steep Descent", desc: "Start near Kaya Camping in Ortahisar. The initial descent is steep and dusty, setting the adventurous tone right away." },
      { num: "02", title: "Explore Meskendir Church", desc: "Don't miss this church! It's one of the few with a flat ceiling, featuring a breathtaking red-painted cross." },
      { num: "03", title: "Walk Through the Tunnels", desc: "You will pass through several natural and man-made rock tunnels. The temperature drops beautifully inside them." },
      { num: "04", title: "Follow the Red Arrows", desc: "The trail can be wild. Keep an eye out for red and yellow arrows painted on the rocks to stay on the path." },
      { num: "05", title: "Merge into Red Valley", desc: "Continue your hike past the tunnels and seamlessly transition into the Red and Rose valleys for a full day of trekking." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "2-3 Hours (Meskendir Only)", desc: "The time needed to hike from the Ortahisar entrance, through the tunnels, to the end of the valley." },
      { day: "Half Day (Full Loop)", desc: "Combine Meskendir with Red and Rose Valleys for the ultimate 4-5 hour Cappadocian hiking experience." },
      { day: "1 Hour (Church Visit)", desc: "Descend into the valley just to visit Meskendir Church and the first tunnel, then hike back up." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "Inside the Dark Tunnels", time: "Midday", for: "Silhouettes & Light", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "Meskendir Church Ceiling", time: "Daytime", for: "Ancient Cross Fresco", diff: "Medium", img: "/images/churches/tokali.jpg" },
      { name: "Steep Canyon Entry", time: "Morning", for: "Scale and Depth", diff: "Medium", img: "/images/destinations/ortahisar.jpg" },
      { name: "Red Valley Junction", time: "Late Afternoon", for: "Colorful Contrasts", diff: "Easy", img: "/images/valleys/red-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["💧 Bring Your Own Water (Essential)", "⛺ Kaya Camping Kiosk (At the entrance)", "🥤 Small Juice Stand (Near Red Valley Junction)", "🍽️ Restaurants in Ortahisar Town"],
    stayList: ["⛺ Kaya Camping (Right at the trailhead)", "🏰 Ortahisar Cave Hotels (5 mins away)", "💎 Goreme Boutique Hotels (10 mins away)", "📍 (No accommodation deep inside the valley)"],

    // 10. TRANSPORT
    transTitle: "How to Access Meskendir?",
    transList: ["🥾 The Trailhead: The entrance is located right next to 'Kaya Camping' on the outskirts of Ortahisar. Look for the sign pointing down into the canyon.", "🚕 By Taxi: Take a taxi from Goreme to Ortahisar (Kaya Camping) to start the hike. It’s a 10-minute drive.", "🚶‍♂️ The Exit: The hike usually ends near Cavusin village or merges into Red Valley, where you can easily catch a taxi back."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "Ideal hiking weather and the valley floor is lush and green." },
      { name: "☀️ Summer", desc: "Start early! The tunnels offer great shade, but the open sections get very hot." },
      { name: "🍂 Autumn", desc: "Crisp air and fewer crowds make for perfect long-distance trekking." },
      { name: "❄️ Winter", desc: "The steep entrance becomes extremely slippery with snow. Not recommended for beginners." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Wear trail running or hiking shoes. The initial descent from Ortahisar is famously steep, dusty, and slippery.",
      "Bring a small flashlight or use your phone. Some of the rock tunnels are quite long and dark in the middle.",
      "There are virtually no facilities inside Meskendir until you reach the junction with Red Valley. Bring ample water.",
      "ATVs cannot enter the deep tunnel sections of Meskendir, ensuring a peaceful hike free of dust clouds.",
      "Use an offline map like Maps.me. While there are painted arrows, the junctions connecting to other valleys can be confusing."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Ortahisar Castle", time: "5 min drive", link: "/destinations/ortahisar" },
      { name: "Red Valley", time: "Connected", link: "/valleys/red-valley" },
      { name: "Rose Valley", time: "Connected", link: "/valleys/rose-valley" },
      { name: "Goreme Open Air Museum", time: "10 min drive", link: "/museums/goreme" },
      { name: "Pigeon Valley", time: "15 min drive", link: "/valleys/pigeon-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Meskendir",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Meskendir suitable for casual walkers?", a: "It is slightly more challenging than Pigeon Valley. The main hurdle is the steep, dusty descent at the very beginning. Once you are in the valley, it is mostly flat, but you need good shoes." },
      { q: "Do I need a guide for this valley?", a: "While self-guided hiking is possible using offline maps, a guide is highly recommended if you want to find all the hidden churches and seamlessly connect to Red Valley without getting lost." },
      { q: "Are the tunnels safe?", a: "Yes, the tunnels are natural water-carved passages that have been widened over centuries. They are safe to walk through, though they can be dark and sometimes require ducking your head." }
    ],

    // 17. CTA
    ctaTitle: "Ready for a Tunnel Adventure?",
    ctaDesc: "Book a guided trekking tour through Meskendir and Red Valley today.",
    btnPlan: "BOOK YOUR HIKE"
  },
  tr: {
    // 1. HERO
    heroSub: "Gizli Tünellerin Vadisi",
    heroDesc: "Kapadokya'nın en macera dolu yürüyüş rotası! Serin kaya tünelleri, asırlık sedir ağaçları ve görkemli Meskendir Kilisesi sizi bekliyor.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "YÜRÜYÜŞ TURU REZERVE ET",
    statLoc: "Ortahisar, Türkiye",
    statTime: "En İyi Zaman: Sabah",
    statStay: "Önerilen Süre: 2–3 Saat",

    // 2. ABOUT
    aboutTitle: "Meskendir Vadisi Hakkında",
    aboutTags: ["📍 Ortahisar'dan Başlar", "🚇 Kaya Oyma Tüneller", "⛪ Meskendir Kilisesi", "🥾 4.4 km Trekking Rotası", "🌲 Sedir ve Çam Ağaçları", "⛰️ Dik İnişli Başlangıç", "🗺️ Kızıl Vadi'ye Bağlanır"],
    aboutText1: "Meskendir Vadisi, tam anlamıyla macera arayan doğa yürüyüşçülerinin rüyasıdır. Ortahisar kasabasının eteklerinden başlayıp Çavuşin'e doğru yaklaşık 4.4 kilometre uzanan bu parkur; kayalara oyulmuş uzun tünelleri ve gölgeli, derin kanyon yollarıyla ünlüdür. Yürüyüşçüler genellikle Kızıl ve Gül vadilerine geçmeden önce yürüyüşe buradan başlamayı tercih ederler.",
    aboutText2: "Diğer vadilerin açık ve havadar manzaralarının aksine, Meskendir daha izole, gizemli ve engebelidir. Vadi tabanı sedir ağaçları ve yabani bitki örtüsüyle kaplıdır. Vadinin en büyük sürprizi ise düz tavanına kusursuz bir şekilde oyulmuş devasa haç kabartmasıyla nefes kesen antik Meskendir Kilisesi'dir.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Meskendir Kilisesi", desc: "Düz tavanına kırmızı aşı boyasıyla çizilmiş devasa geometrik bir haç bulunan 11. yüzyıl kaya kilisesi.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Karanlık Tüneller", desc: "Volkanik tüf kayaların arasından antik su yollarının açtığı serin ve uzun kaya tünellerinin içinden geçin.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Dik Vadi İnişi", desc: "Yürüyüşün heyecan verici başlangıcı; Ortahisar'dan kanyona inen tozlu ve dik patika.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Sedir Ağaçları", desc: "Vadinin derinliklerinde yer alan asırlık sedir ve çam ağaçlarının gölgesinde soluklanın.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Tarihi Güvercinlikler", desc: "Kaya duvarlarına oyulmuş ve boyanmış asırlık güvercin yuvalarını inceleyin.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Kızıl Vadi (Red Valley) Bağlantısı", desc: "Meskendir tünellerinin bittiği ve Kızıl Vadi'nin alev kırmızısı kayalarının başladığı kesişim noktası.", img: "/images/valleys/red-valley.jpg", link: "/valleys/red-valley" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Meskendir Deneyimleri",
    todoCards: [
      { icon: "🥾", title: "Rehberli Tünel Yürüyüşü", price: 40, rating: "5.0", dur: "4 Saat", link: "/tours/hiking" },
      { icon: "👑", title: "VIP Özel Trekking", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "🐎", title: "Vadi İçi Atlı Safari", price: 45, rating: "4.8", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🚵‍♂️", title: "Dağ Bisikleti (MTB)", price: 50, rating: "4.7", dur: "3 Saat", link: "/tours/biking" },
      { icon: "📸", title: "Doğa & Macera Çekimi", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "⛺", title: "Kaya Kamping Konaklama", price: 30, rating: "4.6", dur: "1 Gece", link: "/book" },
      { icon: "🚘", title: "Vadi Girişi Klasik Araç", price: 80, rating: "4.9", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🔴", title: "Kapadokya Kırmızı Tur", price: 60, rating: "4.8", dur: "Tam Gün", link: "/tours/red-tour" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Meskendir Deneyim Rehberi",
    expList: [
      { num: "01", title: "Dik İnişi Başarıyla Tamamlayın", desc: "Ortahisar Kaya Kamping yanından başlayan dik ve tozlu iniş, vadinin maceracı ruhunu hemen hissettirir." },
      { num: "02", title: "Meskendir Kilisesi'ni Bulun", desc: "Bu kiliseyi sakın kaçırmayın! Kapadokya'da düz tavana sahip ve bu kadar büyük bir haç barındıran nadir yapılardandır." },
      { num: "03", title: "Tünellerin İçinden Yürüyün", desc: "Doğal ve insan yapımı uzun tünellerin içinden geçeceksiniz. İçerideki hava akımı yaz sıcağında harika bir serinlik sağlar." },
      { num: "04", title: "Kırmızı Okları Takip Edin", desc: "Vadi zaman zaman vahşileşebilir. Yoldan çıkmamak için kayalara boyanmış kırmızı ve sarı yön oklarına dikkat edin." },
      { num: "05", title: "Kızıl Vadi'ye Geçiş Yapın", desc: "Yürüyüşünüzü Meskendir ile sınırlamayın; tünellerin bitiminden direkt olarak Kızıl Vadi'ye (Red Valley) geçerek tam günlük bir trekking rotası çizin." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "2-3 Saat (Sadece Meskendir)", desc: "Ortahisar girişinden başlayıp tünelleri geçerek vadinin sonuna (Kızıl Vadi ayrımına) kadar yürümek için." },
      { day: "Yarım Gün (Tam Kombinasyon)", desc: "Meskendir, Kızıl Vadi ve Gül Vadisi'ni birbirine bağlayarak 4-5 saatlik kusursuz bir Kapadokya yürüyüşü yapın." },
      { day: "1 Saat (Kilise Ziyareti)", desc: "Sadece vadiye inip Meskendir Kilisesi'ni ve ilk büyük tüneli görüp Ortahisar'a geri tırmanmak için." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Karanlık Tünellerin İçi", time: "Öğle", for: "Silüet ve Işık Süzmeleri", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Meskendir Kilise Tavanı", time: "Gündüz", for: "Antik Haç Freski", diff: "Orta", img: "/images/churches/tokali.jpg" },
      { name: "Dik Kanyon Girişi", time: "Sabah", for: "Vadi Derinliği", diff: "Orta", img: "/images/destinations/ortahisar.jpg" },
      { name: "Kızıl Vadi Kesişimi", time: "Akşamüstü", for: "Kırmızı ve Yeşil Kontrastı", diff: "Kolay", img: "/images/valleys/red-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["💧 Mutlaka Suyunuzu Getirin (Çok Önemli)", "⛺ Kaya Kamping Büfesi (Girişte)", "🥤 Küçük Taze Meyve Suyu Standı (Kızıl Vadi ayrımında)", "🍽️ Ortahisar Merkez Restoranları"],
    stayList: ["⛺ Kaya Kamping (Çadır ve Karavan, tam yürüyüş başlangıcında)", "🏰 Ortahisar Mağara Otelleri (5 dk uzaklıkta)", "💎 Göreme Butik Otelleri (10 dk uzaklıkta)", "📍 (Vadi derinliklerinde tesis yoktur)"],

    // 10. TRANSPORT
    transTitle: "Meskendir'e Nasıl Gidilir?",
    transList: ["🥾 Başlangıç Noktası: Giriş, Ortahisar kasabasının hemen dışındaki 'Kaya Kamping'in yanındadır. Kanyona inen patika tabelasını görebilirsiniz.", "🚕 Taksi ile: Göreme'den taksiye binip yürüyüşe başlamak için Ortahisar'a (Kaya Kamping) gitmek en popüler yöntemdir. Sadece 10 dakika sürer.", "🚶‍♂️ Bitiş ve Dönüş: Yürüyüş genelde Çavuşin köyü yakınlarında veya Kızıl Vadi'de biter. Oradan taksiyle otelinize kolayca dönebilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Yürüyüş için en ideal hava ve vadi tabanındaki sedirlerin en canlı olduğu zamandır." },
      { name: "☀️ Yaz", desc: "Sabah erken başlayın! Tüneller serin olsa da vadinin açık alanları öğlen çok sıcaktır." },
      { name: "🍂 Sonbahar", desc: "Kalabalığın azaldığı, uzun mesafe trekking için kusursuz serinlikte bir mevsim." },
      { name: "❄️ Kış", desc: "Dik giriş patikası kar ve buzla çok kaygan hale gelir. Amatörlere önerilmez." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Kesinlikle altı iyi tutunan (tercihen tırtıklı) bir trekking veya koşu ayakkabısı giyin. Ortahisar'dan vadiye ilk iniş son derece dik, tozlu ve kaygandır.",
      "Yanınızda küçük bir el feneri bulundurun veya telefonunuzu şarjlı tutun. Bazı kaya tünelleri oldukça uzundur ve ortaları zifiri karanlık olabilir.",
      "Kızıl Vadi ile kesişim noktasına gelene kadar vadinin içinde hiçbir kafe veya tesis yoktur. Yanınıza bolca su alın.",
      "Dar tüneller ve engebeli zemin nedeniyle ATV'ler Meskendir'in iç kısımlarına giremez, bu yüzden toz yutmadan huzurlu bir yürüyüş yaparsınız.",
      "Maps.me gibi çevrimdışı bir harita kullanın. Yönlendirme okları olsa da, diğer vadilere bağlanan ayrım noktaları kafa karıştırıcı olabilir."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Ortahisar Kalesi", time: "5 dk araçla", link: "/destinations/ortahisar" },
      { name: "Kızıl Vadi (Red Valley)", time: "Bağlantılı (Yürüyerek)", link: "/valleys/red-valley" },
      { name: "Gül Vadisi (Rose Valley)", time: "Bağlantılı (Yürüyerek)", link: "/valleys/rose-valley" },
      { name: "Göreme Açık Hava Müzesi", time: "10 dk araçla", link: "/museums/goreme" },
      { name: "Güvercinlik Vadisi", time: "15 dk araçla", link: "/valleys/pigeon-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Meskendir'i Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Meskendir Vadisi amatör yürüyüşçüler için uygun mu?", a: "Güvercinlik Vadisi'ne kıyasla bir tık daha zorludur. En büyük engel, yürüyüşün en başındaki dik ve tozlu iniştir. Vadiye indikten sonra yol genelde düzleşir ancak iyi bir ayakkabı şarttır." },
      { q: "Bu vadide yürümek için rehbere ihtiyacım var mı?", a: "Çevrimdışı haritalar kullanarak kendi başınıza yürümeniz mümkündür. Ancak gizli kiliseleri bulmak ve Kızıl Vadi'ye kaybolmadan kusursuz bir geçiş yapmak istiyorsanız rehberli bir tur şiddetle tavsiye edilir." },
      { q: "Kaya tünelleri güvenli mi?", a: "Evet, bu tüneller binlerce yıl boyunca suların açtığı ve daha sonra insanların genişlettiği doğal geçitlerdir. Yürümek güvenlidir ancak karanlık olabilir ve yer yer başınızı eğmeniz gerekebilir." }
    ],

    // 17. CTA
    ctaTitle: "Tünel Macerasına Hazır Mısınız?",
    ctaDesc: "Meskendir ve Kızıl Vadi'yi birleştiren rehberli trekking turunuzu hemen rezerve edin.",
    btnPlan: "YÜRÜYÜŞ REZERVASYONU YAP"
  },
  es: {
    heroSub: "El Valle de los Túneles Ocultos",
    heroDesc: "Embárcate en el sendero más aventurero de Capadocia, con túneles de roca frescos, cedros centenarios y la majestuosa Iglesia de Meskendir.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR TREKKING GUIADO",
    statLoc: "Ortahisar, Turquía",
    statTime: "Mejor Época: Mañana",
    statStay: "Tiempo Rec: 2–3 Horas",

    aboutTitle: "Sobre el Valle de Meskendir",
    aboutTags: ["📍 Inicia en Ortahisar", "🚇 Túneles en la Roca", "⛪ Iglesia de Meskendir", "🥾 Sendero de 4.4km", "🌲 Cedros y Pinos", "⛰️ Descenso Empinado", "🗺️ Conecta al Valle Rojo"],
    aboutText1: "El Valle de Meskendir es el sueño de todo aventurero. Se extiende 4.4 kilómetros desde Ortahisar hacia Çavuşin, famoso por sus numerosos túneles excavados en la roca y sus senderos sombreados. Es el punto de partida épico que luego se fusiona con los valles Rojo y Rosado.",
    aboutText2: "A diferencia de los valles abiertos, Meskendir se siente aislado y agreste. El fondo del valle está lleno de cedros y vegetación silvestre. La joya absoluta es la Iglesia de Meskendir, un espectacular santuario antiguo conocido por su enorme cruz tallada en un techo perfectamente plano.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Iglesia de Meskendir", desc: "Magnífica iglesia rupestre del siglo XI con una cruz geométrica gigante tallada en el techo plano.", img: "/images/churches/tokali.jpg", link: "#" },
      { name: "Túneles Oscuros", desc: "Camina a través de largos y frescos túneles tallados por antiguas vías de agua en la toba volcánica.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "La Entrada Empinada", desc: "El inicio aventurero del sendero: un descenso pronunciado y polvoriento desde Ortahisar.", img: "/images/destinations/ortahisar.jpg", link: "#" },
      { name: "Arboledas de Cedros", desc: "Disfruta de la sombra y el aroma de viejos cedros y pinos en las secciones más profundas.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Palomares Históricos", desc: "Mira hacia arriba para descubrir antiguos palomares con sus distintivas fachadas pintadas.", img: "/images/valleys/love-valley.jpg", link: "#" },
      { name: "Cruce del Valle Rojo", desc: "El punto donde Meskendir fluye naturalmente hacia el Valle Rojo, continuando tu ruta.", img: "/images/valleys/red-valley.jpg", link: "/valleys/red-valley" }
    ],

    todoTitle: "Experiencias en Meskendir",
    todoCards: [
      { icon: "🥾", title: "Trekking de Túneles", price: 40, rating: "5.0", dur: "4 Horas", link: "/tours/hiking" },
      { icon: "👑", title: "Trekking VIP Privado", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🐎", title: "Ruta a Caballo", price: 45, rating: "4.8", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🚵‍♂️", title: "Ciclismo de Montaña", price: 50, rating: "4.7", dur: "3 Horas", link: "/tours/biking" },
      { icon: "📸", title: "Sesión de Aventura", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "⛺", title: "Acampada en Kaya Camping", price: 30, rating: "4.6", dur: "1 Noche", link: "/book" },
      { icon: "🚘", title: "Coche Clásico (Entrada)", price: 80, rating: "4.9", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🔴", title: "Tour Rojo de Capadocia", price: 60, rating: "4.8", dur: "Día Completo", link: "/tours/red-tour" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Supera el Descenso Empinado", desc: "Comienza cerca de Kaya Camping. El descenso inicial es empinado y polvoriento, marcando el tono aventurero." },
      { num: "02", title: "Explora la Iglesia de Meskendir", desc: "¡No te la pierdas! Es una de las pocas con techo plano y una impresionante cruz pintada de rojo." },
      { num: "03", title: "Atraviesa los Túneles", desc: "Pasarás por varios túneles de roca naturales y artificiales. La temperatura baja agradablemente dentro." },
      { num: "04", title: "Sigue las Flechas Rojas", desc: "El sendero puede ser agreste. Busca las flechas rojas y amarillas pintadas en las rocas para no perderte." },
      { num: "05", title: "Conecta con el Valle Rojo", desc: "Sigue caminando más allá de los túneles y entra sin problemas en los valles Rojo y Rosado." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "2-3 Horas (Solo Meskendir)", desc: "El tiempo para caminar desde la entrada en Ortahisar hasta el final del valle." },
      { day: "Medio Día (Circuito Completo)", desc: "Combina Meskendir con los Valles Rojo y Rosado para una caminata épica de 4-5 horas." },
      { day: "1 Hora (Visita a la Iglesia)", desc: "Baja al valle solo para ver la Iglesia de Meskendir y el primer túnel, luego vuelve a subir." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Dentro de los Túneles", time: "Mediodía", for: "Siluetas y Luz", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Techo de la Iglesia", time: "Día", for: "Fresco de Cruz Antigua", diff: "Medio", img: "/images/churches/tokali.jpg" },
      { name: "Entrada del Cañón", time: "Mañana", for: "Profundidad y Escala", diff: "Medio", img: "/images/destinations/ortahisar.jpg" },
      { name: "Cruce del Valle Rojo", time: "Tarde", for: "Contrastes de Color", diff: "Fácil", img: "/images/valleys/red-valley.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["💧 Trae tu propia agua (Vital)", "⛺ Quiosco en Kaya Camping (Entrada)", "🥤 Puesto de Zumo (Cerca del Valle Rojo)", "🍽️ Restaurantes en Ortahisar"],
    stayList: ["⛺ Kaya Camping (Inicio del sendero)", "🏰 Hoteles Cueva en Ortahisar (5 min)", "💎 Hoteles Boutique en Göreme (10 min)", "📍 (Sin alojamiento dentro del valle)"],

    transTitle: "¿Cómo Acceder a Meskendir?",
    transList: ["🥾 Inicio del Sendero: Justo al lado de 'Kaya Camping' a las afueras de Ortahisar. Busca la señal que señala hacia abajo.", "🚕 En Taxi: Toma un taxi desde Göreme hasta Ortahisar (Kaya Camping) para empezar. Son 10 minutos.", "🚶‍♂️ La Salida: La caminata suele terminar cerca de Çavuşin o en el Valle Rojo, donde puedes tomar un taxi de vuelta."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Primavera", desc: "Clima ideal para senderismo; el fondo del valle está verde y frondoso." },
      { name: "☀️ Verano", desc: "¡Empieza temprano! Los túneles dan sombra, pero el resto hace calor." },
      { name: "🍂 Otoño", desc: "Aire fresco y sin multitudes, perfecto para caminatas largas." },
      { name: "❄️ Invierno", desc: "El empinado inicio se vuelve muy resbaladizo con la nieve. No recomendado." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Usa zapatillas de trail running. El descenso inicial es famoso por ser empinado, polvoriento y resbaladizo.",
      "Lleva una linterna pequeña (o el móvil). Algunos túneles de roca son largos y oscuros en el medio.",
      "No hay instalaciones dentro de Meskendir hasta llegar al Valle Rojo. Lleva abundante agua.",
      "Los ATV no pueden entrar a las zonas de túneles, garantizando una caminata pacífica sin polvo.",
      "Usa un mapa offline como Maps.me. Las conexiones con otros valles pueden ser confusas."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Castillo de Ortahisar", time: "5 min en coche", link: "/destinations/ortahisar" },
      { name: "Valle Rojo", time: "Conectado", link: "/valleys/red-valley" },
      { name: "Valle Rosado", time: "Conectado", link: "/valleys/rose-valley" },
      { name: "Museo de Göreme", time: "10 min en coche", link: "/museums/goreme" },
      { name: "Valle de las Palomas", time: "15 min en coche", link: "/valleys/pigeon-valley" }
    ],

    popToursTitle: "Tours que Visitan Meskendir",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es Meskendir apto para principiantes?", a: "Es más exigente que el Valle de las Palomas. El mayor obstáculo es el descenso empinado del inicio. Una vez abajo es llano, pero necesitas buen calzado." },
      { q: "¿Necesito un guía para este valle?", a: "Aunque puedes usar mapas offline, se recomienda un guía para encontrar todas las iglesias ocultas y conectar con el Valle Rojo sin perderte." },
      { q: "¿Son seguros los túneles?", a: "Sí, son pasadizos naturales ensanchados durante siglos. Son seguros, aunque oscuros y a veces debes agachar la cabeza." }
    ],

    ctaTitle: "¿Listo para una Aventura en Túneles?",
    ctaDesc: "Reserva un trekking guiado por Meskendir y el Valle Rojo hoy mismo.",
    btnPlan: "RESERVAR TU CAMINATA"
  }
};

export default function MeskendirValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = MESKENDIR_DICT[aktifDil] || MESKENDIR_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-orange-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="Meskendir Valley Tunnels" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/40 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-orange-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            MESKENDIR
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-500 hover:scale-105 transition-all shadow-xl shadow-orange-600/30">
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
          <div className="w-16 h-1.5 bg-orange-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-orange-500 pl-4">
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
            <div className="w-16 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-orange-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-orange-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-orange-50/50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-orange-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-orange-500 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-orange-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-orange-100 hover:bg-orange-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-orange-400">Where to Stay?</h3>
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
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/hiking" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-600 transition-all">
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
                  <span className="text-orange-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-orange-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[4]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(234,88,12,0.2)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Meskendir) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Meskendir Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12576.438289456865!2d34.8429!3d38.6432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a6701048b6c53%3A0xe9f7bbecdfd8ccf2!2sMeskendir%20Vadisi!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-orange-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-orange-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/hiking" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}