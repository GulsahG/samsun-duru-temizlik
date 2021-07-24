// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SG_API_KEY);
export default (req, res) => {
  const body = JSON.parse(req.body);
  
  const message = `
    İsim: ${body.name}\r\n
    Email: ${body.email}\r\n
    Telefon Numarası: ${body.phone}\r\n
    İleti: ${body.message}
  `;

  const data = {
    to: 'ahmetgenc55@hotmail.com',
    from: 'gulsahgenc.gg@gmail.com',
    subject: 'Duru Temizlik Yeni Randevu',
    text: message,
    html: message.replace(/\r\n/g, '<br/>')
  };

  mail
    .send(data)
    .then((send) => {
      console.log("SIGNUP EMAIL SEND", send);
    })
    .catch((err) => {
      console.log("EMAIL SENDING ERROR", err);
      console.error(err.response.body);
    });
  
  res.status(200).json({ status: 'Ok' })
}
