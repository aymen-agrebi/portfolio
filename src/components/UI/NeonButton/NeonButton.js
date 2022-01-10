import React from 'react';
import classes from './NeonButton.module.css';

const NeonButton = (props) => {
    return (
        <button onClick={props.clicked} className={classes.NeonButton} type={props.buttonType}>{props.children}</button>
    )
}
export default NeonButton
