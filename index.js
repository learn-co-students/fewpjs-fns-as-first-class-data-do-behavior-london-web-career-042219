/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */


function greet(timeString) {
  const numbers =  timeString.split(":")
  const hour = parseInt(numbers[0], 10)
  if(hour < 12) {
    return "Good Morning"
  }
  else if(hour > 12 && hour < 17) {
    return "Good Afternoon"
  }
  else if(hour > 17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const greeting = document.getElementById("greeting")
  greeting.innerText = string
}
