"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Gerçek Kapadokya İbadet Yerleri Verileri
const religionPlaces = [
  {
    id: 1,
    name: "Göreme Merkez Camii",
    category: "İslami İbadet",
    rating: "4.9",
    reviews: "Cami",
    location: "Göreme Meydanı",
    hours: "Vakit Namazlarında Açık",
    price: "Ücretsiz",
    note: "Göreme'nin tam merkezinde yer alır. Özellikle cuma namazları için bölgedeki en erişilebilir ve büyük camilerden biridir. Turistik bölgede olduğu için hem yerel halkı hem de Müslüman turistleri bir araya getirir.",
    mapLink: "https://maps.google.com/?q=Goreme+Merkez+Camii",
    image: "https://images.unsplash.com/photo-1542616900-511ce2c70da4?q=80&w=800" 
  },
  {
    id: 2,
    name: "Ortodoks Kilisesi (Meryem Ana Kilisesi) - Nevşehir",
    category: "Hristiyan İbadet & Tarih",
    rating: "4.7",
    reviews: "Tarihi Kilise",
    location: "Nevşehir Merkez",
    hours: "Müze Statüsünde (Genellikle)",
    price: "Ücretsiz / Bağış",
    note: "Bölgedeki pek çok tarihi kilise müze statüsünde (örn. Göreme Açık Hava Müzesi) olduğu için aktif ibadete kapalıdır. Ancak özel izinlerle veya bölgedeki azınlık cemaatlerinin özel günlerinde bazı kiliselerde ayinler düzenlenebiliyor.",
    mapLink: "https://maps.google.com/?q=Nevsehir+Meryem+Ana+Kilisesi",
    image: "https://images.unsplash.com/photo-1548625361-ec8530182fc6?q=80&w=800"
  },
  {
    id: 3,
    name: "Tarihi Kurşunlu Camii (Damat İbrahim Paşa Külliyesi)",
    category: "İslami İbadet & Tarih",
    rating: "4.8",
    reviews: "Tarihi Külliye",
    location: "Nevşehir Merkez",
    hours: "İbadete Açık",
    price: "Ücretsiz",
    note: "Osmanlı Sadrazamı Nevşehirli Damat İbrahim Paşa tarafından yaptırılan bu tarihi cami, Lale Devri mimarisinin en güzel örneklerinden biridir. Hem ibadet etmek hem de tarihi dokuyu hissetmek için görülmeye değer.",
    mapLink: "https://maps.google.com/?q=Kursunlu+Camii+Nevsehir",
    image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=800"
  },
  {
    id: 4,
    name: "Uçhisar Merkez Camii",
    category: "İslami İbadet",
    rating: "4.6",
    reviews: "Cami",
    location: "Uçhisar Merkez",
    hours: "Vakit Namazlarında Açık",
    price: "Ücretsiz",
    note: "Uçhisar Kalesi'nin eteklerinde, yöresel mimariye uygun taştan yapılmış oldukça estetik bir camidir. Bölgeyi gezerken ibadet ihtiyacınız için huzurlu bir nokta.",
    mapLink: "https://maps.google.com/?q=Uchisar+Merkez+Camii",
    image: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=800"
  }
];

export default function ReligionDirectory() {
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
            <span className="text-4xl">🕌</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">İbadet Yerleri</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Seyahatiniz sırasında dini vecibelerinizi yerine getirebileceğiniz tarihi camiler, cuma namazı noktaları ve bölgenin inanç turizmi bilgileri.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. MEKAN KARTLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {religionPlaces.map((place, index) => (
            <motion.div 
              key={place.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500 flex flex-col shadow-xl"
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
                  <span className="text-emerald-500">☪️</span> {place.reviews}
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
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 mb-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-emerald-500/50">
                      <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-widest">Mehmet&apos;in Notu</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">&quot;{place.note}&quot;</p>
                </div>

                {/* Harita Butonu */}
                <Link 
                  href={place.mapLink}
                  target="_blank"
                  className="w-full bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 hover:border-emerald-500 text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Konum Göster <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </main>
  );
}