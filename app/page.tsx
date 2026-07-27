"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-50 overflow-x-hidden relative">
      
      
      {/* ======================================================= */}
      {/* 2. SAĞ ALT: GERÇEK WHATSAPP BUTONU                        */}
      {/* ======================================================= */}
      <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group">
        {/* Hafif ping animasyonu dikkat çeker */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        
        {/* Gerçek WhatsApp SVG İkonu (Instagram silindi) */}
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>

        {/* Üzerine gelince açılan metin kutusu (Sağa Yaslı Olduğu İçin Solunda Çıkar) */}
        <span className="absolute right-16 bg-white text-gray-900 text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none">
          Questions? Chat with us! 👋
        </span>
      </a>


      {/* 3. HERO (VİDEOLU GİRİŞ) - BURADAN İTİBAREN AŞAĞISI HİÇ DEĞİŞMEDİ */}
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* ... KODUN GERİ KALANI AYNI ŞEKİLDE DEVAM EDİYOR ... */}

        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl"
          >
            Discover Cappadocia
            <span className="block text-yellow-500 mt-2">Like Never Before.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-2xl mb-10 max-w-3xl drop-shadow-md font-light text-gray-200"
          >
            Ödüllü turlar, VIP transferler ve unutulmaz deneyimler.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="w-full max-w-3xl flex flex-col items-center"
          >
        {/* ======================================================= */}
          {/* ESKİ ARAMA ÇUBUĞU YERİNE - YENİ İKİLİ ÇAĞRI BUTONLARI   */}
          {/* ======================================================= */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
            <Link 
              href="/book" 
              className="w-full sm:w-auto bg-yellow-500 text-black px-10 py-4 rounded-full font-extrabold text-lg hover:bg-yellow-400 transition-transform hover:-translate-y-1 shadow-lg shadow-yellow-500/30 flex items-center justify-center gap-2"
            >
              Book Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            
            <Link 
              href="/itineraries" 
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:border-white/50 transition-all flex items-center justify-center gap-2"
            >
              Ready Travel Plans
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            </Link>
          </div>
            
            {/* SATIŞ TETİKLEYİCİ: Hızlı Yönlendirme Linkleri (Quick Links) */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <span className="text-gray-300 text-sm font-medium self-center mr-2 hidden md:block">Popular Searches:</span>
              <Link href="/tours/balloon" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm">
                🔥 Hot Air Balloon
              </Link>
              <Link href="/tours/atv-safari" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm">
                🚙 Sunset ATV
              </Link>
              <Link href="/packages" className="bg-white/10 hover:bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 text-yellow-400 hover:text-yellow-300 text-sm px-4 py-1.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm">
                ✨ VIP Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. GÜVEN BARI (Animasyonlu) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-slate-900 border-b-4 border-yellow-500 py-6"
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-700">
          <div className="px-4">
            <div className="text-3xl mb-1">🏆</div>
            <div className="text-white font-bold text-lg">TripAdvisor</div>
            <div className="text-gray-400 text-xs">Certificate of Excellence</div>
          </div>
          <div className="px-4">
            <div className="text-3xl mb-1">⭐</div>
            <div className="text-white font-bold text-lg">4.9/5 Rating</div>
            <div className="text-gray-400 text-xs">Based on 2,500+ Reviews</div>
          </div>
          <div className="px-4">
            <div className="text-3xl mb-1">👥</div>
            <div className="text-white font-bold text-lg">15,000+</div>
            <div className="text-gray-400 text-xs">Happy Guests</div>
          </div>
          <div className="px-4">
            <div className="text-3xl mb-1">🤝</div>
            <div className="text-white font-bold text-lg">TÜRSAB</div>
            <div className="text-gray-400 text-xs">Official Member</div>
          </div>
        </div>
      </motion.div>

      {/* 4. POPÜLER BÖLGELER (Animasyonlu ve Şık) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-24 bg-white text-slate-900 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Discover The Region</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-slate-900">Must Visit Places</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Kapadokya'nın eşsiz vadilerini ve yeraltı şehirlerini keşfedin.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Göreme Open Air", span: "md:col-span-2", img: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800" },
              { id: 2, title: "Uçhisar Castle", span: "md:col-span-2", img: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800" },
              { id: 3, title: "Love Valley", span: "md:col-span-4 lg:col-span-2", img: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800" },
              { id: 4, title: "Derinkuyu", span: "md:col-span-4 lg:col-span-2", img: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800" }
            ].map((dest, index) => (
              <motion.div 
                key={dest.id} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className={`relative h-64 rounded-3xl overflow-hidden group cursor-pointer shadow-lg ${dest.span}`}
              >
                <img src={dest.img} alt={dest.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">{dest.title}</h3>
                  <Link href={`/destinations/${dest.id}`} className="text-yellow-400 text-sm font-bold mt-2 inline-block group-hover:translate-x-2 transition-transform">Explore →</Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/destinations">
              <button className="bg-transparent border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition duration-300">
                View All Destinations
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

   {/* ======================================================= */}
      {/* 5. POPULAR TOURS (SATIŞ ODAKLI DÖNÜŞÜM YAPILDI) */}
      {/* ======================================================= */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Most Popular Tours
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the most beloved experiences in Cappadocia, carefully curated for your unforgettable journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* 1. KART: Balon Turu */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
            >
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:scale-110 transition-transform duration-500"></div>
                {/* SATIŞ TETİKLEYİCİ: Aciliyet Rozeti (Selling Fast) */}
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest animate-pulse shadow-lg">
                  🔥 Selling Fast
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">Activity</span>
                  {/* SATIŞ TETİKLEYİCİ: Fiyat Çapası (İndirim Psikolojisi) */}
                  <div>
                    <span className="text-gray-400 line-through text-sm mr-2">€180</span>
                    <span className="text-gray-900 font-extrabold text-xl">€150</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hot Air Balloon Flight</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-1">Float above the fairy chimneys at sunrise and witness the magical landscape of Cappadocia from the sky.</p>
                
                {/* SATIŞ TETİKLEYİCİ: Mikro-Kopya (Güven) ve Güçlü CTA */}
                <div className="mt-auto">
                  <div className="text-center mb-3 flex items-center justify-center gap-1.5 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold">Free Cancellation</span>
                  </div>
                  {/* BUTTON YERİNE LINK EKLENDİ */}
                  <Link href="/book" className="block text-center w-full bg-yellow-500 text-black py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-lg">
                    Check Availability
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 2. KART: ATV Turu */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
            >
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-900/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Popular
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">Adventure</span>
                  <div>
                    <span className="text-gray-400 line-through text-sm mr-2">€45</span>
                    <span className="text-gray-900 font-extrabold text-xl">€35</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunset ATV Tour</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-1">Ride through the dusty trails of Sword, Love, and Rose Valleys as the sun sets over the unique rock formations.</p>
                
                <div className="mt-auto">
                  <div className="text-center mb-3 flex items-center justify-center gap-1.5 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold">Pay Later</span>
                  </div>
                  {/* BUTTON YERİNE LINK EKLENDİ */}
                  <Link href="/book" className="block text-center w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
                    Reserve Now
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 3. KART: Kırmızı Tur */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group flex flex-col"
            >
              <div className="h-64 bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-green-900/20 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-4 right-4 bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Best Value
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">Daily Tour</span>
                  <div>
                    <span className="text-gray-400 line-through text-sm mr-2">€75</span>
                    <span className="text-gray-900 font-extrabold text-xl">€60</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cappadocia Red Tour</h3>
                <p className="text-gray-600 mb-6 line-clamp-2 flex-1">Explore the Göreme Open Air Museum, Uçhisar Castle, and the pottery town of Avanos in a single day.</p>
                
                <div className="mt-auto">
                  <div className="text-center mb-3 flex items-center justify-center gap-1.5 text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-xs font-bold">Museum Tickets Included</span>
                  </div>
                  {/* BUTTON YERİNE LINK EKLENDİ */}
                  <Link href="/book" className="block text-center w-full bg-slate-900 text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors shadow-lg">
                    Reserve Now
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
{/* ======================================================= */}
          {/* TÜM TURLARI GÖR BUTONU */}
          {/* ======================================================= */}
          <div className="mt-16 text-center">
            <Link 
              href="/tours" 
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
            >
              View All Tours & Activities
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
{/* ======================================================= */}
      {/* 6. READY TRAVEL PLANS (HAZIR ROTALAR) BÖLÜMÜ */}
      {/* ======================================================= */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-bold tracking-widest uppercase mb-2 block">Stress-Free Journeys</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Ready Travel Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't know where to start? Choose one of our expertly curated itineraries and explore Cappadocia without the hassle of planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* KART 1: 1 Günlük Plan */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col border border-gray-100">
              <div className="h-56 relative overflow-hidden bg-gray-300">
                <img src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800" alt="1 Day Itinerary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">
                  1 DAY
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Express Explorer</h3>
                <p className="text-gray-600 mb-6 flex-1">Short on time? See the absolute must-visit spots including the Hot Air Balloons, Göreme Open Air Museum, and sunset at Red Valley.</p>
                <Link href="/itineraries/1-day" className="flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-yellow-500 hover:text-black text-gray-900 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all border border-gray-200 hover:border-transparent">
                  View Itinerary <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* KART 2: 2 Günlük Plan (VURGULANMIŞ) */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col border-2 border-yellow-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-1.5 rounded-full font-bold text-xs uppercase tracking-widest z-10 shadow-lg">
                Most Popular
              </div>
              <div className="h-56 relative overflow-hidden bg-gray-300">
                <img src="https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=800" alt="2 Day Itinerary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">
                  2 DAYS
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Classic Weekend</h3>
                <p className="text-gray-600 mb-6 flex-1">The perfect balance. Combine the Red and Green tours, stay in an authentic cave hotel, and enjoy a traditional Turkish Night.</p>
                <Link href="/itineraries/2-days" className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-yellow-500/30">
                  View Itinerary <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

            {/* KART 3: 3 Günlük Plan */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group flex flex-col border border-gray-100">
              <div className="h-56 relative overflow-hidden bg-gray-300">
                <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" alt="3 Day Itinerary" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">
                  3+ DAYS
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Deep Cappadocia</h3>
                <p className="text-gray-600 mb-6 flex-1">For the slow traveler. Explore underground cities, hike the Ihlara Valley, take a pottery workshop, and discover hidden churches.</p>
                <Link href="/itineraries/3-days" className="flex items-center justify-center gap-2 w-full bg-gray-50 hover:bg-yellow-500 hover:text-black text-gray-900 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all border border-gray-200 hover:border-transparent">
                  View Itinerary <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </div>

          </div>
          
          {/* Tüm Planları Gör Butonu */}
          <div className="mt-12 text-center">
            <Link href="/itineraries" className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-yellow-600 transition-colors">
              See All Ready Plans <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

        </div>
      </div>

    {/* ======================================================= */}
      {/* 7. WORKSHOPLAR VE AKTİVİTELER */}
      {/* ======================================================= */}
      <div className="py-20 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Culture & Art</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Workshops & Activities</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* KART 1: Pottery */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-72 rounded-2xl overflow-hidden group shadow-lg"
          >
            {/* LINK DÜZELTİLDİ: "pottery" */}
            <Link href="/book?package=pottery" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1516738778643-41ea3f60f089?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Pottery" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">Pottery Workshop</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">
                  Book Now <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* KART 2: Carpet */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-72 rounded-2xl overflow-hidden group shadow-lg"
          >
            {/* LINK DÜZELTİLDİ: "carpet" */}
            <Link href="/book?package=carpet" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Carpet" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">Carpet Weaving</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">
                  Book Now <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* KART 3: Cooking */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-72 rounded-2xl overflow-hidden group shadow-lg"
          >
            {/* LINK DÜZELTİLDİ: "cooking" */}
            <Link href="/book?package=cooking" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1541534407338-02422e6f43e3?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Cooking" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">Turkish Cooking</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">
                  Book Now <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* KART 4: Wine Tasting */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-72 rounded-2xl overflow-hidden group shadow-lg"
          >
            {/* LINK DÜZELTİLDİ: "wine" */}
            <Link href="/book?package=wine" className="block w-full h-full relative">
              <img src="https://images.unsplash.com/photo-1522850959516-58f958d88aca?q=80&w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt="Wine" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-500"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-bold text-xl drop-shadow-md mb-3">Wine Tasting</h3>
                <span className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm uppercase tracking-widest group-hover:text-yellow-400 transition-colors">
                  Book Now <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ======================================================= */}
      {/* 8. FOTOĞRAF GALERİSİ (CAPTURED MOMENTS) */}
      {/* ======================================================= */}
      <div className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Captured Moments</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Cappadocia Through Our Lens</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            Real memories from our guests. Get inspired for your upcoming adventure in the land of beautiful horses.
          </p>
        </div>

        {/* Galeri Grid - Yan yana 4'lü, mobilde 2'li şık tasarım */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          
          {/* Fotoğraf 1 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img src="https://images.unsplash.com/photo-1528291151377-165fdb10ea7a?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700" alt="Cappadocia Balloons" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
               <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
          </div>

          {/* Fotoğraf 2 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600255821058-c4f89958d700?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700" alt="Fairy Chimneys" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
               <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
          </div>

          {/* Fotoğraf 3 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img src="https://images.unsplash.com/photo-1527668752968-14ce70a34c1b?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700" alt="Valleys" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
               <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
          </div>

          {/* Fotoğraf 4 */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img src="https://images.unsplash.com/photo-1535747682970-137a28cb0f80?q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700" alt="Cave Hotel" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
               <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
          </div>
        </div>

        {/* Aksiyon Butonu */}
        <div className="text-center mt-12 relative z-10">
          <Link href="https://instagram.com" target="_blank" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-colors shadow-lg hover:-translate-y-1">
            Follow Us on Instagram
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </Link>
        </div>
      </div>

      {/* 9. WHY CHOOSE US (Neden Biz?) */}
      <div className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Our Difference</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">Why Choose CappaViva?</h2>
            </motion.div>

            <div className="space-y-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4 items-start group"
              >
                <div className="bg-yellow-500 text-black p-3 rounded-xl text-xl group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <div>
                  <h4 className="font-bold text-xl group-hover:text-yellow-400 transition-colors">No Hidden Fees</h4>
                  <p className="text-gray-400 text-sm">Gördüğünüz fiyatı ödersiniz. Sürpriz ekstra ücretler veya zorunlu bahşişler yoktur.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex gap-4 items-start group"
              >
                <div className="bg-yellow-500 text-black p-3 rounded-xl text-xl group-hover:scale-110 transition-transform duration-300">🚙</div>
                <div>
                  <h4 className="font-bold text-xl group-hover:text-yellow-400 transition-colors">Luxury Fleet</h4>
                  <p className="text-gray-400 text-sm">Tüm transferleriniz ve turlarınız VIP tasarımlı, yeni model klimalı araçlarla yapılır.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-4 items-start group"
              >
                <div className="bg-yellow-500 text-black p-3 rounded-xl text-xl group-hover:scale-110 transition-transform duration-300">🥇</div>
                <div>
                  <h4 className="font-bold text-xl group-hover:text-yellow-400 transition-colors">Licensed Local Guides</h4>
                  <p className="text-gray-400 text-sm">Bölgeyi ezbere bilen, resmi kokartlı ve ileri düzey yabancı dil konuşan rehberler.</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800"
          >
            <img 
              src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=800" 
              alt="Guide" 
              className="w-full h-full object-cover hover:scale-110 transition duration-700" 
            />
          </motion.div>
        </div>
      </div>

      {/* 10. YORUMLAR (REVIEWS) */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900">What Our Guests Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm italic mb-4">"Her şey kusursuzdu! Havalimanından alındığımız andan itibaren kendimizi çok özel hissettik. Balon turu hayatımın en iyi deneyimiydi."</p>
              <div className="font-bold text-slate-900">- Sarah M. (UK)</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm italic mb-4">"Kırmızı Tur rehberimiz inanılmaz bilgiliydi. Fotoğraf çekimi için bizi en iyi noktalara götürdü. Kesinlikle tavsiye ederim."</p>
              <div className="font-bold text-slate-900">- David L. (USA)</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-yellow-500 text-xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm italic mb-4">"Araçlar çok temiz ve lükstü. WhatsApp üzerinden her sorumuza anında cevap verdiler. İnanılmaz bir hizmet kalitesi."</p>
              <div className="font-bold text-slate-900">- Elena R. (Spain)</div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================= */}
      {/* 9. SIKÇA SORULAN SORULAR (FAQ) */}
      {/* ======================================================= */}
      <div className="py-24 px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Clear Your Mind</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-4 text-lg">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to reach out.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* Soru 1 */}
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">
              When is the best time to visit Cappadocia?
              <span className="transition group-open:rotate-180">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
              Cappadocia is beautiful year-round! Spring (April-June) and Autumn (September-November) offer the most pleasant weather for hiking and tours. Winter brings magical snow-covered fairy chimneys, and summer is vibrant but can be hot in the afternoons. Balloon flights operate all year, weather permitting.
            </p>
          </details>

          {/* Soru 2 */}
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">
              Are hot air balloon flights guaranteed?
              <span className="transition group-open:rotate-180">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
              Safety is our top priority. Balloon flights are strictly regulated by the Turkish Civil Aviation Authority based on daily wind and weather conditions. If a flight is canceled due to weather, you will receive a full refund or the option to reschedule for the next available day.
            </p>
          </details>

          {/* Soru 3 */}
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">
              What is the difference between the Red Tour and Green Tour?
              <span className="transition group-open:rotate-180">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
              The <strong>Red Tour (North)</strong> focuses on the closest and most iconic sites like the Göreme Open Air Museum, Fairy Chimneys, and pottery towns. It requires less driving. <br/><br/>
              The <strong>Green Tour (South)</strong> is more nature-focused. It involves a slightly longer drive to explore the deep Underground Cities and a peaceful hike in the lush Ihlara Valley. We highly recommend doing both!
            </p>
          </details>

          {/* Soru 4 */}
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">
              Do I need to book in advance?
              <span className="transition group-open:rotate-180">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
              Yes, strongly recommended! Hot air balloon spaces and popular boutique cave hotels fill up weeks (sometimes months) in advance, especially during the high season. Booking early secures your spot and guarantees better rates.
            </p>
          </details>

          {/* Soru 5 */}
          <details className="group bg-white border border-gray-200 rounded-2xl p-6 open:shadow-lg open:border-yellow-500 transition-all cursor-pointer">
            <summary className="flex justify-between items-center font-bold text-lg text-gray-900 outline-none list-none">
              How does the booking and payment process work?
              <span className="transition group-open:rotate-180">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
            </summary>
            <p className="text-gray-600 mt-4 leading-relaxed font-medium">
              It’s very simple. You choose your desired package or tour from our website and send a request via WhatsApp. Our local experts will confirm availability and finalize the details with you instantly. Payments can be made safely upon arrival or via secure online link.
            </p>
          </details>

        </div>
      </div>

      {/* 12. HARİTA */}
      <div className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Find Us in Cappadocia</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Göreme'deki ofisimize gelip bir kahvemizi içebilir, rotanızı rehberlerimizle planlayabilirsiniz.</p>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4">
              <span className="text-3xl">📍</span>
              <div>
                <h4 className="font-bold text-slate-900">Office</h4>
                <p className="text-gray-500 text-sm">Göreme Kasabası, Nevşehir / Türkiye</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <span className="text-3xl">📞</span>
              <div>
                <h4 className="font-bold text-slate-900">WhatsApp / Call</h4>
                <p className="text-gray-500 text-sm">+90 555 123 45 67</p>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-full rounded-3xl overflow-hidden shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49749.02058428383!2d34.7892305541604!3d38.6433215239922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a68892f354783%3A0x6b4904125b29fc9f!2sG%C3%B6reme%2C%20Nev%C5%9Fehir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" width="100%" height="100%" style={{ border: 0 }}></iframe>
          </div>
        </div>
      </div>

      {/* 13. PARTNERLER / SPONSORLAR */}
      <div className="border-y border-gray-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-6">Our Trusted Partners</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
            <h3 className="text-2xl font-bold">Turkish Airlines</h3>
            <h3 className="text-2xl font-bold">TÜRSAB</h3>
            <h3 className="text-2xl font-bold">Booking.com</h3>
            <h3 className="text-2xl font-bold">Viator</h3>
            <h3 className="text-2xl font-bold">GetYourGuide</h3>
          </div>
        </div>
      </div>

      {/* 14. BÜLTEN (NEWSLETTER) */}
      <div className="bg-yellow-500 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-black mb-4">Kapadokya Fırsatlarını Kaçırmayın!</h2>
          <p className="text-slate-900 mb-8 font-medium">Özel indirimler, yeni turlar ve Kapadokya ipuçları için bültenimize katılın.</p>
          <div className="flex bg-white p-2 rounded-full shadow-lg">
            <input type="email" placeholder="E-posta adresiniz..." className="flex-1 px-6 rounded-l-full outline-none text-black bg-transparent" />
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition">Subscribe</button>
          </div>
        </div>
      </div>

    </main>
  );
}