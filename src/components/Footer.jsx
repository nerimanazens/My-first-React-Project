import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#F1F5F9] p-6 max-w-full">
            <div className="max-w-5xl mx-auto flex items-center justify-between gap-8 px-4">
                <h2 className="text-lg font-bold">The Editor Minimalist</h2>
                <ul className="flex flex-wrap gap-4 text-gray-500 text-sm">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <p>&copy; 2024 The Editor Minimalist. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;