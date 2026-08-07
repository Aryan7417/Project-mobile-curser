import Header from "../components/Header";
import StatusCard from "../components/StatusCard";
import PairCodeCard from "../components/PairCodeCard";
import ConnectedDeviceCard from "../components/ConnectedDevicdCard";
import ActivityLog from "../components/ActivityLog";
import ComingSoon from "../components/CommingSoon";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] p-8">
      <Header
        title="🖱 CursorMouse"
        subtitle="Control your computer seamlessly"
      />

      <div className="grid grid-cols-2 gap-6">
        <StatusCard status="Running" />
        <PairCodeCard pairCode="482719" />
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <ConnectedDeviceCard
  deviceName="Aryan's Phone"
  ipAddress="172.16.51.6"
  connected={true}
/>
        <ActivityLog
  logs={[
    "🟢 Device Connected",
    "🖱 Mouse Move",
    "👆 Left Click",
    "👆 Right Click",
    "📜 Scroll",
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