import { Dropdown, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";

export default function NavBar() {

    return (
        <div className="max-w-full px-4 py-3 mx-auto sm:px-6 lg:px-8 bg-white sticky top-0 mb-5 z-10">

            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand

                    to="/"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-9 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Torana
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="hover:text-red-700">
                    <Navbar.Link
                        href="/"
                        className='font-bold text-gray-700 hover:text-red-500'
                    >
                        HOME
                    </Navbar.Link>
                    <Navbar.Link
                        href="/about"
                        className='font-bold text-gray-700 hover:text-red-500'
                    >
                        ABOUT
                    </Navbar.Link>


                    <Navbar.Link
                        className='font-bold text-gray-700 hover:text-red-500'
                        href="/services">
                        NDIS SERVICES
                    </Navbar.Link>
                    <Navbar.Link
                        className='font-bold text-gray-700 hover:text-red-500'
                        href="/contact">
                        CONTACT
                    </Navbar.Link>
                    {/* <Dropdown
                        inline={true}
                        label="Dropdown"
                    >

                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown> */}
                    <Navbar.Link
                        className='font-bold text-gray-700 hover:text-red-500'
                        href="/careers">
                        CAREERS
                    </Navbar.Link>
                    <Navbar.Link
                        className='font-bold text-gray-700 hover:text-red-500'
                        href="/navbars"
                    >
                        COVID -19 UPDATE
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>

        </div>

    );
}