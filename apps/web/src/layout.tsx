import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import libraryIcon from "./assets/library-icon.png";
import {
  BookOpen,
  Search,
  Plus,
  Edit,
  Trash2,
  LogOut,
  Menu,
  X,
} from "lucide-react";

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Members", href: "/members" },
    { label: "Settings", href: "/settings" },
  ];
  return (
    <div className="min-h-full min-w-full border border-red-500">
      {/* Navbar */}
      <nav className="bg-slate-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src={libraryIcon}
                alt="Library Icon"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-white font-display text-xl font-semibold">
                Library MS
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    link.href === location.pathname
                      ? "text-amber-400 bg-slate-700/50"
                      : "text-slate-300 hover:text-amber-400 hover:bg-slate-700/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="ml-4 flex items-center gap-2 text-slate-300 hover:text-red-400 hover:bg-slate-700/50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">
                <LogOut className="h-4 w-4" />
                Log out
              </button>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block text-slate-300 hover:text-amber-400 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full text-left flex items-center gap-2 text-slate-300 hover:text-red-400 px-4 py-2 rounded-lg text-sm font-medium">
              <LogOut className="h-4 w-4" />
              Log out
            </button>
          </div>
        )}
      </nav>

      {/* This is where child pages will render */}
      <div className="min-h-full w-full border-2">
        <Outlet />
      </div>
      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3">
          {/* Gallery */}
          <div>
            <h3 className="text-lg font-semibold text-white">Image Gallery</h3>
            <div className="my-4 h-1 w-12 rounded bg-sky-400" />
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`src/assets/images/img ${i}.jpeg`}
                  className="h-24 w-full rounded-lg object-cover hover:scale-105 transition"
                />
              ))}
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white">About</h3>
            <div className="my-4 h-1 w-12 rounded bg-sky-400" />
            <p>
              Our Library Management System simplifies accessing and managing
              library resources efficiently.
            </p>
            <Link className="mt-3 inline-block text-sky-400" to="#">
              Learn more →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="my-4 h-1 w-12 rounded bg-sky-400" />
            <p>
              <strong>Phone:</strong> +2519-00-00-00-00
            </p>
            <p>
              <strong>Address:</strong> Addis Ababa, Ethiopia
            </p>
            <p>
              <strong>Email:</strong> TMGROUP@gmail.com
            </p>
          </div>
        </div>

        <div className="bg-slate-900 py-4 text-center text-sm">
          Designed by <span className="text-sky-400">TM GROUP</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
