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

// export const minsait = new card(
//   "Minsait",
//   "SAP PP Analyst",
//   "oct. 2021 - Present",
//   "In Minsait I started and grew as a SAP Analyst, specifically in the Production Planning Module. ",
//   "images/cardPics/minsaitlogo.png"
// );

// export const cober = new card(
//   "Cober",
//   ".NET Developer",
//   "aug. 2021 - oct. 2021",
//   "The work done consisted in upgrading the client's application using .NET (with MVVM and asynchrony), as well as solving bugs and analyzing the client's necessities",
//   "images/cardPics/coberlogo.png"
// );
// export const nttdata = new card(
//   "NTTDATA",
//   "Intern .NET Developer",
//   "oct. 2020 - apr. 2021",
//   "The tasks developed during my internship on the company were fixing bugs, migrating functionalities and performing functional tests. The main technology used was .NET",
//   "images/cardPics/nttdatalogo.png"
// );

// export const webdev = new card(
//   "Udemy",
//   "Full-Stack Web Development Course",
//   "dec. 2021 - mar. 2022",
//   "55h full-stack web development course, including technologies like Node, React, Bootstrap, MongoDB & Express.js",
//   "images/cardPics/webdevlogo.png"
// );

// export const us = new card(
//   "University of Seville",
//   "Computer Science Degree",
//   "2017 - 2021",
//   "Worked on various fields, including web development, analysis and design of algorithms, embedded systems, AI and more",
//   "images/cardPics/uslogo.png"
// );

// export const node = new card(
//   "Node.js",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/node.jpg"
// );

// export const react = new card(
//   "React",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/react.jpg"
// );
// export const bootstrap = new card(
//   "Bootstrap",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/bootstrap.jpg"
// );
// export const jQuery = new card(
//   "jQuery",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/jQuery.jpg"
// );
// export const mongoDB = new card(
//   "MongoDB",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/mongoDB.jpg"
// );
// export const git = new card(
//   "Git",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/git.jpg"
// );
// export const docker = new card(
//   "Docker",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/docker.jpg"
// );
// export const dotNet = new card(
//   ".Net (C#)",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/net.jpg"
// );
// export const python = new card(
//   "Python",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/python.jpg"
// );
// export const java = new card(
//   "Java",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/java.jpg"
// );
// export const cplusplus = new card(
//   "C / C++",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/c++.jpg"
// );
// export const embSys = new card(
//   "Embedded Systems",
//   "",
//   "",
//   "",
//   "images/cardPics/techLogos/embedded.jpg"
// );

// export const spa = new langCard(
//   "spanish",
//   "Spanish",
//   "Native",
//   "images/cardPics/spain.png"
// );

// export const eng = new langCard(
//   "english",
//   "English",
//   "Advanced",
//   "images/cardPics/uk.jpg"
// );
// export const jap = new langCard(
//   "japanese",
//   "Japanese",
//   "Intermediate",
//   "images/cardPics/japan.jpg"
// );
