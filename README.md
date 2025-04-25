# <img src="https://img.shields.io/badge/-Zoro_UI_Components-5e17eb?style=for-the-badge" alt="Zoro UI Components Logo" /> 

<div align="center">
  
  ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
  ![Tailwind CSS](https://img.shields.io/badge/-Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
  ![NPM](https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white)
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  ![Version](https://img.shields.io/badge/version-1.0.1-blue.svg)

  <h3>A lightweight, customizable React component library built with Tailwind CSS</h3>
</div>

## ✨ Features

- 🧩 Modular components for easy integration
- 🎨 Fully customizable with Tailwind CSS
- 🚀 Lightweight with minimal dependencies
- 📱 Responsive design out of the box
- 🔍 Accessibility focused
- 🌙 Dark mode support

## 📦 Installation

```bash
# NPM
npm install zoro-ui-components

# Yarn
yarn add zoro-ui-components

# PNPM
pnpm add zoro-ui-components
```

## 🚀 Quick Start

```jsx
import { Button, InputField } from 'zoro-ui-components';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Awesome App</h1>
      <InputField 
        label="Email"
        placeholder="Enter your email"
        type="email" 
      />
      <Button onClick={() => alert('Hello from Zoro UI!')}>
        Click Me
      </Button>
    </div>
  );
}
```

## 📚 Component Library

### 🔤 Input Component

Fully customizable input fields with built-in validation support.

```jsx
import { useState } from "react";
import { InputField, validateEmail } from "zoro-ui-components";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  return (
    <InputField
      label="Email"
      type="email"
      value={email}
      setValue={setEmail}
      validate={validateEmail}
      placeholder="Enter your email"
    />
  );
};
```

| Prop | Type | Description |
|------|------|-------------|
| `label` | string | The label displayed for the input field |
| `type` | string | Input type (text, email, password, etc.) |
| `value` | string | Current value of the input |
| `setValue` | function | Function to update the value |
| `validate` | function | Validation function |
| `placeholder` | string | Placeholder text |

### 🔘 Button Component

Versatile button component with various styles and states.

```jsx
import { Button } from "zoro-ui-components";

// Default button
<Button onClick={() => console.log("Clicked!")}>
  Click Me
</Button>

// Custom styled button
<Button 
  onClick={() => console.log("Submitted!")}
  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
>
  Submit
</Button>
```

### 📝 Dropdown Component

Interactive dropdown menu for selections and actions.

```jsx
import { useState } from "react";
import { Dropdown } from "zoro-ui-components";

const FilterDropdown = () => {
  const [selected, setSelected] = useState(null);

  return (
    <Dropdown
      options={["Latest", "Oldest", "Popular"]}
      onSelect={setSelected}
      selected={selected}
    />
  );
};
```

### 🔍 SearchBar Component

Real-time search filtering for datasets and tables.

```jsx
import React, { useState } from "react";
import { SearchBar } from "zoro-ui-components";

const App = () => {
  const [data, setData] = useState([
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Sam Wilson", age: 22, city: "Chicago" },
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <SearchBar data={data} placeholder="Search users..." />
    </div>
  );
};

export default App;
```

| Prop | Type | Description |
|------|------|-------------|
| `data` | array | Dataset that will be searched (array of objects) |
| `placeholder` | string | Placeholder text for the search input (optional) |
| `className` | string | Additional custom CSS classes for styling (optional) |

### 📊 Table Component

Flexible table layouts for displaying structured data.

```jsx
import { Table } from "zoro-ui-components";

const UsersTable = () => {
  const columns = ["Name", "Age", "Location"];
  const data = [
    { name: "John", age: 30, location: "New York" },
    { name: "Jane", age: 28, location: "Los Angeles" },
  ];

  return <Table 
    columns={columns} 
    data={data} 
    type="striped" // Options: "striped", "border", "default"
  />;
};
```

### 📱 Sidebar Component

Collapsible sidebar navigation with smooth transitions.

```jsx
import { useState } from "react";
import { Sidebar } from "zoro-ui-components";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)}>
      <nav className="p-4">
        <h2 className="font-bold mb-4">Menu</h2>
        <ul>
          <li className="mb-2">Home</li>
          <li className="mb-2">About</li>
          <li className="mb-2">Contact</li>
        </ul>
      </nav>
    </Sidebar>
  );
};
```

### 💬 Popup Component

Modal dialogs and popup notifications with customizable content.

```jsx
import { useState } from "react";
import { Button, Popup } from "zoro-ui-components";

const ConfirmationDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Popup</Button>
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <h3 className="text-lg font-bold mb-2">Confirmation</h3>
          <p className="mb-4">Are you sure you want to proceed?</p>
          <div className="flex justify-end gap-2">
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button 
              className="bg-blue-600 text-white"
              onClick={() => {
                // Handle confirmation
                setIsOpen(false);
              }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};
```

## 🎭 Theme Customization

Zoro UI Components work seamlessly with your tailwind.config.js.

```jsx
// Example of customizing a Button
<Button 
  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300"
>
  Gradient Button
</Button>
```

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/akashkendre1298/zoro-ui-components.git

# Install dependencies
cd zoro-ui-components
npm install

# Start the development server
npm run dev

# Run tests
npm run lint

# Build for production
npm run build
```

## 📝 Changelog

### v1.0.1 (Latest)
- 🎉 Initial public release with core components
- 🌗 Added dark mode support
- 🌟 Improved accessibility features
- 🔍 Added SearchBar component

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Submit a [pull request](https://github.com/akashkendre1298/zoro-ui)
- Report [issues](https://github.com/akashkendre1298/zoro-ui)
- Suggest new features

## 📄 License

Zoro UI Components is open-source software licensed under the [MIT License](LICENSE).

## 👨‍💻 Author

Created and maintained by Akash Kendre.

---

<div align="center">
  <p>
    <a href="https://github.com/akashkendre1298/zoro-ui">GitHub</a> •
    <a href="https://www.npmjs.com/package/zoro-ui">NPM</a>
  </p>
  <p>⭐ Star us on GitHub if you find Zoro UI Components helpful! ⭐</p>
</div>
