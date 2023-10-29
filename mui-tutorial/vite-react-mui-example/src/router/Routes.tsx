import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import CoinListGrid from "../components/CoinListGrid";

import Profile from "../components/Profile";
import PageNotFound from "../components/PageNotFound";
import Settings from "../components/Settings";

const routes: RouteObject[] = [
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <CoinListGrid />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/not-found",
        element: <PageNotFound />,
      },
      {
        path: "*",
        element: <Navigate replace to="/not-found" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
