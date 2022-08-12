import React, { useEffect, useState } from "react";
import SubmitButton from "./submitButton";

export default function contactForm(properties) {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  function updateContactName(e) {
    setContactName(e.target.value);
  }

  function updateContactEmail(e) {
    setContactEmail(e.target.value);
  }

  function updateContactMessage(e) {
    setContactMessage(e.target.value);
  }

  var postContactForm = () => {
    properties.api
      .post("/contact", {
        name: contactName,
        email: contactEmail,
        message: contactMessage,
      })
      .then((res) => console.log(res))
      .catch((e) => console.error(e));
  };
  return (
    <form id="contactForm" className="col-lg-6 shadow-lg">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <input
            type="text"
            name="name"
            id="contactName"
            placeholder="Name"
            onChange={updateContactName}
          />
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            name="email"
            id="contactMail"
            placeholder="Email"
            onChange={updateContactEmail}
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
            onChange={updateContactMessage}
          ></textarea>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <SubmitButton onSubmit={postContactForm} />
        </div>
      </div>
    </form>
  );
}
