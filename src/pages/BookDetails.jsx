import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((book) => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-lg font-semibold text-red-600">Book not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <img
          src={book.coverImage || "Image Not Available"}
          alt={book.title}
          className="bg-slate-100 w-full h-48 object-cover rounded-t-2xl"
        />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {book.title}
        </h1>
        <p className="text-2xl text-gray-700 mb-1">
          by <span className="font-medium text-blue-600">{book.author}</span>
        </p>
        <p className="text-md text-gray-500 mb-6">Category: {book.category}</p>

        <div className="border-t border-gray-200 pt-4 space-y-4">
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Description:</span>{" "}
            {book.description || "No description available."}
          </p>
          <p className="text-gray-800 text-lg">
            <span className="font-semibold">Rating:</span>{" "}
            {book.rating ? (
              <span className="text-yellow-500 font-medium">
                {book.rating}/5 ⭐
              </span>
            ) : (
              "Not rated yet."
            )}
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/browse-books"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-xl shadow hover:bg-blue-700 transition duration-200"
          >
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
