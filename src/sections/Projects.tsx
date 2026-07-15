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
    title: 'SCEMAS — Smart City Environmental Monitoring & Alert System (Demonstration Winner)',
    path: 'projects/SCEMAS',
    description:
      'A smart city environmental monitoring and alert system that utilizes IoT devices to collect real-time data on air quality, noise levels, and other environmental factors.',
    image: '/City Dashboard.png',
    tags: ['React', 'Vert.x', 'Java','Javascript', 'HTML','CSS','Rust', 'Nix','Docker'],
    link: 'https://github.com/Ullahm7/Smart-City-Environmental-Monitoring-Alert-System',
  },
  {
    title: 'Rattle Us',
    path: 'projects/Rattle-Us',
    description:
      'A turn-based word game that can be played with 3-8 players, inspired by the board game "Chameleon" where the objective is to vote off the player that does not have the same word as everybody else. This is done by having each player given a word and typing something related to it without giving the word to the Rattlesnake.',
    image: '/rattleus.png',
    tags: ['C', 'GTK', 'Gcov', 'CMake', 'Github Actions'],
    link: 'https://github.com/Ullahm7/Rattle-Us',
  },
  {
    title: 'Dual-Action Cancer Therapy Circuit',
    path: 'projects/Dual-Action-Cancer-Therapy-Circuit',
    description:
      'Designed and modeled a synthetic gene circuit for engineering E. coli K-12 to deliver two anticancer agents (Colicin E7 and TRAIL) directly to hypoxic solid tumor regions.',
    image: '/sbol.png',
    tags: ['Python','Numpy', 'Scipy', 'Matlab', 'Simulink','SBOL'],
    link: 'https://spiral-wire-e12.notion.site/IBEHS-2P03-Introduction-to-Genetic-Engineering-Health-Solution-39bd0d9ccded8002a98df3ed7ad63b36',
  },
  {
    title: 'InSoleX — Gait Analysis',
    path: 'projects/Gait-Analysis',
    description:
      'A wearable insole system built that measures plantar pressure distribution and ankle orientation continuously during daily activity - giving podiatrists real-world gait data instead of a single snapshot.',
    image: '/insolex.png',
    tags: ['Python', 'C++','PlatformIO', 'Arduino', 'FMEA', 'Excel'],
    link: 'https://spiral-wire-e12.notion.site/IBEHS-3P04-Health-Solutions-Design-Projects-III-39cd0d9ccded801fb3a0e15a38577f45',
  },
  {
    title: 'Drone Rescue Mission',
    path: 'projects/Drone-Rescue-Mission',
    description:
      'Deliver a fully functional product with a clean, object oriented design to allow for the team’s rescue mission in seamless operation. The ambition is to deliver a fully functional system capable of locating an emergency site and accessible creeks on an island, while minimizing energy consumption of the drone’s flight.',
    image: '/drone.png',
    tags: ['Java', 'Maven','Junit', 'OOP', 'GRASP', 'SOLID', 'Design patterns'],
    link: 'https://github.com/Ullahm7/Drone-Mission',
  },
  {
    title: 'Ontario White Tail Deer Population Analysis',
    path: 'projects/Ontario-White-Tail-Deer-Population-Analysis',
    description:
      'Cleaned Ontario white tail deer dataset then visualized the distribution, joint/conditional probability from a contingency table, plotting and interpreting ROC plane. Poisson and Binomial probability models for interruption events in a neural network, verified by hand and in Python. Normal distribution problems on systolic blood pressure (z-scores) on individuals.',
    image: '/whitetail.png',
    tags: ['Python', 'Jupyter','Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scipy.stats'],
    link: 'https://github.com/Ullahm7/Statistical-Methods-Biomedical-Engineering',
  },
  {
    title: 'Core Body Temperature and Arsenic Level Analysis',
    path: 'projects/Core-Body-Temperature-and-Arsenic-Level-Analysis',
    description:
      'Simulated body temp study and ran two-sided one-sample t-test against nominal with 95% CI. Two-sample t-test comparing resting heart rate from two device, including an normality, F-test, and Mann-Whitney U cross-check. Paired one-sided t-test on arsenic levels in water tanks before/after a storm.',
    image: '/temp.png',
    tags: ['Python', 'Jupyter','Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Scipy.stats'],
    link: 'https://github.com/Ullahm7/Statistical-Methods-Biomedical-Engineering',
  },
  {
    title: 'Validation of a Portable Membrane Oxygenator Analysis',
    path: 'projects/Validation-of-a-Portable-Membrane-Oxygenator-Analysis',
    description:
      'A regression-modeling assignment predicting DEVICELOSS (gas-transfer efficiency loss) in a portable membrane oxygenator from benchtop test data. 70/30 train/test split (fixed random state) and a full pairplot/correlation analysis to identify the predictor most linearly associated with the response.',
    image: '/deviceloss.png',
    tags: ['Python', 'Jupyter', 'Numpy', 'Matplotlib', 'Seaborn', 'Statsmodels', 'Anova', 'Scikit-learn'],
    link: 'https://github.com/Ullahm7/Statistical-Methods-Biomedical-Engineering',
  },
  {
    title: 'DNA, PCR, & Gel Electrophoresis ',
    path: 'projects/DNA-PCR-Gel-Electrophoresis',
    description:
      'Prepared a PCR test reaction using human gDNA template and a PCR control reaction. Purified plasmid DNA from an E. coli sample through; cell lysis, precipitation, and spin-column, and loaded; PCR test, control, and miniprep against reference ladder.',
    image: '/dnapcr.png',
    tags: ['PCR', 'Thermocycler', 'Plasmid Miniprep', 'Gel Electrophoresis', 'Spin column purification'],
    link: 'https://spiral-wire-e12.notion.site/IBEHS-1EP6-Introduction-to-DNA-PCR-Gel-Electrophoresis-39bd0d9ccded808ebf7acd354b25c455',
  },
  {
    title: 'Wet Labs and Cell Culturing Techniques ',
    path: 'projects/Wet-Labs-and-Cell-Culturing-Techniques',
    description:
      'Ran serial dilutions of methylene blue and used a spectrophotometer to find relationship between concentration and absorbance, counted cells using hemocytometer, subcultued FHL-124 cells of cells migration in CO2 and pH levels, measured gamma radiation dosage.',
    image: '/dosage.png',
    tags: ['Pipetting', 'Spectrophotometry', 'Hemocytometer', 'Aseptic technique / BSC', 'Cell subculturing (FHL-124)'],
    link: 'https://spiral-wire-e12.notion.site/IBEHS-1EP6-Introduction-to-Wet-Labs-and-Cell-Culturing-Techniques-39bd0d9ccded80fa82cff944d46e6cfe',
  },
  {
    title: 'PortaPath — Accessing New Heights ',
    path: 'projects/PortaPath',
    description:
      'Portapath is a portable, collapsible, and extendable ramp designed to help individuals with mobility issues easily navigate curbs, steps, and lips, significantly improving their daily accessibility. This design allows the panels to slide into one another and fold in half, making it compact enough to store on the back of a wheelchair or mobility scooter.',
    image: '/portapath.png',
    tags: ['Inventor', 'Prusa', 'Powerpoint', 'IMovie', 'Excel'],
    link: 'https://spiral-wire-e12.notion.site/Design-Project-4-It-s-Not-A-Pun-It-s-Real-Life-32881e152f6b4182aeeb2849c4c8d8f7',
  },
  {
    title: 'Ez-Slicer — Where Comfort Meets Culinary ',
    path: 'projects/Ez-Slicer',
    description:
      'Ez-slicer is a knife that automates the process of slicing food for people with rheumatoid arthritis. The EZ-Slicer is an automated cutting device that is speed-adjustable depending on the force applied by the user.',
    image: '/ezslicer.png',
    tags: ['Inventor', 'Prusa', 'Powerpoint', 'Python', 'Excel', 'Arduino', 'FSR', 'DC Motor'],
    link: 'https://spiral-wire-e12.notion.site/Design-Project-3-Sense-of-Independence-ab8e455f7a804718b1d1694303ef4c13',
  },
  {
    title: 'TriHiple Threat — Be Able to Shoot, Pass, or Drive ',
    path: 'projects/TriHiple-Threat',
    description:
      'TriHiple is a hip replacement device designed to address Trendelenburg gait, a distinct walking pattern caused by weakness or mechanical disadvantage in the hip abductor muscles, which forces the pelvis to drop on the side opposite the affected leg during the swing phase.',
    image: '/trihiple.png',
    tags: ['Inventor', 'Prusa', 'Powerpoint', 'Python', 'Excel'],
    link: 'https://spiral-wire-e12.notion.site/Design-Project-2-Hips-Don-t-Lie-Hip-Arthroplasty-2dc739eeb2d7460dbc9c6b33aea98745',
  },
  {
    title: 'Rheuma-Seal — A Two-Piece Ostomy for Your Peace of Mind ',
    path: 'projects/Rheuma-Seal',
    description:
      'Rheuma-Seal is a secure connection device for an ostomy bag that is easy to attach and detach for ileostomy patient with rheumatoid arthritis. The device will help avoid finger pain while giving patients peace of mind that the seal is secured properly and will not leak, keeping output in the bag.',
    image: '/rheumaseal.png',
    tags: ['Inventor', 'Prusa', 'Powerpoint', 'IMovie', 'Excel'],
    link: 'https://spiral-wire-e12.notion.site/Design-Project-1-GI-Joe-The-Endoscopy-Unit-7eabb25e4e954f579bac12582061aa75',
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
          Projects that <span className="text-primary">I have created</span>
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
