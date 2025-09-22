// 🧮 Function to calculate the area of a rectangle
function calculateArea(length, width) {
  console.log("🔢 Doing some serious rectangle math...");
  return length * width;
}

// 🌍 Global variable with delusions of grandeur
let globalMessage = "I am a global variable! I go where I please!";

// 🕵️‍♂️ Local variable hiding from the world
function showScopeExample() {
  let localMessage = "I am a local variable! You can't sit with us!";
  console.log("🌐 Global says:", globalMessage);
  console.log("📦 Local whispers:", localMessage);
}

showScopeExample();

// 🧠 When the button is clicked, unleash the math beast
document.getElementById("calcBtn").addEventListener("click", function () {
  let length = 5;
  let width = 10;
  let area = calculateArea(length, width);

  let resultMessage = `📏 The area of a ${length}x${width} rectangle is: ${area} square units of pure awesomeness.`;
  document.getElementById("calcResult").textContent = resultMessage;

  console.log("✅ Calculation complete. You may now brag.");
});

// 💃 Trigger animation with dramatic flair
function triggerAnimation(element, className) {
  console.log("🎬 Rehearsing animation... removing class:", className);
  element.classList.remove(className);

  void element.offsetWidth; // 🧙‍♂️ Dark magic to reset animation

  console.log("🎉 Showtime! Adding class:", className);
  element.classList.add(className);
}

// 🕺 Animate the box like it's auditioning for a dance movie
document.getElementById("animateBoxBtn").addEventListener("click", function () {
  let box = document.getElementById("animatedBox");
  if (!box) {
    console.warn("🚨 Box not found! Did it run away?");
    return;
  }
  triggerAnimation(box, "move");
});

// 🧙‍♀️ Give the animated box an ID so JS can boss it around
document.querySelector(".animated-box").id = "animatedBox";
console.log("📦 Box has been knighted with ID: animatedBox");
