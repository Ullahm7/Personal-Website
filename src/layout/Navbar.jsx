/*objects of navigation links */
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "experience", label: "Experience"},
]

export const Navbar = () => {
    return(
        <header class="fixed top-0 left-0 right-0 py-5">
            {/* inside the header will be a nav, will contain 2 things, initials and links */}
            <nav class="mx-auto px-6 flex justify-between"> 
                <a href ="#" class="font-bold tracking-tight hover:text-primary"> 
                    MU<span>.</span>
                </a>
                <div class ="hidden md:flex navigate flex rounded-full gap-2 px-2 py-1 items-center">
                    {navLinks.map((nav) => (
                        <a href = {nav.href} class ="text-sm px-3 py-1 hover:text-primary">{nav.label}</a>
                    ))}
                </div>
            </nav>
        </header>
    );
}