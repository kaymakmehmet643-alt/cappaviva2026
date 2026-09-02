"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// SİTENİN HAFIZASI
import { useSite } from "../app/context/SiteContext";

// MOBİL İÇİN KULLANILAN ORİJİNAL LİSTE
const menuKategorileri = [
  {
    id: "destinations", title: "Destinations", icon: "🌍",
    items: [
      { name: "Göreme", href: "/destinations/goreme" }, { name: "Uçhisar", href: "/destinations/uchisar" }, { name: "Ürgüp", href: "/destinations/urgup" }, { name: "Avanos", href: "/destinations/avanos" }, { name: "Ortahisar", href: "/destinations/ortahisar" }, { name: "Çavuşin", href: "/destinations/cavusin" }, { name: "Mustafapaşa (Sinasos)", href: "/destinations/mustafapasa" }, { name: "Nevşehir", href: "/destinations/nevsehir" }, { name: "Derinkuyu", href: "/destinations/derinkuyu" }, { name: "Kaymaklı", href: "/destinations/kaymakli" }, { name: "Güzelyurt", href: "/destinations/guzelyurt" }, { name: "Ihlara Vadisi Bölgesi", href: "/destinations/ihlara" }
    ]
  },
  {
    id: "tours-activities", title: "Tours & Activities", icon: "🎈",
    items: [
      { name: "Balon Turları", href: "/tours/balloon" }, { name: "ATV Turları", href: "/tours/atv" }, { name: "At Turları", href: "/tours/horse" }, { name: "Jeep Safari Turları", href: "/tours/jeep-safari" }, { name: "Camel Tur", href: "/tours/camel" }, { name: "Classic Car Tur", href: "/tours/classic-car" }, { name: "Photoshooting Tour", href: "/tours/photoshooting" }, { name: "Whirling Dervish Ceremony (Sema)", href: "/tours/sema" }, { name: "Türk Gecesi (Turkish Night)", href: "/tours/turkish-night" }, { name: "Turkish Bath (Hamam)", href: "/tours/hamam" }, { name: "Pottery Workshop", href: "/tours/pottery" }, { name: "Cooking Class", href: "/tours/cooking-class" }, { name: "Özel Masaj", href: "/tours/massage" }
    ]
  },
  {
    id: "daily-tours", title: "Günlük Kapadokya Turları", icon: "🚐",
    items: [
      { name: "Red Tour (Kırmızı Tur)", href: "/tours/red-tour" }, { name: "Green Tour (Yeşil Tur)", href: "/tours/green-tour" }, { name: "Cappadocia Mix Tour", href: "/tours/mix-tour" }, { name: "Pottery Workshop Tour", href: "/tours/pottery-tour" }, { name: "Özel (Private) Turlar", href: "/tours/private-tours" }
    ]
  },
  {
    id: "valleys", title: "Vadiler", icon: "⛰️",
    items: [
      { name: "Aşk Vadisi (Love Valley)", href: "/valleys/love-valley" }, { name: "Gül Vadisi (Rose Valley)", href: "/valleys/rose-valley" }, { name: "Kızıl Vadi (Red Valley)", href: "/valleys/red-valley" }, { name: "Güvercinlik Vadisi (Pigeon Valley)", href: "/valleys/pigeon-valley" }, { name: "Devrent Vadisi (Imagination Valley)", href: "/valleys/devrent" }, { name: "Paşabağ Vadisi (Monks Valley)", href: "/valleys/pasabag" }, { name: "Zemi Vadisi", href: "/valleys/zemi" }, { name: "Meskendir Vadisi", href: "/valleys/meskendir" }, { name: "Kılıçlar Vadisi (Sword Valley)", href: "/valleys/kiliclar" }, { name: "Beyaz Vadi (White Valley)", href: "/valleys/white-valley" }, { name: "Bağlıdere Vadisi", href: "/valleys/baglidere" }, { name: "Gomeda Vadisi", href: "/valleys/gomeda" }, { name: "Soğanlı Vadisi", href: "/valleys/soganli" }, { name: "Ihlara Vadisi", href: "/valleys/ihlara" }, { name: "Uzengi Vadisi", href: "/valleys/uzengi" }, { name: "Pancarlık Vadisi", href: "/valleys/pancarlik" }, { name: "Aşk Vadisi 2 (Love Valley Panorama)", href: "/valleys/love-valley-2" }, { name: "Çat Vadisi", href: "/valleys/cat-valley" }, { name: "Güllüdere Vadisi", href: "/valleys/gulludere" }, { name: "Kızılçukur Vadisi (Red Valley Sunset Point)", href: "/valleys/kizilcukur" }
    ]
  },
  {
    id: "museums", title: "Müzeler", icon: "🏛️",
    items: [
      { name: "Göreme Açık Hava Mü Müzesi", href: "/museums/goreme" }, { name: "Zelve Açık Hava Müzesi", href: "/museums/zelve" }, { name: "Karanlık Kilise", href: "/museums/karanlik-kilise" }, { name: "Tokalı Kilise", href: "/museums/tokali-kilise" }, { name: "El Nazar Kilisesi", href: "/museums/el-nazar" }, { name: "Çarıklı Kilise", href: "/museums/carikli" }, { name: "Aziz Barbara Kilisesi", href: "/museums/aziz-barbara" }, { name: "Nevşehir Müzesi", href: "/museums/nevsehir" }, { name: "Güray Müze (Yer Altı Seramik)", href: "/museums/guray" }, { name: "Hacıbektaş Müzesi", href: "/museums/hacibektas" }, { name: "Saç Müzesi (Chez Galip)", href: "/museums/hair-museum" }, { name: "Kapadokya Sanat ve Tarih Müzesi", href: "/museums/art-history" }, { name: "Açık Saray Ören Yeri", href: "/museums/acik-saray" }, { name: "Selime Manastırı", href: "/museums/selime" }, { name: "Sobesos Antik Kenti ve Mozaik Alanı", href: "/museums/sobesos" }
    ]
  },
  {
    id: "churches", title: "Kiliseler", icon: "⛪",
    items: [
      { name: "Karanlık Kilise", href: "/churches/karanlik" }, { name: "Tokalı Kilise", href: "/churches/tokali" }, { name: "Elmalı Kilise", href: "/churches/elmali" }, { name: "Yılanlı Kilise", href: "/churches/yilanli" }, { name: "Çarıklı Kilise", href: "/churches/carikli" }, { name: "Aziz Barbara Kilisesi", href: "/churches/aziz-barbara" }, { name: "El Nazar Kilisesi", href: "/churches/el-nazar" }, { name: "Saklı Kilise", href: "/churches/sakli" }, { name: "Aynalı Kilise", href: "/churches/aynali" }, { name: "Vaftizci Yahya Kilisesi", href: "/churches/vaftizci-yahya" }, { name: "Meryem Ana Kilisesi", href: "/churches/meryem-ana" }, { name: "Haçlı Kilise", href: "/churches/hacli" }, { name: "Üzümlü Kilise", href: "/churches/uzumlu" }, { name: "Direkli Kilise", href: "/churches/direkli" }, { name: "Güllüdere Kiliseleri", href: "/churches/gulludere" }, { name: "Çavuşin Vaftizci Yahya Kilisesi", href: "/churches/cavusin-vaftizci" }, { name: "Selime Katedrali", href: "/churches/selime" }, { name: "Ağaçaltı Kilisesi", href: "/churches/agacalti" }, { name: "Kokar Kilise", href: "/churches/kokar" }, { name: "Sümbüllü Kilise", href: "/churches/sumbullu" }, { name: "Karagedik Kilisesi", href: "/churches/karagedik" }, { name: "Bahattin Samanlığı Kilisesi", href: "/churches/bahattin" }, { name: "Aziz Eustathios Kilisesi", href: "/churches/eustathios" }, { name: "Aziz Basil Şapeli", href: "/churches/basil" }, { name: "Aziz Onuphrius Kilisesi", href: "/churches/onuphrius" }
    ]
  },
  {
    id: "airport-transfer", title: "Airport Transfer", icon: "✈️",
    items: [
      { name: "7/24 Transfer Hizmeti", href: "/transfer/24-7" }, { name: "Özel Havalimanı Transferi", href: "/transfer/private" }, { name: "Paylaşımlı (Shuttle) Transfer", href: "/transfer/shuttle" }, { name: "VIP Transfer", href: "/transfer/vip" }, { name: "Şehirler Arası Transfer", href: "/transfer/intercity" }
    ]
  }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<"lang" | "curr" | null>(null);

  // BEYİNDEN GELEN VERİLER
  const { dil, setDil, paraBirimi, setParaBirimi } = useSite();

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-white/10 h-16 md:h-20">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 h-full flex justify-between items-center">
          
          <div className="flex items-center gap-6 lg:gap-10 h-full">
            
            {/* 1. MOBİL GÖRÜNÜM: Logo ve Yazı Birlikte */}
            <Link href="/" className="flex md:hidden items-center gap-2 flex-shrink-0">
              <div className="relative w-9 h-9 flex-shrink-0">
                <Image src="/logo.png" alt="CappaViva Logo" fill className="object-contain" unoptimized priority />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-white">Cappa</span>
                <span className="text-yellow-500">Viva</span>
              </div>
            </Link>

            {/* 2. MASAÜSTÜ GÖRÜNÜM: Sadece Yazı */}
            <div className="hidden md:flex items-center h-full">
              <Link href="/" className="text-3xl font-bold flex-shrink-0 tracking-wide mr-4">
                <span className="text-white">Cappa</span>
                <span className="text-yellow-500">Viva</span>
              </Link>

              {/* MASAÜSTÜ LİNKLERİ VE AÇILIR MENÜLERİ (Ultra Animasyonlu) */}
              <nav className="hidden lg:flex items-center h-full gap-2 xl:gap-4">
                
                {/* HOME */}
                <div className="relative group h-full flex items-center px-3">
                  <Link href="/" className="relative z-10 text-gray-200 font-bold text-[13px] tracking-[0.15em] uppercase group-hover:text-yellow-400 transition-colors duration-300">
                    Home
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
                  </Link>
                </div>

                {/* TOURS & DROPDOWN */}
                <div className="relative group h-full flex items-center px-3">
                  <Link href="/tours" className="relative z-10 text-gray-200 font-bold text-[13px] tracking-[0.15em] uppercase group-hover:text-yellow-400 transition-colors duration-300">
                    Tours
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
                  </Link>
                  <div className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-b-xl shadow-2xl pt-3 pb-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
                    <Link href="/tours/red-tour" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Red Tour</Link>
                    <Link href="/tours/green-tour" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Green Tour</Link>
                    <Link href="/tours/atv" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">ATV Safari</Link>
                    <Link href="/tours/horse" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Horse Riding</Link>
                    <Link href="/tours/classic-car" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Classic Car</Link>
                    {/* View All Button */}
                    <div className="border-t border-white/10 mt-2">
                      <Link href="/tours" className="block px-5 py-3 text-[11px] font-black text-yellow-500 hover:text-yellow-400 hover:bg-white/5 transition-colors text-center uppercase tracking-[0.2em]">
                        View All Tours &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

                {/* DESTINATIONS & DROPDOWN */}
                <div className="relative group h-full flex items-center px-3">
                  <Link href="/destinations" className="relative z-10 text-gray-200 font-bold text-[13px] tracking-[0.15em] uppercase group-hover:text-yellow-400 transition-colors duration-300">
                    Destinations
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
                  </Link>
                  <div className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-b-xl shadow-2xl pt-3 pb-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
                    <Link href="/destinations/goreme" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Göreme</Link>
                    <Link href="/destinations/uchisar" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Uçhisar</Link>
                    <Link href="/destinations/urgup" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Ürgüp</Link>
                    <Link href="/destinations/avanos" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Avanos</Link>
                    <Link href="/destinations/ihlara" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Ihlara Valley</Link>
                    {/* View All Button */}
                    <div className="border-t border-white/10 mt-2">
                      <Link href="/destinations" className="block px-5 py-3 text-[11px] font-black text-yellow-500 hover:text-yellow-400 hover:bg-white/5 transition-colors text-center uppercase tracking-[0.2em]">
                        View All Regions &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

                {/* TRANSFER & DROPDOWN */}
                <div className="relative group h-full flex items-center px-3">
                  <Link href="/transfer" className="relative z-10 text-gray-200 font-bold text-[13px] tracking-[0.15em] uppercase group-hover:text-yellow-400 transition-colors duration-300">
                    Transfer
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
                  </Link>
                  <div className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-b-xl shadow-2xl pt-3 pb-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
                    <Link href="/transfer/24-7" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">7/24 Airport Transfer</Link>
                    <Link href="/transfer/vip" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">VIP Transfer</Link>
                    <Link href="/transfer/shuttle" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Shuttle Bus</Link>
                    {/* View All Button */}
                    <div className="border-t border-white/10 mt-2">
                      <Link href="/transfer" className="block px-5 py-3 text-[11px] font-black text-yellow-500 hover:text-yellow-400 hover:bg-white/5 transition-colors text-center uppercase tracking-[0.2em]">
                        View All Transfers &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

                {/* BALLOON & DROPDOWN */}
                <div className="relative group h-full flex items-center px-3">
                  <Link href="/tours/balloon" className="relative z-10 text-gray-200 font-bold text-[13px] tracking-[0.15em] uppercase group-hover:text-yellow-400 transition-colors duration-300">
                    Balloon
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center"></span>
                  </Link>
                  <div className="absolute top-full left-0 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-b-xl shadow-2xl pt-3 pb-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col overflow-hidden">
                    <Link href="/tours/balloon-standard" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Standard Flight</Link>
                    <Link href="/tours/balloon-comfort" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Comfort Flight</Link>
                    <Link href="/tours/balloon-private" className="block px-5 py-2.5 text-sm text-gray-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">Private VIP Flight</Link>
                    {/* View All Button */}
                    <div className="border-t border-white/10 mt-2">
                      <Link href="/tours/balloon" className="block px-5 py-3 text-[11px] font-black text-yellow-500 hover:text-yellow-400 hover:bg-white/5 transition-colors text-center uppercase tracking-[0.2em]">
                        View All Flights &rarr;
                      </Link>
                    </div>
                  </div>
                </div>

              </nav>
            </div>
          </div>

          {/* SAĞ: Dil, Para, Local Guide ve Menü */}
          <div className="flex items-center justify-end relative z-50">
            
            <div className="hidden md:flex items-center gap-1 mr-4 relative z-50">
              
              {/* 1. MASAÜSTÜ DİL SEÇİCİ */}
              <div className="relative">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === 'lang' ? null : 'lang')}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all text-white text-sm font-bold tracking-wide uppercase"
                >
                  <span className="text-lg leading-none">{dil === "en" ? "🇬🇧" : dil === "tr" ? "🇹🇷" : "🇪🇸"}</span>
                  {dil}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === 'lang' ? 'rotate-180 text-yellow-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <div className={`absolute top-full left-0 mt-3 w-36 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden transition-all duration-300 origin-top-left ${openDropdown === 'lang' ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                  <button onClick={() => {setDil("en"); setOpenDropdown(null)}} className="w-full text-left px-4 py-2.5 hover:bg-white/10 hover:text-yellow-500 transition flex items-center gap-3 text-sm text-gray-200 font-medium"><span className="text-lg">🇬🇧</span> English</button>
                  <button onClick={() => {setDil("tr"); setOpenDropdown(null)}} className="w-full text-left px-4 py-2.5 hover:bg-white/10 hover:text-yellow-500 transition flex items-center gap-3 text-sm text-gray-200 font-medium"><span className="text-lg">🇹🇷</span> Türkçe</button>
                  <button onClick={() => {setDil("es"); setOpenDropdown(null)}} className="w-full text-left px-4 py-2.5 hover:bg-white/10 hover:text-yellow-500 transition flex items-center gap-3 text-sm text-gray-200 font-medium"><span className="text-lg">🇪🇸</span> Español</button>
                </div>
              </div>

              <div className="h-5 w-px bg-white/20 mx-1"></div>

              {/* 2. MASAÜSTÜ PARA BİRİMİ SEÇİCİ */}
              <div className="relative">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === 'curr' ? null : 'curr')}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all text-white text-sm font-bold tracking-wide"
                >
                  <span className="text-yellow-500 text-base">{paraBirimi === "EUR" ? "€" : paraBirimi === "USD" ? "$" : paraBirimi === "GBP" ? "£" : "₺"}</span>
                  {paraBirimi}
                  <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === 'curr' ? 'rotate-180 text-yellow-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                </button>
                
                <div className={`absolute top-full right-0 mt-3 w-28 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl py-2 overflow-hidden transition-all duration-300 origin-top-right ${openDropdown === 'curr' ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}`}>
                  <button onClick={() => {setParaBirimi("EUR"); setOpenDropdown(null)}} className="w-full text-left px-4 py-2.5 hover:bg-white/10 hover:text-yellow-500 transition flex items-center gap-3 text-sm text-gray-200 font-medium"><span className="text-yellow-500 font-bold text-base w-4 text-center">€</span> EUR</button>
                  <button onClick={() => {setParaBirimi("USD"); setOpenDropdown(null)}} className="w-full text-left px-4 py-2.5 hover:bg-white/10 hover:text-yellow-500 transition flex items-center gap-3 text-sm text-gray-200 font-medium"><span className="text-yellow-500 font-bold text-base w-4 text-center">$</span> USD</button>
                  <button onClick={() => {setParaBirimi("GBP"); setOpenDropdown(null)}} className="w-full text-left px-4 py-2.5 hover:bg-white/10 hover:text-yellow-500 transition flex items-center gap-3 text-sm text-gray-200 font-medium"><span className="text-yellow-500 font-bold text-base w-4 text-center">£</span> GBP</button>
                  <button onClick={() => {setParaBirimi("TRY"); setOpenDropdown(null)}} className="w-full text-left px-4 py-2.5 hover:bg-white/10 hover:text-yellow-500 transition flex items-center gap-3 text-sm text-gray-200 font-medium"><span className="text-yellow-500 font-bold text-base w-4 text-center">₺</span> TRY</button>
                </div>
              </div>
            </div>

            {/* Local Guide Linki */}
            <Link href="/local-guide" className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 transition-all text-white backdrop-blur-sm group mr-4 cursor-pointer">
              <svg className="w-5 h-5 text-yellow-500 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 5l-9.121 4.879L5 19l9.121-4.879z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v.01" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} /></svg>
              <span className="text-sm font-bold tracking-widest uppercase">Local Guide</span>
            </Link>

            {/* Menü Açma Butonu */}
            <button onClick={() => setIsMenuOpen(true)} className="text-white hover:text-yellow-500 transition-colors p-2 flex items-center gap-2 group">
              <span className="hidden md:block font-bold tracking-widest uppercase text-sm group-hover:text-yellow-500 transition-colors">Menu</span>
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================= */}
      {/* 2. ŞEFFAF SAĞ AÇILIR MENÜ (SABİT) */}
      {/* ========================================= */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-500 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        <div className={`absolute top-0 right-0 h-full w-[85vw] sm:w-[450px] bg-black/70 backdrop-blur-3xl text-white flex flex-col transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"} border-l border-white/10 shadow-2xl`}>
          
          <div className="p-5 md:p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" unoptimized />
              <div className="text-2xl font-bold tracking-wider">
                <span className="text-white">Cappa</span><span className="text-yellow-500">Viva</span>
              </div>
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-400 hover:text-yellow-500 transition-transform hover:rotate-90 duration-300 bg-white/10 p-2 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* MOBİL DİL & PARA BİRİMİ KONTROLÜ */}
          <div className="md:hidden p-5 border-b border-white/5 space-y-4 bg-black/40">
            <div className="grid grid-cols-2 gap-3">
              <select 
                value={dil} 
                onChange={(e) => setDil(e.target.value)}
                className="bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl block w-full p-3 outline-none focus:border-yellow-500 appearance-none shadow-inner"
              >
                <option value="en" className="bg-slate-900 text-white">🇬🇧 English</option>
                <option value="tr" className="bg-slate-900 text-white">🇹🇷 Türkçe</option>
                <option value="es" className="bg-slate-900 text-white">🇪🇸 Español</option>
              </select>

              <select 
                value={paraBirimi} 
                onChange={(e) => setParaBirimi(e.target.value)}
                className="bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl block w-full p-3 outline-none focus:border-yellow-500 appearance-none shadow-inner"
              >
                <option value="EUR" className="bg-slate-900 text-white">€ EUR</option>
                <option value="USD" className="bg-slate-900 text-white">$ USD</option>
                <option value="GBP" className="bg-slate-900 text-white">£ GBP</option>
                <option value="TRY" className="bg-slate-900 text-white">₺ TRY</option>
              </select>
            </div>
            
            <Link href="/local-guide" onClick={() => setIsMenuOpen(false)} className="relative flex items-center justify-between px-5 py-3.5 w-full rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] group overflow-hidden transition-all duration-300 active:scale-95">
              <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3 relative z-10">
                <svg className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 5l-9.121 4.879L5 19l9.121-4.879z" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
                </svg>
                <span className="text-[13px] font-black tracking-widest uppercase mt-0.5">Your Local Guide</span>
              </div>
              <div className="bg-black/80 px-2.5 py-1 rounded-lg text-yellow-400 text-xs font-bold tracking-widest relative z-10 shadow-inner flex items-center gap-1 border border-yellow-500/30">
                VIP <span className="text-sm">✨</span>
              </div>
            </Link>
          </div>
          
          <div className="flex-1 overflow-y-auto px-6 md:px-8 py-4 space-y-1 scrollbar-hide">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block py-2.5 text-lg font-medium border-b border-white/5 hover:text-yellow-500 transition-colors">Home</Link>
            
            {menuKategorileri.map((kategori) => (
              <div key={kategori.id} className="border-b border-white/5">
                <button 
                  onClick={() => toggleCategory(kategori.id)} 
                  className="w-full text-left py-2.5 text-lg font-medium flex justify-between items-center hover:text-yellow-500 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-sm">{kategori.icon}</span>
                    {kategori.title}
                  </span>
                  <span className={`text-xl transition-transform duration-300 ${expandedCategory === kategori.id ? "rotate-45 text-yellow-500" : ""}`}>+</span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedCategory === kategori.id ? 'max-h-[1200px] opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-8 pb-3 pt-1 space-y-3 text-gray-400 text-sm flex flex-col">
                    {kategori.items.map((item, index) => (
                      <Link key={index} href={item.href} onClick={() => setIsMenuOpen(false)} className="hover:text-yellow-500 transition-colors">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="py-2 border-b border-white/5 space-y-1 mt-4">
              <Link href="/last-minute" onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg font-medium text-red-400 hover:text-red-300 transition-colors flex items-center gap-2">
                <span className="animate-pulse">🚨</span> Last Minute Deals
              </Link>
              <Link href="/packages" onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg font-medium text-yellow-500 hover:text-white transition-colors">
                Premium Cappadocia Packages
              </Link>
              <Link href="/tailor-made" onClick={() => setIsMenuOpen(false)} className="block py-2 text-lg font-medium text-white hover:text-yellow-500 transition-colors flex items-center gap-2">
                ✨ Tailor-Made VIP Itinerary
              </Link>
            </div>

            <Link href="/gallery" onClick={() => setIsMenuOpen(false)} className="block py-2.5 text-lg font-medium border-b border-white/5 hover:text-yellow-500 transition-colors">Gallery</Link>
            
            <div className="py-4 border-b border-white/5">
              <Link href="/itineraries" onClick={() => setIsMenuOpen(false)} className="block bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-500 hover:bg-white/10 transition-all group">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl group-hover:scale-110 transition-transform">🗺️</span>
                  <span className="text-yellow-500 font-bold text-lg group-hover:text-yellow-400">Ready Itineraries</span>
                </div>
                <p className="text-gray-400 text-sm pl-9 leading-relaxed">
                  Günlük örnek Kapadokya gezi planlarına ve hazır rotalara göz atın.
                </p>
              </Link>
            </div>

            <div className="pt-6 pb-2 space-y-2">
              <span className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Essential Info</span>
              <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-400 hover:text-yellow-500">Blog & Guide</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-400 hover:text-yellow-500">Contact Us</Link>
              <Link href="/privacy-policy" onClick={() => setIsMenuOpen(false)} className="block text-sm text-gray-500 hover:text-yellow-500">Privacy Policy</Link>
            </div>
          </div>

          <div className="p-5 border-t border-white/10 bg-black/40">
            <div className="text-center mb-3 flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              <span className="text-[11px] font-medium text-gray-300 tracking-wide">Free Cancellation up to 24h &bull; No Hidden Fees</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <Link href="https://wa.me/905354322782" target="_blank" className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white py-3 rounded-xl font-bold text-sm transition-transform hover:-translate-y-1 shadow-lg">
                 WhatsApp
               </Link>
               <Link href="/book" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black py-3 rounded-xl font-bold text-sm transition-transform hover:-translate-y-1 shadow-lg shadow-yellow-500/20">
                 Book Now
               </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}