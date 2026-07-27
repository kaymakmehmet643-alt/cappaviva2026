"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO: CappaViva */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m22 4v-4m-3.5-4h-13a2.5 2.5 0 00-2.5 2.5V21h18v-4.5a2.5 2.5 0 00-2.5-2.5zM12 9a3 3 0 100-6 3 3 0 000 6z" /></svg>
              </div>
              <span className={`font-black text-2xl tracking-tighter ${isScrolled ? "text-gray-900" : "text-white drop-shadow-md"}`}>
                Cappa<span className="text-yellow-500">Viva</span>
              </span>
            </Link>

            {/* MASAÜSTÜ MENÜ LİNKLERİ */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`font-bold text-sm uppercase tracking-widest hover:text-yellow-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}>Home</Link>
              <Link href="/itineraries/2-days" className={`font-bold text-sm uppercase tracking-widest hover:text-yellow-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}>Packages</Link>
              <Link href="/tailor-made" className={`font-bold text-sm uppercase tracking-widest hover:text-yellow-500 transition-colors ${isScrolled ? "text-gray-700" : "text-white drop-shadow-md"}`}>Tailor-Made</Link>
              
              <Link href="/book" className="bg-yellow-500 text-black px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-yellow-400 transition-colors shadow-md">
                Book Now
              </Link>
            </div>

            {/* MOBİL MENÜ BUTONU */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className={`p-2 rounded-md ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* MOBİL AÇILIR MENÜ */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-gray-900 hover:text-yellow-500">Home</Link>
        <Link href="/itineraries/2-days" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-gray-900 hover:text-yellow-500">Packages</Link>
        <Link href="/tailor-made" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-gray-900 hover:text-yellow-500">Tailor-Made</Link>
        <Link href="/book" onClick={() => setIsMobileMenuOpen(false)} className="bg-yellow-500 text-black px-10 py-4 rounded-full font-extrabold text-xl uppercase tracking-widest mt-8">
          Book Now
        </Link>
      </div>
    </>
  );
}