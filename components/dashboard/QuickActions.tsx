import Link from "next/link";
import {
  Plus,
  Users,
  ReceiptIndianRupee,
  FolderKanban,
} from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "New Client",
      href: "/clients/new",
      icon: <Users size={20} />,
    },
    {
      title: "Create Invoice",
      href: "/billing/new",
      icon: <ReceiptIndianRupee size={20} />,
    },
    {
      title: "New Project",
      href: "/projects/new",
      icon: <FolderKanban size={20} />,
    },
    {
      title: "Add Employee",
      href: "/employees/new",
      icon: <Plus size={20} />,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white p-5 transition"
          >
            <div className="mb-3">{action.icon}</div>

            <p className="font-semibold">
              {action.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}