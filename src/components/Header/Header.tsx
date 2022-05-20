import React from 'react';

import classes from './Header.module.css';
import eagleLogo from '../../assets/Images/eagle-logo.png';
import {Hamburger} from './Hamburger/Hamburger';

const Header = () => {
    return (
        <header className={classes.Header}>

            <nav>
                <ul className={classes['ul-center']}>
                    <li><a href="/">home</a></li>
                    <li><a href="/">music</a></li>
                    <li><a href="/">license music</a></li>
                    <li><a href="/">about</a></li>
                    <li className={classes['logo-li']}>
                        <a href="/" className={classes['logo-a']}>
                            <img
                                src={eagleLogo}
                                alt="Eagle logo."
                                className={classes['logo-img']}/>
                        </a>
                    </li>
                    <li><a href="/">gallery</a></li>
                    <li><a href="/">shop & merge</a></li>
                    <li><a href="/">contact</a></li>
                </ul>

                <div className={classes['logo-mobile_wrapper']}>
                    <a href="/">
                        <img
                            src={eagleLogo}
                            alt="Eagle logo."
                            className={classes['logo-img']}/>
                    </a>
                </div>

            </nav>
            <Hamburger/>
        </header>
    );
}

export {Header};