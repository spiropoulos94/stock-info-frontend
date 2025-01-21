"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Account", href: "#account" },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link href={"/"}>
        <div className="text-2xl font-bold">Stock Info</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-blue-300">
              {item.label}
            </Link>
          ))}
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-transparent border border-white rounded hover:bg-blue-500 transition">
              Log In
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-blue-600 rounded hover:bg-yellow-400 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-4 hover:bg-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="py-2 px-4 flex flex-col space-y-2">
            <button className="px-4 py-2 bg-transparent border border-white rounded hover:bg-blue-400 transition">
              Log In
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-blue-600 rounded hover:bg-yellow-400 transition">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
