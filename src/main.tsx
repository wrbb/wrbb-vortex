import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home.tsx";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme.ts";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Show from "./pages/show.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeUIProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </ThemeUIProvider>
  </React.StrictMode>
);
