export default function Hakkimizda() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center premium-gradient overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 w-full px-8">
          <div className="flex justify-center">
            <div className="text-center max-w-3xl">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              {/* Title with decorative line */}
              <div className="relative mb-8">
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-20 h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6">
                  Misyonumuz
                </h1>
              </div>
              
              {/* Content with accent */}
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full"></div>
                <p className="text-lg text-gray-200 leading-relaxed pl-6 border-l-2 border-purple-500/30">
                  İşletmelerin müşterileri ve çalışanlarıyla olan bağlarını güçlendirmek için özel tasarlanmış, 
                  kaliteli ve anlamlı kurumsal hediye çözümleri sunmak. Her hediyenin bir hikaye anlattığına 
                  inanıyor ve markanızı en iyi şekilde temsil edecek çözümler üretiyoruz.
                </p>
              </div>
              
              {/* Bottom decoration */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-purple-500 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4 text-black">Değerlerimiz</h2>
            <p className="text-base text-gray-600">
              İş yapış şeklimizi belirleyen temel prensiplerimiz
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
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
        </div>
      </section>

      {/* Separator */}
      <div className="h-16 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="w-full px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-16">Neden Bizi Seçmelisiniz?</h2>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 premium-gradient">
        <div className="w-full px-8">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Birlikte Çalışmaya Başlayalım
              </h2>
              <p className="text-base text-gray-300">
                Size özel hazırlayacağımız teklifi almak için iletişime geçin
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
