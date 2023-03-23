import React, { FunctionComponent } from "react";
import Link from "../Link";
import navigation from "./../../css-module/navigationbar.module.css";

const NavigationBar: FunctionComponent = () => {
  return (
    <nav className={navigation.navbar}>
      <h2 className={navigation.navbarTitle}>Orlie Wayne A. Faustorilla</h2>

      <div className={navigation.navContent}>
        <Link className={navigation.navContentItem} href="#intro">Intro</Link>
        <Link className={navigation.navContentItem} href="#about">About Me</Link>
        <Link className={navigation.navContentItem} href="#project">Projects</Link>
        <Link className={navigation.navContentItem} href="#skills">Skills</Link>
        <Link className={navigation.navContentItem} href="#contact">Contact Me</Link>
      </div>
    </nav>
  );
};

export default NavigationBar;