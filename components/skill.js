/* eslint-disable jsx-a11y/aria-proptypes */
import React, { Fragment } from 'react'

function Skill(props) {
    const { percent, skill } = props;

  return (
    <Fragment>
      <div className="mb-3">
        <span className="text-muted">
          <b>{skill}</b>
        </span>
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percent}%;` }}
            aria-valuenow={`${percent}`}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percent}%
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Skill