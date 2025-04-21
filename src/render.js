const { createRxDatabase } = require("rxdb");
const { getRxStorageIpcRenderer } = require("rxdb/plugins/electron");




// let searchBar = document.querySelector("search");

// let imagesearch = document.getElementById("input-search");
// let inputtext = document.getElementById("input-text");

// if (imagesearch && inputtext) {
//   imagesearch.addEventListener("click", () => {
//     console.log("clicked");
//     inputtext.focus();
//   });
// }

// let sidebar = document.querySelector(".sidebar");
// let sidebarItemsMenu = document.querySelector(".sidebar-items");

// sidebar.addEventListener("click", () => {
//   sidebarItemsMenu.classList.toggle("activate");
// });

// let takenote = document.querySelector(".takenote");
// let titlenote = document.querySelector(".title");
// takenote.addEventListener("focus", () => {
//   titlenote.classList.toggle("focused");
// });

// takenote.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });



// titlenote.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });
// let sidebarItem = document.querySelectorAll(".items");

// sidebarItem.addEventListener("click", () => {
//   console.log("clicked");
//   sidebarItem.classList.toggle("activate");
// });

// takenote.addEventListener("blur", (event) => {
//   if (event.relatedTarget !== titlenote) {
//     titlenote.classList.remove("focused");
//   }
// });
// takenote.addEventListener('input',()=>{
//   titlenote.classList.toggle('focused')
// })

// let formData = document.querySelector(".form");
// formData.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });


const db = await createRxDatabase({
  name: "google_throw",
  storage: getRxStorageIpcRenderer({
    key: "main-storage",
    ipcRenderer: electron.ipcRenderer,
  }),
});


export default db;