export default function DestinationsPage() {
  // Senin listene göre hazırladığımız kategoriler
  const categories = ["All", "Popular Areas", "Museums", "Underground Cities", "Valleys", "Castles"];

  // Örnek Lokasyon Verileri
  const destinations = [
    {
      id: 1,
      title: "Göreme Open Air Museum",
      category: "Museums",
      description: "Kaya kiliseleri ve tarihi freskleriyle Kapadokya'nın kalbi.",
      image: "https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=800",
    },
    {
      id: 2,
      title: "Uçhisar Castle",
      category: "Castles",
      description: "Kapadokya'nın en yüksek noktası ve en iyi panoramik manzarası.",
      image: "https://images.unsplash.com/photo-1579607142168-3e4b7b252033?q=80&w=800",
    },
    {
      id: 3,
      title: "Derinkuyu Underground City",
      category: "Underground Cities",
      description: "Yerin metrelerce altında, binlerce kişinin yaşadığı antik şehir.",
      image: "https://images.unsplash.com/photo-1569429593410-b498b3fb3387?q=80&w=800",
    },
    {
      id: 4,
      title: "Love Valley",
      category: "Valleys",
      description: "Devasa peribacaları ve muhteşem gün batımı manzarasıyla ünlü vadi.",
      image: "https://images.unsplash.com/photo-1518182170546-076616fd61fd?q=80&w=800",
    },
    {
      id: 5,
      title: "Avanos",
      category: "Popular Areas",
      description: "Kızılırmak kıyısında çömlek atölyeleriyle ünlü tarihi ilçe.",
      image: "https://images.unsplash.com/photo-1551043047-1d2adf00f3fd?q=80&w=800",
    },
    {
      id: 6,
      title: "Ihlara Valley",
      category: "Valleys",
      description: "Melendiz çayının hayat verdiği, yürüyüş ve doğa tutkunlarının cenneti.",
      image: "https://images.unsplash.com/photo-1601054944983-02f5a54b38d7?q=80&w=800",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      
      {/* Sayfa Üst Başlığı (Hero) */}
      <div className="bg-slate-900 text-white pt-32 pb-16 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1643208589889-0735ad621810?q=80&w=2000')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Discover Destinations</h1>
          <p className="text-lg md:text-xl font-light text-gray-300 max-w-2xl mx-auto">
            Müzelerden yeraltı şehirlerine, vadilerden kalelere kadar Kapadokya'nın her köşesini keşfedin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        
        {/* Filtreleme Menüsü */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition duration-300 shadow-sm
                ${index === 0 ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinasyon Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer border border-gray-100">
              
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
                  {dest.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{dest.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{dest.description}</p>
                <button className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-2">
                  Explore <span className="text-xl">→</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}