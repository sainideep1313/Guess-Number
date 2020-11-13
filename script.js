'use strict';

/*
//this whole code only for understanding 
/////document = enter in html
////.class name
////.textcontent = text   also change content from html file 
console.log(document.querySelector('.message').textContent);
////change the content of message class 
document.querySelector('.message').textContent = 'Correct Number!🎁';
//initialize number and score class values
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
//initialize the value of guess class
console.log(document.querySelector('.guess').value = 23);
//document.querySelector('.guess').value = 23;

*/
const SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  /// no input
  if (!guess) {
    document.querySelector('.message').textContent = '😶 No Number!';
  }
  //player wins
  else if (guess == SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎁';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    
    if(score > highscore)
    {
       highscore = score;
       document.querySelector('.highscore').textContent = highscore; 
    }
} else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⚡To High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😑you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < SecretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '⚡To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😑you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});


 document.querySelector('.again').addEventListener('click', function(){
     score = 20;
     let SecretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.message').textContent = 'start guessing...';
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = ' ';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    }
 )