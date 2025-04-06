import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const books = useSelector((state) => state.books.books);

  // Extract unique categories from books
  const categories = [...new Set(books.map((book) => book.category))];

  // Sort books by rating in descending order and take the top 10
  const popularBooks = books
    .filter((book) => book.rating)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  return (
    <div>
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
                <Link
                  key={category}
                  to={`/browse-books/${category.toLowerCase()}`}
                >
                  <div className="bg-white hover:bg-slate-200 p-4 rounded-2xl shadow text-center font-medium">
                    {category}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Popular Books */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Popular Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularBooks.map((book) => (
                <div key={book.id} className="bg-white p-4 rounded-2xl shadow">
                  {/* Cover Image */}
                  <img
                    src={book.coverImage || "https://via.placeholder.com/150"}
                    alt={book.title}
                    className="bg-slate-100 w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{book.title}</h3>
                    <p className="text-gray-600">by {book.author}</p>
                    <p className="text-gray-500 text-sm">
                      Rating: {book.rating}/5 ⭐
                    </p>
                    <Link
                      to={`/books/${book.id}`}
                      className="inline-block mt-2 text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
