'use strict';
// comand / lets you comment out code
// create a personalized welcome message
// display the user's name back to them in the final message

let userName = prompt('Hello there, what is your name?');

console.log(userName);

alert('Welcome ' + userName + '! Let\'s play a guessing game.');

let score = 0;


// create about me guessing game with 5 yes or no questions
// input must accept yes or y, no or n
// remember case sensitivity  .toLowerCase()
// alert the user to let them know if they answered correct or incorrect
// add console.log() messages to notify the user if they are correct. 
// before submitting, comment out your console.log() messages and replace them with the alerts()


//Question 1
let firstQ = prompt('Did I work in the ICU?');

console.log(firstQ);

let firstAnswer = firstQ.toLowerCase();

console.log(firstAnswer);

if (firstAnswer === 'yes' || firstAnswer === 'y') {
  //console.log('Congratulations! Your answer is correct!');
  alert('Congratulations! Your answer is correct!');
  score++;
} else if (firstAnswer === 'no' || firstAnswer === 'n') {
  //console.log('You are incorrect!');
  alert('You are incorrect!');
} else {
  //console.log('I didn\'t get that. Let\'s try the next question!');
  alert('I didn\'t get that. Let\'s try the next question!');
}

//Question 2
let secondQ = prompt('Do I spell my name without an H?');

console.log(secondQ);

let secondAnswer = secondQ.toLowerCase();

console.log(secondAnswer);

if (secondAnswer === 'no' || secondAnswer === 'n') {
  //console.log('Congratulations! Your answer is correct!');
  alert('Congratulations! Your answer is correct!');
  score++;
} else if (secondAnswer === 'yes' || secondAnswer === 'y') {
  //console.log('You are incorrect! The letter H is at the end of my name.');
  alert('You are incorrect! The letter H is at the end of my name.');
} else {
  //console.log('I didn\'t get that. Let\'s try the next question!');
  alert('I didn\'t get that. Let\'s try the next question!');
}


//Question 3
let thirdQ = prompt('Do I live in Washington State?');

console.log(thirdQ);

let thirdAnswer = thirdQ.toLowerCase();

console.log(thirdAnswer);

if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
  //console.log('Congratulations! You are correct!');
  alert('Congratulations! You are correct!');
  score++;
} else if (thirdAnswer === 'no' || thirdAnswer === 'n') {
  //console.log('You are incorrect! I have lived in Washington State my entire life!');
  alert('You are incorrect! I have lived in Washington State my entire life!');
} else {
  //console.log('I didn\'t get that. Let\'s try the next question!');
  alert('I didn\'t get that. Let\'s try the next question!');
}

//Question 4
let fourthQ = prompt('Can I play the drums?');

console.log(fourthQ);

let fourthAnswer = fourthQ.toLowerCase();

console.log(fourthAnswer);

if (fourthAnswer === 'no' || fourthAnswer === 'n') {
  //console.log('Congratulations! You are correct!');
  alert('Congratulations! You are correct!');
  score++;
} else if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
  //console.log('You are incorrect! I play guitar.');
  alert('You are incorrect! I play guitar.');
} else {
  //console.log('I didn\'t get that. Let\'s try the next question!');
  alert('I didn\'t get that. Let\'s try the next question!');
}

//Question 5
let fifthQ = prompt('Do I snowboard?');

console.log(fifthQ);

let fifthAnswer = fifthQ.toLowerCase();

console.log(fifthAnswer);

if (fifthAnswer === 'no' || fifthAnswer === 'n') {
  //console.log('Congratulations! You are correct!');
  alert('Congratulations ' + userName + '! You are correct!');
  score++;
} else if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
  //console.log('You are incorrect! I am a skier.');
  alert(userName + ', you are incorrect! I am a skier!');
} else {
  //console.log('I didn\'t get that. Nice try anyways.');
  alert('I didn\'t get that ' + userName + '. Nice try anyways.');
}

// Question 6

// tak in a numeric input by prompting the user to guess a number
// alert the user if the guess is too high or too low
// give 4 chances to guess
// after 4th guess tell the user the correct answer

alert(userName + ', let\'s play a number guessing game!');

let correctAnswer = '27';
console.log(correctAnswer);

for(let index = 0; index < 4; index++){
  let userAnswer = prompt('Please enter a number between 1-100. You will have 4 attempts.');
  console.log(userAnswer);

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
  console.log(index);
  if (index === 3){
    alert('I\'m sorry. You did not guess correctly. The correct number is '+ correctAnswer + '.');
  }
}

// Question 7
// have multiple correct answers stored in an array 
// user has 6 attempts
// gueesing ends once user guessing correctly or runs out of attempts. 
// display all possible correct answers to the user

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
    alert('Here are the other choices: ' + placesArray);
  } if (!correctPlace && guesses<= 6 && guesses >1) {
    alert('Sorry you are incorrect. Please try again.');
  }
  if (!correctPlace && guesses === 1) {
    alert('Sorry you got it incorrect. The correct answers were ' + placesArray);
  }
  guesses--;
}

alert(userName + ' thanks for playing! You got ' + score + ' answers correct.');


