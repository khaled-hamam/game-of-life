class Engine {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.currentGeneration = 0;
    this.initializeGrid();
    this.seed();
    // this.grid[5][6] = this.grid[6][7] = this.grid[7][5] = this.grid[7][6] = this.grid[7][7] = 1;
  }

  initializeGrid() {
    this.grid = [];
    for (let i = 0; i < this.height; ++i) {
      this.grid[i] = [];
      for (let j = 0; j < this.width; ++j) {
        this.grid[i][j] = 0;
      }
    }
  }

  seed() {
    for (let i = 0; i < this.height; ++i) {
      for (let j = 0; j < this.width; ++j) {
        this.grid[i][j] = Math.floor(Math.random() * 4) === 1;
      }
    }
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
