
import { Server, Socket } from "socket.io";
import { verifyPairCode } from "./paring";
//import { mouse } from "@nut-tree-fork/nut-js";
import { mouse, Button } from "@nut-tree-fork/nut-js";

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
    // socket.on("left-click", () => {
    //   console.log("🖱 Left Click");
    // });

//     socket.on("left-click", async () => {
//   try {
//     await mouse.click(Button.LEFT);
//     console.log("🖱 Left Click");
//   } catch (error) {
//     console.error("Left Click Error:", error);
//   }
// });

//     // Right Click
//     socket.on("right-click", async () => {
//   try {
//     await mouse.click(Button.RIGHT);
//     console.log("🖱 Right Clickvv");
//   } catch (error) {
//     console.error("Right Click Error:", error);
//   }
// });


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
    });
  });
};