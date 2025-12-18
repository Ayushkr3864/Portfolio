var express = require('express');
var router = express.Router();

require("dotenv").config();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sgMail.send({
      to: process.env.EMAIL_USER, // verified sender
      from: process.env.EMAIL_USER, // verified sender
      replyTo: email, // user email
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
