import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Thoughts from "./components/Thoughts";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Quote />
        <Services />
        <Projects />
        <Testimonials />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
