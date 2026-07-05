import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">

      <Sidebar />

      <div className="ml-72">

        <Header />

        <main className="p-8">

          {children}

        </main>

      </div>

    </div>
  );
}