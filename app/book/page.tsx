"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
import { useSite } from '@/app/context/SiteContext'; 
import Price from '@/components/Price';

// =======================================================
// 💫 ÖZEL ANİMASYON BİLEŞENİ
// =======================================================
const RevealOnScroll = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay: `${delay}ms` }} 
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

// =======================================================
// 💶 HİZMET BİRİM FİYAT HARİTASI (Euro Cinsinden)
// =======================================================
const SERVICE_PRICES: Record<string, number> = {
  // Tours & Activities
  "Balon Turları": 160,
  "ATV Turları": 35,
  "At Turları": 40,
  "Jeep Safari Turları": 45,
  "Camel Tur": 35,
  "Classic Car Tur": 80,
  "Photoshooting Tour": 100,
  "Whirling Dervish Ceremony (Sema)": 35,
  "Türk Gecesi (Turkish Night)": 55,
  "Turkish Bath (Hamam)": 40,
  "Pottery Workshop": 20,
  "Cooking Class": 50,
  "Özel Masaj": 50,

  // Günlük Turlar
  "Red Tour (Kırmızı Tur)": 60,
  "Green Tour (Yeşil Tur)": 65,
  "Cappadocia Mix Tour": 60,
  "Pottery Workshop Tour": 45,
  "Özel (Private) Turlar": 120,

  // Airport Transfer
  "7/24 Transfer Hizmeti": 15,
  "Özel Havalimanı Transferi": 50,
  "Paylaşımlı (Shuttle) Transfer": 15,
  "VIP Transfer": 80,
  "Şehirler Arası Transfer": 150,

  // Packages & Special
  "Premium Cappadocia Packages": 300,
  "✨ Tailor-Made VIP Itinerary": 200,
  "🗺️ Ready Itineraries": 150
};

