import React, { FunctionComponent } from "react";
import about from "./../css-module/about.module.css";
import GraduationPhoto from "./../images/GraduationPhoto.jpg";

const About: FunctionComponent = (): JSX.Element => {
  return (
    <section className={about.about} id={"about"}>
      <div className={about.aboutCard}>
        <div className={about.graduationPhotoContainer}>
          <img src={GraduationPhoto} alt="graduation-photo" className={about.graduationPhotoImage}/>
        </div>
        
        <div></div>
      </div>
    </section>
  );
};

export default About;