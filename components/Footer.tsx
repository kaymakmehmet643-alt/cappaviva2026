import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* 1. Sütun: Marka ve Açıklama */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
             {/* Eğer public klasöründe logo.png yoksa diye CappaViva yazısını da yedek bıraktım */}
            <span className="font-black text-3xl text-white tracking-tighter block mb-4">
              Cappa<span className="text-yellow-500">Viva</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Kapadokya'nın kalbinde, lüks ve kişiselleştirilmiş turizm deneyimleri sunan güvenilir yerel rehberiniz.
          </p>
        </div>

        {/* 2. Sütun: Hızlı Linkler (YENİ SAYFALARIMIZA BAĞLANDI) */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/itineraries/2-days" className="hover:text-yellow-500 transition">Travel Packages</Link></li>
            <li><Link href="/tailor-made" className="hover:text-yellow-500 transition">Tailor-Made Tours</Link></li>
            <li><Link href="/book" className="hover:text-yellow-500 transition">Book Now</Link></li>
          </ul>
        </div>

        {/* 3. Sütun: İletişim */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2"><span>📍</span> Göreme, Cappadocia / Türkiye</li>
            <li className="flex items-center gap-2"><span>📞</span> +90 535 432 2782</li>
            <li className="flex items-center gap-2"><span>✉️</span> info@cappaviva.com</li>
          </ul>
        </div>

        {/* 4. Sütun: Sosyal Medya ve TÜRSAB Güven Logosu */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Follow Us</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">IG</a>
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">FB</a>
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition">YT</a>
          </div>

          {/* TÜRSAB LOGOSU (Müşteriye güven verir) */}
          <div className="bg-gray-900 p-4 rounded-xl inline-block border border-gray-800">
            <span className="text-xs font-bold text-gray-400 block mb-2">VERIFIED TRAVEL AGENCY</span>
            <div className="font-black text-white text-sm tracking-widest border-b-2 border-yellow-500 inline-block pb-1">TÜRSAB</div>
          </div>
        </div>

      </div>

      {/* Alt Telif Hakkı (Copyright) */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-900 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} CappaViva. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}