import React from "react";

function Detail(props) {
    const {icon, title} = props;

  return (
    <div className="row">
      <div className="col-md-2">
          <i className={icon}></i>
      </div>
      <div className="col-md-10">
          <p className="small text-muted">{title}</p>
      </div>
    </div>
  );
}

export default Detail;
