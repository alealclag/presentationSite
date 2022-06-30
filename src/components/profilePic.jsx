import React, { useState } from "react";

export default function profilePic(properties) {
  const [[playbackStatus, tipStatus], setPlaybackTipStatus] = useState([
    false,
    1,
  ]); //0: None, 1: Play Tip, 2:Pause Tip

  // useEffect(() => {
  //   if (playbackStatus % 2 == 0) {
  //     profilePicMusic.play();
  //   } else {
  //     profilePicMusic.pause();
  //   }
  // });

  let profilePicMusic = new Audio("audio/profilePic_music.mp3");
  profilePicMusic.loop = true;

  function rotatePlay() {
    switch (tipStatus) {
      case 0:
        setPlaybackTipStatus([!playbackStatus, 0]);
        break;

      case 1:
        setPlaybackTipStatus([true, 2]);
        break;

      case 2:
        setPlaybackTipStatus([false, 0]);
        break;

      default:
        break;
    }
  }

  return (
    <section className="" id="presentationSection">
      <div className="container">
        <img
          className={
            "profilePic shadow-lg spinProfilePic " +
            (playbackStatus ? "spinProfilePicRunning" : "spinProfilePicPaused")
          }
          src={properties.pic}
          alt="My profile picture"
          onClick={rotatePlay}
        />
        <div
          className={
            "profilePicInstruction" +
            (tipStatus == 2 ? " fadeOut" : "") +
            (tipStatus == 0 ? " invisibility" : "")
          }
          id="playTip"
        >
          <span id="playTipText">{properties.playHint}</span>
          <img src="./images/arrow.png" className="tipArrow" id="rightArrow" />
        </div>
        <div
          className={
            "profilePicInstruction" +
            (tipStatus == 2 ? " fadeIn" : "") +
            (tipStatus == 0 ? " fadeOut" : "")
          }
          id="pauseTip"
        >
          <img src="./images/arrow.png" className="tipArrow" id="leftArrow" />

          <span id="playTipText">{properties.pauseHint}</span>
        </div>
      </div>
    </section>
  );
}
