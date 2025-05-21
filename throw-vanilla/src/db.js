// const { createRxDatabase } = require("rxdb");
// const { getRxStorageIpcRenderer } = require("rxdb/plugins/electron");
// var validator = require("validator");
// export class RxDB {
//   constructor() {
//     this.db = null;
//   }

//   async rxdbInit() {
//     try {
//       this.db = await createRxDatabase({
//         name: "google_throw",
//         storage: getRxStorageIpcRenderer({
//           key: "main-storage",
//           ipcRenderer: electron.ipcRenderer,
//         }),
//       });
//       await this.db.addCollections({
//         noteCollection: {
//           schema: {
//             version: 0,
//             title: "Google_Throw",
//             primaryKey: "id",
//             type: "object",

//             properties: {
//               id: {
//                 type: "string",
//                 maxLength: 100,
//               },
//               title: {
//                 type: "string",
//               },
//               note: {
//                 type: "string",
//               },
//             },
//           },
//         },
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   async addData(title, note) {
//     try {
//       // if (!validator.isEmpty(title.trim()) || !validator.isEmpty(note.trim())) {
//       await this.db.noteCollection.insert({
//         id: new Date().toISOString(),
//         title: title,
//         note: note,
//       });
//       // }
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   // removeData() {}
//   async getAllData() {
//     return await this.db.noteCollection.find().exec();
//   }
//   async getOneData(text) {
//     try {
//       if (!validator.isEmpty(text.trim())) {
//         return await this.db.noteCollection
//           .find({
//             selector: {
//               $or: [
//                 { title: { $regex: text, $option: "i" } },
//                 { note: { $regex: text, $option: "i" } },
//               ],
//             },
//           })
//           .exec();
//       }
//     } catch (e) {
//       console.log(e);
//     }
//   }
//   closeDB() {
//     this.db.close();
//   }
// }
