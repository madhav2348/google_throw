// let dialogBox = document
//   .getElementById("note")
//   .addEventListener("click", () => {
//     document.createElement("dialog").dialog("open");
//   });

let searchBar = document.querySelector("search");

// searchBar.addEventListener("click", () => {
//   searchBar.classList.toggle("clicked");
// });

let imagesearch = document.getElementById("input-search");
let inputtext = document.getElementById("input-text");

if (imagesearch && inputtext) {
  imagesearch.addEventListener("click", () => {
    console.log("clicked");
    inputtext.focus();
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarItemsMenu = document.querySelector(".sidebar-items");

sidebar.addEventListener("click", () => {
  sidebarItemsMenu.classList.toggle("activate");
});

let takenote = document.querySelector(".takenote");
let titlenote = document.querySelector(".title");
takenote.addEventListener("focus", () => {
  titlenote.classList.toggle("focused");
});

let sidebarItem = document.querySelectorAll(".items");

sidebarItem.addEventListener("click", () => {
  console.log('clicked')
  sidebarItem.classList.toggle("activate");
});

// takenote.addEventListener("blur", (event) => {
//   if (event.relatedTarget !== titlenote) {
//     titlenote.classList.remove("focused");
//   }
// });
// takenote.addEventListener('input',()=>{
//   titlenote.classList.toggle('focused')
// })
