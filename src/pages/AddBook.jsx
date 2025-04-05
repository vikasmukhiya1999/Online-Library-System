import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/booksSlice";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required.";
    if (!formData.author.trim()) newErrors.author = "Author is required.";
    if (!formData.category.trim()) newErrors.category = "Category is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBook = {
        id: Date.now(),
        ...formData,
      };
      dispatch(addBook(newBook));
      navigate("/browse-books");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;