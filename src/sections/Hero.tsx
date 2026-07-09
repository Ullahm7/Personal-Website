import { Download, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem } from '../lib/motion'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* left column */}
        <div>
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            Muhammad Ullah
          </motion.h1>

          <motion.p variants={staggerItem} className="font-mono text-sm text-secondary mt-3">
            // Software Engineer<span className="cursor" />
          </motion.p>

          <motion.p variants={staggerItem} className="text-muted mt-6 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut
            enim ad minim veniam quis nostrud exercitation.
          </motion.p>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-3 mt-8">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              className="inline-flex items-center gap-2 bg-primary text-on-primary font-medium text-sm px-5 py-3 rounded-full hover:bg-accent transition-colors"
            >
              <Download size={16} />
              Download CV
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#projects"
              className="inline-flex items-center gap-2 border border-border text-foreground font-medium text-sm px-5 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              View Projects
            </motion.a>

            <div className="flex items-center gap-1 ml-2">
              <a
                href="https://github.com/Ullahm7"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Notion"
                className="p-2.5 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
              >
                <img src="/Notion_app_logo.png" alt="" className="w-[18px] h-[18px]" />
              </a>
            </div>
          </motion.div>

          <motion.p variants={staggerItem} className="font-mono text-xs text-muted mt-10">
            built with react + tailwindcss + typescript
          </motion.p>
        </div>

        {/* right column — signature terminal-chrome image frame */}
        <motion.div variants={fadeUp} className="relative">
          <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full -z-10" />
          <div className="terminal-frame">
            <div className="terminal-bar">
              <span className="terminal-dot bg-secondary" />
              <span className="terminal-dot bg-primary" />
              <span className="terminal-dot bg-accent" />
              <span className="terminal-path">profile.png</span>
            </div>
            <img
              src="/profilepic.jpg"
              alt="Muhammad Ullah"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
