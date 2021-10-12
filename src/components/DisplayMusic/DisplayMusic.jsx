import React from 'react';
import { useState } from "react";
import './DisplayMusic.css'


const DisplayMusic = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    return ( 
        <div className="container">
            <input 
                type="text" 
                placeholder="Search.." 
                className="form-control" 
                style={{maringTop: 50, marginBottom: 20, width:"40%"}} 
                onChange={(e) =>{
                    setSearchTerm(e.target.value)
                }}
                />
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Song Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Delete Song</th>
                    </tr>
                </thead>
                {props.music.filter(val=> {
                    if (searchTerm === '') {
                        return val;
                    } else if (
                        val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.album.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.release_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        val.genre.toLowerCase().includes(searchTerm.toLowerCase())
                        
                    ){
                        return val
                    }
                }).map((song => 
                    <tr><td key={song.id}>{song.title}</td>
                    <td key={song.id}>{song.artist}</td>
                    <td key={song.id}>{song.album}</td>                
                    <td key={song.id}>{song.release_date}</td>
                    <td key={song.id}>{song.genre}</td>
                    <td key={song.id}><button onClick={() => props.delete(song.id)}>Delete Song</button></td>

                    </tr>
                ))}
                
            </table>
        </div>
     );
}
 
export default DisplayMusic;