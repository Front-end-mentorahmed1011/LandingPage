import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Firms from "./components/Firms"
import Services from "./components/Services"
import Brands from "./components/Brands"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import ThemeToggler from "./contextAPIs/ThemeToggler"

function App() {
  return(
    <ThemeToggler>
      <React.Fragment>
        
          <Navbar />
          <Hero />
          <Firms />
          <Services />
          <Brands />
          <Blog />
          <Footer />
        
      </React.Fragment>
    </ThemeToggler>
  )


}

export default App
