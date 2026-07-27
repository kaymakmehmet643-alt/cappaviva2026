import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ========================================================
// BİLEŞENLERİ İÇERİ ALMA (IMPORT)
// ========================================================

// 1. Yeni Eklenenler (Tüm sayfalarda en üstte kalacak menü ve sağ alt WhatsApp)
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";

// 2. Eskiden Kalan ve Korunanlar (Tüm sayfalarda en altta kalacak Footer ve AI Bot)
import AiChatbot from "../components/AiChatbot";
import Footer from "../components/Footer";

// Font ayarı
const inter = Inter({ subsets: ["latin"] });

// ========================================================
// SİTE BAŞLIK VE AÇIKLAMA AYARLARI (METADATA)
// ========================================================
export const metadata: Metadata = {
  title: "CappaViva",
  description: "Modern Cappadocia Travel Experience",
};

// ========================================================
// ANA İSKELET (LAYOUT) BİLEŞENİ
// ========================================================
export default function RootLayout({
  children, // Bu 'children' parametresi, gezdiğiniz sayfaların (page.tsx) içeriğini buraya getirecek
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-gray-100 flex flex-col min-h-screen`}>
        
        {/* ========================================================
            TÜM SAYFALARDA GÖRÜNECEK SABİT BİLEŞENLER
            ======================================================== */}

        {/* 1. Yeni Premium Şeffaf Üst Menümüz */}
        <Header />
        
        {/* 2. Sayfaların Kendi İçerik Alanı (children buraya dolacak) */}
        <main className="flex-1 w-full">
          {children}
        </main>
        
        {/* 3. En Alt Bilgi Alanı (Footer) */}
        <Footer />

        {/* 4. AI Canlı Destek Botumuz (Eski dosya ama layout'a sabitlendi) */}
        <AiChatbot />

        {/* 5. WhatsApp Butonu (Yeni dosya ve layout'a sabitlendi) */}
        <WhatsAppButton />
        
      </body>
    </html>
  );
}