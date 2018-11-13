import React from 'react';
import Block from './Block';

const Grid = ({ grid }) => (
  <div className="container game-grid">
    {grid.map((row, rowIndex) => (
      <div key={rowIndex} className="game-row">
        {row.map((cell, colIndex) => (
          <Block key={colIndex} state={cell} />
        ))}
      </div>
    ))}
  </div>
);

export default Grid;
