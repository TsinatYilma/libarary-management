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
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import libraryIcon from "../assets/library-icon.png";

const Members = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });
  const [expandedMemberId, setExpandedMemberId] = useState<number | null>(null);

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
      role: "Student",
      status: "Active",
      issuedBooks: ["The Great Gatsby", "1984", "Pride and Prejudice"],
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      phone: "+251-92-345-6789",
      role: "Faculty",
      status: "Active",
      issuedBooks: ["To Kill a Mockingbird"],
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael.b@email.com",
      phone: "+251-93-456-7890",
      role: "Student",
      status: "Inactive",
      issuedBooks: [],
    },
    {
      id: 4,
      name: "Emily Wilson",
      email: "emily.w@email.com",
      phone: "+251-94-567-8901",
      role: "Staff",
      status: "Active",
      issuedBooks: ["The Catcher in the Rye", "Lord of the Flies"],
    },
    {
      id: 5,
      name: "David Lee",
      email: "david.lee@email.com",
      phone: "+251-95-678-9012",
      role: "Student",
      status: "Active",
      issuedBooks: [
        "1984",
        "Pride and Prejudice",
        "The Great Gatsby",
        "Brave New World",
        "Animal Farm",
      ],
    },
    {
      id: 6,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+251-96-789-0123",
      role: "Faculty",
      status: "Inactive",
      issuedBooks: [],
    },
  ];

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = () => {
    setAddDialogOpen(false);
    setNewMember({ name: "", email: "", phone: "", role: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Overlay Modal */}
      {addDialogOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setAddDialogOpen(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Add New Member
              </h2>
              <button
                onClick={() => setAddDialogOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-slate-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter full name"
                  value={newMember.name}
                  onChange={(e) =>
                    setNewMember({ ...newMember, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={newMember.email}
                  onChange={(e) =>
                    setNewMember({ ...newMember, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={newMember.phone}
                  onChange={(e) =>
                    setNewMember({ ...newMember, phone: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-slate-700 mb-1"
                >
                  Role
                </label>
                <select
                  id="role"
                  value={newMember.role}
                  onChange={(e) =>
                    setNewMember({ ...newMember, role: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-white"
                >
                  <option value="">Select a role</option>
                  <option value="Student">Student</option>
                  <option value="Faculty">Faculty</option>
                  <option value="Staff">Staff</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setAddDialogOpen(false)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMember}
                className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}

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
          <button
            onClick={() => setAddDialogOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
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
                  <div className="flex items-center gap-3 text-slate-600">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="text-sm">{member.role}</span>
                  </div>
                </div>

                {/* Issued Books Section - Clickable */}
                <button
                  onClick={() =>
                    setExpandedMemberId(
                      expandedMemberId === member.id ? null : member.id
                    )
                  }
                  className="w-full bg-slate-100 rounded-xl p-3 mb-4 hover:bg-slate-200 transition-colors text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-slate-500" />
                      <p className="text-sm font-medium text-slate-700">
                        Books Issued
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded-full">
                        {member.issuedBooks.length}
                      </span>
                      {expandedMemberId === member.id ? (
                        <ChevronUp className="h-4 w-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-slate-500" />
                      )}
                    </div>
                  </div>
                </button>

                {expandedMemberId === member.id && (
                  <div className="bg-slate-50 rounded-xl p-3 mb-4 border border-slate-200">
                    {member.issuedBooks.length > 0 ? (
                      <ul className="space-y-2">
                        {member.issuedBooks.map((book, index) => (
                          <li
                            key={index}
                            className="text-sm text-slate-600 flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                              {book}
                            </div>
                            <button
                              className="p-1.5 hover:bg-red-100 rounded-lg text-red-500 hover:text-red-600 transition-colors"
                              title="Return book"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-400 italic">
                        No books currently issued
                      </p>
                    )}
                  </div>
                )}

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
