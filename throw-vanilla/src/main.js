const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
// const { RxDB } = require("./db");

// const { exposeIpcMainRxStorage } = require("rxdb/plugins/electron");
// const { getRxStorageMemory } = require("rxdb/plugins/storage-memory");

// const db = new RxDB();

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      // contextIsolation: true,
    },
  });

  //   win.load( path."app/index.html");
  win.loadFile(path.join(__dirname, "..", "app", "index.html"));
  win.removeMenu();
}

app
  .whenReady()
  .then(async () => {
    await db.rxdbInit();

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

// app.on("ready", async () => {
//   exposeIpcMainRxStorage({
//     key: "main-storage",
//     storage: getRxStorageMemory(),
//     ipcMain: ipcMain,
//   });
// });

// ipcMain.on("user_note", (event, data) => {
//   console.log(data);
// });
