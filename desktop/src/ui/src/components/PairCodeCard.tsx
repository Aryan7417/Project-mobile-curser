import { Copy, RefreshCw } from "lucide-react";

interface PairCodeCardProps {
  pairCode: string;
}

const PairCodeCard = ({ pairCode }: PairCodeCardProps) => {
  const copyCode = () => {
    navigator.clipboard.writeText(pairCode);
    alert("Pair Code Copied!");
  };

  return (
    <div className="rounded-2xl bg-[#1A1D29] border border-gray-700 p-6 shadow-lg">
      <p className="text-gray-400 text-sm">Pair Code</p>

      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold tracking-widest text-blue-400">
          {pairCode}
        </h1>

        <button
          onClick={copyCode}
          className="rounded-xl bg-blue-500 p-3 transition hover:bg-blue-600"
        >
          <Copy size={18} className="text-white" />
        </button>
      </div>

      <button
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#252B3A] py-3 text-white transition hover:bg-[#2F3647]"
      >
        <RefreshCw size={18} />
        Generate New Code
      </button>
    </div>
  );
};

export default PairCodeCard;