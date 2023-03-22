import * as React from "react";
import RootLayout from "./Components/RootLayout";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SectionOne from "./Pages/SectionOne";
import SectionTwo from "./Pages/SectionTwo";
import RalewayTTF from "./fonts/raleway.regular.ttf";

const uniTheme = createTheme({
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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  // breakpoints: {
  //   values: {
  //     mobile: 0,
  //     tablet: 760,
  //     laptop: 1024,
  //     desktop: 1200,
  //   },
  // },
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
    <ThemeProvider theme={uniTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
