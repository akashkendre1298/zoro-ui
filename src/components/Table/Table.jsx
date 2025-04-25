export const Table = ({ data, columns, type = "default" }) => {
    // Function to determine class names based on the table type
    const getClassNames = () => {
        switch (type) {
            case "striped":
                return "table-auto w-full border-collapse";
            case "bordered":
                return "table-auto w-full border-collapse border border-gray-300";
            default:
                return "table-auto w-full border-collapse";
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className={getClassNames()}>
                <thead className="bg-gray-100 text-center">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                className="px-4 py-2 text-center font-semibold border-r border-gray-300"
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className={type === "striped" && index % 2 === 0 ? "bg-gray-50" : ""}
                        >
                            {columns.map((column) => (
                                <td
                                    key={column.key}
                                    className="px-4 py-2 border-b border-r border-gray-300"
                                >
                                    {row[column.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
