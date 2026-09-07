"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSite } from "../app/context/SiteContext";

// 🌟 GÜNCELLENMİŞ VE EKSİKSİZ KATEGORİ LİSTESİ (Mobil İçin)
const menuKategorileri = [
  {
    id: "destinations", title: "Destinations", icon: "🌍",
    items: [
      { name: "Göreme", href: "/destinations/goreme" }, 
      { name: "Uçhisar", href: "/destinations/uchisar" }, 
      { name: "Ürgüp", href: "/destinations/urgup" }, 
      { name: "Avanos", href: "/destinations/avanos" }, 
      { name: "Ortahisar", href: "/destinations/ortahisar" }, 
      { name: "Çavuşin", href: "/destinations/cavusin" }, 
      { name: "Mustafapaşa", href: "/destinations/mustafapasa" }, 
      { name: "Nevşehir", href: "/destinations/nevsehir" }, 
      { name: "Güzelyurt", href: "/destinations/guzelyurt" }, 
      { name: "Ihlara Bölgesi", href: "/destinations/ihlara" }
    ]
  },
  {
    id: "tours-activities", title: "Tours & Activities", icon: "🎈",
    items: [
      { name: "Balon Turları", href: "/tours/balloon" }, 
      { name: "ATV Turları", href: "/tours/atv" }, 
      { name: "At Turları", href: "/tours/horse" }, 
      { name: "Jeep Safari Turları", href: "/tours/jeep-safari" }, 
      { name: "Camel Tur", href: "/tours/camel" }, 
      { name: "Classic Car Tur", href: "/tours/classic-car" }, 
      { name: "Vintage Car Tour", href: "/tours/vintage-car" }, 
      { name: "Photoshooting Tour", href: "/tours/photoshooting" }, 
      { name: "Whirling Dervish Ceremony", href: "/tours/sema" }, 
      { name: "Türk Gecesi", href: "/tours/turkish-night" }, 
      { name: "Turkish Bath (Hamam)", href: "/tours/hamam" }, 
      { name: "Pottery Workshop", href: "/tours/pottery" }, 
      { name: "Cooking Class", href: "/tours/cooking-class" }, 
      { name: "Carpet Weaving", href: "/tours/carpet" }, 
      { name: "Wine Tasting", href: "/tours/wine" }, 
      { name: "Özel Masaj", href: "/tours/massage" }
    ]
  },
  {
    id: "daily-tours", title: "Daily Tours", icon: "🚐",
    items: [
      { name: "Red Tour", href: "/tours/red-tour" }, 
      { name: "Green Tour", href: "/tours/green-tour" }, 
      { name: "Cappadocia Mix Tour", href: "/tours/mix-tour" }, 
      { name: "Pottery Workshop Tour", href: "/tours/pottery-tour" }, 
      { name: "Özel (Private) Turlar", href: "/tours/private-tours" }
    ]
  },
  {
    id: "underground-cities", title: "Underground Cities", icon: "⛏️",
    items: [
      { name: "Derinkuyu Underground", href: "/underground-cities/derinkuyu" },
      { name: "Kaymakli Underground", href: "/underground-cities/kaymakli" },
      { name: "Ozkonak Underground", href: "/underground-cities/ozkonak" },
      { name: "Mazi Underground", href: "/underground-cities/mazi" }
    ]
  },
  {
    id: "valleys", title: "Valleys", icon: "⛰️",
    items: [
      { name: "Aşk Vadisi (Love Valley)", href: "/valleys/love-valley" }, 
      { name: "Gül Vadisi (Rose Valley)", href: "/valleys/rose-valley" }, 
      { name: "Kızıl Vadi (Red Valley)", href: "/valleys/red-valley" }, 
      { name: "Güvercinlik Vadisi (Pigeon Valley)", href: "/valleys/pigeon-valley" }, 
      { name: "Devrent Vadisi (Imagination)", href: "/valleys/devrent" }, 
      { name: "Paşabağ Vadisi (Monks)", href: "/valleys/pasabag" }, 
      { name: "Zemi Vadisi", href: "/valleys/zemi" }, 
      { name: "Meskendir Vadisi", href: "/valleys/meskendir" }, 
      { name: "Kılıçlar Vadisi (Sword)", href: "/valleys/kiliclar" }, 
      { name: "Beyaz Vadi (White Valley)", href: "/valleys/white-valley" }, 
      { name: "Gomeda Vadisi", href: "/valleys/gomeda" }, 
      { name: "Soğanlı Vadisi", href: "/valleys/soganli" }, 
      { name: "Ihlara Vadisi", href: "/valleys/ihlara" }, 
      { name: "Uzengi Vadisi", href: "/valleys/uzengi" }, 
      { name: "Pancarlık Vadisi", href: "/valleys/pancarlik" }, 
      { name: "Aşk Vadisi (Panorama)", href: "/valleys/love-valley-panorama" }, 
      { name: "Çat Vadisi", href: "/valleys/cat-valley" }, 
      { name: "Kızılçukur Vadisi", href: "/valleys/kizilcukur" }
    ]
  },
  {
    id: "museums", title: "Museums", icon: "🏛️",
    items: [
      { name: "Goreme Open Air Museum", href: "/museums/goreme" }, 
      { name: "Zelve Open Air Museum", href: "/museums/zelve" }, 
      { name: "Dark Church Museum", href: "/museums/karanlik-kilise" }, 
      { name: "Buckle Church Museum", href: "/museums/tokali-kilise" }, 
      { name: "El Nazar Museum", href: "/museums/el-nazar" }, 
      { name: "Sandals Church Museum", href: "/museums/carikli" }, 
      { name: "St. Barbara Museum", href: "/museums/aziz-barbara" }, 
      { name: "Nevsehir Museum", href: "/museums/nevsehir" }, 
      { name: "Guray Museum", href: "/museums/guray" }, 
      { name: "Hacibektas Museum", href: "/museums/hacibektas" }, 
      { name: "Hair Museum", href: "/museums/hair-museum" }, 
      { name: "Art & History Museum", href: "/museums/art-history" }, 
      { name: "Acik Saray Ruins", href: "/museums/acik-saray" }, 
      { name: "Selime Monastery", href: "/museums/selime" }, 
      { name: "Sobesos Ancient City", href: "/museums/sobesos" }
    ]
  },
  {
    id: "churches", title: "Churches", icon: "⛪",
    items: [
      { name: "Dark Church", href: "/churches/karanlik" }, 
      { name: "Buckle Church", href: "/churches/tokali" }, 
      { name: "Apple Church", href: "/churches/elmali" }, 
      { name: "Snake Church", href: "/churches/yilanli" }, 
      { name: "Sandals Church", href: "/churches/carikli" }, 
      { name: "St. Barbara Church", href: "/churches/aziz-barbara" }, 
      { name: "El Nazar Church", href: "/churches/el-nazar" }, 
      { name: "Hidden Church", href: "/churches/sakli" }, 
      { name: "Mirrored Church", href: "/churches/aynali" }, 
      { name: "St. John the Baptist", href: "/churches/vaftizci-yahya" }, 
      { name: "Virgin Mary Church", href: "/churches/meryem-ana" }, 
      { name: "Cross Church", href: "/churches/hacli" }, 
      { name: "Grape Church", href: "/churches/uzumlu" }, 
      { name: "Pillared Church", href: "/churches/direkli" }, 
      { name: "Gulludere Churches", href: "/churches/gulludere" }, 
      { name: "Cavusin St. John", href: "/churches/cavusin-vaftizci" }, 
      { name: "Selime Cathedral", href: "/churches/selime" }, 
      { name: "Agacalti Church", href: "/churches/agacalti" }, 
      { name: "Kokar Church", href: "/churches/kokar" }, 
      { name: "Sumbullu Church", href: "/churches/sumbullu" }, 
      { name: "Karagedik Church", href: "/churches/karagedik" }, 
      { name: "Bahattin Church", href: "/churches/bahattin" }, 
      { name: "St. Eustathios Church", href: "/churches/eustathios" }, 
      { name: "St. Basil Chapel", href: "/churches/basil" }, 
      { name: "St. Onuphrius Church", href: "/churches/onuphrius" }
    ]
  }
];

