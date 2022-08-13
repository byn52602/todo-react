import React, { useState } from 'react';
import { NavLink } from "react-router-dom"
//Usually, we often navigate different pages of a website using the <a href> tag. 
//But this results in a page refresh. And in a single page application, we don’t want that.
//So React router provides for us the route changers components that we can use to have a smooth navigation. The <Link> and <NavLink> components.
// Navlink has "active" rpoperty

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const links = [
        {
            id: 1,
            path: "/",
            text: "Home"
        },
        {
            id: 2,
            path: "/about",
            text: "About"
        },
    ]
    const handleToggle = () => {
        // Both works!
        setNavbarOpen(prev => !prev)
        // setNavbarOpen(!navbarOpen)
    }
    return (
        <nav className='navBar'>
            <button onClick={handleToggle}>
                {navbarOpen ? (
                    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
                ) : (
                    <FiMenu style={{ color: "#0077b6", width: "40px", height: "40px" }} />
                )}
            </button>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink
                                to={link.path} exact
                                onClick={() => setNavbarOpen(false)}
                            >
                                {link.text}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default NavBar;