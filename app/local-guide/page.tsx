"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

// Apple Tarzı Kusursuz Animasyon Geçişi
const appleEase = "easeOut";

export default function LocalGuide() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Sayfaya Su Damlası Gibi Düşme Animasyonu
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: appleEase } }
  };

  return (
    <main className="w-full min-h-screen bg-[#0a0a0a] text-gray-200 overflow-x-hidden selection:bg-yellow-500 selection:text-black">
      
      {/* ======================================================= */}
      {/* 1. HERO (VİDEOLU / GÖRSELLİ ELİT GİRİŞ) */}
      {/* ======================================================= */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0a0a0a] z-10"></div>
          {/* Arka plan görseli (Kapadokya Manzarası) */}
          <img src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2000" alt="Cappadocia Local Guide" className="w-full h-full object-cover" />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs md:text-sm block mb-6">
              CappaViva Exclusive
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Kapadokya <br/> <span className="text-gray-500 font-light">Şehir Rehberi.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              Seyahatinizi planlarken ihtiyaç duyacağınız tüm detaylar, mekanlar, ulaşım bilgileri ve yerel tavsiyeler. Kapadokya&apos;yı bir uzmanın rehberliğinde keşfedin.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* ======================================================= */}
      {/* 2. MEHMET'İN PROFESYONEL VE SAMİMİ MEKTUBU */}
      {/* ======================================================= */}
      <div className="py-20 md:py-28 px-6 max-w-4xl mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: appleEase }}
          className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-md flex flex-col md:flex-row gap-10 items-center md:items-start shadow-2xl relative overflow-hidden"
        >
          {/* Işık Efekti */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* FOTOĞRAF ALANI: Kendi profesyonel fotoğrafını buraya koyacaksın */}
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] overflow-hidden flex-shrink-0 border border-white/20 shadow-2xl relative">
           <img src="/mehmet-profil.jpg" alt="Mehmet - Kurucu" className="w-full h-full object-cover" />
          </div>
          
          <div className="text-center md:text-left relative z-10">
            <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Merhaba, Ben Mehmet 👋</h3>
            <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-6">CappaViva Kurucusu & Yerel Rehber</p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
              Kapadokya benim doğup büyüdüğüm, sokaklarını ve vadilerini avucumun içi gibi bildiğim evim. Turizm sektöründeki yıllara dayanan tecrübemle CappaViva&apos;yı kurarken en büyük amacım; misafirlerimize standart bir seyahatin ötesinde, bölgenin gerçek ruhunu yansıtan <strong className="text-white">prestijli ve güvenilir bir deneyim</strong> sunmaktı.
              <br/><br/>
              Aşağıda hazırladığım bu rehber, tatiliniz boyunca hayatınızı kolaylaştıracak adresleri ve ipuçlarını içeriyor. Harika bir tatil geçirmenizi dilerim. Planlama, turlar veya ulaşım konusunda profesyonel desteğe ihtiyaç duyduğunuz her an, bir mesaj uzağınızdayım.
            </p>
            {/* WHATSAPP BUTONU (Doğrudan sana gelir) */}
            <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:text-yellow-400 transition-colors">
              WhatsApp&apos;tan Ulaşın <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* EKSTRA KALİTE: CANLI BALON DURUMU (Turistlerin en çok sorduğu soru) */}
      {/* ======================================================= */}
      <div className="px-6 max-w-7xl mx-auto -mt-10 mb-20 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: appleEase }}
          className="bg-gradient-to-r from-blue-900/40 to-black border border-blue-500/30 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between shadow-2xl"
        >
          <div className="flex items-center gap-5 mb-4 md:mb-0">
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl animate-pulse">🎈</div>
            <div>
              <h4 className="text-white font-bold text-lg">Günlük Balon Uçuş Durumu</h4>
              <p className="text-blue-300 text-sm">Sivil Havacılık Kurumu (SHGM) Güncel Verisi</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-green-500/20 border border-green-500/50 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full relative z-10"></div>
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Uçuşlar Onaylandı (Yeşil Bayrak)</span>
          </div>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 3. THE CAPPADOCIA DIRECTORY (Dev Şehir Rehberi Kategorileri) */}
      {/* ======================================================= */}
      <div className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: appleEase }} className="mb-16 md:flex justify-between items-end">
          <div>
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">City Directory</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">Bölge Rehberi</h2>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-md">Kapadokya&apos;da aradığınız her mekanı puanları, harita konumları ve kendi profesyonel yorumlarımla inceleyin.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {/* Kategoriler Senin Verdigin Listeden */}
          {[
            { title: "Finans & Banka", icon: "🏦", desc: "ATM, Döviz, PTT", link: "/directory/finance" },
            { title: "Yeme & İçme", icon: "🍽️", desc: "Restoran, Kahve, Vegan", link: "/directory/food" },
            { title: "Konaklama", icon: "🏨", desc: "Oteller, Apartlar", link: "/directory/hotels" },
            { title: "Ulaşım & Araç", icon: "🚗", desc: "Taksi, Rent a Car", link: "/directory/transport" },
            { title: "Sağlık & Acil", icon: "🏥", desc: "Hastane, Nöbetçi Eczane", link: "/directory/health" },
            { title: "Alışveriş", icon: "🛒", desc: "Market, Hediyelik", link: "/directory/shopping" },
            { title: "Gezilecek Yerler", icon: "🎯", desc: "Müzeler, Vadiler, Plajlar", link: "/directory/places" },
            { title: "Aile & Çocuk", icon: "👨‍👩‍👧", desc: "Çocuk dostu mekanlar", link: "/directory/family" },
            { title: "Resmi İşlemler", icon: "💼", desc: "Noter, Konsolosluk", link: "/directory/official" },
            { title: "İbadet Yerleri", icon: "🕌", desc: "Cami, Kilise, Saatler", link: "/directory/religion" },
            { title: "Güncel Etkinlik", icon: "📅", desc: "Festival ve Konserler", link: "/directory/events" },
            { title: "Erişilebilirlik", icon: "♿", desc: "Engelli dostu rotalar", link: "/directory/accessibility" },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link href={item.link} className="flex flex-col p-6 bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-white/10 rounded-3xl transition-all duration-500 h-full group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="text-4xl mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 origin-left relative z-10">{item.icon}</span>
                <h4 className="text-lg font-extrabold text-white mb-1 relative z-10">{item.title}</h4>
                <p className="text-xs text-gray-500 relative z-10">{item.desc}</p>
                {/* Gelecek sayfalar için kalite detayı notu */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                  <span>Harita & Konum</span>
                  <span>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 4. DEEP DIVE GUIDES (Hazır Rotalar, SSS, Blog vb.) */}
      {/* ======================================================= */}
      <div className="py-24 border-y border-white/10 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: appleEase }} className="text-center mb-16">
            <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Expert Advice</span>
            <h2 className="text-4xl font-extrabold text-white mt-2">Kapsamlı Seyahat Rehberleri</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Kart: İlk Kez Gelenler */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.1, ease: appleEase }}>
              <Link href="/guide/first-timers" className="block bg-black border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 group">
                <div className="text-4xl mb-6">🎒</div>
                <h3 className="text-xl font-bold text-white mb-3">İlk Kez Gelenler</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Kapadokya nerede? Hangi şehirde konaklanmalı ve kaç gün kalınmalı? Sıfırdan planlama rehberi.</p>
                <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform inline-block">İncele →</span>
              </Link>
            </motion.div>

            {/* Kart: Hazır Rotalar */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2, ease: appleEase }}>
              <Link href="/itineraries" className="block bg-black border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 group">
                <div className="text-4xl mb-6">🗺️</div>
                <h3 className="text-xl font-bold text-white mb-3">Hazır Rotalar</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Planlama ile uğraşmayın. Uzman ekibimizin hazırladığı 1, 2, 3 günlük veya balayı odaklı özel gezi planları.</p>
                <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform inline-block">İncele →</span>
              </Link>
            </motion.div>

            {/* Kart: Ne Zaman Gelmeli */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.3, ease: appleEase }}>
              <Link href="/guide/seasons" className="block bg-black border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 group">
                <div className="text-4xl mb-6">🌤️</div>
                <h3 className="text-xl font-bold text-white mb-3">Ne Zaman Gelmeli?</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Ocak ayında balon uçar mı? Sonbaharda vadiler nasıldır? Her aya özel Kapadokya mevsim rehberi.</p>
                <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform inline-block">İncele →</span>
              </Link>
            </motion.div>

            {/* Kart: Sık Sorulan Sorular */}
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4, ease: appleEase }}>
              <Link href="/guide/faq" className="block bg-black border border-white/10 rounded-3xl p-8 hover:border-yellow-500/50 transition-all duration-500 group">
                <div className="text-4xl mb-6">❓</div>
                <h3 className="text-xl font-bold text-white mb-3">Sık Sorulanlar</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">Çocuklar balona binebilir mi? Hamileler ATV&apos;ye binebilir mi? En çok merak ettiğiniz soruların net cevapları.</p>
                <span className="text-yellow-500 text-sm font-bold tracking-widest uppercase group-hover:translate-x-2 transition-transform inline-block">İncele →</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ======================================================= */}
      {/* 5. GÜÇLÜ, PRESTİJLİ VE DOĞAL CTA (Satış / Rezervasyon Çağrısı) */}
      {/* ======================================================= */}
      <div className="py-32 px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: appleEase }}
          className="relative z-10 bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] text-center max-w-4xl mx-auto shadow-2xl"
        >
          <div className="w-20 h-20 mx-auto bg-yellow-500/20 rounded-full flex items-center justify-center mb-8 border border-yellow-500/50">
            <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">CappaViva ile Kusursuz Seyahat</h2>
          <p className="text-gray-300 mb-10 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Kapadokya&apos;yı kendi başınıza keşfetmek harika bir macera. Rehberimizdeki bilgilerle rotanızı kolayca oluşturabilirsiniz. 
            <br/><br/>
            <strong className="text-white font-bold">Ancak zaman kazanmak, stressiz bir tatil yaşamak ve sadece en iyi hizmeti almak isterseniz;</strong> yerel bir acente olarak sıcak hava balonu, lüks transferler ve özel günlük turlarınızda size kusursuz bir operasyonla hizmet vermekten onur duyarız.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/tours" 
              className="w-full sm:w-auto bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all duration-300 hover:-translate-y-1"
            >
              Premium Turları İnceleyin
            </Link>
            <Link 
              href="https://wa.me/905354322782" 
              target="_blank"
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              WhatsApp&apos;tan Ulaşın
            </Link>
          </div>
        </motion.div>
      </div>

    </main>
  );
}