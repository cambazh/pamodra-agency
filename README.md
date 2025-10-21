# Pamodra Agency - Kurumsal Hediye Website

Premium kurumsal hediye çözümleri sunan modern ve profesyonel bir web sitesi.

## 🚀 Özellikler

- ✅ Modern ve şık Black & White premium tasarım
- ✅ Responsive tasarım (Mobil, Tablet, Desktop)
- ✅ Next.js 15 + TypeScript
- ✅ Tailwind CSS ile styling
- ✅ Teklif formu ile email gönderimi
- ✅ Gmail SMTP entegrasyonu
- ✅ 5 ana sayfa:
  - Ana Sayfa
  - Hakkımızda
  - Ürünler/Paketler
  - Referanslar
  - İletişim/Teklif Formu

## 📋 Gereksinimler

- Node.js 18+ 
- npm veya yarn
- Gmail hesabı (Email gönderimi için)

## 🛠️ Kurulum

1. **Projeyi klonlayın veya indirin**

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Environment Variables ayarlayın:**

`.env.local` dosyasını düzenleyin ve Gmail bilgilerinizi ekleyin:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-digit-app-password
COMPANY_EMAIL=info@pamodra.com
```

**Gmail App Password Oluşturma:**
1. Google Hesabınıza gidin
2. Security > 2-Step Verification'ı aktifleştirin
3. App Passwords bölümünden yeni bir uygulama şifresi oluşturun
4. Oluşturulan 16 haneli şifreyi `SMTP_PASSWORD` olarak kullanın

4. **Development sunucusunu başlatın:**
```bash
npm run dev
```

5. **Tarayıcınızda açın:**
```
http://localhost:3000
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 🚀 Vercel'e Deploy

1. GitHub'a projeyi push edin
2. [Vercel](https://vercel.com)'e gidin
3. "New Project" ile projeyi import edin
4. Environment Variables'ı ekleyin:
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `COMPANY_EMAIL`
5. Deploy butonuna tıklayın

## 📁 Proje Yapısı

```
pamodra-agency/
├── app/
│   ├── components/         # React componentleri
│   │   ├── Navigation.tsx  # Header/Navbar
│   │   └── Footer.tsx      # Footer
│   ├── api/
│   │   └── send-email/     # Email API route
│   ├── hakkimizda/         # Hakkımızda sayfası
│   ├── urunler/            # Ürünler sayfası
│   ├── referanslar/        # Referanslar sayfası
│   ├── iletisim/           # İletişim/Form sayfası
│   ├── layout.tsx          # Ana layout
│   ├── page.tsx            # Ana sayfa
│   └── globals.css         # Global stiller
├── public/                 # Statik dosyalar
├── .env.local             # Environment variables
└── package.json           # Dependencies

```

## 🎨 Özelleştirme

### Renkleri Değiştirme
`app/globals.css` dosyasındaki CSS değişkenlerini düzenleyin.

### Logo Ekleme
Logo dosyanızı `public/` klasörüne koyun ve `app/components/Navigation.tsx` dosyasında kullanın.

### İletişim Bilgileri
`app/components/Footer.tsx` ve `app/iletisim/page.tsx` dosyalarındaki iletişim bilgilerini güncelleyin.

## 📧 Email Ayarları

Form gönderimi yapıldığında:
- Şirkete (COMPANY_EMAIL) teklif detayları gönderilir
- Müşteriye otomatik onay maili gönderilir

## 🔧 Teknolojiler

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Email:** Nodemailer
- **Deployment:** Vercel

## 📝 Lisans

Bu proje özel kullanım içindir.

## 💬 Destek

Sorularınız için:
- Email: info@pamodra.com
- Telefon: +90 (XXX) XXX XX XX

---

© 2025 Pamodra Agency. Tüm hakları saklıdır.
