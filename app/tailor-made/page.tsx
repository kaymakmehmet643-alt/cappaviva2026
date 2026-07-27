import Link from "next/link";
import Image from "next/image";

export default function TailorMadePage() {
  return (
    <main className="bg-gray-50 min-h-screen pb-24">
      
      {/* 1. HERO BÖLÜMÜ (Lüks ve Premium Görünüm) */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1540826978583-05708873be5d?q=80&w=2000" 
          alt="Luxury Cappadocia Tailor Made Tour" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-20 text-white text-center px-4">
          <span className="text-yellow-500 font-bold tracking-widest uppercase mb-4 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            Bespoke Travel Experience
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-xl mb-6">Tailor-Made Journeys</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Your rules, your pace, your dreams. Let our local experts design a personalized Cappadocia itinerary crafted exclusively for you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30">
        
        {/* 2. NEDEN BİZ? (WHY CHOOSE CUSTOM?) */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Total Flexibility</h3>
              <p className="text-gray-600">Wake up late, skip a museum, or spend an extra hour at the valley. You control the schedule.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">VIP Treatment</h3>
              <p className="text-gray-600">Private luxury vehicles, exclusive guides, and access to hidden spots away from the crowds.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Local Secrets</h3>
              <p className="text-gray-600">Experience Cappadocia like a local. Eat where we eat, shop where we shop, and see the unseen.</p>
            </div>
          </div>
        </div>

        {/* 3. NASIL ÇALIŞIR? (HOW IT WORKS) */}
        <div className="mb-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">How We Craft Your Journey</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative group">
              <div className="text-7xl font-black text-gray-100 absolute -top-8 -left-4 z-0 group-hover:text-yellow-100 transition-colors">01</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tell Us Your Vision</h3>
                <p className="text-gray-600">Fill out our form. Tell us your dates, group size, interests, and preferred hotel style.</p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="text-7xl font-black text-gray-100 absolute -top-8 -left-4 z-0 group-hover:text-yellow-100 transition-colors">02</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Design</h3>
                <p className="text-gray-600">Our local travel experts craft a personalized draft itinerary tailored entirely to your desires.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="text-7xl font-black text-gray-100 absolute -top-8 -left-4 z-0 group-hover:text-yellow-100 transition-colors">03</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Refine & Perfect</h3>
                <p className="text-gray-600">We adjust the plan together over WhatsApp or email until it's 100% perfect for you.</p>
              </div>
            </div>

            <div className="relative group">
              <div className="text-7xl font-black text-gray-100 absolute -top-8 -left-4 z-0 group-hover:text-yellow-100 transition-colors">04</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoy The Magic</h3>
                <p className="text-gray-600">Arrive in Cappadocia. We handle all logistics, tickets, and reservations. You just enjoy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. CALL TO ACTION (REZERVASYONA YÖNLENDİRME) */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[120px] opacity-20"></div>
          
          <div className="relative p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to build your dream?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Skip the standard tours. Let us create a journey that perfectly matches your pace, budget, and travel style. No obligations, just a friendly chat with local experts.
            </p>
            
            <Link 
              href="/book?package=Custom Tailor-Made Tour" 
              className="inline-flex items-center gap-3 bg-yellow-500 text-black px-10 py-5 rounded-full font-extrabold text-lg uppercase tracking-widest hover:bg-yellow-400 transition-transform hover:-translate-y-1 shadow-[0_0_40px_rgba(234,179,8,0.4)]"
            >
              Start Planning Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}