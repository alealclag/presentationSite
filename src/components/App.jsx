import React from "react";
import Card from "./card";
import TechCard from "./techCard";
import LangCard from "./langCard";
import ContactForm from "./contactForm";
import PresentationSection from "./presentationSection";
import Header from "./header";
import Footer from "./footer";

export default function App() {
  return (
    <div>
      <React.StrictMode>
        <Header key="Header" />

        <PresentationSection
          key="presentationSection"
          pic="./images/prestentationPic.jpg"
          playHint="Click on me for a comfy experience!"
          pauseHint="And again if you prefer silence"
          name="Alejandro Alcántara Laguna"
          role="Web developer & Computer Engineer"
          bio="Still a rookie, so I'm looking for my best path"
        />

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
                      <TechCard
                        key="React"
                        name="React"
                        pic="./images/cardPics/techLogos/react.jpg"
                      />
                      <TechCard
                        key="Node.js"
                        name="Node.js"
                        pic="./images/cardPics/techLogos/node.jpg"
                      />
                      <TechCard
                        key="Bootstrap"
                        name="Bootstrap"
                        pic="./images/cardPics/techLogos/bootstrap.jpg"
                      />
                      <TechCard
                        key="jQuery"
                        name="jQuery"
                        pic="./images/cardPics/techLogos/jQuery.jpg"
                      />
                      <TechCard
                        key="MongoDB"
                        name="MongoDB"
                        pic="./images/cardPics/techLogos/MongoDB.jpg"
                      />
                      <TechCard
                        key="Git"
                        name="Git"
                        pic="./images/cardPics/techLogos/git.jpg"
                      />
                      <TechCard
                        key="Docker"
                        name="Docker"
                        pic="./images/cardPics/techLogos/docker.jpg"
                      />
                      <TechCard
                        key=".net"
                        name=".Net (C#)"
                        pic="./images/cardPics/techLogos/net.jpg"
                      />
                      <TechCard
                        key="Python"
                        name="Python"
                        pic="./images/cardPics/techLogos/python.jpg"
                      />
                      <TechCard
                        key="Java"
                        name="Java"
                        pic="./images/cardPics/techLogos/java.jpg"
                      />
                      <TechCard
                        key="C++"
                        name="C / C++"
                        pic="./images/cardPics/techLogos/c++.jpg"
                      />
                      <TechCard
                        key="EmbdSys"
                        name="Embedded Systems"
                        pic="./images/cardPics/techLogos/embedded.jpg"
                      />
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
                      <LangCard
                        key="Spanish"
                        name="Spanish"
                        pic="./images/cardPics/spain.png"
                      />
                    </div>

                    <h4 className="levelTitle leftLangBlock">Advanced</h4>
                    <div className="row justify-content-end">
                      <LangCard
                        key="English"
                        name="English"
                        pic="./images/cardPics/uk.jpg"
                      />
                    </div>

                    <h4 className="levelTitle">Intermediate</h4>
                    <div className="row">
                      <LangCard
                        key="Japanese"
                        name="Japanese"
                        pic="./images/cardPics/japan.jpg"
                      />
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
              <ContactForm key="contactForm" />
            </div>
          </div>
        </section>

        <Footer
          key="footer"
          linkedInProfile="https://www.linkedin.com/in/alejandro-alcantara-laguna"
          gitHubProfile="https://github.com/alealclag"
          repoLink="https://github.com/alealclag/presentationSite"
        />
      </React.StrictMode>
    </div>
  );
}
