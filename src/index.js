import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Starter from "./pages/Home/საინფორმაციო პორტალი";
import Documentation from "./pages/Home/დოკუმენტაცია";
import Quality from "./pages/Home/ხარისხის მართვის სისტემა";
import TestCenter from "./pages/Home/სასწავლო ცენტრი";
import Admin from "./pages/Admin/Admin";
import TestCreation from "./pages/Admin/TestCreation";
import TestEditor from "./pages/Admin/TestEditor";
import Stats from "./pages/Admin/Stats";
import SpecialEditor from "./pages/Admin/SpecialEditor";
import User from "./pages/User/User";
import UserTests from "./pages/User/UserTests";
import ErrorPage from "./pages/Home/ErrorPage";
import WorkersEditor from "./pages/Admin/workersEditor";
import StatReview from "./pages/Admin/StatReview";
import Problem from "./pages/Home/პრობლემის დაფიქსირება";

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
    element: <Problem />,
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
