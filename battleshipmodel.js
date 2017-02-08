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
  // loop through board; if a ship exists at board[row][column], keep going
  //create a for loop that places a ship at a random position, if spot taken, keep going
  //vv start of ship placement for loop
  for(var i=0; i < 5; i++) {
    // generates random row
    var bRow = Math.floor(Math.random()*9);
    // generates random column
    var bCol = Math.floor(Math.random()*9);
    //assign spot with ship value = 1
    if(board[bRow][bCol] == 0 ){
      board[bRow][bCol]= ship;
    };
  //^^end of ship placement for loop

  };

  console.log(board);
  // if not, board[row][column] = ship
  // do this until five ships are placed
};
