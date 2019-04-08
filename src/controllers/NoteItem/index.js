import React from 'react';
import './index.css';

const NoteItem = props => {
  console.log(props);
  return (
    <div className={props.status}>{props.text}</div>
  );
};

export default NoteItem;