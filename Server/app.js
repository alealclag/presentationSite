//jshint esversion:8
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import https from "https";
import * as cards from "./db/cards.js";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import cors from "cors";

/* jshint ignore:start */
const __filename = fileURLToPath(import.meta.url);
/* jshint ignore:end */
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/presentationDB");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.set("view engine", "jsx");

const contactModel = mongoose.model("contact", {
  name: String,
  email: String,
  message: String,
});

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "email@gmail.com",
    pass: "********",
  },
});

const maxTextSize = 160;

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

app.get("/data", (req, res) => {
  res.json({
    profileInfo: cards.profileInfo,
    workCards: formatCardDates(cards.workCards),
    eduCards: formatCardDates(cards.eduCards),
    techCards: cards.techCards,
    langCards: cards.langCards,
  });
});

app.post("/", async function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

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

  var mailOptions = {
    from: "email@gmail.com",
    to: "email@gmail.com",
    subject: name + " está interesado en contactarte",
    text:
      "Nombre: " + name + "%0D%0AEmail: " + email + "%0D%0AMensaje: " + message,
  };

  transporter.sendMail(mailOptions, function (e, info) {
    if (e) {
      console.log(e);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  await new Promise((r) => setTimeout(r, 700));

  res.redirect("/");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
