"use client";

import Link from "next/link";
import { useSite } from "../app/context/SiteContext"; // Kendi yoluna göre ayarla

// =======================================================
// 📚 FOOTER SÖZLÜĞÜ (VIP ACENTE YASAL MADDELERİ)
// =======================================================
const FOOTER_SOZLUK: any = {
  en: {
    callUs: "Call Us",
    mailUs: "Mail Us",
    tours: "Tours & Activities",
    toursList: [
      { name: "Hot Air Balloon Flight", link: "/tours/balloon" },
      { name: "Cappadocia Red Tour", link: "/tours/red-tour" },
      { name: "Cappadocia Green Tour", link: "/tours/green-tour" },
      { name: "Sunset ATV Safari", link: "/tours/atv" },
      { name: "VIP Airport Transfers", link: "/transfer" }
    ],
    destinations: "Top Destinations",
    destList: [
      { name: "Göreme Open Air Museum", link: "/museums/goreme" },
      { name: "Uçhisar Castle", link: "/destinations/uchisar" },
      { name: "Love Valley", link: "/valleys/love-valley" },
      { name: "Derinkuyu Underground City", link: "/destinations/derinkuyu" },
      { name: "Ihlara Valley", link: "/valleys/ihlara" }
    ],
    corporate: "Corporate & Support",
    corpList: [
      { name: "About Us", link: "/about" },
      { name: "Contact Us", link: "/contact" },
      { name: "Cancellation & Refund Policy", link: "/cancellation" },
      { name: "Distance Selling Agreement", link: "/distance-selling" },
      { name: "Privacy Policy (KVKK)", link: "/privacy-policy" },
      { name: "Cookie Policy", link: "/cookies" }
    ],
    rights: "© 2026 CappaViva Travel. All rights reserved.",
    tursab: "TÜRSAB Verified Agency"
  },
  tr: {
    callUs: "Bizi Arayın",
    mailUs: "Bize Yazın",
    tours: "Turlar & Aktiviteler",
    toursList: [
      { name: "Kapadokya Balon Turu", link: "/tours/balloon" },
      { name: "Kırmızı Tur (Bölge Turu)", link: "/tours/red-tour" },
      { name: "Yeşil Tur (Yeraltı Şehri)", link: "/tours/green-tour" },
      { name: "Günbatımı ATV Safari", link: "/tours/atv" },
      { name: "VIP Havalimanı Transferi", link: "/transfer" }
    ],
    destinations: "Popüler Destinasyonlar",
    destList: [
      { name: "Göreme Açık Hava Müzesi", link: "/museums/goreme" },
      { name: "Uçhisar Kalesi", link: "/destinations/uchisar" },
      { name: "Aşk Vadisi", link: "/valleys/love-valley" },
      { name: "Derinkuyu Yeraltı Şehri", link: "/destinations/derinkuyu" },
      { name: "Ihlara Vadisi", link: "/valleys/ihlara" }
    ],
    corporate: "Kurumsal & Destek",
    corpList: [
      { name: "Hakkımızda", link: "/about" },
      { name: "İletişim", link: "/contact" },
      { name: "İptal ve İade Koşulları", link: "/cancellation" },
      { name: "Mesafeli Satış Sözleşmesi", link: "/distance-selling" },
      { name: "Gizlilik ve KVKK Politikası", link: "/privacy-policy" },
      { name: "Çerez Politikası", link: "/cookies" }
    ],
    rights: "© 2026 CappaViva Travel. Tüm hakları saklıdır.",
    tursab: "TÜRSAB Onaylı Acente"
  },
  es: {
    callUs: "Llámanos",
    mailUs: "Escríbenos",
    tours: "Tours y Actividades",
    toursList: [
      { name: "Vuelo en Globo", link: "/tours/balloon" },
      { name: "Tour Rojo Capadocia", link: "/tours/red-tour" },
      { name: "Tour Verde Capadocia", link: "/tours/green-tour" },
      { name: "ATV al Atardecer", link: "/tours/atv" },
      { name: "Traslados VIP", link: "/transfer" }
    ],
    destinations: "Destinos Populares",
    destList: [
      { name: "Museo al Aire Libre de Göreme", link: "/museums/goreme" },
      { name: "Castillo de Uchisar", link: "/destinations/uchisar" },
      { name: "Valle del Amor", link: "/valleys/love-valley" },
      { name: "Ciudad Subterránea Derinkuyu", link: "/destinations/derinkuyu" },
      { name: "Valle de Ihlara", link: "/valleys/ihlara" }
    ],
    corporate: "Corporativo y Soporte",
    corpList: [
      { name: "Sobre Nosotros", link: "/about" },
      { name: "Contacto", link: "/contact" },
      { name: "Política de Cancelación", link: "/cancellation" },
      { name: "Acuerdo de Venta a Distancia", link: "/distance-selling" },
      { name: "Política de Privacidad (KVKK)", link: "/privacy-policy" },
      { name: "Política de Cookies", link: "/cookies" }
    ],
    rights: "© 2026 CappaViva Travel. Todos los derechos reservados.",
    tursab: "Agencia Verificada TÜRSAB"
  }
};

