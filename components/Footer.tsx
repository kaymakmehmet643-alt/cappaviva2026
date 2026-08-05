import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* 1. Sütun: Marka ve Açıklama */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <span className="font-black text-3xl text-white tracking-tighter block mb-4">
              Cappa<span className="text-yellow-500">Viva</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Kapadokya'nın kalbinde, lüks ve kişiselleştirilmiş turizm deneyimleri sunan güvenilir yerel rehberiniz.
          </p>
        </div>

        {/* 2. Sütun: Hızlı Linkler */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
            <li><Link href="/itineraries/2-days" className="hover:text-yellow-500 transition">Travel Packages</Link></li>
            <li><Link href="/tailor-made" className="hover:text-yellow-500 transition">Tailor-Made Tours</Link></li>
            <li><Link href="/book" className="hover:text-yellow-500 transition">Book Now</Link></li>
          </ul>
        </div>

        {/* 3. Sütun: İletişim ve Yasal Şirket Künyesi */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact & Info</h4>
          <ul className="space-y-3 text-sm text-gray-400 mb-6">
            <li className="flex items-center gap-2"><span>📍</span> Göreme, Cappadocia / Türkiye</li>
            <li className="flex items-center gap-2"><span>📞</span> +90 535 432 2782</li>
            <li className="flex items-center gap-2"><span>✉️</span> info@cappaviva.com</li>
          </ul>
          
          {/* YASAL ZORUNLULUK: Şirket Künyesi (ETBİS ve Sanal POS için) */}
          <div className="text-xs text-gray-500 space-y-1.5 border-t border-gray-800 pt-4">
            <p><strong className="text-gray-400">Ünvan:</strong> [Vergi Levhandaki Şirket Adı]</p>
            <p><strong className="text-gray-400">Vergi No:</strong> Nevşehir VD / [Vergi No]</p>
            <p><strong className="text-gray-400">MERSİS:</strong> [Mersis Numarası]</p>
          </div>
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

      {/* Alt Telif Hakkı (Copyright) ve YASAL LİNKLER */}
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-gray-900 text-xs text-gray-500 flex flex-col lg:flex-row justify-between items-center gap-6">
        <p className="text-center lg:text-left">© {new Date().getFullYear()} CappaViva. All rights reserved.</p>
        
        {/* YASAL ZORUNLULUK: Sözleşme Linkleri */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3">
          <Link href="/kvkk" className="hover:text-yellow-500 transition">KVKK Aydınlatma Metni</Link>
          <Link href="/iptal-iade" className="hover:text-yellow-500 transition">İptal ve İade Koşulları</Link>
          <Link href="/mesafeli-satis" className="hover:text-yellow-500 transition">Mesafeli Satış Sözleşmesi</Link>
          <Link href="/cerez-politikasi" className="hover:text-yellow-500 transition">Çerez Politikası</Link>
        </div>
      </div>
    </footer>
  );
}