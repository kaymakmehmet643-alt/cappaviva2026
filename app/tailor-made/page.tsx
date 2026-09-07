"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSite } from "../context/SiteContext";

// =======================================================
// 📚 WIZARD İÇİN ÇOKLU DİL SÖZLÜĞÜ (Asla Dokunulmadı)
// =======================================================
const DICT: any = {
  tr: {
    back: "← Geri", next: "Sonraki Adım →", restart: "↺ Planı Yeniden Başlat",
    returnHome: "← Ana Sayfaya Dön", title1: "Kendi Kapadokya'nızı", title2: "Tasarla",
    step: "Adım", analyze1: "Müsaitlikler ve VIP araçlar kontrol ediliyor...",
    analyze2: "En iyi aktiviteler günlere dağıtılıyor...", analyze3: "Size özel VIP taslak planınız hazır!",
    analyzeTitle: "VIP Planınız Örülüyor", successTitle: "Harika Seçimler!",
    successDesc: "İsteklerinize uygun VIP Kapadokya rotanızı hazırladık. Aşağıdaki planı inceleyin ve WhatsApp üzerinden bize göndererek sadece size özel net fiyatlandırmayı anında alın.",
    btnSend: "Bu Planı WhatsApp'tan Gönder",
    summaryDuration: "Süre:", summaryHotel: "Otel:", summaryVibe: "Tarz:", summaryActs: "Aktiviteler:",
    notSpecified: "Belirtilmedi",
    waIntro: "*Merhaba CappaViva Ekibi!* 👋\nWeb sitenizdeki asistan aracılığıyla kendime özel bir seyahat planı oluşturdum. Bu taslak üzerinden ilerleyip fiyat almak istiyorum.\n\n*Tercihlerim:*\n",
    waDuration: "🔸 *Süre:* ", waHotel: "🔸 *Konaklama:* ", waTransfer: "🔸 *Ulaşım:* ", waVibe: "🔸 *Tarz:* ",
    waDraftTitle: "\n*Sisteminizin Önerdiği Taslak Program:*\n--------------------------------------\n",
    waOutro: "Bu programa uygun tarih ve fiyat bilgisi alabilir miyim? Teşekkürler! ✨",
    dayPrefix: "GÜN",
    q1: "Kapadokya'da kaç gün kalmayı planlıyorsunuz?", s1: "Size en uygun rotayı çizebilmemiz için süreyi bilmeliyiz.",
    dur1: "1-2 Gün", dur1d: "Hızlı bir hafta sonu kaçamağı.", dur2: "3-4 Gün", dur2d: "İdeal Kapadokya deneyimi.", dur3: "5+ Gün", dur3d: "Her detayı keşfedeceğim.",
    q2: "Konaklama planınız nedir?", s2: "Sizin için en iyi otelleri ayarlayabiliriz.",
    hot1: "Mağara Otel Önerin", hot1d: "Otantik ve butik bir yer arıyorum.", hot2: "Ultra Lüks / Balayı", hot2d: "Özel havuzlu, jakuzili VIP süit.", hot3: "Otelim Hazır", hot3d: "Sadece tur ve transfer istiyorum.",
    q3: "Ulaşım ve Transfer tercihiniz?", s3: "Havalimanından otelinize nasıl geçmek istersiniz?",
    trf1: "Özel VIP Transfer", trf1d: "Beni havalimanından VIP araçla alın.", trf2: "Ekonomik Shuttle", trf2d: "Paylaşımlı servis aracı yeterli.", trf3: "Kendi Aracımlayım", trf3d: "Sadece etkinliklerde rehber/araç lazım.",
    q4: "Hangi deneyimleri kesinlikle yaşamak istersiniz?", s4: "İlgi alanlarınızı seçin (Birden fazla seçebilirsiniz).",
    act1: "Sıcak Hava Balonu", act2: "ATV veya Jeep Safari", act3: "Tarih & Müzeler (Kırmızı/Yeşil Tur)", act4: "Klasik Araçla Fotoğraf Çekimi", act5: "Eğlence & Şarap Tadımı", act6: "Vadilerde Atlı Safari",
    q5: "Seyahat tarzınız hangisine daha yakın?", s5: "Programın ritmini belirleyelim.",
    vib1: "Romantik / Çift", vib1d: "Sakin, özel ve lüks bir tatil.", vib2: "Macera & Aksiyon", vib2d: "Dolu dolu, heyecanlı bir program.", vib3: "Kültür & Aile", vib3d: "Çocuklara uygun, tarihi keşif.",
    d1t: "Kapadokya'ya Merhaba",
    d1Air: "🛬 Havalimanı Karşılama: ", d1Hot: "🏨 Otel İşlemleri: Konaklama giriş ve kısa bir dinlenme.", d1Atv: "🏜️ Öğleden Sonra: Vadilerin arasında heyecan dolu ATV veya Jeep Safari turu (Günbatımı izleme).", d1Hrs: "🐎 Öğleden Sonra: Peribacaları arasında günbatımı eşliğinde romantik/sakin atlı safari.", d1Win: "🍷 Akşama Doğru: Kızılçukur Vadisi'nde muazzam Kapadokya günbatımı eşliğinde bölgeye merhaba.",
    d2t: "Kapadokya'nın Kalbinde",
    d2Bal: "🎈 05:00 - Otelden VIP araçla alınış ve Sivil Havacılık onaylı Sıcak Hava Balonu ile gökyüzü macerası.", d2Pho: "📸 Sabah/Öğle: Klasik araçla peribacaları manzaralı vadilerde profesyonel fotoğraf çekimi.", d2Red: "🏛️ Öğle Öncesi: Kırmızı Tur (Göreme Açık Hava Müzesi, Uçhisar Kalesi, Paşabağları) başlangıcı.", d2Nig: "🎭 Akşam: Yeraltı mağara restoranında geleneksel Türk Gecesi şovları ve akşam yemeği.", d2Rom: "🕯️ Akşam: Lüks bir mağara restoranda vadilere karşı romantik akşam yemeği.", d2Fre: "🍽️ Akşam: Göreme merkezde serbest zaman ve yöresel testi kebabı tadımı.",
    d3t: "Tarihin Derinlikleri",
    d3Und: "⛏️ Sabah: Yeraltı Şehri (Derinkuyu veya Kaymaklı) derinliklerine inerek tarihe tanıklık.", d3Pot: "🏺 Öğle: Avanos'a geçiş ve Kızılırmak kenarında geleneksel çömlek yapım atölyesi deneyimi.", d3Fam: "👨‍👩‍👧‍👦 Öğleden Sonra: Ailece Güvercinlik Vadisi panoraması ve lokal mağaza gezileri.", d3EndS: "✈️ Akşam: Kendi aracınızla veda.", d3EndV: "✈️ Akşam: Havalimanına VIP veda transferi.",
    d4t: "Doğa ve Veda",
    d4Hik: "🚶‍♂️ Sabah: Ihlara Vadisi'nde doğa yürüyüşü ve nehir kenarındaki kamelyalarda dinlendirici öğle yemeği.", d4Sho: "🛍️ Öğleden Sonra: Yöresel halı dokuma atölyeleri veya Kapadokya şarap mahzenleri ziyareti.", d4EndS: "✈️ Akşamüstü: Kendi aracınızla güvenli yolculuklar.", d4EndV: "✈️ Akşamüstü: Havalimanına VIP veda transferi.",
  },
  en: {
    back: "← Back", next: "Next Step →", restart: "↺ Restart Plan",
    returnHome: "← Back to Home", title1: "Design Your Own", title2: "Cappadocia",
    step: "Step", analyze1: "Checking availability and VIP vehicles...",
    analyze2: "Distributing best activities to your days...", analyze3: "Your custom VIP draft plan is ready!",
    analyzeTitle: "Crafting Your VIP Plan", successTitle: "Great Choices!",
    successDesc: "We've prepared your VIP Cappadocia itinerary based on your preferences. Review the plan below and send it to our travel consultant via WhatsApp to get your custom quote instantly.",
    btnSend: "Send This Plan via WhatsApp",
    summaryDuration: "Duration:", summaryHotel: "Hotel:", summaryVibe: "Vibe:", summaryActs: "Activities:",
    notSpecified: "Not specified",
    waIntro: "*Hello CappaViva Team!* 👋\nI created a custom travel plan using the assistant on your website. I would like to proceed with this draft and get a quote.\n\n*My Preferences:*\n",
    waDuration: "🔸 *Duration:* ", waHotel: "🔸 *Accommodation:* ", waTransfer: "🔸 *Transfer:* ", waVibe: "🔸 *Style:* ",
    waDraftTitle: "\n*Suggested Draft Itinerary:*\n--------------------------------------\n",
    waOutro: "Can I get date availability and a price quote for this program? Thank you! ✨",
    dayPrefix: "DAY",
    q1: "How many days do you plan to stay in Cappadocia?", s1: "We need to know the duration to draw the best route.",
    dur1: "1-2 Days", dur1d: "A quick weekend getaway.", dur2: "3-4 Days", dur2d: "The ideal Cappadocia experience.", dur3: "5+ Days", dur3d: "I will explore every detail.",
    q2: "What is your accommodation plan?", s2: "We can arrange the best hotels for you.",
    hot1: "Recommend Cave Hotel", hot1d: "Looking for an authentic and boutique place.", hot2: "Ultra Luxury / Honeymoon", hot2d: "VIP suite with private pool, jacuzzi.", hot3: "My Hotel is Ready", hot3d: "I only want tours and transfers.",
    q3: "Transportation and Transfer preference?", s3: "How would you like to get to your hotel from the airport?",
    trf1: "Private VIP Transfer", trf1d: "Pick me up from the airport with a VIP vehicle.", trf2: "Economy Shuttle", trf2d: "Shared shuttle service is sufficient.", trf3: "I have my own vehicle", trf3d: "I only need a guide/vehicle for activities.",
    q4: "Which experiences are a must for you?", s4: "Select your interests (You can choose multiple).",
    act1: "Hot Air Balloon", act2: "ATV or Jeep Safari", act3: "History & Museums (Red/Green Tour)", act4: "Classic Car Photoshoot", act5: "Entertainment & Wine Tasting", act6: "Horseback Safari in Valleys",
    q5: "Which best describes your travel style?", s5: "Let's set the rhythm of the program.",
    vib1: "Romantic / Couple", vib1d: "A calm, private and luxurious holiday.", vib2: "Adventure & Action", vib2d: "A full, exciting program.", vib3: "Culture & Family", vib3d: "Family-friendly, historical discovery.",
    d1t: "Hello to Cappadocia",
    d1Air: "🛬 Airport Meet & Greet: ", d1Hot: "🏨 Hotel Check-in: Settling in and a short rest.", d1Atv: "🏜️ Afternoon: Thrilling ATV or Jeep Safari tour through the valleys (Sunset viewing).", d1Hrs: "🐎 Afternoon: Romantic/peaceful horseback safari among the fairy chimneys at sunset.", d1Win: "🍷 Late Afternoon: Welcoming the region with a spectacular Cappadocia sunset at Red Valley.",
    d2t: "Heart of Cappadocia",
    d2Bal: "🎈 05:00 - VIP pick-up from hotel and sky adventure with Civil Aviation approved Hot Air Balloon.", d2Pho: "📸 Morning/Noon: Professional photoshoot in valleys with fairy chimney views in a classic car.", d2Red: "🏛️ Pre-Noon: Start of Red Tour (Göreme Open Air Museum, Uçhisar Castle, Pasabag).", d2Nig: "🎭 Evening: Traditional Turkish Night shows and dinner in an underground cave restaurant.", d2Rom: "🕯️ Evening: Romantic dinner facing the valleys in a luxury cave restaurant.", d2Fre: "🍽️ Evening: Free time in Göreme center and tasting local pottery kebab.",
    d3t: "Depths of History",
    d3Und: "⛏️ Morning: Witness history by descending into the Underground City (Derinkuyu or Kaymakli).", d3Pot: "🏺 Noon: Transfer to Avanos and traditional pottery making workshop experience by the Red River.", d3Fam: "👨‍👩‍👧‍👦 Afternoon: Family panorama of Pigeon Valley and local shop visits.", d3EndS: "✈️ Evening: Farewell with your own vehicle.", d3EndV: "✈️ Evening: VIP farewell transfer to the airport.",
    d4t: "Nature and Farewell",
    d4Hik: "🚶‍♂️ Morning: Nature walk in Ihlara Valley and a relaxing lunch in riverside cabanas.", d4Sho: "🛍️ Afternoon: Visit to local carpet weaving workshops or Cappadocia wine cellars.", d4EndS: "✈️ Late Afternoon: Safe travels with your own vehicle.", d4EndV: "✈️ Late Afternoon: VIP farewell transfer to the airport.",
  },
  es: {
    back: "← Volver", next: "Siguiente Paso →", restart: "↺ Reiniciar Plan",
    returnHome: "← Volver al Inicio", title1: "Diseña Tu Propia", title2: "Capadocia",
    step: "Paso", analyze1: "Comprobando disponibilidad y vehículos VIP...",
    analyze2: "Distribuyendo las mejores actividades en tus días...", analyze3: "¡Tu plan VIP personalizado está listo!",
    analyzeTitle: "Creando Tu Plan VIP", successTitle: "¡Excelentes Opciones!",
    successDesc: "Hemos preparado tu itinerario VIP en Capadocia basado en tus preferencias. Revisa el plan a continuación y envíalo a nuestro asesor por WhatsApp para obtener tu cotización al instante.",
    btnSend: "Enviar Este Plan por WhatsApp",
    summaryDuration: "Duración:", summaryHotel: "Hotel:", summaryVibe: "Estilo:", summaryActs: "Actividades:",
    notSpecified: "No especificado",
    waIntro: "*¡Hola Equipo CappaViva!* 👋\nHe creado un plan de viaje personalizado usando el asistente en su sitio web. Me gustaría continuar con este borrador y obtener una cotización.\n\n*Mis Preferencias:*\n",
    waDuration: "🔸 *Duración:* ", waHotel: "🔸 *Alojamiento:* ", waTransfer: "🔸 *Traslado:* ", waVibe: "🔸 *Estilo:* ",
    waDraftTitle: "\n*Itinerario Borrador Sugerido:*\n--------------------------------------\n",
    waOutro: "¿Puedo obtener disponibilidad de fechas y una cotización para este programa? ¡Gracias! ✨",
    dayPrefix: "DÍA",
    q1: "¿Cuántos días planeas quedarte en Capadocia?", s1: "Necesitamos saber la duración para trazar la mejor ruta para ti.",
    dur1: "1-2 Días", dur1d: "Una escapada rápida de fin de semana.", dur2: "3-4 Días", dur2d: "La experiencia ideal en Capadocia.", dur3: "5+ Días", dur3d: "Exploraré cada detalle.",
    q2: "¿Cuál es tu plan de alojamiento?", s2: "Podemos organizar los mejores hoteles para ti.",
    hot1: "Recomendar Hotel Cueva", hot1d: "Busco un lugar auténtico y boutique.", hot2: "Ultra Lujo / Luna de Miel", hot2d: "Suite VIP con piscina privada, jacuzzi.", hot3: "Mi Hotel está Listo", hot3d: "Solo quiero tours y traslados.",
    q3: "¿Preferencia de Transporte y Traslado?", s3: "¿Cómo te gustaría llegar a tu hotel desde el aeropuerto?",
    trf1: "Traslado Privado VIP", trf1d: "Recógeme del aeropuerto con un vehículo VIP.", trf2: "Shuttle Económico", trf2d: "El servicio de transporte compartido es suficiente.", trf3: "Tengo mi propio vehículo", trf3d: "Solo necesito guía/vehículo para actividades.",
    q4: "¿Qué experiencias son imprescindibles para ti?", s4: "Selecciona tus intereses (Puedes elegir varios).",
    act1: "Globo Aerostático", act2: "Safari en ATV o Jeep", act3: "Historia y Museos (Tour Rojo/Verde)", act4: "Sesión de Fotos en Auto Clásico", act5: "Entretenimiento y Cata de Vinos", act6: "Safari a Caballo en los Valles",
    q5: "¿Qué describe mejor tu estilo de viaje?", s5: "Vamos a establecer el ritmo del programa.",
    vib1: "Romántico / Pareja", vib1d: "Unas vacaciones tranquilas, privadas y lujosas.", vib2: "Aventura y Acción", vib2d: "Un programa completo y emocionante.", vib3: "Cultura y Familia", vib3d: "Descubrimiento histórico, ideal para familias.",
    d1t: "Hola a Capadocia",
    d1Air: "🛬 Recepción en el Aeropuerto: ", d1Hot: "🏨 Registro en el Hotel: alojamiento y breve descanso.", d1Atv: "🏜️ Tarde: Emocionante tour en ATV o Jeep Safari por los valles (Viendo el atardecer).", d1Hrs: "🐎 Tarde: Romántico y tranquilo safari a caballo entre las chimeneas de hadas al atardecer.", d1Win: "🍷 Final de la Tarde: Bienvenida a la región con un espectacular atardecer en el Valle Rojo.",
    d2t: "Corazón de Capadocia",
    d2Bal: "🎈 05:00 - Recogida VIP del hotel y aventura en el cielo con Globo Aerostático.", d2Pho: "📸 Mañana/Mediodía: Sesión de fotos profesional en valles con vistas a chimeneas de hadas en auto clásico.", d2Red: "🏛️ Antes del Mediodía: Inicio del Tour Rojo (Museo al Aire Libre de Göreme, Castillo de Uçhisar, Pasabag).", d2Nig: "🎭 Noche: Espectáculos tradicionales de la Noche Turca y cena en un restaurante cueva subterráneo.", d2Rom: "🕯️ Noche: Cena romántica frente a los valles en un restaurante cueva de lujo.", d2Fre: "🍽️ Noche: Tiempo libre en el centro de Göreme y degustación de kebab local en vasija.",
    d3t: "Profundidades de la Historia",
    d3Und: "⛏️ Mañana: Sé testigo de la historia descendiendo a la Ciudad Subterránea (Derinkuyu o Kaymakli).", d3Pot: "🏺 Mediodía: Traslado a Avanos y experiencia en taller de alfarería tradicional junto al Río Rojo.", d3Fam: "👨‍👩‍👧‍👦 Tarde: Panorama familiar del Valle de las Palomas y visitas a tiendas locales.", d3EndS: "✈️ Noche: Despedida con su propio vehículo.", d3EndV: "✈️ Noche: Traslado VIP de despedida al aeropuerto.",
    d4t: "Naturaleza y Despedida",
    d4Hik: "🚶‍♂️ Mañana: Paseo por la naturaleza en el Valle de Ihlara y almuerzo relajante junto al río.", d4Sho: "🛍️ Tarde: Visita a talleres locales de tejido de alfombras o bodegas de vino de Capadocia.", d4EndS: "✈️ Final de la Tarde: Viajes seguros con su propio vehículo.", d4EndV: "✈️ Final de la Tarde: Traslado VIP de despedida al aeropuerto.",
  }
};

