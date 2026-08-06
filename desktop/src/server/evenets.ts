
import { Server, Socket } from "socket.io";
import { verifyPairCode } from "./paring";

export const registerSocketEvents = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`🟢 Device Connected: ${socket.id}`);

    // Pair Request
    socket.on("pair-request", ({ pairCode }) => {
      console.log("📱 Pair Request:", pairCode);

      const isValid = verifyPairCode(pairCode);

      if (isValid) {
        socket.emit("pair-success", {
          success: true,
          message: "Device Paired Successfully",
        });

        console.log("✅ Pair Successful");
      } else {
        socket.emit("pair-failed", {
          success: false,
          message: "Invalid Pair Code",
        });

        console.log("❌ Pair Failed");
      }
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