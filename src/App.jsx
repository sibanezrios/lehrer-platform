import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Features from "./components/Features";
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
        <Quote text="Ya sea que quieras aprender un idioma desde cero, prepararte para un examen internacional o ampliar tus oportunidades académicas y profesionales, encontrarás un plan de aprendizaje diseñado para ayudarte a alcanzar tus objetivos." />
        <Services />
        <Quote text="Mi experiencia en diferentes contextos educativos me ha permitido comprender que no existe una única forma de aprender un idioma. Por eso, cada clase está diseñada para responder a las necesidades, objetivos y ritmo de cada estudiante." />
        <Projects />
        <Features />
        <Testimonials />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
