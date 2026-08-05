import { Server, Socket } from "socket.io";

export const registerSocketEvents = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`🟢 Device Connected: ${socket.id}`);

    // Pair Request
    socket.on("pair-request", (data) => {
      console.log("📱 Pair Request:", data);

      // Temporary Response
   
      socket.emit("pair-success", {
   
        success: true,
        message: "Pair request received",
   
    });
    });

    // Mouse Move
   
   
    socket.on("mouse-move", (data) => {
      console.log("🖱 Mouse Move:", data);
    });

    // Left Click
    socket.on("left-click", () => {
      console.log("🖱 Left Click");
    });

    // Right Click
    socket.on("right-click", () => {
      console.log("🖱 Right Click");
    });

    // Scroll
    socket.on("scroll", (data) => {
      console.log("📜 Scroll:", data);
    });

    // Disconnect
    socket.on("disconnect", () => {
      console.log(`🔴 Device Disconnected: ${socket.id}`);
    });
  });
};