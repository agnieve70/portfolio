/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
import React, { Fragment } from "react";
import { CERTIFICATES } from "../data/certificates";
import Image from "next/image";

function Certificates() {
  return (
    <Fragment>
      <h4>Certificates</h4>
      <p className="text-muted">
        This are some of my certificates that was received during my academic
        studies.
      </p>
      {CERTIFICATES.map((cert) => (
        <Fragment>
          <div className="card py-3 px-4 mb-3 shadow">
            <div className="card-body">
              <h5 className="card-title">{cert.title}</h5>

              <a href={cert.image} target="_blank">
                <Image
                  key={cert.title}
                  title={cert.title}
                  src={cert.image}
                  width={500}
                  height={400}
                  alt={cert.title}
                />
              </a>
            </div>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default Certificates;
