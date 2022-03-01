//jshint esversion:6
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

export const minsait = new card(
  "Minsait",
  "SAP PP Analyst",
  "oct. 2021 - Present",
  "In Minsait I started and grew as a SAP Analyst, specifically in the Production Planning Module. ",
  "images/cardPics/minsaitlogo.png"
);

export const cober = new card(
  "Cober",
  ".NET Developer",
  "aug. 2021 - oct. 2021",
  "The work done consisted in upgrading the client's application using .NET (with MVVM and asynchrony), as well as solving bugs and analyzing the client's necessities",
  "images/cardPics/coberlogo.png"
);
export const nttdata = new card(
  "NTTDATA",
  "Intern .NET Developer",
  "oct. 2020 - apr. 2021",
  "The tasks developed during my internship on the company were fixing bugs, migrating functionalities and performing functional tests. The main technology used was .NET",
  "images/cardPics/nttdatalogo.png"
);

export const webdev = new card(
  "Udemy",
  "Full-Stack Web Development Course",
  "dec. 2021 - mar. 2022",
  "55h full-stack web development course, including technologies like Node, React, Bootstrap, MongoDB & Express.js",
  "images/cardPics/webdevlogo.png"
);

export const us = new card(
  "University of Seville",
  "Computer Science Degree",
  "2017 - 2021",
  "Worked on various fields, including web development, analysis and design of algorithms, embedded systems, AI and more",
  "images/cardPics/uslogo.png"
);

export const node = new card(
  "Node.js",
  "",
  "",
  "",
  "images/cardPics/techLogos/node.jpg"
);

export const react = new card(
  "React",
  "",
  "",
  "",
  "images/cardPics/techLogos/react.jpg"
);
export const bootstrap = new card(
  "Bootstrap",
  "",
  "",
  "",
  "images/cardPics/techLogos/bootstrap.jpg"
);
export const jQuery = new card(
  "jQuery",
  "",
  "",
  "",
  "images/cardPics/techLogos/jQuery.jpg"
);
export const mongoDB = new card(
  "MongoDB",
  "",
  "",
  "",
  "images/cardPics/techLogos/mongoDB.jpg"
);
export const git = new card(
  "Git",
  "",
  "",
  "",
  "images/cardPics/techLogos/git.jpg"
);
export const docker = new card(
  "Docker",
  "",
  "",
  "",
  "images/cardPics/techLogos/docker.jpg"
);
export const dotNet = new card(
  ".Net (C#)",
  "",
  "",
  "",
  "images/cardPics/techLogos/net.jpg"
);
export const python = new card(
  "Python",
  "",
  "",
  "",
  "images/cardPics/techLogos/python.jpg"
);
export const java = new card(
  "Java",
  "",
  "",
  "",
  "images/cardPics/techLogos/java.jpg"
);
export const cplusplus = new card(
  "C / C++",
  "",
  "",
  "",
  "images/cardPics/techLogos/c++.jpg"
);
export const embSys = new card(
  "Embedded Systems",
  "",
  "",
  "",
  "images/cardPics/techLogos/embedded.jpg"
);

export const spa = new langCard(
  "spanish",
  "Spanish",
  "Native",
  "images/cardPics/spain.png"
);

export const eng = new langCard(
  "english",
  "English",
  "Advanced",
  "images/cardPics/uk.jpg"
);
export const jap = new langCard(
  "japanese",
  "Japanese",
  "Intermediate",
  "images/cardPics/japan.jpg"
);
