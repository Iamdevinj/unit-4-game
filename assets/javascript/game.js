//random numnber should be generated everytime a new game starts
//when faces are clicked total score will go up
//every face should have a value attache between the number 1-12

//document ready
$(document).ready(function() {
  let total = 0;
  let wins = 0;
  let losses = 0;

  var aryaValue = 0;
  var jonValue = 0;
  var danyValue = 0;
  var tyrionValue = 0;

  var winnningNumber;

  function startGame() {
    winnningNumber = Math.floor(Math.random() * 100);

    $("#counter").text(winnningNumber);

    aryaValue = Math.floor(Math.random() * 10);
    jonValue = Math.floor(Math.random() * 10);
    danyValue = Math.floor(Math.random() * 10);
    tyrionValue = Math.floor(Math.random() * 10);
  }

  function writeTotalToHTML() {
    $("#count").text(total);
  }

  startGame();

  //click functions for pictures
  $("#arya").on("click", function() {
    total = total + aryaValue;

    writeTotalToHTML();
  });

  $("#jon").on("click", function() {
      //console.log("works");
      
    total = total + jonValue;
    console.log("jonValue", jonValue);
    
    console.log("total",total);
    
    writeTotalToHTML();
  });

  $("#dany").on("click", function() {
    total = total + danyValue;
    writeTotalToHTML();
  });

  $("tyrion").on("click", function() {
    total = total + tyrionValue;
    writeTotalToHTML();
  });
});
