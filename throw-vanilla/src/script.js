let searchBar = document.querySelector("search");
let imagesearch = document.getElementById("input-search");
let inputtext = document.getElementById("input-text");
let sidebar = document.querySelector(".sidebar");
let sidebarItemsMenu = document.querySelector(".sidebar-items");
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

// sidebarItem.addEventListener("click", () => {
//   console.log("clicked");
//   sidebarItem.classList.toggle("activate");
// });
