import React, { FunctionComponent } from "react";
import style from "./../../css-module/intro.module.css";
import { motion } from "framer-motion";

const Intro: FunctionComponent = (): JSX.Element => {
  return (
    <motion.section className={style.intro}>
      <h1 className={style.myName}>Orlie Wayne A. Faustorilla</h1>
      <h2 className={style.jobDescription}>Full Stack Web Developer</h2>
    </motion.section>
  );
};

export default Intro;