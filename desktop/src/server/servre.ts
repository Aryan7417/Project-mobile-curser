import http from "http";

import { initializeSocket } from "./socket";
import { registerSocketEvents } from "./evenets";
import { generatePairCode } from "./paring";
import { mouse } from "@nut-tree-fork/nut-js";


const PORT = 3000;


(async () => {
  try {
  const pos = await mouse.getPosition();

    console.log("Before:", pos);

    await mouse.setPosition({
      x: pos.x + 100,
      y: pos.y,
    });

    // await mouse.setPosition({
    //   x: pos.x + 100,
    //   y: pos.y,
    // })

    console.log("Moved!")
  } catch (e) {
    console.error(e);
  }
}

)();




// Create HTTP Server
const httpServer = http.createServer();

// Initialize Socket.IO
const io = initializeSocket(httpServer);

// Register Socket Events
registerSocketEvents(io);

// Generate Pair Code
const pairCode = generatePairCode();

console.log("==================================");
console.log("🖱 CursorMouse Desktop Server");
console.log("==================================");
console.log(`📡 Server Running : http://localhost:${PORT}`);
console.log(`🔑 Pair Code      : ${pairCode}`);
console.log("==================================");

// Start Server
httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server Started Successfully`);
  console.log(`📡 Server Address: http://172.16.51.6:${PORT}`);
});