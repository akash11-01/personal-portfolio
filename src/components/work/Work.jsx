import React from "react";
import "./work.css";
import Works from "./Works";
import { CoolMode } from "../MagicUI/CoolMode";
const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <CoolMode>
        <h2 className="section__title">Portfolio</h2>
      </CoolMode>
      <span className="section__subtitle">Most Recent Project</span>
      <Works />
    </section>
  );
};

export default Work;
