import React, { Component } from 'react';
import TravManLogo from './resources/TravManLogo.png';
import './App.css';
import Game from "./components/Game.js"
import StartingPage from "./components/StartingPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameRunning: false
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={TravManLogo} className="App-logo" alt="TravManlogo" />
          <h1 className="App-title">A day at the races</h1>
        </header>
        <p className="App-intro">
          It's time to get <code>D R U N K</code>
        </p>
          <p>
              -------------------------------------------------------------
          </p>


          <StartingPage/>
          <br/>
          <Game />
      </div>

    );
  }
}


export default App;
