"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// SİTENİN HAFIZASI
import { useSite } from "../app/context/SiteContext";

// GÜNCELLENMİŞ KATEGORİ LİSTESİ (Love Valley Panorama linki düzeltildi)
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
      { name: "Mustafapaşa (Sinasos)", href: "/destinations/mustafapasa" }, 
      { name: "Nevşehir", href: "/destinations/nevsehir" }, 
      { name: "Derinkuyu", href: "/destinations/derinkuyu" }, 
      { name: "Kaymaklı", href: "/destinations/kaymakli" }, 
      { name: "Güzelyurt", href: "/destinations/guzelyurt" }, 
      { name: "Ihlara Vadisi Bölgesi", href: "/destinations/ihlara" }
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
      { name: "Photoshooting Tour", href: "/tours/photoshooting" }, 
      { name: "Whirling Dervish Ceremony", href: "/tours/sema" }, 
      { name: "Türk Gecesi", href: "/tours/turkish-night" }, 
      { name: "Turkish Bath (Hamam)", href: "/tours/hamam" }, 
      { name: "Pottery Workshop", href: "/tours/pottery" }, 
      { name: "Cooking Class", href: "/tours/cooking-class" }, 
      { name: "Özel Masaj", href: "/tours/massage" }
    ]
  },
  {
    id: "daily-tours", title: "Daily Tours", icon: "🚐",
    items: [
      { name: "Red Tour (Kırmızı Tur)", href: "/tours/red-tour" }, 
      { name: "Green Tour (Yeşil Tur)", href: "/tours/green-tour" }, 
      { name: "Cappadocia Mix Tour", href: "/tours/mix-tour" }, 
      { name: "Pottery Workshop Tour", href: "/tours/pottery-tour" }, 
      { name: "Özel (Private) Turlar", href: "/tours/private-tours" }
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
      { name: "Bağlıdere Vadisi", href: "/valleys/baglidere" }, 
      { name: "Gomeda Vadisi", href: "/valleys/gomeda" }, 
      { name: "Soğanlı Vadisi", href: "/valleys/soganli" }, 
      { name: "Ihlara Vadisi", href: "/valleys/ihlara" }, 
      { name: "Uzengi Vadisi", href: "/valleys/uzengi" }, 
      { name: "Pancarlık Vadisi", href: "/valleys/pancarlik" }, 
      { name: "Aşk Vadisi (Panorama)", href: "/valleys/love-valley-2" }, 
      { name: "Çat Vadisi", href: "/valleys/cat-valley" }, 
      { name: "Güllüdere Vadisi", href: "/valleys/gulludere" }, 
      { name: "Kızılçukur Vadisi", href: "/valleys/kizilcukur" }
    ]
  },
  {
    id: "museums", title: "Museums", icon: "🏛️",
    items: [
      { name: "Göreme Açık Hava Müzesi", href: "/museums/goreme" }, 
      { name: "Zelve Açık Hava Müzesi", href: "/museums/zelve" }, 
      { name: "Karanlık Kilise", href: "/museums/karanlik-kilise" }, 
      { name: "Tokalı Kilise", href: "/museums/tokali-kilise" }, 
      { name: "El Nazar Kilisesi", href: "/museums/el-nazar" }, 
      { name: "Çarıklı Kilise", href: "/museums/carikli" }, 
      { name: "Aziz Barbara Kilisesi", href: "/museums/aziz-barbara" }, 
      { name: "Nevşehir Müzesi", href: "/museums/nevsehir" }, 
      { name: "Güray Müze (Yer Altı Seramik)", href: "/museums/guray" }, 
      { name: "Hacıbektaş Müzesi", href: "/museums/hacibektas" }, 
      { name: "Saç Müzesi (Chez Galip)", href: "/museums/hair-museum" }, 
      { name: "Kapadokya Sanat ve Tarih Müzesi", href: "/museums/art-history" }, 
      { name: "Açık Saray Ören Yeri", href: "/museums/acik-saray" }, 
      { name: "Selime Manastırı", href: "/museums/selime" }, 
      { name: "Sobesos Antik Kenti ve Mozaik Alanı", href: "/museums/sobesos" }
    ]
  },
  {
    id: "churches", title: "Churches", icon: "⛪",
    items: [
      { name: "Karanlık Kilise", href: "/churches/karanlik" }, 
      { name: "Tokalı Kilise", href: "/churches/tokali" }, 
      { name: "Elmalı Kilise", href: "/churches/elmali" }, 
      { name: "Yılanlı Kilise", href: "/churches/yilanli" }, 
      { name: "Çarıklı Kilise", href: "/churches/carikli" }, 
      { name: "Aziz Barbara Kilisesi", href: "/churches/aziz-barbara" }, 
      { name: "El Nazar Kilisesi", href: "/churches/el-nazar" }, 
      { name: "Saklı Kilise", href: "/churches/sakli" }, 
      { name: "Aynalı Kilise", href: "/churches/aynali" }, 
      { name: "Vaftizci Yahya Kilisesi", href: "/churches/vaftizci-yahya" }, 
      { name: "Meryem Ana Kilisesi", href: "/churches/meryem-ana" }, 
      { name: "Haçlı Kilise", href: "/churches/hacli" }, 
      { name: "Üzümlü Kilise", href: "/churches/uzumlu" }, 
      { name: "Direkli Kilise", href: "/churches/direkli" }, 
      { name: "Güllüdere Kiliseleri", href: "/churches/gulludere" }, 
      { name: "Çavuşin Vaftizci Yahya", href: "/churches/cavusin-vaftizci" }, 
      { name: "Selime Katedrali", href: "/churches/selime" }, 
      { name: "Ağaçaltı Kilisesi", href: "/churches/agacalti" }, 
      { name: "Kokar Kilise", href: "/churches/kokar" }, 
      { name: "Sümbüllü Kilise", href: "/churches/sumbullu" }, 
      { name: "Karagedik Kilisesi", href: "/churches/karagedik" }, 
      { name: "Bahattin Samanlığı Kilisesi", href: "/churches/bahattin" }, 
      { name: "Aziz Eustathios Kilisesi", href: "/churches/eustathios" }, 
      { name: "Aziz Basil Şapeli", href: "/churches/basil" }, 
      { name: "Aziz Onuphrius Kilisesi", href: "/churches/onuphrius" }
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { dil, setDil, paraBirimi, setParaBirimi } = useSite();

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🌟 HAREKET VE KAYMA (SLIDE & DANCE) ANİMASYONLARI */}
      <style dangerouslySetInnerHTML={{__html: `
        .dance-item {
          opacity: 0;
          transform: translateX(-20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .group:hover .dance-item {
          opacity: 1;
          transform: translateX(0);
        }
        .group\\/item:hover .hover-slide {
          transform: translateX(8px);
        }
        .hide-scroll::-webkit-scrollbar { display: none !important; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${scrolled ? 'bg-slate-900/95 backdrop-blur-lg border-white/10 shadow-xl h-16 md:h-20' : 'bg-gradient-to-b from-slate-900/80 to-transparent border-transparent h-20 md:h-24'}`}>
        <div className="w-full px-4 md:px-8 h-full flex justify-between items-center max-w-[1600px] mx-auto">
          
          {/* ========================================= */}
          {/* 📱 MOBİL GÖRÜNÜM */}
          {/* ========================================= */}
          <div className="flex xl:hidden w-full justify-between items-center h-full">
            <Link href="/" className="text-[22px] font-black tracking-widest uppercase">
              <span className="text-white drop-shadow-md">Cappa</span><span className="text-amber-500 drop-shadow-md">Viva</span>
            </Link>
            
            <div className="flex items-center gap-3">
              <button onClick={() => setIsSearchOpen(true)} className="text-white hover:text-amber-400 transition-colors p-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button onClick={() => setIsMenuOpen(true)} className="text-white hover:text-amber-400 transition-colors p-1">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
            </div>
          </div>

          {/* ========================================= */}
          {/* 💻 MASAÜSTÜ GÖRÜNÜM (SOLA DAYALI LÜKS MENÜ) */}
          {/* ========================================= */}
          <div className="hidden xl:flex items-center h-full w-full justify-between">
            
            {/* Marka ve Işıklı Butonlu Menüler */}
            <div className="flex items-center h-full gap-4 2xl:gap-6">
              <Link href="/" className="text-3xl font-black tracking-wide shrink-0 mr-4">
                <span className="text-white drop-shadow-md">Cappa</span><span className="text-amber-500 drop-shadow-md">Viva</span>
              </Link>

              {/* Sola Yaslı Navigasyon */}
              <nav className="flex items-center h-full gap-1">
                
                {/* 1. Home */}
                <div className="relative group h-full flex items-center px-1">
                  <Link href="/" className="relative z-10 flex items-center px-4 py-2 rounded-full border border-transparent hover:bg-amber-500/10 hover:border-amber-500/30 text-white font-extrabold text-[11px] 2xl:text-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    Home
                  </Link>
                </div>

                {/* 2. Tours */}
                <div className="relative group h-full flex items-center px-1">
                  <Link href="/tours" className="relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full border border-transparent hover:bg-amber-500/10 hover:border-amber-500/30 text-white font-extrabold text-[11px] 2xl:text-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    Tours
                    <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </Link>
                  <div className="absolute top-[80%] left-0 w-64 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 -translate-x-4 group-hover:translate-x-0 flex flex-col overflow-hidden">
                    <div className="max-h-[50vh] overflow-y-auto hide-scroll flex flex-col">
                      {[
                        { name: "Red Tour", href: "/tours/red-tour" }, { name: "Green Tour", href: "/tours/green-tour" }, { name: "ATV Safari", href: "/tours/atv" },
                        { name: "Jeep Safari", href: "/tours/jeep-safari" }, { name: "Classic Car", href: "/tours/classic-car" }, { name: "Turkish Night", href: "/tours/turkish-night" }
                      ].map((item, i) => (
                        <Link key={i} href={item.href} style={{ transitionDelay: `${i * 40}ms` }} className="dance-item group/item relative flex items-center px-4 py-2.5 text-sm font-bold text-gray-200 hover:text-amber-400 hover:bg-white/10 rounded-xl transition-colors shrink-0">
                          <span className="absolute left-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-amber-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                          </span>
                          <span className="hover-slide transition-transform duration-300 group-hover/item:translate-x-5">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 shrink-0">
                      <Link href="/tours" className="block w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] rounded-xl font-black text-[11px] text-center uppercase tracking-[0.2em] transition-all">
                        View All Tours
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 3. Destinations */}
                <div className="relative group h-full flex items-center px-1">
                  <Link href="/destinations" className="relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full border border-transparent hover:bg-amber-500/10 hover:border-amber-500/30 text-white font-extrabold text-[11px] 2xl:text-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    Destinations
                    <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </Link>
                  <div className="absolute top-[80%] left-0 w-60 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 -translate-x-4 group-hover:translate-x-0 flex flex-col overflow-hidden">
                    <div className="max-h-[50vh] overflow-y-auto hide-scroll flex flex-col">
                      {[
                        { name: "Göreme", href: "/destinations/goreme" }, { name: "Uçhisar", href: "/destinations/uchisar" }, { name: "Ürgüp", href: "/destinations/urgup" },
                        { name: "Avanos", href: "/destinations/avanos" }, { name: "Ihlara Valley", href: "/destinations/ihlara" }
                      ].map((item, i) => (
                        <Link key={i} href={item.href} style={{ transitionDelay: `${i * 40}ms` }} className="dance-item group/item relative flex items-center px-4 py-2.5 text-sm font-bold text-gray-200 hover:text-amber-400 hover:bg-white/10 rounded-xl transition-colors shrink-0">
                          <span className="absolute left-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-amber-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                          </span>
                          <span className="hover-slide transition-transform duration-300 group-hover/item:translate-x-5">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 shrink-0">
                      <Link href="/destinations" className="block w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] rounded-xl font-black text-[11px] text-center uppercase tracking-[0.2em] transition-all">
                        View All Destinations
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 4. Balloon */}
                <div className="relative group h-full flex items-center px-1">
                  <Link href="/tours/balloon" className="relative z-10 flex items-center gap-1.5 px-4 py-2 rounded-full border border-transparent hover:bg-amber-500/10 hover:border-amber-500/30 text-white font-extrabold text-[11px] 2xl:text-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    Balloon
                    <svg className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                  </Link>
                  <div className="absolute top-[80%] left-0 w-60 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 -translate-x-4 group-hover:translate-x-0 flex flex-col overflow-hidden">
                    <div className="max-h-[50vh] overflow-y-auto hide-scroll flex flex-col">
                      {[
                        { name: "Standard Flight", href: "/tours/balloon-standard" }, { name: "Comfort Flight", href: "/tours/balloon-comfort" }, { name: "Private VIP Flight", href: "/tours/balloon-private" }
                      ].map((item, i) => (
                        <Link key={i} href={item.href} style={{ transitionDelay: `${i * 40}ms` }} className="dance-item group/item relative flex items-center px-4 py-2.5 text-sm font-bold text-gray-200 hover:text-amber-400 hover:bg-white/10 rounded-xl transition-colors shrink-0">
                          <span className="absolute left-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 text-amber-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                          </span>
                          <span className="hover-slide transition-transform duration-300 group-hover/item:translate-x-5">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 shrink-0">
                      <Link href="/tours/balloon" className="block w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] rounded-xl font-black text-[11px] text-center uppercase tracking-[0.2em] transition-all">
                        View All Flights
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 5. About Us */}
                <div className="relative group h-full flex items-center px-1">
                  <Link href="/about" className="relative z-10 flex items-center px-4 py-2 rounded-full border border-transparent hover:bg-amber-500/10 hover:border-amber-500/30 text-white font-extrabold text-[11px] 2xl:text-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    About Us
                  </Link>
                </div>

                {/* 6. Contact */}
                <div className="relative group h-full flex items-center px-1">
                  <Link href="/contact" className="relative z-10 flex items-center px-4 py-2 rounded-full border border-transparent hover:bg-amber-500/10 hover:border-amber-500/30 text-white font-extrabold text-[11px] 2xl:text-[12px] tracking-[0.1em] uppercase transition-all duration-300 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                    Contact
                  </Link>
                </div>
              </nav>
            </div>

            {/* SAĞ KISIM: Arama, Ayarlar, Local Guide */}
            <div className="flex items-center gap-2 2xl:gap-3 shrink-0">
              
              <button onClick={() => setIsSearchOpen(true)} className="text-white hover:text-amber-400 hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.8)] transition-all p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>

              {/* BİRLEŞİK DİL & PARA BİRİMİ KUTUSU (5 Para, 3 Dil) */}
              <div className="relative">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === 'settings' ? null : 'settings')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all text-white text-[11px] font-extrabold tracking-wide uppercase drop-shadow-md"
                >
                  <span className="text-sm leading-none mr-0.5">{dil === "en" ? "🇬🇧" : dil === "tr" ? "🇹🇷" : "🇪🇸"}</span>
                  {dil} <span className="text-white/40 mx-0.5">|</span> {paraBirimi === "EUR" ? "€" : paraBirimi === "USD" ? "$" : paraBirimi === "GBP" ? "£" : paraBirimi === "TRY" ? "₺" : "A$"}
                  <svg className={`w-3 h-3 ml-0.5 transition-transform duration-300 ${openDropdown === 'settings' ? 'rotate-180 text-amber-500' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <div className={`absolute top-full right-0 mt-3 w-52 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl py-3 overflow-hidden transition-all duration-300 origin-top-right flex flex-col ${openDropdown === 'settings' ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                  {/* Diller */}
                  <div className="px-4 pb-3 mb-3 border-b border-white/10">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-2">Language</span>
                    <div className="space-y-1">
                      <button onClick={() => {setDil("en"); setOpenDropdown(null)}} className={`w-full text-left px-3 py-2 hover:bg-white/10 rounded-xl transition flex items-center gap-3 text-sm font-bold ${dil === 'en' ? 'text-amber-400 bg-white/5' : 'text-slate-300'}`}>🇬🇧 English</button>
                      <button onClick={() => {setDil("tr"); setOpenDropdown(null)}} className={`w-full text-left px-3 py-2 hover:bg-white/10 rounded-xl transition flex items-center gap-3 text-sm font-bold ${dil === 'tr' ? 'text-amber-400 bg-white/5' : 'text-slate-300'}`}>🇹🇷 Türkçe</button>
                      <button onClick={() => {setDil("es"); setOpenDropdown(null)}} className={`w-full text-left px-3 py-2 hover:bg-white/10 rounded-xl transition flex items-center gap-3 text-sm font-bold ${dil === 'es' ? 'text-amber-400 bg-white/5' : 'text-slate-300'}`}>🇪🇸 Español</button>
                    </div>
                  </div>
                  {/* Para Birimleri (5 Adet) */}
                  <div className="px-4">
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-2">Currency</span>
                    <div className="grid grid-cols-2 gap-1.5">
                       <button onClick={() => {setParaBirimi("EUR"); setOpenDropdown(null)}} className={`w-full text-center py-2 rounded-xl transition text-xs font-bold ${paraBirimi === 'EUR' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>€ EUR</button>
                       <button onClick={() => {setParaBirimi("USD"); setOpenDropdown(null)}} className={`w-full text-center py-2 rounded-xl transition text-xs font-bold ${paraBirimi === 'USD' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>$ USD</button>
                       <button onClick={() => {setParaBirimi("GBP"); setOpenDropdown(null)}} className={`w-full text-center py-2 rounded-xl transition text-xs font-bold ${paraBirimi === 'GBP' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>£ GBP</button>
                       <button onClick={() => {setParaBirimi("TRY"); setOpenDropdown(null)}} className={`w-full text-center py-2 rounded-xl transition text-xs font-bold ${paraBirimi === 'TRY' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>₺ TRY</button>
                       <button onClick={() => {setParaBirimi("AUD"); setOpenDropdown(null)}} className={`w-full text-center py-2 rounded-xl transition text-xs font-bold col-span-2 ${paraBirimi === 'AUD' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>A$ AUD</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* LOCAL GUIDE BUTONU */}
              <Link href="/local-guide" className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-slate-900 px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all group cursor-pointer hover:-translate-y-0.5 ml-2">
                <svg className="w-4 h-4 text-slate-900 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 5l-9.121 4.879L5 19l9.121-4.879z" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} /></svg>
                <span className="text-[11px] font-black tracking-widest uppercase">Local Guide</span>
              </Link>

              {/* Masaüstü Menü İkonu */}
              <button onClick={() => setIsMenuOpen(true)} className="text-white hover:text-amber-400 transition-colors p-2 flex items-center gap-2 group drop-shadow-md ml-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* ========================================= */}
      {/* 🌟 ULTRA PREMIUM FULL-SCREEN SEARCH */}
      {/* ========================================= */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-3xl flex flex-col justify-start px-6 pt-24 md:pt-32"
          >
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white bg-white/10 hover:bg-rose-500 p-3 rounded-full transition-all duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="max-w-4xl mx-auto w-full">
              <div className="relative border-b border-white/20 pb-4 mb-10">
                <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" placeholder="Search tours, valleys, hotels..." className="w-full bg-transparent pl-14 pr-4 text-white text-3xl md:text-5xl font-light outline-none placeholder-white/20" autoFocus />
              </div>

              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span> Popular Searches
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Hot Air Balloon', 'Red Tour', 'ATV Sunset Safari', 'Underground City', 'Cave Hotels', 'Airport VIP Transfer'].map((term) => (
                    <span key={term} onClick={() => setIsSearchOpen(false)} className="px-5 py-2.5 bg-white/5 hover:bg-amber-500 hover:text-slate-900 text-white text-sm font-medium rounded-full cursor-pointer transition-all duration-300 border border-white/10 hover:border-transparent shadow-sm">
                      {term}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* 🌟 ŞEFFAF SAĞ AÇILIR MENÜ (SÜPER ÖTESİ SATIŞ DÜZENİ) */}
      {/* ========================================= */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`absolute top-0 right-0 h-full w-[85vw] sm:w-[450px] bg-[#0a0f18]/95 backdrop-blur-3xl text-white flex flex-col transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"} border-l border-white/10 shadow-2xl`}>
          
          {/* Üst Kısım: CappaViva, Arama ve Kapat Butonu */}
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

          <div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scroll">
            
            {/* SADECE MOBİL İÇİN DİL, PARA & LOCAL GUIDE KUTUSU */}
            <div className="xl:hidden grid grid-cols-2 gap-3 mb-4">
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

            {/* AKORDİYON MENÜ (Sırayla tüm kategoriler) */}
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

            {/* SÜPER ÖTESİ SATIŞ BAĞLANTILARI KUTUSU */}
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

            {/* ALT BAŞLIKLAR (Küçük Linkler) */}
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
    </>
  );
}