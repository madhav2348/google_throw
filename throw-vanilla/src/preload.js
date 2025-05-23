const { contextBridge, ipcRenderer } = require("electron");

const dataTransfer = {
  send: (data) => ipcRenderer.send("user_note", data),
};

contextBridge.exposeInMainWorld("dataTransfer", dataTransfer); // Test for data sending between sandbox

window.getRxDB = () => ipcRenderer.invoke('getRxDB');
