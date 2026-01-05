import {
  Users,
  Search,
  Plus,
  Edit,
  Trash2,
  LogOut,
  Menu,
  X,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import libraryIcon from "../assets/library-icon.png";

const Members = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Members", href: "/members" },
    { label: "Settings", href: "/settings" },
  ];

  const members = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+251-91-234-5678",
      booksIssued: 3,
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+251-92-345-6789",
      booksIssued: 1,
      status: "Active",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.b@email.com",
      phone: "+251-93-456-7890",
      booksIssued: 0,
      status: "Inactive",
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily.w@email.com",
      phone: "+251-94-567-8901",
      booksIssued: 2,
      status: "Active",
    },
    {
      id: 5,
      name: "David Lee",
      email: "david.lee@email.com",
      phone: "+251-95-678-9012",
      booksIssued: 5,
      status: "Active",
    },
    {
      id: 6,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+251-96-789-0123",
      booksIssued: 0,
      status: "Inactive",
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-10 w-10 text-emerald-400" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Manage Members
            </h1>
          </div>
          <p className="text-slate-300 text-lg">
            View and manage library member accounts and their activity.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Add */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
            />
          </div>
          <button className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
            <Plus className="h-5 w-5" />
            Add Member
          </button>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-slate-700 text-white px-6 py-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                    member.status === "Active"
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-slate-500/20 text-slate-300"
                  }`}
                >
                  {member.status}
                </span>
              </div>
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Mail className="h-4 w-4 text-slate-400" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Phone className="h-4 w-4 text-slate-400" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-xl p-3 mb-4">
                  <p className="text-sm text-slate-500">Books Issued</p>
                  <p className="text-2xl font-bold text-slate-800">
                    {member.booksIssued}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-lg font-medium transition-colors">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg font-medium transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
