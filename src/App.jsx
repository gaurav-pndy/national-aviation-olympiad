import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
