import React, { Component } from 'react';
import './CreateSongForm.css'

class CreateSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            genre: '',
            release_date: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit = (event) => {        
        this.props.createSong(this.state)
    }
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label>Song Title: </label>
                <input name='title' onChange={this.handleChange} value={this.state.title} /><br />
                <label>Artist Name: </label>
                <input name='artist' onChange={this.handleChange} value={this.state.artist} /><br />
                <label>Album Name: </label>
                <input name='album' onChange={this.handleChange} value={this.state.album} /><br />
                <label>Genre: </label>
                <input name='genre' onChange={this.handleChange} value={this.state.genre} /><br />
                <label>Release Date: </label>
                <input name='release_date' type="date" onChange={this.handleChange} value={this.state.release_date}/><br />
                <button type="submit"> Add Song</button>
            </form>
         );
    }
}
 
export default CreateSongForm;