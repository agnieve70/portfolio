import React, { Fragment } from "react";
import { DETAILS } from "../data/details";
import Detail from "./detail";

function Details() {
  return (
    <Fragment>
      {DETAILS.map((detail, indx) => (
        <Detail key={indx} icon={detail.icon} title={detail.title} />
      ))}
    </Fragment>
  );
}

export default Details;
