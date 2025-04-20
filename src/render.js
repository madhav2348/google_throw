const dialogBox = document
  .getElementById(".note")
  .addEventListener("click", () => {
    document.createElement("dialog").dialog("open");
  });

const searchBar = document.querySelector(".search");

searchBar.addEventListener("click", () => {
  searchBar.classList.toggle("clicked");
});

document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("input-search");
  const input = document.getElementById("input-text");

  if (image && input) {
    image.addEventListener("click", () => {
      input.focus();
    });
  }
});
