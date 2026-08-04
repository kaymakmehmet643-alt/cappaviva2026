"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Gerçek Kapadokya Erişilebilirlik Verileri
const accessibilityPlaces = [
  {
    id: 1,
    name: "Tekerlekli Sandalye Uyumlu Balon Turları",
    category: "Özel Uçuş Deneyimi",
    rating: "5.0",
    reviews: "Özel Hizmet",
    location: "Göreme Uçuş Alanı",
    hours: "Sabah Gün Doğumu",
    price: "Özel Fiyatlandırma",
    note: "Fiziksel engeli olan misafirlerimizin bu rüyadan mahrum kalmasına gerek yok! Bölgedeki bazı premium balon firmalarının tekerlekli sandalye girişi için özel tasarlanmış kapılı sepetleri bulunmaktadır. Ancak sayıları çok az olduğu için haftalar öncesinden ayarlanması gerekir.",
    mapLink: "https://maps.google.com/?q=Goreme+Balloon+Flight+Area",
    image: "https://images.unsplash.com/photo-1528629297340-d1d466945dc5?q=80&w=800"
  },
  {
    id: 2,
    name: "Panoramik Manzara Noktaları",
    category: "Düz Ayak Manzara",
    rating: "4.8",
    reviews: "Erişilebilir",
    location: "Göreme Panorama & Uçhisar",
    hours: "7/24 Açık",
    price: "Ücretsiz",
    note: "Vadilerin içine inmek engebeli arazi nedeniyle zor olsa da, Kapadokya'yı tepeden izleyebileceğiniz Göreme Panorama veya Güvercinlik Vadisi seyir terasları tekerlekli sandalyeye ve bebek arabalarına tamamen uygundur. Araçla sıfır noktasına kadar yanaşabilirsiniz.",
    mapLink: "https://maps.google.com/?q=Goreme+Panorama",
    image: "https://images.unsplash.com/photo-1490226348920-562dbfa88ff9?q=80&w=800"
  },
  {
    id: 3,
    name: "Göreme Açık Hava Müzesi",
    category: "Kısmi Erişilebilir Müze",
    rating: "4.5",
    reviews: "Ana Yollar Düz",
    location: "Göreme Merkez",
    hours: "08:00 - 19:00",
    price: "Müze Kart",
    note: "Müzenin ana yürüyüş yolları parke taşı ve düzleştirilmiş toprak olduğu için tekerlekli sandalye ile rahatça gezilebilir. Ancak tarihi kiliselerin içi kayalara oyulduğu ve dar merdivenli olduğu için kiliselerin içine girmek maalesef pek mümkün değildir.",
    mapLink: "https://maps.google.com/?q=Goreme+Open+Air+Museum",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800"
  },
  {
    id: 4,
    name: "Engelli Dostu Otel Seçimi",
    category: "Konaklama İpuçları",
    rating: "4.9",
    reviews: "Rehber Tavsiyesi",
    location: "Kapadokya Geneli",
    hours: "7/24 Resepsiyon",
    price: "Oteline Göre",
    note: "Kapadokya'daki mağara (cave) oteller yamaçlara yapıldığı için bol merdivenli ve dar kapılıdır. Yürüme güçlüğü çeken veya bebek arabalı misafirlerime her zaman düz ayak 'Taş Konakları' veya asansör/rampa sistemi olan özel otelleri seçmelerini öneriyorum.",
    mapLink: "https://maps.google.com/?q=Cappadocia+Hotels",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800"
  }
];

export default function AccessibilityDirectory() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-gray-200 overflow-x-hidden">
      
      {/* ======================================================= */}
      {/* 1. ÜST BAŞLIK (Header & Geri Dön Butonu) */}
      {/* ======================================================= */}
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto border-b border-white/10 relative">
        <Link href="/local-guide" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-500 transition-colors mb-8 font-bold tracking-widest text-xs uppercase">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Rehbere Dön
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: appleEase }}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">♿</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Erişilebilirlik</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya&apos;nın zorlu coğrafyasında tekerlekli sandalye kullanıcıları, yürüme güçlüğü çekenler ve bebek arabalı aileler için konforlu seyahat ipuçları.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. MEKAN KARTLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accessibilityPlaces.map((place, index) => (
            <motion.div 
              key={place.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500 flex flex-col shadow-xl"
            >
              {/* Görsel Alanı */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000 ease-out" />
                
                {/* Sol Üst - Kategori */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest z-20">
                  {place.category}
                </div>

                {/* Sağ Alt - Durum */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 z-20">
                  <span className="text-cyan-500">🤝</span> {place.reviews}
                </div>
              </div>

              {/* Detaylar */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-extrabold text-white mb-6 tracking-tight">{place.name}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-lg border border-white/10">📍</div> 
                    {place.location}
                  </div>
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-lg border border-white/10">🕒</div> 
                    {place.hours}
                  </div>
                </div>

                {/* Mehmet'in Notu */}
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-2xl p-5 mb-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500/50">
                      <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-cyan-400 font-bold text-[10px] uppercase tracking-widest">Mehmet&apos;in Notu</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">&quot;{place.note}&quot;</p>
                </div>

                {/* Harita Butonu */}
                <Link 
                  href={place.mapLink}
                  target="_blank"
                  className="w-full bg-white/5 hover:bg-cyan-600 hover:text-white border border-white/10 hover:border-cyan-500 text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Konumu İncele <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================= */}
      {/* 3. YARDIM ÇAĞRISI (Erişilebilirlik CTA) */}
      {/* ======================================================= */}
      <div className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">💙</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Size Nasıl Yardımcı Olabilirim?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Kapadokya tatilinizde hiçbir engelin sizi kısıtlamasına izin vermeyin. Asansörlü özel otelleri bulmak, rampalı VIP transfer araçları ayarlamak veya tekerlekli sandalye uyumlu balon sepetlerine rezervasyon yapmak için lütfen benimle iletişime geçin. Sizin için tüm detayları zevkle organize edebilirim.
          </p>
          <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#1ebd5b] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1">
            Bana Hemen Yazın
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </main>
  );
}