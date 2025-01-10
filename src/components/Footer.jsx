import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600">
            <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo and Description */}
                <div>
                    <h1 className="text-2xl font-bold text-black">FOREVER<span className="text-pink-500">.</span></h1>
                    <p className="mt-4 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-lg font-semibold text-black mb-4">COMPANY</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/about" className="hover:underline">About us</Link></li>
                        <li><Link to="/delivery" className="hover:underline">Delivery</Link></li>
                        <li><Link to="/privacy-policy" className="hover:underline">Privacy policy</Link></li>
                    </ul>
                </div>

                {/* Get In Touch */}
                <div>
                    <h3 className="text-lg font-semibold text-black mb-4">GET IN TOUCH</h3>
                    <ul className="space-y-2">
                        <li>+1-000-000-0000</li>
                        <li><a href="mailto:greatstackdev@gmail.com" className="hover:underline">greatstackdev@gmail.com</a></li>
                        <li><Link to="/instagram" className="hover:underline">Instagram</Link></li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
                Copyright 2024© <Link to="/" className="hover:underline">greatstack.dev</Link> - All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
