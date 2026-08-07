interface StatusCardProps {
  status: "Running" | "Stopped";
}

const StatusCard = ({ status }: StatusCardProps) => {
  const isRunning = status === "Running";

  return (
    <div className="rounded-2xl bg-[#1A1D29] border border-gray-700 p-6 shadow-lg">
      <p className="text-gray-400 text-sm">Server Status</p>

      <div className="mt-3 flex items-center gap-3">
        <div
          className={`h-3 w-3 rounded-full ${
            isRunning ? "bg-green-500" : "bg-red-500"
          }`}
        />

        <h2
          className={`text-xl font-semibold ${
            isRunning ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </h2>
      </div>
    </div>
  );
};

export default StatusCard;