export default function Footer() {
  const { dil } = useSite();
  const aktifDil = dil ? String(dil).toLowerCase() : 'en';
  const t = FOOTER_SOZLUK[aktifDil] || FOOTER_SOZLUK['en'];

  return (
    <footer className="relative bg-gradient-to-b from-[#0A1128] to-[#01030B] pt-20 pb-8 border-t border-white/10 overflow-hidden font-sans">
      
      {/* Arka Plan Premium Glow Efekti (Lüks hissiyatı veren altın/sarı yansıma) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-amber-500/10 blur-[120px] rounded-[100%] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ANA İÇERİK IZGARASI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* 1. SÜTUN: Marka, İletişim, Sosyal Medya */}
          <div className="flex flex-col">
            {/* LOGO */}
            <Link href="/" className="text-4xl font-black tracking-wide mb-10 inline-block">
              <span className="text-white drop-shadow-md">Cappa</span>
              <span className="text-amber-500 drop-shadow-md">Viva</span>
            </Link>

            {/* CALL US */}
            <div className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">{t.callUs}</p>
                <a href="tel:+905354322782" className="text-white font-bold text-lg hover:text-amber-400 transition-colors tracking-wide">+90 535 432 27 82</a>
              </div>
            </div>

            {/* MAIL US */}
            <div className="flex items-center gap-4 mb-10 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">{t.mailUs}</p>
                <a href="mailto:info@cappaviva.com" className="text-white font-bold text-[15px] hover:text-amber-400 transition-colors">info@cappaviva.com</a>
              </div>
            </div>

            {/* GERÇEK SOSYAL MEDYA İKONLARI */}
            <div className="flex flex-wrap gap-3">
              {/* Facebook */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#1877F2] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/cappaviva" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* TikTok */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-black hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:-translate-y-1">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.92 5.81-1.78 1.4-4.14 1.94-6.4 1.58-2.28-.35-4.32-1.6-5.59-3.41-1.28-1.84-1.62-4.22-1-6.38.64-2.18 2.25-4 4.35-4.88 2.1-.88 4.5-.96 6.64-.2v4.06c-1.66-.4-3.52-.2-4.99.74-1.46.94-2.26 2.72-2.02 4.41.24 1.68 1.46 3.12 3.05 3.65 1.58.53 3.43.34 4.77-.66 1.34-1 2.06-2.65 2.03-4.32-.05-3.69-.02-7.39-.02-11.08z"/></svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-black hover:text-white hover:border-transparent transition-all duration-300 shadow-lg hover:-translate-y-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.965h-1.93z"/></svg>
              </a>
              {/* TripAdvisor */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#34e0a1] hover:text-black hover:border-transparent transition-all duration-300 shadow-lg hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.016 0C5.39 0 .016 5.375.016 12c0 6.626 5.374 12 12 12s12-5.374 12-12c0-6.625-5.374-12-12-12zm7.126 12.355c0 1.258-1.018 2.278-2.275 2.278-1.256 0-2.274-1.02-2.274-2.278 0-1.257 1.018-2.276 2.274-2.276 1.257 0 2.275 1.019 2.275 2.276zm-11.83 0c0 1.258-1.018 2.278-2.275 2.278-1.257 0-2.275-1.02-2.275-2.278 0-1.257 1.018-2.276 2.275-2.276 1.257 0 2.275 1.019 2.275 2.276zm13.12-4.103c.535 1.08.835 2.301.835 3.585 0 4.41-3.57 7.98-7.98 7.98s-7.98-3.57-7.98-7.98c0-1.284.3-2.505.835-3.585L8.43 4.298c1.08-.535 2.3-.835 3.585-.835 1.286 0 2.506.3 3.586.835l2.791 3.955z"/></svg>
              </a>
            </div>
          </div>

          {/* 2. SÜTUN: Tours & Activities */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-bold text-white mb-8 tracking-wide">
              <span className="w-1 h-5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span> {t.tours}
            </h4>
            <ul className="space-y-4">
              {t.toursList.map((item: any, i: number) => (
                <li key={i}><Link href={item.link} className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* 3. SÜTUN: Destinations */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-bold text-white mb-8 tracking-wide">
              <span className="w-1 h-5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span> {t.destinations}
            </h4>
            <ul className="space-y-4">
              {t.destList.map((item: any, i: number) => (
                <li key={i}><Link href={item.link} className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* 4. SÜTUN: Corporate & Support */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-bold text-white mb-8 tracking-wide">
              <span className="w-1 h-5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span> {t.corporate}
            </h4>
            <ul className="space-y-4">
              {t.corpList.map((item: any, i: number) => (
                <li key={i}><Link href={item.link} className="text-slate-400 hover:text-amber-400 transition-colors text-sm font-medium">{item.name}</Link></li>
              ))}
            </ul>
          </div>

        </div>

        {/* EN ALT ÇİZGİ: Telif Hakkı & TÜRSAB */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-sm text-slate-500 font-medium text-center md:text-left">
            {t.rights}
          </p>
          
          {/* TÜRSAB Logosu & Linki (Karanlık Temaya Uygun Premium Görünüm) */}
          <a href="https://www.tursab.org.tr/belge-dogrulama" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-lg border border-transparent hover:border-amber-500 transition-all duration-300 group">
            <span className="text-[#002f5b] font-black text-lg tracking-tighter">TÜRSAB</span>
            <div className="w-px h-6 bg-slate-300"></div>
            <span className="text-[11px] font-bold text-slate-700 group-hover:text-amber-600 transition-colors uppercase tracking-widest">{t.tursab}</span>
          </a>

        </div>

      </div>
    </footer>
  );
}