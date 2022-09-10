import React, { useEffect, useState } from "react";

export default function SubmitButton(properties) {
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
      properties.onSubmit();
    }
  });

  return (
    <button
      className="btn btn-lg sendMessageBtn fullWidthFormField"
      type="submit"
      onClick={() => {
        // if (properties.emptyName) {
        // }
        // if (properties.validEmail) {
        // }
        // if (properties.emptyMessage) {
        // }

        setIsSubmitted(true);
      }}
      disabled={isSubmitted || properties.disabled}
    >
      <i className={"fas fa-check" + (isSubmitted ? "" : "invisibility")}></i>
      <span className="sendFormText" hidden={isSubmitted}>
        Send
      </span>
    </button>
  );
}
