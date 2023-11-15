const form = document.querySelector("form");
const input = document.querySelector("input");
const thank = document.querySelector(".thanks");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.classList.toggle("hidden");
  thank.classList.toggle("hidden");
});
