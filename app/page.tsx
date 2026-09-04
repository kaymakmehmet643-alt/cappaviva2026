"use client";
import { useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Instagram from "../components/instagram"; 
import Price from "../components/Price";
import { useSite } from "../app/context/SiteContext";

// =======================================================
// 📚 DEVASA KÜRESEL SÖZLÜK (TÜM SAYFA İÇİN)
// =======================================================
const SOZLUK: any = {
  en: {
    chatWUs: "Questions? Chat with us! 👋",
    heroTitle1: "Discover Cappadocia",
    heroTitle2: "Like Never Before.",
    heroDesc: "Award-winning tours, VIP transfers, and unforgettable experiences.",
    bookBtn: "Book Now",
    planBtn: "Ready Travel Plans",
    popularSearch: "Popular Searches:",
    trust1: "Certificate of Excellence",
    trust2: "Based on 2,500+ Reviews",
    trust3: "Happy Guests",
    trust4: "Official Member",
    regionTitle: "Discover The Region",
    regionSub: "Must Visit Places",
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
    seeAllPlans: "See All Ready Plans",
    wsSub: "Culture & Art",
    wsTitle: "Workshops & Activities",
    ws1: "Pottery Workshop",
    ws2: "Carpet Weaving",
    ws3: "Turkish Cooking",
    ws4: "Wine Tasting",
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
    blog1Title: "10 Things to Know Before Riding a Hot Air Balloon",
    blog1Date: "April 12, 2024",
    blog1Category: "Guide",
    blog2Title: "Best Cave Hotels in Cappadocia: Our Top Picks",
    blog2Date: "May 05, 2024",
    blog2Category: "Accommodation",
    blog3Title: "A Complete Guide to Underground Cities",
    blog3Date: "June 20, 2024",
    blog3Category: "History",
    blog4Title: "What to Pack for Cappadocia in Winter?",
    blog4Date: "October 15, 2024",
    blog4Category: "Tips",
    blog5Title: "Top 5 Valleys for Sunset Hiking",
    blog5Date: "November 02, 2024",
    blog5Category: "Nature",
    blog6Title: "Local Food Guide: What to Eat in Göreme?",
    blog6Date: "December 10, 2024",
    blog6Category: "Food"
  },
  tr: {
    chatWUs: "Sorularınız mı var? Bize yazın! 👋",
    heroTitle1: "Kapadokya'yı Keşfet",
    heroTitle2: "Hiç Olmadığı Gibi.",
    heroDesc: "Ödüllü turlar, VIP transferler ve unutulmaz deneyimler.",
    bookBtn: "Hemen Rezervasyon",
    planBtn: "Hazır Gezi Planları",
    popularSearch: "Popüler Aramalar:",
    trust1: "Mükemmellik Sertifikası",
    trust2: "2.500+ Gerçek Yorum",
    trust3: "Mutlu Misafir",
    trust4: "Resmi TÜRSAB Üyesi",
    regionTitle: "Bölgeyi Keşfet",
    regionSub: "Görülmesi Gereken Yerler",
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
    seeAllPlans: "Tüm Hazır Planları Gör",
    wsSub: "Kültür & Sanat",
    wsTitle: "Atölyeler & Aktiviteler",
    ws1: "Çömlek Atölyesi",
    ws2: "Halı Dokuma",
    ws3: "Türk Yemekleri Kursu",
    ws4: "Şarap Tadımı",
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
    blog1Title: "Balon Turuna Çıkmadan Önce Bilmeniz Gereken 10 Şey",
    blog1Date: "12 Nisan 2024",
    blog1Category: "Rehber",
    blog2Title: "Kapadokya'nın En İyi Mağara Otelleri: Favorilerimiz",
    blog2Date: "05 Mayıs 2024",
    blog2Category: "Konaklama",
    blog3Title: "Yeraltı Şehirleri İçin Kapsamlı Keşif Rehberi",
    blog3Date: "20 Haziran 2024",
    blog3Category: "Tarih",
    blog4Title: "Kışın Kapadokya'ya Giderken Bavula Neler Konmalı?",
    blog4Date: "15 Ekim 2024",
    blog4Category: "İpuçları",
    blog5Title: "Günbatımı Yürüyüşü İçin En İyi 5 Vadi",
    blog5Date: "02 Kasım 2024",
    blog5Category: "Doğa",
    blog6Title: "Yerel Lezzetler: Göreme'de Ne Yenir?",
    blog6Date: "10 Aralık 2024",
    blog6Category: "Yemek"
  },
  es: {
    chatWUs: "¡Chatea con nosotros! 👋",
    heroTitle1: "Descubre Capadocia",
    heroTitle2: "Como Nunca Antes.",
    heroDesc: "Tours galardonados, traslados VIP y experiencias inolvidables.",
    bookBtn: "Reserva Ahora",
    planBtn: "Planes de Viaje",
    popularSearch: "Búsquedas Populares:",
    trust1: "Certificado de Excelencia",
    trust2: "Basado en 2500+ Reseñas",
    trust3: "Huéspedes Felices",
    trust4: "Miembro Oficial",
    regionTitle: "Descubre la Región",
    regionSub: "Lugares Imprescindibles",
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
    seeAllPlans: "Ver Todos los Planes",
    wsSub: "Cultura y Arte",
    wsTitle: "Talleres y Actividades",
    ws1: "Taller de Cerámica",
    ws2: "Tejido de Alfombras",
    ws3: "Clase de Cocina Turca",
    ws4: "Cata de Vinos",
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
    blog1Title: "10 Cosas que Saber Antes de Volar en Globo",
    blog1Date: "12 Abril 2024",
    blog1Category: "Guía",
    blog2Title: "Los Mejores Hoteles Cueva en Capadocia",
    blog2Date: "05 Mayo 2024",
    blog2Category: "Alojamiento",
    blog3Title: "Una Guía Completa de Ciudades Subterráneas",
    blog3Date: "20 Junio 2024",
    blog3Category: "Historia",
    blog4Title: "¿Qué Empacar para Capadocia en Invierno?",
    blog4Date: "15 Octubre 2024",
    blog4Category: "Consejos",
    blog5Title: "Los 5 Mejores Valles para Caminar al Atardecer",
    blog5Date: "02 Noviembre 2024",
    blog5Category: "Naturaleza",
    blog6Title: "Guía de Comida Local: ¿Qué Comer en Göreme?",
    blog6Date: "10 Diciembre 2024",
    blog6Category: "Comida"
  }
};

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1]; // Pürüzsüz Apple tarzı yaylanma

