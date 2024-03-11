import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import HomePage from "../pages/HomePage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
    ],
  },

  {
    path: "*",
    element: <div>404 Sayfasına Hoşgeldiniz</div>,
  },
]);