import React from 'react'

function Experience(props) {
    const { date, title, description } = props;

  return (
    <li className="event" data-date={date}>
      <h3>{title}</h3>
      <ul>{description.map(desc => <li key={desc}>{desc}</li>)}</ul>
    </li>
  );
}

export default Experience