function Footer() {
    return (
        <footer className="bg-[#F1F5F9] p-6 max-w-full mt-8">
            <div className="max-w-350 mx-auto flex items-center justify-between gap-18 px-4">
                <h2 className="text-lg font-bold">The Editor Minimalist</h2>
                <ul className="flex flex-wrap gap-4 col-auto text-gray-500 text-sm">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <p>&copy; 2024 The Editor Minimalist. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer