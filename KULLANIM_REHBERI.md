# 📖 Pamodra Agency - Kullanım Rehberi

Bu rehber, Pamodra Agency web sitesini nasıl kullanacağınızı ve özelleştireceğinizi açıklar.

## 🎯 Hızlı Başlangıç

### 1. Projeyi İlk Çalıştırma

```bash
cd /Users/taha/pamodra-agency
npm install
npm run dev
```

Tarayıcınızda: http://localhost:3000

### 2. Email Kurulumu

**Önemli:** Form çalışması için email kurulumu yapmalısınız!

📧 Detaylı talimatlar için: [EMAIL_SETUP.md](EMAIL_SETUP.md)

Kısaca:
1. Gmail App Password oluşturun
2. `.env.local` dosyasını düzenleyin
3. Sunucuyu yeniden başlatın

### 3. İçerikleri Özelleştirme

Aşağıdaki dosyaları düzenleyerek sitenizi kişiselleştirin:

#### İletişim Bilgileri

**Footer - `app/components/Footer.tsx`**
```tsx
// Satır 73-85 civarı
<span>+90 (XXX) XXX XX XX</span>     // Telefon
<span>info@pamodra.com</span>        // Email
<span>İstanbul, Türkiye</span>       // Adres
```

**İletişim Sayfası - `app/iletisim/page.tsx`**
```tsx
// Satır 175-210 civarı
<p className="text-gray-600">+90 (XXX) XXX XX XX</p>
<p className="text-gray-600">info@pamodra.com</p>
```

#### Şirket İsmi ve Logo

**Navigation - `app/components/Navigation.tsx`**
```tsx
// Satır 27-29 civarı
<div className="text-2xl font-bold text-black">
  Pamodra <span className="text-gray-600">Agency</span>
</div>
```

Logo eklemek için:
```tsx
<Link href="/" className="flex items-center space-x-3">
  <img src="/logo.png" alt="Pamodra Agency" className="h-10" />
</Link>
```

#### Meta Bilgileri (SEO)

**Layout - `app/layout.tsx`**
```tsx
// Satır 15-18
export const metadata: Metadata = {
  title: "Pamodra Agency - Kurumsal Hediye Çözümleri",
  description: "Premium kurumsal hediye paketleri...",
};
```

## 📄 Sayfa Düzenleme

### Ana Sayfa (app/page.tsx)

**Hero Başlığı Değiştirme:**
```tsx
// Satır 8-13 civarı
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
  Premium Kurumsal
  <br />
  <span className="text-transparent bg-clip-text...">
    Hediye Çözümleri
  </span>
</h1>
```

**İstatistikleri Güncelleme:**
```tsx
// Satır 33-50 civarı
<div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
<div className="text-gray-300">Mutlu Müşteri</div>
```

### Hakkımızda Sayfası (app/hakkimizda/page.tsx)

**Şirket Hikayesi:**
```tsx
// Satır 23-42 civarı
<p>
  Pamodra Agency, kurumsal hediye sektöründe...
</p>
```

### Ürünler Sayfası (app/urunler/page.tsx)

**Ürün Ekleme/Düzenleme:**
```tsx
// Satır 3-130 civarı
const products = [
  {
    id: 1,
    title: 'Premium Hoş Geldin Paketi',
    description: 'Yeni çalışanlarınız için...',
    price: '₺1,500 - ₺3,000',
    icon: '🎁',
    features: ['Özel marka kutusu', 'Kişiselleştirilmiş...'],
  },
  // Yeni ürün ekleyin
  {
    id: 13,
    title: 'Yeni Paket',
    description: 'Açıklama...',
    price: '₺X,XXX',
    icon: '🎁',
    features: ['Özellik 1', 'Özellik 2'],
  },
];
```

### Referanslar Sayfası (app/referanslar/page.tsx)

**Müşteri Yorumu Ekleme:**
```tsx
// Satır 3-46 civarı
const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    position: 'İK Müdürü',
    company: 'Tech Solutions A.Ş.',
    content: 'Yorum metni...',
    rating: 5,
  },
  // Yeni yorum ekleyin
];
```

**Müşteri Logo Ekleme:**
```tsx
// Satır 48-61 civarı
const clients = [
  { name: 'Tech Corp', initial: 'TC' },
  // Yeni müşteri ekleyin
];
```

## 🎨 Tasarım Özelleştirme

### Renkleri Değiştirme

**Global CSS - `app/globals.css`**
```css
/* Satır 3-9 */
:root {
  --background: #ffffff;
  --foreground: #000000;
  --accent: #1a1a1a;
  --gray: #6b7280;
  --light-gray: #f3f4f6;
}
```

### Gradient'ları Değiştirme

