import React, { useEffect, useState } from "react";

export default function SubmitButton() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      let sendCharm = new Audio("audio/formSent.mp3");
      sendCharm.play();
      $(".sendMessageBtn").animate(
        {
          borderRadius: "100%",
          width: "60px",
          height: "60px",
          padding: 0,
        },
        100,
        "linear"
      ); //Make button round
      $("#contactForm").trigger("submit");
    }
  });

  return (
    <button
      className="btn btn-lg sendMessageBtn fullWidthFormField"
      type="submit"
      onClick={() => setIsSubmitted(true)}
      disabled={isSubmitted}
    >
      <i className={"fas fa-check" + (isSubmitted ? "" : "invisibility")}></i>
      <span className="sendFormText" hidden={isSubmitted}>
        Send
      </span>
    </button>
  );
}
