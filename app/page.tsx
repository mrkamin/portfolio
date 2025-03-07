import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default async function Home() {
  
  return (
   <div className="">
      <Hero />
      <Navbar />
      <Projects />
   </div>
  );
}
