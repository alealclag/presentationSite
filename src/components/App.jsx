import React from "react";
import Card from "./card";
var name = "Ale";

export default function App() {
  return (
    <div>
      <React.StrictMode>
        <header>
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src="./images/hamburger.png"
                className="navbar-toggler-icon"
              />
            </button>

            <div className="collapse navbar-collapse" id="navbarToggle">
              <ul className="navbar-nav m-lg-auto m-md-auto">
                <li className="nav-item">
                  <a href="#workGradient" className="nav-link">
                    <i className="fas fa-briefcase"></i> Work Experience
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#eduGradient" className="nav-link">
                    <i className="fas fa-graduation-cap"></i> Education
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#knowGradient" className="nav-link">
                    <i className="fas fa-brain"></i> Knowledges
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contactGradient" className="nav-link">
                    <i className="fas fa-envelope"></i> Contact me
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <section className="" id="presentationSection">
          <div className="container">
            <img
              className="profilePic shadow-lg"
              src="./images/prestentationPic.jpg"
              alt="My profile picture"
            />
            <div className="profilePicInstruction" id="playTip">
              <span id="playTipText">
                {" "}
                Click on me for a comfy experience!{" "}
              </span>
              <img
                src="./images/arrow.png"
                className="tipArrow"
                id="rightArrow"
              />
            </div>
            <div className="profilePicInstruction" id="pauseTip">
              <img
                src="./images/arrow.png"
                className="tipArrow"
                id="leftArrow"
              />
              And again if you prefer silence
            </div>

            <div id="">
              <h1>Alejandro Alcántara Laguna</h1>
              <h3>Developer --- Computer Engineer</h3>
              <p>Still a rookie, so I-m looking for my best path</p>
            </div>
          </div>
        </section>

        <div className="gradientUp" id="workGradient">
          <h2 className="mx-auto">Work Experience</h2>
        </div>
        <section className="" id="workExpSection">
          <div className="container">
            <img src="./images/bgPics/work.png" className="bgPic" />

            <div className="row justify-content-around sectionRow">
              <Card
                key="Cober"
                pic="./images/cardPics/coberlogo.png"
                name="Cober"
                role=".NET Developer"
                dates="aug. 2021 - oct. 2021"
                description="The work done consisted in upgrading the client's application using .NET (with MVVM and asynchrony), as well as solving bugs and analyzing the client's necessities"
              />

              <Card
                key="NTT Data"
                pic="./images/cardPics/nttdatalogo.png"
                name="NTT Data"
                role="Intern .NET Developer"
                dates="oct. 2020 - mar. 2021"
                description="The tasks developed during my internship on the company were
                    fixing bugs, migrating functionalities and performing
                    functional tests. The main technology used was .NET"
              />
            </div>
          </div>
        </section>
        <div className="gradientDown" id="eduGradient"></div>

        <section className="" id="EduSection">
          <div className="container">
            <h2 className="mx-auto">Education</h2>
            <img
              src="./images/bgPics/education.png"
              className="bgPic eduBgPic"
            />

            <div className="row justify-content-around sectionRow">
              <Card
                key="Udemy"
                pic="./images/cardPics/webdevlogo.png"
                name="Udemy"
                role="Full-Stack Web Development Course"
                dates="dec. 2021 - jun. 2022"
                description="55h full-stack web development course, including
                    technologies like React, Node, Bootstrap, MongoDB & Express.js"
                isEduCard={true}
              />
              <Card
                key="University of Seville"
                pic="./images/cardPics/uslogo.png"
                name="University of Seville"
                role="Computer Science Degree"
                dates="2017 - 2021"
                description="Worked on various fields, including web development,
                    analysis and design of algorithms, embedded systems, AI and
                    more"
                isEduCard={true}
              />
            </div>
          </div>
        </section>

        <div className="gradientUp" id="knowGradient"></div>
        <section className="" id="KnowledgeSection">
          <div className="container">
            <h2 className="mx-auto">Knowledges</h2>
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-11 knowledgeBlock">
                <h3 className="knowSubBlockTitle">Technologies</h3>
                <div className="knowledgeSubBlock shadow-lg" id="techKnow">
                  <div className="container">
                    <img
                      src="./images/bgPics/tech.png"
                      className="bgPic knowBgPic"
                    />

                    <div className="row gy-4 justify-content-around">
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/node.jpg"
                            alt="Node.js logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">Node.JS</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/react.jpg"
                            alt="React logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">React</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/bootstrap.jpg"
                            alt="Bootstrap logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">Bootstrap</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/jQuery.jpg"
                            alt="Javascript logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">jQuery</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/MongoDB.jpg"
                            alt="MongoDB logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">MongoDB</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/git.jpg"
                            alt="Git logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">Git</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/docker.jpg"
                            alt="Docker logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">Docker</div>
                        </div>
                      </div>

                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/net.jpg"
                            alt=".Net logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">.Net (C#)</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/python.jpg"
                            alt="Python logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">Python</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/java.jpg"
                            alt="Java logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">Java</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/c++.jpg"
                            alt="C++ logo"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName">C / C++</div>
                        </div>
                      </div>
                      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/techLogos/embedded.jpg"
                            alt="Embedded system pic"
                            className="col px-0 techPic"
                          />
                        </div>
                        <div className="row m-0">
                          <div className="col m-0 techName" id="embSys-card">
                            Embedded Systems
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-11 knowledgeBlock">
                <h3 className="knowSubBlockTitle">
                  Languages (spoken, not for coding)
                </h3>
                <div className="knowledgeSubBlock shadow-lg" id="langKnow">
                  <div className="container">
                    <img
                      src="./images/bgPics/lang.png"
                      className="bgPic knowBgPic"
                    />
                    <h4 className="levelTitle levelTitle">Native</h4>
                    <div className="row">
                      <div
                        className="col-4 mx-1 shadow-lg langBlock"
                        id="spanishBlock"
                      >
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/spain.png"
                            alt="Spanish Flag"
                            className="col px-0 mx-0 flagPic"
                          />
                        </div>
                        <div className="row">
                          <div className="col langName">Spanish</div>
                        </div>
                      </div>
                    </div>

                    <h4 className="levelTitle leftLangBlock">Advanced</h4>
                    <div className="row justify-content-end">
                      <div
                        className="col-4 mx-1 shadow-lg langBlock"
                        id="englishBlock"
                      >
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/uk.jpg"
                            alt="England Flag"
                            className="col px-0 mx-0 flagPic"
                          />
                        </div>
                        <div className="row">
                          <div className="col langName">English</div>
                        </div>
                      </div>
                    </div>

                    <h4 className="levelTitle">Intermediate</h4>
                    <div className="row">
                      <div
                        className="col-4 mx-1 shadow-lg langBlock"
                        id="japaneseBlock"
                      >
                        <div className="row mx-0">
                          <img
                            src="./images/cardPics/japan.jpg"
                            alt="Japanese Flag"
                            className="col px-0 mx-0 flagPic"
                          />
                        </div>
                        <div className="row">
                          <div className="col langName">Japanese</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="gradientDown" id="contactGradient"></div>

        <section className="" id="contactSection">
          <h2 className="mx-auto">Contact Me</h2>

          <div className="container">
            <img src="./images/bgPics/mail.png" className="bgPic mailPic" />

            <div className="row justify-content-center">
              <form
                action="/"
                method="POST"
                id="contactForm"
                className="col-lg-6 shadow-lg"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      id="contactName"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      id="contactMail"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      id="contactMessage"
                      className="fullWidthFormField"
                      cols="30"
                      rows="10"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <button className="btn btn-lg sendMessageBtn fullWidthFormField">
                      <i className="fas fa-check invisibility"></i>
                      <span className="sendFormText">Send</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-6 col-xl-2 col-xxl-2 col-lg-3 col-md-4">
                <a href="https://www.linkedin.com/in/alejandro-alcantara-laguna">
                  <img
                    src="./images/linkedin.png"
                    alt="LinkedIn Profile"
                    className="footerIcon"
                  />
                </a>
                <a href="https://github.com/alealclag">
                  <img
                    src="./images/github.png"
                    alt="GitHub Repo"
                    className="footerIcon"
                  />
                </a>
              </div>
              <div className="col-6 col-xxl-3 col-xl-3 col-lg-3 col-md-4">
                <p>Want to know how does this website work?</p>
                <a href="https://github.com/alealclag/presentationSite">
                  <button type="button" className="btn shadow-lg footerBtn">
                    Here-s the Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </React.StrictMode>
    </div>
  );
}
