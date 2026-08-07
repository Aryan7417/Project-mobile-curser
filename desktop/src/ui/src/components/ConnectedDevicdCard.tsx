interface ConnectedDeviceCardProps {
  deviceName: string;
  ipAddress: string;
  connected: boolean;
}

const ConnectedDeviceCard = ({
  deviceName,
  ipAddress,
  connected,
}: ConnectedDeviceCardProps) => {
  return (
    <div className="rounded-2xl bg-[#1A1D29] border border-gray-700 p-6 shadow-lg">
      <p className="text-gray-400 text-sm">Connected Device</p>

      <div className="mt-4">
        <h2 className="text-2xl font-semibold text-white">
          {deviceName}
        </h2>

        <p className="mt-2 text-gray-400">
          {ipAddress}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <div
            className={`h-3 w-3 rounded-full ${
              connected ? "bg-green-500" : "bg-red-500"
            }`}
          />

          <span
            className={`font-medium ${
              connected ? "text-green-400" : "text-red-400"
            }`}
          >
            {connected ? "Connected" : "Disconnected"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConnectedDeviceCard;