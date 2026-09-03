"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// HATA ÇÖZÜMÜ: Eğer import hatası alırsan burayı projene göre '@/' veya '../' olarak güncelle
import { useSite } from '@/app/context/SiteContext';

// =======================================================
// 📚 UI METİNLERİ (Sözlük)
// =======================================================
const UI_DICT: any = {
  en: {
    title: "Cappadocia Destinations",
    subtitle: "Explore The Unseen",
    desc: "Discover the most fascinating valleys, historical underground cities, and unique rock formations of the region.",
    all: "All Locations",
    region: "Regions",
    valley: "Valleys",
    museum: "Museums",
    church: "Churches",
    underground: "Underground Cities",
    explore: "Discover",
    empty: "No destinations found in this category."
  },
  tr: {
    title: "Kapadokya Destinasyonları",
    subtitle: "Bilinmeyeni Keşfet",
    desc: "Bölgenin en büyüleyici vadilerini, tarihi yeraltı şehirlerini ve eşsiz kaya oluşumlarını keşfedin.",
    all: "Tüm Lokasyonlar",
    region: "Bölgeler",
    valley: "Vadiler",
    museum: "Müzeler",
    church: "Kiliseler",
    underground: "Yeraltı Şehirleri",
    explore: "Keşfet",
    empty: "Bu kategoride henüz içerik bulunmamaktadır."
  },
  es: {
    title: "Destinos de Capadocia",
    subtitle: "Explora lo Invisible",
    desc: "Descubre los valles más fascinantes, las históricas ciudades subterráneas y las formaciones rocosas únicas de la región.",
    all: "Todos los Lugares",
    region: "Regiones",
    valley: "Valles",
    museum: "Museos",
    church: "Iglesias",
    underground: "Ciudades Subterráneas",
    explore: "Explorar",
    empty: "No se encontraron destinos en esta categoría."
  }
};

type Category = 'all' | 'region' | 'valley' | 'museum' | 'church' | 'underground';

