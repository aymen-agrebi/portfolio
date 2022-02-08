import React from 'react';
import classes from './SocialLinks.module.css'
const SocialLinks = () => {
  return (
    <div className={classes.Links}>
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
    );
};

export default SocialLinks;
