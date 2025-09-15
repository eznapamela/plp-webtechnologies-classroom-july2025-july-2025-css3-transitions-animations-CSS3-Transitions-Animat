// Function to calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

let globalMessage = "I am a global variable!";

function showScopeExample() {
  let localMessage = "I am a local variable!";
  console.log(globalMessage);
  console.log(localMessage);
}

showScopeExample();

// Show result on button click
document.getElementById("calcBtn").addEventListener("click", function () {
  let length = 5;
  let width = 10;
  let area = calculateArea(length, width);
  document.getElementById("calcResult").textContent =
    `The area of a ${length}x${width} rectangle is: ${area}`;
});

// Animate box
function triggerAnimation(element, className) {
  element.classList.remove(className); 
  void element.offsetWidth; // reset
  element.classList.add(className);
}

document.getElementById("animateBoxBtn").addEventListener("click", function () {
  let box = document.getElementById("animatedBox");
  triggerAnimation(box, "move");
});

// Give the animated box an ID for targeting
document.querySelector(".animated-box").id = "animatedBox";
