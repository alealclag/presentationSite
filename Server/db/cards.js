//jshint esversion:6
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/presentationDB");

const profileInfoModel = mongoose.model(
  "profileInfo",
  new mongoose.Schema(),
  "profileinfos"
);

const workCardModel = mongoose.model(
  "WorkCard",
  new mongoose.Schema(),
  "workcards"
);

const eduCardModel = mongoose.model(
  "EduCard",
  new mongoose.Schema(),
  "educards"
);

const techCardModel = mongoose.model(
  "TechCard",
  new mongoose.Schema(),
  "techcards"
);

const langCardModel = mongoose.model(
  "LangCard",
  new mongoose.Schema(),
  "langcards"
);

export var profileInfo = [];
export var workCards = [];
export var eduCards = [];
export var techCards = [];
export var langCards = [];

profileInfoModel.find(function (e, profileInfoModels) {
  if (e) {
    console.log(e);
  } else {
    profileInfo.push(profileInfoModels[0]._doc);
  }
});

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
