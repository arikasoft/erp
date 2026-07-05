import { createClient } from "@/lib/supabase/server";
import {
  IndianRupee,
  Users,
  UserCog,
  FolderKanban,
} from "lucide-react";

import StatsCard from "@/components/dashboard/StatsCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentClients from "@/components/dashboard/RecentClients";

export default async function DashboardPage() {
  const supabase = await createClient();

  const [{ count: clientCount }, { count: employeeCount }] =
    await Promise.all([
      supabase
        .from("clients")
        .select("*", { count: "exact", head: true }),

      supabase
        .from("employees")
        .select("*", { count: "exact", head: true }),
    ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome to ArikaSoft ERP
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Revenue"
          value="₹0"
          icon={<IndianRupee size={28} />}
          color="bg-green-600"
        />

        <StatsCard
          title="Clients"
          value={String(clientCount ?? 0)}
          icon={<Users size={28} />}
          color="bg-blue-600"
        />

        <StatsCard
          title="Employees"
          value={String(employeeCount ?? 0)}
          icon={<UserCog size={28} />}
          color="bg-purple-600"
        />

        <StatsCard
          title="Projects"
          value="0"
          icon={<FolderKanban size={28} />}
          color="bg-orange-500"
        />
      </div>

      <div className="grid xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>

        <QuickActions />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <RecentActivity />
        <RecentClients />
      </div>
    </div>
  );
}