import React, { useState, useEffect, useMemo } from "react";

export default function profilePic(properties) {
  const [[playbackStatus, tipStatus], setPlaybackTipStatus] = useState([
    false,
    1,
  ]); //0: None, 1: Play Tip, 2:Pause Tip

  const profilePicMusic = useMemo(
    () => new Audio("./audio/profilePic_music.mp3"),
    ["./audio/profilePic_music.mp3"]
  );
  profilePicMusic.loop = true;

  useEffect(() => {
    playbackStatus ? profilePicMusic.play() : profilePicMusic.pause();
  }, [playbackStatus]);

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
          <span id="playTipText">
            {window.matchMedia("(max-width: 768px)").matches ||
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
              ? "Tap on me for a comfy experience!"
              : "Click on me for a comfy experience!"}
          </span>
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

          <span id="playTipText">And again if you prefer silence</span>
        </div>
      </div>
    </section>
  );
}
