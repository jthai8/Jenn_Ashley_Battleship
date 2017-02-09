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
  // newRow prevents us from going into -1 row
  var newRow = bRow-1;
  if (newRow < 0) {
    newRow = bRow;
  }
  //pRow prevents our row from going beyond row 9
  var pRow = bRow+1;
  if (pRow > 9){
    pRow = bRow;
  }
  //newCol prevents us from going into -1 col
  var newCol = bCol-1;
  if (newCol < 0) {
    newCol = bCol;
  }
  //pCol prevents our column from going being column 9 and beyond
  var pCol = bCol+1;
  if (pCol > 9){
    pCol = bCol;
  }
    return (
      board[bRow][bCol] !== ship &&
      board[bRow][newCol] !== ship &&
      board[bRow][pCol] !== ship &&
      board[newRow][bCol] !== ship &&
      board[newRow][pCol] !== ship &&
      board[newRow][newCol] !== ship &&
      board[pRow][bCol] !== ship &&
      board[pRow][newCol] !== ship &&
      board[pRow][pCol] !== ship
    )
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
    if(spaces(bRow, bCol)) {
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

//   if ((bRow == 0 || board[bRow-1][bCol] == 0) &&
//       (bRow == 9 || board[bRow+1][bCol] == 0) &&
//       (bCol == 0 || board[bRow][bCol-1] == 0) &&
//       (bCol == 9 || board[bRow][bCol+1] == 0) &&
// //VVto get diagonal spots, move up one row (ex [bRow-1]) and to the left or right by 1 (ex [bCol+1])
//       (((bRow < 9 && bRow > 0) && (bCol > 0  && bCol < 9)) || board[bRow-1][bCol-1] == 0) &&
//
//       (((bRow < 9 && bRow > 0) && (bCol > 0 && bCol < 9)) || board[bRow-1][bCol+1] == 0) &&
//
//       (((bRow < 9 && bRow > 0) && (bCol > 0 && bCol < 9)) || board[bRow+1][bCol-1] == 0) &&
//
//       (((bRow < 9 && bRow > 0) && (bCol > 0 && bCol < 9)) || board[bRow+1][bCol+1] == 0)) {
