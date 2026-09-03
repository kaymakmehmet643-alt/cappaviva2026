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
// 📚 17 BÖLÜMLÜK VADİ SÖZLÜĞÜ - WHITE VALLEY
// =======================================================
const WHITE_VALLEY_DICT: any = {
  en: {
    // 1. HERO
    heroSub: "The Pristine Curves of Cappadocia",
    heroDesc: "A serene, winding canyon of smooth, stark-white volcanic tuff that seamlessly connects Uchisar to the famous Love Valley.",
    btnExplore: "EXPLORE THE VALLEY",
    btnBookHero: "BOOK A GUIDED HIKE",
    statLoc: "Uchisar - Goreme",
    statTime: "Best Time: Morning",
    statStay: "Rec. Time: 2–3 Hours",

    // 2. ABOUT
    aboutTitle: "About White Valley (Beyaz Vadi)",
    aboutTags: ["📍 Below Uchisar Castle", "🤍 Pristine White Rocks", "🥾 Smooth Hiking Trails", "☀️ High Sun Reflection", "🍇 Hidden Vineyards", "🤫 Peaceful & Quiet", "🔗 Connects to Love Valley"],
    aboutText1: "White Valley (Beyaz Vadi) gets its name from its strikingly pale, almost pure white volcanic tuff rock. Unlike the sharp, jagged edges of Red or Sword valleys, the walls of White Valley have been eroded into incredibly smooth, sweeping curves that look almost like melted wax or undulating waves of stone.",
    aboutText2: "Geographically and practically, White Valley is the upper section of Love Valley (Baglidere). The ideal hiking route starts high up near Uchisar, taking you downhill through the deep, white-walled canyon. As you progress, the landscape gradually shifts, and the smooth white walls transform into the giant, pillar-like fairy chimneys that Love Valley is famous for.",

    // 3. MUST SEE
    mustSeeTitle: "Valley Highlights",
    mustSeeCards: [
      { name: "Sweeping White Walls", desc: "The impossibly smooth, curved canyon walls that give the valley its name.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Love Valley Junction", desc: "The magical transition point where the white canyon opens up into giant fairy chimneys.", img: "/images/valleys/love-valley.jpg", link: "/valleys/love-valley" },
      { name: "Uchisar Castle Backdrop", desc: "The towering rock castle of Uchisar framing the valley perfectly when you look back.", img: "/images/destinations/uchisar.jpg", link: "/destinations/uchisar" },
      { name: "Valley Floor Vineyards", desc: "Small, lush patches of grapevines thriving in the mineral-rich white soil.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Honeycomb Rocks", desc: "Intricate, porous rock formations that look like giant white sponges or honeycombs.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "The Quiet Trail", desc: "Experience pure silence in a canyon where ATVs and large tour groups cannot enter.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Experiences in White Valley",
    todoCards: [
      { icon: "🥾", title: "Guided Trekking (Uchisar to Goreme)", price: 40, rating: "5.0", dur: "3 Hours", link: "/tours/hiking" },
      { icon: "👑", title: "Private VIP Nature Walk", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "📸", title: "Professional Photoshoot", price: 100, rating: "4.8", dur: "2 Hours", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Horseback Safari (Lower Valley)", price: 45, rating: "4.7", dur: "2 Hours", link: "/tours/horse" },
      { icon: "🎈", title: "Sunrise Balloon Flight (Overhead)", price: 160, rating: "4.9", dur: "1 Hour", link: "/tours/balloon" },
      { icon: "🟢", title: "Cappadocia Green Tour", price: 65, rating: "4.8", dur: "Full Day", link: "/tours/green-tour" },
      { icon: "🚘", title: "Classic Car at Valley Exit", price: 80, rating: "4.8", dur: "2 Hours", link: "/tours/classic-car" },
      { icon: "🚙", title: "Jeep Safari (Outer Rim)", price: 45, rating: "4.6", dur: "2 Hours", link: "/tours/jeep-safari" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "White Valley Experience Guide",
    expList: [
      { num: "01", title: "Hike the Full Route Downhill", desc: "Start just below Uchisar and walk the 4.5km route downward into Goreme. It is much easier on the legs and offers the best forward-facing views." },
      { num: "02", title: "Wear Sunglasses", desc: "The pure white rock acts as a giant reflector for the sun. Sunglasses are absolutely mandatory, even on slightly cloudy days." },
      { num: "03", title: "Enjoy the Silence", desc: "Because the path is narrow and rugged in places, ATVs are not allowed here. It is one of the most peaceful walks in the region." },
      { num: "04", title: "Transition into Love Valley", desc: "Keep walking! You will naturally exit the white canyon walls and enter the famous pillar-filled plains of Love Valley." },
      { num: "05", title: "Capture the Contrast", desc: "The bright blue Cappadocian sky against the stark white rocks creates an incredible contrast for photography." }
    ],

    // 6. TIME NEEDED
    daysTitle: "How Much Time Do You Need?",
    daysList: [
      { day: "2-3 Hours (Full Hike)", desc: "The ideal time needed to hike from Uchisar, through White Valley, ending up in Love Valley and Goreme." },
      { day: "1 Hour (Short Walk)", desc: "Walk down from Uchisar to the middle of the canyon, take photos of the smooth walls, and head back up." },
      { day: "Half Day (Exploration)", desc: "Combine a visit to Uchisar Castle with a long afternoon hike down through the white canyon." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "Best Photo Spots",
    photoCards: [
      { name: "The Smooth Curves", time: "Morning", for: "Minimalist Stone Waves", diff: "Easy", img: "/images/valleys/baglidere.jpg" },
      { name: "Uchisar in the Distance", time: "Daytime", for: "Castle Framing", diff: "Medium", img: "/images/destinations/uchisar.jpg" },
      { name: "Love Valley Junction", time: "Afternoon", for: "Fairy Chimneys", diff: "Medium", img: "/images/valleys/love-valley.jpg" },
      { name: "Green Vines on White Stone", time: "Spring/Summer", for: "Color Contrast", diff: "Easy", img: "/images/valleys/rose-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Refreshments & Accommodations",
    eatList: ["💧 Bring Plenty of Water (High Sun Reflection)", "🍎 Fresh Fruit from Local Trees (Seasonal)", "🥤 Small Juice Stand (At Love Valley Exit)", "🍽️ Restaurants in Uchisar (Start point)"],
    stayList: ["📍 (No Hotels in the Valley)", "🏰 Luxury Cave Suites in Uchisar (Start of Trail)", "💎 Boutique Hotels in Goreme (End of Trail)", "⛺ Wild Camping (Check local regulations)"],

    // 10. TRANSPORT
    transTitle: "How to Access White Valley?",
    transList: ["🥾 Upper Trailhead (Uchisar): The best starting point. Located just below the town of Uchisar. Take a taxi from Goreme to Uchisar to start walking downhill.", "🥾 Lower Trailhead (Goreme): You can walk up from Goreme via Love Valley, but this means a continuous uphill hike.", "🚕 Taxi: A 10-minute taxi ride from Goreme will drop you off at the perfect starting point in Uchisar."],

    // 11. BEST TIME
    seasonTitle: "Best Time to Visit",
    seasons: [
      { name: "🌅 Early Morning", desc: "The valley is cool, and the bright white rocks are not yet blinding." },
      { name: "🌸 Spring", desc: "Perfect hiking weather. The green vineyards contrast beautifully with the rocks." },
      { name: "🍂 Autumn", desc: "Crisp air and pleasant temperatures for the 2-3 hour trek." },
      { name: "☀️ Summer", desc: "It gets incredibly hot due to the reflective white stone. Start before 8 AM." }
    ],

    // 12. TIPS
    tipsTitle: "Local Trail Tips",
    tipsList: [
      "Sun protection is critical here. The white tuff reflects UV rays intensely, similar to walking on snow. Wear sunscreen and sunglasses.",
      "The ground is made of fine, powdery white dust. It can be quite slippery on the downhill sections, so wear shoes with good grip.",
      "Always start from Uchisar and walk towards Goreme. It turns a strenuous uphill climb into a pleasant, scenic descent.",
      "There are no facilities, toilets, or water stops in the deep parts of the valley until you reach the Love Valley cafes.",
      "White Valley and Love Valley are essentially the same continuous canyon. You get two famous valleys in one hike."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Explore Nearby Highlights",
    nearbyList: [
      { name: "Love Valley", time: "Connected", link: "/valleys/love-valley" },
      { name: "Uchisar Castle", time: "Start of Trail", link: "/destinations/uchisar" },
      { name: "Pigeon Valley", time: "15 min walk from start", link: "/valleys/pigeon-valley" },
      { name: "Goreme Center", time: "End of Trail", link: "/destinations/goreme" },
      { name: "Rose Valley", time: "15 min drive", link: "/valleys/rose-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Tours Visiting White Valley",

    // 16. FAQ
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "Are White Valley and Love Valley the same thing?", a: "Essentially, yes. White Valley is the upper, canyon-like section with smooth white walls that starts in Uchisar. As you walk down towards Goreme, it opens up into the pillar-filled area known as Love Valley." },
      { q: "Is the trail difficult?", a: "It is a moderate hike. If you start from Uchisar and walk downhill, it is quite pleasant. However, the white dusty paths can be slippery, requiring good footwear." },
      { q: "Can I do an ATV tour in White Valley?", a: "No. The paths in White Valley are too narrow and sensitive for ATVs. You can only do ATV tours in the lower Love Valley section." }
    ],

    // 17. CTA
    ctaTitle: "Ready for a Serene Hike?",
    ctaDesc: "Book a guided trekking tour and experience the peaceful, pristine beauty of White Valley.",
    btnPlan: "BOOK YOUR HIKE"
  },
  tr: {
    // 1. HERO
    heroSub: "Kapadokya'nın Bembeyaz Kanyonu",
    heroDesc: "Uçhisar'dan başlayıp Aşk Vadisi'ne bağlanan, pürüzsüz ve bembeyaz tüf kayalarından oluşan sessiz ve huzur dolu bir doğa yürüyüşü rotası.",
    btnExplore: "VADİYİ KEŞFET",
    btnBookHero: "YÜRÜYÜŞ TURU REZERVE ET",
    statLoc: "Uçhisar - Göreme",
    statTime: "En İyi Zaman: Sabah",
    statStay: "Önerilen Süre: 2–3 Saat",

    // 2. ABOUT
    aboutTitle: "Beyaz Vadi (White Valley) Hakkında",
    aboutTags: ["📍 Uçhisar'ın Eteklerinde", "🤍 Bembeyaz Pürüzsüz Kayalar", "🥾 Harika Trekking Rotası", "☀️ Yüksek Güneş Yansıması", "🍇 Gizli Üzüm Bağları", "🤫 Huzurlu ve Sessiz", "🔗 Aşk Vadisi'ne Bağlanır"],
    aboutText1: "Beyaz Vadi (White Valley), adını neredeyse saf beyaz renkteki volkanik tüf kayalarından alır. Kızıl Vadi veya Kılıçlar Vadisi'nin keskin ve sivri hatlarının aksine, Beyaz Vadi'nin duvarları su ve rüzgar tarafından eritilmiş balmumu veya taştan dalgalar gibi pürüzsüz ve kavisli bir şekilde aşınmıştır.",
    aboutText2: "Coğrafi ve pratik olarak Beyaz Vadi, aslında ünlü Aşk Vadisi'nin (Bağlıdere) üst kanyon bölümüdür. En ideal yürüyüş rotası, Uçhisar yakınlarında yüksekten başlar ve sizi derin, beyaz duvarlı kanyondan aşağı doğru indirir. İlerledikçe manzara yavaşça değişir ve pürüzsüz beyaz duvarlar yerini Aşk Vadisi'nin meşhur dev peribacalarına bırakır.",

    // 3. MUST SEE
    mustSeeTitle: "Vadide Görmeniz Gerekenler",
    mustSeeCards: [
      { name: "Pürüzsüz Beyaz Duvarlar", desc: "Vadiye adını veren, suyun yumuşakça oyduğu dalga formundaki bembeyaz kanyon duvarları.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Aşk Vadisi (Love Valley) Geçişi", desc: "Beyaz kanyonun açılıp devasa peribacalarına dönüştüğü o sihirli ve kesintisiz geçiş noktası.", img: "/images/valleys/love-valley.jpg", link: "/valleys/love-valley" },
      { name: "Uçhisar Kalesi Silüeti", desc: "Vadi içinde geriye dönüp baktığınızda kanyonu mükemmel bir şekilde çerçeveleyen devasa kaya kale.", img: "/images/destinations/uchisar.jpg", link: "/destinations/uchisar" },
      { name: "Vadi Tabanı Bağları", desc: "Mineral bakımından zengin beyaz toprakta yetişen ve kayalarla harika bir renk kontrastı oluşturan küçük üzüm bağları.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Petek Kayalar (Honeycomb)", desc: "Devasa beyaz süngerlere veya bal peteklerine benzeyen ince ve delikli kaya formasyonları.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "Sessiz Patikalar", desc: "ATV ve tur otobüslerinin giremediği kanyonda mutlak sessizliğin ve huzurun tadını çıkarın.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    // 4. THINGS TO DO (Sales)
    todoTitle: "Beyaz Vadi Deneyimleri",
    todoCards: [
      { icon: "🥾", title: "Rehberli Yürüyüş (Uçhisar-Göreme)", price: 40, rating: "5.0", dur: "3 Saat", link: "/tours/hiking" },
      { icon: "👑", title: "VIP Özel Doğa Yürüyüşü", price: 120, rating: "5.0", dur: "Esnek", link: "/tours/private-tours" },
      { icon: "📸", title: "Profesyonel Dış Çekim", price: 100, rating: "4.8", dur: "2 Saat", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Atlı Safari (Alt Bölümde)", price: 45, rating: "4.7", dur: "2 Saat", link: "/tours/horse" },
      { icon: "🎈", title: "Balon Turu (Kanyon Üzerinde)", price: 160, rating: "4.9", dur: "1 Saat", link: "/tours/balloon" },
      { icon: "🟢", title: "Kapadokya Yeşil Tur", price: 65, rating: "4.8", dur: "Tam Gün", link: "/tours/green-tour" },
      { icon: "🚘", title: "Klasik Araç (Vadi Çıkışı)", price: 80, rating: "4.8", dur: "2 Saat", link: "/tours/classic-car" },
      { icon: "🚙", title: "Jeep Safari (Dış Çevre)", price: 45, rating: "4.6", dur: "2 Saat", link: "/tours/jeep-safari" }
    ],

    // 5. MUST DO (Editorial)
    expTitle: "Beyaz Vadi Deneyim Rehberi",
    expList: [
      { num: "01", title: "Rotayı Uçhisar'dan Aşağı Yürüyün", desc: "Trekkinge Uçhisar'ın hemen altından başlayıp Göreme'ye doğru yaklaşık 4.5 km aşağı yürüyün. Bacakları yormaz ve en iyi manzaraları önünüze serer." },
      { num: "02", title: "Güneş Gözlüğü Takın", desc: "Bembeyaz kayalar adeta dev bir yansıtıcı görevi görür. Hava hafif bulutlu olsa bile güneş gözlüğü takmak kesinlikle şarttır." },
      { num: "03", title: "Sessizliğin Tadını Çıkarın", desc: "Patikalar dar ve engebeli olduğu için ATV'lerin buraya girmesi yasaktır. Kapadokya'nın en temiz ve en sessiz yürüyüş rotalarından biridir." },
      { num: "04", title: "Aşk Vadisi'ne Kesintisiz Geçin", desc: "Yürümeye devam edin! Beyaz kanyon duvarları yavaşça açılacak ve kendinizi bir anda Aşk Vadisi'nin ünlü peribacaları arasında bulacaksınız." },
      { num: "05", title: "Renk Kontrastını Yakalayın", desc: "Kapadokya'nın masmavi gökyüzü ile bembeyaz kayaların oluşturduğu inanılmaz kontrast, fotoğraf tutkunları için kusursuzdur." }
    ],

    // 6. TIME NEEDED
    daysTitle: "Ne Kadar Vakit Ayırmalı?",
    daysList: [
      { day: "2-3 Saat (Tam Yürüyüş)", desc: "Uçhisar'dan başlayıp Beyaz Vadi'yi geçerek Aşk Vadisi ve Göreme'ye ulaşmak için gereken ideal süre." },
      { day: "1 Saat (Kısa Mola)", desc: "Uçhisar'dan kanyonun ortalarına kadar inip beyaz kavisli duvarların fotoğrafını çektikten sonra geri çıkmak." },
      { day: "Yarım Gün (Kombine)", desc: "Önce Uçhisar Kalesi'ni gezin, ardından öğleden sonranızı beyaz kanyondan aşağı yapacağınız uzun bir yürüyüşe ayırın." }
    ],

    // 7. PHOTO SPOTS
    photoTitle: "En İyi Fotoğraf Noktaları",
    photoCards: [
      { name: "Pürüzsüz Beyaz Kavisler", time: "Sabah", for: "Minimalist Taş Dalgaları", diff: "Kolay", img: "/images/valleys/baglidere.jpg" },
      { name: "Uzakta Uçhisar Kalesi", time: "Gündüz", for: "Kale Silüeti", diff: "Orta", img: "/images/destinations/uchisar.jpg" },
      { name: "Aşk Vadisi Bağlantısı", time: "Öğleden Sonra", for: "Dev Peribacaları", diff: "Orta", img: "/images/valleys/love-valley.jpg" },
      { name: "Beyaz Taşta Yeşil Asmalar", time: "Bahar/Yaz", for: "Renk Kontrastı", diff: "Kolay", img: "/images/valleys/rose-valley.jpg" }
    ],

    // 8 & 9. EAT & STAY
    eatStayTitle: "Mola Yerleri & Konaklama",
    eatList: ["💧 Mutlaka Bol Su Getirin (Yoğun güneş yansıması olur)", "🍎 Dalından Yabani Meyveler (Mevsiminde)", "🥤 Küçük Taze Meyve Suyu Standı (Aşk Vadisi çıkışında)", "🍽️ Uçhisar Restoranları (Yürüyüş başlangıcında)"],
    stayList: ["📍 (Vadi içinde otel bulunmaz)", "🏰 Uçhisar Lüks Mağara Otelleri (Başlangıç noktası)", "💎 Göreme Butik Otelleri (Bitiş noktası)", "⛺ Vahşi Kamp (Yerel kurallara dikkat edilerek)"],

    // 10. TRANSPORT
    transTitle: "Beyaz Vadi'ye Nasıl Gidilir?",
    transList: ["🥾 Üst Giriş (Uçhisar): En iyi başlangıç noktasıdır. Uçhisar kasabasının hemen alt kısmında yer alır. Göreme'den Uçhisar'a taksiyle çıkıp aşağı doğru yürümeye başlamak en mantıklısıdır.", "🥾 Alt Giriş (Göreme): Yürüyüşe Göreme'den Aşk Vadisi (Love Valley) üzerinden girerek yukarı doğru da yapabilirsiniz, ancak bu sürekli yokuş çıkacağınız anlamına gelir.", "🚕 Taksi: Göreme merkezden bineceğiniz bir taksi sizi 10 dakika içinde Uçhisar'daki mükemmel yürüyüş başlangıç noktasına bırakacaktır."],

    // 11. BEST TIME
    seasonTitle: "Ziyaret İçin En İyi Zaman",
    seasons: [
      { name: "🌅 Sabah Erken", desc: "Vadi serindir ve bembeyaz kayalar henüz göz kamaştıracak kadar güneşi yansıtmaz." },
      { name: "🌸 İlkbahar", desc: "Kusursuz yürüyüş havası. Yeşeren bağlar beyaz kayalarla harika bir tezat oluşturur." },
      { name: "🍂 Sonbahar", desc: "Serin hava ve azalan kalabalıkla 2-3 saatlik yürüyüşün tadını çıkarın." },
      { name: "☀️ Yaz", desc: "Beyaz taşların güneşi yansıtması nedeniyle içerisi fırın gibi olabilir. Sabah 8'den önce başlayın." }
    ],

    // 12. TIPS
    tipsTitle: "Cappaviva Local Tips",
    tipsList: [
      "Güneşten korunmak burada çok kritiktir. Beyaz tüf kayalar karda yürüyormuşsunuz gibi UV ışınlarını çok güçlü yansıtır. Güneş kremi ve gözlük şarttır.",
      "Zemin çok ince, pudra gibi beyaz bir tozdan oluşur. İnişli yerlerde oldukça kaygan olabilir, bu yüzden altı iyi tutunan bir ayakkabı giyin.",
      "Yürüyüşe her zaman Uçhisar'dan başlayıp Göreme'ye doğru inin. Bu sayede yorucu bir tırmanışı, keyifli ve manzaralı bir inişe çevirmiş olursunuz.",
      "Aşk Vadisi tarafındaki kafelere ulaşana kadar kanyonun derinliklerinde su alabileceğiniz bir tesis veya tuvalet yoktur.",
      "Beyaz Vadi ve Aşk Vadisi (Baglıdere) aslında aynı kanyonun devamıdır. Tek bir yürüyüşle bölgenin en ünlü iki vadisini gezmiş olursunuz."
    ],

    // 13. EXPLORE NEARBY
    nearbyTitle: "Çevredeki Noktaları Keşfedin",
    nearbyList: [
      { name: "Aşk Vadisi (Love Valley)", time: "Bağlantılı", link: "/valleys/love-valley" },
      { name: "Uçhisar Kalesi", time: "Başlangıç Noktası", link: "/destinations/uchisar" },
      { name: "Güvercinlik Vadisi", time: "Başlangıca 15 dk yürüyüş", link: "/valleys/pigeon-valley" },
      { name: "Göreme Merkez", time: "Bitiş Noktası", link: "/destinations/goreme" },
      { name: "Gül Vadisi", time: "15 dk araçla", link: "/valleys/rose-valley" }
    ],

    // 14. POPULAR TOURS (Footer)
    popToursTitle: "Beyaz Vadi'yi Kapsayan Turlar",

    // 16. FAQ
    faqTitle: "Sık Sorulan Sorular",
    faqs: [
      { q: "Beyaz Vadi ile Aşk Vadisi (Love Valley) aynı yer mi?", a: "Temel olarak evet. Beyaz Vadi, Uçhisar'dan başlayan kanyon benzeri, beyaz pürüzsüz duvarlı üst kısımdır. Göreme'ye doğru yürüdükçe vadi açılır ve meşhur peribacalarının olduğu Aşk Vadisi bölümüne dönüşür." },
      { q: "Yürüyüş parkuru zor mu?", a: "Orta seviye bir parkurdur. Uçhisar'dan başlayıp aşağı (iniş) yönde yürürseniz oldukça keyiflidir. Ancak beyaz tozlu patikalar kaygan olabileceği için iyi bir ayakkabı şarttır." },
      { q: "Beyaz Vadi'nin içinde ATV turu yapabilir miyim?", a: "Hayır. Beyaz Vadi'nin iç kısımları ATV'ler için fazla dar ve hassastır. ATV turları sadece vadinin Göreme'ye yakın olan alt kısmında (Aşk Vadisi bölgesinde) yapılabilmektedir." }
    ],

    // 17. CTA
    ctaTitle: "Bembeyaz Bir Kanyon Yürüyüşüne Hazır Mısın?",
    ctaDesc: "Rehberli yürüyüş turunuzu rezerve edin ve Beyaz Vadi'nin huzur dolu, pürüzsüz güzelliğini keşfedin.",
    btnPlan: "YÜRÜYÜŞ REZERVASYONU YAP"
  },
  es: {
    heroSub: "Las Curvas Inmaculadas de Capadocia",
    heroDesc: "Un sereno cañón de roca volcánica blanca y suave que conecta sin problemas el pueblo de Uchisar con el famoso Valle del Amor.",
    btnExplore: "EXPLORAR EL VALLE",
    btnBookHero: "RESERVAR TREKKING GUIADO",
    statLoc: "Uchisar - Göreme",
    statTime: "Mejor Época: Mañana",
    statStay: "Tiempo Rec: 2–3 Horas",

    aboutTitle: "Sobre el Valle Blanco (Beyaz Vadi)",
    aboutTags: ["📍 Debajo del Castillo de Uchisar", "🤍 Rocas Blancas Inmaculadas", "🥾 Senderos Suaves", "☀️ Alta Reflexión Solar", "🍇 Viñedos Ocultos", "🤫 Pacífico y Silencioso", "🔗 Conecta al Valle del Amor"],
    aboutText1: "El Valle Blanco (Beyaz Vadi) recibe su nombre de su roca de toba volcánica sorprendentemente pálida, casi blanca pura. A diferencia de los bordes afilados de los valles Rojo o de las Espadas, las paredes del Valle Blanco se han erosionado en curvas increíblemente suaves que parecen cera derretida o ráfagas de piedra.",
    aboutText2: "Geográficamente, el Valle Blanco es la sección superior del Valle del Amor (Baglidere). La ruta de senderismo ideal comienza cerca de Uchisar, bajando a través del cañón profundo de paredes blancas. A medida que avanzas, el paisaje cambia y las paredes blancas se transforman en las chimeneas gigantes por las que el Valle del Amor es famoso.",

    mustSeeTitle: "Puntos Destacados",
    mustSeeCards: [
      { name: "Paredes Blancas Curvas", desc: "Las paredes del cañón increíblemente suaves que le dan al valle su nombre.", img: "/images/valleys/baglidere.jpg", link: "#" },
      { name: "Cruce al Valle del Amor", desc: "El punto mágico donde el cañón blanco se abre en chimeneas de hadas gigantes.", img: "/images/valleys/love-valley.jpg", link: "/valleys/love-valley" },
      { name: "Fondo del Castillo de Uchisar", desc: "El imponente castillo de roca de Uchisar enmarcando el valle a tus espaldas.", img: "/images/destinations/uchisar.jpg", link: "/destinations/uchisar" },
      { name: "Viñedos del Valle", desc: "Pequeñas áreas de exuberantes vides prosperando en el suelo blanco rico en minerales.", img: "/images/destinations/avanos.jpg", link: "#" },
      { name: "Rocas de Panal", desc: "Intricadas formaciones rocosas que parecen esponjas blancas gigantes o panales de miel.", img: "/images/valleys/rose-valley.jpg", link: "#" },
      { name: "El Sendero Silencioso", desc: "Experimenta el silencio puro en un cañón donde no entran ATV ni grandes grupos.", img: "/images/destinations/cavusin.jpg", link: "#" }
    ],

    todoTitle: "Experiencias en el Valle Blanco",
    todoCards: [
      { icon: "🥾", title: "Trekking Guiado", price: 40, rating: "5.0", dur: "3 Horas", link: "/tours/hiking" },
      { icon: "👑", title: "Caminata VIP Privada", price: 120, rating: "5.0", dur: "Flexible", link: "/tours/private-tours" },
      { icon: "📸", title: "Sesión de Fotos", price: 100, rating: "4.8", dur: "2 Horas", link: "/tours/photoshooting" },
      { icon: "🐎", title: "Safari a Caballo", price: 45, rating: "4.7", dur: "2 Horas", link: "/tours/horse" },
      { icon: "🎈", title: "Globo al Amanecer", price: 160, rating: "4.9", dur: "1 Hora", link: "/tours/balloon" },
      { icon: "🟢", title: "Tour Verde de Capadocia", price: 65, rating: "4.8", dur: "Día Completo", link: "/tours/green-tour" },
      { icon: "🚘", title: "Coche Clásico (Salida)", price: 80, rating: "4.8", dur: "2 Horas", link: "/tours/classic-car" },
      { icon: "🚙", title: "Safari en Jeep", price: 45, rating: "4.6", dur: "2 Horas", link: "/tours/jeep-safari" }
    ],

    expTitle: "Guía de Experiencia",
    expList: [
      { num: "01", title: "Camina Cuesta Abajo", desc: "Comienza justo debajo de Uchisar y camina la ruta de 4.5km hacia Göreme. Es mucho más fácil y ofrece las mejores vistas de frente." },
      { num: "02", title: "Usa Gafas de Sol", desc: "La roca blanca actúa como un reflector gigante para el sol. Las gafas son obligatorias, incluso en días nublados." },
      { num: "03", title: "Disfruta el Silencio", desc: "Como el camino es estrecho, los ATV no están permitidos. Es una de las caminatas más pacíficas de la región." },
      { num: "04", title: "Transición al Valle del Amor", desc: "¡Sigue caminando! Saldrás naturalmente del cañón blanco y entrarás en el famoso Valle del Amor." },
      { num: "05", title: "Captura el Contraste", desc: "El cielo azul de Capadocia contra las rocas blancas crea un contraste increíble para la fotografía." }
    ],

    daysTitle: "¿Cuánto Tiempo Necesitas?",
    daysList: [
      { day: "2-3 Horas (Ruta Completa)", desc: "El tiempo ideal para caminar desde Uchisar, a través del Valle Blanco, terminando en Göreme." },
      { day: "1 Hora (Paseo Corto)", desc: "Baja desde Uchisar hasta la mitad del cañón, toma fotos de las paredes lisas y vuelve a subir." },
      { day: "Medio Día (Exploración)", desc: "Combina una visita al Castillo de Uchisar con una larga caminata por la tarde a través del cañón blanco." }
    ],

    photoTitle: "Mejores Puntos para Fotos",
    photoCards: [
      { name: "Las Curvas Suaves", time: "Mañana", for: "Ondas de Piedra Minimalistas", diff: "Fácil", img: "/images/valleys/baglidere.jpg" },
      { name: "Uchisar a lo Lejos", time: "Día", for: "Fondo de Castillo", diff: "Medio", img: "/images/destinations/uchisar.jpg" },
      { name: "Cruce del Valle del Amor", time: "Tarde", for: "Chimeneas de Hadas", diff: "Medio", img: "/images/valleys/love-valley.jpg" },
      { name: "Vides Verdes en Roca Blanca", time: "Primavera/Verano", for: "Contraste de Color", diff: "Fácil", img: "/images/valleys/rose-valley.jpg" }
    ],

    eatStayTitle: "Refrescos y Alojamiento",
    eatList: ["💧 Trae Mucha Agua (Alta reflexión solar)", "🍎 Fruta Fresca de Árboles Locales", "🥤 Puesto de Zumo (A la salida del Valle del Amor)", "🍽️ Restaurantes en Uchisar (Punto de inicio)"],
    stayList: ["📍 (No hay hoteles en el valle)", "🏰 Suites Cueva de Lujo en Uchisar", "💎 Hoteles Boutique en Göreme", "⛺ Acampada Libre (Revisa las normas locales)"],

    transTitle: "¿Cómo Acceder al Valle Blanco?",
    transList: ["🥾 Inicio Superior (Uchisar): El mejor punto. Toma un taxi desde Göreme a Uchisar para empezar a caminar cuesta abajo.", "🥾 Inicio Inferior (Göreme): Puedes subir desde Göreme por el Valle del Amor, pero es una subida continua.", "🚕 Taxi: Un viaje de 10 minutos desde Göreme te dejará en el punto de inicio perfecto en Uchisar."],

    seasonTitle: "Mejor Época para Visitar",
    seasons: [
      { name: "🌅 Mañana Temprano", desc: "El valle está fresco y las rocas blancas aún no ciegan." },
      { name: "🌸 Primavera", desc: "Clima perfecto. Los viñedos verdes contrastan maravillosamente." },
      { name: "🍂 Otoño", desc: "Aire fresco y temperaturas agradables para el trekking de 2-3 horas." },
      { name: "☀️ Verano", desc: "Hace muchísimo calor por la piedra reflectante. Empieza antes de las 8 AM." }
    ],

    tipsTitle: "Consejos Locales",
    tipsList: [
      "La protección solar es crítica aquí. La toba blanca refleja los rayos UV intensamente. Usa crema solar y gafas de sol.",
      "El suelo es de polvo blanco fino y puede ser resbaladizo en las bajadas. Usa zapatos con buen agarre.",
      "Inicia siempre desde Uchisar hacia Göreme. Convierte una subida agotadora en un descenso agradable.",
      "No hay baños ni paradas de agua hasta llegar a los cafés del Valle del Amor.",
      "El Valle Blanco y el Valle del Amor son el mismo cañón. Haces dos valles famosos en una caminata."
    ],

    nearbyTitle: "Explora Puntos Cercanos",
    nearbyList: [
      { name: "Valle del Amor", time: "Conectado", link: "/valleys/love-valley" },
      { name: "Castillo de Uchisar", time: "Inicio de la Ruta", link: "/destinations/uchisar" },
      { name: "Valle de las Palomas", time: "15 min a pie desde inicio", link: "/valleys/pigeon-valley" },
      { name: "Göreme", time: "Final de la Ruta", link: "/destinations/goreme" },
      { name: "Valle Rosado", time: "15 min en coche", link: "/valleys/rose-valley" }
    ],

    popToursTitle: "Tours que Visitan el Valle Blanco",

    faqTitle: "Preguntas Frecuentes",
    faqs: [
      { q: "¿Son lo mismo el Valle Blanco y el Valle del Amor?", a: "Básicamente sí. El Valle Blanco es la sección superior, parecida a un cañón con paredes lisas, que comienza en Uchisar. Al bajar hacia Göreme, se abre en la zona llena de pilares conocida como el Valle del Amor." },
      { q: "¿Es difícil la caminata?", a: "Es una caminata moderada. Si comienzas en Uchisar y caminas cuesta abajo, es muy agradable. Sin embargo, los caminos polvorientos blancos pueden ser resbaladizos." },
      { q: "¿Puedo hacer un tour en ATV en el Valle Blanco?", a: "No. Los caminos en el Valle Blanco son demasiado estrechos y sensibles para los ATV. Solo puedes hacer tours en ATV en la sección inferior del Valle del Amor." }
    ],

    ctaTitle: "¿Listo para una Caminata Serena?",
    ctaDesc: "Reserva un tour guiado de trekking y experimenta la belleza pacífica del Valle Blanco.",
    btnPlan: "RESERVAR TU CAMINATA"
  }
};

export default function WhiteValleyPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = WHITE_VALLEY_DICT[aktifDil] || WHITE_VALLEY_DICT['tr'];

  return (
    <main className="bg-[#F8FAFC] min-h-screen overflow-hidden selection:bg-sky-500 selection:text-white pb-10">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900">
        <Image src="/images/valleys/baglidere.jpg" alt="White Valley Cappadocia" fill priority unoptimized className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/30 via-slate-900/50 to-[#F8FAFC]"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="text-sky-400 font-extrabold tracking-[0.3em] uppercase text-sm md:text-lg mb-4 drop-shadow-md">
            {t.heroSub}
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-black text-white tracking-tighter drop-shadow-2xl mb-6 leading-none">
            WHITE VALLEY
          </h1>
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-10 drop-shadow-md">
            {t.heroDesc}
          </p>
          
          <div className="flex gap-4 mb-16">
            <a href="#about" className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-sky-500 hover:scale-105 transition-all shadow-xl shadow-sky-600/30">
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
          <div className="w-16 h-1.5 bg-sky-500 mt-6 rounded-full"></div>
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
            <p className="text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-sky-500 pl-4">
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
            <div className="w-16 h-1.5 bg-sky-500 mx-auto mt-6 rounded-full"></div>
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
                    <span className="text-sky-400 text-xs font-bold tracking-widest uppercase group-hover:text-white transition-colors">Explore &rarr;</span>
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
          <div className="w-16 h-1.5 bg-sky-500 mx-auto mt-6 rounded-full"></div>
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
                  <Link href={card.link} className="bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg uppercase tracking-wider hover:bg-sky-500 hover:text-black transition-colors">
                    VIEW
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 5. MUST DO (Editorial Guide) */}
      <section className="py-24 bg-sky-50/50 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll className="lg:sticky lg:top-24">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{t.expTitle}</h2>
            <div className="w-16 h-1.5 bg-sky-500 mt-6 rounded-full mb-8"></div>
          </RevealOnScroll>
          
          <div className="space-y-8">
            {t.expList.map((exp: any, i: number) => (
              <RevealOnScroll key={i} delay={i * 100} className="flex gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-3xl font-black text-sky-500 shrink-0">{exp.num}</div>
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
          <div className="w-16 h-1.5 bg-sky-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.daysList.map((day: any, i: number) => (
            <RevealOnScroll key={i} delay={i * 100} className="bg-slate-900 text-white rounded-[2rem] p-8 text-center shadow-xl">
              <div className="text-3xl font-black text-sky-400 mb-4">{day.day}</div>
              <p className="text-slate-300 font-medium leading-relaxed">{day.desc}</p>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={400} className="text-center mt-12">
          <Link href="/itineraries" className="inline-flex items-center text-sm font-black text-slate-900 uppercase tracking-widest bg-sky-100 hover:bg-sky-500 hover:text-white px-6 py-3 rounded-xl transition-colors">
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
          <div className="w-16 h-1.5 bg-sky-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100} className="bg-slate-900 text-white rounded-[3rem] p-10 md:p-12 shadow-xl">
            <h3 className="text-3xl font-black mb-8 text-sky-400">Where to Stay?</h3>
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
      <section className="py-24 bg-sky-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl font-black text-slate-900 mb-8">{t.transTitle}</h2>
            <div className="flex flex-col gap-4 mb-10">
              {t.transList.map((item: string, i: number) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm font-bold text-slate-700">{item}</div>
              ))}
            </div>
            <Link href="/tours/hiking" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-sky-600 transition-all">
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
                  <span className="text-sky-500 mt-0.5">✔</span> {tip}
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
            <h2 className="text-3xl font-black mb-10 text-sky-400">{t.nearbyTitle}</h2>
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
          <div className="w-16 h-1.5 bg-sky-500 mx-auto mt-6 rounded-full"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[t.todoCards[0], t.todoCards[1], t.todoCards[2]].map((card: any, idx: number) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <Link href={card.link} className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_35px_rgba(14,165,233,0.2)] transition-all duration-500 hover:-translate-y-2 h-full">
                <div className="w-full h-48 relative bg-slate-200 flex items-center justify-center text-5xl">
                   {card.icon}
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{card.title}</h3>
                  <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
                      <Price eur={card.price} className="text-xl font-black text-slate-900 block" />
                    </div>
                    <span className="text-sky-500 text-xs font-bold uppercase tracking-widest">View &rarr;</span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* 15. GOOGLE MAP (White Valley) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl font-black text-slate-900 mb-8">White Valley Map</h2>
          <div className="w-full h-[450px] bg-slate-200 rounded-[3rem] shadow-inner overflow-hidden border-4 border-white relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12576.438289456865!2d34.8197779!3d38.6575775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a67bc45dbcc71%3A0xcaf63d3a0eeb9eeb!2sLove%20Valley!5e0!3m2!1str!2str!4v1714567890123!5m2!1str!2str" 
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
                  <span className="text-sky-500 transition group-open:rotate-180">▼</span>
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
          <h2 className="text-4xl md:text-5xl font-black text-sky-400 mb-6 tracking-tighter">{t.ctaTitle}</h2>
          <p className="text-xl font-medium text-slate-300 mb-10">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours/hiking" className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-sky-500 transition-all shadow-xl">
              {t.btnPlan}
            </Link>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  );
}