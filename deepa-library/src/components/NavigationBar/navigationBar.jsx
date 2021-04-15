import React from 'react';
import './navigationBar.css';

function NavigationBar(props) {
    return (
        <div className="navBar">
          <a class="navBar-text" href="components/Musiclist/musicList.jsx"> MusicList</a>
        <div className="frontImage"> 
        <div className="text">
            <h1>Deepa's Music Library</h1>
        </div> 
        </div>
        </div> 

    );
}

export default NavigationBar;    