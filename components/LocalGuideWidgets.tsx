"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSite } from '@/app/context/SiteContext';

// =======================================================
// 📚 WIDGET İÇİN ÇOKLU DİL SÖZLÜĞÜ
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

export default function LocalGuideWidgets() {
  // Navbar'dan gelen dil bilgisini çekiyoruz 🌍
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = WIDGET_DICT[aktifDil] || WIDGET_DICT['tr'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
    >
      
      {/* 1. Balon & Hava Durumu Kartı (SHGM Linkli) */}
      <Link 
        href="https://shgm.kapadokya.edu.tr/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group bg-white border border-slate-100 hover:border-green-300 rounded-[2rem] p-6 transition-all duration-500 relative overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-[0_0_30px_rgba(34,197,94,0.25)] hover:-translate-y-2 z-10"
      >
        <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-green-400/10 rounded-full blur-3xl group-hover:bg-green-400/20 transition-all duration-700"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-green-700 bg-green-100 border border-green-200 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> {t.balloonStatus}
            </span>
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🎈</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">{t.balloonTitle}</h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed">
            {t.balloonDesc}
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 relative z-10">
          <span className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
            {t.weather}
          </span>
          <span className="text-green-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 uppercase tracking-wider">
            {t.shgmBtn}
          </span>
        </div>
      </Link>

      {/* 2. Gündoğumu & Günbatımı Saatleri */}
      <div className="bg-white border border-slate-100 rounded-[2rem] p-6 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:-translate-y-2 z-10">
        <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-700"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-yellow-700 bg-yellow-100 border border-yellow-200 px-3 py-1 rounded-full shadow-sm">
              {t.sunTitle}
            </span>
            <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">🌅</span>
          </div>
          
          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center group-hover:bg-yellow-50/50 transition-colors duration-300">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t.sunrise}</div>
              <div className="text-lg font-black text-slate-900">05:25</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center group-hover:bg-rose-50/50 transition-colors duration-300">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t.sunset}</div>
              <div className="text-lg font-black text-slate-900">19:42</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-[11px] text-slate-500 font-medium relative z-10">
          <span className="text-yellow-600 font-bold">*</span> {t.sunTip}
        </div>
      </div>

      {/* 3. Mehmet'in Bugünün Önerisi & Acil Hat */}
      <div className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 rounded-[2rem] p-6 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group shadow-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.25)] hover:-translate-y-2 z-10">
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
              </div>
              <span className="text-yellow-700 font-black text-[10px] uppercase tracking-widest bg-white px-2 py-1 rounded-lg shadow-sm">
                {t.mehmetTitle}
              </span>
            </div>
            <span className="text-xl transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">🍷</span>
          </div>
          <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">{t.mehmetHeader}</h3>
          <p className="text-xs text-slate-600 leading-relaxed italic font-medium">
            {t.mehmetDesc}
          </p>
        </div>
        
        <div className="mt-4 pt-4 border-t border-yellow-200/50 flex items-center justify-between relative z-10">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t.emergency}</span>
          <a href="https://wa.me/905354322782" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-[#25D366] hover:text-[#1ebe57] flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
            {t.whatsapp}
          </a>
        </div>
      </div>

    </motion.div>
  );
}
