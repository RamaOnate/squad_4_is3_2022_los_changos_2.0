//require('dotenv').config({path: __dirname + '../../.env'})
const nodemailer = require('nodemailer');


function notify_employee(employee){
  var status;
  var  transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
  });

  employee_email = employee.Nombre+employee.Apellido+employee.legajo+"@psa.com.ar"

  var mailOptions = {
    from: '"PSA - CARGA DE HORAS <notificaciones@psa.com.ar>',
    to: employee_email,
    subject: '[RECORDATORIO] ¡'+employee.Nombre+', Recuerda subir tus horas!', // Subject line
    html: '<img src="'+process.env.LOGO_URL+'" alt="logo" border="0"><br> Recuerda cargar tus horas por favor.' // html body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      this.status = false;
    }
    else{
      this.status = true;
    }

    console.log("ERROR:", error, "INFO", info);

  });
  return status

}

module.exports = notify_employee
