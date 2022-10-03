import React, { useState } from "react";
import img from "../../public/images/photo-grid.png";
export default function Hero() {
  return (
    <>
      <main className="hero">
        <img src={img}></img>

        <h1>Online Experiences</h1>
        <div>
          Join unique interactive activities led by <br /> one-of-a-kind
          hosts—all without leaving <br /> home.
        </div>
      </main>
    </>
  );
}
