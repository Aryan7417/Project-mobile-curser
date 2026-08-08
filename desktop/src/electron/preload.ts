// // import { contextBridge } from "electron";

// // contextBridge.exposeInMainWorld("cursorMouse", {
// //   appName: "CursorMouse Desktop",
// //   version: "1.0.0",
// // });

// import { contextBridge, ipcRenderer } from "electron";
// console.log("✅ PRELOAD LOADED");
// contextBridge.exposeInMainWorld("cursorMouse", {
//   appName: "CursorMouse Desktop",
//   version: "1.0.0",


//    getDashboardData: () => ipcRenderer.invoke("get-dashboard-data"),

//   getPairCode: () => ipcRenderer.invoke("get-pair-code"),

//   getServerStatus: () => ipcRenderer.invoke("get-server-status"),



// });


import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("cursorMouse", {
  appName: "CursorMouse Desktop",
  version: "1.0.0",

  getDashboardData: () => {
    return ipcRenderer.invoke("get-dashboard-data");
  },

  getPairCode: () => {
    return ipcRenderer.invoke("get-pair-code");
  },

  getServerStatus: () => {
    return ipcRenderer.invoke("get-server-status");
  },
});