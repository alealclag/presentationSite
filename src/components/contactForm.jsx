import React from "react";

export default function contactForm() {
  return (
    <form
      action="/"
      method="POST"
      id="contactForm"
      className="col-lg-6 shadow-lg"
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
            <i className="fas fa-check invisibility"></i>
            <span className="sendFormText">Send</span>
          </button>
        </div>
      </div>
    </form>
  );
}
