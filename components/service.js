import React from 'react'

function Service(props) {
  
  const {date, title, description, github, link} = props;

  return (
    <div className="card px-5 py-3 mb-3 shadow">
      <div className="row g-0">
        {/* <div className="col-md-4">
          <Image
            src={"/images/profile.jpg"}
            width={220}
            height={220}
            alt={"profile picture"}
            class="rounded-circle shadow"
          />
        </div> */}
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p
              className="card-text text-muted"
              style={{ textAlign: "justify" }}
            >
              {description}
            </p>
            <p>Github: {github}</p>
            <p>
              Link: <a href={link}>{link}</a>
            </p>
            {/* <button className="btn btn-primary">Full Detail</button> */}
            <p className="card-text mt-3">
              <small className="text-muted">{date}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service