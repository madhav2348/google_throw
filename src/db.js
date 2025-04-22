const { createRxDatabase } = require("rxdb");
const { getRxStorageIpcRenderer } = require("rxdb/plugins/electron");

class RxDB {
    
  constructor() {
    this.db = null;
  }

  async rxdbInit() {
    try {
      this.db = await createRxDatabase({
        name: "google_throw",
        storage: getRxStorageIpcRenderer({
          key: "main-storage",
          ipcRenderer: electron.ipcRenderer,
        }),
      });

      this.db = db;
    } catch (e) {
      console.log(e);
    }

    await db.addCollections({
      noteCollection: {
        schema: {
          version: 0,
          title: "Google_Throw",
          primaryKey: "key",
          type: "object",

          properties: {
            id: {
              type: "string",
              maxLength: "100",
            },
            title: {
              type: "string",
            },
            note: {
              type: "string",
            },
          },
        },
      },
    });
  }
  async addData(title, note) {
    await this.db.noteCollection.insert({
      id: new Date().toISOString(),
      title: title,
      note: note,
    });
  }
  removeData() {}
  getAllData() {
    this.db.noteCollection.find();
  }
  getOneData(text) {
    const title = this.db.noteCollection.find({
      selector: {
        $or: [{ title: text }, { note: text }],
      },
    });
  }
  closeDB() {
    this.db.close();
  }
}


export default RxDB;