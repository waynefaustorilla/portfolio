import MaskedPhoto from "@/components/MaskedPhoto";
import SocialLink from "@/components/SocialLink";
import React from "react";

const Home: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <section className={"grid grid-cols-1 md:grid-cols-2"}>
        <div className="flex flex-col items-center justify-center min-h-screen gap-7">
          <section className={"text-center"}>
            <h2 className={"text-3xl lg:text-4xl"}>Hello, I am</h2>
            <h1 className={"text-4xl lg:text-6xl font-bold"}>ORLIE WAYNE A. FAUSTORILLA</h1>
            <h3 className={"text-xl lg:text-3xl"}>Full Stack Web Developer</h3>
          </section>

          <span className={"flex gap-2"}>
            <SocialLink icon={"google"} link="mailto: orliewayne.faustorilla@gmail.com?subject=We want to know you more&cc=owfaustorilla.cznnhs13@gmail.com" />
            <SocialLink icon={"microsoft"} link="mailto: orliewayne.faustorilla@outlook.ph?subject=We want to know you more&cc=owfaustorilla.cznnhs13@gmail.com" />
            <SocialLink icon={"facebook"} link="https://facebook.com/orliewaynefaustorillla" />
            <SocialLink icon={"linkedin"} link="https://linkedin.com/in/orliewaynefaustorilla" />
            <SocialLink icon={"threads"} link="https://threads.net/@kodokage.dev" />
          </span>
        </div>

        <div className="flex items-center justify-center min-h-screen">
          <MaskedPhoto />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;