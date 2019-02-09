function startGame(){}
$(".startButton").on("click", function () {
    initTimer();
    time=120;
    $(".startScreen").hide();
    $(".endScreen").hide();
    $("#gamePlay").show();
    correctAnswers=0;
    incorrectAnswers=0;
    unanswered=0;
});

var time= 120;
var intervalId;
var newCorrect = $("#correct");
var newIncorrect= $("#incorrect");
var unanswered= $("#unansweredOne");

function initTimer() {
    
    intervalId= setInterval(decrement, 1000);
    
}
function decrement() {
   
    $("#counter").html(time + "seconds");
   
    time--;

    if (time === 0) {
        stop();
        endGame();
       
    }
}
function stop() {
    clearInterval(intervalId);
}
function endGame() {
    $("#gamePlay").hide();
    $(".startScreen").hide();
    $(".endScreen").show();
}

$("#Submit").on("click", function (){

    endGame();

});

var correctAnswers=0;
var incorrectAnswers=0;
var unanswered=0;

$("#Submit").on("click", function(){

    var answer= $("input[name='questionOne']:checked").val();

    if(answer==="bostonCeltics"){
        correctAnswers++;
      } else if (answer=="laLakers"){
        incorrectAnswers++;

          }else if (answer=="saSpurs"){
              incorrectAnswers++;
              
              }else if (answer=="chiBulls"){
                  incorrectAnswers++;

                  }else if (answer==undefined){
                  unanswered++;
                  }

      var answer= $("input[name='questionTwo']:checked").val();

      if(answer==="kareem"){
        correctAnswers++;
        } else if (answer=="kobe"){
        incorrectAnswers++;

            }else if (answer=="lebron"){
                incorrectAnswers++;
                
                }else if (answer=="karlMalone"){
                    incorrectAnswers++;

                    }else if (answer==undefined){
                    unanswered++;
                     } 

      var answer= $("input[name='questionThree']:checked").val();

      if(answer==="billRussell"){
        correctAnswers++;
        } else if (answer=="kareemaj"){
        incorrectAnswers++;

            }else if (answer=="oscar"){
                incorrectAnswers++;
                
                }else if (answer=="wilt"){
                    incorrectAnswers++;

                    }else if (answer==undefined){
                    unanswered++;
                    }

        var answer= $("input[name='questionFour']:checked").val();

        if(answer==="westbrook"){
            correctAnswers++;
            } else if (answer=="lbj"){
            incorrectAnswers++;
    
                }else if (answer=="kd"){
                    incorrectAnswers++;
                    
                    }else if (answer=="ad"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 

        var answer= $("input[name='questionFive']:checked").val();

        if(answer==="sac"){
            correctAnswers++;
            } else if (answer=="gsWarriors"){
            incorrectAnswers++;
    
                }else if (answer=="laClippers"){
                    incorrectAnswers++;
                    
                    }else if (answer=="okc"){
                        incorrectAnswers++;
    
                        }else if (answer==undefined){
                        unanswered++;
                        } 
            console.log("correct: " + correctAnswers);
            console.log("incorrect: " + incorrectAnswers);
            console.log("unanswered: " + unanswered);
            console.log(answer);

            $("#correct").append(correctAnswers);
            $("#incorrect").append(incorrectAnswers);
            $("#unanswered").append(unanswered);
        
        });

        $(".restartButton").on("click", function () {
            location.reload();
           
        });