import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/navbar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* This will dynamically load Home, About, Form, etc. */}
    </>
  );
}

export default AppLayout;
