let searchBar = document.querySelector("search");
let imagesearch = document.getElementById("input-search");
let inputtext = document.getElementById("input-text");
let sidebar = document.querySelector(".sidebar");
let sidebarItemsMenu = document.querySelector(".sidebar-items");
let takenote = document.querySelector(".takenote");
let titlenote = document.querySelector(".title");
let sidebarItem = document.querySelectorAll(".items");

if (imagesearch && inputtext) {
  imagesearch.addEventListener("click", () => {
    console.log("clicked");
    inputtext.focus();
  });
}

sidebar.addEventListener("click", () => {
  sidebarItemsMenu.classList.toggle("activate");
});

takenote.addEventListener("focus", () => {
  titlenote.classList.toggle("focused");
});

takenote.addEventListener("change", (event) => {
  console.log(event.target.value);
});

titlenote.addEventListener("change", (event) => {
  console.log(event.target.value);
});

sidebarItem.addEventListener("click", () => {
  console.log("clicked");
  sidebarItem.classList.toggle("activate");
});

takenote.addEventListener("blur", (event) => {
  if (event.relatedTarget !== titlenote) {
    titlenote.classList.remove("focused");
  }
});
