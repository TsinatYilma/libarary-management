import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import libraryIcon from "./assets/library-icon.png";
import {
  BookOpen,
  Search,
  Plus,
  Edit,
  Trash2,
  LogIn,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import useAuthStore from "./lib/authStore"

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isLogin, setIsLogin } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isLogin") === "true";
    setIsLogin(authStatus);
  }, []);

  const handleAuthAction = () => {
    if (isLogin) {
      localStorage.removeItem("isLogin");
      localStorage.removeItem("userName");
      setIsLogin(false);
    } else {
      navigate("/auth");
    }
  };

  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Members", href: "/members" },
    { label: "Settings", href: "/settings" },
  ];
  return (
    <div className="min-h-full min-w-full border border-red-500">
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
