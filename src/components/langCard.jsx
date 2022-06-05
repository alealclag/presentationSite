import React from "react";

export default function langCard(properties) {
  return (
    <div
      className="col-4 mx-1 shadow-lg langBlock"
      id={properties.name.toLowerCase() + "Block"}
    >
      <div className="row mx-0">
        <img
          src={properties.pic}
          alt={properties.name + " Flag"}
          className="col px-0 mx-0 flagPic"
        />
      </div>
      <div className="row">
        <div className="col langName">{properties.name}</div>
      </div>
    </div>
  );
}
