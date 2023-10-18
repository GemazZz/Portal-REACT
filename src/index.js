import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Starter from "./pages/Home/საინფორმაციო პორტალი";
import Documentation from "./pages/Home/დოკუმენტაცია";
import Quality from "./pages/Home/ხარისხის მართვის სისტემა";
import TestCenter from "./pages/Home/სასწავლო ცენტრი";
import Others from "./pages/Home/სხვადასხვა";
import Admin from "./pages/Admin/Admin";
import TestCreation from "./pages/Admin/TestCreation";
import TestEditor from "./pages/Admin/TestEditor";
import Stats from "./pages/Admin/Stats";
import SpecialEditor from "./pages/Admin/SpecialEditor";
import User from "./pages/User/User";
import UserTests from "./pages/User/UserTests";
import ErrorPage from "./pages/Home/ErrorPage";

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
    path: "/others",
    element: <Others />,
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
