import React, { useState } from "react";

export default function Card(props) {
  let spots =
    props.i.openSpots == 0
      ? "SOLD OUT"
      : props.i.openSpots != 0 && props.i.location == "Online"
      ? "ONLINE"
      : null;
  return (
    <>
      <div className="card">
        <img src={`../../public/images/${props.i.coverImg}`} />
        <span>{spots}</span>

        <div>
          <img src="../../public/images/star.png" />
          <span>{props.i.stats.rating}</span>
          <span className="faded">
            ({props.i.stats.reviewCount}) • {props.i.location}
          </span>
          <p>{props.i.title}</p>
          <p>
            <span className="bold">From ${props.i.price}</span> / person
          </p>
        </div>
      </div>
    </>
  );
}
