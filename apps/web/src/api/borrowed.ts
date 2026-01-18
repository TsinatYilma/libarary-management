export async function borrowBook(bookId: string) {
    const payload = { bookId };
    const token = localStorage.getItem("token");
    if (!token) throw new Error("User not logged in");
  
    const res = await fetch("http://localhost:3000/books/borrowed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
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
  
  export async function getUsersCount() {
    const res = await fetch("http://localhost:3000/books/count");
    if (!res.ok) throw new Error("Failed to fetch books");
    return res.json();
  }
  
  export async function deleteBook(id: string) {
    const res = await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    });
  
    if (!res.ok) throw new Error("Failed to delete book");
  }
  