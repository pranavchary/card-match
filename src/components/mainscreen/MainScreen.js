import React, { Component, Fragment } from 'react'
import CardSpace from '../cardspace/CardSpace';

import Spade from '../../assets/card-images/AS.png'
import Club from '../../assets/card-images/AC.png'
import Heart from '../../assets/card-images/AH.png'
import Diamond from '../../assets/card-images/AD.png'

import './MainScreen.css';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suit: ''
    }
  }

  selectDeck = (e) => {
    const suit = e.currentTarget.id
    this.setState({ suit })
  }

  resetSuit = () => {
    this.setState({ suit: '' })
  }

  displayScreen = () => {
    if (this.state.suit === '') {
      return (
        <Fragment>
          <div className='main-screen-text'>
            <h3>Please select a suit of cards to play the game with</h3>
          </div>
          <div className='suit-selection'>
            <div
              id='spades'
              onClick={e => this.selectDeck(e)}
            >
              <img src={Spade} alt='ace of spades' title='Spades'/>
            </div>
            <div
              id='clubs'
              onClick={e => this.selectDeck(e)}
            >
              <img src={Club} alt='ace of clubs' title='Clubs' />
            </div>
            <div
              id='hearts'
              onClick={e => this.selectDeck(e)}
            >
              <img src={Heart} alt='ace of hearts' title='Hearts' />
            </div>
            <div
              id='diamonds'
              onClick={e => this.selectDeck(e)}
            >
              <img src={Diamond} alt='ace of diamonds' title='Diamonds' />
            </div>
          </div>
          <div
            className='main-screen-text'
            id='full-deck'
            onClick={e => this.selectDeck(e)}
          >
            <span>Or click here to play with all suits</span>
          </div>
        </Fragment>
      )
    } else {
      return <CardSpace suit={this.state.suit} resetSuit={this.resetSuit} />
    }
  }

  render() {
    return (
      <div className='main-screen'>
        {this.displayScreen()}
      </div>
    )
  }
}

export default MainScreen;
