import React from "react";
import MainNavbar from "../utility/MainNavbar";
import { Outlet } from "react-router-dom";

export default function RootLayout(props) {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
}
