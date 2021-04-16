import React from 'react';
import './navigationBar.css';



function NavigationBar(props) {
    return (
        <div className="navBar">
          <a href="Home"> Home</a>
          <a href="musicList"> Music</a>
        <div className="frontImage"> 
        <div classname="frontPageText" >
            <h1>Deepa's Music Library</h1>
        </div>
        </div>
        </div>

);
}


export default NavigationBar;    