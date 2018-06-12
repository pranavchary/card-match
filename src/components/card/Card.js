import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card" onClick={props.onClick} value={props.value}>
      {props.children}
    </div>
  )
}

export {Card};