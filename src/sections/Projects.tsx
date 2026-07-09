import { ArrowUpRight } from 'lucide-react'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
}

const projects: Project[] = [
  {
    title: 'Fintech Dashboard',
    description:
      'A comprehensive finacial analytics platform with real-time data visualization, profolio managment, and high process images.',
    image: '/analyticdashboard.png',
    tags: ['React', 'Typescript', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'yeggor',
    description:
      'A comprehensive finacial analytics platform with real-time data visualization, profolio managment, and high process images.',
    image: '/blackanalyticdashboard.webp',
    tags: ['React', 'Typescript', 'Node.js'],
    link: '#',
    github: '#',
  },
]

export const Projects = () => {
  return (
    <section className="min-h-screen flex  overflow-hidden pt-20 border-2 border-yellow-300">
      {/* text at the top */}
      <div className="text-center mx-auto max-w-3xl border-2 border-yellow-300 overflow-hidden md:row-span-1">
        <span className="text-sm font-medium uppercase text-yellow-300">
          Featured Work
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mt-4 mb-6 ">
          Projects that <span className="italic font-normal text-white">make a impact</span>
        </h1>
        <p className="pb-10">
          {' '}
          A selection of my recent work, from complex web applications to
          innovative tools that solve real-world problems.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group rounded-2xl md:row-span-1">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />
                {/* links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-3 rounded-full navigate">
                    <ArrowUpRight />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="border-2 border-yellow-300 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-yellow-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full text-xs font-medium bg-[var(--color-shadeone)] hover:border-2 border-yellow-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
