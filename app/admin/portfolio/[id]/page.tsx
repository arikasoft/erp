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
  ImageIcon,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PortfolioDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}

      <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10">

          <div>

            <h1 className="text-4xl font-black text-white">
              Portfolio Details
            </h1>

            <p className="mt-2 text-cyan-100">
              Portfolio ID : {id}
            </p>

          </div>

          <div className="flex gap-4">

            <Link
              href={`/admin/portfolio/${id}/edit`}
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
            >
              <Pencil size={18} />
              Edit
            </Link>

            <Link
              href="/admin/portfolio"
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
              alt="Portfolio"
              className="h-72 w-full object-cover"
            />

            <div className="p-6">

              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white">

                <ImageIcon size={18} />

                Change Image

              </button>

            </div>

          </div>

          {/* Details */}

          <div className="lg:col-span-2 rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-3xl font-black text-slate-900">

              School Development Project

            </h2>

            <p className="mt-3 text-slate-600">

              Complete infrastructure development,
              digital classroom,
              smart learning,
              sanitation and drinking water project.

            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <InfoCard
                icon={<User size={20} />}
                title="Client"
                value="Anand Jivan Foundation Trust"
              />

              <InfoCard
                icon={<Calendar size={20} />}
                title="Completed"
                value="15 July 2026"
              />

              <InfoCard
                icon={<Tag size={20} />}
                title="Category"
                value="NGO Project"
              />

              <InfoCard
                icon={<Globe size={20} />}
                title="Website"
                value="https://ajftrust.org"
              />

              <InfoCard
                icon={<Eye size={20} />}
                title="Views"
                value="12,540"
              />

              <InfoCard
                icon={<CheckCircle2 size={20} />}
                title="Status"
                value="Completed"
              />

            </div>

            <div className="mt-10">

              <h3 className="mb-3 text-2xl font-bold">

                Project Description

              </h3>

              <div className="rounded-2xl bg-slate-50 p-6 leading-8 text-slate-700">

                This portfolio showcases the successful implementation
                of education, sanitation, smart classroom,
                drinking water and community development initiatives.

                Replace this content with your database data.

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