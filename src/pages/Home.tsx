import React, { Fragment, FunctionComponent } from "react";
import Intro from "../components/Intro";
import NavigationBar from "../components/NavigationBar";

const Home: FunctionComponent = (): JSX.Element => {
  return (
    <Fragment>
      <NavigationBar />

      <Intro />
    </Fragment>
  );
};

export default Home;