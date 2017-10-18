$(document).ready(function(){
  
  var randomNumber = (Math.floor(Math.random() * 102) + 19);

  $('.ranNum').html(randomNumber);
  var scoreTotal = 0;
  var wins = 0;
  var losses = 0; 
  var rubyNum = (Math.ceil(Math.random() * 12));
  var diamondNum = (Math.ceil(Math.random() * 12));
  var amberNum = (Math.ceil(Math.random() * 12));
  var emeraldNum = (Math.ceil(Math.random() * 12));

  function reset() {
    randomNumber = (Math.floor(Math.random() * 102) + 19);
    $('.ranNum').html(randomNumber);
    var rubyNum = (Math.ceil(Math.random() * 12));
    var diamondNum = (Math.ceil(Math.random() * 12));
    var amberNum = (Math.ceil(Math.random() * 12));
    var emeraldNum = (Math.ceil(Math.random() * 12)); 
    scoreTotal = 0;
    $('#userTotal').html(scoreTotal);
    setTimeout(function(){$('#youWin').html("Your Total is: ");},3000)
    // $('#youWin').html("Your Total is: ");
    
  }
  
  function game() {

 

  $('#ruby').click(function(){
    scoreTotal = scoreTotal + rubyNum;
    $('#userTotal').html(scoreTotal);
    check();

  });
  
  $('#diamond').click(function(){
    scoreTotal = scoreTotal + diamondNum;
    $('#userTotal').html(scoreTotal);
    check();
  });
  
  $('#amber').click(function(){
    scoreTotal = scoreTotal + amberNum;
    $('#userTotal').html(scoreTotal);
    check();
  });
  
  $('#emerald').click(function(){
    scoreTotal = scoreTotal + emeraldNum;
    $('#userTotal').html(scoreTotal);
    console.log(scoreTotal);
    check();
  });

    check();


  function check() {
    console.log('randomNumber ' +  randomNumber);
    console.log('scoreTotal ' +  scoreTotal);
        if (randomNumber === scoreTotal) {
            wins++;
            $('#winCount').html(wins);
            $('#youWin').html("YOU WIN!!!");
            reset();
        } else if (randomNumber < scoreTotal) {
            losses++;
            $('#lossCount').html(losses);
            $('#youWin').html("YOU WENT OVER :(");
            reset();
          }
            
        }; 
      
    

};

  game()



});

