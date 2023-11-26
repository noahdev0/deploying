import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Renders the Home page.
 * @returns {JSX.Element} The rendered Home page.
 */
export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </React.Fragment>
  );
}
