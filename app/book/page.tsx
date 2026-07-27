"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function BookingFormContent() {
  const searchParams = useSearchParams();
  const preSelectedPackage = searchParams.get("package");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    guests: "2",
    notes: ""
  });

  // BURASI KUSURSUZ EŞLEŞME YAPACAK
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
    } else {
      setFormData(prev => ({ ...prev, service: "Custom Tailor-Made Tour" }));
    }
  }, [preSelectedPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "905555555555"; // Kendi numaranı yazmayı unutma
    const message = `🌟 *Yeni Rezervasyon Talebi (CappaViva)* 🌟\n\n👤 *Ad Soyad:* ${formData.name}\n📱 *İletişim:* ${formData.phone}\n🎒 *Seçilen Tur/Hizmet:* ${formData.service}\n📅 *Tarih:* ${formData.date}\n👥 *Kişi Sayısı:* ${formData.guests}\n📝 *Özel Notlar:* ${formData.notes ? formData.notes : "Yok"}\n\nMerhaba, web siteniz üzerinden bu rezervasyonla ilgili bilgi almak istiyorum.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Full Name *</label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">WhatsApp Number *</label>
          <input required type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 8900" className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Selected Service *</label>
        <select required name="service" value={formData.service} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none font-medium text-gray-900">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Arrival Date *</label>
          <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Number of Guests *</label>
          <input required type="number" min="1" max="50" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">Special Requests (Optional)</label>
        <textarea name="notes" value={formData.notes} onChange={handleChange} rows={4} placeholder="Any food allergies, hotel details, or special celebration notes?" className="w-full px-5 py-4 bg-gray-50/80 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none resize-none"></textarea>
      </div>

      <button type="submit" className="w-full bg-[#25D366] hover:bg-[#1EBE57] text-white py-5 rounded-xl font-extrabold text-lg uppercase tracking-widest transition-transform hover:-translate-y-1 shadow-lg shadow-green-500/30 flex items-center justify-center gap-3">
        Complete via WhatsApp
      </button>
    </form>
  );
}

export default function BookPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600255821058-c4f89958d700?q=80&w=2000')" }}>
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">Complete Your Journey</h1>
          <p className="text-lg text-gray-200 drop-shadow-md font-medium">Fill out the form below and our local experts will contact you via WhatsApp in minutes.</p>
        </div>
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-12 border border-white/20">
          <Suspense fallback={<div className="text-center text-gray-500 py-10">Form loading...</div>}>
            <BookingFormContent />
          </Suspense>
        </div>
      </div>
    </main>
  );
}