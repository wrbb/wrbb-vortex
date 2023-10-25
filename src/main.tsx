import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home.tsx";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeUIProvider>
  </React.StrictMode>
);
