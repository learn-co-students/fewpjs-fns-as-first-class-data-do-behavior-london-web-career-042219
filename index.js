/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  
  hour_min = timeString.split(":")
  
  if (hour_min[0] < 12) {
    return "Good Morning"
   
    
  } else if (12 <= hour_min[0] && hour_min[0] < 17) { 
    debugger
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting){
  groot = document.getElementById("greeting")
  groot.innerText = (greeting)
}

