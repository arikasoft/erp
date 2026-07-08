"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ImageIcon,
    Upload,
    Search,
    Filter,
    FolderOpen,
    FileImage,
    HardDrive,
    Download,
} from "lucide-react";

const stats = [
    {
        title: "Total Files",
        value: "1,286",
        color: "from-blue-600 to-cyan-500",
        icon: FolderOpen,
    },
    {
        title: "Images",
        value: "964",
        color: "from-green-600 to-emerald-500",
        icon: FileImage,
    },
    {
        title: "Storage Used",
        value: "12.8 GB",
        color: "from-purple-600 to-pink-500",
        icon: HardDrive,
    },
    {
        title: "Downloads",
        value: "8,542",
        color: "from-orange-500 to-red-500",
        icon: Download,
    },
];

export default function MediaPage() {
    return (
        <main className="min-h-screen bg-slate-100">

            {/* Hero */}

            <section className="bg-gradient-to-r from-slate-950 via-blue-900 to-cyan-700">

                <div className="mx-auto max-w-7xl px-6 py-12">

                    <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

                        <div>

                            <h1 className="text-5xl font-black text-white">
                                Media Library
                            </h1>

                            <p className="mt-3 text-lg text-cyan-100">
                                Upload, organize and manage all media files.
                            </p>

                        </div>

                        <div className="flex gap-4">

                            <button className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur hover:bg-white/20">

                                <Upload size={20} />

                                Upload Files

                            </button>

                            <Link
                                href="/admin/media/upload"
                                className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black hover:scale-105 transition"
                            >

                                <ImageIcon size={20} />

                                New Upload

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* Stats */}

            <section className="mx-auto -mt-10 max-w-7xl px-6">

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="overflow-hidden rounded-3xl bg-white shadow-xl"
                            >

                                <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>

                                    <Icon size={34} />

                                    <h2 className="mt-5 text-4xl font-black">
                                        {item.value}
                                    </h2>

                                    <p className="mt-2 opacity-90">
                                        {item.title}
                                    </p>

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </section>

            {/* Search */}

            <section className="mx-auto mt-10 max-w-7xl px-6">

                <div className="rounded-3xl bg-white p-6 shadow-lg">

                    <div className="grid gap-5 lg:grid-cols-4">

                        <div className="relative lg:col-span-2">

                            <Search
                                size={20}
                                className="absolute left-4 top-4 text-slate-400"
                            />

                            <input
                                placeholder="Search media..."
                                className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 outline-none focus:border-blue-600"
                            />

                        </div>

                        <select className="rounded-xl border border-slate-300 px-4 py-4">

                            <option>All Files</option>
                            <option>Images</option>
                            <option>Videos</option>
                            <option>PDF</option>
                            <option>Documents</option>

                        </select>

                        <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white hover:bg-blue-700">

                            <Filter size={18} />

                            Apply Filter

                        </button>

                    </div>

                </div>

            </section>

            {/* Media Grid */}

            <section className="mx-auto mt-10 max-w-7xl px-6 pb-12">

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {[
                        {
                            id: 1,
                            name: "education-camp.jpg",
                            url: "https://picsum.photos/600/400?1",
                            type: "Image",
                            size: "2.4 MB",
                            date: "12 Jul 2026",
                        },
                        {
                            id: 2,
                            name: "medical-camp.jpg",
                            url: "https://picsum.photos/600/400?2",
                            type: "Image",
                            size: "3.1 MB",
                            date: "10 Jul 2026",
                        },
                        {
                            id: 3,
                            name: "water-project.jpg",
                            url: "https://picsum.photos/600/400?3",
                            type: "Image",
                            size: "1.8 MB",
                            date: "09 Jul 2026",
                        },
                        {
                            id: 4,
                            name: "women-training.jpg",
                            url: "https://picsum.photos/600/400?4",
                            type: "Image",
                            size: "2.7 MB",
                            date: "08 Jul 2026",
                        },
                        {
                            id: 5,
                            name: "plantation.jpg",
                            url: "https://picsum.photos/600/400?5",
                            type: "Image",
                            size: "2.2 MB",
                            date: "06 Jul 2026",
                        },
                        {
                            id: 6,
                            name: "food-distribution.jpg",
                            url: "https://picsum.photos/600/400?6",
                            type: "Image",
                            size: "4.5 MB",
                            date: "04 Jul 2026",
                        },
                    ].map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -6 }}
                            className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all"
                        >
                            <div className="relative">

                                <img
                                    src={item.url}
                                    alt={item.name}
                                    className="h-56 w-full object-cover"
                                />

                                <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">
                                    {item.type}
                                </div>

                            </div>

                            <div className="p-5">

                                <h3 className="truncate text-lg font-bold text-slate-800">
                                    {item.name}
                                </h3>

                                <div className="mt-3 flex justify-between text-sm text-slate-500">

                                    <span>{item.size}</span>

                                    <span>{item.date}</span>

                                </div>

                                <div className="mt-5 grid grid-cols-4 gap-2">

                                    <button className="rounded-xl bg-blue-100 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200">
                                        View
                                    </button>

                                    <button className="rounded-xl bg-green-100 py-2 text-sm font-semibold text-green-700 hover:bg-green-200">
                                        Copy
                                    </button>

                                    <button className="rounded-xl bg-yellow-100 py-2 text-sm font-semibold text-yellow-700 hover:bg-yellow-200">
                                        Edit
                                    </button>

                                    <button className="rounded-xl bg-red-100 py-2 text-sm font-semibold text-red-700 hover:bg-red-200">
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </section>

        </main>
    );
}