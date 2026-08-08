// import Header from "../components/Header";
// import StatusCard from "../components/StatusCard";
// import PairCodeCard from "../components/PairCodeCard";
// import ConnectedDeviceCard from "../components/ConnectedDevicdCard";
// import ActivityLog from "../components/ActivityLog";
// import ComingSoon from "../components/CommingSoon";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-[#0B0F19] p-8">
//       <Header
//         title="🖱 CursorMouse"
//         subtitle="Control your computer seamlessly"
//       />

//       <div className="grid grid-cols-2 gap-6">
//         <StatusCard status="Running" />
//         <PairCodeCard pairCode="482719" />
//       </div>

//       <div className="grid grid-cols-2 gap-6 mt-6">
//         <ConnectedDeviceCard
//   deviceName="Aryan's Phone"
//   ipAddress="172.16.51.6"
//   connected={true}
// />
//         <ActivityLog
//   logs={[
//     "🟢 Device Connected",
//     "🖱 Mouse Move",
//     "👆 Left Click",
//     "👆 Right Click",
//     "📜 Scroll",
//   ]}
// />
//       </div>

//       <div className="mt-6">
//         <ComingSoon />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";

import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import PairCodeCard from "../components/PairCodeCard";
import ConnectedDeviceCard from "../components/ConnectedDevicdCard";
import ActivityLog from "../components/ActivityLog";
import ComingSoon from "../components/CommingSoon";

const Dashboard = () => {
  const [pairCode, setPairCode] = useState("------");
  const [status, setStatus] = useState<"Running" | "Stopped">("Stopped");
  const [deviceName, setDeviceName] = useState("No Device");
  const [connected, setConnected] = useState(false);

  

  // useEffect(() => {
  //   async function loadData() {
  //     console.log("cursorMouse:", window.cursorMouse);

  //     try {
  //       const data = await window.cursorMouse.getDashboardData();

  //       console.log("Dashboard Data:", data);

  //       setPairCode(data.pairCode);
  //       setStatus(data.status as "Running" | "Stopped");
  //       setDeviceName(data.deviceName);
  //       setConnected(data.connected);
  //     } catch (err) {
  //       console.error("ERROR:", err);
  //     }
  //   }

  //   loadData();
  // }, []);



  useEffect(() => {
  async function loadData() {
    try {
      const data = await window.cursorMouse.getDashboardData();

      console.log("📊 Dashboard Data:", data);

      setPairCode(data.pairCode);
      setStatus(data.status as "Running" | "Stopped");
      setDeviceName(data.deviceName);
      setConnected(data.connected);
    } catch (err) {
      console.error("Dashboard Error:", err);
    }
  }

  // First load
  loadData();

  // Keep dashboard updated
  const interval = setInterval(loadData, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
  return (
    <div className="min-h-screen bg-[#0B0F19] p-8">
      <Header
        title="🖱 CursorMouse"
        subtitle="Control your computer seamlessly"
      />

      <div className="grid grid-cols-2 gap-6">
        <StatusCard status={status} />
        <PairCodeCard pairCode={pairCode} />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <ConnectedDeviceCard
          deviceName={deviceName}
          ipAddress="172.16.51.6"
          connected={connected}
        />
        <ActivityLog
          logs={[
            "Server Started",
            "Waiting for Device...",
          ]}
        />
      </div>

      <div className="mt-6">
        <ComingSoon />
      </div>
    </div>
  );
};

export default Dashboard;