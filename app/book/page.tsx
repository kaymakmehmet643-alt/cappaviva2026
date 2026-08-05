"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Sol tarafta sergilenecek popüler turların verisi. 
// "title" kısımları, senin select listendeki "value" değerleriyle BİREBİR aynı olmalıdır ki eşleşsin.
const POPULAR_TOURS = [
  {
    id: "balloon",
    title: "Hot Air Balloon Flight",
    category: "Hava Aktiviteleri",
    image: "https://images.unsplash.com/photo-1570939274717-7eda259b50cf?auto=format&fit=crop&w=600&q=80",
    desc: "Gün doğumunda peri bacalarının eşsiz manzarasını gökyüzünden izleyerek unutulmaz bir deneyim yaşayın.",
  },
  {
    id: "atv",
    title: "ATV Safari Tour",
    category: "Macera & Doğa",
    image: "https://images.unsplash.com/photo-1596422846543-74c6e27a69bc?auto=format&fit=crop&w=600&q=80",
    desc: "Vadilerin arasında adrenalin dolu bir off-road deneyimi ile gün batımının keyfini çıkarın.",
  },
  {
    id: "horse",
    title: "Horseback Riding (At Turu)",
    category: "Macera & Doğa",
    image: "https://images.unsplash.com/photo-1568285561570-5b65103a48e7?auto=format&fit=crop&w=600&q=80",
    desc: "Güzel atlar diyarında, peri bacalarının arasında huzurlu ve otantik bir atlı safari.",
  },
  {
    id: "red",
    title: "Red Tour (Kırmızı Tur)",
    category: "Günlük Turlar",
    image: "https://images.unsplash.com/photo-1642426305716-e4d6d6251b54?auto=format&fit=crop&w=600&q=80",
    desc: "Göreme Açık Hava Müzesi, Paşabağ ve Avanos'u kapsayan en popüler bölge turu.",
  },
];

