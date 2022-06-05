import React from "react";

export default function presentationSection(properties) {
  return (
    <section className="" id="presentationSection">
      <div className="container">
        <img
          className="profilePic shadow-lg"
          src={properties.pic}
          alt="My profile picture"
        />
        <div className="profilePicInstruction" id="playTip">
          <span id="playTipText">{properties.playHint}</span>
          <img src="./images/arrow.png" className="tipArrow" id="rightArrow" />
        </div>
        <div className="profilePicInstruction" id="pauseTip">
          <img src="./images/arrow.png" className="tipArrow" id="leftArrow" />
          {properties.pauseHint}
        </div>

        <div id="">
          <h1>{properties.name}</h1>
          <h3>{properties.role}</h3>
          <p>{properties.bio}</p>
        </div>
      </div>
    </section>
  );
}
