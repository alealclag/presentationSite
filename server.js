//jshint esversion:6
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import https from "https";

/* jshint ignore:start */
const __filename = fileURLToPath(import.meta.url);
/* jshint ignore:end */
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  //console.log(req);
  res.sendFile(__dirname + "/index.html");
});

app.get("/css/styles.css", (req, res) => {
  res.sendFile(__dirname + "/css/styles.css");
});

app.post("/", function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;

  res.send("POST request to the homepage");
  console.log(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
