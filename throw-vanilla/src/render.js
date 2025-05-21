let searchBar = document.querySelector("search");
let imagesearch = document.getElementById("input-search");
let inputtext = document.getElementById("input-text");
let sidebar = document.querySelector(".sidebar");
let sidebarItemsMenu = document.querySelector(".sidebar-items");
let sidebarItem = document.querySelectorAll(".items");

let noteInput = document.getElementById("note");
let noteTitle = document.getElementById("title");
let noteContent = document.getElementById("takenote");
let newResults = document.querySelector(".result");

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

noteInput.addEventListener("click", () => {
  noteTitle.classList.remove("note-hidden");
});

noteContent.addEventListener("input", () => {
  noteContent.style.height = "auto";
  noteContent.style.height = Math.min(noteContent.scrollHeight, 150) + "px";
});

document.addEventListener("click", (event) => {
  if (!noteInput.contains(event.target)) {
    if (noteContent.value || noteTitle.value) {
      let noteData = { title: noteTitle.value, content: noteContent.value };
      window.dataTransfer.send("toMain", noteData);
      const newNotes = document.createElement("div");
      newNotes.innerHTML = `${noteTitle.value}  ${noteContent.value}`;
      newNotes.className = "allresult";
      newResults.appendChild(newNotes);
    } else {
      noteTitle.value = "";
      noteContent.value = "";
      noteContent.style.height = "auto";
      noteTitle.classList.add("note-hidden");
    }
  }
});
