import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/routes/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/routes/Home.jsx";
import { Provider } from "react-redux";
import Cart from "./components/routes/Cart.jsx";
import "./styles/custom-bootstrap.scss";
import CategoryProducts from "./components/Body/CategoryProducts.jsx";
import Profile from "./components/routes/Profile.jsx";
import EditProfile from "./components/Profile/EditProfile.jsx";
import { store, persistor } from "./components/store";
import { PersistGate } from "redux-persist/integration/react";

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
      { path: "/:category", element: <CategoryProducts /> },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/EditProfile",
        element: <EditProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
