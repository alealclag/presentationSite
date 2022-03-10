//jshint esversion:8
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import https from "https";
import * as cards from "./cards.js";
import mongoose from "mongoose";

/* jshint ignore:start */
const __filename = fileURLToPath(import.meta.url);
/* jshint ignore:end */
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let data = {
  profile: cards.profileInfo,
  workCards: cards.workCards,
  eduCards: cards.eduCards,
  techCards: cards.techCards,
  langCards: cards.langCards,
};

const maxTextSize = 160;

app.get("/", (req, res) => {
  res.render("index", data);
});

app.post("/", async function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  console.log(req.body);

  await new Promise((r) => setTimeout(r, 700));

  res.redirect("/");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
