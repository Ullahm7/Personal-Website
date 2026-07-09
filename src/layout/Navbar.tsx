import { Menu, X, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-background/70 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-primary hover:text-accent transition-colors"
        >
          MU_
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex rounded-full gap-1 px-2 py-1.5 items-center bg-surface border border-border">
            {navLinks.map((nav) => (
              <a
                key={nav.href}
                href={nav.href}
                className="font-mono text-xs px-4 py-1.5 rounded-full text-muted hover:text-foreground hover:bg-surface-2 transition-colors"
              >
                {nav.label}
              </a>
            ))}
          </div>

          <ThemeToggle />

          <button
            className="md:hidden rounded-full p-2 text-foreground bg-surface border border-border"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden mx-6 mt-2 rounded-2xl px-6 py-6 flex flex-col gap-4 bg-surface border border-border">
          {navLinks.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-sm text-muted hover:text-foreground transition-colors"
            >
              {nav.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
