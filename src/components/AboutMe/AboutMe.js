import React from "react";
import classes from "./AboutMe.module.css";
const AboutMe = () => {
  return (
    <div className={classes.AboutMe} id="about-me">
      <div>
        <h2>About Me</h2>
        <p>
          As a nerd π, I learned to code from a very young age πΆ in various
          computer languages (c++, vhdl, java, javascript, PHP, python...) and I
          created personal projectsπ, and other professional ones as a
          freelance. With more then 3 years experience just in web apps
          developement π, now im a full time MERN-stack developer π, I
          mastered the different technical steps of the creation of a web
          application π starting with analyzing the needs from the
          specifications defined by the customer π½, implementing the mockups
          π₯οΈ, database modeling , to the frontend and backend development πͺ,
          including the testing and the maintenance. π’
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