// 🌟 DÜZELTİLMİŞ ANİMASYON TANIMLARI
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
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { dil } = useSite();
  const aktifDil = dil ? String(dil).toLowerCase() : 'en';
  const t = SOZLUK[aktifDil] || SOZLUK['en'];

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

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] overflow-x-hidden relative font-sans selection:bg-yellow-500 selection:text-white">
      
      {/* WHATSAPP BUTONU (Premium Pulse & Shadow) */}
      <a href="https://wa.me/905354322782" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-500 flex items-center justify-center group">
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-16 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none transform group-hover:-translate-x-2">
          {t.chatWUs}
        </span>
      </a>

      {/* HERO (Sophisticated Overlays & Typography) */}
      <div className="relative h-screen w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-900 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 scale-105 motion-safe:animate-[slowZoom_20s_ease-in-out_infinite_alternate]">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-24 md:pt-32">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center">
            <motion.span variants={fadeInUp} className="text-3xl md:text-5xl font-light tracking-[0.2em] drop-shadow-xl uppercase mb-3">
              {t.heroTitle1}
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] leading-tight tracking-tighter">
              {t.heroTitle2}
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-2xl mt-8 mb-12 max-w-3xl drop-shadow-md font-light text-gray-200 tracking-wide">
              {t.heroDesc}
            </motion.p>
            
            <motion.div variants={fadeInUp} className="w-full max-w-3xl flex flex-col items-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative w-full sm:w-auto">
                <Link href="/book" className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 px-12 py-4 rounded-full font-black text-sm tracking-widest uppercase hover:shadow-[0_8px_30px_rgba(234,179,8,0.4)] hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3">
                  {t.bookBtn} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link href="/itineraries" className="w-full sm:w-auto bg-white/10 backdrop-blur-lg text-white border border-white/30 px-12 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/20 hover:border-white/60 hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-3">
                  {t.planBtn} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                <span className="text-gray-300 text-xs font-bold uppercase tracking-widest self-center mr-2 hidden md:block opacity-70">{t.popularSearch}</span>
                <Link href="/tours/balloon" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 hover:border-yellow-400/50">🔥 Hot Air Balloon</Link>
                <Link href="/tours/atv-safari" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 hover:border-yellow-400/50">🚙 Sunset ATV</Link>
                <Link href="/packages" className="bg-yellow-500/10 hover:bg-yellow-500/20 backdrop-blur-md border border-yellow-500/40 text-yellow-300 hover:text-yellow-200 text-xs font-bold tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2">✨ VIP Packages</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* TRUST BAR (Overlapping Glassmorphism) */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: customEase }} className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl py-6 md:py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/10">
          <div className="px-4"><div className="text-3xl mb-2">🏆</div><div className="text-white font-black text-lg tracking-wide">TripAdvisor</div><div className="text-gray-400 text-xs font-medium mt-1">{t.trust1}</div></div>
          <div className="px-4"><div className="text-3xl mb-2">⭐</div><div className="text-white font-black text-lg tracking-wide">4.9/5 Rating</div><div className="text-gray-400 text-xs font-medium mt-1">{t.trust2}</div></div>
          <div className="px-4"><div className="text-3xl mb-2">👥</div><div className="text-white font-black text-lg tracking-wide">15,000+</div><div className="text-gray-400 text-xs font-medium mt-1">{t.trust3}</div></div>
          <div className="px-4"><div className="text-3xl mb-2">🤝</div><div className="text-white font-black text-lg tracking-wide">TÜRSAB</div><div className="text-gray-400 text-xs font-medium mt-1">{t.trust4}</div></div>
        </motion.div>
      </div>

      {/* DESTINATIONS */}
      <section className="pt-32 pb-24 bg-[#F8FAFC] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">{t.regionTitle}</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 text-slate-900 tracking-tight">{t.regionSub}</h2>
            <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg">{t.regionDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Göreme Open Air", span: "md:col-span-2", img: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800" },
              { id: 2, title: "Uçhisar Castle", span: "md:col-span-2", img: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800" },
              { id: 3, title: "Love Valley", span: "md:col-span-4 lg:col-span-2", img: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800" },
              { id: 4, title: "Derinkuyu", span: "md:col-span-4 lg:col-span-2", img: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800" }
            ].map((dest, index) => (
              <motion.div key={dest.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1, ease: customEase }} className={`relative h-72 rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${dest.span}`}>
                <img src={dest.img} alt={dest.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8">
                  <h3 className="text-3xl font-bold text-white drop-shadow-md">{dest.title}</h3>
                  <Link href={`/destinations/${dest.id}`} className="text-amber-400 text-sm font-bold mt-3 inline-flex items-center gap-2 uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">Explore <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/destinations" className="inline-flex items-center gap-3 bg-transparent border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300">
              {t.viewAllDest}
            </Link>
          </div>
        </div>
      </section>

      {/* TOURS (Premium Cards) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">{t.toursTitle}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">{t.toursDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Kart 1 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.1, ease: customEase }} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              <div className="h-64 relative overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-sky-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src="https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Balloon" />
                <div className="absolute top-5 right-5 bg-rose-500 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest z-20 shadow-lg animate-pulse">{t.sellingFast}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-amber-500 font-black text-xs tracking-widest uppercase">{t.activity}</span>
                  <div className="text-right">
                    <Price eur={180} className="text-slate-400 line-through text-xs mr-2 block" />
                    <Price eur={150} className="text-slate-900 font-black text-2xl leading-none" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{t.hotAirTitle}</h3>
                <p className="text-slate-500 mb-8 line-clamp-2 flex-1 text-sm leading-relaxed">{t.hotAirDesc}</p>
                <div className="mt-auto">
                  <div className="mb-4 flex items-center gap-2 text-emerald-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold uppercase tracking-wider">{t.freeCancel}</span>
                  </div>
                  <Link href="/book" className="flex items-center justify-center w-full bg-amber-400 text-slate-900 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-amber-500 transition-colors shadow-md">{t.checkAvail}</Link>
                </div>
              </div>
            </motion.div>

            {/* Kart 2 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.2, ease: customEase }} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              <div className="h-64 relative overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-orange-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src="https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="ATV" />
                <div className="absolute top-5 right-5 bg-slate-900 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest z-20 shadow-lg">{t.popular}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-orange-500 font-black text-xs tracking-widest uppercase">{t.adventure}</span>
                  <div className="text-right">
                    <Price eur={45} className="text-slate-400 line-through text-xs mr-2 block" />
                    <Price eur={35} className="text-slate-900 font-black text-2xl leading-none" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{t.atvTitle}</h3>
                <p className="text-slate-500 mb-8 line-clamp-2 flex-1 text-sm leading-relaxed">{t.atvDesc}</p>
                <div className="mt-auto">
                  <div className="mb-4 flex items-center gap-2 text-emerald-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold uppercase tracking-wider">{t.payLater}</span>
                  </div>
                  <Link href="/book" className="flex items-center justify-center w-full bg-slate-900 text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-md">{t.reserveNow}</Link>
                </div>
              </div>
            </motion.div>

            {/* Kart 3 */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.3, ease: customEase }} className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 group flex flex-col">
              <div className="h-64 relative overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-emerald-900/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src="https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt="Red Tour" />
                <div className="absolute top-5 right-5 bg-emerald-500 text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest z-20 shadow-lg">{t.bestValue}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-end mb-4">
                  <span className="text-emerald-500 font-black text-xs tracking-widest uppercase">{t.dailyTour}</span>
                  <div className="text-right">
                    <Price eur={75} className="text-slate-400 line-through text-xs mr-2 block" />
                    <Price eur={60} className="text-slate-900 font-black text-2xl leading-none" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">{t.redTitle}</h3>
                <p className="text-slate-500 mb-8 line-clamp-2 flex-1 text-sm leading-relaxed">{t.redDesc}</p>
                <div className="mt-auto">
                  <div className="mb-4 flex items-center gap-2 text-emerald-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold uppercase tracking-wider">{t.museumInc}</span>
                  </div>
                  <Link href="/book" className="flex items-center justify-center w-full bg-slate-900 text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-md">{t.reserveNow}</Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <Link href="/tours" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-lg">
              {t.viewAllTours} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ITINERARIES */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold tracking-widest uppercase mb-3 block text-sm">{t.planSub}</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">{t.planTitle}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t.planDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: customEase }} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col border border-slate-100">
              <div className="h-60 relative overflow-hidden bg-slate-300">
                <img src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800" alt="1 Day" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-slate-900 font-black px-4 py-2 rounded-xl shadow-lg">{t.plan1Day}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">{t.plan1Title}</h3>
                <p className="text-slate-500 mb-8 flex-1 text-sm leading-relaxed">{t.plan1Desc}</p>
                <Link href="/itineraries/1-day" className="flex items-center justify-center gap-2 w-full bg-[#F8FAFC] hover:bg-amber-400 hover:text-slate-900 text-slate-700 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 border border-slate-200 hover:border-transparent">
                  {t.viewItinerary} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2, ease: customEase }} className="bg-white rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.2)] transition-all duration-500 hover:-translate-y-2 group flex flex-col border-2 border-amber-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-slate-900 px-6 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest z-10 shadow-lg">{t.popular}</div>
              <div className="h-60 relative overflow-hidden bg-slate-300">
                <img src="https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=800" alt="2 Days" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-slate-900 font-black px-4 py-2 rounded-xl shadow-lg">{t.plan2Day}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">{t.plan2Title}</h3>
                <p className="text-slate-500 mb-8 flex-1 text-sm leading-relaxed">{t.plan2Desc}</p>
                <Link href="/itineraries/2-days" className="flex items-center justify-center gap-2 w-full bg-amber-400 hover:bg-amber-500 text-slate-900 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md">
                  {t.viewItinerary} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: customEase }} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col border border-slate-100">
              <div className="h-60 relative overflow-hidden bg-slate-300">
                <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="3 Days" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-slate-900 font-black px-4 py-2 rounded-xl shadow-lg">{t.plan3Day}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3">{t.plan3Title}</h3>
                <p className="text-slate-500 mb-8 flex-1 text-sm leading-relaxed">{t.plan3Desc}</p>
                <Link href="/itineraries/3-days" className="flex items-center justify-center gap-2 w-full bg-[#F8FAFC] hover:bg-amber-400 hover:text-slate-900 text-slate-700 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 border border-slate-200 hover:border-transparent">
                  {t.viewItinerary} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="mt-16 text-center">
            <Link href="/itineraries" className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-widest text-sm hover:text-amber-500 transition-colors">
              {t.seeAllPlans} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="text-center mb-16">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">{t.wsSub}</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">{t.wsTitle}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1516738778643-41ea3f60f089?q=80&w=600", title: t.ws1, link: "/book?package=pottery" },
            { img: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=600", title: t.ws2, link: "/book?package=carpet" },
            { img: "https://images.unsplash.com/photo-1541534407338-02422e6f43e3?q=80&w=600", title: t.ws3, link: "/book?package=cooking" },
            { img: "https://images.unsplash.com/photo-1522850959516-58f958d88aca?q=80&w=600", title: t.ws4, link: "/book?package=wine" }
          ].map((ws, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: i * 0.1, ease: customEase }} className="relative h-80 rounded-[2rem] overflow-hidden group shadow-lg">
              <Link href={ws.link} className="block w-full h-full relative">
                <img src={ws.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out" alt={ws.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">{ws.title}</h3>
                  <span className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-widest group-hover:text-amber-300 transition-colors">{t.bookBtn} <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 relative z-10">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">{t.igSub}</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">{t.igTitle}</h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg">{t.igDesc}</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Instagram />
        </div>
      </section>

      {/* BLOG SLIDER (Premium) */}
      <section className="py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">{t.blogSub}</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">{t.blogTitle}</h2>
              <p className="text-slate-500 mt-4 max-w-xl text-lg">{t.blogDesc}</p>
            </div>
            
            <div className="hidden md:flex gap-3">
              <button onClick={scrollLeft} className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={scrollRight} className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Fade masks for elegant scroll feeling */}
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden md:block"></div>

            <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-10 snap-x snap-mandatory cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden -mx-4 px-4 md:mx-0 md:px-0">
              {[
                { title: t.blog1Title, img: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=600", cat: t.blog1Category, link: "/blog/balloon-tips" },
                { title: t.blog2Title, img: "https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=600", cat: t.blog2Category, link: "/blog/cave-hotels" },
                { title: t.blog3Title, img: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=600", cat: t.blog3Category, link: "/blog/underground" },
                { title: t.blog5Title, img: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=600", cat: t.blog5Category, link: "/blog/sunset" },
                { title: t.blog6Title, img: "https://images.unsplash.com/photo-1541534407338-02422e6f43e3?q=80&w=600", cat: t.blog6Category, link: "/blog/food" },
                { title: "Kızılırmak Çamuruyla Kendi Çömleğinizi Yapın", img: "https://images.unsplash.com/photo-1516738778643-41ea3f60f089?q=80&w=600", cat: "Sanat", link: "/blog/pottery" },
              ].map((blog, i) => (
                <Link key={i} href={blog.link} className="min-w-[300px] max-w-[300px] bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 snap-start group border border-slate-100 flex flex-col">
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img src={blog.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" alt={blog.title} />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider">{blog.cat}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-amber-500 transition-colors leading-snug">{blog.title}</h3>
                    <div className="mt-auto">
                      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-amber-500 transition-colors">
                        {t.readMore} <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (Dark Premium Section) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
              <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">{t.whySub}</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 mb-10 tracking-tight leading-tight">{t.whyTitle}</h2>
            </motion.div>
            <div className="space-y-8">
              {[
                { icon: "🛡️", title: t.why1, desc: t.why1d },
                { icon: "🚙", title: t.why2, desc: t.why2d },
                { icon: "🥇", title: t.why3, desc: t.why3d }
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2, ease: customEase }} className="flex gap-5 items-start group">
                  <div className="bg-white/5 border border-white/10 text-amber-400 p-4 rounded-2xl text-2xl group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, delay: 0.3, ease: customEase }} className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
            <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="CappaViva Quality" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
          </motion.div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t.revTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { review: t.rev1, author: "Sarah M. (UK)" },
              { review: t.rev2, author: "David L. (USA)" },
              { review: t.rev3, author: "Elena R. (Spain)" }
            ].map((item, i) => (
              <div key={i} className="bg-[#F8FAFC] p-8 rounded-[2rem] border border-slate-200">
                <div className="text-amber-400 text-xl mb-6 tracking-widest">★★★★★</div>
                <p className="text-slate-600 text-base italic mb-8 leading-relaxed">"{item.review.replace(/"/g, '')}"</p>
                <div className="font-bold text-slate-900 text-sm uppercase tracking-wider">{item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">{t.faqSub}</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 tracking-tight">{t.faqTitle}</h2>
          <p className="text-slate-500 mt-5 text-lg">{t.faqDesc}</p>
        </div>
        <div className="space-y-6">
          {[
            { q: t.q1, a: t.a1 }, { q: t.q2, a: t.a2 }, { q: t.q3, a: t.a3 }, { q: t.q4, a: t.a4 }, { q: t.q5, a: t.a5 }
          ].map((item, i) => (
            <details key={i} className="group bg-white border border-slate-200 rounded-2xl p-6 open:shadow-xl open:border-amber-400 transition-all duration-300 cursor-pointer">
              <summary className="flex justify-between items-center font-bold text-lg text-slate-900 outline-none list-none">
                {item.q}
                <span className="transition-transform duration-300 group-open:rotate-180 text-amber-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </span>
              </summary>
              <p className="text-slate-500 mt-5 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">{t.contactTitle}</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">{t.contactDesc}</p>
            
            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6 group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📍</div>
              <div>
                <h4 className="font-bold text-slate-900">{t.office}</h4>
                <p className="text-slate-500 text-sm mt-1">{t.officeDesc}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 group hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">📞</div>
              <div>
                <h4 className="font-bold text-slate-900">{t.call}</h4>
                <p className="text-slate-500 text-sm mt-1">+90 555 123 45 67</p>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49749.02058428383!2d34.7892305541604!3d38.6433215239922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a68892f354783%3A0x6b4904125b29fc9f!2sG%C3%B6reme%2C%20Nev%C5%9Fehir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" width="100%" height="100%" style={{ border: 0 }}></iframe>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="border-y border-slate-200 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-slate-400 font-black uppercase tracking-widest mb-10">{t.partners}</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <h3 className="text-2xl font-black text-slate-800">Turkish Airlines</h3>
            <h3 className="text-2xl font-black text-slate-800">TÜRSAB</h3>
            <h3 className="text-2xl font-black text-slate-800">Booking.com</h3>
            <h3 className="text-2xl font-black text-slate-800">Viator</h3>
            <h3 className="text-2xl font-black text-slate-800">GetYourGuide</h3>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-amber-400 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-5 tracking-tight">{t.nlTitle}</h2>
          <p className="text-slate-800 mb-10 font-medium text-lg">{t.nlDesc}</p>
          <form onSubmit={handleSubscribe} className="relative max-w-xl mx-auto">
            <div className="flex bg-white p-2 rounded-full shadow-2xl">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.nlPlace} className="flex-1 px-6 rounded-l-full outline-none text-slate-900 bg-transparent placeholder-slate-400 font-medium" required disabled={isLoading || isSubscribed} />
              <button type="submit" disabled={isLoading || isSubscribed} className="bg-slate-900 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]">
                {isLoading ? ( <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ) : isSubscribed ? ( t.nlJoined ) : ( t.nlBtn )}
              </button>
            </div>
            {isSubscribed && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-10 left-0 w-full text-slate-900 font-bold text-sm">
                {t.nlSuccess}
              </motion.p>
            )}
          </form>
        </div>
      </section>

    </main>
  );
}