export async function addBook(book: {
  title: string;
  author: string;
  isbn: string;
  category: string;
}) {
  const res = await fetch("http://localhost:3000/books", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });

  if (!res.ok) throw new Error("Failed to add book");
  return res.json();
}

export async function getBooks() {
  const res = await fetch("http://localhost:3000/books");
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function deleteBook(id: string) {
  const res = await fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete book");
}
