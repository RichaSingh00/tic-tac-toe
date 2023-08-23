const Board = require("./Board");
const Player = require("./Player");

class Game {
  constructor(player0Name, player1Name) {
    this.isGameEnded = false;
    this.turn = 0;
    this.board = new Board();
    this.players = [new Player(player0Name, 'X'), new Player(player1Name, 'O')];
  }
  static newGame(player0Name, player1Name) {
    if (player0Name == player1Name ||
      typeof player0Name != 'string' ||
      typeof player1Name != 'string'
    ) {
      return ['Invalid parameters', null];
    }
   return ['Object created', new Game(player0Name, player1Name)];
  }
  play(cellNumber) {
    if (typeof cellNumber!=='number'){
        return 'Invalid Input'
    }
    if (cellNumber<0 || cellNumber>8){
        return 'Invalid Turn'
    }
    if (this.isGameEnded) {
      return "Game has ended";
    }
    if (!this.board.isEmpty(cellNumber)) {
      return "Cell is not Empty";
    }
    let currentPlayer = null;
    if (this.turn % 2 == 0) {
      currentPlayer = this.players[0];
    } else {
      currentPlayer = this.players[1];
    }
    this.board.markCell(cellNumber, currentPlayer.getSymbol());
    this.turn++;
    let [winnerSymbol, status] = this.board.resultAnalyzer();
    let winner
    if ((winnerSymbol ==='X')) {
      winner = this.players[0]
      this.isGameEnded = true;
      return `Game is won by ${winner.name}`;
    }
    else if ((winnerSymbol === 'O')) {
      winner = this.players[1];
      this.isGameEnded = true;
      return `Game is won by ${winner.name}`;
    }
    else if (status === "Draw") {
      this.isGameEnded = true;
      return "Game is a draw";
    }
    return "Continue playing";
  }
}
module.exports = Game;

