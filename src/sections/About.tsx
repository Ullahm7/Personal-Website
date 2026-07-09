import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motion'

interface Fact {
  label: string
  value: string
}

const facts: Fact[] = [
  { label: 'location', value: 'Toronto, CA' },
  { label: 'role', value: 'Software Engineer' },
  { label: 'focus', value: 'Web & Systems' },
  { label: 'status', value: 'Open to work' },
]

const skills: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'Python',
  'AWS',
  'Docker',
  'GraphQL',
]

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
        className="max-w-5xl mx-auto"
      >
        <span className="font-mono text-xs text-secondary">// about_me</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 mb-12">
          A little about <span className="text-primary">how I work</span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-5 gap-8"
        >
          {/* whoami terminal card */}
          <motion.div variants={staggerItem} className="md:col-span-2 terminal-frame h-fit">
            <div className="terminal-bar">
              <span className="terminal-dot bg-secondary" />
              <span className="terminal-dot bg-primary" />
              <span className="terminal-dot bg-accent" />
              <span className="terminal-path">whoami.sh</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-3">
              <p className="text-accent">$ cat about.txt</p>
              {facts.map((fact) => (
                <p key={fact.label} className="text-muted">
                  <span className="text-secondary">{fact.label}</span>
                  <span className="text-muted">: </span>
                  <span className="text-foreground">{fact.value}</span>
                </p>
              ))}
            </div>
          </motion.div>

          {/* bio + skills */}
          <motion.div variants={staggerItem} className="md:col-span-3 flex flex-col gap-8">
            <p className="text-muted leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <div>
              <span className="font-mono text-xs text-muted">
                // tools & technologies
              </span>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill, idx) => {
                  const accents = ['primary', 'secondary', 'accent']
                  const color = accents[idx % accents.length]
                  return (
                    <span
                      key={skill}
                      className="font-mono text-xs px-3 py-1.5 rounded-full border"
                      style={{
                        borderColor: `var(--color-${color})`,
                        color: `var(--color-${color})`,
                      }}
                    >
                      {skill}
                    </span>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
