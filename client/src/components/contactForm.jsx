import React, { useEffect, useState } from "react";
import SubmitButton from "./submitButton";

export default function contactForm(properties) {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(true);
  const [emptyName, setEmptyName] = useState(true);
  const [emptyMessage, setEmptyMessage] = useState(true);
  const [formUntouched, setFormUntouched] = useState(true);

  function updateContactName(e) {
    setContactName(e.target.value);
    setEmptyName(e.target.value === "");
  }

  function updateContactEmail(e) {
    setContactEmail(e.target.value);
    setInvalidEmail(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value));
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
      setInvalidEmail(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value));
    }
    if (e.target.name == "message") {
      setEmptyMessage(e.target.value === "");
    }
  }

  function showErrors() {
    setFormUntouched(false);
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
            className={emptyName && !formUntouched ? "invalidValue" : ""}
            onChange={updateContactName}
          />
        </div>
        <div className="col-lg-6">
          <input
            type="text"
            name="email"
            id="contactMail"
            placeholder="Email"
            className={invalidEmail && !formUntouched ? "invalidValue" : ""}
            onChange={updateContactEmail}
          />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-12">
          <textarea
            name="message"
            id="contactMessage"
            className={
              "fullWidthFormField " +
              (emptyMessage && !formUntouched ? "invalidValue" : "")
            }
            cols="30"
            rows="10"
            placeholder="Message..."
            onChange={updateContactMessage}
          ></textarea>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-6" onClick={showErrors}>
          <SubmitButton
            disabled={emptyName || emptyMessage || invalidEmail}
            onSubmit={postContactForm}
          />
        </div>
      </div>
    </form>
  );
}
