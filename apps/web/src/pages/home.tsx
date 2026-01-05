import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">


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
          className="mt-10 inline-block rounded-xl bg-indigo-500 px-8 py-4 text-lg font-semibold shadow-lg hover:bg-indigo-600 transition"
        >
          Start Managing Books
        </Link>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Total Books", value: "1,250", desc: "Books available" },
            { title: "Members", value: "340", desc: "Registered users" },
            { title: "Borrowed", value: "120", desc: "Currently borrowed" },
          ].map((stat) => (
            <div
              key={stat.title}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1"
            >
              <div className="bg-slate-700 px-6 py-4 text-white font-semibold">
                {stat.title}
              </div>
              <div className="p-6">
                <h2 className="text-5xl font-bold text-slate-800">
                  {stat.value}
                </h2>
                <p className="text-slate-500">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white"
            to="/books"
          >
            Manage Books
          </Link>
          <Link
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white"
            to="/members"
          >
            Manage Members
          </Link>
          <Link
            className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white"
            to="/settings"
          >
            Settings
          </Link>
        </div>
      </section>

     
    </div>
  );
}
