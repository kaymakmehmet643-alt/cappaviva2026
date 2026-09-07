"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSite } from '@/app/context/SiteContext';

// =======================================================
// 📚 WIDGET İÇİN ÇOKLU DİL SÖZLÜĞÜ (Bilgiler KESİNLİKLE aynı!)
// =======================================================
const WIDGET_DICT: any = {
  en: {
    balloonStatus: "Balloon: Approved",
    balloonTitle: "Clear Skies Today",
    balloonDesc: "Civil Aviation approved flights. Click for official SHGM verification.",
    weather: "Weather: 28°C / Sunny",
    shgmBtn: "SHGM ↗",
    sunTitle: "Sun Schedule",
    sunrise: "Sunrise",
    sunset: "Sunset",
    sunTip: "*Best terrace time for balloon watching & photos is 05:10.",
    mehmetTitle: "Mehmet's Tip",
    mehmetHeader: "Sunset & Wine Time",
    mehmetDesc: `"After watching the sunset at Red Valley today, we expect you at our wine house. It will be a wonderful harmony tonight."`,
    emergency: "Support:",
    whatsapp: "WhatsApp"
  },
  tr: {
    balloonStatus: "Balon: Onaylandı",
    balloonTitle: "Bugün Gökyüzü Tertemiz",
    balloonDesc: "Sivil Havacılık uçuşlara onay verdi. Resmi SHGM doğrulaması için tıklayın.",
    weather: "Hava: 28°C / Güneşli",
    shgmBtn: "SHGM Git →",
    sunTitle: "Güneş Saatleri",
    sunrise: "Gündoğumu",
    sunset: "Günbatımı",
    sunTip: "*Balon izleme ve fotoğraf için en iyi teras saati 05:10.",
    mehmetTitle: "Mehmet'in Önerisi",
    mehmetHeader: "Gün Batımı & Şarap Zamanı",
    mehmetDesc: `"Bugün Kızılçukur Vadisi'nde gün batımını izledikten sonra sizi şarap evimize beklerim. Akşam harika bir armoni olacak."`,
    emergency: "Acil Destek:",
    whatsapp: "WhatsApp"
  },
  es: {
    balloonStatus: "Globo: Aprobado",
    balloonTitle: "Cielos Despejados Hoy",
    balloonDesc: "Aviación Civil aprobó los vuelos. Haz clic para la verificación oficial de SHGM.",
    weather: "Clima: 28°C / Soleado",
    shgmBtn: "SHGM ↗",
    sunTitle: "Horarios del Sol",
    sunrise: "Amanecer",
    sunset: "Atardecer",
    sunTip: "*El mejor horario de terraza para ver globos y fotos es a las 05:10.",
    mehmetTitle: "Consejo de Mehmet",
    mehmetHeader: "Atardecer y Vino",
    mehmetDesc: `"Después de ver el atardecer en el Valle Rojo hoy, los esperamos en nuestra casa de vinos. Será una armonía maravillosa."`,
    emergency: "Soporte:",
    whatsapp: "WhatsApp"
  }
};

// --- HARİKA ANİMASYON VARYANTLARI (TypeScript Hataları Çözüldü) ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring" as const, stiffness: 100, damping: 20 } 
  }
};

const floatAnimation = {
  y: [0, -8, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const }
};

