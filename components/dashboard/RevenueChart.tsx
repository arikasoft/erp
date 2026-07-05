"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 25000 },
  { month: "Feb", revenue: 42000 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 58000 },
  { month: "May", revenue: 70000 },
  { month: "Jun", revenue: 95000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-2xl shadow border p-6">

      <h2 className="text-xl font-bold mb-6">
        Monthly Revenue
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            fill="#93C5FD"
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}