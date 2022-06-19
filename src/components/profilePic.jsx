import React, { useState } from "react";

export default function profilePic(properties) {
  const [playbackStatus, setPlaybackStatus] = useState(0); //0: Never played, 1: Playing never paused, 2: Paused, 3: Playing

  let profilePicMusic = new Audio("audio/profilePic_music.mp3");
  profilePicMusic.loop = true;

  let spin = false;

  function rotate(degree) {
    if (spin) {
      // For webkit browsers: e.g. Chrome
      $(".profilePic").css({ WebkitTransform: "rotate(" + degree + "deg)" });
      // For Mozilla browser: e.g. Firefox
      $(".profilePic").css({ "-moz-transform": "rotate(" + degree + "deg)" });

      degree++;
      degree %= 360;
      // profilePicMusic.play();
    } else {
      // profilePicMusic.pause();
    }
    // Animate rotation with a recursive call
    setTimeout(function () {
      rotate(degree);
    }, 30);
  }

  rotate(0);

  function rotatePlay() {
    switch (playbackStatus) {
      case 0:
        setPlaybackStatus(1);
        spin = true;
        // $("#playTip").fadeOut(); //Hide hover Tip
        // $("#pauseTip").fadeIn(); //Hide button text
        break;
      case 1:
        setPlaybackStatus(2);
        spin = false;

        // $("#pauseTip").fadeOut(); //Hide button text
        break;
      case 2:
        setPlaybackStatus(3);
        spin = true;

        break;
      case 3:
        setPlaybackStatus(2);
        spin = false;
        break;
      default:
        break;
    }
  }

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
      </div>
    </section>
  );
}
