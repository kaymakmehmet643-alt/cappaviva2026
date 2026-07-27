import Link from "next/link";

export default function LocalGuidePage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* HERO BÖLÜMÜ */}
      <div className="relative h-[50vh] w-full">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1642320141697-3932cbcc94bd?q=80&w=2000" 
          alt="Cappadocia Local Guide" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4 mt-10">
          <span className="text-yellow-500 font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            Insider's Cappadocia
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-xl mb-6">Your Local Guide</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light">
            We don't just show you the map; we take you to the hidden gems only the locals know about.
          </p>
        </div>
      </div>

      {/* İÇERİK KARTLARI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kart 1 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600 text-2xl">
              📸
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secret Photo Spots</h3>
            <p className="text-gray-600 leading-relaxed">
              Skip the crowded viewpoints. We'll guide you to the valleys where you can capture the hot air balloons in complete silence and perfect lighting.
            </p>
          </div>

          {/* Kart 2 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600 text-2xl">
              🏺
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Workshops</h3>
            <p className="text-gray-600 leading-relaxed">
              Meet the real artisans of Avanos. We partner with multi-generational families who keep the ancient Hittite pottery techniques alive.
            </p>
          </div>

          {/* Kart 3 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600 text-2xl">
              🍷
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Local Tastes</h3>
            <p className="text-gray-600 leading-relaxed">
              From family-run cave restaurants to hidden vineyards, experience the true Anatolian cuisine away from the standard tourist menus.
            </p>
          </div>

        </div>
      </div>

      {/* CTA (CALL TO ACTION) BÖLÜMÜ */}
      <div className="max-w-4xl mx-auto mt-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to explore like a local?</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Let us tailor a unique itinerary based on your interests. No tourist traps, just pure Kapadokya.
        </p>
        <Link 
          href="/itineraries" 
          className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg"
        >
          View Ready Travel Plans
        </Link>
      </div>

    </main>
  );
}