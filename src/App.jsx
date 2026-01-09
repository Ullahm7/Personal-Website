import { Navbar } from "./layout/Navbar"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Experience } from "./sections/Experience"


function App() {
  return <div className="min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Projects />
      <Experience />
    </main>
  </div>
  
}

export default App
