export const Button = ({
    children = "Click Me",
    onClick,
    type = "button",
    variant = "primary",
    className = "",
}) => {
    const base = "px-4 py-2 rounded text-white font-semibold transition-all duration-300 w-full sm:w-auto";
    const styles =
        variant === "primary"
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-600 hover:bg-gray-700";

    return (
        <button
            onClick={onClick}
            type={type}
            className={`${base} ${styles} ${className}`}
        >
            {children}
        </button>
    );
};



// Usage example in a component
{/* <Button variant="primary" onClick={() => alert("Primary clicked")}>Submit</Button>
<Button variant="secondary" onClick={() => alert("Secondary clicked")}>Cancel</Button> */}
