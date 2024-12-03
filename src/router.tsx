import { createBrowserRouter } from "react-router-dom";
import Layout  from "./layouts/Home";

import { ProductsView } from "./views/Products";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductsView />,
      }
    ],
  },
]);