// =======================================================
// 📚 ÇOKLU DİL SÖZLÜĞÜ
// =======================================================
const BOOK_DICT: any = {
  en: {
    heroSub: "VIP CONCIERGE & BOOKING",
    heroTitle: "Reserve Your Experience",
    heroDesc: "Select your desired services, calculate total costs live, and confirm directly via WhatsApp.",
    
    catTours: "🎈 Tours & Activities",
    catDaily: "🚐 Daily Cappadocia Tours",
    catTransfer: "✈️ Airport Transfer",
    catPackages: "✨ Packages & Itineraries",

    fTitle: "Booking Form",
    fServicePlace: "Select an Experience or Tour...",
    fAddMoreHint: "✨ Great choice! You can add more experiences to your cart.",
    fDate: "Date *",
    fGuests: "Number of Guests *",
    fName: "Full Name *",
    fEmail: "Email Address *",
    fPhone: "WhatsApp Number *",
    fNote: "Special Requests (Optional)",
    
    sumTitle: "Live Price Summary",
    sumService: "Selected Services",
    sumUnitPrice: "Unit Price",
    sumGuests: "Guests",
    sumTotal: "Estimated Total",
    sumGuarantee: "Instant WhatsApp Confirmation",
    
    btnSubmit: "BOOK NOW",
    btnSubText: "You will complete the reservation safely via WhatsApp.",
    
    popTitle: "Popular Experiences",
    popChoose: "Choose",
    popSelected: "Selected",

    trust1: "24/7 Support",
    trust1D: "Direct contact with local team.",
    trust2: "No Hidden Costs",
    trust2D: "Pay exactly what is calculated.",
    trust3: "Flexible Plan",
    trust3D: "Free cancellation up to 24 hours."
  },
  tr: {
    heroSub: "ONLINE REZERVASYON & ASİSTAN",
    heroTitle: "Deneyiminizi Ayırtın",
    heroDesc: "İstediğiniz hizmetleri seçin, canlı fiyatı hesaplayın ve rezervasyonunuzu anında tamamlayın.",
    
    catTours: "🎈 Turlar & Aktiviteler",
    catDaily: "🚐 Günlük Kapadokya Turları",
    catTransfer: "✈️ Havalimanı Transfer",
    catPackages: "✨ Paketler & Hazır Rotalar",

    fTitle: "Rezervasyon Formu",
    fServicePlace: "Bir Deneyim / Tur Seçiniz...",
    fAddMoreHint: "✨ Harika seçim! Sepetinize başka deneyimler de ekleyebilirsiniz.",
    fDate: "Tarih *",
    fGuests: "Kişi Sayısı *",
    fName: "Adınız Soyadınız *",
    fEmail: "E-posta Adresi *",
    fPhone: "WhatsApp Numaranız *",
    fNote: "Özel İstekleriniz (Opsiyonel)",
    
    sumTitle: "Canlı Fiyat Özetiniz",
    sumService: "Seçilen Hizmetler",
    sumUnitPrice: "Birim Fiyat",
    sumGuests: "Kişi Sayısı",
    sumTotal: "Hesaplanan Toplam Tutar",
    sumGuarantee: "Hızlı Onay Sistemi",
    
    btnSubmit: "BOOK NOW",
    btnSubText: "Siparişi güvenli bir şekilde WhatsApp üzerinden tamamlayacaksınız.",
    
    popTitle: "Öne Çıkan Deneyimler",
    popChoose: "Seç",
    popSelected: "Seçildi",

    trust1: "7/24 Destek",
    trust1D: "Bölge ekibiyle anında iletişim.",
    trust2: "Gizli Ücret Yok",
    trust2D: "Hesaplanan tutarın dışında sürpriz yok.",
    trust3: "Esnek İptal",
    trust3D: "Son 24 saate kadar ücretsiz değişim."
  },
  es: {
    heroSub: "RESERVA ONLINE Y CONSERJE",
    heroTitle: "Reserva Tu Experiencia",
    heroDesc: "Selecciona múltiples servicios, calcula el precio total en vivo y confirma fácilmente.",
    
    catTours: "🎈 Tours y Actividades",
    catDaily: "🚐 Tours Diarios",
    catTransfer: "✈️ Traslado Aeropuerto",
    catPackages: "✨ Paquetes e Itinerarios",

    fTitle: "Formulario de Reserva",
    fServicePlace: "Selecciona una Experiencia...",
    fAddMoreHint: "✨ ¡Excelente! Puedes añadir más experiencias a tu carrito.",
    fDate: "Fecha *",
    fGuests: "Pasajeros *",
    fName: "Nombre Completo *",
    fEmail: "Correo Electrónico *",
    fPhone: "WhatsApp *",
    fNote: "Solicitudes Especiales",
    
    sumTitle: "Resumen de Precio",
    sumService: "Servicios Seleccionados",
    sumUnitPrice: "Precio Unitario",
    sumGuests: "Pasajeros",
    sumTotal: "Total Estimado",
    sumGuarantee: "Confirmación Inmediata",
    
    btnSubmit: "BOOK NOW",
    btnSubText: "Completarás la reserva de forma segura vía WhatsApp.",
    
    popTitle: "Experiencias Destacadas",
    popChoose: "Elegir",
    popSelected: "Seleccionado",

    trust1: "Soporte 24/7",
    trust1D: "Atención directa de expertos.",
    trust2: "Sin Cargos Ocultos",
    trust2D: "Pagas el precio calculado.",
    trust3: "Flexibilidad",
    trust3D: "Cancelación gratuita hasta 24h."
  }
};

