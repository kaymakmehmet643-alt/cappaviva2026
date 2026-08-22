'use client';
import { useSite } from '../app/context/SiteContext';

export default function Price({ eur, className = "" }: { eur: number, className?: string }) {
  const { paraBirimi, kurlar } = useSite();

  // Kur ile çarpma işlemi
  const oran = kurlar[paraBirimi] || 1;
  const hesaplanan = eur * oran;

  // Hangi para birimindeysek onun sembolünü seç
  const semboller: any = { EUR: "€", USD: "$", GBP: "£", TRY: "₺" };
  const sembol = semboller[paraBirimi] || "€";

  // Eğer TL ise küsurat olmasın tam sayı olsun (örn: 5400 ₺), diğerleri normal kalsın
  const gosterilecekFiyat = paraBirimi === 'TRY' ? Math.round(hesaplanan) : Math.round(hesaplanan);

  // Sembolü Dolar/Euro ise başa ($150), TL ise sona (5400 ₺) koyuyoruz ki profesyonel dursun
  return (
    <span className={className}>
      {paraBirimi === 'TRY' ? `${gosterilecekFiyat} ${sembol}` : `${sembol}${gosterilecekFiyat}`}
    </span>
  );
}