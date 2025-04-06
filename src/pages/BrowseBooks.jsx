import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookSearchBar from "../components/BookSearchBar";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [...new Set(books.map((book) => book.category))];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Books</h1>
      <BookSearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Categories</h2>
        <ul className="flex flex-wrap gap-4 mt-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                to={`/browse-books/${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded ${
                  category?.toLowerCase() === cat.toLowerCase()
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white p-4 rounded shadow">
            <img
              src={book.coverImage || "Image Not Available"}
              alt={book.title}
              className="bg-slate-100 w-full h-48 object-cover rounded-t-2xl"
            />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-gray-600">by {book.author}</p>
            <p className="text-gray-500 text-sm">Category: {book.category}</p>
            <Link
              to={`/books/${book.id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBooks;
