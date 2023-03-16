import * as React from "react";
import RootLayout from "./Components/RootLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SectionOne from "./Pages/SectionOne";
import SectionTwo from "./Pages/SectionTwo";
import RalewayTTF from "./fonts/raleway.regular.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "Raleway",
    h4: {
      fontWeight: 800,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Raleway",
          src: `local("Raleway"), url(${RalewayTTF}) format("truetype")`,
        },
      },
    },
  },
});

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
