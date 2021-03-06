$(document).ready(function(){
  for(var row=0; row <10; row++) {
    //adding a tr with a specific id; broken down into three different chunks; everything up to when we put the variable in + the actual variable + the closing up of the string
    //give each table an id that increases with the row number ex. tr-0, tr-1 ++ and also add a new row
    $("table").append("<tr id='tr-" + row + "'></tr>");
      for(var col=0; col<10; col++){
        //call just the id row and add 10 table dates to just that row
        $("tr#tr-"+ row).append("<td id='" + row + col + "'></td>");
      }
    };
    placeShips();
    // END OF FOR LOOP //
    //on click change color of td
  $("td").on("click", function(){
    $("#torpedoCount").text("Torpedo Count: " + (count= count-1));
    //vv this gets the td id by pulling the string index (ie td id 30 [0]=3 & [1]=0)
    var bRow = $(this).attr('id')[0]
    var bCol = $(this).attr('id')[1]
    if (board[bRow][bCol]==0){
      $(this).addClass("torpedo");
    } else {
      $(this).addClass("ship");
      //want to add a border around ships once theyve been identified
      $("#shipSunk").text("Hits Count: " + shipsSunk++);
    }
    if (shipsSunk == 25){
      $("#winOrLose").text("You sunk my battleships! You win!!! :)");
    } else if (count == 0) {
      $("#winOrLose").text("You Lose! No More Torpedoes :( ");
      $("#torpedoCount").text("Torpedo Count: " + (count = 0));
      //vv shipLoc is an array that holds ship locations, loop runs through the ship location array and adds ship class once game is over
      shipLoc.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      fiveShipLoc.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      fourShipLoc.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      fourShipLocTwo.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      threeShipLoc.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      threeShipLocTwo.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      twoShipLoc.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      twoShipLocTwo.forEach(function(index) {
        $("#" + index).addClass("ship");
      });
      $("td").off("click");
        //need to use addClass on torpedo counter to reveal ships when game is lost
    }
    //turns off click once td has been clicked
    $(this).off("click");
  })
  //END OF ON CLICK TO CHANGE COLOR//
  $("button").on("click", function reloadPage(){
    window.location.reload();
    // reloads the page to start a new game
  })

})
