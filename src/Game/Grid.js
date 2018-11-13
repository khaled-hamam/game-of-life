import React from 'react';
import Cell from './Cell';
import { CELL_HEIGHT } from '../config';

const Grid = ({ grid }) => (
  <svg width={grid[0].length * CELL_HEIGHT} height={grid.length * CELL_HEIGHT}>
    {grid.map((row, rowIndex) =>
      row.map((state, colIndex) => (
        <Cell key={`${rowIndex}, ${colIndex}`} x={colIndex} y={rowIndex} state={state} />
      ))
    )}
  </svg>
);

export default Grid;
