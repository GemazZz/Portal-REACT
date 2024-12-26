import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Admin,
  Documentation,
  ErrorPage,
  ProblemAdmin,
  ProblemUser,
  Quality,
  SpecialEditor,
  Starter,
  StatReview,
  Stats,
  TestCenter,
  TestCreation,
  TestEditor,
  User,
  UserTests,
  WorkersEditor,
} from "./pages";
import ProblemChange from "./pages/Admin/ProblemChange";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Starter />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
  },
  {
    path: "/quality",
    element: <Quality />,
  },
  {
    path: "/testcenter",
    element: <TestCenter />,
  },
  {
    path: "/problem",
    element: <ProblemUser />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/testcreation",
    element: <TestCreation />,
  },
  {
    path: "/admin/testeditor",
    element: <TestEditor />,
  },
  {
    path: "/admin/specialeditor",
    element: <SpecialEditor />,
  },
  {
    path: "/admin/stats",
    element: <Stats />,
  },
  {
    path: "/admin/stats/:statsId",
    element: <StatReview />,
  },
  {
    path: "/admin/workers",
    element: <WorkersEditor />,
  },
  {
    path: "/admin/problems",
    element: <ProblemAdmin />,
  },
  {
    path: "/admin/problems/:problemsId",
    element: <ProblemChange />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/user/:userId/:category",
    element: <UserTests />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
