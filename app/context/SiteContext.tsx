'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const SiteContext = createContext<any>(null);

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  // Sitenin ilk açılış varsayılan değerleri (Turizm sitesi olduğu için EN ve EUR yaptık)
  const [dil, setDil] = useState('en'); 
  const [paraBirimi, setParaBirimi] = useState('EUR'); 

  // İlk açılışta yedek kurlar (Banka API'si çökerse bile site dimdik ayakta kalır)
  const [kurlar, setKurlar] = useState({ EUR: 1, TRY: 54.0, USD: 1.1, GBP: 0.85 });

  // SİTE AÇILDIĞI AN CANLI KURLARI ÇEKEN YENİ SİHİRLİ KOD (ExchangeRate-API)
  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/EUR')
      .then(res => {
        if (!res.ok) throw new Error("Ağ yanıt vermedi");
        return res.json();
      })
      .then(data => {
        if (data && data.rates) {
          setKurlar({
            EUR: 1,
            TRY: data.rates.TRY, // Anlık Euro/TL
            USD: data.rates.USD, // Anlık Euro/Dolar
            GBP: data.rates.GBP  // Anlık Euro/Sterlin
          });
          console.log("✅ YENİ API ÇALIŞTI! Güncel Kurlar Çekildi:", data.rates.TRY, data.rates.USD);
        }
      })
      .catch(err => {
        console.error("🚨 Kur bağlantısı güvenlik duvarına takıldı, YEDEK KURLAR devrede!", err);
      });
  }, []);

  return (
    <SiteContext.Provider value={{ dil, setDil, paraBirimi, setParaBirimi, kurlar }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);