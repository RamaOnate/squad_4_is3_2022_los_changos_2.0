//require('dotenv').config({path: __dirname + '../../.env'})
const nodemailer = require('nodemailer');


function send_mail(receiver_email){

  var  transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
  });


  var mailOptions = {
    from: '"PSA - CARGA DE HORAS <notificaciones@psa.com.ar>',
    to: receiver_email,
    subject: '[RECORDATORIO] ¡Recuerda subir tus horas!', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });

}

module.exports = send_mail