// =======================================================
// 🌍 KAPADOKYA TAM LİSTE (Senin Navbardaki Tüm Linkler)
// =======================================================
const locationsData = [
  // --- BÖLGELER ---
  { category: 'region', href: '/destinations/goreme', image: '/images/destinations/goreme.jpg', title: { tr: 'Göreme', en: 'Goreme', es: 'Göreme' } },
  { category: 'region', href: '/destinations/uchisar', image: '/images/destinations/uchisar.jpg', title: { tr: 'Uçhisar', en: 'Uchisar', es: 'Uçhisar' } },
  { category: 'region', href: '/destinations/urgup', image: '/images/destinations/urgup.jpg', title: { tr: 'Ürgüp', en: 'Urgup', es: 'Ürgüp' } },
  { category: 'region', href: '/destinations/avanos', image: '/images/destinations/avanos.jpg', title: { tr: 'Avanos', en: 'Avanos', es: 'Avanos' } },
  { category: 'region', href: '/destinations/ortahisar', image: '/images/destinations/ortahisar.jpg', title: { tr: 'Ortahisar', en: 'Ortahisar', es: 'Ortahisar' } },
  { category: 'region', href: '/destinations/cavusin', image: '/images/destinations/cavusin.jpg', title: { tr: 'Çavuşin', en: 'Cavusin', es: 'Çavuşin' } },
  { category: 'region', href: '/destinations/mustafapasa', image: '/images/destinations/mustafapasa.jpg', title: { tr: 'Mustafapaşa (Sinasos)', en: 'Mustafapasa (Sinasos)', es: 'Mustafapaşa (Sinasos)' } },
  { category: 'region', href: '/destinations/nevsehir', image: '/images/destinations/nevsehir.jpg', title: { tr: 'Nevşehir', en: 'Nevsehir', es: 'Nevşehir' } },
  { category: 'region', href: '/destinations/guzelyurt', image: '/images/destinations/guzelyurt.jpg', title: { tr: 'Güzelyurt', en: 'Guzelyurt', es: 'Güzelyurt' } },
  { category: 'region', href: '/destinations/ihlara', image: '/images/destinations/ihlara.jpg', title: { tr: 'Ihlara Bölgesi', en: 'Ihlara Region', es: 'Región de Ihlara' } },
  
  // --- VADİLER ---
  { category: 'valley', href: '/valleys/love-valley', image: '/images/valleys/love.jpg', title: { tr: 'Aşk Vadisi', en: 'Love Valley', es: 'Valle del Amor' } },
  { category: 'valley', href: '/valleys/rose-valley', image: '/images/valleys/rose.jpg', title: { tr: 'Gül Vadisi', en: 'Rose Valley', es: 'Valle de las Rosas' } },
  { category: 'valley', href: '/valleys/red-valley', image: '/images/valleys/red.jpg', title: { tr: 'Kızıl Vadi', en: 'Red Valley', es: 'Valle Rojo' } },
  { category: 'valley', href: '/valleys/pigeon-valley', image: '/images/valleys/pigeon.jpg', title: { tr: 'Güvercinlik Vadisi', en: 'Pigeon Valley', es: 'Valle de las Palomas' } },
  { category: 'valley', href: '/valleys/devrent', image: '/images/valleys/devrent.jpg', title: { tr: 'Devrent Vadisi', en: 'Imagination Valley', es: 'Valle de la Imaginación' } },
  { category: 'valley', href: '/valleys/pasabag', image: '/images/valleys/pasabag.jpg', title: { tr: 'Paşabağ Vadisi', en: 'Monks Valley', es: 'Valle de los Monjes' } },
  { category: 'valley', href: '/valleys/zemi', image: '/images/valleys/zemi.jpg', title: { tr: 'Zemi Vadisi', en: 'Zemi Valley', es: 'Valle de Zemi' } },
  { category: 'valley', href: '/valleys/meskendir', image: '/images/valleys/meskendir.jpg', title: { tr: 'Meskendir Vadisi', en: 'Meskendir Valley', es: 'Valle de Meskendir' } },
  { category: 'valley', href: '/valleys/kiliclar', image: '/images/valleys/kiliclar.jpg', title: { tr: 'Kılıçlar Vadisi', en: 'Sword Valley', es: 'Valle de las Espadas' } },
  { category: 'valley', href: '/valleys/white-valley', image: '/images/valleys/white.jpg', title: { tr: 'Beyaz Vadi', en: 'White Valley', es: 'Valle Blanco' } },
  { category: 'valley', href: '/valleys/gomeda', image: '/images/valleys/gomeda.jpg', title: { tr: 'Gomeda Vadisi', en: 'Gomeda Valley', es: 'Valle de Gomeda' } },
  { category: 'valley', href: '/valleys/soganli', image: '/images/valleys/soganli.jpg', title: { tr: 'Soğanlı Vadisi', en: 'Soganli Valley', es: 'Valle de Soganli' } },
  { category: 'valley', href: '/valleys/ihlara', image: '/images/valleys/ihlara.jpg', title: { tr: 'Ihlara Vadisi', en: 'Ihlara Valley', es: 'Valle de Ihlara' } },
  { category: 'valley', href: '/valleys/uzengi', image: '/images/valleys/uzengi.jpg', title: { tr: 'Uzengi Vadisi', en: 'Uzengi Valley', es: 'Valle de Uzengi' } },
  { category: 'valley', href: '/valleys/pancarlik', image: '/images/valleys/pancarlik.jpg', title: { tr: 'Pancarlık Vadisi', en: 'Pancarlik Valley', es: 'Valle de Pancarlik' } },
  { category: 'valley', href: '/valleys/love-valley-2', image: '/images/valleys/love-panorama.jpg', title: { tr: 'Aşk Vadisi (Panorama)', en: 'Love Valley Panorama', es: 'Panorama del Valle del Amor' } },
  { category: 'valley', href: '/valleys/cat-valley', image: '/images/valleys/cat.jpg', title: { tr: 'Çat Vadisi', en: 'Cat Valley', es: 'Valle de Cat' } },
  { category: 'valley', href: '/valleys/kizilcukur', image: '/images/valleys/kizilcukur.jpg', title: { tr: 'Kızılçukur Vadisi', en: 'Red Valley Sunset Point', es: 'Punto de Atardecer Valle Rojo' } },

  // --- MÜZELER ---
  { category: 'museum', href: '/museums/goreme', image: '/images/museums/goreme.jpg', title: { tr: 'Göreme Açık Hava Müzesi', en: 'Goreme Open Air Museum', es: 'Museo al Aire Libre de Göreme' } },
  { category: 'museum', href: '/museums/zelve', image: '/images/museums/zelve.jpg', title: { tr: 'Zelve Açık Hava Müzesi', en: 'Zelve Open Air Museum', es: 'Museo al Aire Libre de Zelve' } },
  { category: 'museum', href: '/museums/karanlik-kilise', image: '/images/churches/karanlik.jpg', title: { tr: 'Karanlık Kilise Müzesi', en: 'Dark Church Museum', es: 'Museo de la Iglesia Oscura' } },
  { category: 'museum', href: '/museums/tokali-kilise', image: '/images/churches/tokali.jpg', title: { tr: 'Tokalı Kilise Müzesi', en: 'Buckle Church Museum', es: 'Museo de la Iglesia de la Hebilla' } },
  { category: 'museum', href: '/museums/el-nazar', image: '/images/churches/elnazar.jpg', title: { tr: 'El Nazar Müzesi', en: 'El Nazar Museum', es: 'Museo El Nazar' } },
  { category: 'museum', href: '/museums/carikli', image: '/images/churches/carikli.jpg', title: { tr: 'Çarıklı Kilise Müzesi', en: 'Sandals Church Museum', es: 'Museo de la Iglesia de las Sandalias' } },
  { category: 'museum', href: '/museums/aziz-barbara', image: '/images/churches/barbara.jpg', title: { tr: 'Aziz Barbara Müzesi', en: 'St. Barbara Museum', es: 'Museo de Santa Bárbara' } },
  { category: 'museum', href: '/museums/nevsehir', image: '/images/museums/nevsehir.jpg', title: { tr: 'Nevşehir Müzesi', en: 'Nevsehir Museum', es: 'Museo de Nevsehir' } },
  { category: 'museum', href: '/museums/guray', image: '/images/museums/guray.jpg', title: { tr: 'Güray Müze', en: 'Guray Museum', es: 'Museo Güray' } },
  { category: 'museum', href: '/museums/hacibektas', image: '/images/museums/hacibektas.jpg', title: { tr: 'Hacıbektaş Müzesi', en: 'Hacibektas Museum', es: 'Museo de Hacibektas' } },
  { category: 'museum', href: '/museums/hair-museum', image: '/images/museums/hair.jpg', title: { tr: 'Saç Müzesi (Chez Galip)', en: 'Hair Museum', es: 'Museo del Cabello' } },
  { category: 'museum', href: '/museums/art-history', image: '/images/museums/art-history.jpg', title: { tr: 'Kapadokya Sanat ve Tarih', en: 'Art & History Museum', es: 'Museo de Arte e Historia' } },
  { category: 'museum', href: '/museums/acik-saray', image: '/images/museums/acik-saray.jpg', title: { tr: 'Açık Saray Ören Yeri', en: 'Acik Saray Ruins', es: 'Ruinas de Acik Saray' } },
  { category: 'museum', href: '/museums/selime', image: '/images/museums/selime.jpg', title: { tr: 'Selime Manastırı', en: 'Selime Monastery', es: 'Monasterio de Selime' } },
  { category: 'museum', href: '/museums/sobesos', image: '/images/museums/sobesos.jpg', title: { tr: 'Sobesos Antik Kenti', en: 'Sobesos Ancient City', es: 'Antigua Ciudad de Sobesos' } },

  // --- KİLİSELER ---
  { category: 'church', href: '/churches/karanlik', image: '/images/churches/karanlik.jpg', title: { tr: 'Karanlık Kilise', en: 'Dark Church', es: 'Iglesia Oscura' } },
  { category: 'church', href: '/churches/tokali', image: '/images/churches/tokali.jpg', title: { tr: 'Tokalı Kilise', en: 'Buckle Church', es: 'Iglesia de la Hebilla' } },
  { category: 'church', href: '/churches/elmali', image: '/images/churches/elmali.jpg', title: { tr: 'Elmalı Kilise', en: 'Apple Church', es: 'Iglesia de la Manzana' } },
  { category: 'church', href: '/churches/yilanli', image: '/images/churches/yilanli.jpg', title: { tr: 'Yılanlı Kilise', en: 'Snake Church', es: 'Iglesia de la Serpiente' } },
  { category: 'church', href: '/churches/carikli', image: '/images/churches/carikli.jpg', title: { tr: 'Çarıklı Kilise', en: 'Sandals Church', es: 'Iglesia de las Sandalias' } },
  { category: 'church', href: '/churches/aziz-barbara', image: '/images/churches/barbara.jpg', title: { tr: 'Aziz Barbara Kilisesi', en: 'St. Barbara Church', es: 'Iglesia de Santa Bárbara' } },
  { category: 'church', href: '/churches/el-nazar', image: '/images/churches/elnazar.jpg', title: { tr: 'El Nazar Kilisesi', en: 'El Nazar Church', es: 'Iglesia El Nazar' } },
  { category: 'church', href: '/churches/sakli', image: '/images/churches/sakli.jpg', title: { tr: 'Saklı Kilise', en: 'Hidden Church', es: 'Iglesia Oculta' } },
  { category: 'church', href: '/churches/aynali', image: '/images/churches/aynali.jpg', title: { tr: 'Aynalı Kilise', en: 'Mirrored Church', es: 'Iglesia Espejo' } },
  { category: 'church', href: '/churches/vaftizci-yahya', image: '/images/churches/yahya.jpg', title: { tr: 'Vaftizci Yahya Kilisesi', en: 'St. John the Baptist', es: 'San Juan Bautista' } },
  { category: 'church', href: '/churches/meryem-ana', image: '/images/churches/meryem.jpg', title: { tr: 'Meryem Ana Kilisesi', en: 'Virgin Mary Church', es: 'Iglesia de la Virgen María' } },
  { category: 'church', href: '/churches/hacli', image: '/images/churches/hacli.jpg', title: { tr: 'Haçlı Kilise', en: 'Cross Church', es: 'Iglesia de la Cruz' } },
  { category: 'church', href: '/churches/uzumlu', image: '/images/churches/uzumlu.jpg', title: { tr: 'Üzümlü Kilise', en: 'Grape Church', es: 'Iglesia de la Uva' } },
  { category: 'church', href: '/churches/direkli', image: '/images/churches/direkli.jpg', title: { tr: 'Direkli Kilise', en: 'Pillared Church', es: 'Iglesia de los Pilares' } },
  { category: 'church', href: '/churches/gulludere', image: '/images/valleys/gulludere.jpg', title: { tr: 'Güllüdere Kiliseleri', en: 'Gulludere Churches', es: 'Iglesias de Gulludere' } },
  { category: 'church', href: '/churches/cavusin-vaftizci', image: '/images/destinations/cavusin.jpg', title: { tr: 'Çavuşin Vaftizci Yahya', en: 'Cavusin St. John', es: 'San Juan de Cavusin' } },
  { category: 'church', href: '/churches/selime', image: '/images/churches/selime.jpg', title: { tr: 'Selime Katedrali', en: 'Selime Cathedral', es: 'Catedral de Selime' } },
  { category: 'church', href: '/churches/agacalti', image: '/images/churches/agacalti.jpg', title: { tr: 'Ağaçaltı Kilisesi', en: 'Agacalti Church', es: 'Iglesia Agacalti' } },
  { category: 'church', href: '/churches/kokar', image: '/images/churches/kokar.jpg', title: { tr: 'Kokar Kilise', en: 'Kokar Church', es: 'Iglesia Kokar' } },
  { category: 'church', href: '/churches/sumbullu', image: '/images/churches/sumbullu.jpg', title: { tr: 'Sümbüllü Kilise', en: 'Sumbullu Church', es: 'Iglesia Sumbullu' } },
  { category: 'church', href: '/churches/karagedik', image: '/images/churches/karagedik.jpg', title: { tr: 'Karagedik Kilisesi', en: 'Karagedik Church', es: 'Iglesia Karagedik' } },
  { category: 'church', href: '/churches/bahattin', image: '/images/churches/bahattin.jpg', title: { tr: 'Bahattin Samanlığı Kilisesi', en: 'Bahattin Church', es: 'Iglesia de Bahattin' } },
  { category: 'church', href: '/churches/eustathios', image: '/images/churches/eustathios.jpg', title: { tr: 'Aziz Eustathios Kilisesi', en: 'St. Eustathios Church', es: 'Iglesia de San Eustatio' } },
  { category: 'church', href: '/churches/basil', image: '/images/churches/basil.jpg', title: { tr: 'Aziz Basil Şapeli', en: 'St. Basil Chapel', es: 'Capilla de San Basilio' } },
  { category: 'church', href: '/churches/onuphrius', image: '/images/churches/onuphrius.jpg', title: { tr: 'Aziz Onuphrius Kilisesi', en: 'St. Onuphrius Church', es: 'Iglesia de San Onofre' } },

  // --- YERALTI ŞEHİRLERİ ---
  { category: 'underground', href: '/destinations/derinkuyu', image: '/images/underground/derinkuyu.jpg', title: { tr: 'Derinkuyu Yeraltı Şehri', en: 'Derinkuyu Underground', es: 'Ciudad Subterránea Derinkuyu' } },
  { category: 'underground', href: '/destinations/kaymakli', image: '/images/underground/kaymakli.jpg', title: { tr: 'Kaymaklı Yeraltı Şehri', en: 'Kaymakli Underground', es: 'Ciudad Subterránea Kaymakli' } },
  { category: 'underground', href: '/destinations/ozkonak', image: '/images/underground/ozkonak.jpg', title: { tr: 'Özkonak Yeraltı Şehri', en: 'Ozkonak Underground', es: 'Ciudad Subterránea Ozkonak' } },
  { category: 'underground', href: '/destinations/mazi', image: '/images/underground/mazi.jpg', title: { tr: 'Mazı Yeraltı Şehri', en: 'Mazi Underground', es: 'Ciudad Subterránea Mazi' } },
  { category: 'underground', href: '/museums/kayasehir', image: '/images/museums/kayasehir.jpg', title: { tr: 'Kayaşehir (Nevşehir)', en: 'Kayasehir Rock City', es: 'Ciudad Roca Kayasehir' } },
];

