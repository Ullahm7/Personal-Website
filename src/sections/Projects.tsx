import { ArrowUpRight, ImageOff } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motion'

interface Project {
  title: string
  path: string
  description: string
  image: string | null
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    title: 'Analytics Dashboard',
    path: 'projects/dashboard',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A real-time analytics platform with interactive charts and reporting.',
    image: '/analyticdashboard.png',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: '#',
  },
  {
    title: 'Portfolio Tracker',
    path: 'projects/tracker',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore. A dark-mode financial tracker with custom data visualizations.',
    image: '/blackanalyticdashboard.webp',
    tags: ['Next.js', 'PostgreSQL', 'Docker'],
    link: '#',
  },
  {
    title: 'Untitled Project',
    path: 'projects/coming-soon',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Case study write-up coming soon.',
    image: null,
    tags: ['Python', 'AWS'],
    link: '#',
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-5xl mx-auto"
      >
        <span className="font-mono text-xs text-secondary">
          // featured_work
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
          Projects that <span className="text-primary">make an impact</span>
        </h2>
        <p className="text-muted max-w-lg mb-12">
          A selection of recent work, from full-stack applications to tools
          built to solve real problems.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.a
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              href={project.link}
              key={project.title}
              className="group terminal-frame flex flex-col hover:border-primary/60"
            >
              <div className="terminal-bar">
                <span className="terminal-dot bg-secondary" />
                <span className="terminal-dot bg-primary" />
                <span className="terminal-dot bg-accent" />
                <span className="terminal-path truncate">{project.path}</span>
              </div>

              <div className="relative aspect-video overflow-hidden bg-surface-2">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted">
                    <ImageOff size={22} />
                    <span className="font-mono text-xs">image placeholder</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-on-primary">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-3">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-surface-2 text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
