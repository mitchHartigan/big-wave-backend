const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const e = require("express");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bigwave.server@gmail.com",
    pass: "$bigwaveserver",
  },
});

const mailOptions = {
  from: "bigwave.server@gmail.com",
  to: "mitch.hartigan@gmail.com",
  subject: "Sending an email using the big wave server!",
  text: "Wow, that was easy!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("email sent!" + info.response);
  }
});

app.get("/", (req, res) => {
  res.json({ ayy: "lmao" });
  res.end();
});

app.listen(8080, () => {
  console.log("server running successfully");
});
