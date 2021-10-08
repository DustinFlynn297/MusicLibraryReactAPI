import React, { Component } from 'react';

class DeleteSong extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleDelete = (event) => {        
        this.props.delete(this.state)
    }
    render() { 
        return ( 
            <form onSubmit={this.handleDelete}>
                <button type="submit">Delete Song</button>
            </form>
         );
    }
}
 
export default DeleteSong;