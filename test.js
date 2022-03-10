//jshint esversion:6
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/testDB");

class card {
  constructor(name, role, date, description, img) {
    this.name = name;
    this.role = role;
    this.date = date;
    this.description = description;
    this.img = img;
  }
}

class langCard {
  constructor(id, name, level, img) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.img = img;
  }
}

const workCardModel = mongoose.model(
  "WorkCard",
  new mongoose.Schema(),
  "workcards"
);

const eduCardModel = mongoose.model("EduCard", new Schema(), "educards");

const techCardModel = mongoose.model("TechCard", new Schema(), "techcards");

const langCardModel = mongoose.model("LangCard", new Schema(), "langcards");

var workCards = [];
var eduCards = [];
var techCards = [];
var langCards = [];
workCardModel.find(function (e, workCardModels) {
  if (e) {
    console.log(e);
  } else {
    workCardModels.forEach((model) => {
      workCards.push(model._doc);
    });
  }
});
eduCardModel.find(function (e, eduCardModels) {
  if (e) {
    console.log(e);
  } else {
    eduCardModels.forEach((model) => {
      eduCards.push(model._doc);
    });
  }
});
techCardModel.find(function (e, techCardModels) {
  if (e) {
    console.log(e);
  } else {
    techCardModels.forEach((model) => {
      techCards.push(model._doc);
    });
  }
});
langCardModel.find(function (e, langCardModels) {
  if (e) {
    console.log(e);
  } else {
    langCardModels.forEach((model) => {
      langCards.push(model._doc);
    });
  }
});
// mongoose.connection.close();
