"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Gerçek Kapadokya Konaklama Verileri
const hotelsPlaces = [
  {
    id: 1,
    name: "Doors of Cappadocia Hotel",
    category: "Premium Mağara Otel",
    rating: "4.9",
    reviews: "1.5k+",
    location: "Göreme Milli Parkı Merkezi",
    hours: "7/24 Resepsiyon",
    price: "Premium",
    note: "Kapadokya'da konaklama denilince ilk aklıma gelen, bizzat çalıştığım ve misafirlerimi gönül rahatlığıyla ağırladığım evimiz. Açık havuzu, enfes teras manzarası ve otantik kaya (cave) odalarıyla kusursuzdur. Geldiğinizde bizzat ilgileneceğimden şüpheniz olmasın.",
    mapLink: "https://maps.google.com/?q=Doors+of+Cappadocia+Hotel",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800"
  },
  {
    id: 2,
    name: "Seki Cave Çavuşin",
    category: "Butik & Romantik",
    rating: "4.8",
    reviews: "950+",
    location: "Çavuşin Köyü",
    hours: "7/24 Resepsiyon",
    price: "Üst Segment",
    note: "Göreme'nin kalabalığından bir tık uzakta, sessizlik ve huzur arayan balayı çiftleri için harika bir butik otel alternatifi. Tarihi dokusu çok iyi korunmuş.",
    mapLink: "https://maps.google.com/?q=Seki+Cave+Hotel+Cappadocia",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800"
  },
  {
    id: 3,
    name: "Goreme Suit & Apart",
    category: "Aile Konaklaması",
    rating: "4.6",
    reviews: "420+",
    location: "Göreme Merkez",
    hours: "Esnek Giriş/Çıkış",
    price: "Uygun / Orta",
    note: "Eğer kalabalık bir aileyseniz veya çocuklarınızla rahat etmek istiyorsanız, mutfağı ve geniş oturma alanları olan apart seçenekleri çok daha ekonomik ve konforlu olacaktır.",
    mapLink: "https://maps.google.com/?q=Goreme+Apart",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800"
  },
  {
    id: 4,
    name: "Kızılçukur Glamping",
    category: "Doğa & Kamp",
    rating: "4.7",
    reviews: "310+",
    location: "Kızılçukur Vadisi Yakınları",
    hours: "Doğayla İç İçe",
    price: "Orta Segment",
    note: "Otel duvarları arasına sıkışmak istemeyen doğa aşıkları için lüks çadır (Glamping) konsepti. Sabah balonların hemen üstünüzden geçişini izleyerek uyanmak inanılmaz bir tecrübe.",
    mapLink: "https://maps.google.com/?q=Cappadocia+Glamping",
    image: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?q=80&w=800"
  }
];

export default function HotelsDirectory() {
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
            <span className="text-4xl">🏨</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Konaklama</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya ruhunu tam anlamıyla yaşayabileceğiniz taş ve mağara oteller, geniş ailelere uygun apartlar ve doğayla iç içe butik seçenekler.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. MEKAN KARTLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hotelsPlaces.map((place, index) => (
            <motion.div 
              key={place.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className={`bg-white/5 border ${index === 0 ? 'border-yellow-500/50 shadow-[0_0_30px_rgba(234,179,8,0.15)]' : 'border-white/10'} rounded-[2rem] overflow-hidden group hover:border-yellow-500/30 transition-colors duration-500 flex flex-col shadow-xl relative`}
            >
              {/* İlk Otel (Doors of Cappadocia) için Özel "Tavsiye" Etiketi */}
              {index === 0 && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-6 py-1 rounded-b-xl text-[10px] font-extrabold uppercase tracking-widest z-30 shadow-lg">
                  Mehmet&apos;in Özel Tavsiyesi
                </div>
              )}

              {/* Görsel Alanı */}
              <div className="h-64 relative overflow-hidden mt-2">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000 ease-out" />
                
                {/* Sol Üst - Kategori */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest z-20">
                  {place.category}
                </div>

                {/* Sağ Alt - Puan */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 z-20">
                  <span className="text-yellow-500">★</span> {place.rating} <span className="text-gray-400 font-normal">({place.reviews})</span>
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
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-lg border border-white/10">💰</div> 
                    {place.price}
                  </div>
                </div>

                {/* Mehmet'in Notu */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 mb-8 flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-yellow-500/50">
                      <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">Mehmet&apos;in Notu</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">&quot;{place.note}&quot;</p>
                </div>

                {/* Harita Butonu */}
                <Link 
                  href={place.mapLink}
                  target="_blank"
                  className="w-full bg-white/5 hover:bg-yellow-500 hover:text-black border border-white/10 hover:border-yellow-500 text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Haritada Göster <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================= */}
      {/* 3. YARDIM ÇAĞRISI (Premium CTA) */}
      {/* ======================================================= */}
      <div className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🧳</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Otelinizi Hala Seçmediniz mi?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Kapadokya'daki yüzlerce otel arasından kaybolmayın. Doors of Cappadocia başta olmak üzere, zevkinize ve bütçenize en uygun VIP odaları özel fiyatlarla ayarlamak için bana yazın.
          </p>
          <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#1ebd5b] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1">
            Müsaitlik ve Fiyat Sorun
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </main>
  );
}