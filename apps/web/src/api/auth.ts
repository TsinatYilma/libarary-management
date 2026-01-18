export async function addBook(book: {
    title: string;
    author: string;
    quantity: number;
    publisher: string;
    publicationYear: string | number; // allow string from input
  }) {
    const payload = {
      ...book,
      publicationYear: Number(book.publicationYear),
    };
  
    const res = await fetch("http://localhost:3000/books/addBook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  
    if (!res.ok) throw new Error("Failed to add book");
    else console.log("GOD DAMN! IT WORKED :)");
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
  