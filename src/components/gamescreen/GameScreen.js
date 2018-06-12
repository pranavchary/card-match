import React, { Component } from 'react'
import './GameScreen.css';
import { Card, CardFront, CardBack } from '../card/index';

import cardlist from '../../assets/cardlist.json';
import cardImages from '../../assets/cardImages';

class GameScreen extends Component {

  renderCards() {
    return cardlist.cards.map((card, index) =>
      <Card onClick={ e => this.handleClick(e) } value={card.value} key={index} >
        <CardFront>
          <img src={cardImages[index]} alt={card.value} />
        </CardFront>
        <CardBack>
          <img src={ require('../../assets/cards/blue_back.png') } alt="card" /> 
        </CardBack>
      </Card>
    );
  }

  handleClick = (e) => {
    if(e.currentTarget.className.indexOf('clicked') === -1) {
      e.currentTarget.className = 'clicked card'
    } else {
      e.currentTarget.className = 'card'
    }
  }

  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    )
  }
}

export default GameScreen;