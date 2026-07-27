import Link from "next/link"; // Link özelliğini ekledik

export default function ToursPage() {
  // Senin listene göre hazırladığımız örnek kategoriler
  const categories = ["All Tours", "Hot Air Balloon", "ATV Tour", "Horse Riding", "Green Tour", "Red Tour", "Jeep Safari"];

  // Turlara "href" linkleri eklendi!
  const tours = [
    {
      id: 1,
      title: "Hot Air Balloon Flight",
      duration: "1 Hour",
      price: "From €150",
      rating: "5.0 (1.2k Reviews)",
      image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800",
      href: "/tours/balloon" // <-- Tıklayınca gideceği detay sayfası
    },
    {
      id: 2,
      title: "Sunset ATV Safari",
      duration: "2 Hours",
      price: "From €45",
      rating: "4.8 (850 Reviews)",
      image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800",
      href: "/tours/atv"
    },
    {
      id: 3,
      title: "Cappadocia Green Tour",
      duration: "Full Day",
      price: "From €60",
      rating: "4.9 (540 Reviews)",
      image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800",
      href: "/tours/green-tour"
    },
    {
      id: 4,
      title: "Sunrise Horse Riding",
      duration: "2 Hours",
      price: "From €40",
      rating: "4.7 (320 Reviews)",
      image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800",
      href: "/tours/horse"
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      
      {/* Sayfa Üst Başlığı (Hero) */}
      <div className="bg-slate-900 text-white pt-32 pb-16 px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Explore Our Tours</h1>
        <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
          Kapadokya'nın gizli güzelliklerini uzman rehberlerimizle keşfedin.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        
        {/* Filtreleme Menüsü */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 shadow-sm
                ${index === 0 ? "bg-yellow-500 text-black hover:bg-yellow-400" : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tur Kartları Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tur) => (
            <div key={tur.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col">
              
              {/* Tur Fotoğrafı */}
              <div className="relative h-60 overflow-hidden cursor-pointer">
                <Link href={tur.href}>
                  <img 
                    src={tur.image} 
                    alt={tur.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold shadow-md pointer-events-none">
                  {tur.price}
                </div>
              </div>

              {/* Tur Detayları */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1">⏱️ {tur.duration}</span>
                  <span className="flex items-center gap-1 text-yellow-500 font-medium">⭐ {tur.rating}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{tur.title}</h3>
                
                {/* View Details Butonuna Link Eklendi */}
                <div className="mt-auto pt-4">
                  <Link href={tur.href} className="block w-full bg-slate-900 text-white text-center py-3 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}