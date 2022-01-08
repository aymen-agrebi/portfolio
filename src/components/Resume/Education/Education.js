import React from 'react';
import classes from './Education.module.css';

const Education = () => {
    return (
        <div className={classes.Education}>
            <ul>
                <li>
                    <p><span>2013-2016 : </span>
                     Applied license in electric engineering
                    </p>
                    <p><span> In : </span>
                    Institut supérieur des études technologique, Beja
                    </p>
                </li>
                <li>
                    <p><span>2018–2019 : </span>
                    DEVELOPPEUR INTEGRATEUR WEB
                    </p>
                    <p><span> In : </span>
                    3W ACADEMY, Arianna
                    </p>
                </li>
                <li>
                    <p><span>2020-2021 : </span>
                    THEME SHOPIFY DEVELOPMENT CERTIFICATION
                    </p>
                    <p><span> In : </span>
                    Shopify partner academy
                    </p>
                </li>
                <li>
                    <p><span>2021 - 2021 : </span>
                    React - The Complete Guide
                    </p>
                    <p><span> In : </span>
                    Udemy
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Education
