import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      list : [{
        text: 'Texto pqn',
        status: 'incomplete',
      }],
    };
  }
  render() {
    return (
      <div>
        <NoteList list={this.state.list} />
      </div>
    );
  }
}

export default App;
