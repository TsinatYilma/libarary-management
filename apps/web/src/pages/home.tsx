import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  BookMarked,
  Settings,
  LogOut,
  LogIn,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getBooksCount } from "../api/books";
import {getUsersCount} from "../api/auth"

export default function Home() {
  const { data: booksCount = { count: 0 } } = useQuery({
    queryKey: ["booksCount"],
    queryFn: getBooksCount,
    refetchInterval: 5000,
  });
  const { data: userCount = { count: 0 } } = useQuery({
    queryKey: ["booksCount"],
    queryFn: getUsersCount,
    refetchInterval: 5000,
  });
  return (
    <div className="min-h-screen bg-slate-50 border">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-700 py-20 text-center text-white">
        <img
          src="src\assets\library-icon.png"
          className="mx-auto mb-8 h-24 w-24 rounded-2xl"
        />

        <h1 className="text-4xl font-bold md:text-5xl">
          Welcome to the Library <br />
          <span className="text-amber-400">Management System</span>
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          Stay organized and efficient!
        </p>

        <Link
          to="/books"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 mt-10 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-delay-2"
        >
          Start Managing Books
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Total Books",
              value: booksCount.count,
              desc: "Books available",
              icon: BookOpen,
            },
            {
              title: "Members",
              value: userCount.count,
              desc: "Registered users",
              icon: Users,
            },
            {
              title: "Borrowed",
              value: "120",
              desc: "Currently borrowed",
              icon: BookMarked,
            },
          ].map((stat, index) => (
            <div
              key={stat.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-slate-700 text-white px-6 py-4 font-semibold text-lg">
                {stat.title}
              </div>
              <div className="p-6 flex items-start justify-between">
                <div>
                  <p className="text-5xl font-display font-bold text-slate-800 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-sm">{stat.desc}</p>
                </div>
                <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-indigo-100 transition-colors">
                  <stat.icon className="h-8 w-8 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/books"
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <BookOpen className="h-5 w-5" />
            Manage Books
          </Link>
          <Link
            to="/members"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Users className="h-5 w-5" />
            Manage Members
          </Link>
          <Link
            to="/settings"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </section>
    </div>
  );
}
