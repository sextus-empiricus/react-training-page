import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faYoutube, faSpotify, faInstagram} from '@fortawesome/free-brands-svg-icons'

import classes from './Footer.module.css';

interface Props {

}

const Footer = (props: Props) => {

    return (

        <div className={classes.Footer}>
            <div className={classes.wrapper}>

                <div className={classes['section-1']}>
                    <ul>
                        <li>
                            <a href="#"> <FontAwesomeIcon icon={faFacebookF}/> </a>
                        </li>

                        <li>
                            <a href="#"> <FontAwesomeIcon icon={faYoutube}/></a>
                        </li>

                        <li>
                            <a href="#"> <FontAwesomeIcon icon={faSpotify}/></a>
                        </li>

                        <li>
                            <a href="#"> <FontAwesomeIcon icon={faInstagram}/></a>
                        </li>
                        <li>
                            <a href="#"> <FontAwesomeIcon icon={faEnvelope}/> </a>
                        </li>
                    </ul>
                </div>


                <div className={classes['section-2']}>
                    <h3>extra links</h3>
                    <a href="#">Old Norse dictionary</a><span> | </span>
                    <a href="#">Watch on Odysee</a><span> | </span>
                    <a href="#">Watch on LBRY</a><span> | </span>
                </div>

                <div className={classes['section-3']}></div>

                <div className={classes['section-4']}>
                    <h3>FIMBUL RADIO LINKS</h3>
                    <a href="#">Fimbul Radio (Song Request)</a><span> | </span>
                    <a href="#">Ranking & Leaderboards</a><span> | </span>
                    <a href="#">Fimbul Radio (YouTube)</a><span> | </span>
                </div>
            </div>

            <p>© 2021 Danheim - ALL MATERIAL COPYRIGHTED. WORLDWIDE COPYRIGHT SECURE</p>
        </div>

    );
}

export {Footer};