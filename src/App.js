import React from "react";
// import Box from "@mui/material/Box";
// import Sidebar from "./components/sidebar/Sidebar";
// import Content from "./components/content/Content";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./ErrorPage";
import UploadFilePage from "./pages/UploadFilePage";
import ChannelPage from "./pages/ChannelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <UploadFilePage />,
      },
      {
        path: "channels",
        element: <ChannelPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
