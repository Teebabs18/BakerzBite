import CakeCard from "./Components/CakeCard"
import PastryCard from "./Components/PastryCard"
import "./Styling/App.css"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import Hero from "./Components/Hero"
import Merchandise from "./Components/Merchandise"
import About from "./Components/About"

function App() {
  return (
    <>
      <section id="Header">
        <Nav/>
      </section>
        
      <section id="Hero">
       <Hero/>
      </section>
        
      <section id="Cake">
        <CakeCard/>
      </section>
        
      <section id="Pastry">
        <PastryCard/>
      </section>

      <section id="Merch">
        <Merchandise/>
      </section>
     
      <section id="Contact">
        <Contact/>
      </section>
     
      <section id="About">
        <About/>
      </section>
    
      <section >
        <Footer/>
      </section>
    

     
    </>
  )
}

export default App
