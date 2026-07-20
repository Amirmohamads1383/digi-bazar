import React from "react";
import Header from "../Header/Header";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../Footer/Footer";

export default function Layouts() {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <main className="flex-1 relative py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
