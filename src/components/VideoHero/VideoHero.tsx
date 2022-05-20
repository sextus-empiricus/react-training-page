import React from 'react';
import heroVideo from '../../assets/Video/camp_fire.mp4';

import classes from './VideoHero.module.css';

const VideoHero = () => {
    return (
        <div className={classes.VideoHero}>
            <video src={heroVideo}
                   autoPlay={true}
                   muted={true}
                   loop={true}/>
        </div>
    );
}

export {VideoHero};