/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


function displayMessage(message) {
	document.getElementById("greeting").innerText = message;
}

function greet(time) {
	let timeInteger = parseInt(time.replace(":", ""), 10);
	if (timeInteger < 1200)
		return "Good Morning";
	if (timeInteger < 1700)
		return "Good Afternoon"
	return  "Good Evening";
}

