import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
import { Intro } from './components/Intro'
import { CustomCursor } from './components/CustomCursor'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    document.body.style.overflow = showIntro ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [showIntro])

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro key="intro" onFinish={() => setShowIntro(false)} />}
      </AnimatePresence>

      <CustomCursor />

      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
