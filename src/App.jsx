import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Quiz from './components/Quiz'
import Chat from './components/Chat'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-gradient)]">

      <Navbar />
      <Hero />
      <About />
      <Quiz />
      <Chat />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
