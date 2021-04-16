// import React from 'react';
// import './musicList.css';

// function MusicList(props){
//     return(
//         <div className="musicList-table">
//             <div className="musicList-text">
//         <tr>
//             <th>Id</th>
//             <th>Title</th>
//             <th>Album</th>
//             <th>Artist</th>
//             <th>Genre</th>
//             <th>ReleaseDate</th>
           
//         </tr>
//             </div>
//         </div>
//     );
// }

// export default MusicList;
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
render() {
    return (
        <ul>
            { this.state.listOfMusic.map(titleList => <li>{titleList.title}</li>)}
           
        </ul>
    )
}

}