import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import BrowseBooks from "../pages/BrowseBooks";
import AddBook from "../pages/AddBook";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/browse-books",
        element: <BrowseBooks />,
      },
      {
        path: "/browse/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default AppRouter;
