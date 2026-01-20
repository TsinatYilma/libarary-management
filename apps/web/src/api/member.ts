export async function addMember(member: {
  fullName: string;
  email: string;
  phone: string;
  role: string;
}) {
  const res = await fetch("http://localhost:3000/members", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(member),
  });

  if (!res.ok) throw new Error("Failed to add book");
  else console.log("GOD DAMN! IT WORKED :)");
  return res.json();
}

export async function getMembers() {
  const res = await fetch("http://localhost:3000/members/all");
  if (!res.ok) throw new Error("Failed to fetch members");
  return res.json();
}

export async function getMemberssCount() {
  const res = await fetch("http://localhost:3000/members/count");
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function deleteMember(id: string) {
  const res = await fetch(`http://localhost:3000/members/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete book");
}
export async function returnBook(deleteObject: {
  email: string;
  bookId: string;
}) {
  console.log("so ami iii", deleteObject);

  const res = await fetch("http://localhost:3000/books/borrowed/returnBook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(deleteObject),
  });

  if (!res.ok) throw new Error("Failed to return book");
  console.log("Book returned successfully!");

  return res.json();
}
