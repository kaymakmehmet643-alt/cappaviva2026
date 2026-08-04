"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LocalGuideWidgets() {
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
        className="group bg-white/5 border border-white/10 hover:border-green-500/50 rounded-3xl p-6 transition-all duration-500 relative overflow-hidden flex flex-col justify-between shadow-xl"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-all"></div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Balon: Onaylandı
            </span>
            <span className="text-2xl">🎈</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">Bugün Gökyüzü Tertemiz</h3>
          <p className="text-xs text-gray-400 font-light leading-relaxed">
            Sivil Havacılık uçuşlara onay verdi. Resmi SHGM doğrulaması için tıklayın.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
          <span>Hava: 28°C / Güneşli</span>
          <span className="text-green-400 font-bold group-hover:translate-x-1 transition-transform">SHGM Git →</span>
        </div>
      </Link>

      {/* 2. Gündoğumu & Günbatımı Saatleri */}
      <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group shadow-xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all"></div>
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-yellow-400 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1 rounded-full">
              Güneş Saatleri
            </span>
            <span className="text-2xl">🌅</span>
          </div>
          <div className="grid grid-cols-2 gap-3 my-2">
            <div className="bg-black/30 border border-white/5 rounded-2xl p-3 text-center">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Gündoğumu</div>
              <div className="text-base font-extrabold text-white">05:25</div>
            </div>
            <div className="bg-black/30 border border-white/5 rounded-2xl p-3 text-center">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Günbatımı</div>
              <div className="text-base font-extrabold text-white">19:42</div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-[11px] text-gray-400 font-light">
          *Balon izleme ve fotoğraf için en iyi teras saati 05:10.
        </div>
      </div>

      {/* 3. Mehmet'in Bugünün Önerisi & Acil Hat */}
      <div className="bg-gradient-to-br from-yellow-500/10 via-white/5 to-transparent border border-yellow-500/30 rounded-3xl p-6 transition-all duration-500 flex flex-col justify-between relative overflow-hidden group shadow-xl">
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-yellow-500/50">
                <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
              </div>
              <span className="text-yellow-400 font-bold text-[10px] uppercase tracking-widest">Mehmet&apos;in Önerisi</span>
            </div>
            <span className="text-xl">🍷</span>
          </div>
          <h3 className="text-base font-bold text-white mb-2">Gün Batımı & Şarap Zamanı</h3>
          <p className="text-xs text-gray-300 leading-relaxed italic">
            &quot;Bugün Kızılçukur Vadisi&apos;nde gün batımını izledikten sonra sizi şarap evimize beklerim. Akşam harika bir armoni olacak.&quot;
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-gray-400">Acil Destek Hattı:</span>
          <a href="https://wa.me/905354322782" target="_blank" className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1">
            WhatsApp ↗
          </a>
        </div>
      </div>

    </motion.div>
  );
}