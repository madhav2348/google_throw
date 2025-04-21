const { app, BrowserWindow , ipcMain} = require("electron");
const path = require("node:path");
const { electron } = require("node:process");

const { exposeIpcMainRxStorage } = require("rxdb/plugins/electron");
const { getRxStorageMemory } = require("rxdb/plugins/storage-memory");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration:true
    },
  });

  //   win.load( path."app/index.html");
  win.loadFile(path.join(__dirname, "..", "app", "index.html"));
  win.removeMenu();
}

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on("activate", () => {
      if (BrowserWindow.getAllWindow.length === 0) {
        createWindow();
      }
    });
  })
  .catch((err) => {});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("ready", async () => {
  exposeIpcMainRxStorage({
    key: "main-storage",
    storage: getRxStorageMemory(),
    ipcMain: ipcMain,
  });
});