export default function TailorMadeWizard() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = DICT[aktifDil] || DICT['tr'];

  const WIZARD_STEPS = [
    {
      id: "duration", question: t.q1, subtitle: t.s1, type: "single",
      options: [
        { value: "dur1", label: t.dur1, desc: t.dur1d, icon: "⚡" },
        { value: "dur2", label: t.dur2, desc: t.dur2d, icon: "🎒" },
        { value: "dur3", label: t.dur3, desc: t.dur3d, icon: "🧳" },
      ]
    },
    {
      id: "hotel", question: t.q2, subtitle: t.s2, type: "single",
      options: [
        { value: "hot1", label: t.hot1, desc: t.hot1d, icon: "🏨" },
        { value: "hot2", label: t.hot2, desc: t.hot2d, icon: "✨" },
        { value: "hot3", label: t.hot3, desc: t.hot3d, icon: "✅" },
      ]
    },
    {
      id: "transfer", question: t.q3, subtitle: t.s3, type: "single",
      options: [
        { value: "trf1", label: t.trf1, desc: t.trf1d, icon: "🚐" },
        { value: "trf2", label: t.trf2, desc: t.trf2d, icon: "🚌" },
        { value: "trf3", label: t.trf3, desc: t.trf3d, icon: "🚙" },
      ]
    },
    {
      id: "activities", question: t.q4, subtitle: t.s4, type: "multiple",
      options: [
        { value: "act1", label: t.act1, icon: "🎈" },
        { value: "act2", label: t.act2, icon: "🏜️" },
        { value: "act3", label: t.act3, icon: "🏛️" },
        { value: "act4", label: t.act4, icon: "📸" },
        { value: "act5", label: t.act5, icon: "🍷" },
        { value: "act6", label: t.act6, icon: "🐎" },
      ]
    },
    {
      id: "vibe", question: t.q5, subtitle: t.s5, type: "single",
      options: [
        { value: "vib1", label: t.vib1, desc: t.vib1d, icon: "🥂" },
        { value: "vib2", label: t.vib2, desc: t.vib2d, icon: "🧗" },
        { value: "vib3", label: t.vib3, desc: t.vib3d, icon: "👨‍👩‍👧‍👦" },
      ]
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisText, setAnalysisText] = useState(t.analyze1);
  const [isFinished, setIsFinished] = useState(false);

  const [answers, setAnswers] = useState<Record<string, any>>({
    duration: "", hotel: "", transfer: "", activities: [], vibe: ""
  });

  const [generatedPlan, setGeneratedPlan] = useState<any[]>([]);

  const handleSingleSelect = (stepId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [stepId]: value }));
    setTimeout(() => handleNext(), 350); 
  };

  const handleMultiSelect = (stepId: string, value: string) => {
    setAnswers(prev => {
      const currentList = prev[stepId] as string[];
      if (currentList.includes(value)) {
        return { ...prev, [stepId]: currentList.filter(item => item !== value) };
      } else {
        return { ...prev, [stepId]: [...currentList, value] };
      }
    });
  };

  const handleNext = () => {
    if (currentStep === WIZARD_STEPS.length - 1) {
      startAnalysis();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const buildSmartItinerary = () => {
    const plan = [];
    const days = answers.duration === "dur1" ? 2 : answers.duration === "dur2" ? 3 : 4;
    const acts = answers.activities as string[];
    const transferName = t[answers.transfer] || "";
    
    // 1. GÜN
    const day1Events = [
      t.d1Air + transferName,
      t.d1Hot
    ];
    if (acts.includes("act2")) day1Events.push(t.d1Atv);
    else if (acts.includes("act6")) day1Events.push(t.d1Hrs);
    else day1Events.push(t.d1Win);
    plan.push({ day: 1, title: t.d1t, events: day1Events });

    // 2. GÜN
    const day2Events = [];
    if (acts.includes("act1")) day2Events.push(t.d2Bal);
    if (acts.includes("act4")) day2Events.push(t.d2Pho);
    if (acts.includes("act3")) day2Events.push(t.d2Red);
    if (acts.includes("act5")) day2Events.push(t.d2Nig);
    else if (answers.vibe === "vib1") day2Events.push(t.d2Rom);
    else day2Events.push(t.d2Fre);
    plan.push({ day: 2, title: t.d2t, events: day2Events });

    // 3. GÜN
    if (days >= 3) {
      const day3Events = [t.d3Und, t.d3Pot];
      if (answers.vibe === "vib3") day3Events.push(t.d3Fam);
      if (days === 3) day3Events.push(answers.transfer === "trf3" ? t.d3EndS : t.d3EndV);
      plan.push({ day: 3, title: t.d3t, events: day3Events });
    }

    // 4. GÜN
    if (days >= 4) {
      const day4Events = [t.d4Hik, t.d4Sho, answers.transfer === "trf3" ? t.d4EndS : t.d4EndV];
      plan.push({ day: 4, title: t.d4t, events: day4Events });
    }

    setGeneratedPlan(plan);
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    buildSmartItinerary(); 
    
    setTimeout(() => setAnalysisText(t.analyze1), 0);
    setTimeout(() => setAnalysisText(t.analyze2), 1500);
    setTimeout(() => setAnalysisText(t.analyze3), 3000);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsFinished(true);
    }, 4000);
  };

  const generateWhatsAppMessage = () => {
    const actList = answers.activities.length > 0 
      ? answers.activities.map((a: string) => t[a]).join(", ") 
      : t.notSpecified;
    
    let msg = t.waIntro;
    msg += `${t.waDuration}${t[answers.duration]}\n`;
    msg += `${t.waHotel}${t[answers.hotel]}\n`;
    msg += `${t.waTransfer}${t[answers.transfer]}\n`;
    msg += `${t.waVibe}${t[answers.vibe]}\n\n`;

    msg += t.waDraftTitle;

    generatedPlan.forEach((p) => {
      msg += `📍 *${p.day}. ${t.dayPrefix}: ${p.title}*\n`;
      p.events.forEach((evt: string) => {
        msg += ` - ${evt}\n`;
      });
      msg += `\n`;
    });

    msg += t.waOutro;
    return encodeURIComponent(msg);
  };

  return (
    // 🌟 BEMBEYAZ, AYDINLIK VE LÜKS ANA KASA
    <main className="min-h-[100svh] bg-[#F8FAFC] py-24 md:py-32 relative overflow-hidden flex flex-col items-center selection:bg-blue-500 selection:text-white">
      
      {/* Hafif Izgara ve Aydınlık Mavi Parlamalar */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-300/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>

      <div className="max-w-4xl w-full px-4 sm:px-6 relative z-10">
        
        {/* ======================================= */}
        {/* ÜST BAŞLIK VE PROGRESS BAR */}
        {/* ======================================= */}
        {!isAnalyzing && !isFinished && (
          <div className="mb-10 text-center">
            <Link href="/" className="inline-block mb-6 text-sm font-bold text-slate-400 hover:text-blue-500 transition-colors uppercase tracking-widest">
              {t.returnHome}
            </Link>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 drop-shadow-sm">
              {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">{t.title2}</span>
            </h1>
            <div className="flex items-center justify-center gap-2 max-w-sm mx-auto mt-8">
              {WIZARD_STEPS.map((_, index) => (
                <div key={index} className="flex-1 h-1.5 rounded-full bg-slate-200 overflow-hidden shadow-inner">
                  <motion.div 
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: index <= currentStep ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              ))}
            </div>
            <p className="text-[10px] font-black text-slate-400 mt-4 uppercase tracking-[0.2em]">
              {t.step} {currentStep + 1} / {WIZARD_STEPS.length}
            </p>
          </div>
        )}

        {/* ======================================= */}
        {/* ANA KART ALANI */}
        {/* ======================================= */}
        <div className={`bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden relative transition-all duration-500 ${isFinished ? "min-h-[auto]" : "min-h-[450px] flex flex-col justify-center"}`}>
          
          <AnimatePresence mode="wait">
            
            {/* 🌟 1. DURUM: SORULAR (WIZARD) */}
            {!isAnalyzing && !isFinished && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="p-8 md:p-12 w-full h-full"
              >
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-3 tracking-tight">{WIZARD_STEPS[currentStep].question}</h2>
                  <p className="text-slate-500 text-sm font-medium">{WIZARD_STEPS[currentStep].subtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {WIZARD_STEPS[currentStep].options.map((opt, i) => {
                    const stepId = WIZARD_STEPS[currentStep].id;
                    const isMulti = WIZARD_STEPS[currentStep].type === "multiple";
                    const isSelected = isMulti 
                      ? answers[stepId].includes(opt.value) 
                      : answers[stepId] === opt.value;

                    return (
                      <button
                        key={i}
                        onClick={() => isMulti ? handleMultiSelect(stepId, opt.value) : handleSingleSelect(stepId, opt.value)}
                        className={`text-left p-6 rounded-3xl border transition-all duration-300 relative group overflow-hidden
                          ${isSelected 
                            ? "border-blue-500 bg-blue-50/80 shadow-[0_10px_20px_rgba(59,130,246,0.15)]" 
                            : "border-slate-100 hover:border-blue-200 hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] bg-white"}
                        `}
                      >
                        {/* Hover Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isSelected ? "opacity-100" : ""}`}></div>

                        <div className="relative z-10">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4 transition-transform duration-300 shadow-sm ${isSelected ? "bg-white scale-110" : "bg-slate-50 group-hover:bg-white group-hover:scale-110"}`}>
                            {opt.icon}
                          </div>
                          <h4 className={`font-black text-base mb-1 transition-colors ${isSelected ? "text-blue-700" : "text-slate-800 group-hover:text-blue-600"}`}>
                            {opt.label}
                          </h4>
                          {opt.desc && <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-2">{opt.desc}</p>}
                          
                          {/* Seçili İkonu (Mavi Check) */}
                          {isSelected && (
                            <div className="absolute top-5 right-5 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={4} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Alt Navigasyon Butonları */}
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-slate-100/50">
                  <button 
                    onClick={handleBack} 
                    disabled={currentStep === 0}
                    className={`text-xs font-black tracking-[0.2em] uppercase transition-colors px-4 py-2 rounded-full ${currentStep === 0 ? "text-slate-300 cursor-not-allowed" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`}
                  >
                    {t.back}
                  </button>
                  
                  {WIZARD_STEPS[currentStep].type === "multiple" && (
                    <button 
                      onClick={handleNext} 
                      className="bg-slate-900 text-white px-8 py-3.5 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5"
                    >
                      {t.next}
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* 🌟 2. DURUM: YAPAY ZEKA ANALİZİ (Yükleme Ekranı) */}
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="p-12 w-full h-[450px] flex flex-col items-center justify-center text-center relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent pointer-events-none"></div>
                <div className="relative w-28 h-28 mb-8">
                  <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin opacity-80 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                  <div className="absolute inset-2 rounded-full border-r-4 border-sky-300 animate-[spin_1.5s_linear_reverse_infinite] opacity-60"></div>
                  <div className="absolute inset-4 rounded-full border-l-4 border-amber-400 animate-[spin_2s_linear_infinite] opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-4xl drop-shadow-md">✨</div>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-3 relative z-10">{t.analyzeTitle}</h2>
                <motion.p 
                  key={analysisText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-slate-500 font-bold tracking-wide relative z-10"
                >
                  {analysisText}
                </motion.p>
              </motion.div>
            )}

            {/* 🌟 3. SONUÇ: LÜKS MAVİ KUTU İÇİNDE BEMBEYAZ PLANLAR */}
            {isFinished && (
              <motion.div
                key="finished"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full relative overflow-hidden bg-white flex flex-col"
              >
                {/* Sonuç Ekranı Üst Kısım (Header) */}
                <div className="bg-white px-8 pt-12 pb-8 text-center relative overflow-hidden">
                  <div className="w-20 h-20 bg-green-50 border border-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-sm">
                    🎉
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                    {t.successTitle}
                  </h2>
                  <p className="text-slate-500 font-medium max-w-lg mx-auto text-sm leading-relaxed">
                    {t.successDesc}
                  </p>
                </div>

                {/* 🌟 YENİ: MAVİMSİ ŞABLON KUTUSU (İçi bembeyaz kartlar) */}
                <div className="px-4 md:px-8 pb-8">
                  <div className="bg-gradient-to-br from-[#E6F0FD] to-[#F3F8FF] border-2 border-blue-100 rounded-[2.5rem] p-6 md:p-12 shadow-[0_20px_50px_rgba(59,130,246,0.1)] relative overflow-hidden">
                    
                    {/* Arka Plan Dekoratif Mavi Dalgalar */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-300/20 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[80px] pointer-events-none"></div>

                    {/* Lüks Rozet Özetleri */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12 relative z-10">
                      <span className="bg-white border border-blue-100 shadow-sm px-4 py-2 rounded-full text-xs font-bold text-slate-600"><span className="text-blue-500 font-black mr-1">{t.summaryDuration}</span> {t[answers.duration]}</span>
                      <span className="bg-white border border-blue-100 shadow-sm px-4 py-2 rounded-full text-xs font-bold text-slate-600"><span className="text-blue-500 font-black mr-1">{t.summaryHotel}</span> {t[answers.hotel]}</span>
                      <span className="bg-white border border-blue-100 shadow-sm px-4 py-2 rounded-full text-xs font-bold text-slate-600"><span className="text-blue-500 font-black mr-1">{t.summaryVibe}</span> {t[answers.vibe]}</span>
                    </div>

                    {/* Dinamik Gün Gün Zaman Çizelgesi (Timeline) */}
                    <div className="max-w-2xl mx-auto relative z-10">
                      {/* Parlayan Mavi Çizgi */}
                      <div className="absolute left-[22px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-400 via-blue-300 to-transparent rounded-full"></div>

                      {generatedPlan.map((dayPlan, index) => (
                        <motion.div 
                          key={index} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="relative pl-14 mb-10 last:mb-0 group"
                        >
                          {/* Çizgi Üzerindeki Parlayan Nokta */}
                          <div className="absolute left-[15px] top-1.5 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 group-hover:bg-amber-400 transition-all duration-300 border-4 border-white"></div>
                          
                          {/* Bembeyaz Günlük Plan Kartı */}
                          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-white hover:shadow-[0_15px_30px_rgba(59,130,246,0.1)] hover:border-blue-200 transition-all duration-300">
                            <h4 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-3">
                              <span className="text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-xl text-[10px] tracking-widest uppercase">{dayPlan.day}. {t.dayPrefix}</span>
                              {dayPlan.title}
                            </h4>
                            <div className="space-y-4">
                              {dayPlan.events.map((event: string, eIndex: number) => {
                                const icon = event.split(" ")[0];
                                const text = event.substring(event.indexOf(" ") + 1);
                                return (
                                  <p key={eIndex} className="text-sm text-slate-600 leading-relaxed font-medium flex items-start gap-3">
                                    <span className="text-lg mt-0.5 shrink-0 drop-shadow-sm">{icon}</span>
                                    <span>{text}</span>
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Lüks WhatsApp Butonu Alanı */}
                <div className="p-8 md:p-12 text-center bg-white border-t border-slate-100 relative overflow-hidden">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-green-500/10 rounded-full blur-[60px] pointer-events-none"></div>
                  
                  <a 
                    href={`https://wa.me/905354322782?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-[#25D366] to-[#1ebe57] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 relative z-10 border border-[#1ebd56]"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    {t.btnSend}
                  </a>

                  <button onClick={() => { setCurrentStep(0); setIsFinished(false); setAnswers({ duration: "", hotel: "", transfer: "", activities: [], vibe: "" }); }} className="block w-full text-center mt-6 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-500 transition-colors relative z-10">
                    {t.restart}
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}