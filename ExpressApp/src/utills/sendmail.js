const transporter = require("../config/mail")

module.exports =async ({from,to,subject,text,html})=>{
    await transporter.sendMail({
        from: from, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
      });

}
