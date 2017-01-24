import React from 'react';
import { Cell } from '../components';

const Row = (props) => {
  const { row, rowIndex, play } = props;

  return (
    <tr>
      { row.map((cell, i) => <Cell key={i} rowIndex={rowIndex} cellValue={cell} cellIndex={i} play={play}/>) }
    </tr>
  );
};

export default Row;
