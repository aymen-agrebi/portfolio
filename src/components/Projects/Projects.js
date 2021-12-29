import React from 'react';
import Carousel from './Carousel';
import classes from './Projects.module.css';


const Projects = (props) => {
 
    return (
        <div className={classes.Projects} id="projects">
            <h2>Projects</h2>
            <Carousel />
        </div>
    );
}

export default Projects;
