import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ========================================================
// 🌟 YENİ EKLENEN: MERKEZİ HAFIZA (DİL VE CANLI KUR İÇİN)
// ========================================================
import { SiteProvider } from "./context/SiteContext";

// ========================================================
// BİLEŞENLERİ İÇERİ ALMA (IMPORT)
// ========================================================
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
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
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-gray-100 flex flex-col min-h-screen`}>
        
        {/* ========================================================
            TÜM SİTEYİ "CANLI HAFIZA" (SiteProvider) İLE SARIYORUZ!
            Artık Header'da dil değişince, Footer da anında görecek.
            ======================================================== */}
        <SiteProvider>
          
          {/* 1. Yeni Premium Şeffaf Üst Menümüz */}
          <Header />
          
          {/* 2. Sayfaların Kendi İçerik Alanı (children buraya dolacak) */}
          <main className="flex-1 w-full">
            {children}
          </main>
          
          {/* 3. En Alt Bilgi Alanı (Footer) */}
          <Footer />

          {/* 4. AI Canlı Destek Botumuz */}
          <AiChatbot />

          {/* 5. WhatsApp Butonu */}
          <WhatsAppButton />
          
        </SiteProvider>
        
      </body>
    </html>
  );
}