const { contextBridge, ipcRenderer } = require("electron");
// const dataTransfer = {
//   send: (data) => ipcRenderer.send("user_note", data),
// };

// contextBridge.exposeInMainWorld("dataTransfer", dataTransfer);
contextBridge.exposeInIsolatedWorld("version", {
  node: process.version.node,
  electron: process.version.electron,
  chrome: process.version.chrome,
});
