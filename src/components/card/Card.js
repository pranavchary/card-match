import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = (props) => {
  return (
    <div
      className={props.flipped || props.solved ? 'clicked card' : 'card'}
      onClick={(i) => props.disabled ? null : props.onClick(i)}
      value={props.value}
      style={{
        height: `${props.height}px`,
        width: `${props.height * 2 / 3}px`
      }}
    >
      {props.children}
    </div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired
}

export { Card };
