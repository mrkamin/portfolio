import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Testamonials from "./components/Testamonials";

export default async function Home() {
  
  return (
   <div className="">
      <Hero />
      <Navbar />
      <Projects />
      <Experience />
      <About />
      <Services />
      <Testamonials />
      <Contact />
      <Footer />
   </div>
  );
}
