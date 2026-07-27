import Link from "next/link";

export default function GoremePage() {
  return (
    <main className="bg-gray-50 text-gray-900 pb-20">
      
      {/* 1. HERO BÖLÜMÜ (Büyük Kapak Fotoğrafı) */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Göreme Fotoğrafı */}
        <img 
          src="https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=2000" 
          alt="Göreme Kapadokya" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <span className="text-yellow-500 font-bold tracking-widest uppercase mb-2">Heart of Cappadocia</span>
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-xl mb-4">Göreme</h1>
          <p className="text-lg md:text-xl max-w-2xl font-light text-gray-200">
            Peribacalarının arasında uyanın, binlerce yıllık tarihi mağara kiliseleri keşfedin.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-16">
        
        {/* 2. BİLGİ VE TARİHÇE (İçerik) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-6">Göreme Hakkında</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Göreme, Kapadokya bölgesinin tam kalbidir ve dünyanın hiçbir yerinde göremeyeceğiniz eşsiz bir kaya yerleşimi sunar. Vadilerin rüzgar ve yağmurla aşınması sonucu oluşan devasa peribacaları, bu kasabanın sokaklarıyla iç içe geçmiştir.
            </p>
            <p>
              UNESCO Dünya Mirası Listesi'nde yer alan <strong>Göreme Açık Hava Müzesi</strong>'ne ev sahipliği yapan bölge, erken Hristiyanlık döneminden kalma muazzam fresklerle süslü kaya kiliseleriyle ünlüdür. Sabahın ilk ışıklarıyla gökyüzüne yükselen yüzlerce sıcak hava balonu, Göreme vadilerinde görsel bir şölen yaratır.
            </p>
          </div>
        </div>

        {/* 3. BURADA NELER YAPILIR? (Highlight Kartları) */}
        <h3 className="text-2xl font-bold mb-6 text-center">Top Things to Do in Göreme</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="text-4xl mb-4">🎈</div>
            <h4 className="text-xl font-bold mb-2">Balon İzleme</h4>
            <p className="text-gray-600 text-sm">Aşıklar Tepesi'ne (Sunset Point) çıkarak gün doğumunda yüzlerce balonu izleyin.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="text-4xl mb-4">🏛️</div>
            <h4 className="text-xl font-bold mb-2">Açık Hava Müzesi</h4>
            <p className="text-gray-600 text-sm">Kayalara oyulmuş 1000 yıllık manastırları ve kiliseleri ziyaret edin.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
            <div className="text-4xl mb-4">🥾</div>
            <h4 className="text-xl font-bold mb-2">Vadi Yürüyüşleri</h4>
            <p className="text-gray-600 text-sm">Güllüdere ve Kızılçukur vadilerinde büyüleyici doğa yürüyüşlerine çıkın.</p>
          </div>
          
        </div>

        {/* 4. SATIŞA YÖNLENDİRME (Call to Action) */}
        <div className="bg-slate-900 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Göreme'yi Bizimle Keşfedin</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Göreme'nin gizli kalmış vadilerini ATV ile gezmek, at sırtında keşfetmek veya gökyüzünden izlemek ister misiniz?
            </p>
            <Link href="/tours" className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-transform hover:scale-105 shadow-lg shadow-yellow-500/30">
              Göreme Turlarını İncele
            </Link>
          </div>
          {/* Arka plan süsü */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>

      </div>
    </main>
  );
}