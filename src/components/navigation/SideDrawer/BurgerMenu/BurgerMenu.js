import React from 'react'
import classes from './BurgerMenu.module.css';

const BurgerMenu = (props) => {
    let attachedClasses = [classes.BurgerMenu];
    if (props.open) {
        attachedClasses = [classes.BurgerMenu, classes.Toggle];
    }
    return (
        <div className={attachedClasses.join(' ')} onClick={props.clicked}>
            <div className={classes.Line1}></div>
            <div className={classes.Line2}></div>
            <div className={classes.Line3}></div>
        </div>
    )
}

export default BurgerMenu
