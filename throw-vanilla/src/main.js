const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const { exposeIpcMainRxStorage } = require("rxdb/plugins/electron");
const { getRxStorageMemory } = require("rxdb/plugins/storage-memory");
const { wrappedValidateAjvStorage } = require("rxdb/plugins/validate-ajv");
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
      nodeIntegration: false,
      // contextIsolation: true,
    },
  });

  //   win.load( path."app/index.html");
  win.loadFile(path.join(__dirname, "..", "app", "index.html"));
  win.webContents.openDevTools();
  win.removeMenu();
}

app
  .whenReady()
  .then(async () => {
    //
    const dbSuffix = new Date().getTime();
    window.ipcMain.handle("getRxDB", () => "dbSuffix");
    //
    const storage = wrappedValidateAjvStorage({ storage: getRxStorageMemory });
    //
    exposeIpcMainRxStorage({
      key: "main-storage",
      ipcMain: ipcMain,
      storage: storage,
    });
    //
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

ipcMain.on("user_note", (event, data) => {
  console.log(data);
});
