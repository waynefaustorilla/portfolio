import SocialLink from "@/components/SocialLink";
import React from "react";

const Home: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <section className={"grid grid-cols-1 md:grid-cols-2"}>
        <div className="flex flex-col items-center justify-center min-h-screen gap-5">
          <section className={"text-center"}>
            <h2 className={"text-2xl"}>Hello, I am</h2>
            <h1 className={"text-3xl font-bold font-mono text-green-500 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"}>ORLIE WAYNE A. FAUSTORILLA</h1>
            <h3 className={"text-xl"}>Full Stack Web Developer</h3>
          </section>

          <span className={"flex gap-2"}>
            <SocialLink icon="google" link="mailto: orliewayne.faustorilla@gmail.com" />
            <SocialLink icon="microsoft" link="mailto: orliewayne.faustorilla@outlook.ph" />
            <SocialLink icon="linkedin" link="https://linkedin.com/in/orliewaynefaustorilla" />
            <SocialLink icon="facebook" link="https://facebook.com/orliewaynefaustorilla" />
            <SocialLink icon="threads" link="https://threads.net/@kodokage.dev" />
          </span>
        </div>

        <div className="flex items-center justify-center min-h-screen">
          <h1>Hello World</h1>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;