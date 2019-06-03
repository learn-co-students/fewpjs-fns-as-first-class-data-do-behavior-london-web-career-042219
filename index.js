/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let hour = parseInt(timeString.split(":")[0],10);
  if (hour < 12) {
    return "Good Morning";
  } else if (hour > 11 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let greeting = document.getElementById('greeting');
  greeting.innerText = message;
}
