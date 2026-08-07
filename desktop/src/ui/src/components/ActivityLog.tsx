interface ActivityLogProps {
  logs: string[];
}

const ActivityLog = ({ logs }: ActivityLogProps) => {
  return (
    <div className="rounded-2xl bg-[#1A1D29] border border-gray-700 p-6 shadow-lg h-[320px]">
      <h2 className="text-xl font-semibold text-white mb-4">
        📜 Activity Logs
      </h2>

      <div className="space-y-3 overflow-y-auto h-[230px] pr-2">
        {logs.length > 0 ? (
          logs.map((log, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg bg-[#252B3A] p-3"
            >
              <span className="text-green-400">●</span>

              <p className="text-gray-300 text-sm">{log}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-20">
            No Activity Yet
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;