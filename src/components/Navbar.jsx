import React, { useState } from "react";
import logo2 from "../images/Shriyash.logo.jpg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-100 shadow-md p-4 flex justify-between items-center relative">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src={logo2}
                    alt="Logo"
                    className="h-[120px]"
                />
            </div>

            {/* Hamburger Menu for Mobile */}
            <button
                className="text-gray-700 md:hidden flex items-center ml-auto"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>

            {/* Menu Links - Popup Style */}
            <div
                className={`md:hidden absolute top-0 right-0 w-[120px] bg-gray-100 shadow-lg transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                style={{ transition: "transform 0.3s ease-in-out" }}
            >
                <div className="flex flex-col items-center space-y-4 py-6">
                    <button
                        onClick={() => {
                            navigate("/home");
                            setIsMenuOpen(false); // Close the menu after navigation
                        }}
                        className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => {
                            navigate('/about');
                            setIsMenuOpen(false); // Close the menu after navigation
                        }}
                        className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                    >
                        About
                    </button>
                    <button
                        onClick={() => {
                            navigate('/contact');
                            setIsMenuOpen(false); // Close the menu after navigation
                        }}
                        className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                    >
                        Contact
                    </button>
                    <button
                        onClick={() => {
                            navigate('/shop');
                            setIsMenuOpen(false); // Close the menu after navigation
                        }}
                        className="text-gray-700 hover:text-[#4CAF50] font-semibold"
                    >
                        Shop
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
