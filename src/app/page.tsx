import React from "react";
import ScrollToTopOnLoad from "@/components/ScrollToTopOnLoad";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyShreyX from "@/components/WhyShreyX";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Repositories from "@/components/Repositories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <ScrollToTopOnLoad />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Products />
        <WhyShreyX />
        <Technology />
        <About />
        <Repositories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
