import React from 'react';
import TypeWriter from 'react-typewriter';
import NeonButton from '../UI/NeonButton/NeonButton';
import classes from './Home.module.css'
import DevBoi from '../UI/DevBoi/DevBoi';
import MyCv from '../../assets/aymen-agrebi-resume.pdf';
import SocialLinks from './SocialLinks/SocialLinks';
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
                <SocialLinks/>
            </div>
        </div>
    )
}

export default Home
