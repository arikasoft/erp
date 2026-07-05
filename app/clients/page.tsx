import Link from "next/link";

export default function ClientsPage() {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Clients
          </h1>

          <p className="text-gray-500">
            Manage all clients
          </p>
        </div>

        <Link
          href="/clients/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
        >
          + Add Client
        </Link>

      </div>

      <div className="bg-white rounded-2xl shadow border">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="p-4 text-left">Company</th>

              <th className="p-4 text-left">Contact</th>

              <th className="p-4 text-left">Mobile</th>

              <th className="p-4 text-left">City</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-4">
                No Clients Found
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}