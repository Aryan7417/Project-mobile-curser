import http from "http";

import { initializeSocket } from "./socket";
import { registerSocketEvents } from "./evenets";
import { generatePairCode } from "./paring";

const PORT = 3000;

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
httpServer.listen(PORT, () => {
  console.log(`✅ Server Started Successfully`);
});