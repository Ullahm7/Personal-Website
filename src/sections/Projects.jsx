const projects = [
    {
        title: "Fintech Dashboard",
        description: "A comprehensive finacial analytics platform with real-time data visualization, profolio managment, and high process images.",
        image: "/analyticdashboard.png",
        tags: ["React", "Typescript", "Node.js"],
        link: "#",
        github: "#"

    }


]

export const Projects = () => {
    return <section class="min-h-screen flex  overflow-hidden pt-20 border-2 border-yellow-300">
        {/*text at the top */}
        <div class="text-center mx-auto max-w-3xl h-7 border-2 border-yellow-300">
            <span class="text-sm font-medium uppercase text-yellow-300">Featured Work</span>
            <h1 class="text-4xl md:text-5xl font-bold text-yellow-300 mt-4 mb-6 ">Projects that <span class="italic font-normal text-white">make a impact</span></h1>
            <p> A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.</p>
            <div class="grid md:grid-cols-2 gap-8">
                
            </div>
        </div>
    </section>
}