import React from 'react';
import classes from './NeonButton.module.css';

const NeonButton = (props) => {
    return (
        <button onClick={props.clicked} className={classes.NeonButton} >{props.children}</button>
    )
}

export default NeonButton
