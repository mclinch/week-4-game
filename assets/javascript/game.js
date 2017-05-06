$(document).ready(function(){
  
  var randomNumber = (Math.floor(Math.random() * 102) + 19);

  $('.ranNum').html(randomNumber);

  var rubyNum = (Math.ceil(Math.random() * 12));
  var diamondNum = (Math.ceil(Math.random() * 12));
  var amberNum = (Math.ceil(Math.random() * 12));
  var emeraldNum = (Math.ceil(Math.random() * 12));

  function reset() {
    $('.ranNum').html(randomNumber);
    var rubyNum = (Math.ceil(Math.random() * 12));
    var diamondNum = (Math.ceil(Math.random() * 12));
    var amberNum = (Math.ceil(Math.random() * 12));
    var emeraldNum = (Math.ceil(Math.random() * 12)); 
    var scoreTotal = 0;
  }
  
  function game() {

  var scoreTotal = 0;
  var wins = 0;
  var losses = 0;  

  $('#ruby').click(function(){
    scoreTotal = scoreTotal + rubyNum;
    $('#userTotal').html(scoreTotal);
  });
  
  $('#diamond').click(function(){
    scoreTotal = scoreTotal + diamondNum;
    $('#userTotal').html(scoreTotal);
  });
  
  $('#amber').click(function(){
    scoreTotal = scoreTotal + amberNum;
    $('#userTotal').html(scoreTotal);
  });
  
  $('#emerald').click(function(){
    scoreTotal = scoreTotal + emeraldNum;
    $('#userTotal').html(scoreTotal);
    console.log(scoreTotal);
  });

    check();
        // if (randomNumber < scoreTotal) {
        //   $('#youWin').html("Your otal is:");
        //   check();
        // } 

  function check() {
        if (randomNumber === scoreTotal) {
            wins++;
            $('#winCount').html(wins);
            $('#youWin').html("YOU WIN!!!");
            reset();
        } else if (randomNumber < scoreTotal) {
            losses++;
            $('lossCount').html(losses);
            $('#youWin').html("YOU WENT OVER :(");
            reset();
          }
            
        }; 
      
    

};

  game()


  



//    // When the user presses a key, it will run the following function...
// document.onkeypress = function(event) {
//     var userGuess = event.key;
//     console.log(event)

//     if(userGuess === chooseLetter){
//         reset();
//         wins++;
//         alert("Your a Psychic! You win!")
//         console.log(chooseLetter)
//     } else {
//     if (userPastGuess.indexOf(userGuess) >= 0) {
//       alert("Please Choose another Letter.")
//       return;
//     }    
//     userPastGuess.push(userGuess);
//     console.log(userPastGuess);


    
//     if (guesses > 0) {
//         guesses--;
//         // letters.push(userGuess);
//     }

//     if(guesses === 0){
//         losses++;
//         reset();
//         console.log(chooseLetter)
     

//     }
   
//     document.getElementById('wins').innerHTML = "Wins: " + wins;
//     document.getElementById('losses').innerHTML = "Losses: " + losses;
//     document.getElementById('guessesLeft').innerHTML = "Guesses left: " + guesses;
//     document.getElementById('user-guess').innerHTML = userPastGuess.join(', ');


});

