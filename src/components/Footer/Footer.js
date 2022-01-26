import React from 'react'
import SocialLinks from '../Home/SocialLinks/SocialLinks'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className={classes.UpIcon}>
                <a href="#home"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>
            </div>
            <div><p>Made by Aymen Agrebi</p></div>
            <SocialLinks/>
            <div><p>Copyright &copy; 2022.</p></div>
        </div>
    )
}

export default Footer
