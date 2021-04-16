import React from 'react';
import axios from 'axios';

export default class MusicList extends React.Component {
    state= {
        listOfMusic: []
    }

componentDidMount(){
    axios.get('http://www.devcodecampmusiclibrary.com/api/music')
    .then(res => {
        const listOfMusic = res.data;
        this.setState({listOfMusic});
    })
        
}

}


