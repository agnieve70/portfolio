import React from 'react'

function TabLink(props) {
    const {link, title, active} = props;

  return (
    <li className="nav-item">
      <a className={`nav-link ${active}`} data-bs-toggle="tab" href={`#${link}`}>
        {title}
      </a>
    </li>
  );
}

export default TabLink