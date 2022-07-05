//jshint esversion:6
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/presentationDB");

const profileInfo = mongoose.model("profileInfo", {
  pic: String,
  name: String,
  role: String,
  bio: String,
});

const workCard = mongoose.model("WorkCard", {
  pic: String,
  dateFrom: Date,
  dateTo: Date,
  name: String,
  role: String,
  desc: String,
});

const eduCard = mongoose.model("EduCard", {
  pic: String,
  dateFrom: Date,
  dateTo: Date,
  name: String,
  role: String,
  desc: String,
});

const techCard = mongoose.model("TechCard", {
  name: String,
  pic: String,
});

const langCard = mongoose.model("LangCard", {
  name: String,
  pic: String,
  level: Number,
});

const myProfile = new profileInfo({
  pic: "./images/prestentationPic.jpg",
  name: "Alejandro Alcántara Laguna",
  role: "Web developer & Computer Engineer",
  bio: "Still a rookie, so I'm looking for my best path",
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
      pic: "./images/cardPics/minsaitlogo.png",
      name: "Minsait",
      role: "SAP PP Analyst",
      dates: "oct. 2021 - Current",
      description:
        "Here at Minsait I started working with SAP and diverging from coding. Despite not getting coding experience from this, I did grow in the teamworking field",
      dateFrom: new Date(Date.UTC(2022, 9)),
      dateTo: null,
    },
    {
      pic: "./images/cardPics/coberlogo.png",
      name: "Cober",
      role: ".NET Developer",
      dates: "aug. 2021 - oct. 2021",
      description:
        "The work done consisted in upgrading the client's application using .NET (with MVVM and asynchrony), as well as solving bugs and analyzing the client's necessities",
      dateFrom: new Date(Date.UTC(2021, 7)),
      dateTo: new Date(Date.UTC(2021, 9)),
    },
    {
      pic: "./images/cardPics/nttdatalogo.png",
      name: "NTT Data",
      role: "Intern .NET Developer",
      dates: "oct. 2020 - mar. 2021",
      description:
        "The tasks developed during my internship on the company were fixing bugs, migrating functionalities and performing functional tests. The main technology used was .NET",
      dateFrom: new Date(Date.UTC(2020, 9)),
      dateTo: new Date(Date.UTC(2021, 2)),
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
      pic: "./images/cardPics/webdevlogo.png",
      name: "Udemy",
      role: "Full-Stack Web Development Course",
      dates: "dec. 2021 - jun. 2022",
      description:
        "55h full-stack web development course, including technologies like React, Node, Bootstrap, MongoDB & Express.js",
      dateFrom: new Date(Date.UTC(2021, 11)),
      dateTo: new Date(Date.UTC(2022, 2)),
    },
    {
      pic: "./images/cardPics/uslogo.png",
      name: "University of Seville",
      role: "Computer Science Degree",
      dates: "2017 - 2021",
      description:
        "Worked on various fields, including web development, analysis and design of algorithms, embedded systems, AI and more",
      dateFrom: new Date(Date.UTC(2017)),
      dateTo: new Date(Date.UTC(2021)),
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
      name: "React",
      pic: "./images/cardPics/techLogos/react.jpg",
    },
    {
      name: "Node.js",
      pic: "./images/cardPics/techLogos/node.jpg",
    },
    {
      name: "Bootstrap",
      pic: "./images/cardPics/techLogos/bootstrap.jpg",
    },
    {
      name: "jQuery",
      pic: "./images/cardPics/techLogos/jQuery.jpg",
    },
    {
      name: "MongoDB",
      pic: "./images/cardPics/techLogos/MongoDB.jpg",
    },
    {
      name: "Git",
      pic: "./images/cardPics/techLogos/git.jpg",
    },
    {
      name: "Docker",
      pic: "./images/cardPics/techLogos/docker.jpg",
    },
    {
      name: ".Net (C#)",
      pic: "./images/cardPics/techLogos/net.jpg",
    },
    {
      name: "Python",
      pic: "./images/cardPics/techLogos/python.jpg",
    },
    {
      name: "Java",
      pic: "./images/cardPics/techLogos/java.jpg",
    },
    {
      name: "C / C++",
      pic: "./images/cardPics/techLogos/c++.jpg",
    },
    {
      name: "Embedded Systems",
      pic: "./images/cardPics/techLogos/embedded.jpg",
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
      pic: "./images/cardPics/spain.png",
      level: 1,
    },
    {
      name: "English",
      pic: "./images/cardPics/uk.jpg",
      level: 2,
    },
    {
      name: "Japanese",
      pic: "./images/cardPics/japan.jpg",
      level: 3,
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
