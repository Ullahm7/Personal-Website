export const Hero = () => {
    return <section class="min-h-screen flex items-center overflow-hidden pt-20 ">
        <div class="border-2 border-yellow-300 w-full max-w-5xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            {/*left column*/}
            <div class ="p-4 border-2 border-yellow-300 items-center">
                {/*Title*/}
                <div class="border-2 border-yellow-300 h-10 mb-2 px-2">
                    <span class ="w-2 h-2 bg-shadeone rounded-full p-2 pr-3">
                        <span class="w-2 h-2 rounded-full  bg-yellow-300 inline-flex mb-0.75 mr-2 animate-pulse "></span>
                        <span>Software Engineer</span>
                    </span>
                </div>
                {/*Name*/}
                <div class="border-2 border-yellow-300 h-16 mb-2 px-2 text-2xl font-bold">

                </div>
                {/*Description*/}
                <div class ="border-2 border-yellow-300 h-16 mb-2">

                </div>
                {/*Download CV*/}
                <div>

                </div>
                {/*Links*/}
                <div>

                </div>
            </div>
            {/*right column*/}
            <div class="border-2 border-yellow-300 p-8 flex justify-center">

            </div>
        </div>
        
    </section>
}