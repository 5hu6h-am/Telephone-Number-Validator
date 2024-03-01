const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const regex = /^(?:1\s?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
check.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  } else if (input.value.match(regex)) {
    results.innerHTML = `<p>Valid US number: ${input.value}</p>`;
  } else {
    results.innerHTML = `<p>Invalid US number: ${input.value}</p>`;
  }
});
clear.addEventListener("click", () => {
  results.textContent = "";
});
