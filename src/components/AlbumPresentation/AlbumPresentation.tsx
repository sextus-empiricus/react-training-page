import React from 'react';

import classes from './AlbumPresentation.module.css';

import albumImg from '../../assets/Images/album.jpg';

interface Props {

}

const AlbumPresentation = (props: Props) => {

    return (

        <div className={classes.AlbumPresentation}>

            <div className={classes['title-wrapper']}>
                <h1><span>New</span> Song Releases</h1>
                <h2>Discover the new songs below</h2>
            </div>

            <div className={classes.content}>

                <div className={classes.texture}/>

                <div className={classes['album-image_wrapper']}>
                    <img src={albumImg} alt="Album cover."/>
                </div>

                <div className={classes['track-list_wrapper']}>
                    <b>Album: Skapanir</b>
                    <p>Tracklist:</p>
                    <p>01. Intro </p>
                    <p>02. Kala</p>
                    <p>03. Blotjarl</p>
                    <p>04. Aesir (ft Heldom)</p>
                    <p>05. Forndagr</p>
                    <p>06. Faldne</p>
                    <p>07. Skapanir</p>
                    <p>08. Vetrnátta Blot</p>
                    <p>09. Ragnakamp</p>
                    <p>10. Reida</p>
                    <p>11. Blodfest (ft. Heldom)</p>
                    <p>12. Hefna</p>

                    <div className={classes['get-album_wrapper']}>
                        <p>Get the album here:</p>
                        <div className={classes['button-get-album']}>
                            <a href="#">GET THE ALBUM HERE</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export {AlbumPresentation}