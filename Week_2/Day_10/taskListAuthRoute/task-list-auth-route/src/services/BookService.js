import { db } from "../firebase/firebase";
import { Book } from "../models/Book";
import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

class BookService {
  constructor() {
    this.collection = "books";
  }

  async fetchBooks() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    const books = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const book = new Book(doc.title, data.author, data.isbn, doc.id);
      books.push(book);
    });

    return books;
  }

  async createBook(book) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    });

    book.id = docRef.id;
    return book;
  }

  async updateBook(book) {
    const docRef = doc(db, this.collection, book.id);

    await updateDoc(docRef, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    });

    return book;
  }

  async deleteBook(book) {
    const docRef = doc(db, this.collection, book.id);
    await deleteDoc(docRef);
  }
}

const service = new BookService();
export default service;
