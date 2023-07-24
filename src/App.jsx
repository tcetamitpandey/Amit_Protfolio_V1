import React from 'react'

//components
import Header from "./component/header/Header"
import Nav from "./component/nav/Nav"
import About from "./component/about/About"
import Experience from "./component/Experience/Experience"
import Services from "./component/services/Services"
import Portfolio from "./component/portfolio/Portfolio"
import Achievement from "./component/Achievement/Achievement"
import Contact from "./component/contact/Contact"
import Footer from "./component/Footer/Footer"
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Achievement />
      <Contact />
      <Footer />
    </>
  )
}

export default App