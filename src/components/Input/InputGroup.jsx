import { useState } from "react";

// 🔒 Validators
export const validateName = (val) => /^[a-zA-Z\s]{3,}$/.test(val.trim());
export const validateEmail = (val) => /^\S+@\S+\.\S+$/.test(val);
export const validatePhone = (val) => /^[6-9]\d{9}$/.test(val);
export const validatePassword = (val) => val.length >= 6;

// ✅ Reusable InputField
export const InputField = ({
    label,
    type,
    value,
    setValue,
    validate,
    placeholder,
}) => {
    const [error, setError] = useState("");

    const handleBlur = () => {
        if (!validate(value)) {
            setError(`Invalid ${label.toLowerCase()}`);
        } else {
            setError("");
        }
    };

    return (
        <div className="mb-4 w-full">
            <label className="block mb-1 font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleBlur}
                placeholder={placeholder}
                className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

// 🔧 Grouped Usage Example (Optional)
export const InputGroup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="max-w-md mx-auto">
            <InputField
                label="Name"
                type="text"
                value={name}
                setValue={setName}
                validate={validateName}
                placeholder="Enter your name"
            />
            <InputField
                label="Email"
                type="email"
                value={email}
                setValue={setEmail}
                validate={validateEmail}
                placeholder="Enter your email"
            />
            <InputField
                label="Phone"
                type="tel"
                value={phone}
                setValue={setPhone}
                validate={validatePhone}
                placeholder="Enter your phone number"
            />
            <InputField
                label="Password"
                type="password"
                value={password}
                setValue={setPassword}
                validate={validatePassword}
                placeholder="Enter a strong password"
            />
        </div>
    );
};
