export default function CerezPolitikasiPage() {
  return (
    <div className="max-w-4xl mx-auto py-32 px-6 text-gray-800 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 border-b pb-4">
        Çerez (Cookie) Politikası
      </h1>
      <div className="space-y-6 leading-relaxed text-gray-600">
        
        <p>
          <strong>Cappa Viva</strong> olarak, web sitemizi ziyaretleriniz sırasında deneyiminizi geliştirmek, sitemizin güvenli ve verimli çalışmasını sağlamak amacıyla çerezler (cookies) kullanmaktayız.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">1. Çerez (Cookie) Nedir?</h2>
        <p>Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar, sitemizin cihazınızı tanımasını ve tercihlerinizi hatırlamasını sağlar.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">2. Hangi Tür Çerezleri Kullanıyoruz?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Zorunlu Çerezler:</strong> Sitemizin düzgün çalışabilmesi ve güvenliğin sağlanması için kesinlikle gerekli olan çerezlerdir.</li>
          <li><strong>Performans ve Analiz Çerezleri:</strong> Ziyaretçilerin sitemizi nasıl kullandığını anlamamıza ve sitemizin performansını artırmamıza yardımcı olur.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8">3. Çerez Ayarlarını Nasıl Yönetebilirsiniz?</h2>
        <p>Tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi her zaman kişiselleştirebilirsiniz. Çerezleri tamamen reddedebilir veya bir çerez kaydedildiğinde tarayıcınızın sizi uyarmasını sağlayabilirsiniz.</p>
      </div>
    </div>
  );
}