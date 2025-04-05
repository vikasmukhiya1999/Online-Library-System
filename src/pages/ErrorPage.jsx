import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-xl text-gray-800 mt-4">Oops! Page not found.</p>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
