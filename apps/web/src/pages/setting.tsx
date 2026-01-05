import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Database,
  LogOut,
  Menu,
  X,
  Save,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import libraryIcon from "../assets/library-icon.png";

const Settings = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");

  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Members", href: "/members" },
    { label: "Settings", href: "/settings" },
  ];

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "system", label: "System", icon: Database },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <SettingsIcon className="h-10 w-10 text-amber-400" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Settings
            </h1>
          </div>
          <p className="text-slate-300 text-lg">
            Manage your account settings and preferences.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-indigo-500 text-white shadow-lg"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === "profile" && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">
                    Profile Settings
                  </h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Admin"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="User"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="admin@library.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        defaultValue="+251-91-000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <button className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                      <Save className="h-5 w-5" />
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">
                    Notification Settings
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        label: "Email notifications for new books",
                        checked: true,
                      },
                      {
                        label: "Email notifications for overdue returns",
                        checked: true,
                      },
                      {
                        label: "SMS notifications for reservations",
                        checked: false,
                      },
                      { label: "Weekly summary reports", checked: true },
                    ].map((item, index) => (
                      <label
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-indigo-300 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={item.checked}
                          className="w-5 h-5 rounded text-indigo-500 focus:ring-indigo-500"
                        />
                        <span className="text-slate-700">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">
                    Security Settings
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <button className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                      <Shield className="h-5 w-5" />
                      Update Password
                    </button>
                  </form>
                </div>
              )}

              {activeTab === "system" && (
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-800 mb-6">
                    System Settings
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Library Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Central Library"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Maximum Books Per Member
                      </label>
                      <input
                        type="number"
                        defaultValue="5"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Loan Duration (days)
                      </label>
                      <input
                        type="number"
                        defaultValue="14"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                      />
                    </div>
                    <button className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                      <Save className="h-5 w-5" />
                      Save Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
