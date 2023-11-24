import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
