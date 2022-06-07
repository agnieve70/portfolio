import React from "react";
import { SKILLS } from "../data/skills";
import Skill from "./skill";

function Skills() {
  return (
    <div className="mt-3">
      {SKILLS.map((skill) => (
        <Skill key={skill} skill={skill.skill} percent={skill.percent} />
      ))}
    </div>
  );
}

export default Skills;
