
let noteInput = document.getElementById("note");
let noteTitle = document.getElementById("title");
let noteContent = document.getElementById("takenote");
let newResults = document.querySelector(".result");

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
      window.dataTransfer.send( noteData);
      const newNotes = document.createElement("div");
      newNotes.innerHTML = `${noteTitle.value}  ${noteContent.value}`;
      newNotes.className = "allresult";
      newResults.appendChild(newNotes);
    }
    noteTitle.value = "";
    noteContent.value = "";
    noteContent.style.height = "auto";
    noteTitle.classList.add("note-hidden");
  }
});
