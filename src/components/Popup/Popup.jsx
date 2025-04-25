import { useEffect } from "react";

export const Popup = ({ isOpen, onClose, title, children, onConfirm }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-xl w-[90%] max-w-md p-6 relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">
                    {/* ❌ Close Icon (SVG) */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}
                <div className="mb-4">{children}</div>

                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
                        Cancel
                    </button>
                    {onConfirm && (
                        <button onClick={onConfirm} className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                            Confirm
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
