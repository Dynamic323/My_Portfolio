import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Login from "./Admin/Auth/Login";
import Dashboard from "./Admin/index"; // You'll need to create this component
import ProtectedRoutes from "./ProtectedRoutes";
import Blog from "./pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);
