import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  const buttonStyle = {
    backgroundColor: props.color,
    height: props.height ? `${props.height}px` : 'inherit',
    width: props.width ? `${props.width}px` : 'inherit',
    borderRadius: `${props.radius}px`,
    boxShadow: '1px 2px 3px black'
  }
  return (
    <div
      className='button'
      onClick={props.onClick}
      style={buttonStyle}
    >
      {props.text}
    </div>
  );
}

Button.defaultProps = {
  color: '#2ecc71',
  radius: 10,
  text: 'Button'
}

Button.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  radius: PropTypes.number,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button;
