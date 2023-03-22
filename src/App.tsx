import React, { Fragment, FunctionComponent } from "react";
import Home from "./pages/Home";
import "./root.module.css";

const Application: FunctionComponent = () => {
  React.useEffect(() => {
    document.title = "Orlie Wayne A. Faustorilla";
  }, []);

  return (
    <Fragment>
      <Home />
    </Fragment>
  );
};

export default Application;
