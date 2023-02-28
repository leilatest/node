const nodemailer = require("nodemailer");
require("dotenv").config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

const mailOptions = {
  from: '"GMC Contact" <leilalili@outlook.be>"',
  to: "leilabenchaalia369@gmail.com",
  subject: "Test Node Js",
  text: "Hello",
  html: <h1> Checkpoint node js </h1>,
};
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
