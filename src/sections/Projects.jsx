import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Fintech Dashboard",
        description: "A comprehensive finacial analytics platform with real-time data visualization, profolio managment, and high process images.",
        image: "/analyticdashboard.png",
        tags: ["React", "Typescript", "Node.js"],
        link: "#",
        github: "#",

    },
    {
        title: "yeggor",
        description: "A comprehensive finacial analytics platform with real-time data visualization, profolio managment, and high process images.",
        image: "/blackanalyticdashboard.webp",
        tags: ["React", "Typescript", "Node.js"],
        link: "#",
        github: "#",

    },

];

export const Projects = () => {
    return <section class="min-h-screen flex  overflow-hidden pt-20 border-2 border-yellow-300">
        {/*text at the top */}
        <div class="text-center mx-auto max-w-3xl border-2 border-yellow-300 overflow-hidden md:row-span-1">
            <span class="text-sm font-medium uppercase text-yellow-300">Featured Work</span>
            <h1 class="text-4xl md:text-5xl font-bold text-yellow-300 mt-4 mb-6 ">Projects that <span class="italic font-normal text-white">make a impact</span></h1>
            <p class="pb-10"> A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.</p>
            <div class="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) =>(
                 <div key = {idx} class="group rounded-2xl md:row-span-1"> 
                    <div class="relative overflow-hidden aspect-video">
                        <img src ={project.image} alt={project.title} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 " />
                        {/*links */}
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href={project.link} class="p-3 rounded-full navigate">
                                <ArrowUpRight class="" />
                            </a>
                        </div>
                    </div>
                    {/*Content */}
                    <div class="border-2 border-yellow-300 p-6 space-y-4">
                        <h3 class="text-xl font-semibold text-yellow-300">{project.title}</h3>
                        <p class="text-gray-600 text-sm">{project.description}</p>
                        <div class="flex flex-wrap gap-2 items-center justify-center">
                            {project.tags.map((tag,tagIdx) =>(
                                <span class="px-4 py-1.5 rounded-full text-xs font-medium bg-[var(--color-shadeone)] hover:border-2 border-yellow-300">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
                
                ))}
            </div>
        </div>
    </section>
}