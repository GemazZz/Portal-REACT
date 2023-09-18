import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Starter from "./pages/საინფორმაციო პორტალი";
import Documentation from "./pages/დოკუმენტაცია";
import Quality from "./pages/ხარისხის მართვის სისტემა";
import TestCenter from "./pages/სასწავლო ცენტრი";
import Others from "./pages/სხვადასხვა";

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
    path: "*",
    element: <div>Not found</div>,
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
