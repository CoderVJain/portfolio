import React from "react";
import "./Experience.css";

import skills from "../../data/skills.json";
import Working from "./Wroking";

const Experience = () => {
  return (
    <section className="experience experience-container">
      <div className="experience-title">Experience</div>

      <div className="experience-content">
        <div className="skills">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="skill">
                <div className="skillImageContainer">
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <Working />
      </div>
    </section>
  );
};

export default Experience;