function BookingFormContent() {
  const searchParams = useSearchParams();
  const preSelectedPackage = searchParams.get("package");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Custom Tailor-Made Tour",
    date: "",
    guests: "2",
    notes: ""
  });

  // URL'den gelen veriyi eşleştirme (Senin eski kodun)
  useEffect(() => {
    if (preSelectedPackage) {
      let formattedName = "Custom Tailor-Made Tour";
      
      if (preSelectedPackage === "1-day") formattedName = "1 Day Express Plan";
      else if (preSelectedPackage === "2-days") formattedName = "2 Days Classic Weekend";
      else if (preSelectedPackage === "3-days") formattedName = "3 Days Deep Cappadocia";
      else if (preSelectedPackage === "pottery") formattedName = "Pottery Workshop";
      else if (preSelectedPackage === "carpet") formattedName = "Carpet Weaving";
      else if (preSelectedPackage === "cooking") formattedName = "Cooking Class";
      else if (preSelectedPackage === "wine") formattedName = "Wine Tasting";
      
      setFormData(prev => ({ ...prev, service: formattedName }));
    }
  }, [preSelectedPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Kartlardan birine tıklandığında sağdaki formu güncelleyen fonksiyon
  const handleCardClick = (tourTitle: string) => {
    setFormData({ ...formData, service: tourTitle });
  };

  // WhatsApp Gönderme Mantığı (Senin eski kodun)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "905354322782"; 
    const message = `🌟 *Yeni Rezervasyon Talebi (CappaViva)* 🌟\n\n👤 *Ad Soyad:* ${formData.name}\n📱 *İletişim:* ${formData.phone}\n🎒 *Seçilen Tur/Hizmet:* ${formData.service}\n📅 *Tarih:* ${formData.date}\n👥 *Kişi Sayısı:* ${formData.guests}\n📝 *Özel Notlar:* ${formData.notes ? formData.notes : "Yok"}\n\nMerhaba, web siteniz üzerinden bu rezervasyonla ilgili bilgi almak istiyorum.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* SOL KOLON: Tur Kartları Listesi (8 birim genişlik) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Popüler Deneyimleri Keşfedin</h2>
            <p className="text-gray-500 mt-2">Aşağıdan bir tur seçebilir veya tüm listeyi sağdaki formdan inceleyebilirsiniz.</p>
          </div>

          {POPULAR_TOURS.map((tour) => {
            const isSelected = formData.service === tour.title;
            return (
              <div 
                key={tour.id}
                onClick={() => handleCardClick(tour.title)}
                className={`flex flex-col sm:flex-row bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                  isSelected ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-gray-200'
                }`}
              >
                {/* Tur Görseli */}
                <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-gray-200 relative overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {isSelected && (
                    <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Seçildi
                    </div>
                  )}
                </div>
                {/* Tur Detayları */}
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">{tour.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2">{tour.title}</h3>
                  <p className="text-gray-500 text-sm mt-3 line-clamp-2">{tour.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SAĞ KOLON: Sabit (Sticky) Rezervasyon Formu (4 birim genişlik) */}
        <div className="lg:col-span-5 xl:col-span-4 relative">
          <div className="sticky top-8 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-4">Rezervasyon Yap</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Seçilen Hizmet - Dropdown */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Selected Service *</label>
                <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-medium text-gray-900 transition-shadow">
                  <optgroup label="✨ Ready Travel Packages">
                    <option value="1 Day Express Plan">1 Day Express Plan</option>
                    <option value="2 Days Classic Weekend">2 Days Classic Weekend</option>
                    <option value="3 Days Deep Cappadocia">3 Days Deep Cappadocia</option>
                  </optgroup>
                  <optgroup label="🚐 Daily Tours">
                    <option value="Red Tour (Kırmızı Tur)">Red Tour (Kırmızı Tur)</option>
                    <option value="Green Tour (Yeşil Tur)">Green Tour (Yeşil Tur)</option>
                    <option value="Cappadocia Mix Tour">Cappadocia Mix Tour</option>
                    <option value="Private Tour (Özel Tur)">Private Tour (Özel Tur)</option>
                  </optgroup>
                  <optgroup label="🎈 Popular Activities & Safaris">
                    <option value="Hot Air Balloon Flight">Hot Air Balloon Flight</option>
                    <option value="ATV Safari Tour">ATV Safari Tour</option>
                    <option value="Horseback Riding (At Turu)">Horseback Riding (At Turu)</option>
                    <option value="Jeep Safari Tour">Jeep Safari Tour</option>
                    <option value="Camel Tour">Camel Tour</option>
                    <option value="Classic Car Tour">Classic Car Tour</option>
                    <option value="Photoshooting Tour">Photoshooting Tour</option>
                  </optgroup>
                  <optgroup label="🎭 Culture, Arts & Relaxation">
                    <option value="Turkish Night (Türk Gecesi)">Turkish Night (Türk Gecesi)</option>
                    <option value="Whirling Dervish (Sema)">Whirling Dervish (Sema)</option>
                    <option value="Turkish Bath (Hamam)">Turkish Bath (Hamam)</option>
                    <option value="Pottery Workshop">Pottery Workshop</option>
                    <option value="Carpet Weaving">Carpet Weaving</option>
                    <option value="Cooking Class">Cooking Class</option>
                    <option value="Wine Tasting">Wine Tasting</option>
                    <option value="Private Massage">Private Massage</option>
                  </optgroup>
                  <optgroup label="✈️ Airport Transfer">
                    <option value="Private Airport Transfer">Private Airport Transfer</option>
                    <option value="Shuttle Transfer">Shuttle (Shared) Transfer</option>
                    <option value="VIP Transfer">VIP Transfer</option>
                  </optgroup>
                  <optgroup label="🛠️ Other">
                    <option value="Custom Tailor-Made Tour">Custom Tailor-Made Tour (Help me plan)</option>
                  </optgroup>
                </select>
              </div>

              {/* Tarih ve Kişi Sayısı */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Date *</label>
                  <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Guests *</label>
                  <input required type="number" min="1" max="50" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm" />
                </div>
              </div>

              {/* Ad ve Telefon */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">WhatsApp Number *</label>
                <input required type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-sm" />
              </div>

              {/* Özel Notlar */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Special Requests</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows={3} placeholder="Hotel details, special requests..." className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none resize-none text-sm"></textarea>
              </div>

              {/* Gönder Butonu */}
              <button type="submit" className="w-full mt-2 bg-[#25D366] hover:bg-[#1EBE57] text-white py-4 rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/30 flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                Complete via WhatsApp
              </button>

            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Üst Kısım: Hero Görseli ve Başlık */}
      <div className="relative pt-32 pb-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600255821058-c4f89958d700?q=80&w=2000')" }}>
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">Complete Your Journey</h1>
          <p className="text-lg text-gray-200 drop-shadow-md font-medium">Select a tour below or fill out the form directly.</p>
        </div>
      </div>

      {/* İçerik Alanı: Sol Liste ve Sağ Sticky Form */}
      <Suspense fallback={<div className="text-center text-gray-500 py-20 font-bold text-xl animate-pulse">Loading experiences...</div>}>
        <BookingFormContent />
      </Suspense>
    </main>
  );
}