import React, { FunctionComponent } from "react";
import intro from "./../../css-module/intro.module.scss";
import { motion } from "framer-motion";

const Intro: FunctionComponent = (): JSX.Element => {
  const Div = motion.div;

  return (
    <section className={intro.introCard} id={"intro"}>
      <Div
        className={intro.introCardText}
        initial={{
          y: 75,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 1,
          ease: "easeOut"
        }}>
        <h1 className={intro.myName}>Orlie Wayne A. Faustorilla</h1>
        <h2 className={intro.jobDescription}>Full Stack Web Developer</h2>
      </Div>
    </section>
  );
};

export default Intro;