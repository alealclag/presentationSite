import React from "react";

let spinProfilePic = false; //Flag for when mouse over profile pic
let profilePicMusic = new Audio("audio/profilePic_music.mp3");
profilePicMusic.loop = true;
let firstTip = true;

function rotate(degree) {
  //If mouse is over or was clicked, play.
  if (spinProfilePic) {
    // For webkit browsers: e.g. Chrome
    $(".profilePic").css({ WebkitTransform: "rotate(" + degree + "deg)" });
    // For Mozilla browser: e.g. Firefox
    $(".profilePic").css({ "-moz-transform": "rotate(" + degree + "deg)" });

    degree++;
    profilePicMusic.play();
  } else {
    profilePicMusic.pause();
  }
  // Animate rotation with a recursive call
  setTimeout(function () {
    rotate(degree);
  }, 30);
}

rotate(0);

function rotatePlay() {
  spinProfilePic = !spinProfilePic;
  if (spinProfilePic) {
    $("#playTip").fadeOut(); //Hide hover Tip

    if (firstTip) {
      firstTip = false;
      $("#pauseTip").fadeIn(); //Hide button text
    }
  } else {
    spinProfilePic = false;
    $("#pauseTip").fadeOut(); //Hide button text
  }
}

export default function presentationSection(properties) {
  return (
    <section className="" id="presentationSection">
      <div className="container">
        <img
          className="profilePic shadow-lg"
          src={properties.pic}
          alt="My profile picture"
          onClick={rotatePlay}
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
