export const getBlankBoard = () => [[null, null, null], [null, null, null], [null, null, null]];

export const togglePlayer = (player) => (player === 'X') ? 'O' : 'X';

const checkVertical = (board) => {
  for (let c = 0; c < 3; c++) {
    if (board[0][c] && board[0][c] === board[1][c] && board[0][c] === board[2][c]) {
      return board[0][c];
    }
  }
};

const checkDiagonalRight = (board) => {
  if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
    return board[0][0];
  }
};

const checkDiagonalLeft = (board) => {
  if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
    return board[0][2];
  }
};

const checkHorizontal = (board) => {
  for (let r = 0; r < 3; r++) {
    if (board[r][0] && board[r][0] === board[r][1] && board[r][0] === board[r][2]) {
      return board[r][0];
    }
  }
};

const checkDraw = (board) => {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[r][c] === null) {
        return null;
      }
    }
  }
  return 'draw';
};

export const checkAll = (board) => {
  return checkVertical(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkHorizontal(board) || checkDraw(board);
}
