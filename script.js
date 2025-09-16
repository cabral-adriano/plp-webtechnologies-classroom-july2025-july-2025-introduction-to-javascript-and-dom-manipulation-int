// =============================
// Part 1: Variables & Conditionals
// =============================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let result = document.getElementById("ageResult");

  if (age >= 18) {
    result.textContent = "You are an adult.";
  } else if (age > 0) {
    result.textContent = "You are underage.";
  } else {
    result.textContent = "Please enter a valid age.";
  }
});

// =============================
// Part 2: Functions
// =============================

// Function 1: Calculate sum
function calculateSum(a, b) {
  return a + b;
}

document.getElementById("sumBtn").addEventListener("click", function() {
  let total = calculateSum(5, 7);
  document.getElementById("sumResult").textContent = "5 + 7 = " + total;
});

// Function 2: Toggle message
function toggleMessage() {
  let msg = document.getElementById("toggleMsg");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
}

document.getElementById("toggleBtn").addEventListener("click", toggleMessage);

// =============================
// Part 3: Loops
// =============================

document.getElementById("listBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old list

  // Example with for loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    list.appendChild(li);
  }
});

// =============================
// Part 4: DOM Manipulation
// =============================

// Change header text
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.querySelector("header h1").textContent = "JavaScript DOM is Awesome!";
});

// Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let ul = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New dynamically added item";
  ul.appendChild(newItem);
});
