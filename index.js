/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet ( timeIn ) {

  let timeSplit = timeIn.split(':');
  let hourTime = parseInt( timeSplit[0], 10 ); 

  if ( hourTime < 12) { 
    return "Good Morning";
  }
  else if (hourTime < 17) { 
    return "Good Afternoon";
  } else { 
  return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage( greeting ) {
  /* Find the element to display the text*/
  let greetingElement = document.getElementById('greeting');
  /* Set the innerTextValue */
  greetingElement.innerText = greeting;
}