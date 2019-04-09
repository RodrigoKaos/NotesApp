import React from 'react';
import './index.css';

const NoteForm = props => (
    <div>
      <textarea id="txt-area" onChange={props.onChange}></textarea>
      <button onClick={props.onClick} >Save</button>
    </div>
  );

export default NoteForm;