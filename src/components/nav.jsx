import React, { useState } from "react";
import logo from "../../public/images/airbnb-logo.png";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <img src={logo} />
      </nav>
    </>
  );
}
