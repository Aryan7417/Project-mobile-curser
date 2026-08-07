import {
    Folder,
    Clipboard,
    Smartphone,
    Camera,
    Bell,
    Settings,
} from "lucide-react";

const features = [
    {
        icon: <Folder size={20} />,
        title: "File Transfer",
    },
    {
        icon: <Clipboard size={20} />,
        title: "Clipboard Sync",
    },
    {
        icon: <Smartphone size={20} />,
        title: "Phone Control",
    },
    {
        icon: <Camera size={20} />,
        title: "Camera Access",
    },
    {
        icon: <Bell size={20} />,
        title: "Notifications",
    },
    {
        icon: <Settings size={20} />,
        title: "Advanced Settings",
    },
];

const ComingSoon = () => {
    return (
        <div className="rounded-2xl bg-[#1A1D29] border border-gray-700 p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-white mb-6">
                🚀 Coming Soon
            </h2>

            <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="rounded-xl bg-[#252B3A] p-4 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3 text-gray-300">
                            {feature.icon}
                            <span>{feature.title}</span>
                        </div>

                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
                            Soon
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComingSoon;