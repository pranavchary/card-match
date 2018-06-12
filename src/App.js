import React, { Component } from 'react';
import './App.css';

// import {Card, CardFront, CardBack} from './components/card';
import GameScreen from './components/gamescreen/GameScreen';

class App extends Component {
  render() {
    return (
      <div>
        <GameScreen />
      </div>
    );
  }
}

export default App;
