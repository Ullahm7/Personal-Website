import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/motion'

interface Fact {
  label: string
  value: string
}

const facts: Fact[] = [
  { label: 'Location', value: 'Milton, ONT' },
  { label: 'Role', value: 'Biomedical and Software Engineer' },
  { label: 'Sport', value: 'Cycling' },
  { label: 'Hobby', value: 'Chess' },
]

const skills: string[] = [
  'TypeScript',
  'Python',
  'Java',
  'Javascript',
  'C',
  'C#',
  'C++',
  'SQL',
  'Verilog',
  'HTML',
  'CSS',
  'Bash',
  'Git',
  'Matlab',
  'Maven',
  'Docker',
  'Azure',
  'Figma',
  'Canva',
  'Excel',
  'Flask',
  'Django',
  'FastAPI',
  'Vert.x',
  'React',
  'Selenium',
  'MySQL',
  'PostgreSQL',
  'SQLite',
  '.NET',
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
          A little about <span className="text-primary">who I am</span>
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
              I'm a currently working as a biomedical and software engineer at McMaster University and I was always passionate in learning new things ever since I was a kid. From actively pushing my elo rating on Chess.com to beating my current best time for solving a rubix cube, I always strive to improve myself and learn new things. I am also a big fan of cycling and I love to explore new places on my bike.
            </p>
            <p className="text-muted leading-relaxed">
              Programming has always been a passion of mine and I have been programming since I was 12 years old (Thank you, The Coding Train!). From joining multiple clubs to meeting new individuals finding design solutions, I am constanly looking for new opportunities and connections with people along the way.
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
