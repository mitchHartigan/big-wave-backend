"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const AWS = require("aws-sdk");
const config = require("./_config");
const { response } = require("express");
AWS.config.update(config);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "bigwave.server@gmail.com",
//     pass: "$bigwaveserver",
//   },
// });

// const mailOptions = {
//   from: "bigwave.server@gmail.com",
//   to: "mitch.hartigan@gmail.com",
//   subject: "Sending an email using the big wave server!",
//   text: "Wow, that was easy!",
// };

// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("email sent!" + info.response);
//   }
// });

app.get("/", (req, res) => {
  res.send("ayy lmao");
  res.end();
});

app.post("/study", (req, res) => {
  const { name, email, phone, message } = req.body;
  if (name && email && phone) {
    res.send("here is your study good sir");
    res.end();
  }
});

app.post("/contact", (req, res) => {
  const { name, email, phone, message } = req.body;

  if (name && email && message) {
    console.log("endpoint hit!");
  }
});

// app.listen(8080, () => {
//   console.log("server running successfully");
// });

module.exports = app;
