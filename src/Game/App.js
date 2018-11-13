import React, { Component } from 'react';

import Engine from '../Engine/Engine';
import Grid from './Grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = new Engine(30, 30);
    this.state = {
      grid: this.gameEngine.grid,
      generation: this.gameEngine.currentGeneration
    };
  }

  componentDidMount() {
    this.start();
  }

  start = () => {
    this.interval = setInterval(() => {
      this.gameEngine.nextGeneration();
      this.setState({
        grid: this.gameEngine.grid,
        generation: this.gameEngine.currentGeneration
      });
    }, 40);
  };

  stop = () => {
    clearInterval(this.interval);
  };

  render() {
    const { grid, generation } = this.state;
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <p>Generation: {generation}</p>
        <Grid grid={grid} />
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default App;
