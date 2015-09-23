var bottleAmount = function(userInput) {
  var beerSong = "";

  while(userInput >= 0) {
    var beerVerse = "";

    if(userInput === 0){
      beerVerse = noMoreVerse(userInput);
    }
    else if(userInput === 1) {
      beerVerse = oneMoreVerse(userInput);
    }
    else if(userInput === 2) {
      beerVerse = twoMoreVerse(userInput);
    }
    else{
      beerVerse = moreThanTwoVerse(userInput);
    }
    userInput = userInput - 1;
    beerSong = beerSong + beerVerse;
  }
   return beerSong;
}

//helper function
var noMoreVerse = function(){
  return "No more bottles of beer on the wall, no more bottles of beer... Go to the store and buy some more! 99 bottles of beer on the wall.</br>"
}

//helper function
var oneMoreVerse = function(){
  return "One bottle of beer on the wall, one bottle of beer, take one down, pass it around, no more bottles of beer on the wall. </br>"
}


//helper function
var twoMoreVerse = function(){
  return "Two more bottles of beer on the wall, two more bottles of beer, take one down, pass it around, one more bottle of beer on the wall.</br>"
}

//helper function
var moreThanTwoVerse = function(userInput){
  return userInput + " bottles of beer on the wall" + userInput + " bottles of beer, take one down, pass it around, " + (userInput - 1) + " bottles of beer on the wall."
}



$(document).ready(function() {
  $("form#bottleAmount").submit(function(event) {
    var userInput = parseInt($("input#userInput").val());
    var beerSong = bottleAmount(userInput);

    $("#input").text(userInput);
    $("#beerSong").html(beerSong);
    $(".result").show();
    event.preventDefault();
  });
});
