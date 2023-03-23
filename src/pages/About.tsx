import { FunctionComponent } from "react";
import style from "./../css-module/about.module.scss";
import GraduationPhoto from "./../images/GraduationPhoto.jpg";

const About: FunctionComponent = (): JSX.Element => {
  return (
    <section className={style.about} id={"about"}>
      <div className={style.aboutCard}>
        <div className={style.graduationPhotoContainer}>
          <img src={GraduationPhoto} loading={"lazy"} alt="graduation-photo" className={style.graduationPhotoImage}/>
        </div>

        <div className={style.aboutCardText}>
          <h3 className={style.aboutCardHeader}># a b o u t m e</h3>

          <div className={style.aboutCardBody}>
            <div>Hello, my name is Orlie Wayne A. Faustorilla, and I am a passionate web developer with expertise in Laravel, MySQL, MongoDB, React, Express.js, Node.js, and TypeScript.</div>

            <br />

            <div>I graduated with a Bachelor of Science in Information Technology from Negros Oriental State University in 2020, and have been continuously improving my programming skills since then. During my first 2 years at the university, I worked at the Registrar's office where I gained hands-on experience in programming.</div>

            <br />

            I was involved in developing and maintaining a student information system that automated various processes, including enrollment and record-keeping. This experience allowed me to sharpen my skills in programming and problem-solving, and I am eager to apply my knowledge to new challenges.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;