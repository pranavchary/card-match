import React from 'react';

const CardFront = (props) => {
  return (
    <div className="card-front" >
      {props.children}
    </div>
  )
}

export { CardFront };
