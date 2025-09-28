import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import PriPolicy from "./pages/PriPolicy";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/privacy-policy",
          element: <PriPolicy />,
        },
        {
          path: "/terms-and-conditions",
          element: <Terms />,
        },
        {
          path: "/refund-policy",
          element: <RefundPolicy />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
