import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/routes/Home.jsx";
import { Provider } from "react-redux";
import buynextStore from "./components/store/index.js";
import Cart from "./components/routes/Cart.jsx";
import "./styles/custom-bootstrap.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={buynextStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
