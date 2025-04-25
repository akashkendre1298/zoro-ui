import React, { useEffect, useState } from "react";
import { Table } from "../Table/Table";

export const SearchBar = ({ data = [] }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filtered, setFiltered] = useState(data);

    useEffect(() => {
        setFiltered(data);
    }, [data]);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const result = data.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(term)
            )
        );

        setFiltered(result);
    };

    const getColumns = () =>
        filtered.length > 0
            ? Object.keys(filtered[0]).map((key) => ({
                title: key.charAt(0).toUpperCase() + key.slice(1),
                key,
            }))
            : [];

    return (
        <div className="space-y-4">
            <div className="relative w-full max-w-md">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") e.preventDefault();
                    }}
                />
                <span className="absolute right-3 top-2.5 text-gray-400 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>
                </span>
            </div>

            <Table data={filtered} columns={getColumns()} />
        </div>
    );
};
