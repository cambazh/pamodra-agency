import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center premium-gradient overflow-hidden pt-24">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
                Premium Kurumsal
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                  Hediye Çözümleri
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                İşletmeniz için özel tasarlanmış hediye paketleri ile müşterilerinizi ve 
                çalışanlarınızı mutlu edin. Premium kalite, unutulmaz deneyimler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/iletisim"
                  className="bg-white text-black px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg text-center"
                >
                  İletişime Geçin
                </Link>
                <Link
                  href="/hizmetler"
                  className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-lg text-base font-semibold hover:bg-white hover:text-black transition-all duration-300 text-center"
                >
                  Hizmetlerimiz
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-xl">
        <Image
                  src="/hero-products.jpg"
                  alt="Pamodra Premium Kurumsal Hediye Ürünleri"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
          priority
        />
                {/* Decorative glow effect */}
                <div className="absolute -inset-4 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="w-full px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Neden Bizi Seçmelisiniz?
            </h2>
            <p className="text-base text-gray-600 mb-8">
              Kurumsal hediye çözümlerinde profesyonel yaklaşım
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-16 max-w-6xl">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">Premium Kalite</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                En yüksek kalite standartlarıyla özenle seçilmiş ürünler
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">Kişiye Özel</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Markanıza ve ihtiyaçlarınıza göre tamamen özelleştirilebilir çözümler
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">Hızlı Hizmet</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
              Profesyonel ekip ve hızlı teslimat ile zamanında çözümler
            </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-16 bg-gradient-to-b from-white to-gray-100"></div>

      {/* Services Preview */}
      <section className="py-32 bg-gray-100">
        <div className="w-full px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Hizmetlerimiz
            </h2>
            <p className="text-base text-gray-600 mb-8">
              İşletmeniz için en uygun kurumsal hediye çözümlerini sunuyoruz
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
            <div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-base font-bold mb-2 text-black">Kurumsal Hediye Paketleri</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Özel günler ve organizasyonlar için hazırlanmış paketler</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-base font-bold mb-2 text-black">Kurumsal Ürünler</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Markanıza özel tasarlanmış promosyon ürünleri</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-base font-bold mb-2 text-black">Özel Tasarım</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Size özel, tamamen kişiselleştirilmiş çözümler</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col items-center justify-center text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-base font-bold mb-2 text-black">Toplu Siparişler</h3>
              <p className="text-gray-600 text-xs leading-relaxed">Büyük ölçekli projeler için profesyonel hizmet</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 premium-gradient">
        <div className="w-full px-8">
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center max-w-3xl">
              <h2 className="text-3xl font-bold text-white mb-6">
                Projeniz İçin Birlikte Çalışalım
              </h2>
              <p className="text-base text-gray-300">
                Size özel çözümler üretmek için buradayız. İletişime geçin, ihtiyaçlarınızı konuşalım.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
