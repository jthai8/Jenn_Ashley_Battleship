var count = 25;
var shipsSunk = 1;
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
var sum;
var shipLoc =[];
function spaces(bRow, bCol) {
  if ((bRow == 0 || board[bRow-1][bCol] == 0) &&
      (bRow == 9 || board[bRow+1][bCol] == 0) &&
      (bCol == 0 || board[bRow][bCol-1] == 0) &&
      (bCol == 9 || board[bRow][bCol+1] == 0)) {
      // (board[bRow][bCol] == undefined)) {
    return true;
  } else {
    return false;
  }
};

function placeShips() {
  // loop through board; if a ship exists at board[row][column], keep going
  //create a for loop that places a ship at a random position, if spot taken, keep going

  //vv start of ship placement for loop
  while(shipLoc.length<5) {
    // generates random row
    var bRow = Math.floor(Math.random()*9);
    // generates random column
    var bCol = Math.floor(Math.random()*9);
    //assign spot with ship value = 1
    if(spaces(bRow, bCol) && board[bRow][bCol] == 0){
      board[bRow][bCol]= ship;
      shipLoc.push(bRow.toString() + bCol.toString());
    }
  }
  //^^end of ship placement for loop

};

  console.log(board);
  // if not, board[row][column] = ship
  // do this until five ships are placed


// var d = board[0].concat(board[1],board[2],board[3],board[4],board[5],board[6],board[7],board[8],board[9]);
//
// sum = d.reduce(add,0);
//
// function add(a,b){
//   return a+b;
// };
