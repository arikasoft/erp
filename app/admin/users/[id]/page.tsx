import Link from "next/link";
import {
  ArrowLeft,
  Pencil,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  BadgeCheck,
  Briefcase,
  Clock,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserDetailsPage({
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
              User Details
            </h1>

            <p className="mt-2 text-cyan-100">
              User ID : {id}
            </p>

          </div>

          <div className="flex gap-4">

            <Link
              href={`/admin/users/${id}/edit`}
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
            >
              <Pencil size={18} />
              Edit User
            </Link>

            <Link
              href="/admin/users"
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

          {/* Profile */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

            <div className="bg-gradient-to-br from-blue-700 to-cyan-500 p-10 text-center">

              <img
                src="https://i.pravatar.cc/300?img=12"
                alt="User"
                className="mx-auto h-40 w-40 rounded-full border-4 border-white object-cover"
              />

              <h2 className="mt-6 text-3xl font-black text-white">
                Guddu Kumar
              </h2>

              <p className="mt-2 text-cyan-100">
                Administrator
              </p>

            </div>

            <div className="space-y-5 p-6">

              <div className="flex items-center gap-3">
                <BadgeCheck className="text-green-600" size={20} />
                <span className="font-semibold">
                  Verified Account
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="text-blue-600" size={20} />
                <span>Role : Admin</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-orange-600" size={20} />
                <span>Last Login : Today</span>
              </div>

            </div>

          </div>

          {/* Information */}

          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-black text-slate-900">
              Personal Information
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <InfoCard
                icon={<User size={20} />}
                title="Full Name"
                value="Guddu Kumar"
              />

              <InfoCard
                icon={<Mail size={20} />}
                title="Email"
                value="admin@example.com"
              />

              <InfoCard
                icon={<Phone size={20} />}
                title="Mobile"
                value="+91 9155751363"
              />

              <InfoCard
                icon={<MapPin size={20} />}
                title="Location"
                value="Darbhanga, Bihar"
              />

              <InfoCard
                icon={<Calendar size={20} />}
                title="Joining Date"
                value="12 Jan 2026"
              />

              <InfoCard
                icon={<Briefcase size={20} />}
                title="Department"
                value="Administration"
              />

            </div>

            {/* About */}

            <div className="mt-10">

              <h3 className="mb-4 text-2xl font-bold">
                About User
              </h3>

              <div className="rounded-2xl bg-slate-50 p-6 leading-8 text-slate-700">

                This user has complete administrative access to
                the ERP system. Responsible for managing users,
                donations, services, blogs, newsletters,
                reports and website content.

                Replace this section with database content.

              </div>

            </div>

            {/* Permissions */}

            <div className="mt-10">

              <h3 className="mb-4 text-2xl font-bold">
                Permissions
              </h3>

              <div className="grid gap-4 md:grid-cols-2">

                {[
                  "Dashboard Access",
                  "Manage Users",
                  "Manage Donations",
                  "Manage Blogs",
                  "Manage Services",
                  "Newsletter",
                  "Reports",
                  "Settings",
                ].map((permission) => (

                  <div
                    key={permission}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
                  >

                    <BadgeCheck
                      className="text-green-600"
                      size={20}
                    />

                    <span>{permission}</span>

                  </div>

                ))}

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