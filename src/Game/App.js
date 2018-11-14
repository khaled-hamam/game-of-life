import React, { Component } from 'react';

import Engine from '../Engine/Engine';
import Grid from './Grid';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = new Engine(50, 50);
    this.state = {
      grid: this.gameEngine.seed(),
      generation: this.gameEngine.currentGeneration
    };
  }

  start = () => {
    if (this.interval) return;
    this.interval = setInterval(async () => {
      if (this.isLoading) return;
      this.isLoading = true;
      await this.setState({
        grid: this.gameEngine.nextGeneration(),
        generation: this.gameEngine.currentGeneration
      });
      this.isLoading = false;
    }, 50);
  };

  stop = () => {
    clearInterval(this.interval);
    this.interval = null;
  };

  toggle = (i, j) => {
    this.gameEngine.grid[i][j] = !this.gameEngine.grid[i][j];
    this.setState({ grid: this.gameEngine.grid });
  };

  seed = () => {
    this.setState({ grid: this.gameEngine.seed(), generation: this.gameEngine.currentGeneration });
  };

  clear = () => {
    this.setState({
      grid: this.gameEngine.clearGrid(),
      generation: this.gameEngine.currentGeneration
    });
  };

  render() {
    const { grid, generation } = this.state;
    return (
      <div className="app">
        <Sidebar
          generation={generation}
          onStart={this.start}
          onStop={this.stop}
          onSeed={this.seed}
          onClear={this.clear}
        />
        <div className="grid-container">
          <Grid grid={grid} onToggle={this.toggle} />
        </div>
      </div>
    );
  }
}

export default App;
