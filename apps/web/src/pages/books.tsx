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
import { useState } from "react";
import { Link } from "react-router-dom";
import libraryIcon from "../assets/library-icon.png";

export type Book = {
  id: number; // unique identifier (could be UUID or DB id)
  title: string; // book title
  author: string; // author name
  isbn: string; // ISBN code
  category: string;
  status: string; // category/genre
};
const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isbn: "978-0743273565",
    status: "Available",
    category: "Fiction",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0446310789",
    status: "Issued",
    category: "Fiction",
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    isbn: "978-0451524935",
    status: "Available",
    category: "Dystopian",
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0141439518",
    status: "Available",
    category: "Romance",
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "978-0316769488",
    status: "Issued",
    category: "Fiction",
  },
  {
    id: 6,
    title: "Lord of the Flies",
    author: "William Golding",
    isbn: "978-0399501487",
    status: "Available",
    category: "Fiction",
  },
];

const Books = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [bookstate, setBooks] = useState<Book[]>([...books]);
  const [newBook, setNewBook] = useState({
    id: bookstate.length + 1,
    title: "",
    author: "",
    isbn: "",
    category: "",
    status: "Available",
  });

  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Members", href: "/members" },
    { label: "Settings", href: "/settings" },
  ];

  const filteredBooks = bookstate.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleAddBookForm = () => {
    console.log("the handler is fine");
    setAddDialogOpen(!addDialogOpen);
    setNewBook({
      id: bookstate.length + 1,
      title: "",
      author: "",
      isbn: "",
      category: "",
      status: "Available",
    });
    console.log(addDialogOpen);
  };
  function handleAddBook() {
    setBooks([...bookstate, newBook]);
    setNewBook({
      id: bookstate.length + 1,
      title: "",
      author: "",
      isbn: "",
      category: "",
      status: "Available",
    }); // reset form setAddDialogOpen(false); // close modal }
  }
  function DeleteBook(id: number) {
    setBooks(bookstate.filter((book) => book.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-amber-400" />
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Manage Books
            </h1>
          </div>
          <p className="text-slate-300 text-lg">
            Browse, add, edit, and manage your library's book collection.
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
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            onClick={handleAddBookForm}
          >
            <Plus className="h-5 w-5" />
            Add Book
          </button>
        </div>
        {addDialogOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setAddDialogOpen(false)}
            />
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Add New Book
                </h2>
                <button
                  onClick={() => setAddDialogOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5 text-slate-500" />
                </button>
              </div>

              {/* FORM START */}
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // prevent page reload
                  handleAddBook(); // call your add function
                }}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Enter book title"
                    value={newBook.title}
                    onChange={(e) =>
                      setNewBook({ ...newBook, title: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-gray-700 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="author"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Author
                  </label>
                  <input
                    id="author"
                    type="text"
                    placeholder="Enter author name"
                    value={newBook.author}
                    onChange={(e) =>
                      setNewBook({ ...newBook, author: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-gray-700 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="isbn"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    ISBN
                  </label>
                  <input
                    id="isbn"
                    type="text"
                    placeholder="Enter ISBN"
                    value={newBook.isbn}
                    onChange={(e) =>
                      setNewBook({ ...newBook, isbn: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-gray-700 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-slate-700 mb-1"
                  >
                    Category
                  </label>
                  <input
                    id="category"
                    type="text"
                    placeholder="Enter category"
                    value={newBook.category}
                    onChange={(e) =>
                      setNewBook({ ...newBook, category: e.target.value })
                    }
                    className="w-full px-4 py-2.5 text-gray-700 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setAddDialogOpen(false)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors"
                  >
                    Add Book
                  </button>
                </div>
              </form>
              {/* FORM END */}
            </div>
          </div>
        )}

        {/* Books Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Author</th>
                  <th className="px-6 py-4 text-left font-semibold hidden md:table-cell">
                    ISBN
                  </th>
                  <th className="px-6 py-4 text-left font-semibold hidden sm:table-cell">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredBooks.map((book) => (
                  <tr
                    key={book.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {book.title}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{book.id}</td>
                    <td className="px-6 py-4 text-slate-500 hidden md:table-cell">
                      {book.isbn}
                    </td>
                    <td className="px-6 py-4 text-slate-500 hidden sm:table-cell">
                      {book.category}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          book.status === "Available"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {book.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 hover:bg-indigo-100 rounded-lg text-indigo-600 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          className="p-2 hover:bg-red-100 rounded-lg text-red-600 transition-colors"
                          onClick={() => DeleteBook(book.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