const POPULAR_CARDS = [
  { id: "Balon Turları", title: "Hot Air Balloon Flight", img: "https://images.unsplash.com/photo-1570939274717-7eda259b50cf?auto=format&fit=crop&w=800&q=80", price: 160 },
  { id: "Red Tour (Kırmızı Tur)", title: "Red Tour", img: "https://images.unsplash.com/photo-1642426305716-e4d6d6251b54?auto=format&fit=crop&w=800&q=80", price: 60 },
  { id: "ATV Turları", title: "ATV Safari", img: "https://images.unsplash.com/photo-1596422846543-74c6e27a69bc?auto=format&fit=crop&w=800&q=80", price: 35 },
  { id: "Özel (Private) Turlar", title: "VIP Private Tour", img: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=800&q=80", price: 120 }
];

// =======================================================
// 🚀 ANA BİLEŞEN
// =======================================================
function BookingFormContent() {
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = BOOK_DICT[aktifDil] || BOOK_DICT['tr'];

  const searchParams = useSearchParams();
  const preSelectedPackage = searchParams.get("package");

  // FORM STATE
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    services: string[];
    date: string;
    guests: number;
    note: string;
  }>({
    name: '',
    email: '',
    phone: '',
    services: [], // Default boş başlasın
    date: '',
    guests: 2,
    note: ''
  });

  // URL PARAMETRESİ İLE OTOMATİK SEÇİM
  useEffect(() => {
    if (preSelectedPackage) {
      let matched = "Balon Turları";
      if (preSelectedPackage === "balloon") matched = "Balon Turları";
      else if (preSelectedPackage === "atv") matched = "ATV Turları";
      else if (preSelectedPackage === "horse") matched = "At Turları";
      else if (preSelectedPackage === "red-tour") matched = "Red Tour (Kırmızı Tur)";
      else if (preSelectedPackage === "green-tour") matched = "Green Tour (Yeşil Tur)";
      else if (preSelectedPackage === "1-day") matched = "🗺️ Ready Itineraries";
      else if (preSelectedPackage === "2-days") matched = "Premium Cappadocia Packages";
      else if (preSelectedPackage === "3-days") matched = "✨ Tailor-Made VIP Itinerary";

      setFormData(prev => ({ ...prev, services: [matched] }));
    }
  }, [preSelectedPackage]);

  // NORMAL INPUT DEĞİŞİKLİKLERİ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? Math.max(1, parseInt(value) || 1) : value
    }));
  };

  // SELECT KUTUSUNDAN HİZMET EKLEME
  const handleServiceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected && !formData.services.includes(selected)) {
      setFormData(prev => ({ ...prev, services: [...prev.services, selected] }));
    }
    e.target.value = "";
  };

  // SEÇİLİ HİZMETİ ÇIKARTMA (X butonuna basınca)
  const removeService = (serviceToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter(s => s !== serviceToRemove)
    }));
  };

  // KARTLARA TIKLAYARAK EKLE/ÇIKAR YAPMA
  const handleCardClick = (serviceId: string) => {
    setFormData(prev => {
      if (prev.services.includes(serviceId)) {
        return { ...prev, services: prev.services.filter(s => s !== serviceId) };
      } else {
        return { ...prev, services: [...prev.services, serviceId] };
      }
    });
  };

  // ÇOKLU HESAPLAMA MANTIĞI
  const calculateUnitTotal = () => {
    return formData.services.reduce((total, serviceName) => {
      return total + (SERVICE_PRICES[serviceName] || 50); 
    }, 0);
  };

  const totalUnitPrice = calculateUnitTotal();
  const grandTotal = totalUnitPrice * formData.guests; 

  // WHATSAPP GÖNDERİMİ
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.services.length === 0) {
      alert("Lütfen en az bir hizmet seçiniz! / Please select at least one service.");
      return;
    }

    const servicesList = formData.services.map(s => `🔸 ${s}`).join('\n');

    const message = `🌟 *CappaViva Booking Request* 🌟\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📅 *Date:* ${formData.date || 'TBD'}\n` +
      `👥 *Guests:* ${formData.guests}\n\n` +
      `🎒 *Selected Services:*\n${servicesList}\n\n` +
      `💶 *Estimated Total:* ${grandTotal} EUR\n\n` +
      `📝 *Notes:* ${formData.note || 'None'}\n\n` +
      `Hello! I would like to confirm my booking.`;

    // 🧹 ÇÖZÜM BURADA: WhatsApp'a giderken araya sızan gizli hatalı boşlukları ve  sembolünü temizler
    const cleanMessage = message.replace(/[\u00A0\u200B\u200C\u200D\uFEFF\uFFFD]/g, ' ');

    const phoneNumber = "905354322782";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(cleanMessage)}`, '_blank');
  };

  return (
    <main className="bg-[#F8FAFC] min-h-screen pb-24 selection:bg-yellow-500 selection:text-white">
      
      {/* ======================================= */}
      {/* 1. HERO - SİNEMATİK FOTOĞRAF & BEYAZA GEÇİŞ (Fade to White) */}
      {/* ======================================= */}
      <section className="relative w-full h-[60vh] min-h-[450px] flex flex-col items-center justify-center overflow-hidden">
        {/* Arka plan görseli */}
        <Image 
          src="https://images.unsplash.com/photo-1600255821058-c4f89958d700?q=80&w=2000" 
          alt="Cappadocia Balloons" 
          fill 
          priority 
          unoptimized 
          className="object-cover opacity-90" 
        />
        {/* Gradient: Üstten koyu başlar, ortaya doğru hafifler, en altta tam beyaz (#F8FAFC) olur */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-[#F8FAFC]"></div>
        
        <RevealOnScroll className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <div className="inline-block bg-yellow-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-400 px-5 py-2 rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6 shadow-lg">
            {t.heroSub}
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight drop-shadow-2xl mb-6">
            {t.heroTitle}
          </h1>
          <p className="text-lg text-slate-100 font-medium max-w-2xl mx-auto drop-shadow-lg">
            {t.heroDesc}
          </p>
        </RevealOnScroll>
      </section>

      {/* ======================================= */}
      {/* 2. REZERVASYON FORMU & DİNAMİK HESAPLAYICI */}
      {/* ======================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        
        {/* HIZLI SEÇİM KARTLARI */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider drop-shadow-sm">{t.popTitle}</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {POPULAR_CARDS.map((item) => {
              const isSelected = formData.services.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleCardClick(item.id)}
                  className={`group relative rounded-2xl overflow-hidden text-left border-2 transition-all p-3 flex flex-col justify-between bg-white shadow-lg ${
                    isSelected ? 'border-yellow-500 ring-2 ring-yellow-500/20 shadow-[0_0_25px_rgba(234,179,8,0.2)] -translate-y-1' : 'border-slate-100 hover:border-slate-300 hover:-translate-y-0.5'
                  }`}
                >
                  <div className="relative w-full h-24 sm:h-32 rounded-xl overflow-hidden mb-3 bg-slate-100">
                    <img src={item.img} alt={item.title} className={`w-full h-full object-cover transition-transform duration-500 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`} />
                    {isSelected && (
                      <span className="absolute top-2 right-2 bg-yellow-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-md shadow flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                        {t.popSelected}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className={`font-bold text-xs sm:text-sm line-clamp-1 transition-colors ${isSelected ? 'text-yellow-600' : 'text-slate-900'}`}>{item.title}</h4>
                    <div className="mt-1 flex items-center justify-between">
                      <Price eur={item.price} className="text-xs font-black text-slate-700" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{isSelected ? '' : t.popChoose}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* ------------------------------------------- */}
          {/* SOL KOLON: VIP FORMLAR (7 Birim) */}
          {/* ------------------------------------------- */}
          <RevealOnScroll className="lg:col-span-7 bg-white rounded-[2.5rem] p-6 sm:p-10 shadow-2xl border border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-8 pb-4 border-b border-slate-100 flex items-center gap-3">
              <span className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center text-lg">📋</span> {t.fTitle}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* ÇOKLU Hİzmet Seçimi */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider">{t.fService}</label>
                
                {/* Seçilenleri Gösteren Etiket (Tag) Alanı */}
                {formData.services.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.services.map((srv, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 text-yellow-800 px-3 py-1.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm">
                        {srv}
                        <button type="button" onClick={() => removeService(srv)} className="text-yellow-600 hover:text-red-500 transition-colors bg-white rounded-full p-0.5 shadow-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropdown Kutusu (VIP Iconlu) */}
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <select 
                    onChange={handleServiceSelect}
                    defaultValue=""
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all font-bold text-sm cursor-pointer appearance-none shadow-sm hover:border-slate-300"
                  >
                    <option value="" disabled>{t.fServicePlace}</option>
                    
                    <optgroup label={t.catTours}>
                      <option value="Balon Turları">Balon Turları</option>
                      <option value="ATV Turları">ATV Turları</option>
                      <option value="At Turları">At Turları</option>
                      <option value="Jeep Safari Turları">Jeep Safari Turları</option>
                      <option value="Camel Tur">Camel Tur</option>
                      <option value="Classic Car Tur">Classic Car Tur</option>
                      <option value="Photoshooting Tour">Photoshooting Tour</option>
                      <option value="Whirling Dervish Ceremony (Sema)">Whirling Dervish Ceremony (Sema)</option>
                      <option value="Türk Gecesi (Turkish Night)">Türk Gecesi (Turkish Night)</option>
                      <option value="Turkish Bath (Hamam)">Turkish Bath (Hamam)</option>
                      <option value="Pottery Workshop">Pottery Workshop</option>
                      <option value="Cooking Class">Cooking Class</option>
                      <option value="Özel Masaj">Özel Masaj</option>
                    </optgroup>

                    <optgroup label={t.catDaily}>
                      <option value="Red Tour (Kırmızı Tur)">Red Tour (Kırmızı Tur)</option>
                      <option value="Green Tour (Yeşil Tur)">Green Tour (Yeşil Tur)</option>
                      <option value="Cappadocia Mix Tour">Cappadocia Mix Tour</option>
                      <option value="Pottery Workshop Tour">Pottery Workshop Tour</option>
                      <option value="Özel (Private) Turlar">Özel (Private) Turlar</option>
                    </optgroup>

                    <optgroup label={t.catTransfer}>
                      <option value="7/24 Transfer Hizmeti">7/24 Transfer Hizmeti</option>
                      <option value="Özel Havalimanı Transferi">Özel Havalimanı Transferi</option>
                      <option value="Paylaşımlı (Shuttle) Transfer">Paylaşımlı (Shuttle) Transfer</option>
                      <option value="VIP Transfer">VIP Transfer</option>
                      <option value="Şehirler Arası Transfer">Şehirler Arası Transfer</option>
                    </optgroup>

                    <optgroup label={t.catPackages}>
                      <option value="Premium Cappadocia Packages">Premium Cappadocia Packages</option>
                      <option value="✨ Tailor-Made VIP Itinerary">✨ Tailor-Made VIP Itinerary</option>
                      <option value="🗺️ Ready Itineraries">🗺️ Ready Itineraries</option>
                    </optgroup>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>
                {/* Teşvik edici mesaj */}
                {formData.services.length > 0 && (
                  <p className="text-[11px] text-green-600 font-bold pl-2 animate-pulse flex items-center gap-1.5 mt-2">
                    {t.fAddMoreHint}
                  </p>
                )}
              </div>

              {/* Tarih ve Kişi Sayısı */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">{t.fDate}</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <input 
                      type="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all font-bold text-sm cursor-pointer shadow-sm hover:border-slate-300" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">{t.fGuests}</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                    </div>
                    <input 
                      type="number" 
                      min="1" 
                      max="50" 
                      name="guests" 
                      value={formData.guests} 
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all font-bold text-sm shadow-sm hover:border-slate-300" 
                    />
                  </div>
                </div>
              </div>

              {/* İsim */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider">{t.fName}</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                  </div>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all font-medium text-sm shadow-sm hover:border-slate-300" 
                  />
                </div>
              </div>

              {/* Email & Telefon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">{t.fEmail}</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    </div>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      required
                      placeholder="john@example.com" 
                      className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all font-medium text-sm shadow-sm hover:border-slate-300" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-wider">{t.fPhone}</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      required
                      placeholder="+1 234 567 8900" 
                      className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all font-medium text-sm shadow-sm hover:border-slate-300" 
                    />
                  </div>
                </div>
              </div>

              {/* Notlar */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-wider">{t.fNote}</label>
                <div className="relative group">
                  <div className="absolute left-4 top-5 text-slate-400 group-focus-within:text-yellow-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </div>
                  <textarea 
                    name="note" 
                    rows={3} 
                    value={formData.note} 
                    onChange={handleChange}
                    placeholder="Otelinizin adı, transfer isteği veya özel durumlar..." 
                    className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl pl-12 pr-5 py-4 outline-none focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/10 transition-all font-medium text-sm resize-none shadow-sm hover:border-slate-300"
                  ></textarea>
                </div>
              </div>

              {/* ULTRA VIP YELLOW BOOK NOW BUTONU */}
              <button 
                type="submit" 
                className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-slate-900 py-5 rounded-2xl font-black text-base uppercase tracking-[0.2em] transition-all shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] hover:-translate-y-1 flex flex-col items-center justify-center gap-1 mt-8 group"
              >
                {/* Parlama Efekti */}
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                
                <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                  {t.btnSubmit}
                </span>
              </button>
              
              <div className="text-center text-[11px] font-bold text-slate-400 mt-3 flex justify-center items-center gap-1.5">
                 <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.327.101.144.447.708.956 1.151.657.574 1.205.751 1.349.837.144.087.231.072.317-.014.087-.087.376-.434.476-.58.101-.144.202-.116.332-.072.131.043.837.391.981.463.144.072.24.101.275.159.034.058.034.332-.11.737z"/></svg>
                 {t.btnSubText}
              </div>

            </form>
          </RevealOnScroll>

          {/* ------------------------------------------- */}
          {/* SAĞ KOLON: Canlı Fiyat Hesaplayıcı & Siyah VIP Kart (5 Birim) */}
          {/* ------------------------------------------- */}
          <div className="lg:col-span-5 relative">
            <RevealOnScroll delay={200} className="lg:sticky lg:top-28 space-y-6">
              
              {/* Siyah Lüks Kredi Kartı Konseptli Fiyat Özeti */}
              <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-yellow-500/20 blur-3xl rounded-full"></div>
                
                <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6 relative z-10">
                  <h3 className="text-xl font-black text-yellow-400 uppercase tracking-wider">{t.sumTitle}</h3>
                  <span className="text-2xl">💳</span>
                </div>

                <div className="space-y-5 relative z-10">
                  
                  {/* SEPET LİSTESİ */}
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">{t.sumService}</span>
                    {formData.services.length > 0 ? (
                      <ul className="space-y-2">
                        {formData.services.map((srv, i) => (
                          <li key={i} className="flex items-center justify-between text-sm">
                            <span className="font-bold text-white pr-4">{srv}</span>
                            <Price eur={SERVICE_PRICES[srv] || 50} className="text-slate-400 font-medium shrink-0" />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-slate-500 italic">Sepetiniz boş...</div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/50">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.sumUnitPrice}</span>
                      <Price eur={totalUnitPrice} className="text-base font-bold text-slate-300" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.sumGuests}</span>
                      <div className="text-base font-bold text-slate-300">{formData.guests} {formData.guests === 1 ? 'Person' : 'People'}</div>
                    </div>
                  </div>

                  {/* Dinamik Toplam Tutar */}
                  <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-black text-yellow-400 uppercase tracking-widest block">{t.sumTotal}</span>
                      <span className="text-[11px] text-slate-400">({formData.guests} x <Price eur={totalUnitPrice} />)</span>
                    </div>
                    <Price eur={grandTotal} className="text-3xl md:text-4xl font-black text-white" />
                  </div>

                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-bold text-green-400">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {t.sumGuarantee}
                </div>
              </div>

              {/* Güven Rozetleri */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 text-lg shrink-0">💬</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.trust1}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.trust1D}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 text-lg shrink-0">🛡️</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.trust2}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.trust2D}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg shrink-0">⭐</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.trust3}</h4>
                    <p className="text-xs text-slate-500 font-medium">{t.trust3D}</p>
                  </div>
                </div>
              </div>

            </RevealOnScroll>
          </div>

        </div>
      </section>

      <style jsx global>{`
        @keyframes shine {
          100% { left: 125%; }
        }
        .animate-shine {
          animation: shine 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1);
          left: -125%;
        }
      `}</style>
    </main>
  );
}

// Suspense sarmalayıcı (Next.js 14 gereksinimi)
export default function BookPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-slate-500 font-bold text-xl animate-pulse">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        Loading Booking Page...
      </div>
    }>
      <BookingFormContent />
    </Suspense>
  );
}