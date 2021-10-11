import React, { Component } from 'react';

class MusicFilter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: []
         }
    }

    handleSubmit = () => {
        this.props.filterMusic(this.state);
        this.state.songs.includes();
        this.props.filterMusic(this.state)
    }
    render() { 
        return ( 
            <form align="center" onSubmit={this.handleSubmit}>
                <label>Song Filter: </label>
                <input class="search" type="text" />
            </form>
         );
    }
}
 
export default MusicFilter;