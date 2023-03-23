import React from "react";
import { AnimatePresence } from "framer-motion";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import About from "./pages/About";
import "./root.module.scss";

const Application: React.FunctionComponent = () => {
  React.useEffect(() => {
    document.title = "Orlie Wayne A. Faustorilla";
  }, []);

  return (
    <AnimatePresence mode={"wait"}>
      <NavigationBar />

      <Intro />

      <About />
    </AnimatePresence>
  );
};

export default Application;
