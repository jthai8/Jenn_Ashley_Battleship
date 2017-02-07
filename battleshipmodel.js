var count = 1;
var board =[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
];
var ship = 1;

function placeShips() {
  // random row
  var boardRow = Math.floor(Math.random()*9 +1);
  // random column
  var boardCol = Math.floor(Math.random()*9 +1);
  board[boardRow][boardCol]= ship;
  console.log(board);
  // loop through board; if a ship exists at board[row][column], keep going
  // if not, board[row][column] = ship
  // do this until five ships are placed
};
