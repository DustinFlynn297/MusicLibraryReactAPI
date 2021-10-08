import React from 'react';
import './DisplayMusic.css'

const DisplayMusic = (props) => {
    return ( 
        <table>
            <tr>
                <th>Song Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            
            {props.music.map((song => 
                <tr><td key={song.id}>{song.title}</td>
                <td key={song.id}>{song.artist}</td>
                <td key={song.id}>{song.album}</td>                
                <td key={song.id}>{song.release_date}</td>
                <td key={song.id}>{song.genre}</td>

                </tr>
            ))}
            
        </table>
     );
}
 
export default DisplayMusic;