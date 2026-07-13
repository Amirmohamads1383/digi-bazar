import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";

export default function Layouts() {
  return (
    <>
      <Header />
      <main className="flex-1 relative">
        <Outlet />
      </main>
    </>
  );
}
