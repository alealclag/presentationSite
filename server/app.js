#!/usr/bin/env node
//jshint esversion:8

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import * as secrets from "./secrets.js";
import * as cards from "./db/cards_noDB.js";
// import mongoose from "mongoose";
// import * as cards from "./db/cards.js";

// This variable specifies if we are using the MongoDB implementation or not
const useDB = false;

/* jshint ignore:start */
const __filename = fileURLToPath(import.meta.url);
/* jshint ignore:end */
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.set("view engine", "jsx");

if (useDB) {
  mongoose.connect(secrets.dbAddress);
  const contactModel = mongoose.model("contact", {
    name: String,
    email: String,
    message: String,
  });
}

function formatCardDates(UnformattedCards) {
  return UnformattedCards.map((card) => {
    return {
      ...card,
      dateFrom: card.dateFrom?.toLocaleDateString("es-ES", {
        month: "short",
        year: "numeric",
      }),
      dateTo: card.dateTo
        ? card.dateTo.toLocaleDateString("es-ES", {
            month: "short",
            year: "numeric",
          })
        : "Present",
    };
  });
}

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.eu",
  port: 465,
  secure: true,
  auth: {
    user: secrets.user,
    pass: secrets.pass,
  },
});

app.get("/data", (req, res) => {
  res.json({
    profileInfo: cards.profileInfo,
    workCards: formatCardDates(cards.workCards),
    eduCards: formatCardDates(cards.eduCards),
    techCards: cards.techCards,
    langCards: cards.langCards,
  });
});

app.post("/contact", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  if (useDB) {
    let contact = new contactModel({
      name: name,
      email: email,
      message: message,
    });
    contact.save(function (e) {
      if (e) {
        console.log(e);
      } else {
        console.log("Contact " + name + " added to the DB");
      }
    });
  }

  var mailOptions = {
    from: secrets.user,
    to: secrets.myMail,

    subject: name + " is interested in hiring you",
    text: "Name: " + name + "\nEmail: " + email + "\nMessage: " + message,
  };

  transporter.sendMail(mailOptions, function (e, info) {
    if (e) {
      console.log(e);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
