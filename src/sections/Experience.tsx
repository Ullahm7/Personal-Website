import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motion'

interface ExperienceEntry {
  period: string
  role: string
  company: string
  description: string
  logo: string
}

const experiences: ExperienceEntry[] = [
  {
    period: '2022 — Present',
    role: 'Senior Frontend Engineer',
    company: 'Tech Innovators Inc.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leading frontend architecture across a suite of products, mentoring engineers, and shipping interactive features.',
    logo: '/customs.jpg',
  },
  {
    period: '2020 — 2022',
    role: 'Frontend Engineer',
    company: 'Digital Solutions Co.',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Built and maintained customer-facing dashboards used by thousands of clients daily.',
    logo: '/wentworth.png',
  },
  {
    period: '2019 — 2020',
    role: 'Junior Developer',
    company: 'Startup Labs',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
    logo: '/github-logo-repository-computer-icons-github.jpg',
  },
]

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-5xl mx-auto"
      >
        <span className="font-mono text-xs text-secondary">
          // career_log
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-4">
          Experience that{' '}
          <span className="text-primary">speaks volumes</span>
        </h2>
        <p className="text-muted max-w-lg mb-12">
          A quick log of where I've worked and what I built while I was
          there.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="relative pl-8"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          {experiences.map((experience, idx) => (
            <motion.div
              key={experience.company}
              variants={staggerItem}
              className="relative pb-10 last:pb-0"
            >
              <span
                className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full border-2"
                style={{
                  borderColor: 'var(--color-background)',
                  backgroundColor: [
                    'var(--color-primary)',
                    'var(--color-secondary)',
                    'var(--color-accent)',
                  ][idx % 3],
                }}
              />

              <div className="terminal-frame p-5 flex flex-col sm:flex-row gap-5">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="w-12 h-12 rounded-lg object-cover border border-border flex-shrink-0"
                />
                <div>
                  <span className="font-mono text-xs text-muted">
                    {experience.period}
                  </span>
                  <h3 className="font-semibold mt-1">{experience.role}</h3>
                  <p className="text-sm text-secondary">{experience.company}</p>
                  <p className="text-sm text-muted leading-relaxed mt-3">
                    {experience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
