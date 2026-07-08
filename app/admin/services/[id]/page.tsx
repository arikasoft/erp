import Link from "next/link";
import {
  ArrowLeft,
  Pencil,
  Calendar,
  User,
  Globe,
  Tag,
  Eye,
  CheckCircle2,
  IndianRupee,
  Clock,
  Briefcase,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ServiceDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-black text-white">
              Service Details
            </h1>

            <p className="mt-2 text-cyan-100">
              Service ID : {id}
            </p>

          </div>

          <div className="flex gap-4">

            <Link
              href={`/admin/services/${id}/edit`}
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
            >
              <Pencil size={18} />
              Edit
            </Link>

            <Link
              href="/admin/services"
              className="flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-900"
            >
              <ArrowLeft size={18} />
              Back
            </Link>

          </div>

        </div>

      </section>

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

            <img
              src="https://picsum.photos/700/500"
              alt="Service"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <span className="inline-flex rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
                Active Service
              </span>

            </div>

          </div>

          {/* Details */}

          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-black text-slate-900">
              ERP Software Development
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Complete ERP Software Development including
              HRMS, CRM, Billing, Inventory, Payroll,
              Finance, GST, Donation Management,
              School ERP and NGO MIS.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <InfoCard
                icon={<Briefcase size={20} />}
                title="Category"
                value="Software Development"
              />

              <InfoCard
                icon={<IndianRupee size={20} />}
                title="Starting Price"
                value="₹25,000"
              />

              <InfoCard
                icon={<Clock size={20} />}
                title="Delivery Time"
                value="15 Days"
              />

              <InfoCard
                icon={<CheckCircle2 size={20} />}
                title="Status"
                value="Active"
              />

              <InfoCard
                icon={<User size={20} />}
                title="Manager"
                value="Guddu Kumar"
              />

              <InfoCard
                icon={<Calendar size={20} />}
                title="Created"
                value="10 July 2026"
              />

              <InfoCard
                icon={<Eye size={20} />}
                title="Views"
                value="18,250"
              />

              <InfoCard
                icon={<Tag size={20} />}
                title="Service Code"
                value="ERP-001"
              />

              <InfoCard
                icon={<Globe size={20} />}
                title="Website"
                value="www.arikasoft.com"
              />

            </div>

            <div className="mt-10">

              <h3 className="mb-4 text-2xl font-bold">
                Service Description
              </h3>

              <div className="rounded-2xl bg-slate-50 p-6 leading-8 text-slate-700">

                Our ERP Software helps automate complete
                business operations including customer
                management, inventory, HR, payroll,
                accounting, billing, reports,
                online payments and dashboards.

                This section can later be replaced with
                data fetched from your MySQL/Prisma/Supabase database.

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
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