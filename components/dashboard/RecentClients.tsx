export default function RecentClients() {
  const clients = [
    {
      id: 1,
      company: "ABC Technologies",
      person: "Rahul Kumar",
      city: "Patna",
      status: "Active",
    },
    {
      id: 2,
      company: "Digital India Pvt Ltd",
      person: "Amit Singh",
      city: "Delhi",
      status: "Active",
    },
    {
      id: 3,
      company: "Sunrise Infotech",
      person: "Priya Sharma",
      city: "Mumbai",
      status: "Pending",
    },
    {
      id: 4,
      company: "Global Software",
      person: "Vikas Raj",
      city: "Bangalore",
      status: "Active",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow border p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">
          Recent Clients
        </h2>

        <button className="text-blue-600 font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Company</th>

              <th className="text-left py-3">Contact</th>

              <th className="text-left py-3">City</th>

              <th className="text-left py-3">Status</th>

            </tr>

          </thead>

          <tbody>

            {clients.map((client) => (

              <tr
                key={client.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="py-4 font-semibold">
                  {client.company}
                </td>

                <td>{client.person}</td>

                <td>{client.city}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-sm text-white ${
                      client.status === "Active"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  >
                    {client.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}