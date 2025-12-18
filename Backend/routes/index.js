var express = require('express');
var router = express.Router();

require("dotenv").config();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
const nodemailer = require("nodemailer")
console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body);
  

  try {
    const Transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      port: 587,
      secure: false,
      auth: {
        user: "apikey", // literal string
        pass: process.env.SENDGRID_API_KEY,
      },
      
    });
     await Transporter.sendMail({
       from: `"Portfolio Contact" ${process.env.EMAIL_USER}`, // verified sender
       replyTo: email,
       to: process.env.EMAIL_USER,
       subject: `New Message from ${name}`,
       text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
     });

     res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
module.exports = router;
