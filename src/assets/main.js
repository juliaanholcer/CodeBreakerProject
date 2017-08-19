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
      attempt += 1;
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
