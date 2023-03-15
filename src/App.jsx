import * as React from "react";
import RootLayout from "./Components/RootLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SectionOne from "./Pages/SectionOne";
import SectionTwo from "./Pages/SectionTwo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <SectionOne />,
        },
        {
          path: "two",
          element: <SectionTwo />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
