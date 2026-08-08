// export {};

// declare global {
//   interface Window {
//     cursorMouse: {
//       appName: string;
//       version: string;

//       getPairCode: () => Promise<string>;

//       getServerStatus: () => Promise<string>;

//       getServerStatus: () => Promise<"Running" | "Stopped">;
//     };
//   }
// }

// interface Window {
//   cursorMouse: {
//     getDashboardData: () => Promise<{
//       status: string;
//       pairCode: string;
//       connected: boolean;
//       deviceName: string;
//     }>;
//   };
// }


export {};

declare global {
  interface Window {
    cursorMouse: {
      appName: string;
      version: string;

      getPairCode: () => Promise<string>;

      getServerStatus: () => Promise<"Running" | "Stopped">;

      getDashboardData: () => Promise<{
        status: string;
        pairCode: string;
        connected: boolean;
        deviceName: string;
      }>;
    };
  }
}