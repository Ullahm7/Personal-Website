/*objects of navigation links */
const navLinks = [
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "experience", label: "Experience"},
]



export const Navbar = () => {
    return(
        <header>
            {/* inside the header will be a nav, will contain 2 things, initials and links */}
            <nav> 
                <a> 
                    MU <span>.</span>
                </a>
                <div>
                    <div>

                    </div>
                </div>
            </nav>
        </header>
    );
}