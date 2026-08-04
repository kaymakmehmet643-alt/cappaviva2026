"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const appleEase = "easeOut";

// Kapadokya Sık Sorulan Sorular Verileri
const faqData = [
  {
    id: 1,
    question: "Balon turlarına çocuklar ve hamileler binebilir mi?",
    answer: "Sıcak hava balonlarına sivil havacılık kuralları gereği 6 yaşından küçük çocuklar ve hamileler kesinlikle kabul edilmemektedir. 6 yaş ve üzeri çocuklar ise aileleriyle birlikte bu eşsiz deneyimi güvenle yaşayabilirler.",
    icon: "🎈"
  },
  {
    id: 2,
    question: "Müze Kart Kapadokya'da geçerli mi?",
    answer: "Evet, kesinlikle! Göreme Açık Hava Müzesi, Zelve, Paşabağları, Ihlara Vadisi ve Derinkuyu/Kaymaklı Yeraltı Şehirleri gibi devlete bağlı tüm ana ören yerlerinde Müze Kart geçerlidir. Gelmeden önce çıkartmanız büyük avantaj sağlar.",
    icon: "🎫"
  },
  {
    id: 3,
    question: "Tüm Kapadokya'yı gezmek için kendi aracım şart mı?",
    answer: "Şart değil ancak esneklik sağlar. Eğer aracınız yoksa havalimanı transferinizi ayarladıktan sonra bölgede Kırmızı (Red) ve Yeşil (Green) turlara katılarak en önemli yerleri VIP araçlar ve rehber eşliğinde yorulmadan gezebilirsiniz.",
    icon: "🚗"
  },
  {
    id: 4,
    question: "ATV ve At turları tehlikeli mi, daha önce tecrübe gerekir mi?",
    answer: "Hayır, hiçbir tecrübeye ihtiyacınız yok. Hem ATV hem de At turlarında tur öncesi profesyonel rehberler tarafından kısa bir eğitim verilir. Tur boyunca da rehberler gruba öncülük ederek güvenliği sağlar. Sadece hamilelerin katılması önerilmez.",
    icon: "🐎"
  },
  {
    id: 5,
    question: "Her yerde kredi kartı geçiyor mu, yanımda nakit taşımalı mıyım?",
    answer: "Kapadokya'daki oteller, restoranlar ve tur acentelerinin %99'unda kredi kartı geçerlidir. Ancak bahşiş vermek, küçük butiklerden su veya ufak hediyelikler almak, taksi kullanmak için yanınızda mutlaka bir miktar Türk Lirası bulundurmanızı tavsiye ederiz.",
    icon: "💳"
  },
  {
    id: 6,
    question: "Balonlar her gün uçuyor mu, iptal olursa ne olur?",
    answer: "Balonlar yılın 365 günü uçmak üzere planlanır ancak rüzgar ve hava muhalefeti nedeniyle uçuşlar Sivil Havacılık tarafından iptal edilebilir. Eğer uçuşunuz iptal olursa, paranız kesintisiz olarak iade edilir veya (yer varsa) bir sonraki güne kaydırılır.",
    icon: "🌬️"
  }
];

export default function FAQGuide() {
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
            <span className="text-4xl">❓</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Sık Sorulan Sorular</h1>
          </div>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
            Kapadokya seyahatiniz öncesinde kafanıza takılan en kritik sorular ve yerel bir rehberin gözünden net cevaplar.
          </p>
        </motion.div>
      </div>

      {/* ======================================================= */}
      {/* 2. SSS KARTLARI (Listing) */}
      {/* ======================================================= */}
      <div className="py-16 px-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: index * 0.1, ease: appleEase }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:border-yellow-500/30 transition-colors duration-500 shadow-lg group"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-black/50 border border-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-yellow-500/50 transition-all duration-300">
                  {faq.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-yellow-500 transition-colors">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ======================================================= */}
      {/* 3. YARDIM ÇAĞRISI (İletişim CTA) */}
      {/* ======================================================= */}
      <div className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">💬</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Aradığınız Cevabı Bulamadınız mı?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Kapadokya seyahatinizle ilgili özel bir durumunuz veya aklınıza takılan farklı bir soru varsa, çekinmeden doğrudan bana sorabilirsiniz. Size yardımcı olmaktan mutluluk duyarım.
          </p>
          <Link href="https://wa.me/905354322782" target="_blank" className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#1ebd5b] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-1">
            WhatsApp&apos;tan Sorun
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>

    </main>
  );
}