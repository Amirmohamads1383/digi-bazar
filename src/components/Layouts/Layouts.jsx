import React from "react";
import Header from "../Header/Header";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../Footer/Footer";
import { Toaster } from "sonner";

export default function Layouts() {
  return (
    <>
      <Toaster
        position="top-right"
        expand={false}
        toastOptions={{ style: { fontFamily: "IRANSans", color: "#f47a23" } }}
      />
      <Header />
      <ScrollRestoration />
      <main className="flex-1 relative py-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
