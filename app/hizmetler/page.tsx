import Link from 'next/link';

export default function Hizmetler() {
  const services = [
    {
      id: 1,
      icon: '🎁',
      title: 'Kurumsal Hediye Paketleri',
      description: 'Özel günler, organizasyonlar ve kutlamalar için profesyonelce hazırlanmış hediye paketleri.',
      features: [
        'Yıl dönümü paketleri',
        'Hoş geldin setleri',
        'Bayram ve özel gün hediyeleri',
        'Teşekkür paketleri'
      ]
    },
    {
      id: 2,
      icon: '💼',
      title: 'Promosyon Ürünleri',
      description: 'Markanızı temsil eden, kaliteli ve kullanışlı kurumsal promosyon ürünleri.',
      features: [
        'Markalı tekstil ürünleri',
        'Ofis ve kırtasiye malzemeleri',
        'Teknoloji aksesuarları',
        'Taşınabilir ürünler'
      ]
    },
    {
      id: 3,
      icon: '🎨',
      title: 'Özel Tasarım & Üretim',
      description: 'Markanıza özel, sıfırdan tasarlanan ve üretilen benzersiz hediye çözümleri.',
      features: [
        'Konsept geliştirme',
        'Tasarım ve prototipleme',
        'Özel üretim',
        'Ambalaj tasarımı'
      ]
    },
    {
      id: 4,
      icon: '📦',
      title: 'Toplu Siparişler',
      description: 'Büyük ölçekli projeler ve etkinlikler için kapsamlı çözümler.',
      features: [
        'Büyük organizasyonlar',
        'Bayilik paketleri',
        'Lojistik destek',
        'Proje yönetimi'
      ]
    },
    {
      id: 5,
      icon: '🏆',
      title: 'VIP & Executive Paketler',
      description: 'Üst düzey yöneticiler ve özel misafirler için lüks hediye seçenekleri.',
      features: [
        'Premium malzemeler',
        'Özel kutulama',
        'Kişiye özel seçenekler',
        'Lüks sunum'
      ]
    },
    {
      id: 6,
      icon: '🌱',
      title: 'Sürdürülebilir Çözümler',
      description: 'Çevre dostu ve sürdürülebilir materyallerden üretilmiş hediyeler.',
      features: [
        'Organik ürünler',
        'Geri dönüşümlü ambalaj',
        'Eco-friendly malzemeler',
        'Sosyal sorumluluk'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 premium-gradient">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hizmetlerimiz
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            İşletmeniz için özel olarak tasarlanmış kurumsal hediye çözümleri
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="w-full px-8">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover-lift group"
              >
                {/* Service Icon */}
                <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl border-b border-gray-200">
                  {service.icon}
                </div>

                {/* Service Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <svg
                          className="w-4 h-4 mr-2 text-black flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/iletisim"
                    className="block text-center bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
                  >
                    Bilgi Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Nasıl Çalışırız?
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Sizin için en uygun çözümü bulmak için profesyonel süreçlerimiz
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1 text-black">İletişim</h3>
                <p className="text-sm text-gray-600">İhtiyaçlarınızı dinliyoruz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1 text-black">Teklif</h3>
                <p className="text-sm text-gray-600">Size özel çözüm öneriyoruz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1 text-black">Üretim</h3>
                <p className="text-sm text-gray-600">Özenle hazırlıyoruz</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-lg">
                4
              </div>
              <div>
                <h3 className="font-bold mb-1 text-black">Teslimat</h3>
                <p className="text-sm text-gray-600">Zamanında teslim ediyoruz</p>
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
                Projeniz İçin Hemen Başlayalım
              </h2>
              <p className="text-base text-gray-300">
                Size en uygun çözümü bulmak için bizimle iletişime geçin
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
