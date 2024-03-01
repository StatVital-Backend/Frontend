import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import LoginPage from "../components/LoginPage/LoginPage";
import SignUp from "../components/SignUp/SignUp";

export const ROUTES = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
];
