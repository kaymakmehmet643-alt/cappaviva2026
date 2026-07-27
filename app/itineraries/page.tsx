import Link from "next/link";
import Image from "next/image";

export default function ItinerariesPage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* 1. HERO BÖLÜMÜ (Yükseklik artırıldı, yazı merkeze alındı) */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&w=2000" 
          alt="Cappadocia Travel Plans" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-white text-center px-4 pb-12">
          <span className="text-yellow-500 font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
            Expertly Crafted
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-xl mb-6">Ready Itineraries</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Skip the planning stress. Choose a ready-made journey designed by local experts to maximize your Cappadocia experience.
          </p>
        </div>
      </div>

      {/* 2. PLANLAR LİSTESİ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30 space-y-12">
        
        {/* 1 GÜNLÜK PLAN KARTI */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row group">
          <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=800" alt="1 Day Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">1 DAY</div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Express Explorer</h3>
            <p className="text-gray-600 mb-6 text-lg">Perfect for transit travelers or tight schedules. Hit the absolute highlights without feeling rushed.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Sunrise Hot Air Balloon Flight</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Göreme Open Air Museum</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Sunset at Red Valley</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/itineraries/1-day" className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors">Full Details</Link>
              <Link href="/book" className="bg-yellow-500 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">Book This Plan</Link>
            </div>
          </div>
        </div>

        {/* 2 GÜNLÜK PLAN KARTI (POPÜLER) */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-yellow-500 flex flex-col md:flex-row group relative">
          <div className="absolute top-0 right-0 bg-yellow-500 text-black px-6 py-2 rounded-bl-3xl font-bold text-sm uppercase tracking-widest z-10 shadow-lg">
            Most Popular
          </div>
          <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=800" alt="2 Days Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">2 DAYS</div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Classic Weekend</h3>
            <p className="text-gray-600 mb-6 text-lg">The golden standard. Experience the perfect blend of adventure, culture, and relaxation over a 48-hour period.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Full Red Tour & Green Tour Combined</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Authentic Underground City Exploration</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Traditional Turkish Night & Dinner</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/itineraries/2-days" className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors">Full Details</Link>
              <Link href="/book" className="bg-yellow-500 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">Book This Plan</Link>
            </div>
          </div>
        </div>

        {/* 3 GÜNLÜK PLAN KARTI */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row group">
          <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=800" alt="3 Days Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 font-black px-4 py-2 rounded-xl shadow-lg">3+ DAYS</div>
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Deep Cappadocia</h3>
            <p className="text-gray-600 mb-6 text-lg">For the slow traveler. Dive deep into the local culture, hike the lesser-known valleys, and master the art of pottery.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Exclusive Sunset ATV Safari</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Private Pottery & Cooking Workshop</li>
              <li className="flex items-center gap-3 text-gray-700 font-medium"><span className="text-yellow-500 text-xl">✓</span> Ihlara Valley Hike & Riverside Lunch</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/itineraries/3-days" className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors">Full Details</Link>
              <Link href="/book" className="bg-yellow-500 text-black px-8 py-3.5 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">Book This Plan</Link>
            </div>
          </div>
        </div>

      </div>

      {/* ÖZEL PLAN TASARIM BÖLÜMÜ */}
      <div className="max-w-4xl mx-auto mt-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Need something more specific?</h2>
        <p className="text-gray-600 mb-8 text-lg">
          We can customize any of these itineraries to match your exact interests, group size, and budget.
        </p>
        <Link href="/tailor-made" className="inline-flex items-center gap-2 bg-white border-2 border-gray-900 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all shadow-lg">
          ✨ Request Tailor-Made Itinerary
        </Link>
      </div>

    </main>
  );
}