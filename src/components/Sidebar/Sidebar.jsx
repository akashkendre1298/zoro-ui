import { useState } from "react";
import { Button } from "../Button/Button";

export const Sidebar = () => {
    const [open, setOpen] = useState(true);

    const HamburgerIcon = (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );

    const CloseIcon = (
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    return (
        <div className="flex">
            <button
                onClick={() => setOpen(!open)}
                className="p-2 z-50 absolute top-4 left-4 bg-white rounded shadow"
            >
                {open ? CloseIcon : HamburgerIcon}
            </button>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <ul className="p-4 space-y-4 mt-12">
                    <li className="hover:bg-gray-700 px-2 py-1 rounded">Home</li>
                    <li className="hover:bg-gray-700 px-2 py-1 rounded">Profile</li>
                    <li className="hover:bg-gray-700 px-2 py-1 rounded">Settings</li>
                    <li className="hover:bg-gray-700 px-2 py-1 rounded">Logout</li> 
                    


                </ul>
            </div>
        </div>
    );
};
