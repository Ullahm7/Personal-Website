interface ExperienceEntry {
  period: string
  role: string
  company: string
  description: string
  image: string
}

const experiences: ExperienceEntry[] = [
  {
    period: '2022 - Present',
    role: 'Senior Frontend Engineer',
    company: 'Tech Innovators Inc.',
    description:
      'Leading frontend architecture for a suite of fintech products implementing new feature in iteractive design',
    image: '/customs.jpg',
  },
  {
    period: '2020 - 2022',
    role: 'Frontend Engineer',
    company: 'Digital Solutions Co.',
    description:
      'Leading frontend architecture for a suite of fintech products implementing new feature in iteractive design',
    image: '/wentworth.png',
  },
]

export const Experience = () => {
  return (
    <section className="min-h-screen flex overflow-hidden pt-20 border-2 border-yellow-300">
      <div className="text-center mx-auto max-w-3xl border-2 border-yellow-300 overflow-hidden md:row-span-1">
        <span className="text-sm font-medium uppercase text-yellow-300">
          Career Journey
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-300 mt-4 mb-6 ">
          Experience that{' '}
          <span className="italic font-normal text-white">speaks volumes</span>
        </h1>
        <p>
          {' '}
          A selection of my recent work, from complex web applications to
          innovative tools that solve real-world problems.
        </p>

        <div className="border-2 border-yellow-300 grid grid-cols-1 gap-4">
          {experiences.map((experience, idx) => (
            <div
              className="grid grid-cols-[80px_1fr] gap-4 border-2 border-yellow-300 p-4"
              key={idx}
            >
              <div className=" h-60 border-2 border-yellow-300 flex items-center justify-center">
                <img className="w-16 h-16" src={experience.image} alt={experience.company} />
              </div>
              <div className=" h-60 border-2 border-yellow-300 bg-[var(--color-shadeone)] p-6 rounded-2xl text-left ">
                <span className="text-sm text-yellow-300 font-medium">
                  {experience.period}
                </span>
                <h3 className="text-xl font-semibold mt-2">{experience.role}</h3>
                <p className="text-gray-600">{experience.company}</p>
                <p className="text-sm text-gray-600 mt-4">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
