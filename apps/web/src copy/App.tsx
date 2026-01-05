import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout.tsx";
import "./App.css";
import "./index.css";
import Home from "./pages/home.ts";
import Books from "./pages/books.ts";
import Members from "./pages/members.tsx";
import Settings from "./pages/setting.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* path="/" */}
        <Route path="/books" element={<Books />} />
        <Route path="/members" element={<Members />} />
        <Route path="/settings" element={<Settings />} />
        {/* path="/books" */}
      </Route>
    </Routes>
  );
}

export default App;
