import React, { PureComponent } from 'react';
import { ALIVE_COLOR, CELL_HEIGHT, DEAD_COLOR } from '../config';

// TODO: onClick Cell Toggle
class Cell extends PureComponent {
  render() {
    const { x, y, state } = this.props;
    return (
      <rect
        width={CELL_HEIGHT}
        height={CELL_HEIGHT}
        x={x * CELL_HEIGHT}
        y={y * CELL_HEIGHT}
        fill={state ? ALIVE_COLOR : DEAD_COLOR}
        stroke={ALIVE_COLOR}
        strokeWidth={1}
      />
    );
  }
}

export default Cell;
