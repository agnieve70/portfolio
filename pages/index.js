import React, { Fragment } from 'react';
import AboutMe from "../components/aboutMe";
import Container from "../components/layout/container";
import SideInfo from "../components/sideinfo";
import Head from "next/head";
import Tab from '../components/layout/tab';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>AG Nieve Portfolio</title>
        <meta
          name="description"
          content="Hi! I'm AG Nieve a Full Stack Developer"
        />
      </Head>

      <Container>
        <div className="row">
          <div className="col-md-3">
            <SideInfo />
          </div>
          <div className="col-md-9">
            <AboutMe />
            <Tab />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
