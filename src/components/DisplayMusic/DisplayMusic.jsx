import React from 'react';
import './DisplayMusic.css'

const DisplayMusic = (props) => {
    return ( 
        <table>
            <tr>
                <th>Song Title</th>
                <th>Artist</th>
                <th>Genre</th>
                <th>Release Date</th>
            </tr>
            
            {props.music.map((song => 
                <tr><td key={song.id}>{song.title}</td>
                <td key={song.id}>{song.artist}</td>
                <td key={song.id}>{song.album}</td>                
                <td key={song.id}>{song.release_date}</td>

                </tr>
            ))}
            
        </table>
     );
}
 
export default DisplayMusic;