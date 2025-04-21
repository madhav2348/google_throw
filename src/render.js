// let dialogBox = document
//   .getElementById("note")
//   .addEventListener("click", () => {
//     document.createElement("dialog").dialog("open");
//   });

// let searchBar = document.querySelector("search");

// searchBar.addEventListener("click", () => {
//   searchBar.classList.toggle("clicked");
// });

// document.addEventListener("DOMContentLoaded", () => {
//   let imagesearch = document.getElementById("input-search");
//   let inputtext = document.getElementById("input-text");

//   if (imagesearch && inputtext) {
//     imagesearch.addEventListener("click", () => {
//       inputtext.focus();
//     });
//   }
// });

let sidebar = document.querySelector(".sidebar");
let sidebarItemsMenu = document.querySelector(".sidebar-items");

sidebar.addEventListener("click", () => {
  sidebarItemsMenu.classList.toggle('activate')
});


