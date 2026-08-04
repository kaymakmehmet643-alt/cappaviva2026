"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Gerçek Kapadokya Finans/Banka Verileri
const financePlaces = [
  {
    id: 1,
    name: "PTT Göreme Şubesi",
    category: "En İyi Kur & Döviz Bozdurma",
    rating: "4.8",
    reviews: "500+",
    location: "Göreme Merkez",
    hours: "08:30 - 17:00 (Hafta İçi)",
    fee: "Düşük Komisyon",
    note: "Havalimanında veya otellerde para bozdurmanızı kesinlikle önermem. En adil ve şeffaf döviz kurlarını (Dolar/Euro) her zaman PTT'den (Postane) veya yetkili döviz bürolarından alabilirsiniz.",
    mapLink: "https://maps.google.com/?q=Goreme+PTT",
    image: "https://images.unsplash.com/photo-1621847468128-4ce6e107db58?q=80&w=800"
  },
  {
    id: 2,
    name: "Göreme Meydan ATM Noktaları",
    category: "7/24 Nakit Çekim",
    rating: "4.5",
    reviews: "1.2k+",
    location: "Göreme Otobüs Terminali Yanı",
    hours: "7/24 Açık",
    fee: "Bankanıza Göre Değişir",
    note: "Türkiye'deki büyük bankaların (Ziraat, Garanti, İş Bankası, Akbank) ATM'leri meydanda yan yana bulunur. Vadilere veya alışverişe gitmeden önce yanınızda mutlaka ufak banknotlar halinde nakit Türk Lirası bulundurun.",
    mapLink: "https://maps.google.com/?q=Goreme+Otogar",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800"
  },
  {
    id: 3,
    name: "Uluslararası Para Transferi (Western Union)",
    category: "Acil Para Transferi",
    rating: "4.7",
    reviews: "320+",
    location: "Göreme Döviz Büroları & PTT",
    hours: "09:00 - 18:00",
    fee: "Standart WU Komisyonu",
    note: "Yurt dışından acil nakit almanız veya göndermeniz gerekirse Göreme merkezdeki yetkili döviz büroları 'Western Union' veya 'MoneyGram' altyapısıyla çalışmaktadır. Pasaportunuz yanınızda olmalı.",
    mapLink: "https://maps.google.com/?q=Goreme+Exchange",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800"
  },
  {
    id: 4,
    name: "Nevşehir Merkez Bankalar Caddesi",
    category: "Resmi Banka Şubeleri",
    rating: "4.6",
    reviews: "800+",
    location: "Nevşehir Merkez (20 dk mesafede)",
    hours: "09:00 - 17:00 (Hafta İçi)",
    fee: "Resmi İşlemler",
    note: "Turistik kasabalarda sadece ATM bulunur. Limit üstü büyük meblağlı para çekimi, kart yenileme veya resmi şube işlemleri için Göreme'den araçla 20 dakika uzaklıktaki Nevşehir merkeze gitmeniz gerekir.",
    mapLink: "https://maps.google.com/?q=Nevsehir+Bankalar+Caddesi",
    image: "https://images.unsplash.com/photo-1541354329998-f419af261010?q=80&w=800"
  }
];

export default function FinanceDirectory() {
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
            <span className="text-4xl">🏦</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Finans & Banka</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya seyahatinizde nakit ihtiyacınızı karşılayabileceğiniz, kur kaybı yaşamadan döviz bozdurabileceğiniz en güvenilir ve merkezi noktalar.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. MEKAN KARTLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {financePlaces.map((place, index) => (
            <motion.div 
              key={place.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-yellow-500/30 transition-colors duration-500 flex flex-col"
            >
              {/* Görsel Alanı */}
              <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000 ease-out" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 z-20">
                  <span className="text-green-400">★</span> {place.rating} <span className="text-gray-400 font-normal">({place.reviews})</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-green-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest z-20">
                  {place.category}
                </div>
              </div>

              {/* Detaylar */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">{place.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="text-lg">📍</span> {place.location}
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="text-lg">🕒</span> {place.hours}
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="text-lg">💸</span> {place.fee}
                  </div>
                </div>

                {/* Mehmet'in Notu */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 mb-8 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-yellow-500/50">
                      <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest">Mehmet&apos;in Notu</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic">&quot;{place.note}&quot;</p>
                </div>

                {/* Harita Butonu */}
                <Link 
                  href={place.mapLink}
                  target="_blank"
                  className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-center py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                >
                  Haritada Gör <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
          <h3 className="text-2xl font-bold text-white mb-4">Ödemeler veya Transferler Hakkında Sorunuz mu Var?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Hangi para birimiyle ödeme yapmanın daha mantıklı olduğunu öğrenmek veya tatil bütçenizi planlarken yardım almak isterseniz, bana doğrudan yazabilirsiniz.
          </p>
          <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#1ebd5b] transition-all">
            WhatsApp&apos;tan Yazın
          </Link>
        </div>
      </div>

    </main>
  );
}