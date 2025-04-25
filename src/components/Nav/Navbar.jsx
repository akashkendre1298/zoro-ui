import React, { useState } from "react";

export const Navbar = ({ menuItems = [], className = "", menuItemClass = "" }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`bg-blue-600 p-4 ${className}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold">MyLogo</div>

                {/* Mobile Hamburger Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Navbar Menu */}
                <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
                    <ul className="flex space-x-6">
                        {menuItems.map((item, index) => (
                            <li key={index} className="relative group">
                                <a
                                    href={item.link || "#"}
                                    className={`text-white hover:text-blue-300 py-2 px-4 transition-all ease-in-out duration-300 rounded-lg hover:bg-blue-700 ${menuItemClass}`}
                                >
                                    {item.name}
                                </a>

                                {/* Submenu */}
                                {item.submenu && (
                                    <ul className="absolute left-0 top-full bg-blue-600 text-white w-48 py-2 mt-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <a
                                                    href={subItem.link}
                                                    className="block px-4 py-2 text-sm hover:bg-blue-700"
                                                >
                                                    {subItem.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
