class Engine {
  constructor(width, height, difficulty) {
    this.width = width;
    this.height = height;
    this.difficulty = difficulty || 4;
    this.clearGrid();
  }

  clearGrid() {
    this.currentGeneration = 0;
    this.grid = [];
    for (let i = 0; i < this.height; ++i) {
      this.grid[i] = [];
      for (let j = 0; j < this.width; ++j) {
        this.grid[i][j] = 0;
      }
    }
    return this.grid;
  }

  seed() {
    this.currentGeneration = 0;
    for (let i = 0; i < this.height; ++i) {
      for (let j = 0; j < this.width; ++j) {
        this.grid[i][j] = Math.floor(Math.random() * this.difficulty) === 1;
      }
    }
    return this.grid;
  }

  nextGeneration() {
    const newGrid = [];
    for (let i = 0; i < this.height; ++i) {
      newGrid[i] = [];
      for (let j = 0; j < this.width; ++j) {
        const neighborsCount = this.getNeighborsCount(i, j);
        newGrid[i][j] = +this.nextState(this.grid[i][j], neighborsCount);
      }
    }
    this.grid = newGrid;
    this.currentGeneration++;
    return this.grid;
  }

  getNeighborsCount(i, j) {
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

    let aliveCounter = 0;
    for (let move = 0; move < 8; ++move) {
      if (this.isValidMove(i + dx[move], j + dy[move])) {
        aliveCounter += this.grid[i + dx[move]][j + dy[move]];
      }
    }

    return aliveCounter;
  }

  isValidMove(i, j) {
    return i >= 0 && i < this.height && j >= 0 && j < this.width;
  }

  nextState(currentState, neighborsCount) {
    if (currentState && neighborsCount >= 2 && neighborsCount <= 3) {
      return true;
    } else if (!currentState && neighborsCount === 3) {
      return true;
    } else {
      return false;
    }
  }
}

export default Engine;
