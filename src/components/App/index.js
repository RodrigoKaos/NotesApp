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
    return <NoteList list={this.state.list} />;
  }
}

export default App;
