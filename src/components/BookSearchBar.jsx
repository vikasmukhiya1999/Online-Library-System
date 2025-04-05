import React from "react";

const BookSearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default BookSearchBar;
