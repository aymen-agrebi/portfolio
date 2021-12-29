import React from 'react';
import TypeWriter from 'react-typewriter';
import NeonButton from '../UI/NeonButton/NeonButton';
import classes from './Home.module.css'
import DevBoi from '../UI/DevBoi/DevBoi';
import MyCv from '../../assets/aymen-agrebi-resume.pdf';
const Home = () => {
    return (
        <div className={classes.Home} id="home">
            <div className={classes.Svgboi}>
                <DevBoi />
            </div>
            <div className={classes.HomeBanner}>
                <h1>
                <TypeWriter typing={1} style={{color: 'white'}}>Hello, I'm Aymen</TypeWriter>
                </h1>
                <p> <span>Full stack developer</span>  I eat, sleep and breathe React.</p>
                <a href={MyCv} download="aymen-agrebi-resume.pdf">
                    <NeonButton>Download Resume</NeonButton>
                </a>
                <a href="#contact">
                    <NeonButton>Contact Me</NeonButton>
                </a>
                <div className="socials-links">
                    <ul>
                        <li><a href="https://github.com/aymen-agrebi">
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </a></li>
                        <li><a href="https://www.linkedin.com/in/aymen-agrebi-5b2394204/">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a></li>
                        <li> <a href="">
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                        </a></li>
                        <li> <a href="https://wa.me/21627424712">
                            <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </a></li>
                        <li> <a href="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
