//jshint esversion:6
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/presentationDB");

const profileInfo = mongoose.model("profileInfo", {
  name: String,
  role: String,
  bio: String,
  profilePic: String,
});

const workCard = mongoose.model("WorkCard", {
  role: String,
  name: String,
  dateFrom: Date,
  dateTo: Date,
  desc: String,
  img: String,
});

const eduCard = mongoose.model("EduCard", {
  study: String,
  name: String,
  dateFrom: Date,
  dateTo: Date,
  desc: String,
  img: String,
});

const techCard = mongoose.model("TechCard", {
  name: String,
  level: String,
  img: String,
});

const langCard = mongoose.model("LangCard", {
  name: String,
  level: String,
  img: String,
});

const myProfile = new profileInfo({
  name: "Alejandro Alcántara Laguna",
  role: "Developer & Computer Engineer",
  bio: "Still a rookie, so I'm looking for my best path",
  profilePic: "images/prestentationPic.jpg",
});

myProfile.save(function (e) {
  if (e) {
    console.log(e);
  } else {
    console.log("profileInfo inserted");
  }
});

workCard.insertMany(
  [
    {
      role: "SAP PP Analyst",
      name: "Minsait",
      dateFrom: new Date(Date.UTC(2022, 9)),
      dateTo: null,
      desc: "In Minsait I started and grew as a SAP Analyst, specifically in the Production Planning Module",
      img: "images/cardPics/minsaitlogo.png",
    },
    {
      role: ".NET Developer",
      name: "Cober",
      dateFrom: new Date(Date.UTC(2021, 7)),
      dateTo: new Date(Date.UTC(2021, 9)),
      desc: "The work done consisted in upgrading the client's application using .NET (with MVVM and asynchrony), as well as solving bugs and analyzing the client's necessities",
      img: "images/cardPics/coberlogo.png",
    },
    {
      role: "Intern .NET Developer",
      name: "NTT Data",
      dateFrom: new Date(Date.UTC(2020, 9)),
      dateTo: new Date(Date.UTC(2021, 2)),
      desc: "The tasks developed during my internship on the company were fixing bugs, migrating functionalities and performing functional tests. The main technology used was .NET",
      img: "images/cardPics/nttdatalogo.png",
    },
  ],
  function (e) {
    if (e) {
      console.log(e);
    } else {
      console.log("workCards inserted");
    }
  }
);

eduCard.insertMany(
  [
    {
      study: "Full-Stack Web Development Course",
      name: "Udemy",
      dateFrom: new Date(Date.UTC(2021, 11)),
      dateTo: new Date(Date.UTC(2022, 2)),
      desc: "55h full-stack web development course, including technologies like Node, React, Bootstrap, MongoDB & Express.js",
      img: "images/cardPics/webdevlogo.png",
    },
    {
      study: "Computer Science Degree",
      name: "University of Seville",
      dateFrom: new Date(Date.UTC(2017)),
      dateTo: new Date(Date.UTC(2021)),
      desc: "Worked on various fields, including web development, analysis and design of algorithms, embedded systems, AI and more",
      img: "images/cardPics/uslogo.png",
    },
  ],
  function (e) {
    if (e) {
      console.log(e);
    } else {
      console.log("eduCards inserted");
    }
  }
);

techCard.insertMany(
  [
    {
      name: "Node.js",
      img: "images/cardPics/techLogos/node.jpg",
    },
    {
      name: "React",
      img: "images/cardPics/techLogos/react.jpg",
    },
    {
      name: "Bootstrap",
      img: "images/cardPics/techLogos/bootstrap.jpg",
    },
    {
      name: "jQuery",
      img: "images/cardPics/techLogos/jQuery.jpg",
    },
    {
      name: "MongoDB",
      img: "images/cardPics/techLogos/mongoDB.jpg",
    },
    {
      name: "Git",
      img: "images/cardPics/techLogos/git.jpg",
    },
    {
      name: "Docker",
      img: "images/cardPics/techLogos/docker.jpg",
    },
    {
      name: ".Net (C#)",
      img: "images/cardPics/techLogos/net.jpg",
    },
    {
      name: "Python",
      img: "images/cardPics/techLogos/python.jpg",
    },
    {
      name: "Java",
      img: "images/cardPics/techLogos/java.jpg",
    },
    {
      name: "C / C++",
      img: "images/cardPics/techLogos/c++.jpg",
    },
    {
      name: "Embedded Systems",
      img: "images/cardPics/techLogos/embedded.jpg",
    },
  ],
  function (e) {
    if (e) {
      console.log(e);
    } else {
      console.log("techCards inserted");
    }
  }
);
langCard.insertMany(
  [
    {
      name: "Spanish",
      level: "Native",
      img: "images/cardPics/spain.png",
    },
    {
      name: "English",
      level: "Advanced",
      img: "images/cardPics/uk.jpg",
    },
    {
      name: "Japanese",
      level: "Intermediate",
      img: "images/cardPics/japan.jpg",
    },
  ],
  function (e) {
    if (e) {
      console.log(e);
    } else {
      console.log("langCards inserted");
    }
  }
);

// testDoc.save();
