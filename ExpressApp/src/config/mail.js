const nodemailer = require("nodemailer")
module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "a800da6c9b9f91", // generated ethereal user
      pass: "d7ab7ab088405d", // generated ethereal password
    },
  });