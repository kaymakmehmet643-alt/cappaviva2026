"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
    nlSuccess: "Awesome! You have successfully subscribed to our newsletter. 🎉"
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
    nlSuccess: "Harika! E-posta bültenimize başarıyla katıldınız. 🎉"
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
    nlSuccess: "¡Genial! Te has suscrito con éxito a nuestro boletín. 🎉"
  }
};

// 🌟 İŞTE UNUTTUĞUM ANİMASYON KODU BURADA:
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 🌟 SEÇİLİ DİLİ BEYİNDEN ALIYORUZ VE KÜÇÜK HARFE ÇEVİRİYORUZ
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
    <main className="w-full min-h-screen bg-gray-50 overflow-x-hidden relative">
      
      {/* WHATSAPP BUTONU */}
      <a href="https://wa.me/905354322782" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group">
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-16 bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          {t.chatWUs}
        </span>
      </a>

      {/* HERO */}
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 pt-24 md:pt-32">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }} className="flex flex-col items-center mb-6">
            <span className="text-4xl md:text-6xl font-light tracking-[0.15em] drop-shadow-2xl uppercase mb-2">{t.heroTitle1}</span>
            <span className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] mt-2">{t.heroTitle2}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }} className="text-lg md:text-2xl mb-12 max-w-3xl drop-shadow-md font-light text-gray-200 tracking-wide">
            {t.heroDesc}
          </motion.p>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.7, ease: "easeOut" }} className="w-full max-w-3xl flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-20 w-full sm:w-auto">
              <Link href="/book" className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-12 py-4 rounded-full font-black text-[15px] tracking-widest uppercase hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                {t.bookBtn} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="/itineraries" className="w-full sm:w-auto bg-black/30 backdrop-blur-md text-white border border-white/40 px-12 py-4 rounded-full font-bold text-[15px] tracking-widest uppercase hover:bg-white/20 hover:border-white/80 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                {t.planBtn} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="text-gray-300 text-xs font-bold uppercase tracking-widest self-center mr-2 hidden md:block">{t.popularSearch}</span>
              <Link href="/tours/balloon" className="bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-wider px-5 py-2 rounded-full transition-all flex items-center gap-2 hover:border-yellow-500/50">🔥 Hot Air Balloon</Link>
              <Link href="/tours/atv-safari" className="bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold tracking-wider px-5 py-2 rounded-full transition-all flex items-center gap-2 hover:border-yellow-500/50">🚙 Sunset ATV</Link>
              <Link href="/packages" className="bg-yellow-500/10 hover:bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-400 hover:text-yellow-300 text-xs font-bold tracking-wider px-5 py-2 rounded-full transition-all flex items-center gap-2">✨ VIP Packages</Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TRUST BAR */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="bg-slate-900 border-b-4 border-yellow-500 py-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-700">
          <div className="px-4"><div className="text-3xl mb-1">🏆</div><div className="text-white font-bold text-lg">TripAdvisor</div><div className="text-gray-400 text-xs">{t.trust1}</div></div>
          <div className="px-4"><div className="text-3xl mb-1">⭐</div><div className="text-white font-bold text-lg">4.9/5 Rating</div><div className="text-gray-400 text-xs">{t.trust2}</div></div>
          <div className="px-4"><div className="text-3xl mb-1">👥</div><div className="text-white font-bold text-lg">15,000+</div><div className="text-gray-400 text-xs">{t.trust3}</div></div>
          <div className="px-4"><div className="text-3xl mb-1">🤝</div><div className="text-white font-bold text-lg">TÜRSAB</div><div className="text-gray-400 text-xs">{t.trust4}</div></div>
        </div>
      </motion.div>

      {/* DESTINATIONS */}
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="py-24 bg-white text-slate-900 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">{t.regionTitle}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-slate-900">{t.regionSub}</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{t.regionDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Göreme Open Air", span: "md:col-span-2", img: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800" },
              { id: 2, title: "Uçhisar Castle", span: "md:col-span-2", img: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800" },
              { id: 3, title: "Love Valley", span: "md:col-span-4 lg:col-span-2", img: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800" },
              { id: 4, title: "Derinkuyu", span: "md:col-span-4 lg:col-span-2", img: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800" }
            ].map((dest, index) => (
              <motion.div key={dest.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className={`relative h-64 rounded-3xl overflow-hidden group cursor-pointer shadow-lg ${dest.span}`}>
                <img src={dest.img} alt={dest.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">{dest.title}</h3>
                  <Link href={`/destinations/${dest.id}`} className="text-yellow-400 text-sm font-bold mt-2 inline-block group-hover:translate-x-2 transition-transform">Explore →</Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/destinations">
              <button className="bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition duration-300">{t.viewAllDest}</button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* TOURS */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{t.toursTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.toursDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Kart 1 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col">
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest animate-pulse shadow-lg">{t.sellingFast}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">{t.activity}</span>
                  <div>
                    <Price eur={180} className="text-gray-400 line-through text-sm mr-2" />
                    <Price eur={150} className="text-gray-900 font-extrabold text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.hotAirTitle}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-1">{t.hotAirDesc}</p>
                <div className="mt-auto">
                  <div className="text-center mb-3 flex items-center justify-center gap-1.5 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold">{t.freeCancel}</span>
                  </div>
                  <Link href="/book" className="block text-center w-full bg-yellow-500 text-black py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-lg">{t.checkAvail}</Link>
                </div>
              </div>
            </motion.div>

            {/* Kart 2 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.3 }} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col">
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-900/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">{t.popular}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">{t.adventure}</span>
                  <div>
                    <Price eur={45} className="text-gray-400 line-through text-sm mr-2" />
                    <Price eur={35} className="text-gray-900 font-extrabold text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.atvTitle}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-1">{t.atvDesc}</p>
                <div className="mt-auto">
                  <div className="text-center mb-3 flex items-center justify-center gap-1.5 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold">{t.payLater}</span>
                  </div>
                  <Link href="/book" className="block text-center w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">{t.reserveNow}</Link>
                </div>
              </div>
            </motion.div>

            {/* Kart 3 */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay: 0.5 }} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col">
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-900/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">{t.bestValue}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">{t.dailyTour}</span>
                  <div>
                    <Price eur={75} className="text-gray-400 line-through text-sm mr-2" />
                    <Price eur={60} className="text-gray-900 font-extrabold text-xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.redTitle}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-1">{t.redDesc}</p>
                <div className="mt-auto">
                  <div className="text-center mb-3 flex items-center justify-center gap-1.5 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold">{t.museumInc}</span>
                  </div>
                  <Link href="/book" className="block text-center w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">{t.reserveNow}</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link href="/tours" className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg">
          {t.viewAllTours} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>

      {/* ITINERARIES */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-bold tracking-widest uppercase mb-2 block">{t.planSub}</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{t.planTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.planDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col border border-gray-100">
              <div className="h-56 relative overflow-hidden bg-gray-300">
                <img src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800" alt="1 Day" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">{t.plan1Day}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.plan1Title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{t.plan1Desc}</p>
                <Link href="/itineraries/1-day" className="flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-yellow-500 hover:text-black text-gray-900 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all border border-gray-200 hover:border-transparent">
                  {t.viewItinerary} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col border-2 border-yellow-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest z-10 shadow-lg">{t.popular}</div>
              <div className="h-56 relative overflow-hidden bg-gray-300">
                <img src="https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=800" alt="2 Days" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">{t.plan2Day}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.plan2Title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{t.plan2Desc}</p>
                <Link href="/itineraries/2-days" className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-yellow-500/30">
                  {t.viewItinerary} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col border border-gray-100">
              <div className="h-56 relative overflow-hidden bg-gray-300">
                <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="3 Days" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">{t.plan3Day}</div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.plan3Title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{t.plan3Desc}</p>
                <Link href="/itineraries/3-days" className="flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-yellow-500 hover:text-black text-gray-900 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all border border-gray-200 hover:border-transparent">
                  {t.viewItinerary} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/itineraries" className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-yellow-600 transition-colors">
              {t.seeAllPlans} <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </div>

      {/* WORKSHOPS */}
      <div className="py-20 px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="text-center mb-12">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">{t.wsSub}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">{t.wsTitle}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative h-72 rounded-2xl overflow-hidden group shadow-lg">
            <Link href="/book?package=pottery" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1516738778643-41ea3f60f089?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Pottery" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">{t.ws1}</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">{t.bookBtn} <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative h-72 rounded-2xl overflow-hidden group shadow-lg">
            <Link href="/book?package=carpet" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Carpet" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">{t.ws2}</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">{t.bookBtn} <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.3 }} className="relative h-72 rounded-2xl overflow-hidden group shadow-lg">
            <Link href="/book?package=cooking" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1541534407338-02422e6f43e3?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Cooking" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">{t.ws3}</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">{t.bookBtn} <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.4 }} className="relative h-72 rounded-2xl overflow-hidden group shadow-lg">
            <Link href="/book?package=wine" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1522850959516-58f958d88aca?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Wine" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">{t.ws4}</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">{t.bookBtn} <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* INSTAGRAM */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">{t.igSub}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">{t.igTitle}</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">{t.igDesc}</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Instagram />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">{t.whySub}</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">{t.whyTitle}</h2>
            </motion.div>
            <div className="space-y-6 mt-8">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex gap-4 items-start group">
                <div className="bg-yellow-500 text-black p-3 rounded-xl text-xl group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <div>
                  <h4 className="font-bold text-xl group-hover:text-yellow-400 transition-colors">{t.why1}</h4>
                  <p className="text-gray-400 text-sm">{t.why1d}</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex gap-4 items-start group">
                <div className="bg-yellow-500 text-black p-3 rounded-xl text-xl group-hover:scale-110 transition-transform duration-300">🚙</div>
                <div>
                  <h4 className="font-bold text-xl group-hover:text-yellow-400 transition-colors">{t.why2}</h4>
                  <p className="text-gray-400 text-sm">{t.why2d}</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="flex gap-4 items-start group">
                <div className="bg-yellow-500 text-black p-3 rounded-xl text-xl group-hover:scale-110 transition-transform duration-300">🥇</div>
                <div>
                  <h4 className="font-bold text-xl group-hover:text-yellow-400 transition-colors">{t.why3}</h4>
                  <p className="text-gray-400 text-sm">{t.why3d}</p>
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9, x: 50 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.3 }} className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
            <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="Guide" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
          </motion.div>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900">{t.revTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm italic mb-4">{t.rev1}</p>
              <div className="font-bold text-slate-900">- Sarah M. (UK)</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm italic mb-4">{t.rev2}</p>
              <div className="font-bold text-slate-900">- David L. (USA)</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm italic mb-4">{t.rev3}</p>
              <div className="font-bold text-slate-900">- Elena R. (Spain)</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">{t.faqSub}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">{t.faqTitle}</h2>
          <p className="text-gray-500 mt-4 text-lg">{t.faqDesc}</p>
        </div>
        <div className="space-y-6">
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">{t.q1}<span className="transition group-open:rotate-180"><svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span></summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">{t.a1}</p>
          </details>
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">{t.q2}<span className="transition group-open:rotate-180"><svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span></summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">{t.a2}</p>
          </details>
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">{t.q3}<span className="transition group-open:rotate-180"><svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span></summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">{t.a3}</p>
          </details>
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">{t.q4}<span className="transition group-open:rotate-180"><svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span></summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">{t.a4}</p>
          </details>
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">{t.q5}<span className="transition group-open:rotate-180"><svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span></summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">{t.a5}</p>
          </details>
        </div>
      </div>

      {/* HARİTA & İLETİŞİM */}
      <div className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">{t.contactTitle}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{t.contactDesc}</p>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
              <span className="text-3xl">📍</span>
              <div>
                <h4 className="font-bold text-slate-900">{t.office}</h4>
                <p className="text-gray-500 text-sm">{t.officeDesc}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-3xl">📞</span>
              <div>
                <h4 className="font-bold text-slate-900">{t.call}</h4>
                <p className="text-gray-500 text-sm">+90 555 123 45 67</p>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full rounded-3xl overflow-hidden shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49749.02058428383!2d34.7892305541604!3d38.6433215239922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a68892f354783%3A0x6b4904125b29fc9f!2sG%C3%B6reme%2C%20Nev%C5%9Fehir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" width="100%" height="100%" style={{ border: 0 }}></iframe>
          </div>
        </div>
      </div>

      {/* PARTNERLER */}
      <div className="border-y border-gray-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-6">{t.partners}</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <h3 className="text-2xl font-bold">Turkish Airlines</h3>
            <h3 className="text-2xl font-bold">TÜRSAB</h3>
            <h3 className="text-2xl font-bold">Booking.com</h3>
            <h3 className="text-2xl font-bold">Viator</h3>
            <h3 className="text-2xl font-bold">GetYourGuide</h3>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-yellow-500 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-black mb-4">{t.nlTitle}</h2>
          <p className="text-slate-900 mb-8 font-medium">{t.nlDesc}</p>
          <form onSubmit={handleSubscribe} className="relative max-w-lg mx-auto">
            <div className="flex bg-white p-2 rounded-full shadow-lg">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.nlPlace} className="flex-1 px-4 md:px-6 rounded-l-full outline-none text-black bg-transparent placeholder-gray-500" required disabled={isLoading || isSubscribed} />
              <button type="submit" disabled={isLoading || isSubscribed} className="bg-slate-900 text-white px-6 md:px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px] md:min-w-[140px]">
                {isLoading ? ( <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> ) : isSubscribed ? ( t.nlJoined ) : ( t.nlBtn )}
              </button>
            </div>
            {isSubscribed && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -bottom-10 left-0 w-full text-green-900 font-bold text-sm">
                {t.nlSuccess}
              </motion.p>
            )}
          </form>
        </div>
      </div>

    </main>
  );
}