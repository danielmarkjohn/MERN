// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { navigation } from "@config/routes";

const Navbar: React.FC = () => {
  const location = useLocation();

  // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const isActivePath = (path: string): boolean => {
    if (path === "/" && location.pathname !== "/") {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex justify-between h-16">
              <div className="flex items-center justify-between flex-1">
                {/* Logo */}
                <div className="flex items-center">
                  <Link
                    to="/"
                    className="flex items-center space-x-2"
                    aria-label="AxSphere Home"
                  >
                    <span className="text-xl font-bold text-primary sm:text-2xl">
                      AxSphere
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                        isActivePath(item.href)
                          ? "border-primary text-primary"
                          : "border-transparent text-gray-900 hover:border-primary hover:text-primary"
                      }`}
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Dropdown for New Zealand and Australia */}
                <div className="relative ml-auto">
                  <button
                    onClick={toggleDropdown}
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 focus:outline-none"
                    aria-label="Select Region"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0l-2-2m2 2V4a1 1 0 011-1h3m-6 9l2-2 2 2M7 5h10a1 1 0 011 1v3m-1 0H8a1 1 0 01-1-1V6z"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                      <Link
                        to="/newzealand"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown after selection
                      >
                        New Zealand
                      </Link>
                      <Link
                        to="/australia"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)} // Close dropdown after selection
                      >
                        Australia
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block w-6 h-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 pl-3 pr-4 text-base font-medium border-l-4 transition-colors duration-200 ${
                    isActivePath(item.href)
                      ? "border-primary text-primary bg-primary-50"
                      : "border-transparent text-gray-900 hover:bg-gray-50 hover:border-primary hover:text-primary"
                  }`}
                  aria-label={`Navigate to ${item.name} (mobile)`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;