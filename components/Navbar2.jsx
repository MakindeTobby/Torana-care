import React, { useState } from 'react';

import styles from '@/styles/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <Link className="navbar-brand" href="/">
                My React App
            </Link>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" href="/home">
                        Home
                    </Link>
                    <Link className="navbar-item" href="/about">
                        About
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" onClick={toggleDropdown}>
                            More
                        </a>
                        {isOpen && (
                            <div className="navbar-dropdown">
                                <Link className="navbar-item" href="/contact">
                                    Contact
                                </Link>
                                <Link className="navbar-item" href="/faq">
                                    FAQ
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;