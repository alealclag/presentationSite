import React from "react";
import Card from "./card";
import TechCard from "./techCard";
import LangCard from "./langCard";
import ContactForm from "./contactForm";
import PresentationSection from "./presentationSection";
import Header from "./header";
import Footer from "./footer";
import axios from "axios";
import { useState, useEffect } from "react";

const api = axios.create({ baseURL: "http://alealclag.ddns.net:8080" });

function createCard(card, eduCard) {
  return (
    <Card
      key={card.name}
      pic={card.pic}
      name={card.name}
      role={card.role}
      dateFrom={card.dateFrom}
      dateTo={card.dateTo}
      description={card.desc}
      isEduCard={eduCard}
    />
  );
}

function createTechCard(techCard) {
  return (
    <TechCard key={techCard.name} name={techCard.name} pic={techCard.pic} />
  );
}

function createLangCard(langCard) {
  return (
    <LangCard key={langCard.name} name={langCard.name} pic={langCard.pic} />
  );
}

export default function App() {
  const [profileInfo, setProfileInfo] = useState([]);
  const [work, setWork] = useState([]);
  const [edu, setEdu] = useState([]);
  const [tech, setTech] = useState([]);
  const [lang, setLang] = useState([]);

  useEffect(() => {
    api
      .get("/data")
      .then((res) => {
        setProfileInfo(res.data.profileInfo[0]);
        setWork(res.data.workCards);
        setEdu(res.data.eduCards);
        setTech(res.data.techCards);
        setLang(res.data.langCards);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <React.StrictMode>
      <Header key="Header" />

      <PresentationSection
        key={profileInfo.name}
        pic={profileInfo.pic}
        name={profileInfo.name}
        role={profileInfo.role}
        bio={profileInfo.bio}
      />

      <div className="gradientUp" id="workGradient">
        <h2 className="mx-auto">Work Experience</h2>
      </div>
      <section className="" id="workExpSection">
        <div className="container">
          <img src="./images/bgPics/work.png" className="bgPic" />

          <div className="row justify-content-around sectionRow">
            {work.map((card) => createCard(card, false))}
          </div>
        </div>
      </section>
      <div className="gradientDown" id="eduGradient"></div>

      <section className="" id="EduSection">
        <div className="container">
          <h2 className="mx-auto">Education</h2>
          <img src="./images/bgPics/education.png" className="bgPic eduBgPic" />

          <div className="row justify-content-around sectionRow">
            {edu.map((card) => createCard(card, true))}
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
                    {tech.map((techCard) => createTechCard(techCard))}
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
                    {lang.map((langCard) =>
                      langCard.level == 1 ? createLangCard(langCard) : null
                    )}
                  </div>

                  <h4 className="levelTitle leftLangBlock">Advanced</h4>
                  <div className="row justify-content-end">
                    {lang.map((langCard) =>
                      langCard.level == 2 ? createLangCard(langCard) : null
                    )}
                  </div>

                  <h4 className="levelTitle">Intermediate</h4>
                  <div className="row">
                    {lang.map((langCard) =>
                      langCard.level == 3 ? createLangCard(langCard) : null
                    )}
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
            <ContactForm key="contactForm" api={api} />
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
  );
}
