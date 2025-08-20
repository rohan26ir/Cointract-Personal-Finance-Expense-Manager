"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menubar = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "About", href: "/about" },
    { id: 3, name: "Services", href: "/services" },
    { id: 4, name: "Blog", href: "/blog" },
    { id: 5, name: "Contact", href: "/contact" },
  ];

  const user = false;

  return (
    <div className="border-b-[1px]">
      <div className="flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-sky-800">
            Cointract
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-semibold">
          {menubar.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block text-xl font-semibold">
          {user ? (
            <Link href="/signin">
              <button>Sign In</button>
            </Link>
          ) : (
            <Link href="/signup">
              <button>Create Account</button>
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="transition-transform duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with smooth animation */}
      <div
        className={`md:hidden bg-white text-black overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col text-center gap-4 px-6 py-4 bg-gray-100 font-semibold">
          {menubar.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Button */}
          <div className="mt-2">
            {user ? (
              <Link href="/signin">
                <button className="w-full py-2 rounded-lg">
                  Sign In
                </button>
              </Link>
            ) : (
              <Link href="/signup">
                <button className="w-full py-2 rounded-lg">
                  Create Account
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
