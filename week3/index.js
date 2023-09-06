const yardsInput = document.getElementById("yards");
const touchdownsInput = document.getElementById("touchdowns");
const catchesInput = document.getElementById("catch");
const pprCheckbox = document.getElementById("ppr");
const standardCheckbox = document.getElementById("standard");
const resultDiv = document.getElementById("result");

function calculatePoints() {
  // Get input values
  const yards = parseFloat(yardsInput.value);
  const touchdowns = parseFloat(touchdownsInput.value);
  const catches = parseFloat(catchesInput.value);

  // Initialize points
  let points = 0;

  // Calculate points based on scoring options
  if (pprCheckbox.checked) {
    // PPR scoring
    points += yards / 10 + touchdowns * 6 + catches;
  } else if (standardCheckbox.checked) {
    // Standard scoring
    points += yards / 10 + touchdowns * 6;
  }

  // Display the result
  resultDiv.textContent = `Fantasy Points: ${points}`;
}

const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculatePoints);
