# Online Library System

## Description

The Online Library System is a web application that allows users to browse, add, and discover books across various categories. It provides an intuitive interface for managing a library of books, complete with features like category-based browsing, detailed book information, and the ability to add new books.

## Features

- **Browse Books**: Explore books by categories or search by title/author.
- **Add Books**: Add new books to the library with details like title, author, category, rating, and description.
- **Book Details**: View detailed information about each book, including its description, rating, and cover image.
- **Error Handling**: A user-friendly 404 page for invalid routes.
- **Responsive Design**: Optimized for seamless use across devices.

## Technologies Used

- **React**: For building a dynamic and interactive user interface.
- **React Router**: For managing navigation and routing.
- **Redux Toolkit**: For state management.
- **Tailwind CSS**: For modern, utility-first styling.
- **Vite**: For fast development and optimized builds.

## Project Directory Structure

```
online-library-system/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Navbar.jsx    # Navigation bar
│   │   └── BookSearchBar.jsx # Search bar for books
│   ├── pages/            # Application pages
│   │   ├── Home.jsx      # Home page with categories and popular books
│   │   ├── BrowseBooks.jsx # Browse books by category or search
│   │   ├── BookDetails.jsx # Detailed view of a single book
│   │   ├── AddBook.jsx   # Form to add a new book
│   │   └── ErrorPage.jsx # 404 error page
│   ├── redux/            # Redux state management
│   │   ├── booksSlice.js # Slice for managing books state
│   │   └── store.js      # Redux store configuration
│   ├── routes/           # Application routing
│   │   └── AppRouter.jsx # Centralized route definitions
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   ├── index.css         # Global styles
├── public/               # Static assets
├── index.html            # HTML template
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite configuration
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## Installation

1. Ensure **Node.js** and **npm** are installed on your system.
2. Clone the repository:
   ```bash
   git clone https://github.com/vikasmukhiya1999/online-library-system.git
   ```
3. Navigate to the project directory:
   ```bash
   cd online-library-system
   ```
4. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and visit `http://localhost:5173/` to view the app.
3. To build the project for production:
   ```bash
   npm run build
   ```
4. Preview the production build:
   ```bash
   npm run preview
   ```

## Live Demo

Explore the live version of the app here: [Live Demo](https://online-library-system-947.netlify.app/)

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes with a meaningful message:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push your branch to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request to the main repository.

## Acknowledgments

- [React](https://reactjs.org/) for the robust UI framework.
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management.
- [React Router](https://reactrouter.com/) for navigation.
- [Tailwind CSS](https://tailwindcss.com/) for elegant styling.
- [Vite](https://vitejs.dev/) for the blazing-fast development experience.
- Special thanks to the open-source community for their support and inspiration.
