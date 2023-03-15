import React from "react";
import MainNavbar from "./MainNavbar";
import { Outlet } from "react-router-dom";

export default function RootLayout(props) {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}
