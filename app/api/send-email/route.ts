import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, subject, budget, message } = body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail SMTP
    // NOT: Kullanıcının kendi Gmail bilgilerini environment variables'a eklemesi gerekiyor
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER || 'your-email@gmail.com',
        pass: process.env.SMTP_PASSWORD || 'your-app-password',
      },
    });

    // Email content for company
    const mailOptionsToCompany = {
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: process.env.COMPANY_EMAIL || 'info@pamodra.com',
      subject: `Yeni Teklif Talebi: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #000; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #000; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎁 Yeni Teklif Talebi</h1>
              <p>Pamodra Agency</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Ad Soyad:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">E-posta:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value">${phone}</div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="label">Şirket:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Konu:</div>
                <div class="value">${subject}</div>
              </div>
              
              ${budget ? `
              <div class="field">
                <div class="label">Bütçe:</div>
                <div class="value">${budget}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Mesaj:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Bu mail otomatik olarak oluşturulmuştur.</p>
              <p>© ${new Date().getFullYear()} Pamodra Agency. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Email content for customer (confirmation)
    const mailOptionsToCustomer = {
      from: process.env.SMTP_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Teklif Talebiniz Alındı - Pamodra Agency',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .highlight { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #000; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            .button { display: inline-block; background: #000; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎁 Teşekkür Ederiz!</h1>
              <h2>Pamodra Agency</h2>
            </div>
            <div class="content">
              <p>Sayın <strong>${name}</strong>,</p>
              
              <p>Teklif talebiniz başarıyla alındı. Ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
              
              <div class="highlight">
                <h3 style="margin-top: 0;">📋 Talep Özeti</h3>
                <p><strong>Konu:</strong> ${subject}</p>
                ${budget ? `<p><strong>Bütçe:</strong> ${budget}</p>` : ''}
                ${company ? `<p><strong>Şirket:</strong> ${company}</p>` : ''}
              </div>
              
              <p><strong>Sonraki Adımlar:</strong></p>
              <ul>
                <li>Ekibimiz talebinizi inceleyecek</li>
                <li>24 saat içinde size geri dönüş yapılacak</li>
                <li>Size özel teklif hazırlanacak</li>
              </ul>
              
              <p>Acil bir durumda bize şu kanallardan ulaşabilirsiniz:</p>
              <p>
                📞 Telefon: +90 (XXX) XXX XX XX<br>
                📧 E-posta: info@pamodra.com
              </p>
              
              <p style="margin-top: 30px;">En iyi dileklerimizle,<br><strong>Pamodra Agency Ekibi</strong></p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Pamodra Agency. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send emails
    await transporter.sendMail(mailOptionsToCompany);
    await transporter.sendMail(mailOptionsToCustomer);

    return NextResponse.json(
      { message: 'Email başarıyla gönderildi' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { error: 'Email gönderilirken bir hata oluştu' },
      { status: 500 }
    );
  }
}

