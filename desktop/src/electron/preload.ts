import { contextBridge } from "electron";

contextBridge.exposeInMainWorld("cursorMouse", {
  appName: "CursorMouse Desktop",
  version: "1.0.0",
});