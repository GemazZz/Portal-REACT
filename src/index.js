import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Starter from "./pages/საინფორმაციო პორტალი";
import Documentation from "./pages/დოკუმენტაცია";
import Quality from "./pages/ხარისხის მართვის სისტემა";
import TestCenter from "./pages/სასწავლო ცენტრი";
import Others from "./pages/სხვადასხვა";
import User from "./pages/User";
import Admin from "./pages/admin/Admin";
import TestCreation from "./pages/admin/TestCreation";
import TestEditor from "./pages/admin/TestEditor";
import Stats from "./pages/admin/Stats";
import SpecialEditor from "./pages/admin/SpecialEditor";

let newDate = new Date().getDate() + 11;
if (newDate < 22) {
  newDate = newDate + 20;
}
if (newDate % 10 === 0) {
  newDate += 1;
}
const newNumAdmin = newDate ** 9 + 11;
const newNumUser = newDate ** 8 + 19;
const dataAdmin = () => {
  const urlAdmin = newNumAdmin;
  return urlAdmin;
};
const dataUser = () => {
  const urlUser = newNumUser;
  return urlUser;
};

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
    element: <TestCenter dataAdmin={dataAdmin} dataUser={dataUser} />,
  },
  {
    path: "/others",
    element: <Others />,
  },
  {
    path: "/" + newNumAdmin,
    element: <Admin dataAdmin={dataAdmin} />,
  },
  {
    path: "/" + newNumAdmin + "/testcreation",
    element: <TestCreation dataAdmin={dataAdmin} />,
  },
  {
    path: "/" + newNumAdmin + "/testeditor",
    element: <TestEditor dataAdmin={dataAdmin} />,
  },
  {
    path: "/" + newNumAdmin + "/specialeditor",
    element: <SpecialEditor dataAdmin={dataAdmin} />,
  },
  {
    path: "/" + newNumAdmin + "/stats",
    element: <Stats dataAdmin={dataAdmin} />,
  },
  {
    path: "/" + newNumUser,
    element: <User />,
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
