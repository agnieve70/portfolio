import React, { Fragment } from "react";
import { SERVICES } from "../data/services";
import Service from "./service";

// const Str = require("@supercharge/strings");

function Services() {
  return (
    <Fragment>
      <h4>Projects</h4>
      <p className="text-muted">Please be updated that the list of services are not yet finished. I will provide the details and other Projects I have made soon.</p>
      {SERVICES.map((srv) => (
        <Service
          key={srv.title}
          title={srv.title}
          date={srv.date}
          description={srv.description}
          github={srv.github}
          link={srv.link}
        />
      ))}
    </Fragment>
  );
}

export default Services;
