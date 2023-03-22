import React, { FunctionComponent } from "react";
import style from "./../../css-module/navigationbar.module.css";

const NavigationBar: FunctionComponent = () => {
  return (
    <nav className={style.navbar}>
      <h2 className={style.navbarTitle}>Orlie Wayne A. Faustorilla</h2>

      <div className={style.navContent}>
        <a className={style.navContentItem} href="#intro">Intro</a>
        <a className={style.navContentItem} href="#project">Projects</a>
        <a className={style.navContentItem} href="#skills">Skills</a>
        <a className={style.navContentItem} href="#about">About Me</a>
        <a className={style.navContentItem} href="#contact">Contact Me</a>
      </div>
    </nav>
  );
};

export default NavigationBar;