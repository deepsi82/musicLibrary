import React, { Component } from 'react';
import NavigationBar from './NavigationBar/navigationBar';
import MusicList from './MusicList/musicList';

class App extends Component {
    state = { 

    }
    render() {
        return (
            <div className="container-fluid">
            <NavigationBar />
            <MusicList />
            </div>
        );
    }
}

export default App;