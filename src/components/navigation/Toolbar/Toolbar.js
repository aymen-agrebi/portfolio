import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerMenu from '../SideDrawer/BurgerMenu/BurgerMenu';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {

    return (
        <div className={classes.Toolbar}>
            <BurgerMenu clicked={props.toggle} open={props.show} />
            <div className={classes.DesktopOnly}>
                <NavigationItems/>
            </div>
        </div>
    )
};

export default Toolbar;
