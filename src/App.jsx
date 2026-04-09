import Hero from  "./Components/hero/Hero";
import Services from "./Components/services/Services";
import Contact from "./Components/contact/Contact";
import Portifolio from "./Components/portifolio/Portifolio";



const App = () => {
  return (
    <div className="container">
      <section id="#hero">
      <Hero/>
      </section>

      <section id="#services">
      <Services/>
      </section>

      <section id="#portifolio">
      <Portifolio/>
      </section>

      <section id="#contact">
      <Contact/>
      </section>
    </div>
  )
}

export default App