export default function LocalGuideWidgets() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = WIDGET_DICT[aktifDil] || WIDGET_DICT['tr'];

  return (
    // 🌟 EN DIŞ KATMAN (Sayfanın siyahını ezen, özel beyaz ve ızgaralı lüks alan)
    <section className="relative w-full bg-[#F8FAFC] py-16 px-4 sm:px-6 lg:px-8 rounded-[3rem] border border-slate-200 shadow-[0_0_50px_rgba(0,0,0,0.05)] overflow-hidden my-12">
      
      {/* Hafif Premium Izgara (Grid) Deseni */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 max-w-7xl mx-auto"
      >
        
        {/* 🌟 1. BALON & HAVA DURUMU KARTI */}
        <motion.div variants={cardVariants} className="h-full">
          <Link 
            href="https://shgm.kapadokya.edu.tr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative flex flex-col justify-between h-full bg-white rounded-[2rem] p-8 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 group z-10 block"
          >
            {/* İç Işık (Blue Glow) Efekti */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none"></div>
            
            {/* 🎨 Arka Plan Çizimi (Sıcak Hava Balonu Filigranı) */}
            <svg className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-100 -rotate-12 group-hover:scale-110 group-hover:text-blue-50 transition-all duration-700 pointer-events-none z-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.5 5 9.5c0 3.32 2.18 6.13 5 7.15v2.85a2 2 0 004 0v-2.85c2.82-1.02 5-3.83 5-7.15C19 5.5 15.87 2 12 2zM9 22h6" />
              <path d="M12 2v14.5M8.5 3.5v11M15.5 3.5v11M5.5 8.5h13M6.5 12.5h11" />
            </svg>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  {t.balloonStatus}
                </span>
                <motion.span animate={floatAnimation} className="text-4xl drop-shadow-sm group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">🎈</motion.span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">{t.balloonTitle}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 group-hover:text-slate-600 transition-colors">
                {t.balloonDesc}
              </p>
            </div>
            
            <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
              <span className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <span className="text-amber-500 text-base drop-shadow-sm">☀️</span> {t.weather}
              </span>
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform flex items-center gap-1 drop-shadow-sm">
                {t.shgmBtn}
              </span>
            </div>
          </Link>
        </motion.div>

        {/* 🌟 2. GÜNDOĞUMU & GÜNBATIMI SAATLERİ */}
        <motion.div variants={cardVariants} className="h-full">
          <div className="relative flex flex-col justify-between h-full bg-white rounded-[2rem] p-8 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 group z-10">
            
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-700 pointer-events-none"></div>
            
            {/* Pusula Filigranı */}
            <svg className="absolute -top-16 -right-16 w-64 h-64 text-slate-100 group-hover:rotate-45 group-hover:text-blue-50 transition-all duration-1000 pointer-events-none z-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
              <path d="M10.5 10.5L16 8l-2.5 5.5L8 16l2.5-5.5z" />
            </svg>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-black uppercase tracking-widest shadow-sm">
                  {t.sunTitle}
                </span>
                <motion.span animate={floatAnimation} className="text-4xl drop-shadow-sm group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">🌅</motion.span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-500 text-center shadow-sm">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-600 transition-colors">{t.sunrise}</span>
                  <span className="block text-2xl font-black text-slate-900 drop-shadow-sm">05:25</span>
                </div>
                <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 transition-all duration-500 text-center shadow-sm">
                  <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-blue-600 transition-colors">{t.sunset}</span>
                  <span className="block text-2xl font-black text-slate-900 drop-shadow-sm">19:42</span>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-5 border-t border-slate-100 relative z-10">
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed flex items-start gap-1.5 group-hover:text-slate-600 transition-colors">
                <span className="text-blue-500 font-black text-sm leading-none mt-0.5 animate-pulse">*</span>
                <span className="flex-1">{t.sunTip.replace('*', '').trim()}</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 🌟 3. MEHMET'İN ÖNERİSİ */}
        <motion.div variants={cardVariants} className="h-full">
          <div className="relative flex flex-col justify-between h-full bg-white rounded-[2rem] p-8 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-blue-300 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-500 group z-10">
            
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-500/5 to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-all duration-700 pointer-events-none"></div>

            {/* Yıldız Filigranı */}
            <svg className="absolute -bottom-10 -right-4 w-56 h-56 text-slate-100 group-hover:text-blue-50 group-hover:scale-110 group-hover:rotate-[20deg] transition-all duration-1000 pointer-events-none z-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3 3-6z" />
            </svg>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.2)] shrink-0">
                    <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {t.mehmetTitle}
                  </span>
                </div>
                <motion.span animate={floatAnimation} className="text-3xl drop-shadow-md group-hover:scale-125 group-hover:rotate-[15deg] transition-transform duration-500">🍷</motion.span>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">{t.mehmetHeader}</h3>
              <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed italic border-l-2 border-blue-400 pl-4 py-1 mb-6">
                {t.mehmetDesc}
              </p>
            </div>
            
            <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{t.emergency}</span>
              <a href="https://wa.me/905354322782" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-[0_4px_10px_rgba(37,211,102,0.1)] group-hover:shadow-[0_6px_15px_rgba(37,211,102,0.2)]">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.whatsapp}
            </a>
          </div>
        </div>
      </motion.div>

    </motion.div>
    </section>
  );
}