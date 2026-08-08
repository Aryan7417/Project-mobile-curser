



import { Server, Socket } from "socket.io";
import { verifyPairCode } from "./paring";
import { mouse, Button } from "@nut-tree-fork/nut-js";
import { serverState } from "../store/serverState";

export const registerSocketEvents = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log(`🟢 Device Connected: ${socket.id}`);

    socket.onAny((event, ...args) => {
      console.log("📨 Event Received:", event, args);
    });

    // Pair Request
    socket.on("pair-request", ({ pairCode }) => {
      console.log("📱 Pair Request:", pairCode);

      const isValid = verifyPairCode(pairCode);

      if (isValid) {
        // Update Dashboard State
        serverState.connected = true;
        serverState.deviceName = "Android Phone";
        serverState.status = "Running";

        console.log("✅ Pair Successful");
        console.log("📊 Server State:", serverState);

        socket.emit("pair-success", {
          success: true,
          message: "Device Paired Successfully",
        });
      } else {
        console.log("❌ Pair Failed");

        socket.emit("pair-failed", {
          success: false,
          message: "Invalid Pair Code",
        });
      }
    });



    socket.on("pair-request", ({ pairCode }) => {
  console.log("📱 Pair Request:", pairCode);

  const isValid = verifyPairCode(pairCode);

  if (isValid) {
    serverState.connected = true;
    serverState.deviceName = "Android Phone";
    serverState.status = "Running";

    console.log("✅ PAIR SUCCESS");
    console.log("CONNECTED:", serverState.connected);
    console.log("STATE:", serverState);

    socket.emit("pair-success", {
      success: true,
      message: "Device Paired Successfully",
    });
  } else {
    console.log("❌ Pair Failed");

    socket.emit("pair-failed", {
      success: false,
      message: "Invalid Pair Code",
    });
  }
});

    // Mouse Move
    socket.on("mouse-move", async ({ dx, dy }) => {
      try {
        const position = await mouse.getPosition();

        await mouse.move([
          {
            x: position.x + dx,
            y: position.y + dy,
          },
        ]);
      } catch (error) {
        console.error("Mouse Move Error:", error);
      }
    });

    // Left Click
    socket.on("left-click", async () => {
      try {
        console.log("🖱 Left Click");

        await mouse.pressButton(Button.LEFT);
        await new Promise((resolve) => setTimeout(resolve, 50));
        await mouse.releaseButton(Button.LEFT);
      } catch (error) {
        console.error("Left Click Error:", error);
      }
    });

    // Right Click
    socket.on("right-click", async () => {
      try {
        console.log("🖱 Right Click");

        await mouse.pressButton(Button.RIGHT);
        await new Promise((resolve) => setTimeout(resolve, 50));
        await mouse.releaseButton(Button.RIGHT);
      } catch (error) {
        console.error("Right Click Error:", error);
      }
    });

    // Scroll
    socket.on("scroll", (data) => {
      console.log("📜 Scroll:", data);
    });

    // Disconnect
    socket.on("disconnect", () => {
      console.log(`🔴 Device Disconnected: ${socket.id}`);

      serverState.connected = false;
      serverState.deviceName = "No Device Connected";

      console.log("📊 Server State:", serverState);
    });
  });
};