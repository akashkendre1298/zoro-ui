import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Button } from './components/Button/Button'
import { Table } from './components/Table/Table'
import { SearchBar } from './components/SearchBar/SearchBar'
import { SearchableDropdown } from './components/Dropdown/Dropdown'
import { Navbar } from './components/Nav/NavBar'

function App() {


  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    {
      name: "Products",
      link: "/products",
      submenu: [
        { name: "Product 1", link: "/products/1" },
        { name: "Product 2", link: "/products/2" },
        { name: "Product 3", link: "/products/3" },
      ]
    },
    { name: "Contact", link: "/contact" }
  ];

  return (
    <>
     {/* <Sidebar/>
     <Button/> */}
      <Navbar
        menuItems={menuItems}
        className="bg-blue-600 p-4 shadow-lg" // Navbar class
        menuItemClass="text-white px-4 py-2 text-lg font-medium rounded-lg hover:bg-blue-700 transition-all ease-in-out duration-300"
      />



    </>
  )
}

export default App
