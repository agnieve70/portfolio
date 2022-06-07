import React from 'react';

function TabContent(props) {
  return (
    <div id={`${props.link}`} className={`container tab-pane ${props.active}`}>
      <div className="mt-3">{props.children}</div>
    </div>
  );
}

export default TabContent;