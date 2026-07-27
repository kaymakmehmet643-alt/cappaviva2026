import Link from "next/link";
import Image from "next/image";

export default function ThreeDaysItinerary() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* 1. HERO BÖLÜMÜ */}
      <div className="relative h-[50vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=2000" 
          alt="3 Days Cappadocia Itinerary" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-white text-center px-4 pt-10">
          <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold tracking-widest uppercase mb-6 inline-block px-4 py-1.5 rounded-full text-sm shadow-lg">
            💎 The Premium Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl mb-4">Deep Cappadocia</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            For the slow traveler. Dive deep into the local culture, explore untouched valleys, and master traditional Anatolian arts.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        
        {/* 2. HIZLI BAKIŞ KARTI */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mb-12 flex flex-col md:flex-row gap-8 justify-between border border-gray-100">
          <div className="flex-1 border-r-0 md:border-r border-gray-200 pr-0 md:pr-8">
            <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Highlights</h3>
            <p className="text-gray-900 font-medium">Sunset ATV Safari, Cooking Class, VIP Balloon Flight, Ihlara Hike, Underground City.</p>
          </div>
          <div className="flex-1 border-r-0 md:border-r border-gray-200 pr-0 md:pr-8">
            <h3 className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2">Perfect For</h3>
            <p className="text-gray-900 font-medium">Photography enthusiasts, foodies, and those who want to see it all without rushing.</p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
             <Link href="/book?package=3-day" className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-center uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
               Reserve This Plan
             </Link>
          </div>
        </div>

        {/* 3. SAAT SAAT PROGRAM (DAY 1) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-8">
          <div className="bg-gray-900 text-white inline-block px-6 py-2 rounded-xl font-black text-xl mb-8">
            DAY 1: Welcome to the Fairy Tale
          </div>
          
          <div className="relative border-l-4 border-yellow-100 ml-3 md:ml-6 space-y-12 pb-4">
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">10:00 AM - 13:00 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Arrival & The Open Air Museum</h3>
              <p className="text-gray-600 leading-relaxed">
                After your airport transfer and hotel check-in, we start with a relaxed visit to the Göreme Open Air Museum to understand the deep monastic history and view the vibrant 10th-century frescoes.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-gray-300 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">13:30 PM - 16:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pottery Workshop & Slow Lunch</h3>
              <p className="text-gray-600 leading-relaxed">
                Head to Avanos for a premium Pottery Workshop. Sit at the kick-wheel and learn techniques passed down from the Hittites. Enjoy a relaxed, multi-course local lunch by the Red River.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-red-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">17:00 PM - Sunset</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunset ATV Safari Safari</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your adrenaline pumping! Ride your own ATV through the dusty, off-road trails of Sword, Love, and Rose Valleys. Stop at a panoramic point to watch the incredible sunset before heading back.
              </p>
            </div>

          </div>
        </div>

        {/* 3. SAAT SAAT PROGRAM (DAY 2) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-8">
          <div className="bg-yellow-500 text-black inline-block px-6 py-2 rounded-xl font-black text-xl mb-8">
            DAY 2: Sky, Flavors & Traditions
          </div>
          
          <div className="relative border-l-4 border-gray-200 ml-3 md:ml-6 space-y-12 pb-4">
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-blue-400 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">04:30 AM - 08:30 AM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">VIP Hot Air Balloon Flight</h3>
              <p className="text-gray-600 leading-relaxed">
                The magical morning. Enjoy a premium balloon flight with a smaller basket size for more comfort. Float above the fairy chimneys, celebrate with champagne, and return for a hearty breakfast.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">11:00 AM - 14:00 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cappadocian Cooking Class</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a local family or a master chef in a traditional cave kitchen. Learn how to prepare authentic Anatolian dishes, such as stuffed vine leaves and local ravioli (Mantı). The best part? Eating what you cook for lunch!
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-purple-600 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">20:00 PM - 23:30 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Turkish Bath (Hamam) & Night Show</h3>
              <p className="text-gray-600 leading-relaxed">
                Relax your muscles in a historical Turkish Bath (Hamam) with a traditional foam massage. Later, head to a cave restaurant for a mesmerizing Whirling Dervish and Turkish folklore night.
              </p>
            </div>

          </div>
        </div>

        {/* 3. SAAT SAAT PROGRAM (DAY 3) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="bg-green-700 text-white inline-block px-6 py-2 rounded-xl font-black text-xl mb-8">
            DAY 3: Into the Deep Green
          </div>
          
          <div className="relative border-l-4 border-gray-200 ml-3 md:ml-6 space-y-12 pb-8">
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-yellow-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">09:30 AM - 11:30 AM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Derinkuyu Underground City</h3>
              <p className="text-gray-600 leading-relaxed">
                Venture deep underground into the largest excavated subterranean city in Turkey. Explore the complex network of tunnels, stables, cellars, and chapels that once hid thousands of people.
              </p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute -left-[14px] top-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
              <div className="text-yellow-600 font-bold text-sm mb-1">12:30 PM - 16:00 PM</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ihlara Valley & Selime Monastery</h3>
              <p className="text-gray-600 leading-relaxed">
                Hike through the lush Ihlara Valley along the Melendiz River. Enjoy a peaceful riverside lunch in a wooden cabana. Conclude the tour by exploring the colossal rock-cut architecture of Selime Monastery before your final departure.
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
              <li>• VIP Hot Air Balloon Flight (Comfort Basket)</li>
              <li>• Sunset ATV Safari Tour</li>
              <li>• Private Cooking Class & Pottery Workshop</li>
              <li>• Full Day South (Green) Tour</li>
              <li>• Turkish Bath (Hamam) Experience</li>
              <li>• Turkish Night Show with Dinner</li>
              <li>• All Lunches & Museum Entry Tickets</li>
              <li>• VIP Private Airport Transfers</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <span className="bg-red-200 text-red-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">✕</span> What's Not Included
            </h3>
            <ul className="space-y-3 text-red-800 font-medium">
              <li>• Hotel Accommodation (We can book the best Cave Hotels for you)</li>
              <li>• Alcoholic Beverages during lunches</li>
              <li>• Personal purchases</li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}