// 🟦 Animate the box when you hover the first button
document.getElementById("hoverBtn").addEventListener("mouseover", function () {
  const box = document.querySelector(".box");
  box.style.transition = "all 0.5s ease-in-out";  // smooth effect
  box.style.transform = "scale(1.2)"; // grow bigger
  box.style.backgroundColor = "lightblue"; // change color
});

// Reset box when mouse leaves
document.getElementById("hoverBtn").addEventListener("mouseout", function () {
  const box = document.querySelector(".box");
  box.style.transform = "scale(1)";
  box.style.backgroundColor = "tomato";
});

// 🧮 Function to calculate area (just a demo with fixed numbers)
document.getElementById("calcBtn").addEventListener("click", function () {
  let length = 5;
  let width = 10;
  let area = length * width;

  alert(`📏 The area of a ${length}x${width} rectangle is ${area} square units.`);
  console.log("✅ Area calculated:", area);
});

