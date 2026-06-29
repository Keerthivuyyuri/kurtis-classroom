import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Classroom from "./components/Classroom";
import HowWorks from "./components/HowWorks";
import Feedback from "./components/Feedback";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import Game from "./components/Game";
import { useEffect } from "react";


function App() {
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#111]">
      <Navbar />
      <Hero />
      <Trusted />
      <Classroom />
      <Game />
      <HowWorks />
      <Feedback />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;