```css
/* Satır 30-32 */
.premium-gradient {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
}
```

Farklı renk önerileri:
```css
/* Mavi tonları */
background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);

/* Mor tonları */
background: linear-gradient(135deg, #581c87 0%, #a855f7 100%);

/* Yeşil tonları */
background: linear-gradient(135deg, #064e3b 0%, #10b981 100%);
```

## 📧 Form Ayarları

### Form Alanları Düzenleme

**İletişim Formu - `app/iletisim/page.tsx`**

Yeni alan eklemek:
```tsx
// Örnek: "Şirket Pozisyonu" alanı eklemek
<div>
  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
    Pozisyonunuz
  </label>
  <input
    type="text"
    id="position"
    name="position"
    value={formData.position}
    onChange={handleChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg..."
    placeholder="Örn: Pazarlama Müdürü"
  />
</div>
```

### Email Şablonunu Değiştirme

**API Route - `app/api/send-email/route.ts`**
```tsx
// Satır 30-90 civarı - Şirkete giden email
// Satır 95-160 civarı - Müşteriye giden email
```

## 🚀 Production'a Hazırlama

### 1. İçerikleri Kontrol Edin

- [ ] Telefon numaraları güncel
- [ ] Email adresleri doğru
- [ ] Şirket adresi güncel
- [ ] Ürün fiyatları doğru
- [ ] Tüm metinler kontrol edildi

### 2. Email Testini Yapın

```bash
npm run dev
```

1. http://localhost:3000/iletisim adresine gidin
2. Formu doldurun ve gönderin
3. Email'lerin geldiğini kontrol edin

### 3. Build Testi

```bash
npm run build
```

Hata varsa düzeltin.

### 4. Deploy

Detaylı talimatlar için: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

## 🔧 Bakım ve Güncelleme

### Düzenli Yapılması Gerekenler

1. **Ürün Fiyatlarını Güncelleme**
   - `app/urunler/page.tsx` dosyasını açın
   - `products` array'indeki fiyatları güncelleyin

2. **Yeni Ürün Ekleme**
   - Aynı dosyada yeni bir ürün objesi ekleyin
   - `id` değerini benzersiz yapın

3. **Müşteri Yorumları Ekleme**
   - `app/referanslar/page.tsx` dosyasını açın
   - `testimonials` array'ine yeni yorum ekleyin

4. **Sosyal Medya Linklerini Güncelleme**
   - Footer: `app/components/Footer.tsx` (Satır 90-115)
   - İletişim: `app/iletisim/page.tsx` (Satır 255-275)

### Git ile Versiyon Kontrolü

```bash
# Değişiklikleri kaydet
git add .
git commit -m "Ürün fiyatları güncellendi"

# GitHub'a yükle
git push

# Vercel otomatik deploy edecek
```

## 📱 Responsive Tasarım

Tüm sayfalar otomatik olarak responsive'dir:

- **Mobil:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Tailwind CSS breakpoints:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

## 🐛 Sorun Giderme

### Build Hatası

```bash
# Cache'i temizle
rm -rf .next
npm run build
```

### Email Gitmiyor

1. `.env.local` dosyasını kontrol edin
2. Gmail App Password'ü yeniden oluşturun
3. Sunucuyu yeniden başlatın

### Sayfa Görünmüyor

1. Dosya ismini kontrol edin (küçük harf)
2. `page.tsx` olmalı, `Page.tsx` değil
3. Klasör yapısını kontrol edin

## 📊 Analytics Ekleme

### Google Analytics

1. Google Analytics hesabı oluşturun
2. Tracking ID'yi alın
3. `app/layout.tsx` dosyasına ekleyin:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

## 🔒 Güvenlik

- ✅ `.env.local` dosyası .gitignore'da
- ✅ API route'lar validasyon yapıyor
- ✅ HTTPS otomatik (Vercel)
- ✅ CORS koruması aktif

## 💡 İpuçları

1. **Logo Eklemek İçin:**
   - Logo dosyasını `public/` klasörüne koyun
   - `app/components/Navigation.tsx`'de kullanın

2. **Favicon Değiştirmek:**
   - `app/favicon.ico` dosyasını değiştirin

3. **Font Değiştirmek:**
   - `app/layout.tsx`'de Google Fonts'tan farklı font seçin

4. **Dil Eklemek:**
   - i18n paketi kurun veya sayfa çoğaltın

## 📞 Yardım

Sorunlarınız için:
- README.md dosyasını okuyun
- EMAIL_SETUP.md'ye bakın
- DEPLOYMENT_GUIDE.md'yi inceleyin

---

© 2025 Pamodra Agency - Tüm hakları saklıdır.

