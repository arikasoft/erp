import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  color: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  color,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-5 hover:shadow-lg transition-all">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className={`${color} p-4 rounded-2xl text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
}