import React, { useState } from "react";

export const SearchableDropdown = ({
    options = [],
    onSelect = () => { },
    inputClassName = "",
    dropdownClassName = "",
    itemClassName = "",
    iconClassName = "",
}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [isOpen, setIsOpen] = useState(false);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        setFilteredOptions(
            options.filter((option) => option.toLowerCase().includes(term))
        );
    };

    const handleSelect = (option) => {
        onSelect(option); // Call the callback with the selected option
        setSearchTerm(option); // Set the search term to the selected option
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on input click
                placeholder="Search..."
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 pl-10  ${inputClassName}`} // Accept dynamic input styling
            />

            {/* Down Arrow Icon when dropdown is closed */}
            {!isOpen && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 ${iconClassName}`} // Accept dynamic icon styling
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            )}

            {/* Up Arrow Icon when dropdown is open */}
            {isOpen && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 ${iconClassName}`} // Accept dynamic icon styling
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M6 15l6-6 6 6" />
                </svg>
            )}

            {isOpen && (
                <ul
                    className={`absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto ${dropdownClassName}`} // Accept dynamic dropdown styling
                >
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${itemClassName}`} // Accept dynamic item styling
                                onClick={() => handleSelect(option)} // Select by clicking
                            >
                                {option}
                            </li>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-gray-500">No options found</li>
                    )}
                </ul>
            )}
        </div>
    );
};
