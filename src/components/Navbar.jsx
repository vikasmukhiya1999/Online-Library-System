import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="bg-teal-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            Online Library System
          </div>
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {" "}
              Home
            </Link>
            <Link
              to="/browse-books"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {" "}
              Browse Books
            </Link>
            <Link
              to="/add-book"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {" "}
              Add Book
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
