import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface NavLink {
  href: string
  label: string
}

/* objects of navigation links */
const navLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
]

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 py-5">
      {/* inside the header will be a nav, will contain 2 things, initials and links */}
      <nav className="mx-auto px-6 flex justify-between">
        <a href="#" className="font-bold tracking-tight hover:text-primary">
          MU<span>.</span>
        </a>
        <div className="hidden md:flex navigate flex rounded-full gap-2 px-2 py-1 items-center">
          {navLinks.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="text-sm px-3 py-1 hover:text-primary"
            >
              {nav.label}
            </a>
          ))}
        </div>
        {/* mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      {/* hidden menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden navigate mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="text-base px-3 py-1 hover:text-primary"
            >
              {nav.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
