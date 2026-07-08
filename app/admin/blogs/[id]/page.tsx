import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Pencil } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="border-b bg-white">

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">

          <div>

            <h1 className="text-3xl font-black text-slate-900">
              Blog Details
            </h1>

            <p className="mt-2 text-slate-500">
              Blog ID : {id}
            </p>

          </div>

          <Link
            href="/admin/blogs"
            className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white"
          >
            <ArrowLeft className="mr-2 inline" size={18} />
            Back
          </Link>

        </div>

      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">

        <div className="rounded-3xl bg-white p-8 shadow">

          <div className="mb-6 flex items-center gap-4">

            <div className="rounded-xl bg-blue-100 p-3">
              <Tag className="text-blue-600" />
            </div>

            <div>

              <h2 className="text-3xl font-black">
                Sample Blog Title
              </h2>

              <p className="mt-1 text-slate-500">
                This page will display a single blog.
              </p>

            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-50 p-5">

              <User className="mb-3 text-blue-600" />

              <p className="text-sm text-slate-500">
                Author
              </p>

              <h3 className="font-bold">
                Admin
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-50 p-5">

              <Calendar className="mb-3 text-green-600" />

              <p className="text-sm text-slate-500">
                Published
              </p>

              <h3 className="font-bold">
                10 Jul 2026
              </h3>

            </div>

            <div className="rounded-2xl bg-slate-50 p-5">

              <Pencil className="mb-3 text-orange-600" />

              <p className="text-sm text-slate-500">
                Status
              </p>

              <h3 className="font-bold text-green-600">
                Published
              </h3>

            </div>

          </div>

          <div className="mt-8 rounded-2xl border p-6">

            <h3 className="mb-4 text-2xl font-bold">
              Blog Content
            </h3>

            <p className="leading-8 text-slate-700">
              This is a placeholder blog details page.
              Replace this section with content fetched
              from Supabase, Prisma, or your database
              using the blog ID.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}