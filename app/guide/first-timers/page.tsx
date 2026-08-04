"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// İlk Kez Gelenler İçin 4 Altın Adım
const firstTimerSteps = [
  {
    id: 1,
    name: "Kapadokya Aslında Neresi? & Ulaşım",
    category: "Bölgeyi Anlamak",
    icon: "🗺️",
    summary: "Havalimanı Seçimi & Bölge Dağılımı",
    note: "Kapadokya tek bir şehir değildir; Nevşehir, Kayseri ve Aksaray illerine yayılan devasa bir bölgedir. Turistik merkez ise Nevşehir'e bağlı Göreme, Ürgüp, Uçhisar ve Avanos kasabalarıdır. Uçakla geliyorsanız biletinizi Nevşehir (NAV) veya Kayseri (ASR) havalimanlarından birine almalısınız.",
    image: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800"
  },
  {
    id: 2,
    name: "Hangi Kasabada Konaklamalı?",
    category: "Otel Seçimi",
    icon: "🏨",
    summary: "Göreme, Uçhisar veya Ürgüp?",
    note: "Eğer her yere yürüyerek ulaşmak, restoranların ortasında olmak ve balonları sabah yatağınızdan izlemek istiyorsanız Göreme'yi seçin. Daha lüks, sessiz ve panoramik manzaralı elit bir konaklama arıyorsanız Uçhisar'ı, butik şarap evleri ve konak mimarisi içinse Ürgüp'ü tercih etmelisiniz.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800"
  },
  {
    id: 3,
    name: "Kaç Gün Kalmak Yeterli Olur?",
    category: "Zaman Planlaması",
    icon: "⏳",
    summary: "İdeal Süre: 2 - 4 Gün",
    note: "Kapadokya'nın ana hatlarını (Müzeler, Balon Turu, Çömlek Atölyesi ve Vadiler) görebilmek için en az 2 tam güne ihtiyacınız var. Ancak yeraltı şehirleri, Ihlara Vadisi gibi uzak rotaları da eklemek isterseniz 3 veya 4 günlük bir plan en ideali olacaktır.",
    image: "https://images.unsplash.com/photo-1511215160912-70baf408d689?q=80&w=800"
  },
  {
    id: 4,
    name: "En Büyük Hata: Son Dakikaya Bırakmak",
    category: "Rezervasyon Uyarıları",
    icon: "⚠️",
    summary: "Balon ve VIP Turlar",
    note: "İlk kez gelenlerin yaptığı en büyük hata, sıcak hava balonu turunu veya lüks cave (mağara) otel rezervasyonlarını buraya gelince yaparım diye düşünmektir. Yüksek sezonda balonlarda ve en iyi otellerde yer bulmak imkansızdır. Tüm biletlerinizi haftalar öncesinden CappaViva ile sabitleyin.",
    image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800"
  }
];

export default function FirstTimersGuide() {
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
            <span className="text-4xl">🎒</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">İlk Kez Gelenler</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya&apos;ya ilk seyahatinizi planlarken bilmeniz gereken altın kurallar, bölge dinamikleri ve hayat kurtaran yerel ipuçları.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. REHBER ADIMLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12">
          {firstTimerSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-yellow-500/30 transition-colors duration-500 flex flex-col md:flex-row shadow-xl"
            >
              {/* Görsel Alanı */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                <img src={step.image} alt={step.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000 ease-out" />
                
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest z-20 flex items-center gap-2">
                  <span className="text-xl">{step.icon}</span> ADIM {index + 1}
                </div>
              </div>

              {/* Detaylar & Notlar */}
              <div className="p-8 md:p-10 flex flex-col flex-1 justify-center">
                <span className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-2 block">{step.category}</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">{step.name}</h3>
                <h4 className="text-lg text-gray-400 mb-6 font-light">{step.summary}</h4>

                {/* Mehmet'in Notu */}
                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 mt-auto relative">
                  <div className="absolute -top-4 left-6 bg-[#0a0a0a] border border-yellow-500/30 px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <img src="/mehmet-profil.jpg" alt="Mehmet" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">Rehberin Notu</span>
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-2">&quot;{step.note}&quot;</p>
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
          <div className="text-4xl mb-4">✍️</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Tatilinizi Birlikte Planlayalım</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            İlk seyahatinizde risk almayın. Otel konaklamanızdan sıcak hava balonuna, havalimanı transferinden günlük VIP turlarınıza kadar tüm tatilinizi kusursuz bir şekilde uçtan uca planlamak için bana ulaşın.
          </p>
          <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#1ebd5b] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1">
            Ücretsiz Danışmanlık Alın
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </main>
  );
}