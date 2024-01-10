"use client";

import Introduction from "@/components/Introduction";
import MaskedPhoto from "@/components/MaskedPhoto";
import NavigationBar from "@/components/NavigationBar";
import SocialLink from "@/components/SocialLink";
import * as fa from "@fortawesome/free-brands-svg-icons";
import { AnimatePresence } from "framer-motion";
import React from "react";

const Home: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <AnimatePresence mode={"wait"}>
      <NavigationBar />

      <section className={"grid grid-cols-1 md:grid-cols-2 px-4"}>
        <div className="flex flex-col items-center justify-center min-h-screen gap-7">
          <Introduction />

          <span className={"flex gap-2"}>
            <SocialLink icon={fa.faGoogle} link="mailto: orliewayne.faustorilla@gmail.com?subject=We want to know you more&cc=owfaustorilla.cznnhs13@gmail.com" />
            <SocialLink icon={fa.faMicrosoft} link="mailto: orliewayne.faustorilla@outlook.ph?subject=We want to know you more&cc=owfaustorilla.cznnhs13@gmail.com" />
            <SocialLink icon={fa.faFacebookF} link="https://facebook.com/orliewaynefaustorillla" />
            <SocialLink icon={fa.faLinkedinIn} link="https://linkedin.com/in/orliewaynefaustorilla" />
            <SocialLink icon={fa.faThreads} link="https://threads.net/@kodokage.dev" />
            <SocialLink icon={fa.faGithub} link="https://github.com/waynefaustorilla" />
          </span>
        </div>

        <div className="flex items-center justify-center min-h-full lg:min-h-screen">
          <MaskedPhoto />
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Home;