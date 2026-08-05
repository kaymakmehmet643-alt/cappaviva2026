"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Kullanıcı daha önce kabul etmiş mi diye tarayıcı hafızasına bakıyoruz
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true); // Kabul etmediyse banner'ı göster
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-600 max-w-4xl">
        <p>
          Sizlere daha iyi bir deneyim sunabilmek, sitemizin güvenli çalışmasını sağlamak ve analizler yapabilmek için çerezler (cookies) kullanıyoruz. Sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz. Detaylı bilgi için{" "}
          <Link href="/cerez-politikasi" className="text-orange-600 font-semibold hover:underline">
            Çerez Politikamızı
          </Link>{" "}
          inceleyebilirsiniz.
        </p>
      </div>
      <div className="flex gap-3 w-full md:w-auto">
        <button 
          onClick={acceptCookies}
          className="w-full md:w-auto whitespace-nowrap bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-colors"
        >
          Kabul Et
        </button>
      </div>
    </div>
  );
}