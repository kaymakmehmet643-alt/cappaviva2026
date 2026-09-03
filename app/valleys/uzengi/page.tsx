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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - UZENGI VALLEY
// =======================================================
const UZENGI_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Canyon of Giant Dovecotes",
    heroDesc: "Discover an ancient canyon featuring multi-story pigeon houses carved into towering cliffs, a babbling brook, and a natural mineral water spring.",
    btnExplore: "EXPLORE THE CANYON",
    btnBookHero: "BOOK JEEP SAFARI",
    statLoc: "Ortahisar - Urgup",
    statTime: "Best Time: Afternoon",
    statStay: "Rec. Time: 2–3 Hours",

    // 2. ABOUT
    aboutTitle: "About Uzengi Valley",
    aboutTags: ["📍 Between Ortahisar & Urgup", "🕊️ Cliff-face Dovecotes", "💧 Natural Mineral Spring", "🥾 Connects to Gomeda", "🚙 Premier Jeep Safari Route", "🌳 Shaded River Path", "🤫 Wild and Uncrowded"],
    aboutText1: "Uzengi Valley is an awe-inspiring natural gorge situated between the towns of Ortahisar and Urgup. It acts as the geographical continuation of the mysterious Gomeda Valley. What makes Uzengi truly unique is its massive, sheer cliff faces that have been hollowed out into multi-story dovecotes (pigeon houses), resembling ancient high-rise apartment buildings for birds.",
    aboutText2: "The valley floor is incredibly fertile, nurtured by the Uzengi Stream that winds its way through the canyon. Deep inside the valley, you will find a natural, naturally carbonated mineral water spring bubbling up from the rocks, known locally for its health benefits. Because of the wet and rugged terrain, Uzengi is a favorite destination for off-road Jeep Safaris and adventurous hikers seeking solitude.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "The Giant Dovecotes", desc: "Massive cliff walls honeycombed with hundreds of pigeon lofts painted with traditional motifs.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Uzengi Mineral Spring", desc: "A bubbling natural spring of iron-rich, carbonated mineral water you can drink right from the source.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Uzengi Stream", desc: "A shallow, scenic river that you will cross multiple times as you hike or drive through the gorge.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Gomeda Valley Junction", desc: "The point where the valley transitions into the dark, cave-filled and mystical Gomeda Valley.", img: "/images/valleys/love-valley.jpg", link: "/valleys/gomeda" },
      { name: "Pancarlik Church (Nearby)", desc: "A stunning nearby rock church known for its rich, beetroot-red Byzantine frescoes.", img: "/images/churches/tokali.jpg", link: "/valleys/pancarlik" },
      { name: "Rock-cut Tunnels", desc: "Small passages and caves carved by early inhabitants lining the edges of the river.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in Uzengi",
    todoCards: [
      { icon: "🚙", title: "Off-Road Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Hours", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Guided Uzengi Trek", price: 40, rating: "4.8", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "🐎", title: "River Horseback Safari", price: 45, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "👑", title: "Private VIP Exploration", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🚵‍♂️", title: "Mountain Bike Trail", price: 50, rating: "4.8", dur: "3 Hours", link: "/tours/biking" },
      { icon: "📸", title: "Wild Nature Photoshoot", price: 100, rating: "4.7", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🔵", title: "Cappadocia Blue Tour", price: 65, rating: "4.8", dur: "Full Day", link: "/book" },
      { icon: "🍷", title: "Sunset at Pancarlik", price: 25, rating: "4.9", dur: "1.5 Hours", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Uzengi Experience Guide",
    expList: [
      { num: "01", title: "Marvel at the Pigeon Skyscrapers", desc: "Look up at the towering rock walls. The scale of the multi-level pigeon houses carved into the sheer cliffs is mind-blowing." },
      { num: "02", title: "Drink the Healing Water", desc: "Find the natural mineral spring near the riverbed. The water tastes metallic and sparkling—locals believe it cures digestive issues." },
      { num: "03", title: "Prepare for Mud", desc: "Whether hiking or on a Jeep Safari, expect to get splashed. The trail weaves directly through the stream multiple times." },
      { num: "04", title: "Combine with Gomeda", desc: "For the ultimate trek, start at Mustafapasa, walk through Gomeda, and exit via Uzengi near Ortahisar." },
      { num: "05", title: "Enjoy the Solitude", desc: "Listen to the birds and the flowing water. Uzengi is completely off the radar for large tour buses." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "2 Hours (Jeep Safari)", desc: "The most thrilling way to see Uzengi. Jeeps effortlessly cross the river and stop at the mineral springs." },
      { day: "3 Hours (Hiking)", desc: "The perfect amount of time to walk from the Ortahisar entrance deep into the canyon and back." },
      { day: "Half Day (Full Trek)", desc: "Hike the entire 6km continuous route connecting Gomeda and Uzengi valleys." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "The Great Dovecote Wall", time: "Afternoon", for: "Architectural Scale", diff: "Easy", img: "/images/valleys/rose-valley.jpg" },
      { name: "Jeep River Crossing", time: "Daytime", for: "Action Splashes", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "The Mineral Spring", time: "Anytime", for: "Nature Detail", diff: "Easy", img: "/images/destinations/avanos.jpg" },
      { name: "Valley Stream Path", time: "Morning", for: "Lush Greenery", diff: "Medium", img: "/images/valleys/love-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["💧 Uzengi Mineral Spring (Free natural sparkling water)", "🍇 Wild Fruit Foraging (In season)", "🍽️ Restaurants in Ortahisar (Valley Exit)", "☕ Cafes in Urgup Town"],
    stayList: ["📍 (No Hotels Inside the Gorge)", "🏰 Cave Hotels in Ortahisar (10 mins away)", "💎 Luxury Boutique Hotels in Urgup (15 mins)", "⛺ Wild Camping (Beside the river)"],

    // 10. TRANSPORT
    transTitle: "How to Access Uzengi?",
    transList: ["🚙 By Jeep Safari: Highly recommended. The trail is wet, muddy, and perfect for 4x4 vehicles.", "🥾 Lower Trailhead (Ortahisar): Start near Ortahisar and walk up the river. Take a taxi from Goreme to the trailhead.", "🥾 Upper Trailhead (Mustafapasa): Start at Mustafapasa, walk down through Gomeda Valley, and enter Uzengi."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌸 Spring", desc: "The stream is full, flowers are blooming, and the mineral water flows strongly." },
      { name: "☀️ Summer", desc: "The shaded river valley provides an excellent, cool escape from the midday sun." },
      { name: "🍂 Autumn", desc: "The riverbanks turn gold and orange, creating a stunning visual contrast." },
      { name: "❄️ Winter", desc: "The river can freeze, making the path slippery and inaccessible for standard hiking." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "If you are hiking, waterproof shoes or sandals are a must. You will have to cross the shallow stream several times.",
      "Bring an empty bottle! You will definitely want to fill it up at the natural carbonated mineral spring.",
      "The dovecotes are very high up on sheer cliffs. Do not attempt to free-climb the rock faces to reach them.",
      "There is limited to no cell service deep in the canyon. Download your maps before entering.",
      "Uzengi is incredibly peaceful, but if you hear roaring engines, step aside—it's a convoy of Jeep Safaris splashing through the river!"
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Gomeda Valley", time: "Connected", link: "/valleys/gomeda" },
      { name: "Ortahisar Castle", time: "10 min drive", link: "/destinations/ortahisar" },
      { name: "Pancarlik Valley", time: "10 min drive", link: "/valleys/pancarlik" },
      { name: "Urgup Center", time: "15 min drive", link: "/destinations/urgup" },
      { name: "Mustafapasa", time: "15 min drive", link: "/destinations/mustafapasa" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting Uzengi",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Is Uzengi Valley the same as Gomeda?", a: "They are two connected halves of the same long canyon. Gomeda is the upper section starting near Mustafapasa, while Uzengi is the lower section closer to Ortahisar and Urgup." },
      { q: "Is the mineral water safe to drink?", a: "Yes, it is entirely natural. It has a strong iron/metallic taste and natural carbonation. Locals have been drinking it for centuries for its supposed digestive benefits." },
      { q: "Can I drive my rental car into the valley?", a: "No. The path requires crossing the river multiple times. Unless you have a proper 4x4 off-road vehicle and experience, you will get stuck. Book a Jeep Safari instead." }
    ],

    // 17. CTA
    ctaTitle: "Ready to Explore the Dovecotes?",
    ctaDesc: "Book an off-road Jeep Safari or guided trek to discover the hidden wonders of Uzengi Valley.",
    btnPlan: "BOOK YOUR ADVENTURE"
  },
  tr: {
    // 1. HERO
    heroSub: "Dev Güvercinlikler Kanyonu",
    heroDesc: "Uçurumlara apartman gibi oyulmuş devasa güvercinlikleri, şifalı doğal maden suyu ve içinden geçen deresiyle Kapadokya'nın en vahşi kanyonu.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "JEEP SAFARİ REZERVE ET",
    statLoc: "Ortahisar - Ürgüp",
    statTime: "En İyi Zaman: Öğleden Sonra",
    statStay: "Önerilen Süre: 2–3 Saat",

    // 2. ABOUT
    aboutTitle: "Üzengi Vadisi Hakkında",
    aboutTags: ["📍 Ortahisar ile Ürgüp Arasında", "🕊️ Uçurum Güvercinlikleri", "💧 Doğal Maden Suyu", "🥾 Gomeda'nın Devamı", "🚙 Jeep Safari Ana Rotası", "🌳 Gölgeli Nehir Yolu", "🤫 Vahşi ve Sakin"],
    aboutText1: "Üzengi Vadisi, Ortahisar ve Ürgüp kasabaları arasında yer alan, nefes kesici doğal bir kanyondur. Coğrafi olarak gizemli Gomeda Vadisi'nin bir devamı niteliğindedir. Üzengi'yi Kapadokya'daki diğer yerlerden ayıran en büyük özelliği; sarp ve yüksek uçurum duvarlarına adeta kuşlar için çok katlı devasa apartmanlar gibi oyulmuş yüzlerce tarihi güvercinliktir.",
    aboutText2: "Kanyonun içinden kıvrılarak akan Üzengi Deresi, vadi tabanını inanılmaz derecede yeşil ve verimli kılar. Vadinin derinliklerinde kayaların arasından fokurdayarak fışkıran, yerel halk tarafından şifalı olduğuna inanılan doğal karbonatlı bir maden suyu (içmece) kaynağı bulunur. Sulu ve çamurlu arazisi nedeniyle Üzengi, macera arayan Jeep Safarilerin ve doğa yürüyüşçülerinin en favori parkurudur.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Çok Katlı Güvercinlikler", desc: "Kanyon duvarlarına yüzlerce yuva şeklinde oyulmuş ve kök boyalarla süslenmiş devasa güvercinlik apartmanları.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Üzengi Maden Suyu", desc: "Vadi tabanında kayaların arasından fokurdayarak çıkan, doğrudan kaynağından içebileceğiniz demir yüklü doğal maden suyu.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Üzengi Deresi", desc: "Yürüyüş yaparken veya ciplerle geçerken defalarca içinden geçmek zorunda kalacağınız sığ ve serin dere.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Gomeda Bağlantısı", desc: "Vadinin daha karanlık, mağaralarla dolu ve mistik olan Gomeda Vadisi'ne kesintisiz dönüştüğü nokta.", img: "/images/valleys/love-valley.jpg", link: "/valleys/gomeda" },
      { name: "Pancarlık Kilisesi (Yakında)", desc: "Pancar kırmızısı muazzam Bizans freskleriyle bilinen ve vadi çıkışına çok yakın olan tarihi kaya kilisesi.", img: "/images/churches/tokali.jpg", link: "/valleys/pancarlik" },
      { name: "Kaya Tünelleri", desc: "Nehir kenarında ilk yerleşimciler tarafından oyulmuş küçük geçitler ve kaya sığınakları.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Üzengi Vadisi Deneyimleri",
    todoCards: [
      { icon: "🚙", title: "Off-Road Jeep Safari", price: 45, rating: "4.9", dur: "2.5 Saat", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Rehberli Üzengi Yürüyüşü", price: 40, rating: "4.8", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "🐎", title: "Atlı Nehir Safarisi", price: 45, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "👑", title: "VIP Özel Vadi Keşfi", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "🚵‍♂️", title: "Dağ Bisikleti (MTB)", price: 50, rating: "4.8", dur: "3 Saat", link: "/tours/biking" },
      { icon: "📸", title: "Vahşi Doğa Çekimi", price: 100, rating: "4.7", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🔵", title: "Kapadokya Mavi Tur", price: 65, rating: "4.8", dur: "Tam Gün", link: "/book" },
      { icon: "🍷", title: "Pancarlık'ta Gün Batımı", price: 25, rating: "4.9", dur: "1.5 Saat", link: "/book" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Üzengi Deneyim Rehberi",
    expList: [
      { num: "01", title: "Kuşların Gökdelenlerine İnanın", desc: "Yüksek kaya duvarlarına başınızı kaldırıp bakın. Uçurumlara oyulmuş çok katlı güvercinliklerin devasa ölçeği başınızı döndürecek." },
      { num: "02", title: "Şifalı Maden Suyunu İçin", desc: "Dere yatağının kenarındaki doğal kaynağı bulun. Demir tadı yoğun olan bu doğal sodalı suyun yöre halkı tarafından mideye iyi geldiğine inanılır." },
      { num: "03", title: "Çamura Hazırlıklı Olun", desc: "İster yürüyüş yapın ister Jeep Safari'ye katılın, ıslanmaya hazır olun. Parkur derenin içinden defalarca karşıdan karşıya geçer." },
      { num: "04", title: "Gomeda İle Birleştirin", desc: "Eğer sağlam bir yürüyüşçüyseniz, Mustafapaşa'dan başlayıp Gomeda'yı geçin ve Üzengi üzerinden Ortahisar'a çıkın." },
      { num: "05", title: "Doğanın Sesini Dinleyin", desc: "Büyük tur otobüslerinin giremediği bu kanyonda kuş seslerinin ve akan suyun huzurunu çıkarın." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "2 Saat (Jeep Safari)", desc: "Üzengi'yi görmenin en heyecanlı yolu. Cipler dereyi kolayca aşar ve maden suyu kaynağında mola verir." },
      { day: "3 Saat (Yürüyüş)", desc: "Ortahisar girişinden başlayıp kanyonun derinliklerindeki güvercinliklere kadar yürüyüp dönmek için ideal süre." },
      { day: "Yarım Gün (Tam Trekking)", desc: "Gomeda ve Üzengi vadilerini birleştiren 6 kilometrelik kesintisiz rotanın tamamını yürümek için." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Dev Güvercinlik Duvarı", time: "Akşamüstü", for: "Büyüklük ve Mimari", diff: "Kolay", img: "/images/valleys/rose-valley.jpg" },
      { name: "Nehirden Geçen Cipler", time: "Gündüz", for: "Aksiyon ve Çamur", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Maden Suyu Kaynağı", time: "Her Zaman", for: "Doğal Detay", diff: "Kolay", img: "/images/destinations/avanos.jpg" },
      { name: "Yeşil Dere Patikası", time: "Sabah", for: "Orman Dokusu", diff: "Orta", img: "/images/valleys/love-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["💧 Üzengi Maden Suyu (Ücretsiz doğal karbonatlı su)", "🍇 Yabani Meyve Ağaçları (Mevsiminde)", "🍽️ Ortahisar Merkez Restoranları (Vadi çıkışı)", "☕ Ürgüp Merkez Kafeleri"],
    stayList: ["📍 (Kanyon içinde konaklama tesisi yoktur)", "🏰 Ortahisar Mağara Otelleri (10 dk araçla)", "💎 Ürgüp Lüks Butik Otelleri (15 dk araçla)", "⛺ Nehir Kenarında Vahşi Kamp"],

    // 10. TRANSPORT
    transTitle: "Üzengi'ye Nasıl Gidilir?",
    transList: ["🚙 Jeep Safari İle: Şiddetle tavsiye edilir. Vadinin çamurlu ve sulu yolları 4x4 araçlar için mükemmel bir oyun alanıdır.", "🥾 Alt Giriş (Ortahisar): Ortahisar'ın alt kısımlarından başlar ve dereye karşı yürünür. Göreme'den taksiyle bu girişe rahatça ulaşabilirsiniz.", "🥾 Üst Giriş (Mustafapaşa): Yürüyüşe Mustafapaşa'dan başlayıp Gomeda üzerinden aşağı inerek Üzengi'ye ulaşabilirsiniz."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌸 İlkbahar", desc: "Derenin suyu gürdür, çiçekler açar ve maden suyu kaynağı çok güçlü akar." },
      { name: "☀️ Yaz", desc: "Gölgeli nehir vadisi, öğle sıcağından kaçmak için harika ve serin bir sığınaktır." },
      { name: "🍂 Sonbahar", desc: "Dere kenarındaki ağaçlar sararıp kızıla döner, fotoğraf için harika bir kontrast oluşturur." },
      { name: "❄️ Kış", desc: "Dere donabilir ve patika standart yürüyüşçüler için çok kaygan ve ulaşılamaz hale gelebilir." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Eğer yürüyüş yapacaksanız su geçirmez bir ayakkabı veya sağlam bir yürüyüş sandaleti şarttır. Sığ dereden sık sık geçeceksiniz.",
      "Yanınızda mutlaka boş bir şişe getirin! Doğal maden suyu (içmece) kaynağından şişenizi doldurmak isteyeceksiniz.",
      "Güvercinlikler uçurumların çok yüksek noktalarındadır. Oraya ulaşmak için kayalara tırmanmayı kesinlikle denemeyin.",
      "Kanyonun derinliklerinde telefon çekmez. Vadiye girmeden önce çevrimdışı haritanızı indirmeyi unutmayın.",
      "Üzengi çok huzurludur, ancak aniden motor sesleri duyarsanız kenara çekilin; dereyi sıçratarak geçen bir Jeep Safari konvoyu geliyordur!"
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Gomeda Vadisi", time: "Bağlantılı", link: "/valleys/gomeda" },
      { name: "Ortahisar Kalesi", time: "10 dk araçla", link: "/destinations/ortahisar" },
      { name: "Pancarlık Vadisi", time: "10 dk araçla", link: "/valleys/pancarlik" },
      { name: "Ürgüp Merkez", time: "15 dk araçla", link: "/destinations/urgup" },
      { name: "Mustafapaşa", time: "15 dk araçla", link: "/destinations/mustafapasa" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Üzengi Vadisi'ni Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Üzengi Vadisi ile Gomeda aynı yer mi?", a: "Aynı uzun kanyonun birbirine bağlanan iki yarısıdır. Gomeda, Mustafapaşa tarafında başlayan üst bölümken, Üzengi Ortahisar ve Ürgüp'e daha yakın olan alt bölümdür." },
      { q: "Kaynayan maden suyu içmek için güvenli mi?", a: "Evet, tamamen doğaldır. Yoğun bir demir tadı ve doğal asidi vardır. Yöre halkı sindirim ve mide rahatsızlıklarına iyi geldiği için yüzyıllardır bu suyu içmektedir." },
      { q: "Kiralık arabamla vadinin içine girebilir miyim?", a: "Hayır. Yol defalarca derenin içinden geçer. Gerçek bir 4x4 off-road aracınız ve tecrübeniz yoksa kesinlikle çamura saplanırsınız. Bunun yerine bir Jeep Safari kiralayın." }
    ],

    // 17. CTA
    ctaTitle: "Dev Güvercinlikleri Görmeye Hazır Mısın?",
    ctaDesc: "Üzengi'nin vahşi doğasını keşfetmek için off-road Jeep Safari veya rehberli trekking turunuzu hemen ayırtın.",
    btnPlan: "MACERANI REZERVE ET"
  },
  es: {
    heroSub: "El Cañón de los Palomares Gigantes",
    heroDesc: "Descubre un antiguo cañón con palomares de varios pisos tallados en acantilados, un arroyo y una fuente de agua mineral natural.",
    btnExplore: "EXPLORAR EL CAÑÓN",
    btnBookHero: "RESERVAR SAFARI EN JEEP",
    statLoc: "Ortahisar - Ürgüp",
    statTime: "Mejor Época: Tarde",
    statStay: "Tiempo Rec: 2–3 Horas",

    aboutTitle: "Sobre el Valle de Uzengi",
    aboutTags: ["📍 Entre Ortahisar y Ürgüp", "🕊️ Palomares en Acantilados", "💧 Fuente de Agua Mineral", "🥾 Conecta con Gomeda", "🚙 Ruta Estrella de Jeep", "🌳 Camino Sombreado", "🤫 Salvaje y Solitario"],
    aboutText1: "El Valle de Uzengi es un impresionante desfiladero natural situado entre Ortahisar y Ürgüp. Actúa como la continuación geográfica del misterioso Valle de Gomeda. Lo que hace único a Uzengi son sus paredes de acantilado escarpadas y masivas, ahuecadas para formar palomares de varios pisos que parecen antiguos bloques de apartamentos para aves.",
    aboutText2: "El fondo del valle es increíblemente fértil, nutrido por el arroyo Uzengi. En lo profundo del valle, encontrarás un manantial de agua mineral naturalmente carbonatada que brota de las rocas, conocida localmente por sus beneficios para la salud. Debido al terreno húmedo, Uzengi es un destino favorito para Safaris en Jeep y senderistas que buscan soledad.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Palomares Gigantes", desc: "Paredes de acantilados perforadas con cientos de nidos de palomas pintados con motivos tradicionales.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Manantial Mineral de Uzengi", desc: "Una fuente natural burbujeante de agua rica en hierro que puedes beber directamente.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Arroyo Uzengi", desc: "Un río escénico y poco profundo que cruzarás varias veces mientras caminas o vas en Jeep.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Conexión Gomeda", desc: "El punto donde el valle hace la transición al oscuro y místico Valle de Gomeda.", img: "/images/valleys/love-valley.jpg", link: "/valleys/gomeda" },
      { name: "Iglesia de Pancarlik (Cerca)", desc: "Impresionante iglesia rupestre conocida por sus ricos frescos bizantinos de color remolacha.", img: "/images/churches/tokali.jpg", link: "/valleys/pancarlik" },
      { name: "Túneles de Roca", desc: "Pequeños pasajes y cuevas tallados por antiguos habitantes a orillas del río.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    todoTitle: "Experiencias en Uzengi",
    todoCards: [
      { icon: "🚙", title: "Safari en Jeep 4x4", price: 45, rating: "4.9", dur: "2.5 Horas", link: "/tours/jeep-safari" },
      { icon: "🥾", title: "Trekking Guiado Uzengi", price: 40, rating: "4.8", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "🐎", title: "Safari Ecuestre en Río", price: 45, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "👑", title: "Exploración VIP Privada", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "🚵‍♂️", title: "Ruta en Bici de Montaña", price: 50, rating: "4.8", dur: "3 Horas", link: "/tours/biking" },
      { icon: "📸", title: "Sesión de Fotos Naturaleza", price: 100, rating: "4.7", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🔵", title: "Tour Azul de Capadocia", price: 65, rating: "4.8", dur: "Día Completo", link: "/book" },
      { icon: "🍷", title: "Atardecer en Pancarlik", price: 25, rating: "4.9", dur: "1.5 Horas", link: "/book" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Maravíllate con los Rascacielos de Aves", desc: "Mira hacia los acantilados. La escala de los palomares multinivel excavados en la roca es alucinante." },
      { num: "02", title: "Bebe el Agua Curativa", desc: "Encuentra el manantial cerca del río. El agua sabe metálica y burbujeante; los lugareños la beben para la digestión." },
      { num: "03", title: "Prepárate para el Barro", desc: "Ya sea caminando o en Jeep, te vas a salpicar. El sendero cruza el arroyo en numerosas ocasiones." },
      { num: "04", title: "Combina con Gomeda", desc: "Para el trekking definitivo, empieza en Mustafapasa, cruza Gomeda y sal por Uzengi cerca de Ortahisar." },
      { num: "05", title: "Disfruta de la Soledad", desc: "Escucha a los pájaros y el agua. Uzengi está totalmente fuera del radar de los grandes autobuses." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "2 Horas (Safari en Jeep)", desc: "La forma más emocionante de ver Uzengi. Los Jeeps cruzan el río sin esfuerzo y paran en el manantial." },
      { day: "3 Horas (Caminata)", desc: "Tiempo perfecto para caminar desde la entrada de Ortahisar hasta lo profundo del cañón y volver." },
      { day: "Medio Día (Ruta Larga)", desc: "Recorre los 6km completos conectando los valles de Gomeda y Uzengi." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "La Gran Pared de Palomares", time: "Tarde", for: "Escala Arquitectónica", diff: "Fácil", img: "/images/valleys/rose-valley.jpg" },
      { name: "Jeep Cruzando el Río", time: "Día", for: "Acción y Salpicaduras", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "El Manantial Mineral", time: "Siempre", for: "Detalle Natural", diff: "Fácil", img: "/images/destinations/avanos.jpg" },
      { name: "Sendero Verde del Arroyo", time: "Mañana", for: "Vegetación Frondosa", diff: "Medio", img: "/images/valleys/love-valley.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["💧 Manantial de Uzengi (Agua con gas natural gratis)", "🍇 Frutas Silvestres (En temporada)", "🍽️ Restaurantes en Ortahisar (Salida)", "☕ Cafés en el centro de Ürgüp"],
    stayList: ["📍 (Sin hoteles en el desfiladero)", "🏰 Hoteles Cueva en Ortahisar (A 10 min)", "💎 Hoteles Boutique en Ürgüp (A 15 min)", "⛺ Acampada Libre (Junto al río)"],

    transTitle: "¿Cómo Acceder a Uzengi?",
    transList: ["🚙 En Safari en Jeep: Altamente recomendado. El camino húmedo es perfecto para vehículos 4x4.", "🥾 Inicio Inferior (Ortahisar): Comienza cerca de Ortahisar y camina río arriba. Toma un taxi desde Göreme.", "🥾 Inicio Superior (Mustafapasa): Empieza en Mustafapasa, baja por Gomeda y entra a Uzengi."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌸 Primavera", desc: "El arroyo está lleno, las flores brotan y el agua mineral fluye con fuerza." },
      { name: "☀️ Verano", desc: "La sombra del cañón proporciona un excelente escape fresco del sol." },
      { name: "🍂 Otoño", desc: "Las orillas del río se vuelven doradas, creando un contraste visual impresionante." },
      { name: "❄️ Invierno", desc: "El río puede congelarse, haciendo el camino resbaladizo e inaccesible a pie." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "Si caminas, zapatos impermeables o sandalias fuertes son obligatorios. Cruzarás el arroyo varias veces.",
      "¡Lleva una botella vacía! Querrás llenarla en el manantial de agua mineral carbonatada.",
      "Los palomares están muy altos. No intentes escalar las paredes de roca desnuda para llegar a ellos.",
      "No hay cobertura móvil en el fondo del cañón. Descarga mapas antes de entrar.",
      "Es pacífico, pero si escuchas motores, hazte a un lado: ¡es un convoy de Jeep Safari chapoteando!"
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Valle de Gomeda", time: "Conectado", link: "/valleys/gomeda" },
      { name: "Castillo de Ortahisar", time: "10 min en coche", link: "/destinations/ortahisar" },
      { name: "Valle de Pancarlik", time: "10 min en coche", link: "/valleys/pancarlik" },
      { name: "Centro de Ürgüp", time: "15 min en coche", link: "/destinations/urgup" },
      { name: "Mustafapasa", time: "15 min en coche", link: "/destinations/mustafapasa" }
    ],

    popToursTitle: "Tours que Visitan Uzengi",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Es el Valle de Uzengi lo mismo que Gomeda?", a: "Son dos mitades del mismo cañón. Gomeda es la parte superior (Mustafapasa) y Uzengi es la inferior (más cerca de Ortahisar/Ürgüp)." },
      { q: "¿Es seguro beber el agua mineral?", a: "Sí, es totalmente natural. Sabe metálica por el hierro y tiene gas. Los locales la beben desde hace siglos por la digestión." },
      { q: "¿Puedo meter mi coche de alquiler en el valle?", a: "No. Hay que cruzar el río muchas veces. Te quedarás atascado a menos que tengas un 4x4 preparado. Reserva un Safari en Jeep." }
    ],

    ctaTitle: "¿Listo para Explorar los Palomares?",
    ctaDesc: "Reserva un Safari en Jeep 4x4 o trekking guiado para descubrir las maravillas ocultas de Uzengi.",
    btnPlan: "RESERVAR TU AVENTURA"
  }
};

export default function UzengiValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = UZENGI_DICT[aktifDil] || UZENGI_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-blue-600 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/rose-valley.jpg" alt="Uzengi Valley Cappadocia" fill priority unoptimized className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-slate-900/60 to-slate-900/90"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-blue-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            UZENGI
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:scale-105 transition-all shadow-xl shadow-blue-600/30">
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
          <div className="w-16 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-blue-500 pl-4">
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
            <div className="w-16 h-1.5 bg-blue-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-blue-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-blue-600 transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-blue-50/50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-blue-600 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-blue-600 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-blue-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-blue-100 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-blue-400">Where to Stay?</h3>
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
      <section className="py-24 bg-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/jeep-safari" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all">
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
                  <span className="text-blue-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-blue-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[2]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (Uzengi) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">Uzengi Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12577.208665672808!2d34.8872!3d38.601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a65d506d1a1b1%3A0xc0c8d10edc911b34!2s%C3%9Czengi%20Vadisi!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-blue-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/jeep-safari" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}