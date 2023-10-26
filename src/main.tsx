import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home.tsx";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Show from "./pages/show.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/show/:id",
    element: <Show />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeUIProvider>
  </React.StrictMode>
);
