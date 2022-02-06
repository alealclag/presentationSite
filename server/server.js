//jshint esversion:6
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("This is the response");
});
app.listen(port, () => console.log(`Listening on port ${port}!`));
