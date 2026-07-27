import Link from "next/link";
import Image from "next/image";

export default function TwoDaysItinerary() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* 1. HERO BÖLÜMÜ */}
      <div className="relative h-[50vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1574347775984-b003666d9255?q=80&w=2000" 
          alt="2 Days Cappadocia Itinerary" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-white text-center px-4 pt-10">
          <span className="bg-yellow-500 text-black font-bold tracking-widest uppercase mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm shadow-lg animate-pulse">
            ⭐ Most Popular Choice
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl mb-4">The Classic Weekend</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            The golden standard of Cappadocia. Experience the perfect blend of adventure, culture, and relaxation in 48 hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        
        {/* 2. HIZLI BAKIŞ KARTI */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-12 flex flex-col md:flex-row gap-8 justify-between border-2 border-yellow-500">
          <div className="flex-1 border-r-0 md:border-r border-gray-200 pr-0 md:pr-8">
            <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Highlights</h3>
            <p className="text-gray-900 font-medium">Hot Air Balloons, Underground City, Red & Green Tours, Authentic Turkish Night.</p>
          </div>
          <div className="flex-1 border-r-0 md:border-r border-gray-200 pr-0 md:pr-8">
            <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Perfect For</h3>
            <p className="text-gray-900 font-medium">Couples, first-time visitors, and weekend getaways.</p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
             <Link href="/book?package=2-days" className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-center uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
               Book This Plan
             </Link>
          </div>
        </div>

        {/* 3. SAAT SAAT PROGRAM (DAY 1) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-8">
          <div className="bg-gray-900 text-white inline-block px-6 py-2 rounded-xl font-black text-xl mb-8">
            DAY 1: The North & The Night
          </div>
          
          <div className="relative border-l-4 border-yellow-100 ml-3 md:ml-6 space-y-12 pb-4">
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">09:30 AM - 13:00 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Red Tour: Fairy Chimneys & Valleys</h3>
              <p className="text-gray-600 leading-relaxed">
                After breakfast at your hotel, we pick you up to start the famous Red Tour. We visit Uçhisar Castle Panorama, the magnificent Göreme Open Air Museum, and the animal-shaped rocks of Devrent Valley.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-gray-300 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">13:30 PM - 14:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Lunch in Avanos</h3>
              <p className="text-gray-600 leading-relaxed">
                We take a break in the charming town of Avanos, situated by the Red River, to enjoy a traditional Anatolian buffet or Pottery Kebab.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">15:00 PM - 17:00 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pottery Workshop & Paşabağ</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch a master potter at work and try making your own clay pot. Afterwards, we walk among the tallest fairy chimneys in Paşabağ (Monks Valley) before dropping you off at your hotel to rest.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-blue-900 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">20:00 PM - 23:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Turkish Night</h3>
              <p className="text-gray-600 leading-relaxed">
                Get ready for a spectacular evening! We pick you up for dinner in a massive cave restaurant. Enjoy unlimited drinks, traditional folk dances, belly dancing, and a mystical Whirling Dervish ceremony.
              </p>
            </div>

          </div>
        </div>

        {/* 3. SAAT SAAT PROGRAM (DAY 2) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="bg-yellow-500 text-black inline-block px-6 py-2 rounded-xl font-black text-xl mb-8">
            DAY 2: Sky, Canyons & Underground
          </div>
          
          <div className="relative border-l-4 border-gray-200 ml-3 md:ml-6 space-y-12 pb-8">
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-red-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">05:00 AM - 08:00 AM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">The Majestic Balloon Flight</h3>
              <p className="text-gray-600 leading-relaxed">
                The highlight of your trip. A pre-dawn pick-up takes you to the launch site. Float above the magical valleys of Cappadocia as the sun rises. Celebrate your safe landing with champagne and receive your flight certificate. Return to the hotel for breakfast.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">10:00 AM - 12:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Green Tour: Underground City</h3>
              <p className="text-gray-600 leading-relaxed">
                Our guide picks you up for the Green Tour. We start by descending into Derinkuyu or Kaymaklı Underground City, exploring the fascinating ancient tunnels, kitchens, and living quarters built thousands of years ago.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">13:00 PM - 15:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ihlara Valley Hike & Riverside Lunch</h3>
              <p className="text-gray-600 leading-relaxed">
                We drive to the spectacular Ihlara Valley. Enjoy a peaceful 3km hike along the Melendiz River, surrounded by lush nature and hidden rock-carved churches. Lunch is served in wooden cabanas right on the river!
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-gray-300 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">16:00 PM - 18:00 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Selime Monastery & Pigeon Valley</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore the massive rock-cut Selime Monastery (which looks like a Star Wars set). We finish the day with a stunning photo stop at Pigeon Valley before dropping you off at your hotel or the airport with unforgettable memories.
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
              <li>• Standard Hot Air Balloon Flight</li>
              <li>• Full Day Red Tour & Full Day Green Tour</li>
              <li>• Turkish Night Show with Dinner & Drinks</li>
              <li>• 2 Lunches during the daily tours</li>
              <li>• All Museum & Underground City Tickets</li>
              <li>• VIP Hotel Transfers for all activities</li>
              <li>• Professional English-speaking Guide</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <span className="bg-red-200 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">✕</span> What's Not Included
            </h3>
            <ul className="space-y-3 text-red-800 font-medium">
              <li>• Hotel Accommodation <span className="text-sm text-red-600 font-normal">(Can be added upon request)</span></li>
              <li>• Drinks during the daily tour lunches</li>
              <li>• Personal expenses</li>
              <li>• Tips (Optional)</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}