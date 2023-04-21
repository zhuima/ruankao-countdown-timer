import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VerificationCode from "./AuthService";
import wechat from "/assets/wechat.jpeg";

import ErrorPage from "./error-page";
import App from "./App";
import CoursePage from "./CoursePage";
import Document from "./Document";
import Books from "./Books";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/course",
    element: <CoursePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/document",
    element: (
      <VerificationCode image={wechat}>
        <Document />
      </VerificationCode>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/books",
    element: (
      <VerificationCode image={wechat}>
        <Books />
      </VerificationCode>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
