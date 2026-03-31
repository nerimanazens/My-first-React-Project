function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 bg-white/10 backdrop-blur-lg text-white sticky top-0 z-10 mx-auto max-w-350">
            <h1 className="font-bold text-black text-2xl">The Editorial</h1>
            <ul className="flex space-x-12 text-gray-500 text-[18px] font-medium">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="px-4 py-2 bg-[#4C616C] hover:bg-[#4A4A52] rounded-lg font-bold">Get Started</button>
        </nav>
    );
}

export default Navbar