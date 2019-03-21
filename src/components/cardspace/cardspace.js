import React, { Component } from 'react';
import { Card, CardBack, CardFront } from '../card';

import { allSpades } from '../../assets/cardObjects';
import CardBackImg from '../../assets/card-images/blue_back.png';

import './cardspace.css';

class Cardspace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      flipped: [],
      solved: [],
      disabled: false,
      startTimer: false,
      score: 0
    }

    this.timer = null;
    this.ms = 0;
  }

  componentDidMount() {
    this.createDeck(allSpades);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.startTimer !== this.state.startTimer
      && this.state.startTimer === true) {
      console.log('start timer')
      this.timer = setInterval(() => { this.ms++ }, 1)
    }
    if (prevState.startTimer !== this.state.startTimer
      && this.state.startTimer === false) {
      console.log('stop timer');
      clearInterval(this.timer)
      this.setState(prevState => ({
        score: prevState.score + this.ms
      }), () => { this.ms = 0 })
    }
  }

  handleClick = i => {
    if (this.state.flipped.length === 0) {
      this.setState({
        flipped: [i],
        disabled: false,
        startTimer: true
      })
    } else {
      if (!this.clickedTwice(i)) {
        this.setState(prevState => ({
          flipped: [prevState.flipped[0], i]
        }), () => {
          if (this.checkMatch(i)) {
            this.setState(prevState => ({
              solved: [...prevState.solved, prevState.flipped[0], i],
              disabled: false,
              flipped: [],
              startTimer: false
            }))
          } else {
            this.setState({ disabled: true })
            setTimeout(() => {
              this.setState({ disabled: false, flipped: [] })
            }, 1500)
          }
        })
      }
    }
  }

  clickedTwice = (index) => this.state.flipped.includes(index)
  checkMatch = (index) => this.state.cards[this.state.flipped[0]].value === this.state.cards[index].value

  createDeck = (cards) => {
    const doubleArray = cards.concat(cards);
    var renderArray = []
    for (let i = doubleArray.length - 1; i >= 0; i--) {
      let ind = Math.floor(Math.random() * (i + 1));
      renderArray = renderArray.concat(doubleArray.splice(ind,1));
    }
    this.setState({ cards: renderArray })
  }

  renderCards = (cards) => cards.map((card, i) =>
    <Card
      value={card.value}
      key={card.value + i}
      onClick={() => this.handleClick(i)}
      flipped={this.state.flipped.includes(i)}
      disabled={this.state.disabled}
      solved={this.state.solved.includes(i)}
      height={150}
    >
      <CardFront>
        <img
          src={card.image}
          alt={card.value}
          style={this.state.solved.includes(i) ? { opacity: '0.3' } : null}
        />
      </CardFront>
      <CardBack>
        <img src={CardBackImg} alt="card" />
      </CardBack>
    </Card>
  );

  render() {
    console.log(this.ms)
    return (
      <div className='cardspace'>
        <div className='control-box'>
          Score: {this.state.score}
        </div>
        <div className='cardgroup'>
          {this.renderCards(this.state.cards)}
        </div>
      </div>
    );
  }

}

export default Cardspace;
