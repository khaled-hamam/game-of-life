import React from 'react';
import { ALIVE_COLOR, CELL_HEIGHT, DEAD_COLOR } from '../config';

// TODO: onClick Cell Toggle
const Cell = ({ x, y, state }) => (
  <rect
    width={CELL_HEIGHT}
    height={CELL_HEIGHT}
    x={x * CELL_HEIGHT}
    y={y * CELL_HEIGHT}
    fill={state ? ALIVE_COLOR : DEAD_COLOR}
    stroke="black"
    strokeWidth={1}
  />
);

export default Cell;
