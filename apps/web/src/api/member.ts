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

export async function getBooksCount() {
  const res = await fetch("http://localhost:3000/books/count");
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
}

export async function deleteMember(id: string) {
  const res = await fetch(`http://localhost:3000/member/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete book");
}
