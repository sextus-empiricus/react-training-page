import React from 'react';

import classes from './Header.module.css';
import eagleLogo from '../../assets/Images/eagle-logo.png';

const Header = () => {

    return (
        <header className={classes.Header}>
            <nav>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/">music</a></li>
                    <li><a href="/">license music</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">
                        <img
                            src={eagleLogo}
                            alt="Eagle logo."
                            className={classes.logo}/>
                    </a>
                    </li>
                    <li><a href="/">gallery</a></li>
                    <li><a href="/">shop & merge</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
            </nav>

            <div>

            </div>
        </header>
    );
}

export {Header};