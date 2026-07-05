import {
  Users,
  Briefcase,
  Boxes,
  Mail,
  TrendingUp,
  Newspaper,
  FolderKanban,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "1,245",
    icon: Users,
    color: "bg-blue-600",
  },
  {
    title: "Services",
    value: "25",
    icon: Briefcase,
    color: "bg-cyan-600",
  },
  {
    title: "Products",
    value: "18",
    icon: Boxes,
    color: "bg-green-600",
  },
  {
    title: "Portfolio",
    value: "56",
    icon: FolderKanban,
    color: "bg-orange-600",
  },
  {
    title: "Blog Posts",
    value: "84",
    icon: Newspaper,
    color: "bg-violet-600",
  },
  {
    title: "Contact Leads",
    value: "326",
    icon: Mail,
    color: "bg-red-600",
  },
  {
    title: "Revenue",
    value: "₹12.8L",
    icon: DollarSign,
    color: "bg-emerald-600",
  },
  {
    title: "Growth",
    value: "+18%",
    icon: TrendingUp,
    color: "bg-indigo-600",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h1 className="text-4xl font-black text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Welcome back, Guddu Kumar 👋
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    {item.value}
                  </h2>

                </div>

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white`}
                >
                  <Icon size={28} />
                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Analytics */}

      <div className="grid gap-8 lg:grid-cols-3">

        {/* Revenue */}

        <div className="rounded-3xl bg-white p-8 shadow-sm lg:col-span-2">

          <h2 className="text-2xl font-bold">
            Revenue Analytics
          </h2>

          <div className="mt-10 flex h-80 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300">

            <p className="text-slate-400">
              Revenue Chart (Recharts)
            </p>

          </div>

        </div>

        {/* Activity */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="mt-8 space-y-6">

            {[
              "New Service Added",
              "New Contact Lead",
              "Blog Updated",
              "Portfolio Published",
              "User Login",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Recent Leads */}

      <div className="rounded-3xl bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Latest Contact Leads
        </h2>

        <div className="mt-6 overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="py-4 text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Phone</th>
                <th className="text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              <tr className="border-b">

                <td className="py-4">Rahul Kumar</td>
                <td>rahul@example.com</td>
                <td>9876543210</td>
                <td>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    New
                  </span>
                </td>

              </tr>

              <tr className="border-b">

                <td className="py-4">Priya Singh</td>
                <td>priya@example.com</td>
                <td>9123456789</td>
                <td>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                    Pending
                  </span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}