export default function MobilMenu({ isMenuOpen, setIsMenuOpen, setIsSearchOpen }: any) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const { dil, setDil, paraBirimi, setParaBirimi } = useSite();

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      
      {/* Arka Plan Karartması */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
      
      {/* Sağdan Açılan Lüks Menü */}
      <div className={`absolute top-0 right-0 h-full w-[85vw] sm:w-[450px] bg-[#0a0f18]/95 backdrop-blur-3xl text-white flex flex-col transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"} border-l border-white/10 shadow-2xl`}>
        
        {/* Üst Bar: CappaViva + Arama + Çarpı */}
        <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-white/5">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black tracking-widest uppercase">
            <span className="text-white">Cappa</span><span className="text-amber-500">Viva</span>
          </Link>
          <div className="flex items-center gap-2">
            <button onClick={() => {setIsSearchOpen(true); setIsMenuOpen(false);}} className="text-white hover:text-amber-400 bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white bg-white/10 hover:bg-rose-500 transition-colors duration-300 p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>

        {/* Kaydırılabilir Menü İçeriği */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scroll">
          
          {/* MOBİL İÇİN DİL & PARA BİRİMİ VE LOCAL GUIDE */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <select value={dil} onChange={(e) => setDil(e.target.value)} className="bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-xl block w-full p-3 outline-none focus:border-amber-500">
              <option value="en" className="bg-slate-900">🇬🇧 English</option>
              <option value="tr" className="bg-slate-900">🇹🇷 Türkçe</option>
              <option value="es" className="bg-slate-900">🇪🇸 Español</option>
            </select>
            <select value={paraBirimi} onChange={(e) => setParaBirimi(e.target.value)} className="bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-xl block w-full p-3 outline-none focus:border-amber-500">
              <option value="EUR" className="bg-slate-900">€ EUR</option>
              <option value="USD" className="bg-slate-900">$ USD</option>
              <option value="GBP" className="bg-slate-900">£ GBP</option>
              <option value="TRY" className="bg-slate-900">₺ TRY</option>
              <option value="AUD" className="bg-slate-900">A$ AUD</option>
            </select>
            <Link href="/local-guide" onClick={() => setIsMenuOpen(false)} className="col-span-2 relative flex items-center justify-between px-5 py-3.5 w-full rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.4)] group overflow-hidden transition-all duration-300">
              <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3 relative z-10">
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.121 14.121L19 5l-9.121 4.879L5 19l9.121-4.879z" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} /></svg>
                <span className="text-[13px] font-black tracking-widest uppercase mt-0.5">Local Guide</span>
              </div>
              <div className="bg-slate-900 px-2.5 py-1 rounded-lg text-amber-400 text-xs font-bold tracking-widest relative z-10 flex items-center gap-1">VIP ✨</div>
            </Link>
          </div>

          {/* AKORDİYON MENÜ (Kategoriler) */}
          <div className="space-y-1">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-4 text-base font-bold flex justify-between items-center hover:text-amber-500 transition-colors border-b border-white/5">
              <span className="flex items-center gap-3"><span className="text-xl opacity-80">🏠</span> Home</span>
            </Link>
            {menuKategorileri.map((kategori) => (
              <div key={kategori.id} className="border-b border-white/5">
                <button onClick={() => toggleCategory(kategori.id)} className="w-full text-left py-4 text-base font-bold flex justify-between items-center hover:text-amber-500 transition-colors">
                  <span className="flex items-center gap-3"><span className="text-xl opacity-80">{kategori.icon}</span> {kategori.title}</span>
                  <span className={`text-xl transition-transform duration-300 ${expandedCategory === kategori.id ? "rotate-45 text-amber-500" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCategory === kategori.id ? 'max-h-[1200px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-10 space-y-3 flex flex-col border-l-2 border-white/10 ml-2">
                    {kategori.items.map((item, index) => (
                      <Link key={index} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-slate-400 text-sm font-medium hover:text-amber-400 transition-colors block pl-4 relative before:content-[''] before:absolute before:left-[-2px] before:top-1/2 before:-translate-y-1/2 before:w-0.5 before:h-0 before:bg-amber-500 hover:before:h-full before:transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-white/10 my-4"></div>

          {/* SATIŞ BAĞLANTILARI (Premium Kutular) */}
          <div className="space-y-3">
            <Link href="/last-minute" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 bg-gradient-to-r from-rose-500/10 to-transparent border border-rose-500/20 p-4 rounded-2xl hover:bg-rose-500/20 transition-all group">
              <span className="text-2xl animate-pulse">🚨</span>
              <div>
                <h4 className="text-rose-400 font-black text-sm uppercase tracking-widest group-hover:text-rose-300">Last Minute Deals</h4>
                <p className="text-rose-500/70 text-[10px] font-medium mt-0.5">Grab your discounted flight!</p>
              </div>
            </Link>
            <Link href="/itineraries" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🗺️</span>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest group-hover:text-amber-400 transition-colors">Ready Travel Plans</h4>
                <p className="text-slate-400 text-[10px] font-medium mt-0.5">Stress-free curated itineraries</p>
              </div>
            </Link>
            <Link href="/packages" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">✨</span>
              <div>
                <h4 className="text-white font-black text-sm uppercase tracking-widest group-hover:text-amber-400 transition-colors">Premium Packages</h4>
                <p className="text-slate-400 text-[10px] font-medium mt-0.5">VIP cave hotels & private flights</p>
              </div>
            </Link>
            <Link href="/tailor-made" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 p-4 rounded-2xl hover:bg-amber-500/30 transition-all group">
              <span className="text-2xl group-hover:scale-110 transition-transform">🛠️</span>
              <div>
                <h4 className="text-amber-400 font-black text-sm uppercase tracking-widest group-hover:text-amber-300">Tailor-Made VIP Itinerary</h4>
                <p className="text-amber-500/70 text-[10px] font-medium mt-0.5">Design your own dream trip</p>
              </div>
            </Link>
          </div>

          <div className="w-full h-px bg-white/10 my-4"></div>

          {/* ALT BAŞLIKLAR */}
          <div className="grid grid-cols-2 gap-y-4 px-2 pb-6">
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:text-amber-400 transition-colors">About Us</Link>
            <a href="https://instagram.com/cappaviva" target="_blank" className="text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:text-amber-400 transition-colors">Instagram</a>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:text-amber-400 transition-colors">Blog & Guide</Link>
            <Link href="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:text-amber-400 transition-colors">Privacy Policy</Link>
          </div>
          
        </div>

        {/* MENÜ EN ALTI: WHATSAPP VE BOOK NOW BUTONLARI */}
        <div className="p-6 border-t border-white/10 bg-black/40 mt-auto shrink-0">
          <div className="grid grid-cols-2 gap-4">
            <a href="https://wa.me/905354322782" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/50 py-3.5 rounded-xl font-black text-[11px] tracking-widest uppercase transition-all hover:bg-[#25D366] hover:text-slate-900 shadow-[0_0_10px_rgba(37,211,102,0.2)]">
              WhatsApp
            </a>
            <Link href="/book" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 py-3.5 rounded-xl font-black text-[11px] tracking-widest uppercase transition-all shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.6)]">
              Book Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}