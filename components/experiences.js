/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react";
import { EXPERIENCES } from "../data/experiences";
import Experience from "./experience";

function Experiences() {
  return (
    <Fragment>
      <h4>Experiences</h4>
      <ul className="timeline">
        {EXPERIENCES.map((exp) => (
          <Experience
            key={exp.year}
            title={exp.title}
            date={exp.year}
            description={exp.description}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default Experiences;
