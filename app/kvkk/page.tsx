export default function KvkkPage() {
  return (
    <div className="max-w-4xl mx-auto py-32 px-6 text-gray-800 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 border-b pb-4">
        KVKK Aydınlatma Metni
      </h1>
      <div className="space-y-6 leading-relaxed text-gray-600">
        <p>
          <strong>[Şirket Unvanınız]</strong> olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, sizlere daha iyi hizmet verebilmek amacıyla bazı kişisel verilerinizi işlemekteyiz.
        </p>
        
        <h2 className="text-xl font-bold text-gray-900 mt-8">1. Hangi Verileri Topluyoruz ve Neden İşliyoruz?</h2>
        <p>Rezervasyon formlarımız aracılığıyla adınız, soyadınız, telefon numaranız, e-posta adresiniz ve konaklama/transfer bilgileriniz toplanmaktadır. Bu veriler;</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Satın aldığınız tur ve hizmetlerin organizasyonunu sağlamak,</li>
          <li>Rezervasyonunuzla ilgili size bilgi (WhatsApp, e-posta) vermek,</li>
          <li>Olası iptal ve değişikliklerde sizinle iletişime geçmek amacıyla işlenmektedir.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8">2. Verilerin Paylaşılması</h2>
        <p>Kişisel verileriniz, rezervasyon işlemlerinizin gerçekleştirilebilmesi için yalnızca hizmet aldığımız ilgili tedarikçilerle (transfer firmaları, balon operasyon şirketleri) paylaşılmakta olup, bunun dışında hiçbir 3. şahıs veya kurumla ticari amaçla paylaşılmamaktadır.</p>

        <h2 className="text-xl font-bold text-gray-900 mt-8">3. Haklarınız</h2>
        <p>KVKK’nın 11. maddesi gereğince, firmamıza başvurarak kişisel verilerinizin silinmesini, güncellenmesini veya işlenip işlenmediğini öğrenme hakkına sahipsiniz. Taleplerinizi <strong>info@cappaviva.com</strong> adresi üzerinden bize iletebilirsiniz.</p>
      </div>
    </div>
  );
}