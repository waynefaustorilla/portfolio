import React, { Fragment, FunctionComponent } from "react";
import Intro from "../components/Intro";
import NavigationBar from "../components/NavigationBar";
import About from "./About";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <Fragment>
      <NavigationBar />

      <Intro />

      <About />
    </Fragment>
  );
};

export default Home;