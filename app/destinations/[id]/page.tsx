export default function DestinationDetailPage() {
  return (
    <main className="bg-gray-50 text-gray-900 pb-20">
      
      {/* 1. HERO BÖLÜMÜ (Büyük Fotoğraf) */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=2000" 
          alt="Göreme Open Air Museum" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute bottom-0 w-full z-20 p-8 text-white">
          <div className="max-w-5xl mx-auto flex flex-col justify-end h-full">
            <span className="text-yellow-400 font-bold uppercase tracking-wider mb-2 text-sm">📍 Museums</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Göreme Open Air Museum</h1>
            <p className="text-xl font-light max-w-2xl text-gray-200">
              Erken Hıristiyanlık döneminin en önemli kaya oyma kiliseleri ve eşsiz freskleri.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* SOL TARAF: İçerik ve Tarihçe */}
        <div className="md:col-span-2 space-y-10">
          
          <section>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">About the Destination</h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              Göreme Açık Hava Müzesi, Kapadokya'nın kalbi olarak kabul edilir. M.S. 4. yüzyıldan 13. yüzyıla kadar yoğun bir şekilde manastır hayatına ev sahipliği yapmış olan bu alan, kayalara oyulmuş sayısız kilise, şapel ve yemekhaneden oluşur.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Özellikle Karanlık Kilise ve Tokalı Kilise'deki freskler (duvar resimleri), İncil'den sahneleri olağanüstü bir canlılıkla günümüze taşır. Alan, 1985 yılından beri UNESCO Dünya Mirası Listesi'ndedir.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">✨ What You Will See</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
              <div className="flex gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h4 className="font-bold text-black">Karanlık Kilise</h4>
                  <p className="text-sm">Bölgenin en iyi korunmuş freskleri.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-bold text-black">Tokalı Kilise</h4>
                  <p className="text-sm">En büyük kaya kilisesi ve lapis lazuli mavisi.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⛪</span>
                <div>
                  <h4 className="font-bold text-black">Elmalı Kilise</h4>
                  <p className="text-sm">Dokuz kubbeli eşsiz mimari yapı.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🍽️</span>
                <div>
                  <h4 className="font-bold text-black">Tarihi Yemekhaneler</h4>
                  <p className="text-sm">Keşişlerin eski yaşam alanları.</p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* SAĞ TARAF: Pratik Bilgiler & Tura Yönlendirme */}
        <div className="space-y-6">
          
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="font-bold text-xl mb-4 border-b border-slate-700 pb-2">Practical Info</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex justify-between items-center">
                <span>⏱️ Ziyaret Süresi:</span>
                <span className="font-bold text-white">2 - 3 Saat</span>
              </li>
              <li className="flex justify-between items-center">
                <span>🕒 Açılış:</span>
                <span className="font-bold text-white">08:00 - 19:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>🎟️ Müze Kart:</span>
                <span className="font-bold text-green-400">Geçerli</span>
              </li>
            </ul>
          </div>

          {/* Çapraz Satış (Cross-sell): "Buraya kendi başınıza gelmeyin, turumuzu alın" mantığı */}
          <div className="bg-yellow-50 p-6 rounded-2xl shadow-sm border border-yellow-200 text-center">
            <h3 className="font-bold text-lg mb-2 text-slate-900">Explore with a Guide</h3>
            <p className="text-gray-600 text-sm mb-4">
              Tarihi detayları kaçırmamak için bu müzeyi profesyonel rehberlerimiz eşliğinde Kırmızı Tur ile keşfedin.
            </p>
            <button className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold hover:bg-yellow-400 transition shadow-md">
              Book Red Tour
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}