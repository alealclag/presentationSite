import React, { useState } from "react";

export default function contactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // setIsSubmitted(true);

  function buttonAnimation(e) {
    e.preventDefault();
    setIsSubmitted(true);

    let sendCharm = new Audio("audio/formSent.mp3");
    sendCharm.play();
    $(".sendMessageBtn").css("pointer-events", "none"); //Disable button
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

    $(".sendFormText").css("display", "none"); //Hide button text
    //$(".sendMessageBtn i").removeClass("invisibility"); //Show check on button
    setIsSubmitted(true);
  }

  return (
    <form
      action="/"
      method="POST"
      id="contactForm"
      className="col-lg-6 shadow-lg"
      onSubmit={buttonAnimation}
    >
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <input type="text" name="name" id="contactName" placeholder="Name" />
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
            <i
              className={"fas fa-check" + (isSubmitted ? "" : "invisibility")}
            ></i>
            <span className="sendFormText">Send</span>
          </button>
        </div>
      </div>
    </form>
  );
}
