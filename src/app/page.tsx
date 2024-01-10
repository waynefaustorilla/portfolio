"use client";

import React from "react";

import Introduction from "@/components/Hello";
import NavigationBar from "@/components/NavigationBar";
import AboutMe from "@/sections/AboutMe";
import Projects from "@/sections/Projects";
import Testimony from "@/sections/Testimony";


const Home: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <NavigationBar />

      <Introduction />

      <AboutMe />

      <Projects />

      <AboutMe />

      <Testimony />
    </React.Fragment>
  );
};

export default Home;