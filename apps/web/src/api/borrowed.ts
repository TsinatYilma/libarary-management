export async function borrowBook(borrowed: {
  bookId: string;
  User_email: string;
}) {
  const payload = { borrowed };

  const res = await fetch("http://localhost:3000/books/borrowed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(borrowed),
  });

  if (!res.ok) throw new Error("Failed to borrow book");
  console.log("Book borrowed successfully!");
  return res.json();
}

export async function getBooks() {
  const res = await fetch("http://localhost:3000/books");
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function getBorrowedCount() {
  const res = await fetch("http://localhost:3000/books/borrowed/count");
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function deleteBook(id: string) {
  const res = await fetch(`http://localhost:3000/books/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete book");
}
