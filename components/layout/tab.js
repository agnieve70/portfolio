import React, { Fragment } from 'react'
import Certificates from '../certificates';
import Experiences from '../experiences';
import Services from '../services';
import TabContent from './tabContent';
import TabLink from './tabLink';

function Tab() {
  return (
    <Fragment>
      <ul className="nav nav-tabs" role="tablist">
        <TabLink link={"experiences"} active={"active"} title={"Experiences"} />
        <TabLink link={"services"} title={"Projects"} />
        <TabLink link={"certificates"} title={"Certificates"} />
      </ul>
      <div className="tab-content">
        <TabContent link={"experiences"} active={"active"}>
          <Experiences />
        </TabContent>
        <TabContent link={"services"} active={"fade"}>
          <Services />
        </TabContent>
        <TabContent link={"certificates"} active={"fade"}>
          <Certificates />
        </TabContent>
      </div>
    </Fragment>
  );
}

export default Tab