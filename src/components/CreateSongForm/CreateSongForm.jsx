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
            <div class="container">
                <div class="col-xs-6 col-xs-offset-3">
                    <form class="form-horizontal" onSubmit={this.handleSubmit} >
                        <div class="form-group">
                            <label for="titleField" class="col-xs-2">Song Title</label> 
                            <div class="col-xs-10">               
                                <input name='title' onChange={this.handleChange} id="titleField" value={this.state.title} class="form-control" placeholder="Song Name"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="artistField" class="col-xs-2">Artist</label>
                            <div class="col-xs-10"> 
                            <input name='artist' onChange={this.handleChange} id="artistField" class="form-control" value={this.state.artist} placeholder="Artist"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="albumField" class="col-xs-2">Album</label>
                            <div class="col-xs-10"> 
                            <input name='album' onChange={this.handleChange} id="albumField" class="form-control"value={this.state.album} placeholder="Album" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="genreField" class="col-xs-2">Genre</label>
                            <div class="col-xs-10"> 
                            <input name='genre' id="genreField" class="form-control" onChange={this.handleChange} value={this.state.genre} placeholder="Genre" />
                            </div>
                        </div>
                        <div>
                            <label for="releaseDateField" class="col-xs-2">Release Date</label>
                            <div class="col-xs-10"> 
                            <input name='release_date' id="releaseDateField" class="form-control" type="date" onChange={this.handleChange} value={this.state.release_date}/>     
                            </div>
                        </div>
                                                                
                        <div class="col-xs-offset-2">
                            <button class="btn btn-secondary" type="submit"> Add Song</button>
                        </div>
                        
                    
                    
                    
                    </form>
                </div>
            </div>   
         );
    }
}
 
export default CreateSongForm;