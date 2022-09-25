import React, { useEffect, useState } from "react";
import SubmitButton from "./submitButton";

export default function contactForm(properties) {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [emptyName, setEmptyName] = useState(false);
  const [emptyMessage, setEmptyMessage] = useState(false);

  function updateContactName(e) {
    setContactName(e.target.value);
    // setEmptyName(e.target.value === "");
  }

  function updateContactEmail(e) {
    setContactEmail(e.target.value);

    // setValidEmail(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value));
  }

  function updateContactMessage(e) {
    setContactMessage(e.target.value);
    setEmptyMessage(e.target.value === "");
  }

  function checkValidity(e) {
    if (e.target.name == "name") {
      setEmptyName(e.target.value === "");
    }
    if (e.target.name == "email") {
      setValidEmail(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value));
    }
    if (e.target.name == "message") {
      setEmptyMessage(e.target.value === "");
    }
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
            className={emptyName ? "invalidValue" : ""}
            onChange={updateContactName}
            onBlur={checkValidity}
          />
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            name="email"
            id="contactMail"
            placeholder="Email"
            className={validEmail ? "" : "invalidValue"}
            onChange={updateContactEmail}
            onBlur={checkValidity}
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-12">
          <textarea
            name="message"
            id="contactMessage"
            className={
              "fullWidthFormField " + (emptyMessage ? "invalidValue" : "")
            }
            cols="30"
            rows="10"
            placeholder="Message..."
            onChange={updateContactMessage}
            onBlur={checkValidity}
          ></textarea>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <SubmitButton
            // disabled={emptyName || emptyMessage || !validEmail}
            // emptyName={emptyName}
            // validEmail={validEmail}
            // emptyMessage={emptyMessage}
            onSubmit={postContactForm}
          />
        </div>
      </div>
    </form>
  );
}
