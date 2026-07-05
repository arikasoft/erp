import {
  CheckCircle2,
  UserPlus,
  ReceiptIndianRupee,
  FolderKanban,
} from "lucide-react";

const activities = [
  {
    title: "New Client Added",
    desc: "ABC Technologies",
    icon: <UserPlus className="text-blue-600" size={20} />,
  },
  {
    title: "Invoice Generated",
    desc: "INV-10025",
    icon: <ReceiptIndianRupee className="text-green-600" size={20} />,
  },
  {
    title: "Project Completed",
    desc: "ERP Portal",
    icon: <FolderKanban className="text-orange-600" size={20} />,
  },
  {
    title: "Payment Received",
    desc: "₹25,000",
    icon: <CheckCircle2 className="text-emerald-600" size={20} />,
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl border shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b pb-4 last:border-none"
          >
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              {item.icon}
            </div>

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}