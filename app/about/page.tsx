"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSite } from "../context/SiteContext";

// =======================================================
// 📚 ÇOKLU DİL SÖZLÜĞÜ (HAKKIMIZDA - KURUMSAL & LÜKS)
// =======================================================
const ABOUT_DICT: any = {
  tr: {
    heroSub: "CappaViva Kurumsal",
    heroTitle: "Kapadokya'nın Lüks ve Güvenilir Yüzü",
    heroDesc: "15 yılı aşkın yerel tecrübe, uluslararası standartlarda VIP hizmet anlayışı ve resmi lisanslı güvencemizle düşlediğiniz seyahati gerçeğe dönüştürüyoruz.",
    
    storyBadge: "Kurumsal Miras",
    storyTitle: "Göreme'den Dünyaya Açılan Pencere",
    storyP1: "CappaViva; Kapadokya'nın milyonlarca yılda oluşan büyüleyici coğrafyasını, yer altı şehirlerinin gizemini ve binlerce yıllık kültürel mirasını en üst düzey konforla buluşturmak amacıyla Göreme'de kurulmuştur. Bizler, bölgeyi sadece gezdiren değil, yaşayan ve yaşatan profesyonel bir ekibiz.",
    storyP2: "Her misafirimizin seyahat zevkinin benzersiz olduğunun bilinciyle; standart paket tur anlayışını reddediyor, otantik mağara süitlerinden özel jet ve VIP transferlere kadar her detayı kişiye özel olarak kurguluyoruz.",

    vmBadge: "Stratejik Yaklaşım",
    vmTitle: "Vizyonumuz & Misyonumuz",
    visionTitle: "Vizyonumuz",
    visionDesc: "Kapadokya turizm sektöründe yenilikçi, sürdürülebilir ve lüks segmentin öncüsü olmak; her misafirimize unutulmaz bir kültürel miras deneyimi yaşatmak.",
    missionTitle: "Misyonumuz",
    missionDesc: "Misafirlerimizin zamanına ve bütçesine değer vererek; güvenli, şeffaf, lisanslı ve kusursuz planlanmış VIP seyahat çözümleri sunmak.",

    licenseBadge: "Resmi Yetki & Güven",
    licenseTitle: "Yasal Yetkilerimiz ve TÜRSAB Güvencesi",
    licenseDesc: "CappaViva, Türkiye Cumhuriyeti Kültür ve Turizm Bakanlığı denetiminde faaliyet gösteren resmi bir seyahat acentesidir.",
    tursabTitle: "TÜRSAB A Grubu Seyahat Acentesi",
    tursabNo: "Belge No: 12450 (A Grubu)",
    tursabDesc: "Türkiye Seyahat Acentaları Birliği (TÜRSAB) üyesi olarak, tüm rezervasyonlarınız yasal güvence altındadır ve sigortalı seyahat standartlarına uygundur.",
    insuranceTitle: "Kapsamlı Seyahat Sigortası",
    insuranceDesc: "Tüm transferleriniz, turlarınız ve konaklama organizasyonlarınız uluslararası turizm sigortası güvencesiyle gerçekleştirilir.",

    partnersBadge: "Küresel İş Birlikleri",
    partnersTitle: "Güvenilir Çözüm Ortaklarımız",
    partnersDesc: "Dünyanın ve Türkiye'nin seyahat otoriteleriyle çalışarak kalitemizi tescilliyoruz.",

    ctaTitle: "Kapadokya Maceranızı Planlamaya Başlayın",
    ctaDesc: "İster hazır gezi planlarımızı inceleyin, ister size özel rota oluşturan sihirbazımızı kullanın.",
    ctaBtn: "Özel Rota Tasarla"
  },
  en: {
    heroSub: "CappaViva Corporate",
    heroTitle: "The Luxury and Trusted Face of Cappadocia",
    heroDesc: "Turning your dream journey into reality with over 15 years of local experience, international VIP standards, and our official licensed guarantee.",
    
    storyBadge: "Corporate Legacy",
    storyTitle: "A Window from Göreme to the World",
    storyP1: "CappaViva was founded in Göreme with the mission of merging Cappadocia's enchanting geography, underground city mysteries, and millennia-old cultural heritage with the highest level of comfort. We are a professional team that doesn't just guide you through the region—we help you live and breathe it.",
    storyP2: "Knowing that every guest's travel taste is unique, we reject standard package tours. We curate every detail personally, from authentic cave suites to private VIP transfers.",

    vmBadge: "Strategic Approach",
    vmTitle: "Our Vision & Mission",
    visionTitle: "Our Vision",
    visionDesc: "To be the pioneer of innovative, sustainable, and luxury segments in Cappadocia tourism, offering every guest an unforgettable cultural heritage experience.",
    missionTitle: "Our Mission",
    missionDesc: "To provide safe, transparent, licensed, and flawlessly planned VIP travel solutions while valuing our guests' time and budget.",

    licenseBadge: "Official Authority & Trust",
    licenseTitle: "Our Legal Authorizations & TÜRSAB Guarantee",
    licenseDesc: "CappaViva is an official travel agency operating under the supervision of the Ministry of Culture and Tourism of the Republic of Turkey.",
    tursabTitle: "TÜRSAB Class-A Travel Agency",
    tursabNo: "License No: 12450 (Class A)",
    tursabDesc: "As a member of the Association of Turkish Travel Agencies (TÜRSAB), all your reservations are legally protected and comply with insured travel standards.",
    insuranceTitle: "Comprehensive Travel Insurance",
    insuranceDesc: "All your transfers, tours, and accommodation arrangements are carried out under international tourism insurance coverage.",

    partnersBadge: "Global Partnerships",
    partnersTitle: "Our Trusted Partners",
    partnersDesc: "We certify our quality by working with Turkey's and the world's top travel authorities.",

    ctaTitle: "Start Planning Your Cappadocia Adventure",
    ctaDesc: "Explore our ready itineraries or use our custom wizard to design a route just for you.",
    ctaBtn: "Design Custom Route"
  },
  es: {
    heroSub: "Corporativo CappaViva",
    heroTitle: "La Cara de Lujo y Confianza de Capadocia",
    heroDesc: "Haciendo realidad tu viaje soñado con más de 15 años de experiencia local, estándares VIP internacionales y nuestra garantía oficial licenciada.",
    
    storyBadge: "Legado Corporativo",
    storyTitle: "Una Ventana de Göreme al Mundo",
    storyP1: "CappaViva fue fundada en Göreme con la misión de fusionar la encantadora geografía de Capadocia, los misterios de las ciudades subterráneas y el patrimonio cultural con el más alto nivel de confort.",
    storyP2: "Sabiendo que el gusto de cada viajero es único, rechazamos los tours empaquetados estándar. Curamos cada detalle personalmente, desde suites cueva hasta traslados VIP.",

    vmBadge: "Enfoque Estratégico",
    vmTitle: "Nuestra Visión y Misión",
    visionTitle: "Nuestra Visión",
    visionDesc: "Ser pioneros en los segmentos innovadores, sostenibles y de lujo en el turismo de Capadocia.",
    missionTitle: "Nuestra Misión",
    missionDesc: "Proporcionar soluciones de viaje VIP seguras, transparentes, licenciadas y planificadas sin errores.",

    licenseBadge: "Autoridad y Confianza",
    licenseTitle: "Autorizaciones Legales y Garantía TÜRSAB",
    licenseDesc: "CappaViva es una agencia de viajes oficial que opera bajo la supervisión del Ministerio de Cultura y Turismo de la República de Turquía.",
    tursabTitle: "Agencia de Viajes TÜRSAB Clase A",
    tursabNo: "Licencia N°: 12450 (Clase A)",
    tursabDesc: "Como miembro de la Asociación de Agencias de Viajes de Turquía (TÜRSAB), todas sus reservas están protegidas legalmente.",
    insuranceTitle: "Seguro de Viaje Integral",
    insuranceDesc: "Todos sus traslados, tours y alojamientos se realizan bajo la cobertura de un seguro de turismo internacional.",

    partnersBadge: "Alianzas Globales",
    partnersTitle: "Nuestros Socios de Confianza",
    partnersDesc: "Certificamos nuestra calidad trabajando con las máximas autoridades de viajes del mundo.",

    ctaTitle: "Comienza a Planear Tu Aventura en Capadocia",
    ctaDesc: "Explora nuestros itinerarios listos o usa nuestro asistente para diseñar una ruta a tu medida.",
    ctaBtn: "Diseñar Ruta Personalizada"
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
};

export default function AboutPage() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = ABOUT_DICT[aktifDil] || ABOUT_DICT['tr'];

  return (
    <main className="w-full min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-500 selection:text-white pt-24 md:pt-32 pb-20 relative overflow-hidden">
      
      {/* Arka Plan Dekoratif Işıklar ve Izgara */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0"></div>

      {/* ======================================= */}
      {/* 1. HERO BÖLÜMÜ */}
      {/* ======================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center mb-20 z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative z-10 max-w-3xl mx-auto">
          <span className="text-blue-600 font-black uppercase tracking-[0.25em] text-xs md:text-sm block mb-3 bg-blue-50 border border-blue-100 py-1.5 px-4 rounded-full w-max mx-auto shadow-sm">
            {t.heroSub}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-xl text-slate-600 font-medium leading-relaxed">
            {t.heroDesc}
          </p>
        </motion.div>
      </section>

      {/* ======================================= */}
      {/* 2. HİKAYEMİZ & VİZYONUMUZ */}
      {/* ======================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div>
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs block mb-2">{t.storyBadge}</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-6">{t.storyTitle}</h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base font-medium">
              {t.storyP1}
            </p>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              {t.storyP2}
            </p>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 group">
            <img src="https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=1000" alt="Cappadocia Landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-black text-lg drop-shadow-md">Göreme, Nevşehir</p>
              <p className="text-xs text-white/80 font-medium">CappaViva Headquarters</p>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 3. VİZYON & MİSYON (Özel Kartlar) */}
      {/* ======================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">{t.vmBadge}</span>
          <h2 className="text-3xl md:text-4xl font-black mt-1 text-slate-900 tracking-tight">{t.vmTitle}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-white to-blue-50/40 p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-blue-100/60 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl mb-6 shadow-md shadow-blue-500/20">👁️</div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{t.visionTitle}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{t.visionDesc}</p>
          </div>

          <div className="bg-gradient-to-br from-white to-amber-50/40 p-10 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-amber-100/60 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-900 flex items-center justify-center text-2xl mb-6 shadow-md shadow-amber-500/20">🎯</div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{t.missionTitle}</h3>
            <p className="text-slate-600 leading-relaxed font-medium">{t.missionDesc}</p>
          </div>
        </div>
      </section>

      {/* ======================================= */}
      {/* 4. TÜRSAB VE RESMİ BELGELER (Otorite Bölümü) */}
      {/* ======================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs md:text-sm bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">{t.licenseBadge}</span>
            <h2 className="text-3xl md:text-4xl font-black mt-3 text-slate-900 tracking-tight mb-3">{t.licenseTitle}</h2>
            <p className="text-slate-500 text-sm">{t.licenseDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center text-2xl shrink-0 shadow-md">🛡️</div>
              <div>
                <h4 className="font-black text-lg text-slate-900 mb-1">{t.tursabTitle}</h4>
                <p className="text-blue-600 font-bold text-xs mb-3">{t.tursabNo}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{t.tursabDesc}</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center text-2xl shrink-0 shadow-md">📜</div>
              <div>
                <h4 className="font-black text-lg text-slate-900 mb-1">{t.insuranceTitle}</h4>
                <p className="text-emerald-600 font-bold text-xs mb-3">TURSAB & T.C. Turizm Bakanlığı</p>
                <p className="text-slate-500 text-xs leading-relaxed">{t.insuranceDesc}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 5. PARTNERLER / ORTAKLAR (Marquee / Bant) */}
      {/* ======================================= */}
      <section className="py-12 bg-white border-y border-slate-200 overflow-hidden relative mb-24 z-10">
        <div className="text-center mb-8">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">{t.partnersBadge}</span>
        </div>
        
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-[200%] animate-scroll items-center">
          {[1, 2].map((groupIndex) => (
            <div key={groupIndex} className="flex w-1/2 items-center justify-around">
              <span className="text-xl md:text-3xl font-black text-slate-300 mx-8 whitespace-nowrap">Tripadvisor</span>
              <span className="text-xl md:text-3xl font-black text-slate-300 mx-8 whitespace-nowrap">TÜRSAB A-12450</span>
              <span className="text-xl md:text-3xl font-black text-slate-300 mx-8 whitespace-nowrap">Booking.com</span>
              <span className="text-xl md:text-3xl font-black text-slate-300 mx-8 whitespace-nowrap">Viator</span>
              <span className="text-xl md:text-3xl font-black text-slate-300 mx-8 whitespace-nowrap">GetYourGuide</span>
              <span className="text-xl md:text-3xl font-black text-slate-300 mx-8 whitespace-nowrap">Turkish Airlines</span>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================= */}
      {/* 6. GÜÇLÜ KAPANIŞ (Sihirbaza Yönlendirme) */}
      {/* ======================================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-br from-slate-900 to-[#0a152e] rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-slate-800 max-w-4xl mx-auto relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            {t.ctaTitle}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base mb-8 font-medium">
            {t.ctaDesc}
          </p>
          <Link href="/tailor-made" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:scale-105 transition-transform duration-300">
            {t.ctaBtn} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

    </main>
  );
}