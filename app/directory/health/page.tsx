"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Gerçek Kapadokya Sağlık & Acil Durum Verileri
const healthPlaces = [
  {
    id: 1,
    name: "Özel Kapadokya Hastanesi",
    category: "Özel Hastane & Acil",
    rating: "4.5",
    reviews: "850+",
    location: "Nevşehir Merkez (Göreme'ye 20 dk)",
    hours: "7/24 Acil Servis",
    price: "Özel / Sigorta Geçerli",
    note: "Özellikle yabancı misafirlerimiz veya hızlı hizmet almak isteyenler için en iyi seçenek. Yabancı dil bilen personelleri var ve birçok seyahat/sağlık sigortası burada sorunsuz geçiyor.",
    mapLink: "https://maps.google.com/?q=Ozel+Kapadokya+Hastanesi",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800"
  },
  {
    id: 2,
    name: "Nevşehir Devlet Hastanesi",
    category: "Tam Teşekküllü Hastane",
    rating: "4.1",
    reviews: "1.5k+",
    location: "Nevşehir Merkez",
    hours: "7/24 Acil Servis",
    price: "Devlet Güvencesi",
    note: "Bölgenin en büyük ve en kapsamlı hastanesidir. Ciddi yaralanma veya acil ambulans (112) durumlarında hastalar direkt buraya getirilir. Tüm branşlarda uzman doktorlar bulunur.",
    mapLink: "https://maps.google.com/?q=Nevsehir+Devlet+Hastanesi",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800"
  },
  {
    id: 3,
    name: "Bölge Eczaneleri & Nöbetçi Eczane",
    category: "İlaç & İlk Yardım",
    rating: "4.8",
    reviews: "500+",
    location: "Göreme, Uçhisar, Ürgüp, Avanos",
    hours: "08:30 - 18:30 (Sonrası Nöbetçi)",
    price: "Standart İlaç Fiyatları",
    note: "Göreme ve Uçhisar gibi kasabalarda eczaneler akşam 18:30 civarı kapanır. Gece yarısı acil bir ilaca veya ağrı kesiciye ihtiyacınız olursa internetten o günkü 'Nöbetçi Eczane'yi bulmanız gerekir. Ulaşım için taksi şarttır.",
    mapLink: "https://maps.google.com/?q=Goreme+Eczane",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800"
  },
  {
    id: 4,
    name: "Özel Diş Klinikleri",
    category: "Acil Diş Tedavisi",
    rating: "4.9",
    reviews: "320+",
    location: "Nevşehir Merkez",
    hours: "09:00 - 18:00 (Acil Durumlar Hariç)",
    price: "Özel Klinik Tarifesi",
    note: "Tatil sırasında yaşanabilecek ani diş ağrıları veya kırılmaları tam bir kabusa dönüşebilir. Nevşehir merkezde son derece modern ve temiz özel diş klinikleri bulunuyor. Acil randevu için yardımcı olabilirim.",
    mapLink: "https://maps.google.com/?q=Nevsehir+Dis+Klinigi",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800"
  }
];

export default function HealthDirectory() {
  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-gray-200 overflow-x-hidden">
      
      {/* ======================================================= */}
      {/* 1. ÜST BAŞLIK (Header & Geri Dön Butonu) */}
      {/* ======================================================= */}
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto border-b border-white/10 relative">
        <Link href="/local-guide" className="inline-flex items-center gap-2 text-gray-500 hover:text-yellow-500 transition-colors mb-8 font-bold tracking-widest text-xs uppercase">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Rehbere Dön
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: appleEase }}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🏥</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Sağlık & Acil</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya seyahatinizde yaşayabileceğiniz olası sağlık problemlerinde en hızlı ve güvenilir çözüme ulaşacağınız hastaneler ve nöbetçi eczane bilgileri.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. MEKAN KARTLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {healthPlaces.map((place, index) => (
            <motion.div 
              key={place.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-red-500/30 transition-colors duration-500 flex flex-col shadow-xl"
            >
              {/* Görsel Alanı */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000 ease-out" />
                
                {/* Sol Üst - Kategori */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest z-20">
                  {place.category}
                </div>

                {/* Sağ Alt - Puan */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 z-20">
                  <span className="text-red-500">★</span> {place.rating} <span className="text-gray-400 font-normal">({place.reviews})</span>
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
                  <div className="flex items-center gap-4 text-gray-300 text-sm">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-lg border border-white/10">💳</div> 
                    {place.price}
                  </div>
                </div>

                {/* Mehmet'in Notu (Kırmızı Konseptli) */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-5 mb-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-red-500/50">
                      <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-red-400 font-bold text-[10px] uppercase tracking-widest">Mehmet&apos;in Notu</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">&quot;{place.note}&quot;</p>
                </div>

                {/* Harita Butonu */}
                <Link 
                  href={place.mapLink}
                  target="_blank"
                  className="w-full bg-white/5 hover:bg-red-500 hover:text-white border border-white/10 hover:border-red-500 text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Konum Göster <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================= */}
      {/* 3. YARDIM ÇAĞRISI (Acil Durum CTA) */}
      {/* ======================================================= */}
      <div className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🚨</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Acil Bir Durum mu Var?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Gece yarısı nöbetçi eczane bulmanız gerekiyorsa veya hastaneye gitmek için acil bir taksiye ihtiyacınız varsa çekinmeden bana yazabilirsiniz. Sağlığınız her şeyden önemlidir.
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