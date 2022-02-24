//jshint esversion:6
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

var data = {
  profileName: "Alejandro Alcántara Laguna",
  profileTitle: "Developer & Computer Engineer",
  profileDescription: "Still a rookie, so I'm looking for my best path",
  workCards: [cards.cober, cards.nttdata],
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
};

app.get("/", (req, res) => {
  // res.sendFile(__dirname + "/index.html");
  res.render("index", data);
});

app.post("/", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  res.redirect("/");

  console.log(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
