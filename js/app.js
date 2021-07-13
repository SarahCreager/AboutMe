'use strict';

// create a personalized welcome message
// display the user's name back to them in the final message

let userName = prompt('Hello there, what is your name?');

console.log(userName);

alert('Welcome ' + userName + ', let\'s play a guessing game!');


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
} else if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
  //console.log('You are incorrect! I am a skier.');
  alert(userName + ', you are incorrect! I am a skier!');
} else {
  //console.log('I didn\'t get that. Nice try anyways.');
  alert('I didn\'t get that ' + userName + '. Nice try anyways.');
}