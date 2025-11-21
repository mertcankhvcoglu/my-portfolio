import './App.css'
import Header from './Header.jsx'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'


function App() {


  return (
    <div className='app-container'>
      <Header />

      <div id="home">
        <AboutMe />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />

    </div>

  )
}

export default App