export default function Destinations() {
  // BEYİNDEN DİL VERİSİNİ ÇEKİYORUZ 🌍
  const { dil } = useSite();
  const aktifDil = (dil ? String(dil).toLowerCase() : 'tr') as 'tr' | 'en' | 'es';
  const t = UI_DICT[aktifDil] || UI_DICT['tr'];

  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredData = locationsData.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: t.all },
    { id: 'region', label: t.region },
    { id: 'valley', label: t.valley },
    { id: 'museum', label: t.museum },
    { id: 'church', label: t.church },
    { id: 'underground', label: t.underground },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ======================================= */}
        {/* MODERNİZE EDİLMİŞ ÜST BAŞLIK (HERO) */}
        {/* ======================================= */}
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16 pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100/50 border border-yellow-200 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            <span className="text-yellow-600 font-bold uppercase tracking-widest text-xs">
              {t.subtitle}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6 drop-shadow-sm">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* ======================================= */}
        {/* FİLTRE BUTONLARI (ŞIK & ANİMASYONLU) */}
        {/* ======================================= */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ======================================= */}
        {/* KARTLAR - SİNEMATİK & GLOW EFEKTLİ (Fiyatsız Bilgi Kartı) */}
        {/* ======================================= */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredData.map((item, index) => (
              <Link
                href={item.href}
                key={`${item.href}-${index}`}
                // GLOW EFEKTİ BURADA: hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]
                className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {/* Görsel Alanı */}
                <div className="w-full aspect-[4/3] relative overflow-hidden bg-slate-200">
                  <Image
                    src={item.image}
                    alt={item.title[aktifDil]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  {/* Sinematik Karartma Efekti (Alttan yukarı - Okunabilirlik için) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Kategori Etiketi */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest z-10 shadow-lg">
                    {t[item.category]}
                  </div>

                  {/* Görselin İçindeki Başlık (Modern Dergi Tarzı) */}
                  <div className="absolute bottom-4 left-5 pr-5">
                    <h3 className="text-2xl font-extrabold text-white leading-tight drop-shadow-md group-hover:text-yellow-400 transition-colors duration-300">
                      {item.title[aktifDil]}
                    </h3>
                  </div>
                </div>

                {/* Alt İçerik Alanı (Bilgi/Keşfet) */}
                <div className="p-5 flex items-center justify-between bg-white relative z-10 border-t border-slate-50">
                  
                  {/* Bilgi Metni */}
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-yellow-600 transition-colors duration-300">
                      {t.explore}
                    </span>
                  </div>
                  
                  {/* Oklu Işıklı İkon */}
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-yellow-500 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition-all duration-300 border border-slate-100">
                    <svg className="w-5 h-5 text-slate-400 group-hover:text-black transform group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500 font-medium text-lg">
            {t.empty}
          </div>
        )}

      </div>
    </section>
  );
}