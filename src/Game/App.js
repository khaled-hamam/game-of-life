import React, { Component } from 'react';

import Engine from '../Engine/Engine';
import Grid from './Grid';

// TODO: Clear Grid Button
class App extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = new Engine(50, 50);
    this.state = {
      grid: this.gameEngine.grid,
      generation: this.gameEngine.currentGeneration
    };
  }

  componentDidMount() {
    // this.start();
  }

  start = () => {
    if (this.interval) return;
    this.interval = setInterval(() => {
      this.gameEngine.nextGeneration();
      this.setState({
        grid: this.gameEngine.grid,
        generation: this.gameEngine.currentGeneration
      });
    }, 100);
  };

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  render() {
    const { grid, generation } = this.state;
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <p>Generation: {generation}</p>
        <Grid grid={grid} />
        <button className="btn btn-primary" onClick={this.start}>
          Start
        </button>
        <button className="btn btn-primary" onClick={this.stop}>
          Stop
        </button>
      </div>
    );
  }
}

export default App;
