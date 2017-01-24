import React from 'react';

const Cell = (props) => {
  const { cellValue, rowIndex, cellIndex, play } = props;

  let symbol;
  if (cellValue === 'X') {
    symbol = '×';
  } else if (cellValue === 'O') {
    symbol = '○';
  }
  
  return (
    <td>
      <div className="cell" onClick={() => {play(rowIndex, cellIndex)}}>
        <div className="play">
          { symbol }
        </div>
      </div>
    </td>
  );
};

export default Cell;
