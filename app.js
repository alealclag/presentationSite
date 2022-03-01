//jshint esversion:8
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import https from "https";
import * as cards from "./cards.js";

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
  profileName: "Alejandro Alcántara Laguna",
  profileTitle: "Developer & Computer Engineer",
  profileDescription: "Still a rookie, so I'm looking for my best path",
  workCards: [cards.minsait, cards.cober, cards.nttdata],
  eduCards: [cards.webdev, cards.us],
  techCards: [
    cards.node,
    cards.react,
    cards.bootstrap,
    cards.jQuery,
    cards.mongoDB,
    cards.git,
    cards.docker,
    cards.dotNet,
    cards.python,
    cards.java,
    cards.cplusplus,
    cards.embSys,
  ],
  langCards: [cards.spa, cards.eng, cards.jap],
};

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
