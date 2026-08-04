"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Gerçek Kapadokya Ulaşım & Araç Verileri
const transportPlaces = [
  {
    id: 1,
    name: "Kayseri (ASR) & Nevşehir (NAV) Havalimanı",
    category: "Paylaşımlı & VIP Transfer",
    rating: "4.9",
    reviews: "2.8k+",
    location: "Kapadokya Geneli",
    hours: "Uçuş Saatlerine Göre",
    price: "Ortalama (Kişi Başı)",
    note: "Nevşehir havalimanı 40 dk, Kayseri ise 1 saat 15 dk sürer. Kapıdan taksi tutmak çok masraflıdır. En akıllıca yol, gelmeden önce 'Shared Shuttle' (Paylaşımlı Transfer) veya aileniz için VIP Vito ayarlamaktır. Sizi kapıda isminizle karşılarlar.",
    mapLink: "https://maps.google.com/?q=Kayseri+Airport",
    image: "https://images.unsplash.com/photo-1596422846543-739343c5bdf1?q=80&w=800"
  },
  {
    id: 2,
    name: "Kapadokya Yerel Dolmuşları",
    category: "Ekonomik Ulaşım",
    rating: "4.5",
    reviews: "950+",
    location: "Göreme, Uçhisar, Avanos, Ürgüp",
    hours: "08:00 - 19:00 (Her 30 Dk'da bir)",
    price: "Çok Uygun",
    note: "Kasabalar arası gezmenin en ucuz yolu minibüslerdir. Göreme Otogar'dan kalkar ve Uçhisar, Avanos gibi yerlere giderler. Yalnız dikkat: Akşam 19:00'dan sonra dolmuş bulmak neredeyse imkansızdır, bu saatten sonra taksiye kalırsınız.",
    mapLink: "https://maps.google.com/?q=Goreme+Otogar",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800"
  },
  {
    id: 3,
    name: "Göreme Meydan Taksi",
    category: "Hızlı Ulaşım",
    rating: "4.3",
    reviews: "600+",
    location: "Göreme Merkez",
    hours: "7/24 Açık",
    price: "Mesafe Bazlı (Taksimetre)",
    note: "Özellikle akşam yemekleri sonrası veya vadilere hızlıca gitmek için taksi şarttır. Taksiler sarıdır ve binmeden önce mutlaka taksimetrenin açılmasını (veya gideceğiniz yere net bir fiyat verilmesini) rica edin.",
    mapLink: "https://maps.google.com/?q=Goreme+Taksi",
    image: "https://images.unsplash.com/photo-1549316531-18cb56a73507?q=80&w=800"
  },
  {
    id: 4,
    name: "Araç & ATV Kiralama",
    category: "Bireysel Keşif",
    rating: "4.7",
    reviews: "1.1k+",
    location: "Tüm Kapadokya",
    hours: "09:00 - 20:00",
    price: "Günlük Ücretlendirme",
    note: "Eğer Ihlara Vadisi veya Yeraltı Şehirleri gibi uzak rotaları (Green Tour rotası) kendiniz gezmek istiyorsanız 1-2 günlük araç kiralayabilirsiniz. Vadilerin içine girmek için ise araç değil, kesinlikle rehberli ATV turu tavsiye ederim.",
    mapLink: "https://maps.google.com/?q=Cappadocia+Rent+a+Car",
    image: "https://images.unsplash.com/photo-1519003300449-424ad0405076?q=80&w=800"
  }
];

export default function TransportDirectory() {
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
            <span className="text-4xl">🚕</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Ulaşım & Araç</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya&apos;ya iniş yaptığınız andan itibaren otelinize nasıl geçeceğiniz, kasabalar arası yerel ulaşım hatları ve güvenilir seyahat ipuçları.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. MEKAN KARTLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transportPlaces.map((place, index) => (
            <motion.div 
              key={place.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-yellow-500/30 transition-colors duration-500 flex flex-col shadow-xl"
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
                  Konum Göster <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
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
          <div className="text-4xl mb-4">✈️</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Havalimanı Transferinizi Ayarladınız mı?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Uçaktan indiğinizde stres yaşamayın. İster lüks Mercedes Vito VIP transfer, ister uygun fiyatlı paylaşımlı (Shuttle) transfer rezervasyonlarınız için bana uçuş kodunuzu göndermeniz yeterli.
          </p>
          <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#1ebd5b] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1">
            Transfer Ayarla
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </main>
  );
}