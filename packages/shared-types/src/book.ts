export interface BookDetail {
  bookId: string;
  borrowerId: string;
  borrowedDate: Date; // ISO string
  title: string;
  author: string;
  publisher: string;
  publicationYear: number;
}
