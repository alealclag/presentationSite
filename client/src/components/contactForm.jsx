import React, { useEffect, useState } from "react";
import SubmitButton from "./submitButton";

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
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
