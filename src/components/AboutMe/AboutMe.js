import React from "react";
import classes from "./AboutMe.module.css";
const AboutMe = () => {
  return (
    <div className={classes.AboutMe} id="about-me">
      <h2>About Me</h2>
      <p>
        As a nerd 🙃, I
        learned to code from a very young age 👶 in various computer languages
        (c++, vhdl, java, javascript, PHP, python...) and I created personal
        projects🚀, and other professional ones as a freelance. 
        With more then 3 years experience just in web apps developement 😎, 
        now im a full time MERN-stack developer 👑, 
        I mastered the
        different technical steps of the creation of a web application 🙉 starting
        with analyzing the needs from the specifications defined by the
        customer 👽, implementing the mockups 🖥️, database modeling , to the frontend
        and backend development 💪, including the testing and
        the maintenance. 🎢
      </p>
    </div>
  );
};
export default AboutMe;
