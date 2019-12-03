require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

import cors from "cors";
import express from "express";

const app = express();
// create a route for the app

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/sendmail", (req, res) => {
  try {
    const msg = {
      to: "d2943767@urhen.com",
      from: "test@example.com",
      subject: "Sending with Twilio SendGrid is Fun & Super easy",
      html:
        "<h1>Sample demo to demonstrate the sending emails from node-server</h1>"
    };
    sgMail.send(msg);

    console.log("email Sent");
    res.json({ status: 200, message: "succesfully sent " });
  } catch (e) {
    console.error("Error in sending a mail");
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
