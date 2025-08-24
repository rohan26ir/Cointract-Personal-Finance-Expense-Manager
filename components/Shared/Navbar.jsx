"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Enhanced menu structure with dropdown support
  const menubar = [
    { id: 1, name: "Home", href: "/" },
    {
      id: 2,
      name: "Services",
      href: "/services",
      dropdown: [
        { id: 21, name: "Web Development", href: "/services/web" },
        { id: 22, name: "Mobile Apps", href: "/services/mobile" },
        { id: 23, name: "UI/UX Design", href: "/services/design" },
        { id: 24, name: "Cloud Solutions", href: "/services/cloud" },
      ],
    },
    {
      id: 3,
      name: "Resources",
      href: "/resources",
      dropdown: [
        { id: 31, name: "Blog", href: "/blog" },
        { id: 32, name: "Case Studies", href: "/case-studies" },
        { id: 33, name: "Whitepapers", href: "/whitepapers" },
        { id: 34, name: "Webinars", href: "/webinars" },
      ],
    },
    { id: 4, name: "About", href: "/about" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  const user = false;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="w-[90%] mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <div>
          <Link
            href="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-orange-300"
          >
            Cointract
          </Link>
        </div>

        {/* Desktop Menu with Dropdowns */}
        <div
          className="hidden lg:flex gap-8 font-medium items-center"
          ref={dropdownRef}
        >
          {menubar.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                {item.name}
                {item.dropdown && <ChevronDown size={16} className="ml-1" />}
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div
                  className={`absolute top-full left-0 w-48 bg-white rounded-lg shadow-xl py-2 transition-all duration-300 z-50 ${
                    activeDropdown === item.id
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden  lg:flex items-center gap-4">
          {user ? (
            <Link href="/dashboard">
              <button className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
                Dashboard
              </button>
            </Link>
          ) : (
            <>
              <Link href="/signin">
                <button className="cursor-pointer px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300">
                  Sign In
                </button>
              </Link>
              <Link href="/signup">
                <button className="cursor-pointer px-4 py-2 bg-gray-100 border border-gray-300 text-black font-medium rounded-2xl hover:shadow-lg transition-all duration-300">
                  Create Account
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg hover:bg-gray-100 text-black transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[100%] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-4 font-medium text-center ">
          {menubar.slice(0, 2).map((item) => (
            <div key={item.id} className="border-[1px] border-gray-300">
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </Link>

              {/* Mobile nested dropdown items */}
              {item.dropdown && (
                <div className="pl-6 mt-1 space-y-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      href={dropdownItem.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-3 text-sm text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Buttons */}
          <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
            {user ? (
              <Link href="/dashboard" className="block">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2 px-4 text-center bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Dashboard
                </button>
              </Link>
            ) : (
              <>
                <Link href="/signin" className="block">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2 px-4 text-center text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href="/signup" className="block">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full py-2 px-4 text-center text-black rounded-lg font-medium hover:shadow-lg duration-200"
                  >
                    Create Account
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;