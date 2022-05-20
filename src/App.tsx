import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {VideoHero} from './components/VideoHero/VideoHero';


const App = () => (
    <div className="App">
        <Header/>
        <VideoHero/>
        <main></main>
        <footer></footer>
    </div>
);

export {App};
