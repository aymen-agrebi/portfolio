import React from 'react'
import classes from '../Education/Education.module.css'

const Experience = () => {
    return (
       
        <div className={classes.Education}>
            <ul>
                <li>
                    <p><span>Jan 2018 – today : </span>
                    Front end developer
                    </p>
                    <p><span> In : </span>
                    Freelance
                    </p>
                    <p>
                        <span>Domain : </span>
                        <ul>
                            <li>MongoDB/Express/React/Node</li>
                            <li>Laravel/Vue.js</li>
                            <li>Shopify theme developement</li>
                            <li>WordPress / Woocommerce</li>
                        </ul>
                    </p>
                </li>
                <li>
                    <p><span>SEP 2016 – OCT 2017 : </span>
                    Technician
                    </p>
                    <p><span> In : </span>
                    STAR TRAVAUX

                    </p>
                    <p>
                        <span>Domain : </span>
                        Building electricity
                    </p>
                </li>
            </ul>    
        </div>
    )
}

export default Experience
