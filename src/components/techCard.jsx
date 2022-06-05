import React from "react";

export default function techCard(properties) {
  return (
    <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 mx-1 techBlock shadow-lg">
      <div className="row mx-0">
        <img
          src={properties.pic}
          alt={properties.name + " logo"}
          className="col px-0 techPic"
        />
      </div>
      <div className="row m-0">
        <div
          className="col m-0 techName"
          id={properties.name == "Embedded Systems" && "embSys-card"}
        >
          {properties.name}
        </div>
      </div>
    </div>
  );
}
