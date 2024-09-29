const Navbar = () => {
    return (
        <header className="flex flex-row h-16 align-center w-full px-24 justify-between border-b-2 border-black ">
            <ul className="flex flex-row align-center gap-8 my-auto">
                <li><a href="#start"><img src="/ganymede.png" className="h-12"/></a></li>
                <li className="my-auto"><a href="#donate" className="text-lg">Dons</a></li>
                <li className="my-auto"><a href="#contact" className="text-lg">Nous joindre</a></li>
                <li className="my-auto"><a href="#socials" className="text-lg">Médias Sociaux</a></li>
            </ul>
            <button href="#sign-up" className="text-lg">Devenir bénévole</button>
        </header>
    )
}

export default Navbar