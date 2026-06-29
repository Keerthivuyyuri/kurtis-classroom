import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Classroom from "./components/Classroom";
import HowWorks from "./components/HowWorks";
import Feedback from "./components/Feedback";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import Game from "./components/Game";
import { useEffect, useState } from "react";


function App() {
   const [showGamePage, setShowGamePage] = useState(false);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [showGamePage]);
  if (showGamePage) {
    return <Game showGamePage={showGamePage} setShowGamePage={setShowGamePage} />;
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-[#111]">
      <Navbar />
      <Hero />
      <Trusted />
      <Classroom />
      <Game  showGamePage={showGamePage} setShowGamePage={setShowGamePage} />
      <HowWorks />
      <Feedback />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;