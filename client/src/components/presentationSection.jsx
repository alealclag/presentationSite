import React from "react";
import ProfilePic from "./profilePic";

export default function presentationSection(properties) {
  return (
    <section className="" id="presentationSection">
      <div className="container">
        <ProfilePic key="profilePic" pic={properties.pic} />

        <div id="">
          <h1>{properties.name}</h1>
          <h3>{properties.role}</h3>
          <p>{properties.bio}</p>
        </div>
      </div>
    </section>
  );
}
