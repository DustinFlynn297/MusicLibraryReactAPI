import React from 'react';
import { useState } from "react";
import './DisplayMusic.css'
import UpdateSong from '../UpdateSong/UpdateSong';


const DisplayMusic = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    return ( 
        <div class="table-responsive">
            <input 
                type="text" 
                placeholder="Search.." 
                className="form-control" 
                style={{maringTop: 50, marginBottom: 20, width:"40%"}} 
                onChange={(e) =>{
                    setSearchTerm(e.target.value)
                }}
                />
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Song Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Release Date</th>
                        <th>Genre</th>
                        <th>Delete Song</th>
                        <th>Edit Song</th>
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
                    <tr key={song.id}>
                    <td >{song.title}</td>
                    <td >{song.artist}</td>
                    <td >{song.album}</td>                
                    <td >{song.release_date}</td>
                    <td >{song.genre}</td>
                    <td><button className='btn btn-md btn-outline-dark bg-light' onClick={() => props.delete(song.id)}>Delete Song</button></td>
                    <td><UpdateSong song={song} updateSong={song.updateSong} /></td>

                    </tr>
                ))}
                
            </table>
        </div>
     );
}
 
export default DisplayMusic;