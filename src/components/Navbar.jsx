    import { NavLink } from "react-router-dom";


    function Navbar() {
        return (
            <nav className="flex items-center justify-between py-4 bg-white/10 backdrop-blur-lg text-white sticky top-0 z-10 mx-auto max-w-350">
                <h1 className="font-bold text-black text-2xl">The Editorial</h1>
                <ul className="flex space-x-12 text-gray-500 text-[18px] font-medium">
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "text-[#02070a]" : "text-gray-500")}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? "text-[#02070a]" : "text-gray-500")}>About</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "text-[#021018]" : "text-gray-500")}>Contact</NavLink></li>
                </ul>
                <button className="px-4 py-2 bg-[#4C616C] hover:bg-[#4A4A52] rounded-lg font-bold">Get Started</button>
            </nav>
        );
    }

    export default Navbar