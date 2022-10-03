import { useState } from "react";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./assets/data";

import "./App.css";

export default function App() {
  let mapped = data.map((i) => {
    return (
      <Card
        key={i.id}
        i={i}
        // img={i.coverImg}
        // spots={i.openSpots}
        // raring={i.stats.rating}
        // count={i.stats.reviewCount}
        // location={i.location}
        // price={i.price}
        // title={i.title}
      />
    );
  });
  return (
    <>
      <div className="wraper">
        <Nav />
        <Hero />
        <div className="slider"> {mapped}</div>
      </div>
    </>
  );
}
