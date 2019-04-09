import React, { Component } from 'react';
import './index.css';
import NoteList from '../NoteList';
import NoteForm from '../NoteForm';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      list : [{
        text: 'Texto pqn',
        status: 'open',
      }],
      textArea: '',
    };
  }

  addItem = (event) => {
    let newList = [...this.state.list];
    let newItem = {
      text: this.state.textArea,
      status: 'open',
    };
    newList.push(newItem);
    this.setState({list: newList, textArea: ''});
    document.getElementById("txt-area").value ='';
  };

  updateTextArea = (event) => {
    this.setState({textArea: event.target.value});
  };

  render() {
    return (
      <>
        <NoteForm 
          value={this.state.textArea} 
          onClick={this.addItem} 
          onChange={this.updateTextArea} 
        />
        
        <NoteList list={this.state.list} />
      </>
    );
  }
  
}

export default App;
