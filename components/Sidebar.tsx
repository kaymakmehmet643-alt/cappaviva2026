"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside 
      className={`fixed top-0 left-0 h-screen bg-black/95 backdrop-blur-md text-white transition-all duration-500 ease-in-out z-50 flex flex-col border-r border-gray-800 shadow-2xl ${isHovered ? 'w-64' : 'w-20'} hidden md:flex`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo Alanı */}
      <div className="h-24 flex items-center justify-center border-b border-gray-800/50">
         <img src="/logo.png" alt="Logo" className={`transition-all duration-500 ${isHovered ? 'h-12' : 'h-8'}`} />
      </div>

      {/* Navigasyon Linkleri */}
      <nav className="flex-1 flex flex-col gap-8 pt-12 px-6">
        <Link href="/" className="flex items-center gap-4 hover:text-yellow-400 transition group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🏠</span>
          <span className={`font-bold uppercase tracking-wider text-sm transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'}`}>Home</span>
        </Link>
        <Link href="/tours" className="flex items-center gap-4 hover:text-yellow-400 transition group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🎈</span>
          <span className={`font-bold uppercase tracking-wider text-sm transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'}`}>Tours</span>
        </Link>
        <Link href="/destinations" className="flex items-center gap-4 hover:text-yellow-400 transition group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🏛️</span>
          <span className={`font-bold uppercase tracking-wider text-sm transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'}`}>Destinations</span>
        </Link>
        <Link href="/local-guide" className="flex items-center gap-4 hover:text-yellow-400 transition group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🧭</span>
          <span className={`font-bold uppercase tracking-wider text-sm transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 hidden'}`}>Local Guide</span>
        </Link>
      </nav>

      {/* Dil ve Para Birimi (Alt Kısım) */}
      <div className="p-6 border-t border-gray-800/50">
        <div className={`flex flex-col gap-4 transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <div className="flex justify-between gap-2">
            <button className="flex-1 bg-gray-800/50 py-2 rounded-lg text-xs font-bold hover:bg-yellow-500 hover:text-black transition">EN</button>
            <button className="flex-1 bg-gray-800/50 py-2 rounded-lg text-xs font-bold hover:bg-yellow-500 hover:text-black transition">TR</button>
            <button className="flex-1 bg-gray-800/50 py-2 rounded-lg text-xs font-bold hover:bg-yellow-500 hover:text-black transition">FR</button>
          </div>
          <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-extrabold hover:bg-yellow-400 transition shadow-lg hover:shadow-yellow-500/20">
            USD ($)
          </button>
        </div>
        
        {/* Menü kapalıyken görünen ikon */}
        <div className={`text-center text-2xl text-gray-400 ${isHovered ? 'hidden' : 'block'}`}>
          🌍
        </div>
      </div>
    </aside>
  );
}