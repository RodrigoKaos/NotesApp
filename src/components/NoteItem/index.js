import React from 'react';
import './index.css';

const NoteItem = props => <li className={props.status}>{props.text}</li>;

export default NoteItem;