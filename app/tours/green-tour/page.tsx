export default function TourDetailPage() {

  return (

    <main className="bg-gray-50 text-gray-900 pb-20">

     

      {/* 1. HERO BÖLÜMÜ (Büyük Fotoğraf ve Başlık) */}

      <div className="relative h-[60vh] w-full">

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <img

          src="https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=2000"

          alt="Green-Tour"

          className="absolute inset-0 w-full h-full object-cover z-0"

        />

        <div className="absolute bottom-0 w-full z-20 p-8 bg-gradient-to-t from-black/90 to-transparent text-white">

          <div className="max-w-5xl mx-auto">

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Green Tour</h1>

            <p className="text-xl md:text-2xl font-light mb-6 text-gray-200">Kapadokya'nın eşsiz peribacalarını gökyüzünden izleyin.</p>

            <div className="flex flex-wrap items-center gap-6">

              <span className="text-3xl font-bold text-yellow-500">From €45</span>

              <span className="text-lg font-medium flex items-center gap-1">⭐ 5.0 (1.2k Reviews)</span>

            </div>

          </div>

        </div>

      </div>



      <div className="max-w-5xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">

       

        {/* SOL TARAF: Detaylar */}

        <div className="md:col-span-2 space-y-12">

         

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

            <h2 className="text-2xl font-bold mb-6 border-b pb-4">📋 Tour Overview</h2>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-gray-700">

              <p><strong className="text-gray-900">Süre:</strong> 1 Saat (Uçuş)</p>

              <p><strong className="text-gray-900">Başlangıç:</strong> Gün doğumu</p>

              <p><strong className="text-gray-900">Rehber:</strong> Profesyonel Pilot</p>

            </div>

          </section>



          <section>

            <h2 className="text-2xl font-bold mb-6">📍 Itinerary</h2>

            <div className="space-y-6 border-l-2 border-yellow-500 pl-6 ml-3">

              <div className="relative">

                <div className="absolute -left-[31px] bg-yellow-500 h-4 w-4 rounded-full border-4 border-gray-50"></div>

                <h3 className="font-bold text-lg">04:30 - Hotel Pickup</h3>

                <p className="text-gray-600">Lüks araçlarımızla otelinizden alınıyorsunuz.</p>

              </div>

            </div>

          </section>



        </div>



      </div>

    </main>

  );

} 