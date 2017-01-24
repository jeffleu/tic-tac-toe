import React, { Component } from 'react';
import { render } from 'react-dom';
import { Board } from './components';
import { getBlankBoard, checkAll, togglePlayer } from './utils';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      playerOne: 'X',
      playerTwo: 'O',
      currentPlayer: null,
      board: [],
      gameOver: false,
      message: ''
    };
    
    this.play = this.play.bind(this);
  }
  
  createBoard() {
    this.setState({
      board: getBlankBoard(),
      currentPlayer: this.state.playerOne,
      gameOver: false,
      message: ''
    });
  }
  
  play(r, c) {
    if (!this.state.gameOver) {
      const board = this.state.board;
      let { currentPlayer } = this.state;

      // If cell is null, place 'X' or 'O' then switch player
      if (!board[r][c]) {
        board[r][c] = currentPlayer;
        currentPlayer = togglePlayer(currentPlayer);
      }
      
      // Check status of board
      let result = checkAll(board);
      if (result === this.state.playerOne) {
        this.setState({ board, gameOver: true, message: 'Player 1 (x) wins!' });
      } else if (result === this.state.playerTwo) {
        this.setState({ board, gameOver: true, message: 'Player 2 (○) wins!' });
      } else if (result === 'draw') {
        this.setState({ board, gameOver: true, message: 'Draw game.' });
      } else {
        this.setState({ board, currentPlayer });
      }
      
    } else {
      this.setState({ message: 'Game over. Please start a new game.' });
    }
  }
  
  componentWillMount() {
    this.createBoard();
  }
  
  render() {
    return (
      <div>
        <div className="button" onClick={() => { this.createBoard() }}>New Game</div>
        <Board board={ this.state.board } play={ this.play }/>
        <p className="message">{ this.state.message }</p>
      </div>
    );
  }
};

render(<App/>, document.getElementById('app'));
