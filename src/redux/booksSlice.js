import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 38,
      title: "Whispers from the Lake",
      author: "Ruth Gale",
      category: "Mystery",
    },
    {
      id: 13,
      title: "Unshakeable Habits",
      author: "Tony Evans",
      category: "Non-Fiction",
    },
    {
      id: 7,
      title: "Between the Lines",
      author: "Tom Reed",
      category: "Fiction",
    },
    {
      id: 25,
      title: "Alien Archives",
      author: "Derek Moon",
      category: "Sci-Fi",
    },
    {
      id: 42,
      title: "Voice of a Generation",
      author: "Anita Lowe",
      category: "Biography",
    },
    {
      id: 3,
      title: "The Painted Sky",
      author: "Nina Roy",
      category: "Fiction",
    },
    {
      id: 31,
      title: "The Clockmaker's Secret",
      author: "Diane West",
      category: "Mystery",
    },
    {
      id: 48,
      title: "One Step Ahead",
      author: "Ella Ford",
      category: "Biography",
    },
    {
      id: 20,
      title: "Finding Stillness",
      author: "Nora James",
      category: "Non-Fiction",
    },
    {
      id: 34,
      title: "Shadows at Noon",
      author: "Eli Grant",
      category: "Mystery",
    },
    {
      id: 9,
      title: "Echoes in Rain",
      author: "Bryan West",
      category: "Fiction",
    },
    { id: 23, title: "Neon Genesis", author: "Alan Burke", category: "Sci-Fi" },
    {
      id: 15,
      title: "Everyday Stoic",
      author: "Robert Grey",
      category: "Non-Fiction",
    },
    {
      id: 46,
      title: "Notes from My Life",
      author: "Tina Royce",
      category: "Biography",
    },
    {
      id: 5,
      title: "Letters to Nowhere",
      author: "Ethan Cole",
      category: "Fiction",
    },
    {
      id: 22,
      title: "Quantum Divide",
      author: "Ivy Harper",
      category: "Sci-Fi",
    },
    {
      id: 36,
      title: "The Fog Room",
      author: "Marcus Dean",
      category: "Mystery",
    },
    {
      id: 41,
      title: "Living to Tell",
      author: "Samuel Irving",
      category: "Biography",
    },
    {
      id: 14,
      title: "Thinking Clearly",
      author: "Janet Lin",
      category: "Non-Fiction",
    },
    {
      id: 10,
      title: "Whispering Pines",
      author: "Helen Grant",
      category: "Fiction",
    },
    {
      id: 24,
      title: "The Last Signal",
      author: "Maria Holt",
      category: "Sci-Fi",
    },
    {
      id: 47,
      title: "Resilience: A Memoir",
      author: "Daniel King",
      category: "Biography",
    },
    {
      id: 35,
      title: "The 9th Door",
      author: "Veronica Bell",
      category: "Mystery",
    },
    {
      id: 19,
      title: "The Productivity Code",
      author: "Vincent Shaw",
      category: "Non-Fiction",
    },
    {
      id: 30,
      title: "The Mars Artifact",
      author: "Olivia Stone",
      category: "Sci-Fi",
    },
    {
      id: 4,
      title: "When We Were Stars",
      author: "Kelly Moore",
      category: "Fiction",
    },
    {
      id: 33,
      title: "The Red Ledger",
      author: "Sophie Quinn",
      category: "Mystery",
    },
    {
      id: 6,
      title: "Crimson Summer",
      author: "Sara Bennett",
      category: "Fiction",
    },
    {
      id: 11,
      title: "The Power of Focus",
      author: "Mark Taylor",
      category: "Non-Fiction",
    },
    {
      id: 39,
      title: "Last Train to Hollow",
      author: "Zach Rowe",
      category: "Mystery",
    },
    {
      id: 21,
      title: "Stars Beyond Reach",
      author: "Leo Marsh",
      category: "Sci-Fi",
    },
    {
      id: 44,
      title: "The Story of Us",
      author: "Martha Keen",
      category: "Biography",
    },
    {
      id: 32,
      title: "Beneath the Ashes",
      author: "Hank Lowry",
      category: "Mystery",
    },
    {
      id: 1,
      title: "The Silent Garden",
      author: "Laura Fields",
      category: "Fiction",
    },
    {
      id: 8,
      title: "Fragments of Us",
      author: "Claire Adams",
      category: "Fiction",
    },
    { id: 28, title: "Warp Drift", author: "Kylie Tran", category: "Sci-Fi" },
    {
      id: 43,
      title: "Unwritten Chapters",
      author: "Carlos Meyer",
      category: "Biography",
    },
    {
      id: 18,
      title: "Minimal Living",
      author: "Chris Yates",
      category: "Non-Fiction",
    },
    {
      id: 26,
      title: "Time Loop Paradox",
      author: "Nadia Frost",
      category: "Sci-Fi",
    },
    { id: 27, title: "Exo-Terra", author: "Ben Carter", category: "Sci-Fi" },
    {
      id: 45,
      title: "Walking Through Fire",
      author: "Jared Knox",
      category: "Biography",
    },
    {
      id: 16,
      title: "Eat to Thrive",
      author: "Maggie Wilson",
      category: "Non-Fiction",
    },
    {
      id: 49,
      title: "From Streets to Stage",
      author: "Rick Bowen",
      category: "Biography",
    },
    {
      id: 17,
      title: "Breaking Busy",
      author: "Allison Lee",
      category: "Non-Fiction",
    },
    {
      id: 12,
      title: "Mind Over Matter",
      author: "Lena Brooks",
      category: "Non-Fiction",
    },
    {
      id: 2,
      title: "Moonlight Whispers",
      author: "James Knight",
      category: "Fiction",
    },
    {
      id: 29,
      title: "Dark Matter Protocol",
      author: "Sean Pike",
      category: "Sci-Fi",
    },
    {
      id: 37,
      title: "The Missing Letter",
      author: "Lara Kim",
      category: "Mystery",
    },
    {
      id: 40,
      title: "Cold Case Cottage",
      author: "Emily Drew",
      category: "Mystery",
    },
    {
      id: 50,
      title: "The Long Journey",
      author: "Natalie Singh",
      category: "Biography",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
