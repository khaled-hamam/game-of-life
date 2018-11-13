import React from 'react';

const Block = ({ state }) => (
  <div className={`game-block bg-color-primary ${state ? 'alive-block' : 'dead-block'}`} />
);

export default Block;
