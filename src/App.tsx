import React from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import "./root.module.css";

const Application: React.FunctionComponent = () => {
  React.useEffect(() => {
    document.title = "Orlie Wayne A. Faustorilla";
  }, []);

  return (
    <AnimatePresence mode={"wait"}>
      <Home />
    </AnimatePresence>
  );
};

export default Application;
