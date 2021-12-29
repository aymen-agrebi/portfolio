import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';

const SideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer];
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    } else {
        attachedClasses = [classes.SideDrawer, classes.Closed]
    }
    
    return (
        <React.Fragment>
            <Backdrop open={props.show} closed={props.closed} />
            <div className={attachedClasses.join(' ')} >
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer
