import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Languages from "./Languages";
import CsFundamentals from "./CsFundamentals";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container grid">
        <Languages />
        <CsFundamentals />
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
