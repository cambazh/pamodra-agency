# 📧 Email Kurulum Rehberi

Teklif formundan gelen mailleri alabilmek için Gmail SMTP kurulumu yapmanız gerekiyor.

## 🎯 Hızlı Başlangıç

### Adım 1: Gmail App Password Oluşturma

1. **Google Hesabınıza gidin**
   - https://myaccount.google.com/ adresine gidin
   - Sağ üstteki profil resminizden hesabınızı seçin

2. **2-Step Verification'ı Aktifleştirin**
   - Sol menüden **"Security"** sekmesine tıklayın
   - **"2-Step Verification"** bölümünü bulun
   - Eğer aktif değilse, **"Get Started"** butonuna tıklayın
   - Telefon numaranızı girin ve doğrulama kodunu girin
   - 2FA'yı aktifleştirin

3. **App Password Oluşturun**
   - Security sayfasına geri dönün
   - **"App passwords"** bölümünü bulun (2FA aktif olduktan sonra görünür)
   - Tıklayın ve Google şifrenizi girin
   - "Select app" > **"Mail"** seçin
   - "Select device" > **"Other"** seçin
   - İsim girin: **"Pamodra Website"**
   - **"Generate"** butonuna tıklayın
   - 📝 **16 haneli şifreyi kopyalayın** (örnek: abcd efgh ijkl mnop)

### Adım 2: .env.local Dosyasını Düzenleyin

Proje klasöründeki `.env.local` dosyasını açın ve düzenleyin:

```env
SMTP_USER=sizin-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
COMPANY_EMAIL=info@pamodra.com
```

**Önemli Notlar:**
- `SMTP_USER`: Gmail adresinizi tam olarak yazın
- `SMTP_PASSWORD`: App password'ü **boşluksuz** yazın (Google boşluklarla gösterir ama siz boşluksuz yazın)
- `COMPANY_EMAIL`: Teklif formlarının gönderileceği email adresi (Gmail veya başka olabilir)

### Adım 3: Sunucuyu Yeniden Başlatın

```bash
# Development sunucusunu durdurun (Ctrl+C)
# Sonra yeniden başlatın
npm run dev
```

### Adım 4: Test Edin

1. Tarayıcıda http://localhost:3000/iletisim adresine gidin
2. Formu doldurun
3. **"Teklif Talebi Gönder"** butonuna tıklayın
4. ✅ "Mesajınız başarıyla gönderildi!" mesajını görmelisiniz
5. Her iki email adresini kontrol edin:
   - Şirket emaili (COMPANY_EMAIL): Müşteri bilgileri ve talep detayları
   - Müşteri emaili: Otomatik onay maili

## 🔍 Alternatif Email Servisleri

### Mailtrap (Test İçin)

Development aşamasında gerçek email göndermek istemiyorsanız, Mailtrap kullanabilirsiniz:

1. https://mailtrap.io adresine gidin
2. Ücretsiz hesap oluşturun
3. "Email Testing" > "Inboxes" > "My Inbox"
4. SMTP Settings'den bilgileri alın:

```env
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your-mailtrap-username
SMTP_PASSWORD=your-mailtrap-password
COMPANY_EMAIL=test@example.com
```

**Not:** Mailtrap kullanmak için `app/api/send-email/route.ts` dosyasını güncellemeniz gerekir:

```typescript
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '2525'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});
```

### SendGrid

Daha profesyonel bir çözüm için SendGrid kullanabilirsiniz:

1. https://sendgrid.com adresine gidin
2. Ücretsiz hesap oluşturun (aylık 100 email ücretsiz)
3. API Key oluşturun
4. SendGrid için kod değişiklikleri yapın

## ⚠️ Yaygın Sorunlar

### "Invalid login" Hatası

**Sebep:** App Password yanlış veya boşluklu girilmiş

**Çözüm:**
- App Password'ü boşluksuz kopyalayın
- Tırnak işaretleri olmadan yapıştırın
- .env.local dosyasını kaydedin
- Sunucuyu yeniden başlatın

### "Less secure app access" Hatası

**Sebep:** App Password kullanmıyorsunuz

**Çözüm:**
- Normal Gmail şifresi kullanmayın
- Mutlaka App Password oluşturun
- 2-Step Verification'ı aktifleştirin

### Email Gelmiyor

**Sebep:** Spam klasörüne düşmüş olabilir

**Çözüm:**
- Gmail'in spam klasörünü kontrol edin
- Vercel'de deploy ettiyseniz, environment variables'ı kontrol edin
- Browser console'da hata mesajlarını kontrol edin

## 📊 Email Şablonları

Email şablonları `app/api/send-email/route.ts` dosyasında bulunur. 

Özelleştirmek için:
1. Dosyayı açın
2. `mailOptionsToCompany` veya `mailOptionsToCustomer` bölümlerini bulun
3. HTML içeriğini düzenleyin
4. Kaydedin ve test edin

## 🎨 Email Tasarımını Özelleştirme

Email içindeki renkleri, logoları değiştirmek için:

```html
<!-- Şirket logosu eklemek -->
<img src="https://your-domain.com/logo.png" alt="Pamodra Agency" style="max-width: 200px;" />

<!-- Renkleri değiştirmek -->
<div style="background: #yourcolor;">
```

## 📝 Email İçeriğini Değiştirme

Müşteriye giden otomatik onay mailini özelleştirmek için:

1. `app/api/send-email/route.ts` dosyasını açın
2. `mailOptionsToCustomer` bölümünü bulun
3. Subject ve HTML içeriğini düzenleyin
4. Kaydedin

## 🔐 Güvenlik

**ÖNEMLİ:** 
- ❌ `.env.local` dosyasını GitHub'a yüklemeyin (zaten .gitignore'da)
- ✅ Production'da Vercel'in Environment Variables bölümünü kullanın
- ✅ App Password'ü kimseyle paylaşmayın
- ✅ Şüpheli aktivite görürseniz App Password'ü silin ve yenisini oluşturun

## 🚀 Production'da Email

Vercel'e deploy ederken:

1. Vercel Dashboard > Project > Settings > Environment Variables
2. Şu değişkenleri ekleyin:
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `COMPANY_EMAIL`
3. Save edin
4. Redeploy yapın
5. Production sitesinde test edin

## 📞 Destek

Email kurulumunda sorun yaşıyorsanız:

1. Google App Passwords Help: https://support.google.com/accounts/answer/185833
2. Nodemailer Documentation: https://nodemailer.com/
3. Gmail SMTP Settings: https://support.google.com/mail/answer/7126229

---

## ✅ Checklist

Email kurulumunun doğru çalıştığından emin olmak için:

- [ ] 2-Step Verification aktif
- [ ] App Password oluşturuldu
- [ ] .env.local dosyası düzenlendi
- [ ] Değerler boşluksuz ve tırnaksız
- [ ] Sunucu yeniden başlatıldı
- [ ] Form test edildi
- [ ] Her iki email de alındı
- [ ] Email içerikleri doğru
- [ ] Spam klasörü kontrol edildi

---

© 2025 Pamodra Agency

