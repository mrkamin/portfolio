import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default async function Home() {
  
  return (
   <div className="min-h-screen ">
      <Hero />
      <Navbar />
   </div>
  );
}
