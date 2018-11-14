import React from 'react';

const Sidebar = ({ generation, onStart, onStop }) => (
  <div className="sidebar h100">
    <div className="header">
      <h1>Game of Life</h1>
      <p>
        Generation: <span class="badge badge-pill badge-dark">{generation}</span>
      </p>
    </div>
    <div className="about">
      <blockquote class="blockquote">
        <p>
          The Game of Life, also known simply as Life, is a cellular automaton devised by the
          British mathematician John Horton Conway in 1970. <br /> <br />
          The game is a zero-player game, meaning that its evolution is determined by its initial
          state, requiring no further input. One interacts with the Game of Life by creating an
          initial configuration and observing how it evolves. <br /> <br />
          <strong>Rules:</strong>
          <ol>
            <li>
              Any live cell with fewer than two live neighbors dies, as if by underpopulation.
            </li>
            <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
            <li>
              Any live cell with more than three live neighbors dies, as if by overpopulation.
            </li>
            <li>
              Any dead cell with exactly three live neighbors becomes a live cell, as if by
              reproduction.
            </li>
          </ol>
        </p>
      </blockquote>
    </div>
    <div className="controls">
      <button className="btn btn-lg btn-outline-secondary" onClick={onStart}>
        Start
      </button>
      <button className="btn btn-lg btn-outline-secondary" onClick={onStop}>
        Stop
      </button>
      <button className="btn btn-lg btn-outline-secondary" onClick={onStop}>
        Clear
      </button>
      <button className="btn btn-lg btn-outline-secondary" onClick={onStop}>
        Seed
      </button>
    </div>
    <div className="footer">
      <p>
        Coded with{' '}
        <span role="img" aria-label="love">
          ❤️
        </span>{' '}
        by Khaled Mohamed
      </p>
    </div>
  </div>
);

export default Sidebar;
