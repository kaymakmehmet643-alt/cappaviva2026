export default function MesafeliSatisPage() {
  return (
    <div className="max-w-4xl mx-auto py-32 px-6 text-gray-800 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 border-b pb-4">
        Mesafeli Hizmet Satış Sözleşmesi
      </h1>
      <div className="space-y-6 leading-relaxed text-gray-600">
        
        <p className="italic text-sm text-gray-500 mb-6">
          (Not: Bu sözleşme, alıcı ödeme sayfasına geçtiğinde dijital olarak onaylanmaktadır.)
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">MADDE 1 - TARAFLAR</h2>
        <p><strong>Satıcı:</strong> [Şirket Unvanınız], [Açık Adresiniz], [Telefon/Mail]</p>
        <p><strong>Alıcı (Tüketici):</strong> Web sitesi üzerinden rezervasyon yapan ve formu dolduran kişi.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">MADDE 2 - SÖZLEŞMENİN KONUSU</h2>
        <p>İşbu sözleşmenin konusu; Alıcı'nın, Satıcı'ya ait web sitesi üzerinden elektronik ortamda siparişini verdiği tur, aktivite veya transfer hizmetinin satışı ve ifası ile ilgili 6502 sayılı Tüketicinin Korunması Hakkında Kanun hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">MADDE 3 - HİZMETİN İFASI VE TESLİMAT</h2>
        <p>Satın alınan hizmet, Alıcı'nın belirlediği ve rezervasyon formunda seçilen tarih ve saatte gerçekleştirilecektir. Alıcı, belirtilen saatte buluşma noktasında (veya otel lobisinde) hazır bulunmakla yükümlüdür. Geç kalınması durumunda Satıcı'nın sorumluluğu bulunmaz ve ücret iadesi yapılmaz.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">MADDE 4 - YETKİLİ MAHKEME</h2>
        <p>İşbu sözleşmeden doğabilecek uyuşmazlıklarda, Tüketici Hakem Heyetleri ile Satıcı'nın yerleşim yerindeki (Nevşehir) Tüketici Mahkemeleri yetkilidir.</p>
      </div>
    </div>
  );
}