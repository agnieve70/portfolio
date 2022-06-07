import Image from 'next/image';
import React, { Fragment } from 'react'
import Details from './details';
import Skills from './skills';

function SideIn() {
  return (
    <Fragment>
      <div className="row justify-content-center">
          <Image
            src={"/images/profile.jpg"}
            width={220}
            height={220}
            alt={"profile picture"}
            class="rounded-circle shadow"
          />
      </div>
      <h2 className="text-center mt-2">AG Nieve</h2>
      <h6 className="text-center mb-3">Full Stack Developer</h6>
      <Details />
      <Skills />
    </Fragment>
  );
}

export default SideIn