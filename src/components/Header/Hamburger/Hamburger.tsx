import React, {useState} from 'react';

import classes from './Hamburger.module.css';

const Hamburger = () => {
    const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);

    const hamburgerClickHandler = () => {
        setHamburgerActive(prev => !prev);
    }

    return <>
        <button className={`${classes.Hamburger} ${hamburgerActive && classes['Hamburger--active']}`}
                onClick={hamburgerClickHandler}>
            <span className={classes['Hamburger__box']}>
                <span className={classes['Hamburger__inner']}></span>
            </span>
        </button>
        {hamburgerActive && <div className={classes.navigation}>
            <nav>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/">music</a></li>
                    <li><a href="/">license music</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">gallery</a></li>
                    <li><a href="/">shop & merge</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
            </nav>
        </div>}
    </>;
}

export {Hamburger};