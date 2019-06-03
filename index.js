/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let timeInteger = parseInt(time.split(":"));
  if (timeInteger < 12)
    return "Good Morning"; 
  if (timeInteger > 12 && timeInteger < 17)
    return "Good Afternoon";
  if (timeInteger > 17)
    return "Good Evening";
}

/* Write your implementation of displayMessage() */

function displayMessage(timeString){
  document.getElementById("greeting").innerText = timeString;
}
// The display message function takes in one argument (string). When the function funs it should update the text inside the #greeting node with the content of the first argument. 