import React from 'react'

function Container(props) {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card p-5 shadow">
                {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container