const Navbar = () => {
    return (
        <header className="w-full h-14 bg-[#ff0000] fixed animate-navbar">
            <nav className="w-full h-full flex justify-between items-center px-6">
                <span className="text-white">Logo</span>
                <ul className="flex gap-5 items-center text-white">
                    <li>
                        <a>Proyecto</a>
                    </li>
                    <li>
                        <a>Biografia</a>
                    </li>
                    <li>
                        <a>Redes sociales</a>
                    </li>
                    <li>
                        <a>Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
