let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    //sets hidden fields (answer and attempt) only if they aren't already set
    //task 8
    if ((answer.value === '')||(attempt.value === '')) {
      setHiddenFields();
    }

    //task 11
    if (!(validateInput(input.value))) {
      return false;
    }
    else {
      attempt.value += 1;
    }
    //task 14, 15 and 16
    if (getResults(input.value)) {
        setMessage("You Win! :)");
    }
    else {
      if (attempt.value >= 10) {
        setMessage("You Lose! :(");
      }
      else {
        setMessage("Incorrect, try again.");
      }
    }
}

//implement new functions here
// task 5-7
function setHiddenFields() {
  var random = (Math.floor(Math.random()*10000)).toString();
  while (random.length < 4) {
    random = '0' + random;
  };
  answer.value = random;
  attempt.value = 0;
}

//task 9
function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

//task 10
function validateInput(userInput) {
  if (userInput.length === 4) {
    return true;
  }
  else {
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
}
//task 12 and 13
function getResults(userInput) {
  var result = ' <div class="row"><span class="col-md-6">' + userInput + '</span><div class="col-md-6">';
  var correctGuess = 0;
  for (var j = 0; j < 4; j++) {
    if (userInput[j] === answer.value[j]) {
      correctGuess += 1;
      result += '<span class="glyphicon glyphicon-ok"></span>';
    }
    else if (answer.value.includes(userInput[j])) {
      result += '<span class="glyphicon glyphicon-transfer"></span>';
    }
    else {
      result += '<span class="glyphicon glyphicon-remove"></span>';
    }
  }
  result = result + '</div></div>';
  document.getElementById('results').innerHTML += result;

  if (correctGuess === 4) {
    return true;
  }
  else {
    return false;
  }
}
//task 17
function showAnswer(isWon) {
  var codeDiv = document.getElementById("#code");
  codeDiv.innerHTML = answer.value;
  if (isWon) {
    codeDiv.className += ' success';
  }
  else {
    codeDiv.className += ' failure';
  }
}
//task 18
function showReplay() {

}
