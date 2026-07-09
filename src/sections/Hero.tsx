import { Download, Github, Linkedin } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center overflow-hidden pt-20 ">
      <div className="border-2 border-yellow-300 w-full max-w-5xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {/* left column */}
        <div className="p-4 border-2 border-yellow-300 items-center">
          {/* Title */}
          <div className="border-2 border-yellow-300 h-10 mb-2 px-2">
            <span className="w-2 h-2 bg-shadeone rounded-full p-2 pr-3">
              <span className="w-2 h-2 rounded-full  bg-yellow-300 inline-flex mb-0.75 mr-2 animate-pulse "></span>
              <span>Software Engineer</span>
            </span>
          </div>
          {/* Name */}
          <div className="border-2 border-yellow-300 h-fit mb-2 px-2 font-bold">
            <h1 className="text-5xl md:text-6xl lg:text-7xl ">Muhammad Ullah</h1>
          </div>
          {/* Description */}
          <div className="border-2 border-yellow-300 h-fit mb-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>

          {/* Download CV */}
          <div className="border-2 border-yellow-300 h-fit flex">
            <span className="flex rounded-full gap-2 p-2 bg-yellow-300  ">
              <Download />
              Download CV
            </span>
            {/* add links here (git, linkdin,notion,itch? */}
            <img
              className="h-7 mt-2 mr-2 mb-2 ml-3"
              src="/Notion_app_logo.png"
              alt="Notion"
            />
            <Github className="h-7 m-2" />
            <Linkedin className="h-7 m-2" />
          </div>
          {/* dev used */}
          <div className="border-2 border-yellow-300 h-5 mt-2">
            <p className="text-xs text-gray-600">
              Developed using React + Tailwindcss + Lucide
            </p>
          </div>
        </div>
        {/* right column */}
        <div className="border-2 border-yellow-300 flex justify-center">
          <img
            className="h-auto rounded-2xl w-full aspect-[4/5]"
            src="/Penelope-Hunter-Side-profile-face-800-x-600.webp"
            alt="Muhammad Ullah"
          />
        </div>
      </div>
    </section>
  )
}
