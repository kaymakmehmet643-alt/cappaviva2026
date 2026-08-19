import React from 'react';
import Link from 'next/link';

export default function Instagram() {
  // 4 Adet harika Kapadokya fotoğrafı (Sen ileride buraya kendi linklerini koyabilirsin)
  const feed = [
    "https://images.unsplash.com/photo-1528291151377-165fdb10ea7a?q=80&w=800",
    "https://images.unsplash.com/photo-1600255821058-c4f89958d700?q=80&w=800",
    "https://images.unsplash.com/photo-1527668752968-14ce70a34c1b?q=80&w=800",
    "https://images.unsplash.com/photo-1535747682970-137a28cb0f80?q=80&w=800"
  ];

  return (
    <div className="w-full">
      {/* 1. FOTOĞRAF GALERİSİ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {feed.map((img, index) => (
          <div key={index} className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-md">
            <img 
              src={img} 
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition duration-700" 
              alt="Cappadocia Moments" 
            />
            {/* Üzerine gelince (hover) çıkan siyah efekt ve Instagram İkonu */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
          </div>
        ))}
      </div>

      {/* 2. GERÇEK INSTAGRAM BUTONU */}
      <div className="text-center">
        <Link
          href="https://instagram.com/cappaviva"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(253,29,29,0.3)]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          Follow @cappaviva
        </Link>
      </div>
    </div>
  );
}