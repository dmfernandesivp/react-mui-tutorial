import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.tsx";
import { RouterProvider } from "react-router";
import { router } from "./router/Routes.tsx";
import StateProvider from "./context/StateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);
