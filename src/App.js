import Faqs from "./Components/Faqs";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Learntoplay from "./Components/Learntoplay";
import Navbar from "./Components/Navbar";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Learntoplay />
      <Features />
      <Reviews />
      <Faqs />
      <Footer />
    </>
  );
}

export default App;
