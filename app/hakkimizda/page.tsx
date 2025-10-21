export default function Hakkimizda() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 premium-gradient">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hakkımızda
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Kurumsal hediye çözümlerinde profesyonel yaklaşım
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-8 shadow-xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-black">Misyonumuz</h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
              İşletmelerin müşterileri ve çalışanlarıyla olan bağlarını güçlendirmek için özel tasarlanmış, 
              kaliteli ve anlamlı kurumsal hediye çözümleri sunmak. Her hediyenin bir hikaye anlattığına 
              inanıyor ve markanızı en iyi şekilde temsil edecek çözümler üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Değerlerimiz</h2>
            <p className="text-base text-gray-600">
              İş yapış şeklimizi belirleyen temel prensiplerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl w-full">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Kalite</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                En yüksek kalite standartlarında ürünler ve hizmetler
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Güven</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Şeffaf ve dürüst iş ilişkileri
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">İnovasyon</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sürekli gelişim ve yenilikçi çözümler
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Zamanında Teslimat</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Taahhütlerimize bağlı kalarak zamanında hizmet
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Kişiselleştirme</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Her müşteriye özel, benzersiz çözümler
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-black">Sürdürülebilirlik</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Çevre dostu ve sosyal sorumlu yaklaşım
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-black">Neden Bizi Seçmelisiniz?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl w-full">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1 text-black">Geniş Ürün Yelpazesi</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Her bütçe ve ihtiyaca uygun çeşitli seçenekler
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1 text-black">Profesyonel Ekip</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Deneyimli danışmanlarımızla en iyi çözümler
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1 text-black">Hızlı Teslimat</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Türkiye genelinde hızlı ve güvenilir kargo
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1 text-black">Esnek Ödeme</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Kurumsal firmalar için özel ödeme seçenekleri
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1 text-black">Müşteri Desteği</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Her zaman ulaşılabilir destek ekibi
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold mb-1 text-black">Kalite Garantisi</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Tüm ürünlerimizde memnuniyet garantisi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 premium-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Birlikte Çalışmaya Başlayalım
            </h2>
            <p className="text-base text-gray-300 max-w-2xl">
              Size özel hazırlayacağımız teklifi almak için iletişime geçin
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
