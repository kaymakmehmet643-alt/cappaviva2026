"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import Instagram from "../components/instagram"; 
import Price from "../components/Price";
import { useSite } from "../app/context/SiteContext";

// =======================================================
// 📚 DEVASA KÜRESEL SÖZLÜK
// =======================================================
const SOZLUK: any = {
  en: {
    chatWUs: "Questions? Chat with us! 👋",
    heroTitle1: "Discover Cappadocia",
    heroTitle2: "Like Never Before.",
    heroDesc: "Award-winning tours, VIP transfers, and unforgettable experiences.",
    bookBtn: "Book Now",
    exploreBtn: "Explore",
    planBtn: "Ready Travel Plans",
    popularSearch: "Popular Searches:",
    trust1: "Certificate of Excellence",
    trust2: "Based on 2,500+ Reviews",
    trust3: "Happy Guests",
    trust4: "Official Member",
    regionTitle: "Discover The Region",
    regionSub: "Popular Destinations",
    regionDesc: "Explore the unique valleys and underground cities of Cappadocia.",
    viewAllDest: "View All Destinations",
    toursTitle: "Most Popular Tours",
    toursDesc: "Explore the most beloved experiences in Cappadocia, carefully curated for your unforgettable journey.",
    activity: "Activity",
    adventure: "Adventure",
    dailyTour: "Daily Tour",
    sellingFast: "🔥 Selling Fast",
    popular: "Popular",
    bestValue: "Best Value",
    hotAirTitle: "Hot Air Balloon Flight",
    hotAirDesc: "Float above the fairy chimneys at sunrise and witness the magical landscape of Cappadocia from the sky.",
    freeCancel: "Free Cancellation",
    checkAvail: "Check Availability",
    atvTitle: "Sunset ATV Tour",
    atvDesc: "Ride through the dusty trails of Sword, Love, and Rose Valleys as the sun sets over the unique rock formations.",
    payLater: "Pay Later",
    reserveNow: "Reserve Now",
    redTitle: "Cappadocia Red Tour",
    redDesc: "Explore the Göreme Open Air Museum, Uçhisar Castle, and the pottery town of Avanos in a single day.",
    museumInc: "Museum Tickets Included",
    viewAllTours: "View All Tours & Activities",
    
    bentoTitle1: "Touch the Sky,",
    bentoTitle2: "Discover Cappadocia",
    bentoTrust1: "100% Secure Booking",
    bentoTrust2: "24/7 Customer Support",
    bentoTrust3: "No Hidden Fees",
    bentoCard1Title: "Best Travel Agency",
    bentoCard1Desc: "Tired of ordinary destinations? Try a unique experience.",
    bentoCard2Title: "Safe Journey With Us",
    bentoCard2Desc: "Bored of standard places? Step into a new destination.",
    bentoCard3Title: "Top Tier Locations",
    bentoCard3Desc: "Are you ready for the most exclusive spots in Cappadocia?",

    trfSub: "Premium Travel",
    trfTitle: "VIP Transfer Services",
    trf1Title: "Private Kayseri Transfer",
    trf1Desc: "Private luxury Mercedes Vito transfer from Kayseri (ASR) Airport directly to your hotel door.",
    trf2Title: "Private Nevşehir Transfer",
    trf2Desc: "Fast and comfortable private transfer from Nevşehir (NAV) Airport to your accommodation.",
    trf3Title: "Shared Shuttle Transfer",
    trf3Desc: "Budget-friendly shared airport transfers with comfortable minibuses to all towns in Cappadocia.",
    trf4Title: "Intercity VIP Transfer",
    trf4Desc: "Private chauffeured luxury transfers to Pamukkale, Antalya, Istanbul, or Konya from Cappadocia.",
    viewAllTrf: "View All Transfer Options",

    tailorTitle: "Design Your Dream Trip",
    tailorDesc: "Let our local experts create a personalized VIP itinerary just for you.",
    tailorBtn: "Plan Your Trip",

    planSub: "Stress-Free Journeys",
    planTitle: "Ready Travel Plans",
    planDesc: "Don't know where to start? Choose one of our expertly curated itineraries and explore Cappadocia without the hassle of planning.",
    plan1Day: "1 DAY",
    plan1Title: "The Express Explorer",
    plan1Desc: "Short on time? See the absolute must-visit spots including the Hot Air Balloons, Göreme Open Air Museum, and sunset at Red Valley.",
    viewItinerary: "View Itinerary",
    plan2Day: "2 DAYS",
    plan2Title: "The Classic Weekend",
    plan2Desc: "The perfect balance. Combine the Red and Green tours, stay in an authentic cave hotel, and enjoy a traditional Turkish Night.",
    plan3Day: "3+ DAYS",
    plan3Title: "Deep Cappadocia",
    plan3Desc: "For the slow traveler. Explore underground cities, hike the Ihlara Valley, take a pottery workshop, and discover hidden churches.",
    plan4Day: "4 DAYS",
    plan4Title: "Romantic Honeymoon",
    plan4Desc: "A magical getaway with a private VIP balloon flight, cave suite stay, and romantic valley dinners.",
    plan5Day: "FLEXIBLE",
    plan5Title: "Family Adventure",
    plan5Desc: "Fun for all ages. Pottery making, gentle valley walks, and comfortable spacious VIP transfers.",
    seeAllPlans: "See All Ready Plans",
    wsSub: "Culture & Art",
    wsTitle: "Workshops & Activities",
    ws1: "Pottery Workshop",
    ws2: "Carpet Weaving",
    ws3: "Turkish Cooking",
    ws4: "Wine Tasting",
    viewAllWs: "View All Workshops",
    igSub: "Captured Moments",
    igTitle: "Cappadocia Through Our Lens",
    igDesc: "Real memories from our guests. Get inspired for your upcoming adventure in the land of beautiful horses.",
    whySub: "Our Difference",
    whyTitle: "Why Choose CappaViva?",
    why1: "No Hidden Fees",
    why1d: "You pay what you see. No surprise extra charges or mandatory tipping.",
    why2: "Luxury Fleet",
    why2d: "All your transfers and tours are operated with VIP designed, brand-new air-conditioned vehicles.",
    why3: "Licensed Local Guides",
    why3d: "Guides who know the region by heart, holding official licenses and speaking advanced foreign languages.",
    revTitle: "What Our Guests Say",
    rev1: '"Everything was perfect! We felt so special from the moment we were picked up at the airport. The balloon tour was the best experience of my life."',
    rev2: '"Our Red Tour guide was incredibly knowledgeable. Took us to the best spots for photos. Highly recommend."',
    rev3: '"The vehicles were very clean and luxurious. They answered all our questions instantly on WhatsApp. Amazing service quality."',
    faqSub: "Clear Your Mind",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out.",
    q1: "When is the best time to visit Cappadocia?",
    a1: "Cappadocia is beautiful year-round! Spring (April-June) and Autumn (September-November) offer the most pleasant weather for hiking and tours. Winter brings magical snow-covered fairy chimneys, and summer is vibrant but can be hot in the afternoons. Balloon flights operate all year, weather permitting.",
    q2: "Are hot air balloon flights guaranteed?",
    a2: "Safety is our top priority. Balloon flights are strictly regulated by the Turkish Civil Aviation Authority based on daily wind and weather conditions. If a flight is canceled due to weather, you will receive a full refund or the option to reschedule.",
    q3: "What is the difference between the Red Tour and Green Tour?",
    a3: "The Red Tour (North) focuses on the closest and most iconic sites like the Göreme Open Air Museum and Fairy Chimneys. The Green Tour (South) is more nature-focused. It involves exploring deep Underground Cities and hiking in the lush Ihlara Valley.",
    q4: "Do I need to book in advance?",
    a4: "Yes, strongly recommended! Hot air balloon spaces and popular boutique cave hotels fill up weeks in advance, especially during the high season.",
    q5: "How does the booking and payment process work?",
    a5: "It’s very simple. Choose your desired package and send a request via WhatsApp. Our local experts will confirm availability instantly. Payments can be made safely upon arrival or via a secure online link.",
    contactTitle: "Find Us in Cappadocia",
    contactDesc: "Come to our office in Göreme for a coffee and plan your route with our expert guides.",
    office: "Office",
    officeDesc: "Göreme Town, Nevşehir / Türkiye",
    call: "WhatsApp / Call",
    partners: "Our Trusted Partners",
    nlTitle: "Don't Miss Cappadocia Deals!",
    nlDesc: "Join our newsletter for exclusive discounts, new tours, and Cappadocia travel tips.",
    nlPlace: "Your email address...",
    nlBtn: "Subscribe",
    nlJoined: "Subscribed ✓",
    nlSuccess: "Awesome! You have successfully subscribed to our newsletter. 🎉",
    blogSub: "Travel Guide",
    blogTitle: "Cappadocia Blog & Tips",
    blogDesc: "Everything you need to know before visiting. Read our local guides to make the most out of your trip.",
    readMore: "Read Article",
    viewAllBlog: "View All Travel Guides",
    blog1Title: "10 Things to Know Before Riding a Hot Air Balloon",
    blog1Category: "Guide",
    blog2Title: "Best Cave Hotels in Cappadocia: Our Top Picks",
    blog2Category: "Accommodation",
    blog3Title: "A Complete Guide to Underground Cities",
    blog3Category: "History",
    blog5Title: "Top 5 Valleys for Sunset Hiking",
    blog5Category: "Nature",
    blog6Title: "Local Food Guide: What to Eat in Göreme?",
    blog6Category: "Food",
    waTitle: "CappaViva Team",
    waStatus: "Online • Replies instantly",
    waHello: "Hello! 👋",
    waMsg: "How can we help you plan your Cappadocia trip today?",
    waInput: "Type your question here...",
    waDefaultMsg: "Hello, I want to get information about Cappadocia tours."
  },
  tr: {
    chatWUs: "Sorularınız mı var? Bize yazın! 👋",
    heroTitle1: "Kapadokya'yı Keşfet",
    heroTitle2: "Hiç Olmadığı Gibi.",
    heroDesc: "Ödüllü turlar, VIP transferler ve unutulmaz deneyimler.",
    bookBtn: "Hemen Rezervasyon",
    exploreBtn: "Keşfet",
    planBtn: "Hazır Gezi Planları",
    popularSearch: "Popüler Aramalar:",
    trust1: "Mükemmellik Sertifikası",
    trust2: "2.500+ Gerçek Yorum",
    trust3: "Mutlu Misafir",
    trust4: "Resmi TÜRSAB Üyesi",
    regionTitle: "Bölgeyi Keşfet",
    regionSub: "Popüler Kategoriler",
    regionDesc: "Kapadokya'nın eşsiz vadilerini ve gizemli yeraltı şehirlerini keşfedin.",
    viewAllDest: "Tüm Bölgeleri Gör",
    toursTitle: "En Popüler Turlar",
    toursDesc: "Unutulmaz yolculuğunuz için özenle seçilmiş, Kapadokya'nın en sevilen deneyimlerini keşfedin.",
    activity: "Aktivite",
    adventure: "Macera",
    dailyTour: "Günlük Tur",
    sellingFast: "🔥 Hızlı Tükeniyor",
    popular: "Popüler",
    bestValue: "En İyi Fiyat",
    hotAirTitle: "Kapadokya Balon Turu",
    hotAirDesc: "Kapadokya'nın büyüsünü gökyüzünden keşfedin. Peribacalarının üzerinden güneşin doğuşunu izleyin.",
    freeCancel: "Ücretsiz İptal",
    checkAvail: "Müsaitlik Kontrol Et",
    atvTitle: "Günbatımı ATV Turu",
    atvDesc: "Güneş eşsiz kaya oluşumlarının üzerinde batarken Kılıçlar, Aşk ve Güllüdere Vadilerinin tozlu parkurlarında sürüş yapın.",
    payLater: "Sonra Öde",
    reserveNow: "Yerini Ayırt",
    redTitle: "Kapadokya Kırmızı Tur",
    redDesc: "Göreme Açık Hava Müzesi'ni, Uçhisar Kalesi'ni ve Avanos'un çömlekçi kasabasını tek bir günde keşfedin.",
    museumInc: "Müze Biletleri Dahil",
    viewAllTours: "Tüm Tur ve Aktiviteleri Gör",
    
    bentoTitle1: "Gökyüzüne Dokun,",
    bentoTitle2: "Kapadokya'yı Keşfet",
    bentoTrust1: "%100 Güvenli Rezervasyon",
    bentoTrust2: "24/7 Müşteri Desteği",
    bentoTrust3: "Gizli Ücret Yok",
    bentoCard1Title: "En İyi Seyahat Acentesi",
    bentoCard1Desc: "Alışılmış turistik destinasyonlardan sıkıldınız mı?",
    bentoCard2Title: "Bizimle Güvenli Bir Yolculuk",
    bentoCard2Desc: "Sıradan yerlerden sıkıldınız mı? Yeni bir destinasyon deneyin.",
    bentoCard3Title: "Üst Düzey Mekanlar",
    bentoCard3Desc: "Sıradan yerlerden yoruldunuz mu? Yeni bir destinasyona hazır mısınız?",
    
    trfSub: "Premium Seyahat",
    trfTitle: "VIP Transfer Hizmetleri",
    trf1Title: "Kayseri Havalimanı (Özel)",
    trf1Desc: "Kayseri havalimanından doğrudan otelinizin kapısına kadar özel lüks Mercedes Vito transferi.",
    trf2Title: "Nevşehir Havalimanı (Özel)",
    trf2Desc: "Nevşehir havalimanından konaklama yerinize hızlı ve konforlu özel lüks transfer.",
    trf3Title: "Paylaşımlı Shuttle",
    trf3Desc: "Kapadokya'nın tüm kasabalarına konforlu minibüslerle bütçe dostu paylaşımlı transfer.",
    trf4Title: "Şehirlerarası VIP Transfer",
    trf4Desc: "Kapadokya'dan Pamukkale, Antalya, İstanbul veya Konya'ya özel şoförlü VIP lüks ulaşım.",
    viewAllTrf: "Tüm Transfer Seçeneklerini Gör",

    tailorTitle: "Kendi Seyahatinizi Planlayın",
    tailorDesc: "Yerel uzmanlarımız sadece size özel bir VIP Kapadokya rotası hazırlasın.",
    tailorBtn: "Seyahat Planla",

    planSub: "Stressiz Yolculuklar",
    planTitle: "Hazır Gezi Planları",
    planDesc: "Nereden başlayacağınızı bilmiyor musunuz? Uzmanlarımızın hazırladığı rotaları seçin ve planlama derdi olmadan Kapadokya'yı keşfedin.",
    plan1Day: "1 GÜN",
    plan1Title: "Hızlı Kaşif",
    plan1Desc: "Vaktiniz mi dar? Balonlar, Göreme Açık Hava Müzesi ve Kızıl Vadi'de gün batımı dahil mutlaka görülmesi gereken yerleri görün.",
    viewItinerary: "Planı İncele",
    plan2Day: "2 GÜN",
    plan2Title: "Klasik Hafta Sonu",
    plan2Desc: "Kusursuz denge. Kırmızı ve Yeşil turları birleştirin, otantik bir mağara otelde kalın ve geleneksel Türk Gecesi'nin tadını çıkarın.",
    plan3Day: "3+ GÜN",
    plan3Title: "Derin Kapadokya",
    plan3Desc: "Yavaş seyahat edenler için. Yeraltı şehirlerini keşfedin, Ihlara'da yürüyüş yapın, çömlek yapın ve gizli kiliseleri bulun.",
    plan4Day: "4 GÜN",
    plan4Title: "Romantik Balayı",
    plan4Desc: "Özel VIP balon uçuşu, mağara süit konaklaması ve vadide romantik akşam yemeği ile büyülü bir kaçamak.",
    plan5Day: "ESNEK",
    plan5Title: "Aile Macerası",
    plan5Desc: "Her yaşa uygun eğlence. Çömlek yapımı, hafif vadi yürüyüşleri ve rahat geniş araçlarla transferler.",
    seeAllPlans: "Tüm Hazır Planları Gör",
    wsSub: "Kültür & Sanat",
    wsTitle: "Atölyeler & Aktiviteler",
    ws1: "Çömlek Atölyesi",
    ws2: "Halı Dokuma",
    ws3: "Türk Yemekleri Kursu",
    ws4: "Şarap Tadımı",
    viewAllWs: "Tüm Atölyeleri Gör",
    igSub: "Yakalanan Anlar",
    igTitle: "Bizim Gözümüzden Kapadokya",
    igDesc: "Misafirlerimizin gerçek anıları. Güzel atlar diyarındaki yaklaşan maceranız için ilham alın.",
    whySub: "Farkımız",
    whyTitle: "Neden CappaViva?",
    why1: "Gizli Ücret Yok",
    why1d: "Gördüğünüz fiyatı ödersiniz. Sürpriz ekstra ücretler veya zorunlu bahşişler yoktur.",
    why2: "Lüks Filo",
    why2d: "Tüm transferleriniz ve turlarınız VIP tasarımlı, yeni model klimalı araçlarla yapılır.",
    why3: "Lisanslı Yerel Rehberler",
    why3d: "Bölgeyi ezbere bilen, resmi kokartlı ve ileri düzey yabancı dil konuşan rehberler.",
    revTitle: "Misafirlerimiz Ne Diyor?",
    rev1: '"Her şey kusursuzdu! Havalimanından alındığımız andan itibaren kendimizi çok özel hissettik. Balon turu hayatımın en iyi deneyimiydi."',
    rev2: '"Kırmızı Tur rehberimiz inanılmaz bilgiliydi. Fotoğraf çekimi için bizi en iyi noktalara götürdü. Kesinlikle tavsiye ederim."',
    rev3: '"Araçlar çok temiz ve lükstü. WhatsApp üzerinden her sorumuza anında cevap verdiler. İnanılmaz bir hizmet kalitesi."',
    faqSub: "Aklınızdaki Sorular",
    faqTitle: "Sıkça Sorulan Sorular",
    faqDesc: "Sorularınız mı var? Cevaplarımız var. Aradığınızı bulamazsanız bizimle iletişime geçmekten çekinmeyin.",
    q1: "Kapadokya'yı ziyaret etmek için en iyi zaman nedir?",
    a1: "Kapadokya yıl boyu güzeldir! İlkbahar ve Sonbahar en keyifli havaları sunar. Kışın karlar altındaki peribacaları büyülüdür, yazın ise hareketlidir. Balonlar hava şartları elverdiğince her gün uçar.",
    q2: "Balon uçuşları kesin mi?",
    a2: "Güvenlik önceliğimizdir. Balonlar, günlük rüzgar şartlarına göre Türk Sivil Havacılık Kurumu tarafından denetlenir. İptal durumunda tam iade alırsınız veya uçuşunuz ertesi güne kaydırılır.",
    q3: "Kırmızı Tur ve Yeşil Tur arasındaki fark nedir?",
    a3: "Kırmızı Tur (Kuzey) Göreme Müzesi ve Peribacaları gibi merkeze yakın ikonik yerlere odaklanır. Yeşil Tur (Güney) ise yeraltı şehirleri ve Ihlara Vadisi gibi doğa ve tarih odaklı, daha uzak mesafeli bir turdur.",
    q4: "Önceden rezervasyon yapmalı mıyım?",
    a4: "Evet, kesinlikle önerilir! Özellikle yüksek sezonda balon yerleri ve popüler mağara otelleri haftalar öncesinden dolmaktadır.",
    q5: "Rezervasyon ve ödeme süreci nasıl işliyor?",
    a5: "Çok basit. İstediğiniz turu seçip WhatsApp'tan bize yazın. Uzmanlarımız müsaitliği anında teyit eder. Ödemeyi güvenli link üzerinden veya geldiğinizde yapabilirsiniz.",
    contactTitle: "Bizi Kapadokya'da Bulun",
    contactDesc: "Göreme'deki ofisimize gelip bir kahvemizi içebilir, rotanızı rehberlerimizle planlayabilirsiniz.",
    office: "Ofis",
    officeDesc: "Göreme Kasabası, Nevşehir / Türkiye",
    call: "WhatsApp / Ara",
    partners: "Güvenilir Çözüm Ortaklarımız",
    nlTitle: "Kapadokya Fırsatlarını Kaçırmayın!",
    nlDesc: "Özel indirimler, yeni turlar ve Kapadokya ipuçları için bültenimize katılın.",
    nlPlace: "E-posta adresiniz...",
    nlBtn: "Abone Ol",
    nlJoined: "Katıldınız ✓",
    nlSuccess: "Harika! E-posta bültenimize başarıyla katıldınız. 🎉",
    blogSub: "Seyahat Rehberi",
    blogTitle: "Kapadokya Blog & İpuçları",
    blogDesc: "Gezinizden önce bilmeniz gereken her şey. Seyahatinizi kusursuzlaştırmak için yerel rehberlerimizin yazılarını okuyun.",
    readMore: "Yazıyı Oku",
    viewAllBlog: "Tüm Rehberleri Gör",
    blog1Title: "Balon Turuna Çıkmadan Önce Bilmeniz Gereken 10 Şey",
    blog1Category: "Rehber",
    blog2Title: "Kapadokya'nın En İyi Mağara Otelleri: Favorilerimiz",
    blog2Category: "Konaklama",
    blog3Title: "Yeraltı Şehirleri İçin Kapsamlı Keşif Rehberi",
    blog3Category: "Tarih",
    blog5Title: "Günbatımı Yürüyüşü İçin En İyi 5 Vadi",
    blog5Category: "Doğa",
    blog6Title: "Yerel Lezzetler: Göreme'de Ne Yenir?",
    blog6Category: "Yemek",
    waTitle: "CappaViva Ekibi",
    waStatus: "Çevrimiçi • Hemen yanıtlar",
    waHello: "Merhaba! 👋",
    waMsg: "Kapadokya seyahatinizi planlamanıza nasıl yardımcı olabiliriz?",
    waInput: "Sorunuzu buraya yazın...",
    waDefaultMsg: "Merhaba, turlar hakkında bilgi almak istiyorum."
  },
  es: {
    chatWUs: "¡Chatea con nosotros! 👋",
    heroTitle1: "Descubre Capadocia",
    heroTitle2: "Como Nunca Antes.",
    heroDesc: "Tours galardonados, traslados VIP y experiencias inolvidables.",
    bookBtn: "Reserva Ahora",
    exploreBtn: "Explorar",
    planBtn: "Planes de Viaje",
    popularSearch: "Búsquedas Populares:",
    trust1: "Certificado de Excelencia",
    trust2: "Basado en 2500+ Reseñas",
    trust3: "Huéspedes Felices",
    trust4: "Miembro Oficial",
    regionTitle: "Descubre la Región",
    regionSub: "Categorías Populares",
    regionDesc: "Explora los valles únicos y las ciudades subterráneas de Capadocia.",
    viewAllDest: "Ver Todos los Destinos",
    toursTitle: "Tours Más Populares",
    toursDesc: "Explora las experiencias más queridas en Capadocia, cuidadosamente seleccionadas para ti.",
    activity: "Actividad",
    adventure: "Aventura",
    dailyTour: "Tour Diario",
    sellingFast: "🔥 Se Vende Rápido",
    popular: "Popular",
    bestValue: "Mejor Precio",
    hotAirTitle: "Vuelo en Globo Aerostático",
    hotAirDesc: "Flota sobre las chimeneas de hadas al amanecer y observa el mágico paisaje desde el cielo.",
    freeCancel: "Cancelación Gratuita",
    checkAvail: "Consultar Disponibilidad",
    atvTitle: "Tour en ATV al Atardecer",
    atvDesc: "Conduce por los senderos polvorientos de los valles del Amor y las Rosas mientras el sol se pone.",
    payLater: "Pagar Después",
    reserveNow: "Reserva Ahora",
    redTitle: "Tour Rojo Capadocia",
    redDesc: "Explora el Museo al Aire Libre de Göreme, el Castillo de Uçhisar y Avanos en un solo día.",
    museumInc: "Entradas a Museos Incluidas",
    viewAllTours: "Ver Todos los Tours y Actividades",
    
    bentoTitle1: "Toca el Cielo,",
    bentoTitle2: "Descubre Capadocia",
    bentoTrust1: "Reserva 100% Segura",
    bentoTrust2: "Soporte 24/7",
    bentoTrust3: "Sin Cargos Ocultos",
    bentoCard1Title: "La Mejor Agencia",
    bentoCard1Desc: "¿Cansado de los destinos turísticos ordinarios?",
    bentoCard2Title: "Viaje Seguro Con Nosotros",
    bentoCard2Desc: "¿Aburrido de los lugares estándar? Prueba un nuevo destino.",
    bentoCard3Title: "Ubicaciones de Primer Nivel",
    bentoCard3Desc: "¿Estás listo para un nuevo destino exclusivo?",

    trfSub: "Viaje Premium",
    trfTitle: "Servicios de Traslado VIP",
    trf1Title: "Kayseri Traslado Privado",
    trf1Desc: "Traslado privado en Mercedes Vito desde Kayseri hasta su hotel.",
    trf2Title: "Nevşehir Traslado Privado",
    trf2Desc: "Traslados privados rápidos y cómodos desde el aeropuerto de Nevşehir.",
    trf3Title: "Traslado Compartido",
    trf3Desc: "Traslados compartidos económicos a todos los pueblos de Capadocia.",
    trf4Title: "Traslado VIP Interurbano",
    trf4Desc: "Traslados privados de lujo con chófer a Pamukkale, Antalya, Estambul o Ankara.",
    viewAllTrf: "Ver Todas las Opciones",

    tailorTitle: "Diseña tu Viaje",
    tailorDesc: "Permite que nuestros expertos creen un itinerario VIP solo para ti.",
    tailorBtn: "Planifica tu Viaje",

    planSub: "Viajes Sin Estrés",
    planTitle: "Planes de Viaje",
    planDesc: "¿No sabes por dónde empezar? Elige uno de nuestros itinerarios y explora sin la molestia de planificar.",
    plan1Day: "1 DÍA",
    plan1Title: "El Explorador Exprés",
    plan1Desc: "¿Poco tiempo? Ve los lugares imprescindibles: los globos, el Museo de Göreme y el atardecer en el Valle Rojo.",
    viewItinerary: "Ver Itinerario",
    plan2Day: "2 DÍAS",
    plan2Title: "El Fin de Semana Clásico",
    plan2Desc: "El equilibrio perfecto. Combina los tours Rojo y Verde, alójate en un hotel cueva y disfruta de una noche turca.",
    plan3Day: "3+ DÍAS",
    plan3Title: "Capadocia Profunda",
    plan3Desc: "Para el viajero lento. Explora ciudades subterráneas, haz senderismo en Ihlara y descubre iglesias ocultas.",
    plan4Day: "4 DÍAS",
    plan4Title: "Luna de Miel Romántica",
    plan4Desc: "Una escapada mágica con vuelo privado en globo VIP, estancia en suite cueva y cenas románticas en el valle.",
    plan5Day: "FLEXIBLE",
    plan5Title: "Aventura Familiar",
    plan5Desc: "Diversión para todas las edades. Alfarería, caminatas suaves por los valles y traslados amplios y cómodos.",
    seeAllPlans: "Ver Todos los Planes",
    wsSub: "Cultura y Arte",
    wsTitle: "Talleres y Actividades",
    ws1: "Taller de Cerámica",
    ws2: "Tejido de Alfombras",
    ws3: "Clase de Cocina Turca",
    ws4: "Cata de Vinos",
    viewAllWs: "Ver Todos los Talleres",
    igSub: "Momentos Capturados",
    igTitle: "Capadocia a Través de Nuestra Lente",
    igDesc: "Recuerdos reales de nuestros huéspedes. Inspírate para tu próxima aventura en la tierra de hermosos caballos.",
    whySub: "Nuestra Diferencia",
    whyTitle: "¿Por Qué Elegir CappaViva?",
    why1: "Sin Tarifas Ocultas",
    why1d: "Pagas lo que ves. Sin cargos extra sorpresa ni propinas obligatorias.",
    why2: "Flota de Lujo",
    why2d: "Todos sus traslados y tours se operan con vehículos VIP nuevos con aire acondicionado.",
    why3: "Guías Locales Licenciados",
    why3d: "Guías que conocen la región de memoria, con licencias oficiales y que hablan idiomas extranjeros.",
    revTitle: "Lo Que Dicen Nuestros Huéspedes",
    rev1: '"¡Todo fue perfecto! Nos sentimos tan especiales desde el momento en que nos recogieron. El globo fue la mejor experiencia."',
    rev2: '"Nuestro guía del Tour Rojo estaba increíblemente informado. Nos llevó a los mejores lugares. Muy recomendable."',
    rev3: '"Los vehículos estaban muy limpios. Respondieron al instante en WhatsApp. Increíble calidad de servicio."',
    faqSub: "Despeja Tu Mente",
    faqTitle: "Preguntas Frecuentes",
    faqDesc: "¿Tienes preguntas? Tenemos respuestas. Si no encuentras lo que buscas, contáctanos.",
    q1: "¿Cuándo es la mejor época para visitar Capadocia?",
    a1: "¡Capadocia es hermosa todo el año! Primavera y otoño ofrecen el clima más agradable. El invierno trae chimeneas nevadas, y el verano es vibrante. Los globos vuelan todo el año si el clima lo permite.",
    q2: "¿Están garantizados los vuelos en globo?",
    a2: "La seguridad es nuestra prioridad. Los vuelos están estrictamente regulados según los vientos diarios. Si se cancela, recibirás un reembolso completo o la opción de reprogramar.",
    q3: "¿Cuál es la diferencia entre el Tour Rojo y el Tour Verde?",
    a3: "El Tour Rojo se centra en sitios cercanos y emblemáticos como el Museo de Göreme. El Tour Verde se centra en la naturaleza, explorando ciudades subterráneas y el valle de Ihlara.",
    q4: "¿Necesito reservar con anticipación?",
    a4: "¡Sí, muy recomendable! Los globos y hoteles cueva se llenan con semanas de antelación, especialmente en temporada alta.",
    q5: "¿Cómo funciona el proceso de reserva y pago?",
    a5: "Es muy sencillo. Elige tu paquete y envía un mensaje por WhatsApp. Confirmaremos la disponibilidad al instante. Los pagos se pueden realizar al llegar o mediante un enlace seguro.",
    contactTitle: "Encuéntranos en Capadocia",
    contactDesc: "Ven a nuestra oficina en Göreme por un café y planea tu ruta con nuestros guías expertos.",
    office: "Oficina",
    officeDesc: "Pueblo de Göreme, Nevşehir / Turquía",
    call: "WhatsApp / Llamar",
    partners: "Nuestros Socios de Confianza",
    nlTitle: "¡No Te Pierdas Las Ofertas!",
    nlDesc: "Únete a nuestro boletín para descuentos, nuevos tours y consejos de viaje a Capadocia.",
    nlPlace: "Tu dirección de correo...",
    nlBtn: "Suscribirse",
    nlJoined: "Suscrito ✓",
    nlSuccess: "¡Genial! Te has suscrito con éxito a nuestro boletín. 🎉",
    blogSub: "Guía de Viaje",
    blogTitle: "Blog y Consejos de Capadocia",
    blogDesc: "Todo lo que necesitas saber antes de visitar. Lee nuestras guías locales para aprovechar al máximo tu viaje.",
    readMore: "Leer Artículo",
    viewAllBlog: "Ver Todas las Guías",
    blog1Title: "10 Cosas que Saber Antes de Volar en Globo",
    blog1Category: "Guía",
    blog2Title: "Los Mejores Hoteles Cueva en Capadocia",
    blog2Category: "Alojamiento",
    blog3Title: "Una Guía Completa de Ciudades Subterráneas",
    blog3Category: "Historia",
    blog5Title: "Los 5 Mejores Valles para Caminar al Atardecer",
    blog5Category: "Naturaleza",
    blog6Title: "Guía de Comida Local: ¿Qué Comer en Göreme?",
    blog6Category: "Comida",
    waTitle: "Equipo CappaViva",
    waStatus: "En línea • Responde al instante",
    waHello: "¡Hola! 👋",
    waMsg: "¿Cómo podemos ayudarte a planificar tu viaje a Capadocia hoy?",
    waInput: "Escribe tu pregunta...",
    waDefaultMsg: "Hola, me gustaría obtener información sobre los tours."
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const scrollRefDest = useRef<HTMLDivElement>(null);
  const scrollRefTours = useRef<HTMLDivElement>(null);
  const scrollRefTrf = useRef<HTMLDivElement>(null);
  const scrollRefPlans = useRef<HTMLDivElement>(null);
  const scrollRefWs = useRef<HTMLDivElement>(null);
  const scrollRefBlog = useRef<HTMLDivElement>(null);
  
  // YARISI GİZLİ OKLARLA KAYDIRMA FONKSİYONU
  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, scrollWidth, clientWidth } = ref.current;
      const scrollAmount = window.innerWidth < 768 ? 260 : 320;
      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth - 10) {
        ref.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && scrollLeft <= 0) {
        ref.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: "smooth" });
      }
    }
  };

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [waMessage, setWaMessage] = useState(""); 

  const { dil } = useSite();
  const aktifDil = dil ? String(dil).toLowerCase() : 'en';
  const t = SOZLUK[aktifDil] || SOZLUK['en'];

  // OTOMATİK CANLI KAYDIRMA (AUTO-PLAY)
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      const refs = [scrollRefDest, scrollRefTours, scrollRefTrf, scrollRefPlans, scrollRefWs, scrollRefBlog];
      refs.forEach(ref => {
        if (ref.current) {
          const { scrollLeft, scrollWidth, clientWidth } = ref.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            ref.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }
      });
    }, 4500);

    const waTimer = setTimeout(() => {
      setIsWhatsAppOpen(true);
    }, 3500);

    return () => {
      clearInterval(autoPlayInterval);
      clearTimeout(waTimer);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail(""); 
      setTimeout(() => { setIsSubscribed(false); }, 4000);
    }, 1500);
  };

  const handleWaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(waMessage || t.waDefaultMsg);
    window.open(`https://wa.me/905354322782?text=${text}`, '_blank');
    setWaMessage("");
    setIsWhatsAppOpen(false);
  };

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] overflow-x-hidden relative font-sans selection:bg-amber-500 selection:text-white pb-20 md:pb-0">
      
      {/* HAREKET ÇUBUĞUNU YOK EDEN CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scroll::-webkit-scrollbar { display: none !important; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      {/* 🌟 WHATSAPP WIDGET (SABİT DURACAK - YAZIŞMASIZ DİREKT BUTONLU) */}
      <div className="fixed bottom-6 right-4 md:right-6 z-[70] flex flex-col items-end font-sans">
        <AnimatePresence>
          {isWhatsAppOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mb-4 w-[320px] sm:w-[340px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 origin-bottom-right flex flex-col"
            >
              <div className="bg-[#075E54] p-4 flex items-center justify-between relative overflow-hidden">
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-10 h-10 bg-white rounded-full p-0.5 flex items-center justify-center shadow-sm shrink-0 relative">
                    <img src="/logo.png" alt="CappaViva" className="w-full h-full object-contain rounded-full" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm leading-tight">CappaViva Travel</h4>
                    <p className="text-white/80 text-[10px] font-medium mt-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      {t.waStatus}
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsWhatsAppOpen(false)} className="text-white/70 hover:text-white transition-colors relative z-10 p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              
              <div className="p-5 flex flex-col relative bg-slate-50">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-sm text-slate-800 mb-5 border border-gray-100 relative">
                  <p className="font-black text-[13px] mb-1 text-[#075E54]">CappaViva Team</p>
                  <p className="font-bold mb-1">{t.waHello}</p>
                  <p className="text-slate-600 leading-relaxed text-xs">{t.waMsg}</p>
                </div>
                <a href="https://wa.me/905354322782" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.5)] hover:-translate-y-0.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ask on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className={`bg-gradient-to-b from-[#25D366] to-[#1ebe57] border border-[#1ebd56] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-500 flex items-center justify-center group relative z-50 ${isWhatsAppOpen ? 'bg-slate-800 from-slate-800 to-slate-800 border-slate-700 shadow-none' : ''}`}
        >
          {!isWhatsAppOpen && <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none"></span>}
          {isWhatsAppOpen ? (
            <svg className="w-8 h-8 md:w-8 md:h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-7 h-7 md:w-8 md:h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>
      </div>

      {/* HERO */}
      <div className="relative h-[100svh] md:h-screen w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-slate-900 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 scale-105 motion-safe:animate-[slowZoom_20s_ease-in-out_infinite_alternate]">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-16 md:pt-32">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.span variants={fadeInUp} className="text-2xl md:text-5xl font-light tracking-[0.2em] drop-shadow-xl uppercase mb-3">
              {t.heroTitle1}
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] leading-tight tracking-tighter">
              {t.heroTitle2}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-base md:text-2xl mt-6 md:mt-8 mb-10 md:mb-12 max-w-3xl drop-shadow-md font-light text-gray-200 tracking-wide px-4">
              {t.heroDesc}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="w-full max-w-3xl flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative w-full sm:w-auto px-4 md:px-0">
                {/* 🌟 Premium Hero Butonları */}
                <Link href="/book" className="w-full sm:w-auto bg-gradient-to-b from-amber-400 to-amber-500 text-slate-900 border border-amber-300 px-10 py-4 rounded-full font-black text-sm tracking-widest uppercase shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  {t.bookBtn} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link href="/itineraries" className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:bg-white/20 hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                  {t.planBtn} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8 md:mt-10 px-2">
                <span className="text-gray-300 text-xs font-bold uppercase tracking-widest self-center mr-2 hidden md:block opacity-70">{t.popularSearch}</span>
                <Link href="/tours/balloon" className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider px-4 py-2 rounded-full transition-all flex items-center gap-2 hover:bg-white/20">🔥 Hot Air Balloon</Link>
                <Link href="/tours/atv-safari" className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-wider px-4 py-2 rounded-full transition-all flex items-center gap-2 hover:bg-white/20">🚙 Sunset ATV</Link>
                <Link href="/packages" className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-md border border-yellow-500/40 text-yellow-300 text-[10px] md:text-xs font-bold tracking-wider px-4 py-2 rounded-full transition-all flex items-center gap-2 hover:border-yellow-400">✨ VIP</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* TRUST BAR (Mobilde 2x2, Masaüstünde 1x4) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeInOut" }} className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl py-5 md:py-8 px-2 md:px-6 flex flex-wrap md:grid md:grid-cols-4 text-center">
          <div className="w-1/2 md:w-auto px-2 md:px-4 border-r border-b md:border-b-0 border-white/10 pb-4 md:pb-0"><div className="text-2xl md:text-3xl mb-1 md:mb-2">🏆</div><div className="text-white font-black text-[12px] md:text-lg tracking-wide">TripAdvisor</div><div className="text-gray-400 text-[9px] md:text-xs font-medium mt-1">{t.trust1}</div></div>
          <div className="w-1/2 md:w-auto px-2 md:px-4 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0"><div className="text-2xl md:text-3xl mb-1 md:mb-2">⭐</div><div className="text-white font-black text-[12px] md:text-lg tracking-wide">4.9/5 Rating</div><div className="text-gray-400 text-[9px] md:text-xs font-medium mt-1">{t.trust2}</div></div>
          <div className="w-1/2 md:w-auto px-2 md:px-4 border-r border-white/10 pt-4 md:pt-0"><div className="text-2xl md:text-3xl mb-1 md:mb-2">👥</div><div className="text-white font-black text-[12px] md:text-lg tracking-wide">15,000+</div><div className="text-gray-400 text-[9px] md:text-xs font-medium mt-1">{t.trust3}</div></div>
          <div className="w-1/2 md:w-auto px-2 md:px-4 pt-4 md:pt-0"><div className="text-2xl md:text-3xl mb-1 md:mb-2">🤝</div><div className="text-white font-black text-[12px] md:text-lg tracking-wide">TÜRSAB</div><div className="text-gray-400 text-[9px] md:text-xs font-medium mt-1">{t.trust4}</div></div>
        </motion.div>
      </div>

      {/* 🌟 DESTINATIONS (Şeffaf Filigranlı ve Mavi Butonlu Lüks Kartlar) */}
      <section className="pt-20 md:pt-32 pb-16 bg-[#F8FAFC] text-slate-900 overflow-hidden relative">
        
        {/* Dev Arka Plan Filigranı (Pusula) */}
        <svg className="absolute -top-10 -right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] text-slate-200/40 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
          <path d="M10.5 10.5L16 8l-2.5 5.5L8 16l2.5-5.5z" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm">{t.regionTitle}</span>
              <h2 className="text-3xl md:text-4xl font-black mt-1 md:mt-2 text-slate-900 tracking-tight">{t.regionSub}</h2>
            </div>
          </div>
          
          <div className="relative group">
            <button onClick={() => scroll(scrollRefDest, 'left')} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll(scrollRefDest, 'right')} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div ref={scrollRefDest} className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scroll -mx-4 px-4 md:mx-0 md:px-0">
              {[
                { id: 1, title: "Göreme", img: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800", link: "/destinations/goreme" },
                { id: 2, title: "Uçhisar Castle", img: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800", link: "/destinations/uchisar" },
                { id: 3, title: "Love Valley", img: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800", link: "/valleys/love-valley" },
                { id: 4, title: "Derinkuyu", img: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800", link: "/underground-cities/derinkuyu" },
                { id: 5, title: "Ihlara Valley", img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800", link: "/valleys/ihlara" }
              ].map((dest, index) => (
                <motion.div key={dest.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1, ease: "easeInOut" }} 
                  className="shrink-0 w-[240px] md:w-[260px] snap-start bg-white rounded-[1.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all group flex flex-col z-20">
                  <Link href={dest.link} className="flex flex-col h-full relative">
                    <div className="relative h-52 md:h-64 overflow-hidden after:absolute after:inset-0 after:border after:border-black/5 after:rounded-[1.5rem_1.5rem_0_0]">
                      <img src={dest.img} alt={dest.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
                    </div>
                    <div className="p-5 text-center flex-1 flex flex-col items-center justify-center">
                      <h3 className="text-lg md:text-xl font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors mb-3 flex items-center gap-1.5 justify-center">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {dest.title}
                      </h3>
                      {/* MAVİ EXPLORE BUTONU */}
                      <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_4px_10px_rgba(59,130,246,0.4)] group-hover:shadow-[0_6px_15px_rgba(59,130,246,0.6)] transition-all">
                        {t.exploreBtn} <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8 md:mt-12 relative z-20">
            <Link href="/destinations" className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-300">
              {t.viewAllDest} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 TOURS (Şeffaf Balon Çizimi Filigranı ve Sarı Reserve Butonları) */}
      <section className="py-16 md:py-20 bg-white overflow-hidden border-t border-slate-100 relative">
        
        {/* Dev Arka Plan Filigranı (Sıcak Hava Balonu) */}
        <svg className="absolute top-10 left-0 md:left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] text-slate-100/60 pointer-events-none -rotate-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.5 5 9.5c0 3.32 2.18 6.13 5 7.15v2.85a2 2 0 004 0v-2.85c2.82-1.02 5-3.83 5-7.15C19 5.5 15.87 2 12 2zM9 22h6" />
          <path d="M12 2v14.5M8.5 3.5v11M15.5 3.5v11M5.5 8.5h13M6.5 12.5h11" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm">Explore</span>
              <h2 className="text-3xl md:text-4xl font-black mt-1 md:mt-2 text-slate-900 tracking-tight">{t.toursTitle}</h2>
            </div>
          </div>

          <div className="relative group">
            <button onClick={() => scroll(scrollRefTours, 'left')} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll(scrollRefTours, 'right')} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div ref={scrollRefTours} className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scroll -mx-4 px-4 md:mx-0 md:px-0">
              
              {/* Kart 1: Balloon */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group/card">
                <Link href="/tours/balloon" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="Balloon" />
                    <div className="absolute top-3 right-3 bg-rose-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md animate-pulse">{t.sellingFast}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-amber-500 font-bold text-[10px] tracking-widest uppercase">{t.activity}</span>
                      <div className="text-right flex items-center gap-1.5">
                        <Price eur={180} className="text-slate-400 line-through text-[10px] block" />
                        <Price eur={150} className="text-slate-900 font-black text-lg leading-none" />
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.hotAirTitle}</h3>
                    <p className="text-slate-500 mb-4 line-clamp-2 text-xs leading-relaxed">{t.hotAirDesc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.reserveNow}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Kart 2: ATV */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group/card">
                <Link href="/tours/atv" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="ATV" />
                    <div className="absolute top-3 right-3 bg-slate-900 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">{t.popular}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-orange-500 font-bold text-[10px] tracking-widest uppercase">{t.adventure}</span>
                      <div className="text-right flex items-center gap-1.5">
                        <Price eur={45} className="text-slate-400 line-through text-[10px] block" />
                        <Price eur={35} className="text-slate-900 font-black text-lg leading-none" />
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.atvTitle}</h3>
                    <p className="text-slate-500 mb-4 line-clamp-2 text-xs leading-relaxed">{t.atvDesc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.reserveNow}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Kart 3: Red Tour */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group/card">
                <Link href="/tours/red-tour" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="Red Tour" />
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">{t.bestValue}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-emerald-500 font-bold text-[10px] tracking-widest uppercase">{t.dailyTour}</span>
                      <div className="text-right flex items-center gap-1.5">
                        <Price eur={75} className="text-slate-400 line-through text-[10px] block" />
                        <Price eur={60} className="text-slate-900 font-black text-lg leading-none" />
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.redTitle}</h3>
                    <p className="text-slate-500 mb-4 line-clamp-2 text-xs leading-relaxed">{t.redDesc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.reserveNow}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Kart 4: Jeep Safari */}
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group/card">
                <Link href="/tours/jeep-safari" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="Jeep Safari" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-orange-500 font-bold text-[10px] tracking-widest uppercase">Adventure</span>
                      <div className="text-right flex items-center gap-1.5">
                        <Price eur={50} className="text-slate-900 font-black text-lg leading-none" />
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">Jeep Safari Tour</h3>
                    <p className="text-slate-500 mb-4 line-clamp-2 text-xs leading-relaxed">Off-road adventure through the hidden valleys of Cappadocia.</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[11px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">{t.reserveNow}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <Link href="/tours" className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              {t.viewAllTours} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 BENTO BOX TASARIMLI BALON BÖLÜMÜ (Cam Efektli Resimli Kartlar) */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
        <div className="relative bg-gradient-to-br from-[#0a0f18] via-[#111928] to-[#0a0f18] rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 overflow-hidden shadow-2xl border border-white/5">
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/5 to-transparent opacity-50 pointer-events-none"></div>

          {/* 🌟 Hareketli Büyük Balon (Aşağı yukarı canlı süzülme) */}
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 md:-top-20 -right-10 md:right-10 w-[220px] md:w-[450px] z-20 pointer-events-none"
          >
            <img src="/bento-balloon.png" alt="Cappadocia Balloon" className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
          </motion.div>

          {/* Üst Kısım: Yazılar ve Rozetler */}
          <div className="relative z-10 w-full md:w-2/3 mb-12 md:mb-16 pt-4 md:pt-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              {t.bentoTitle1} <br/> <span className="text-amber-500">{t.bentoTitle2}</span>
            </h2>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm font-bold text-slate-300 mb-8">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"><span className="text-amber-500">🛡️</span> {t.bentoTrust1}</span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"><span className="text-amber-500">🎧</span> {t.bentoTrust2}</span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-sm"><span className="text-amber-500">✨</span> {t.bentoTrust3}</span>
            </div>
            {/* Lüks Book Now Butonu (Bento Box) */}
            <Link href="/tours/balloon" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3.5 rounded-full font-black text-xs md:text-sm uppercase tracking-widest shadow-[0_4px_15px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.6)] hover:-translate-y-1 transition-all duration-300">
              {t.bookBtn} 🎈
            </Link>
          </div>

          {/* Bento Grid (Dolu ve Lüks Kutucuklar) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-20">
            
            {/* Kart 1: Fotoğraf */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-[280px] shadow-lg group">
              <img src="https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800" alt="Balloons" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            
            {/* Kart 2: Arka Plan Resimli Bilgi Kutusu */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-[280px] shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800" alt="Agency" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-amber-500 flex items-center justify-center mb-4 text-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">🌍</div>
                <h3 className="text-white font-black text-lg md:text-xl mb-2">{t.bentoCard1Title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{t.bentoCard1Desc}</p>
              </div>
            </div>
            
            {/* Kart 3: Fotoğraf */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-[280px] shadow-lg group hidden md:block">
              <img src="https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800" alt="ATV" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            
            {/* Kart 4: Arka Plan Resimli Bilgi Kutusu */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-[280px] shadow-lg group hover:-translate-y-1 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800" alt="Safe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-amber-500 flex items-center justify-center mb-4 text-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">🛡️</div>
                <h3 className="text-white font-black text-lg md:text-xl mb-2">{t.bentoCard2Title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{t.bentoCard2Desc}</p>
              </div>
            </div>
            
            {/* Kart 5: Fotoğraf */}
            <div className="rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-[280px] shadow-lg group">
              <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="Valleys" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
            </div>
            
            {/* Kart 6: Arka Plan Resimli Bilgi Kutusu */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-48 md:h-[280px] shadow-lg group hover:-translate-y-1 transition-transform duration-300 hidden md:flex">
              <img src="https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800" alt="Locations" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-amber-500 flex items-center justify-center mb-4 text-2xl group-hover:bg-amber-500 group-hover:text-white transition-colors">⛰️</div>
                <h3 className="text-white font-black text-lg md:text-xl mb-2">{t.bentoCard3Title}</h3>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{t.bentoCard3Desc}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌟 TRANSFER BÖLÜMÜ (Uçak Filigranlı ve Tıklanabilir Kartlar) */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F8FAFC] to-slate-100 text-slate-900 border-y border-slate-200 overflow-hidden relative">
        
        {/* Dev Arka Plan Filigranı (Uçak) */}
        <svg className="absolute bottom-10 right-0 md:right-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] text-slate-200/50 pointer-events-none rotate-12" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm">{t.trfSub}</span>
              <h2 className="text-3xl md:text-4xl font-black mt-1 md:mt-2 tracking-tight">{t.trfTitle}</h2>
            </div>
          </div>

          <div className="relative group">
            <button onClick={() => scroll(scrollRefTrf, 'left')} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll(scrollRefTrf, 'right')} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div ref={scrollRefTrf} className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scroll -mx-4 px-4 md:mx-0 md:px-0">
              
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1">
                <Link href="/transfer/kayseri" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="VIP" />
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 font-black px-3 py-1 rounded-lg text-[10px] md:text-xs shadow-md">ASR Airport</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.trf1Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.trf1Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-colors">
                        {t.reserveNow}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1">
                <Link href="/transfer/nevsehir" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="VIP" />
                    <div className="absolute top-3 left-3 bg-amber-500 text-slate-900 font-black px-3 py-1 rounded-lg text-[10px] md:text-xs shadow-md">NAV Airport</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.trf2Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.trf2Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-colors">
                        {t.reserveNow}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1">
                <Link href="/transfer/shuttle" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="Shuttle" />
                    <div className="absolute top-3 left-3 bg-slate-800 text-white font-black px-3 py-1 rounded-lg text-[10px] md:text-xs shadow-md">Eco</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.trf3Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.trf3Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-colors">
                        {t.reserveNow}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white/90 backdrop-blur-sm rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all hover:-translate-y-1">
                <Link href="/transfer/intercity" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1502899576159-f224dc2349fa?q=80&w=800" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" alt="Intercity" />
                    <div className="absolute top-3 left-3 bg-blue-500 text-white font-black px-3 py-1 rounded-lg text-[10px] md:text-xs shadow-md">Long Distance</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.trf4Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.trf4Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-colors">
                        {t.reserveNow}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <Link href="/transfer" className="inline-flex items-center justify-center gap-3 bg-transparent text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-400 hover:border-amber-400 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:shadow-lg">
              {t.viewAllTrf} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 ITINERARIES (Tümü Sarı Butonlu) */}
      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm">{t.planSub}</span>
              <h2 className="text-3xl md:text-4xl font-black mt-1 md:mt-2 text-slate-900 tracking-tight">{t.planTitle}</h2>
            </div>
          </div>
          
          <div className="relative group">
            <button onClick={() => scroll(scrollRefPlans, 'left')} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll(scrollRefPlans, 'right')} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div ref={scrollRefPlans} className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scroll -mx-4 px-4 md:mx-0 md:px-0">
              
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <Link href="/itineraries/1-day" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-300">
                    <img src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800" alt="1 Day" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 font-black px-3 py-1 rounded-lg shadow-sm text-[10px] md:text-xs">{t.plan1Day}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.plan1Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.plan1Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.viewItinerary}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border-2 border-amber-400 flex flex-col relative group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <Link href="/itineraries/2-days" className="flex flex-col h-full">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-amber-400 text-slate-900 px-3 py-0.5 rounded-full font-bold text-[8px] uppercase tracking-widest z-10">{t.popular}</div>
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-300">
                    <img src="https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=800" alt="2 Days" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 font-black px-3 py-1 rounded-lg shadow-sm text-[10px] md:text-xs">{t.plan2Day}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.plan2Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.plan2Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.viewItinerary}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <Link href="/itineraries/3-days" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-300">
                    <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="3 Days" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-slate-900 font-black px-3 py-1 rounded-lg shadow-sm text-[10px] md:text-xs">{t.plan3Day}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.plan3Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.plan3Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.viewItinerary}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <Link href="/itineraries/honeymoon" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-300">
                    <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" alt="Honeymoon" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" />
                    <div className="absolute top-3 left-3 bg-rose-500 text-white font-black px-3 py-1 rounded-lg shadow-sm text-[10px] md:text-xs">{t.plan4Day}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.plan4Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.plan4Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.viewItinerary}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }} className="shrink-0 w-[280px] md:w-[320px] snap-start bg-white rounded-[1.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col group/card hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                <Link href="/itineraries/family" className="flex flex-col h-full">
                  <div className="h-40 md:h-48 relative overflow-hidden bg-slate-300">
                    <img src="https://images.unsplash.com/photo-1522850959516-58f958d88aca?q=80&w=800" alt="Family" className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-[2s] ease-out" />
                    <div className="absolute top-3 left-3 bg-blue-500 text-white font-black px-3 py-1 rounded-lg shadow-sm text-[10px] md:text-xs">{t.plan5Day}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-black text-slate-900 mb-2">{t.plan5Title}</h3>
                    <p className="text-slate-500 mb-4 flex-1 text-xs leading-relaxed line-clamp-3">{t.plan5Desc}</p>
                    <div className="mt-auto">
                      <span className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-2.5 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_2px_10px_rgba(245,158,11,0.3)] group-hover/card:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all">
                        {t.viewItinerary}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
          <div className="mt-8 md:mt-12 text-center">
            <Link href="/itineraries" className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              {t.seeAllPlans} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 WORKSHOPS (Sarı Butonlu) */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm">{t.wsSub}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-1 md:mt-2 tracking-tight text-slate-900">{t.wsTitle}</h2>
          </div>
        </div>
        
        <div className="relative group">
          <button onClick={() => scroll(scrollRefWs, 'left')} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => scroll(scrollRefWs, 'right')} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>

          <div ref={scrollRefWs} className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scroll -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { img: "https://images.unsplash.com/photo-1516738778643-41ea3f60f089?q=80&w=600", title: t.ws1, link: "/tours/pottery" },
              { img: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=600", title: t.ws2, link: "/tours/carpet" },
              { img: "https://images.unsplash.com/photo-1541534407338-02422e6f43e3?q=80&w=600", title: t.ws3, link: "/tours/cooking-class" },
              { img: "https://images.unsplash.com/photo-1522850959516-58f958d88aca?q=80&w=600", title: t.ws4, link: "/tours/wine" }
            ].map((ws, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1, ease: "easeInOut" }} className="shrink-0 w-[240px] md:w-[280px] snap-start relative h-64 md:h-72 rounded-[1.5rem] overflow-hidden group shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all flex flex-col">
                <Link href={ws.link} className="block w-full h-full relative">
                  <img src={ws.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" alt={ws.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-5 w-full flex flex-col items-center justify-center text-center">
                    <h3 className="text-white font-black text-lg drop-shadow-md mb-3">{ws.title}</h3>
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest shadow-[0_4px_10px_rgba(245,158,11,0.4)] group-hover:shadow-[0_6px_15px_rgba(245,158,11,0.6)] transition-all">{t.reserveNow}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link href="/tours" className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-lg transition-all duration-300">
            {t.viewAllWs} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs">{t.whySub}</span>
              <h2 className="text-3xl md:text-4xl font-black mt-1 mb-6 tracking-tight leading-tight">{t.whyTitle}</h2>
            </motion.div>
            <div className="space-y-5">
              {[
                { icon: "🛡️", title: t.why1, desc: t.why1d },
                { icon: "🚙", title: t.why2, desc: t.why2d },
                { icon: "🥇", title: t.why3, desc: t.why3d }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: "easeInOut" }} className="flex gap-4 items-start group">
                  <div className="bg-white/5 border border-white/10 text-amber-400 p-3 rounded-2xl text-xl shadow-sm shrink-0 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }} className="relative h-[250px] md:h-[350px] rounded-[1.5rem] overflow-hidden shadow-lg border border-white/10 mt-4 md:mt-0">
            <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="CappaViva Quality" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* 🌟 BLOGS */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs md:text-sm">{t.blogSub}</span>
              <h2 className="text-3xl md:text-4xl font-black mt-1 md:mt-2 text-slate-900 tracking-tight">{t.blogTitle}</h2>
            </div>
          </div>

          <div className="relative group">
            <button onClick={() => scroll(scrollRefBlog, 'left')} className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll(scrollRefBlog, 'right')} className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-full text-slate-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-90 md:opacity-0 group-hover:opacity-100">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div ref={scrollRefBlog} className="flex overflow-x-auto gap-4 md:gap-6 pb-6 snap-x snap-mandatory hide-scroll -mx-4 px-4 md:mx-0 md:px-0">
              {[
                { title: t.blog1Title, img: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=600", cat: t.blog1Category, link: "/blog/balloon-tips" },
                { title: t.blog2Title, img: "https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=600", cat: t.blog2Category, link: "/blog/cave-hotels" },
                { title: t.blog3Title, img: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=600", cat: t.blog3Category, link: "/blog/underground" },
                { title: t.blog5Title, img: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=600", cat: t.blog5Category, link: "/blog/sunset" },
                { title: t.blog6Title, img: "https://images.unsplash.com/photo-1541534407338-02422e6f43e3?q=80&w=600", cat: t.blog6Category, link: "/blog/food" },
              ].map((blog, i) => (
                <Link key={i} href={blog.link} className="shrink-0 w-[260px] md:w-[280px] bg-white rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col snap-center group hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <div className="h-36 md:h-40 overflow-hidden relative bg-slate-100">
                    <img src={blog.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" alt={blog.title} />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-wider">{blog.cat}</div>
                  </div>
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="text-sm md:text-base font-black text-slate-900 mb-3 line-clamp-2 leading-snug group-hover:text-amber-500 transition-colors">{blog.title}</h3>
                    <div className="mt-auto">
                      <span className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 group-hover:text-amber-500 transition-colors">
                        {t.readMore} <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest border border-slate-200 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:border-amber-400 hover:shadow-lg transition-all duration-300">
              {t.viewAllBlog} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 🌟 KENDİ SEYAHATİNİ PLANLA ŞERİDİ */}
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/tailor-made" className="block relative bg-gradient-to-r from-slate-900 via-[#0a152e] to-slate-900 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl border border-amber-500/30 group hover:shadow-[0_10px_40px_rgba(245,158,11,0.2)] transition-all duration-500">
            <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors duration-500"></div>
            <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-amber-500/20 to-transparent pointer-events-none transform translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2 flex items-center justify-center md:justify-start gap-3">
                  <span className="text-amber-500 animate-pulse">✨</span> {t.tailorTitle}
                </h3>
                <p className="text-slate-300 text-sm md:text-base font-medium">{t.tailorDesc}</p>
              </div>
              <div className="shrink-0">
                <span className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase shadow-[0_4px_15px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform duration-300">
                  {t.tailorBtn} <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* BÜLTEN ALT ALTA VE FOOTER'A SIFIR BİRLEŞİK */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-slate-900 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="balon-resmin.jpg" alt="Cappadocia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight drop-shadow-md">{t.nlTitle}</h2>
            <p className="text-slate-300 font-medium text-sm md:text-base">{t.nlDesc}</p>
          </div>
          
          <form onSubmit={handleSubscribe} className="relative w-full max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row bg-white/10 sm:bg-white/10 backdrop-blur-md p-1.5 rounded-3xl sm:rounded-full border border-white/20 shadow-xl gap-2 sm:gap-0">
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder={t.nlPlace} 
                className="flex-1 px-5 py-3 sm:py-0 rounded-2xl sm:rounded-l-full outline-none text-white bg-transparent placeholder-white/60 text-sm md:text-base text-center sm:text-left" 
                required 
                disabled={isLoading || isSubscribed} 
              />
              <button 
                type="submit" 
                disabled={isLoading || isSubscribed} 
                className="bg-gradient-to-b from-amber-400 to-amber-500 border border-amber-400 text-slate-900 px-6 md:px-8 py-3 rounded-2xl sm:rounded-full font-black text-xs uppercase tracking-widest hover:shadow-[0_4px_15px_rgba(245,158,11,0.5)] transition-all disabled:opacity-70 flex items-center justify-center min-w-[120px]"
              >
                {isLoading ? ( <svg className="animate-spin h-4 w-4 text-slate-900" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ) : isSubscribed ? ( "✓" ) : ( t.nlBtn )}
              </button>
            </div>
            
            {isSubscribed && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-8 left-0 w-full text-green-400 font-bold text-xs text-center drop-shadow-md">
                {t.nlSuccess}
              </motion.p>
            )}
          </form>
        </div>
      </section>

    </main>
  );
}