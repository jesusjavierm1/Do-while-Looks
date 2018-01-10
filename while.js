//var upper= 10;
var randomNumber = getrandomNumber(10);
var guessCount = 0;
var guess;
var correctAnswer = false;

function getrandomNumber(upper) {

  var num = Math.floor(Math.random() * upper) + 1;
  return num;

}

//alert(randomNumber);

do {
  guess = prompt('I am thinking of a number between 1 to 10, what it is?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctAnswer = true;
  }

} while (!correctAnswer)



document.write(`the number is ${randomNumber, it took you ${guessCount} tries to guess the number`);
document.write('congratulation!');
