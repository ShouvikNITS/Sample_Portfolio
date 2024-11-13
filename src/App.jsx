import './App.css'
import Hero from "./Pages/Hero"
import Navigation from './Components/Navigation'
import Social from './Components/Social'
import Contact from './Pages/Contact'
import Education from './Pages/Education'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'

function App() {
  return (
    <>
    <Navigation />
    <Hero />
    <Skills />
    <Projects />
    <Education />
    <Contact />
    <Social />
    </>
  )
}

export default App
