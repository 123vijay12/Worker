import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Category from "./routes/category/Category";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WorkerList from "./routes/workerList/WorkerList";
import WorkerDetails from "./routes/EmployeeDetails/WorkerDetails";
import Index from "./routes/index/Index";
import Registration from "./routes/registration/registration";
import SubCategory from "./routes/sub-category/SubCategory";
import Forms from "./components/form/Forms";
import { Provider } from "react-redux";
import store from "./app/store";



const data = [
  {
    id: 1,
    iconClass: "fas fa-hammer fa-2x",
    heading: "Civil Engineer",
    description: "Description for Civil Engineer",
    link: "civil",
  },
  {
    id: 2,
    iconClass: "fas fa-wrench fa-2x",
    heading: "Electronics",
    description: "Description for Electronics",
    link: "electronics",
  },
  {
    id: 3,
    iconClass: "fas fa-chair fa-2x",
    heading: "Furniture",
    description: "Description for Furniture",
    link: "furniture",
  },
  {
    id: 4,
    iconClass: "fas fa-car fa-2x",
    heading: "Automotive",
    description: "Description for Automotive",
    link: "automotive",
  },
];

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/register", element: <Registration /> },
  {
    path: "/workers",
    element: <Index />,
    children: [
      {
        path: "category", // Change to relative path
        element: <Category data={data} />,
      },
      {
        path: "subcategory/:name", // Change to relative path
        element: <SubCategory />,
      },
      {
        path: "list/:workersname", // Change to relative path
        element: <WorkerList />,
      },
      {
        path: "details/:workersname", // Change to relative path
        element: <WorkerDetails />,
      },
      {
        path: "form", //for form
        element: <Forms />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
