import React from 'react';
import './index.css';
import NoteItem from '../NoteItem';

const NoteList = props => {
  let list = props.list.map((el, index) => {    
    return <NoteItem key={index} status={el.status} text={el.text} />
  });
  return (<div>{list}</div>);
};

export default NoteList;