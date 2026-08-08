import { app, BrowserWindow } from "electron";
import path from "path";
import '../server/servre'
import { ipcMain } from "electron";
import { getPairCode } from "../server/paring";
import { serverState } from "../store/serverState";


let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1000,
    minHeight: 700,

    title: "CursorMouse",

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  // mainWindow.loadFile(
  //   path.join(__dirname, "src/ui/App.html")
  // );

  //   mainWindow.loadFile(
  //   path.join(process.cwd(), "src", "ui", "App.tsx")
  // );

  //mainWindow.loadURL("http://localhost:5173");

  
  mainWindow.loadURL("http://localhost:5173");
  console.log("Preload Path:", path.join(__dirname, "preload.js"));
mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {

  ipcMain.handle("get-pair-code", () => {
    return getPairCode();
  });

  ipcMain.handle("get-server-status", () => {
    return "Running";
  });

  ipcMain.handle("get-dashboard-data", () => {
  return serverState;
});



  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});