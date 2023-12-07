import SocialLink from "@/components/SocialLink";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <React.Fragment>
      <section className={"grid grid-cols-1 md:grid-cols-2"}>
        <div className="flex flex-col items-center justify-center min-h-screen gap-5">
          <section className={"text-center"}>
            <h2>Hello, I am</h2>
            <h1 className={"font-bold"}>ORLIE WAYNE A. FAUSTORILLA</h1>
            <h3>Full Stack Web Developer</h3>
          </section>

          <span className={"flex gap-2"}>
            <SocialLink icon="google" />
            <FontAwesomeIcon size={"xl"} icon={faGoogle} />
            <FontAwesomeIcon size={"xl"} icon={faLinkedin} />
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