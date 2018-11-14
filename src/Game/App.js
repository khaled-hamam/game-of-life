import React, { Component } from 'react';

import Engine from '../Engine/Engine';
import Grid from './Grid';
import Sidebar from './Sidebar';

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
    this.interval = setInterval(async () => {
      this.gameEngine.nextGeneration();
      this.setState({
        grid: this.gameEngine.grid,
        generation: this.gameEngine.currentGeneration
      });
    }, 40);
  };

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  render() {
    const { grid, generation } = this.state;
    return (
      <div className="app">
        <Sidebar generation={generation} onStart={this.start} onStop={this.stop} />
        <div className="grid-container">
          <Grid grid={grid} />
        </div>
      </div>
    );
  }
}

export default App;
