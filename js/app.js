'use strict';

let userName = prompt('Hello there, what is your name?');
alert('Welcome ' + userName + '! Let\'s play a guessing game.');
let score = 0;

function questionOne(){
  let firstQ = prompt('Did I work in the ICU?');
  let firstAnswer = firstQ.toLowerCase();

  if (firstAnswer === 'yes' || firstAnswer === 'y') {
    alert('Congratulations! Your answer is correct!');
    score++;
  } else if (firstAnswer === 'no' || firstAnswer === 'n') {
    alert('You are incorrect!');
  } else {
    alert('I didn\'t get that. Let\'s try the next question!');
  }
}
questionOne();


function questionTwo(){
  let secondQ = prompt('Do I spell my name without an H?');
  let secondAnswer = secondQ.toLowerCase();

  if (secondAnswer === 'no' || secondAnswer === 'n') {
    alert('Congratulations! Your answer is correct!');
    score++;
  } else if (secondAnswer === 'yes' || secondAnswer === 'y') {
    alert('You are incorrect! The letter H is at the end of my name.');
  } else {
    alert('I didn\'t get that. Let\'s try the next question!');
  }
}
questionTwo();


function questionThree(){

  let thirdQ = prompt('Do I live in Washington State?');
  let thirdAnswer = thirdQ.toLowerCase();

  if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
    alert('Congratulations! You are correct!');
    score++;
  } else if (thirdAnswer === 'no' || thirdAnswer === 'n') {
    alert('You are incorrect! I have lived in Washington State my entire life!');
  } else {
    alert('I didn\'t get that. Let\'s try the next question!');
  }
}
questionThree();


function questionFour(){

  let fourthQ = prompt('Can I play the drums?');
  let fourthAnswer = fourthQ.toLowerCase();

  if (fourthAnswer === 'no' || fourthAnswer === 'n') {
    alert('Congratulations! You are correct!');
    score++;
  } else if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
    alert('You are incorrect! I play guitar.');
  } else {
    alert('I didn\'t get that. Let\'s try the next question!');
  }
}
questionFour();


function questionFive(){

  let fifthQ = prompt('Do I snowboard?');
  let fifthAnswer = fifthQ.toLowerCase();

  if (fifthAnswer === 'no' || fifthAnswer === 'n') {
    alert('Congratulations ' + userName + '! You are correct!');
    score++;
  } else if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
    alert(userName + ', you are incorrect! I am a skier!');
  } else {
    alert('I didn\'t get that ' + userName + '. Nice try anyways.');
  }
}
questionFive();

function guessingGame(){
  alert(userName + ', let\'s play a number guessing game!');
  let correctAnswer = '27';

  for(let index = 0; index < 4; index++){
    let userAnswer = prompt('Please enter a number between 1-100. You will have 4 attempts.');

    while(userAnswer < 1 || userAnswer > 100) {
      userAnswer = prompt('Please enter a number from 1-100');
    }
    if (userAnswer === correctAnswer){
      alert('CONGRATULATIONS!! You are correct!');
      score++;
      break;
    }
    else if (userAnswer < correctAnswer){
      alert('Too low!');
    }
    else if (userAnswer > correctAnswer){
      alert('Too high!');
    }
    else {
      alert('Something else went wrong.');
    }
    if (index === 3){
      alert('I\'m sorry. You did not guess correctly. The correct number is '+ correctAnswer + '.');
    }
  }
}
guessingGame();



function placeGame(){
  const placesArray = ['kirkland', 'seattle', 'lake stevens', 'issaquah'];
  let guesses = 6;
  let correctPlace = false;

  while(correctPlace === false && guesses > 0) {
    let placeGuess = prompt('Can you guess one of the places I\'ve lived? You have ' + guesses + ' attempts currently.');
    let placeGuessLower = placeGuess.toLowerCase();
    for (let index=0; index<placesArray.length; index++){
      if (placeGuessLower === placesArray[index]){
        alert('CONGRATULATIONS. You are correct!');
        score++;
        correctPlace = true;
        break;
      }
    }
    if (correctPlace) {
      let placesString =placesArray.join(', ');
      alert('Here are the other choices: ' + placesString);
    } if (!correctPlace && guesses<= 6 && guesses >1) {
      alert('Sorry you are incorrect. Please try again.');
    }
    if (!correctPlace && guesses === 1) {
      let placesString =placesArray.join(', ');
      alert('Sorry you got it incorrect. The correct answers were ' + placesString);
    }
    guesses--;
  }
}
placeGame();


alert(userName + ' thanks for playing! You got ' + score + ' answers correct.');
