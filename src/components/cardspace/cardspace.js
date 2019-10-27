import React, { Component } from 'react';
import { Card, CardBack, CardFront } from '../card';
import Button from '../button/Button';

import {
  allCards,
  allClubs,
  allSpades,
  allHearts,
  allDiamonds
} from '../../assets/cardObjects';
import CardBackImg from '../../assets/card-images/blue_back.png';

import './CardSpace.css';

class CardSpace extends Component {
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
    // Creates a game screen with the selected suit; by default, a game with all 52 cards is created
    switch (this.props.suit) {
      case 'clubs':
        this.createDeck(allClubs);
        break;
      case 'spades':
        this.createDeck(allSpades);
        break;
      case 'hearts':
        this.createDeck(allHearts);
        break;
      case 'diamonds':
        this.createDeck(allDiamonds);
        break;
      case 'full-deck':
        this.createDeck(allCards);
        break;
      default:
        this.createDeck(allCards);
        break;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if the state object's startTimer value changes and it changes to 'true', start the on-screen timer
    if (prevState.startTimer !== this.state.startTimer
      && this.state.startTimer === true) {
      this.timer = setInterval(() => { this.ms++ }, 1)
    }
    // similarly, if startTimer changes to false, stop the timer and calculate the number of points for the time spent playing the game
    if (prevState.startTimer !== this.state.startTimer
      && this.state.startTimer === false) {
      clearInterval(this.timer)
      this.timer = null;
      const points = Math.ceil(1000000 / this.ms);
      this.setState(prevState => ({
        score: prevState.score + points
      }), () => { this.ms = 0 })
    }
  }

  componentWillUnmount() {
    // make sure to clear the timer when leaving the game, if it has not yet been done
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  // handles the event when a card has been clicked
  handleClick = i => {
    // checking if any cards have been flipped; if not, flip the clicked card, enable clicking of a second card, and start the timer
    if (this.state.flipped.length === 0) {
      this.setState({
        flipped: [i],
        disabled: false,
        startTimer: true
      })
    } else {
      // if the same exact card has not been clicked twice, flip the second card as well
      if (!this.clickedTwice(i)) {
        this.setState(prevState => ({
          flipped: [prevState.flipped[0], i]
        }), () => {
          // callback function
          // checks if the two flipped cards are a match
          if (this.checkMatch(i)) {
            // cards match, mark them as solved and do not flip them back to their face down positions. Clear the flipped card array and stop the timer so that the user's score is not lowered while they are not looking for a match
            this.setState(prevState => ({
              solved: [...prevState.solved, prevState.flipped[0], i],
              disabled: false,
              flipped: [],
              startTimer: false
            }))
          } else {
            // cards do not match, disable any clicking for 1.5 seconds and then flip both cards back to their face down positions
            this.setState({ disabled: true })
            setTimeout(() => {
              this.setState({ disabled: false, flipped: [] })
            }, 1500)
          }
        })
      }
    }
  }

  // checks if an already selected card has been clicked again
  clickedTwice = (index) => this.state.flipped.includes(index)
  // checks if two cards that are flipped over have equal value
  checkMatch = (index) => this.state.cards[this.state.flipped[0]].value === this.state.cards[index].value

  // using the suit selected, make a copy of each card in the suit. Then, randomly insert card values into the array that will be used to render on-screen and update the component state
  createDeck = (cards) => {
    const doubleArray = cards.concat(cards);
    var renderArray = []
    for (let i = doubleArray.length - 1; i >= 0; i--) {
      let ind = Math.floor(Math.random() * (i + 1));
      renderArray = renderArray.concat(doubleArray.splice(ind,1));
    }
    this.setState({ cards: renderArray })
  }

  // reset the entire game to default values
  resetBoard = () => {
    this.setState({
      cards: [],
      flipped: [],
      solved: [],
      disabled: false,
      startTimer: false,
      score: 0
    }, () => {
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.ms = 0;
      switch (this.props.suit) {
        case 'clubs':
          this.createDeck(allClubs);
          break;
        case 'spades':
          this.createDeck(allSpades);
          break;
        case 'hearts':
          this.createDeck(allHearts);
          break;
        case 'diamonds':
          this.createDeck(allDiamonds);
          break;
        case 'full-deck':
          this.createDeck(allCards);
          break;
        default:
          this.createDeck(allCards);
          break;
      }
    })
  }

  // maps through the array of duplicated card values and renders images of facedown cards for each value in the array
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
      {/* when a card has been matched successfully, change the opacity of those images to 0.3 to indicate a match */}
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
    return (
      <div className='cardspace'>
        <div className='control-box'>
          <Button
            text='Reset'
            onClick={() => this.resetBoard()}
          />
          <div className='score'>Score: {this.state.score}</div>
          <Button
            text='New Deck'
            color='#f1c40f'
            onClick={() => this.props.resetSuit()}
          />
        </div>
        <div className='cardgroup'>
          {this.renderCards(this.state.cards)}
        </div>
      </div>
    );
  }

}

export default CardSpace;
