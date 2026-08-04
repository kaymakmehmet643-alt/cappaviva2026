"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Kapadokya Mevsim Rehberi Verileri
const seasonData = [
  {
    id: 1,
    name: "İlkbahar (Nisan - Mayıs)",
    category: "En Popüler Dönem",
    icon: "🌸",
    summary: "Ilık Hava & Uyanan Doğa",
    note: "Kapadokya'nın en yoğun ve en pahalı sezonudur. Hava ne çok sıcak ne de çok soğuktur, tam vadi yürüyüşü havasıdır. Çiçek açan ağaçlar eşliğinde balon turları muazzam olur. Bu dönemde gelecekseniz aylar öncesinden rezervasyon yapmanız şarttır.",
    image: "https://images.unsplash.com/photo-1544025162-811114bd4b5a?q=80&w=800"
  },
  {
    id: 2,
    name: "Yaz (Haziran - Ağustos)",
    category: "Sıcak & Canlı",
    icon: "☀️",
    summary: "Güneş & Havuz Keyfi",
    note: "Gündüzleri güneş oldukça yakıcı olabilir, bu yüzden vadileri sabah erken veya akşamüstü gezmek en mantıklısıdır. Öğle saatlerini mağara (cave) otelinizin serin odasında veya havuzunda geçirmelisiniz. Gökyüzü genellikle bulutsuz ve açıktır.",
    image: "https://images.unsplash.com/photo-1610705180860-234255153282?q=80&w=800" 
  },
  {
    id: 3,
    name: "Sonbahar (Eylül - Kasım)",
    category: "Fotoğrafçıların Favorisi",
    icon: "🍁",
    summary: "Sarı Yapraklar & Bağ Bozumu",
    note: "Bence Kapadokya'nın en güzel halidir! Aşırı sıcaklar bitmiş, tatlı bir esinti başlamıştır. Vadiler sarı ve kızıl tonlara bürünür. Ayrıca Eylül ortasında ünlü Ürgüp Bağ Bozumu festivaline denk gelebilir, taze şarapları tadabilirsiniz.",
    image: "https://images.unsplash.com/photo-1595166419799-a1b73bfdb582?q=80&w=800"
  },
  {
    id: 4,
    name: "Kış (Aralık - Mart)",
    category: "Romantik & Bembeyaz",
    icon: "❄️",
    summary: "Kar Altında Peribacaları",
    note: "Hava eksilere düşer ve çok soğuktur ama kar altındaki Kapadokya manzarası dünyanın hiçbir yerine benzemez. Otelinizde şömine karşısında şarabınızı yudumlamak inanılmaz romantiktir. Dikkat: Kışın rüzgar ve sis nedeniyle balon uçuş iptalleri yaz aylarına göre daha sık yaşanır.",
    image: "https://images.unsplash.com/photo-1542616900-511ce2c70da4?q=80&w=800" 
  }
];

export default function SeasonsGuide() {
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
            <span className="text-4xl">🌤️</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Ne Zaman Gelmeli?</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya her mevsim farklı bir rüya gibidir. İlkbaharda uyanan vadilerden, kışın karlar altındaki sessizliğe kadar yılın her dönemi için detaylı hava ve seyahat rehberi.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. REHBER ADIMLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {seasonData.map((season, index) => (
            <motion.div 
              key={season.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-yellow-500/30 transition-colors duration-500 flex flex-col md:flex-row shadow-xl"
            >
              {/* Görsel Alanı */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img src={season.image} alt={season.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000 ease-out" />
                
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest z-20 flex items-center gap-2">
                  <span className="text-xl">{season.icon}</span> {season.name.split(' ')[0]}
                </div>
              </div>

              {/* Detaylar & Notlar */}
              <div className="p-8 md:p-10 flex flex-col flex-1 justify-center">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-2 block">{season.category}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">{season.name}</h3>
                <h4 className="text-lg text-gray-400 mb-6 font-light">{season.summary}</h4>

                {/* Mehmet'in Notu */}
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 mt-auto relative">
                  <div className="absolute -top-4 left-6 bg-[#0a0a0a] border border-yellow-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">Rehberin Notu</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">&quot;{season.note}&quot;</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================= */}
      {/* 3. YARDIM ÇAĞRISI (Planlama CTA) */}
      {/* ======================================================= */}
      <div className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">🗓️</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Tatil Tarihiniz Belli mi?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Hangi mevsimde gelirseniz gelin, o dönemin hava şartlarına en uygun aktiviteleri ve otelleri seçmek tatilinizin kalitesini belirler. Tatil tarihinizi bana iletin, size en uygun rotayı birlikte çıkaralım.
          </p>
          <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#1ebd5b] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1">
            Bana Tarihlerinizi İletin
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </main>
  );
}