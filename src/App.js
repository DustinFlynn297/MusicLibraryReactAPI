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

  updateSong = async (id, song) => {
    const path = 'http://127.0.0.1:8000/library/' + id + '/'
    await axios.put(path, song)
    .then(res => {
      this.getAllSongs();
      })
    .catch(err => {
      console.log(err);
    });
  }

  deleteSong = async (song_id) => {
    debugger;
    try {
      await axios.delete('http://127.0.0.1:8000/library/' + song_id + '/');
      this.getAllSongs();
    }
    catch (ex) {
      console.log('Error in delete song API call')
    }
  }

 

  render() { 
    return (
      <div className="container-fluid mx-auto app-bg">
        <div className="row">        
        <h1 class="h1 text-center bg-black">Music Library</h1>        
        </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'>          
          <DisplayMusic music={this.state.song} delete={this.deleteSong} updateSong={this.updateSong}/>        
        </div>
        <div className='col-1'></div>
        </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-10'></div>
          <CreateSongForm createSong={this.createSong} />
          </div>
          <div className='col-1'></div>              
      </div> 
     );
  }
}
 
export default App;
