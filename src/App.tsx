import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {VideoHero} from './components/VideoHero/VideoHero';
import {AlbumPresentation} from './components/AlbumPresentation/AlbumPresentation';
import {Footer} from './components/Footer/Footer';


const App = () => (
    <div className="App">
        <header>
            <Header/>
            <VideoHero/>
        </header>

        <main>
            <AlbumPresentation/>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
);

export {App};
