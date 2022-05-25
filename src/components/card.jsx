import React from "react";

export default function Card(properties) {
  return (
    <div
      className={
        "col-12 col-xxl-5 col-xl-5 col-lg-5 col-md-10 row elementBlock shadow-lg " +
        (properties.isEduCard ? "elementBlockEdu" : "")
      }
    >
      <div className="row ms-0 px-0 upperRow">
        <img
          src={properties.pic}
          alt={properties.name + "logo"}
          className="col-6 col-lg-6 col-md-4 cardPic"
        />

        <div className="col">
          <div className="row">
            <div
              className={
                "col-auto ms-0 cardInfo cardName align-self-center " +
                (properties.name == "University of Seville" ? "uniName" : "")
              }
            >
              {properties.name}
            </div>
          </div>

          <div className="row">
            <div
              className={
                "col-12 ms-0 cardInfo cardRole " +
                (properties.role == "Full-Stack Web Development Course"
                  ? "webDevCourse"
                  : "")
              }
            >
              {properties.role}
            </div>
          </div>

          <div className="row">
            <div className="col-auto ms-0 cardInfo cardDates">
              {properties.dates}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-1 ms-0 pe-0 lowerRow">
        <div className="col cardInfo cardDesc">{properties.description}</div>
      </div>
    </div>
  );
}
