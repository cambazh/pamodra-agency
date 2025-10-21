# 🚀 Deployment Guide - Pamodra Agency

Bu rehber, Pamodra Agency web sitesini Vercel'e deploy etmeniz için adım adım talimatlar içerir.

## ✅ Ön Hazırlık

### 1. Gmail App Password Oluşturma

Email gönderimi çalışması için Gmail App Password'e ihtiyacınız var:

1. **Google Hesabınıza gidin:** https://myaccount.google.com/
2. **Security** sekmesine tıklayın
3. **2-Step Verification'ı aktifleştirin** (eğer aktif değilse)
4. **App Passwords** bölümüne gidin
5. "Select app" > "Mail" seçin
6. "Select device" > "Other" seçin ve "Pamodra Website" yazın
7. **Generate** butonuna tıklayın
8. Oluşturulan **16 haneli şifreyi kopyalayın** (boşluksuz)

### 2. GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluşturun
2. Local projenizi GitHub'a push edin:

```bash
cd /Users/taha/pamodra-agency
git init
git add .
git commit -m "Initial commit - Pamodra Agency website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pamodra-agency.git
git push -u origin main
```

## 🌐 Vercel'e Deploy

### Adım 1: Vercel Hesabı Oluşturma

1. https://vercel.com adresine gidin
2. "Sign Up" ile GitHub hesabınızla kayıt olun

### Adım 2: Proje Import Etme

1. Vercel Dashboard'da **"New Project"** butonuna tıklayın
2. GitHub repository'nizi seçin (pamodra-agency)
3. **"Import"** butonuna tıklayın

### Adım 3: Environment Variables Ekleme

Deploy etmeden önce, **Environment Variables** bölümünden şu değişkenleri ekleyin:

```
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-digit-app-password
COMPANY_EMAIL=info@pamodra.com
```

**Önemli:** 
- `SMTP_USER`: Gmail adresiniz
- `SMTP_PASSWORD`: Adım 1'de oluşturduğunuz 16 haneli app password (boşluksuz)
- `COMPANY_EMAIL`: Teklif formlarının gönderileceği email adresi

### Adım 4: Deploy

1. **"Deploy"** butonuna tıklayın
2. Build işlemi tamamlanana kadar bekleyin (2-3 dakika)
3. ✅ Deploy tamamlandığında sitenizin URL'ini alacaksınız

### Adım 5: Test

1. Deploy edilen siteyi açın
2. **İletişim** sayfasına gidin
3. Formu doldurup test edin
4. Email'in gelip gelmediğini kontrol edin

## 🔧 Environment Variables Güncelleme

Daha sonra environment variables'ı güncellemek isterseniz:

1. Vercel Dashboard > Your Project
2. **Settings** > **Environment Variables**
3. Değişkeni düzenleyin
4. **Save** butonuna tıklayın
5. Yeni bir deployment tetikleyin (Deployments > Redeploy)

## 📧 Email Testi

Deploy sonrası mutlaka email testini yapın:

1. Sitenizin `/iletisim` sayfasına gidin
2. Formu doldurun
3. Gönder butonuna tıklayın
4. Başarılı mesajını görmelisiniz
5. Hem şirket emailine hem de müşteri emailine mail gittiğini kontrol edin

## ⚠️ Yaygın Sorunlar ve Çözümler

### Email Gönderilmiyor

**Problem:** "Email gönderilirken bir hata oluştu" hatası

**Çözüm:**
1. Gmail App Password'ün doğru olduğundan emin olun
2. Vercel'de Environment Variables'ın doğru yazıldığını kontrol edin
3. Gmail hesabınızda "Less secure app access" kapalı olmalı (App Password kullanıyorsanız)

### Build Hatası

**Problem:** Deployment sırasında build hatası

**Çözüm:**
1. Local'de `npm run build` komutunu çalıştırın
2. Hataları düzeltin
3. GitHub'a push edin
4. Vercel otomatik yeniden build yapacak

### Slow Response

**Problem:** Sayfa yavaş yükleniyor

**Çözüm:**
1. Vercel'in edge network'ü otomatik optimize eder
2. İlk yüklemede biraz yavaş olabilir
3. Sonraki yüklemeler çok hızlı olacak

## 🎨 Özelleştirme Sonrası Deploy

Kod değişikliği yaptıktan sonra:

```bash
git add .
git commit -m "Güncelleme açıklaması"
git push
```

Vercel otomatik olarak yeni versiyonu deploy edecek.

## 📊 Analytics ve Monitoring

Vercel otomatik olarak şunları sağlar:
- ✅ Performance metrics
- ✅ Error tracking
- ✅ Visitor analytics
- ✅ SSL sertifikası (HTTPS)

## 🔐 Özel Domain Ekleme

1. Vercel Dashboard > Your Project > **Settings** > **Domains**
2. "Add Domain" butonuna tıklayın
3. Domain'inizi girin (örn: pamodra.com)
4. DNS ayarlarını domain sağlayıcınızda yapın
5. Vercel otomatik SSL sertifikası ekleyecek

## 🎉 Tebrikler!

Siteniz şimdi canlı! 🚀

**Sitenizin URL'i:** https://pamodra-agency.vercel.app (veya özel domain'iniz)

---

## 📞 Destek

Sorun yaşarsanız:
1. Vercel Documentation: https://vercel.com/docs
2. Next.js Documentation: https://nextjs.org/docs
3. Vercel Support: support@vercel.com

---

© 2025 Pamodra Agency

