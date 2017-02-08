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
    // END OF FOR LOOP //
    //on click change color of td
  $("td").on("click", function(){
    var bRow = $(this).attr('id')[0]
    var bCol = $(this).attr('id')[1]
    if (board[bRow][bCol]==0){
      $(this).addClass("torpedo");
    } else {
      $(this).addClass("ship");
    }
    $("#torpedoCount").text("Torpedo Count: " + count++);
    //turns off click
    $(this).off("click");
  })
  //END OF ON CLICK TO CHANGE COLOR//


})
