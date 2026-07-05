"use client";

import { useState } from "react";

export default function NewClientPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-5xl mx-auto">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Add New Client
        </h1>

        <p className="text-gray-500">
          Create a new client for ArikaSoft ERP
        </p>
      </div>

      <form className="bg-white rounded-2xl shadow border p-8">

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label>Company Name</label>

            <input
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="Company Name"
            />
          </div>

          <div>
            <label>Contact Person</label>

            <input
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="Contact Person"
            />
          </div>

          <div>
            <label>Mobile</label>

            <input
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="Mobile Number"
            />
          </div>

          <div>
            <label>Email</label>

            <input
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="Email Address"
            />
          </div>

          <div>
            <label>GST Number</label>

            <input
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="GST Number"
            />
          </div>

          <div>
            <label>PAN Number</label>

            <input
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="PAN Number"
            />
          </div>

          <div className="md:col-span-2">

            <label>Address</label>

            <textarea
              className="w-full border rounded-xl p-3 mt-2"
              rows={4}
            />

          </div>

        </div>

        <div className="mt-8">

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
          >
            Save Client
          </button>

        </div>

      </form>

    </div>
  );
}