import React from 'react';
import axios from 'axios';
import './musicList.css';

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
render() {
    return (
       
        <table className="tableHead">
        <tr><th>Id</th><th>Title</th><th>Album</th><th>Artist</th><th>Genre</th><th>ReleaseDate</th></tr>
           { this.state.listOfMusic.map(item => <tr><td>{item.id}</td><td>{item.title}</td><td>{item.album}</td><td>{item.artist}</td>
            <td>{item.genre}</td><td>{item.releaseDate}</td></tr>)}
        <tr>
        </tr>
        </table>
    )
}  
}     


/* { this.state.listOfMusic.map(item => <tr><td>{item.id}</td><td>{item.title}</td></tr>)} */
/*{ this.state.listOfMusic.map(item => <TableRow song={item}/>)}
 { this.state.listOfMusic.map(item => <li>{item.title}</li>)}
{ this.state.listOfMusic.map(albumList => <li>{albumList.album}</li>)}
{ this.state.listOfMusic.map(artistList => <li>{artistList.artist}</li>)}
{ this.state.listOfMusic.map(genre => <li>{genre.genre}</li>)}
{ this.state.listOfMusic.map(date => <li>{date.releaseDate}</li>)} */

