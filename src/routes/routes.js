import Layout from "../layout/Layout";
import Home from "../component/Home/index";
import LoginPage from "../component/Pages/Login/index";
import SignUp from "../component/Pages/SignUp/index";

const ROUTES = [
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

export default ROUTES;
