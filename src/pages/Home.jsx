import React from "react";
import { Link } from "react-router-dom";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Biography"];
const popularBooks = [
  { id: 1, title: "Dune", author: "Frank Herbert" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 4, title: "Sapiens", author: "Yuval Noah Harari" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">
          Welcome to the Online Library
        </h1>

        {/* Book Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Book Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-white p-4 rounded-2xl shadow text-center font-medium"
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        {/* Popular Books */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularBooks.map((book) => (
              <div key={book.id} className="bg-white p-4 rounded-2xl shadow">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-gray-600">by {book.author}</p>
                <Link
                  to={`/books/${book.id}`}
                  className="inline-block mt-2 text-blue-600 hover:underline"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
