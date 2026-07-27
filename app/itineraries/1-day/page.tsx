import Link from "next/link";
import Image from "next/image";

export default function OneDayItinerary() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* 1. HERO BÖLÜMÜ */}
      <div className="relative h-[50vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?q=80&w=2000" 
          alt="1 Day Cappadocia Itinerary" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-white text-center px-4 pt-10">
          <span className="bg-yellow-500 text-black font-bold tracking-widest uppercase mb-6 inline-block px-4 py-1.5 rounded-full text-sm shadow-lg">
            1 Day Express Plan
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl mb-4">The Express Explorer</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Short on time? Experience the absolute best of Cappadocia in just 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        
        {/* 2. HIZLI BAKIŞ KARTI (QUICK OVERVIEW) */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-12 flex flex-col md:flex-row gap-8 justify-between border border-gray-100">
          <div className="flex-1 border-r-0 md:border-r border-gray-200 pr-0 md:pr-8">
            <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Highlights</h3>
            <p className="text-gray-900 font-medium">Hot Air Balloon Flight, Göreme Open Air Museum, Avanos Pottery, Red Valley Sunset.</p>
          </div>
          <div className="flex-1 border-r-0 md:border-r border-gray-200 pr-0 md:pr-8">
            <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Perfect For</h3>
            <p className="text-gray-900 font-medium">Transit travelers, weekend warriors, and tight schedules.</p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
             <Link href="/book?package=1-day" className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-center uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
               Book This Plan
             </Link>
          </div>
        </div>

        {/* 3. SAAT SAAT PROGRAM (TIMELINE TASARIMI) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Your Itinerary</h2>
          
          <div className="relative border-l-4 border-yellow-100 ml-3 md:ml-6 space-y-12 pb-8">
            
            {/* ETKİNLİK 1 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">05:00 AM - 08:00 AM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunrise Hot Air Balloon Flight</h3>
              <p className="text-gray-600 leading-relaxed">
                Start your day before dawn. We pick you up from your hotel and take you to the launch site. Watch the balloons inflate while having light snacks, then float above the fairy chimneys as the sun rises. Celebrate with non-alcoholic champagne upon landing!
              </p>
            </div>

            {/* ETKİNLİK 2 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-gray-300 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">08:30 AM - 10:00 AM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hotel Drop-off & Breakfast</h3>
              <p className="text-gray-600 leading-relaxed">
                Return to your cave hotel to freshen up and enjoy a rich, traditional Turkish breakfast to fuel up for the day's adventures.
              </p>
            </div>

            {/* ETKİNLİK 3 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">10:30 AM - 13:00 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Göreme Open Air Museum & Paşabağ</h3>
              <p className="text-gray-600 leading-relaxed">
                Our guide will pick you up to explore the UNESCO World Heritage Site of Göreme Open Air Museum, famous for its 10th-century cave churches and frescoes. Next, wander through the mushroom-shaped fairy chimneys of Paşabağ (Monks Valley).
              </p>
            </div>

            {/* ETKİNLİK 4 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-gray-300 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">13:30 PM - 14:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pottery Kebab Lunch</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy an authentic lunch in Avanos. Taste the famous "Testi Kebabı" (Pottery Kebab), a regional specialty slow-cooked in a sealed clay pot.
              </p>
            </div>

            {/* ETKİNLİK 5 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">15:00 PM - 16:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Avanos Pottery Workshop & Devrent</h3>
              <p className="text-gray-600 leading-relaxed">
                Visit a traditional pottery workshop in Avanos, where artisans shape clay from the Red River. Try making your own masterpiece! Afterwards, snap some fun photos in Devrent (Imagination) Valley, where the rocks look like animals.
              </p>
            </div>

            {/* ETKİNLİK 6 (SON) */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-red-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">17:30 PM - Sunset</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunset at Red Valley (Kızılçukur)</h3>
              <p className="text-gray-600 leading-relaxed">
                End your incredible day at the best panoramic sunset point in Cappadocia. Watch the valley change from pink to deep red as the sun dips below the horizon, before we transfer you back to your hotel or the airport.
              </p>
            </div>

          </div>
        </div>

        {/* 4. DAHİL OLANLAR / OLMAYANLAR (INCLUSIONS) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span className="bg-green-200 text-green-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span> What's Included
            </h3>
            <ul className="space-y-3 text-green-800 font-medium">
              <li>• VIP Hotel Pick-up & Drop-off</li>
              <li>• Standard Hot Air Balloon Flight (1 hr)</li>
              <li>• Professional English-speaking Guide</li>
              <li>• Luxury A/C Transportation</li>
              <li>• All Museum Entry Tickets</li>
              <li>• Traditional Lunch in Avanos</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <span className="bg-red-200 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">✕</span> What's Not Included
            </h3>
            <ul className="space-y-3 text-red-800 font-medium">
              <li>• Personal Expenses & Souvenirs</li>
              <li>• Drinks during Lunch</li>
              <li>• Tips for Guide & Driver (Optional)</li>
              <li>• Dinner</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}