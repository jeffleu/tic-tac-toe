import React from 'react';
import { Row } from '../components';

const Board = (props) => {
  const { board, play } = props;

  return (
    <table>
      <tbody>
        { board.map((row, i) => <Row key={i} row={row} rowIndex={i} play={play}/>) }
      </tbody>
    </table>
  );
};

export default Board;
