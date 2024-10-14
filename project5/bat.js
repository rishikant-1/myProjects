function computerChoiceIs() {
//   let computerChoice;
  let randomanumber = Math.random() * 3;
  if (randomanumber > 0 && randomanumber <= 1) {
    return "Bat";
  } else if (randomanumber > 1 && randomanumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
//   return computerChoice;
} 
let scoreStr= localStorage.getItem('Score');
let score;
resetScore(scoreStr);
  function resetScore(scoreStr){
    score= JSON.parse(scoreStr) || {
      win: 0,
      lost: 0,  
      tie: 0,
      };
     score.displayScore= function(){
        return ` Win= ${score.win} Lost= ${score.lost} Tie= ${score.tie}`;
      }
      showResult();
  }
  
function getMoves(computerMove, userMove) {
  if (userMove === "Bat") {
    if (computerMove === "Ball") {
      score.win++;
      return "user has won";
    } else if (computerMove === "Bat") {
      score.tie++;
      return " match iss tie";
    } else if (computerMove === "Stump") {
      score.lost++;
      return "computer has won";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Ball") {
      score.tie++;
      return " match iss tie";
    } else if (computerMove === "Bat") {
      score.lost++;
      return "computer has won";
    } else if (computerMove === "Stump") {
      score.win++;
      return "user has won";
    }
  } else {
    if (computerMove === "Ball") {
      score.lost++;
      return "computer has won";
    } else if (computerMove === "Bat") {
      score.win++;
      return "user has won";
    } else if (computerMove === "Stump") {
      score.tie++;
      return " match iss tie";
    }
  }
  
}
function showResult(userMove, computerMove, result) {
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('.yourchoice').innerText= `Your choise is = ${userMove || ''}`;
  document.querySelector('.computerchois').innerText= `Computer choise is = ${computerMove || '' }`;
  document.querySelector('.result').innerText= result || '';
  document.querySelector('.score').innerText=` ${score.displayScore()}`
}
function resetButton(){
  localStorage.clear(); 
  resetScore(scoreStr); 
}
