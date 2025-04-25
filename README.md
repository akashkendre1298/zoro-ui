# Zoro UI - React Component Library

Zoro UI is a lightweight, customizable React component library built with Tailwind CSS. It provides commonly used UI components like buttons, inputs, dropdowns, sidebars, modals, and more, which can be easily integrated into your React projects.

## Installation

To install **Zoro UI** into your project, run:

```bash
npm install zoro-ui
Or if you're using Yarn:
yarn add zoro-ui
Getting Started
Once you have installed the package, you can start using the components in your React project. Below is a detailed usage guide for each component.

Input Component
The Input component allows users to enter text, numbers, and other data types. It's fully customizable and can be used for forms and other user input scenarios.

import { useState } from "react";
import { InputField, validateName, validateEmail, validatePhone, validatePassword } from "zoro-ui";

const FormExample = () => {
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


Prop Name	Type	        Description
label	    string	        The label displayed for the input field.
type	    string      	The type of the input field (e.g., text, email, password).
value	    string	        The current value of the input field.
setValue	function	    A function to update the value of the input field.
validate	function	    The validation function to check input validity (e.g., validateName).
placeholder	string	        Placeholder text to be shown when the input is empty.

import React from "react";
import { Button } from "zoro-ui";

const MyApp = () => {
  return (
    <Button onClick={() => alert("Button Clicked!")}>Click Me</Button>
  );
};

export default MyApp;
Customizing the Button

<Button
  onClick={() => alert("Custom Button Clicked!")}
  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
>
  Submit
</Button>
Dropdown Component
The Dropdown component is a customizable dropdown menu that can be used for selecting values or actions.


import React, { useState } from "react";
import { Dropdown } from "zoro-ui";

const MyApp = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <Dropdown
      options={["Option 1", "Option 2", "Option 3"]}
      onSelect={handleSelect}
      selected={selected}
    />
  );
};

export default MyApp;
Table Component
The Table component provides a customizable table layout for displaying data.


import React from "react";
import { Table } from "zoro-ui";

const MyTable = () => {
  const columns = ["Name", "Age", "Location"];
  const data = [
    { name: "John", age: 30, location: "New York" },
    { name: "Jane", age: 28, location: "Los Angeles" },
  ];

 // types striped, border, default
  return <Table columns={columns} data={data}   type="striped" />;
};

export default MyTable;
Sidebar Component
The Sidebar component is a collapsible sidebar used for navigation.

Basic Usage
jsx
Copy
Edit
import React, { useState } from "react";
import { Sidebar } from "zoro-ui";

const MyApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
      <p>Content inside the sidebar</p>
    </Sidebar>
  );
};

export default MyApp;
Popup Component
The Popup component allows you to display modals or popups in your application.

import React, { useState } from "react";
import { Popup } from "zoro-ui";

const MyApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      <Popup isOpen={isOpen} onClose={togglePopup}>
        <div className="p-4">This is a popup content</div>
      </Popup>
    </div>
  );
};

export default MyApp;
Contributing
If you'd like to contribute to Zoro UI, feel free to submit a pull request or open an issue in the repository. We welcome any contributions or improvements.

License
Zoro UI is open-source and available under the MIT License. See the LICENSE file for more information.

Author
Zoro UI is created and maintained by Akash Kendre.

vbnet


### How to Use This `README.md`:

1. **Add Sections for Each Component**: I've added detailed usage examples for the **Input**, **Button**, **Dropdown**, **Table**, **Sidebar**, and **Popup** components. You can replicate this structure for all other components in your library.
2. **Customization**: Users can customize each component using props, such as `className`, `errorMessage`, `placeholder`, `onClick`, etc.
3. **Installation**: The installation instructions are at the top, guiding users on how to install your pack