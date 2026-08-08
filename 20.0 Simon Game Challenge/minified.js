let lvl=0;let game=!1;buttonColors=["green","red","yellow","blue"]
playerSequence=[]
gameSequence=[]
$("body").on("keydown",function(){if(!game){nextSequence();game=!0}});$(".btn").on("click",function(){if(!game){gameOver()}
let chosenColor=$(this).attr("id");playerSequence.push(chosenColor);playSound(chosenColor);animatePress(chosenColor);checkAnswer(playerSequence.length-1)})
function checkAnswer(currentLvl){if(playerSequence[currentLvl]==gameSequence[currentLvl]){if(playerSequence.length==gameSequence.length){setTimeout(function(){nextSequence()},1000)}}else{gameOver()}}
function nextSequence(){lvl++;playerSequence=[];$("#level-title").text("Level "+lvl);let random=Math.floor(Math.random()*4);let randomColor=buttonColors[random];$("#"+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);let sounds=new Audio("sounds/"+randomColor+".mp3");sounds.play();gameSequence.push(randomColor)}
function gameOver(){game=!1;playerSequence=[];gameSequence=[];lvl=0;$("body").addClass("game-over");$("#level-title").text("Game Over, Press any key to Restart");let gameOverSounds=new Audio("sounds/wrong.mp3");gameOverSounds.play();setTimeout(function(){$("body").removeClass("game-over")},200)}
function playSound(color){let sound=new Audio("sounds/"+color+".mp3")
sound.play()}
function animatePress(color){$("#"+color).addClass("pressed")
setTimeout(function(){$("#"+color).removeClass("pressed")},100)}