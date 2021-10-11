import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic/DisplayMusic';
import CreateSongForm from './components/CreateSongForm/CreateSongForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      song: []
     }
  }

  componentDidMount(){    
    this.getAllSongs();
  }

  getAllSongs = async () =>{
    try{
      let response = await axios.get('http://127.0.0.1:8000/library/');
      this.setState({
        song: response.data
      })}
    catch (ex) {
      console.log('Error in get songs API call!', ex)
    }
  }

  createSong = async (newSong) => {
    try {
      let response = await axios.post('http://127.0.0.1:8000/library/', newSong);
      let tempSong = this.state.song;
      tempSong.push(response.data);
    }
    catch (ex) {
      console.log('Error in create song API call', ex)
    }
  }

  deleteSong = async (song_id) => {
    debugger;
    try {
      let response = await axios.delete('http://127.0.0.1:8000/library/' + song_id + '/');
      this.getAllSongs();
    }
    catch (ex) {
      console.log('Error in delete song API call')
    }
  }

  filterMusic = async () => {
    try {
      let response = await axios.get
    }
  }

  render() { 
    return (
      <div>
        <div>
        <h1 class="App-header">Music Library</h1>        
        <DisplayMusic music={this.state.song} delete={this.deleteSong}/>
        
        <br />
        </div>
        <div>
        
        <CreateSongForm createSong={this.createSong} />
        </div>    
      
      </div> 
     );
  }
}
 
export default App;
