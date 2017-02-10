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
//vv array to hold the ship placement
var shipLoc =[];
//vv array for the five block ship
var fiveShipLoc = [];
var fourShipLoc = [];
var fourShipLocTwo = [];
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

//creates a ship 5 blocks long
function fiveShip(){
  var bRow = Math.floor(Math.random()*9);
  //console log nRow and nCol to see what is generated
  var bCol = Math.floor(Math.random()*9);
  if(fiveShipLoc.length < 5 && (bRow + 4) < 10 && (bCol + 4) < 10 && spaces(bRow, bCol) && spaces(bRow + 1, bCol) && spaces(bRow + 2, bCol) && spaces(bRow + 3, bCol) && spaces(bRow + 4, bCol)) {
    //we want to have our function create a 5 block ship, the shipLoc array will have an array within an array
    board[bRow][bCol]= ship;
    board[bRow + 1][bCol] = ship;
    board[bRow + 2][bCol] = ship;
    board[bRow + 3][bCol] = ship;
    board[bRow + 4][bCol] = ship;

    //VV pushes our ship placement into new array shipLoc
    fiveShipLoc.push((bRow.toString() + bCol.toString()), ((bRow + 1).toString() + bCol.toString()), ((bRow + 2).toString() + bCol.toString()), ((bRow + 3).toString() + bCol.toString()), ((bRow + 4).toString() + bCol.toString()) );
  } else {
    // if the if statement above is false, run
    fiveShip();
  }
}

//creates a ship 4 blocks long
function fourShip(){
  var bRow = Math.floor(Math.random()*9);
  //console log nRow and nCol to see what is generated
  var bCol = Math.floor(Math.random()*9);
  if(fourShipLoc.length < 4 && (bRow + 3) < 10 && (bCol + 3) < 10 && spaces(bRow, bCol) && spaces(bRow + 1, bCol) && spaces(bRow + 2, bCol) && spaces(bRow + 3, bCol)) {
    //we want to have our function create a 4 block ship, the shipLoc array will have an array within an array
    board[bRow][bCol]= ship;
    board[bRow + 1][bCol] = ship;
    board[bRow + 2][bCol] = ship;
    board[bRow + 3][bCol] = ship;

    //VV pushes our ship placement into new array shipLoc
    fourShipLoc.push((bRow.toString() + bCol.toString()), ((bRow + 1).toString() + bCol.toString()), ((bRow + 2).toString() + bCol.toString()), ((bRow + 3).toString() + bCol.toString()) );
    console.log(fourShipLoc);
  } else {
    //if the condition above is false, run the fourShip function again
    fourShip();
  }
}
//vv this creates the second four block ship
function fourShipTwo(){
  var bRow = Math.floor(Math.random()*9);
  //console log nRow and nCol to see what is generated
  var bCol = Math.floor(Math.random()*9);
  if(fourShipLocTwo.length < 4 && (bRow + 3) < 10 && (bCol + 3) < 10 && spaces(bRow, bCol) && spaces(bRow, bCol + 1) && spaces(bRow, bCol + 2) && spaces(bRow, bCol + 3)) {
    //we want to have our function create a 4 block ship, the shipLoc array will have an array within an array
    board[bRow][bCol]= ship;
    board[bRow][bCol + 1] = ship;
    board[bRow][bCol + 2] = ship;
    board[bRow][bCol + 3] = ship;

    //VV pushes our ship placement into new array shipLoc
    fourShipLocTwo.push((bRow.toString() + bCol.toString()), (bRow.toString() + (bCol + 1).toString()), (bRow.toString() + (bCol + 2).toString()), (bRow.toString() + (bCol + 3).toString()) );
    console.log(fourShipLocTwo);
  } else {
    //if the condition above is false, run the fourShip function again
    fourShipTwo();
  }
}

//vv this places single ships
function placeShips() {
  // loop through board; if a ship exists at board[row][column], keep going
  //create a for loop that places a ship at a random position, if spot taken, keep going

  //vv start of ship placement for loop
  while(shipLoc.length<2) {
    // generates random row
    var bRow = Math.floor(Math.random()*9);
    // generates random column
    var bCol = Math.floor(Math.random()*9);
    //assign spot with ship value = 1
    if(spaces(bRow, bCol)) {
      board[bRow][bCol]= ship;
      //VV pushes our ship placement into new array shipLoc
      shipLoc.push(bRow.toString() + bCol.toString());
    }
  }
  //^^end of single ship placement for loop
  //vv once the single ships have been placed, call the fiveShip function
  fiveShip();
  fourShip();
  fourShipTwo();
  //vv push the 5 block ship into the shipLoc array
  shipLoc.push(fiveShipLoc);
  //vv push the first 4 block ship into the shipLoc array
  shipLoc.push(fourShipLoc);
  //vv place the second 4 block ship into the shipLoc array
  shipLoc.push(fourShipLocTwo);
  console.log(shipLoc);

};

  console.log(board);
  // if not, board[row][column] = ship
  // do this until five ships are placed



// below is code that is not functional for this game but it works alone
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
