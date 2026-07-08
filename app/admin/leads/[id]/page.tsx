import Link from "next/link";
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Building2,
  Globe,
  Calendar,
  BadgeCheck,
  Pencil,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function LeadDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}

      <div className="border-b bg-white shadow-sm">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">

          <div>

            <h1 className="text-3xl font-black text-slate-900">
              Lead Details
            </h1>

            <p className="mt-1 text-slate-500">
              Lead ID : {id}
            </p>

          </div>

          <div className="flex gap-3">

            <Link
              href={`/admin/leads/${id}/edit`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <Pencil size={18} />
              Edit
            </Link>

            <Link
              href="/admin/leads"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
            >
              <ArrowLeft size={18} />
              Back
            </Link>

          </div>

        </div>

      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Profile */}

          <div className="rounded-3xl bg-white p-8 shadow">

            <div className="flex flex-col items-center">

              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 text-5xl font-black text-blue-700">

                A

              </div>

              <h2 className="mt-6 text-2xl font-black">

                Anand Kumar

              </h2>

              <p className="text-slate-500">

                Potential Customer

              </p>

              <span className="mt-4 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                New Lead

              </span>

            </div>

          </div>

          {/* Details */}

          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow">

            <h2 className="mb-8 text-2xl font-black">
              Lead Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <InfoCard
                icon={<User size={20} />}
                title="Full Name"
                value="Anand Kumar"
              />

              <InfoCard
                icon={<Phone size={20} />}
                title="Mobile"
                value="+91 9876543210"
              />

              <InfoCard
                icon={<Mail size={20} />}
                title="Email"
                value="info@example.com"
              />

              <InfoCard
                icon={<Building2 size={20} />}
                title="Company"
                value="ArikaSoft Pvt Ltd"
              />

              <InfoCard
                icon={<Globe size={20} />}
                title="Website"
                value="www.arikasoft.com"
              />

              <InfoCard
                icon={<BadgeCheck size={20} />}
                title="Status"
                value="Interested"
              />

              <InfoCard
                icon={<Calendar size={20} />}
                title="Created"
                value="05 July 2026"
              />

              <InfoCard
                icon={<Calendar size={20} />}
                title="Follow Up"
                value="10 July 2026"
              />

            </div>

            <div className="mt-10">

              <h3 className="mb-3 text-xl font-bold">
                Notes
              </h3>

              <div className="rounded-2xl bg-slate-50 p-6 leading-8 text-slate-700">

                Customer is interested in ERP Software,
                GST Billing,
                CRM,
                HRMS and Website Development.

                Follow up after product demo.

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">

      <div className="mb-3 text-blue-600">
        {icon}
      </div>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-1 font-bold text-slate-900">
        {value}
      </h3>

    </div>
  );
}