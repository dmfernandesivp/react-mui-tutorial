import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import CoinListGrid from "../components/CoinListGrid";
import Settings from "@mui/icons-material/Settings";

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
    ],
  },
];

export const router = createBrowserRouter(routes);
