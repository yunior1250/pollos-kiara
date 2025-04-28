"use client";

import React, { useState , useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <nav  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* logo */}
          <div className="flex-shrink-0 ">
            <Link href="/" className="text-blue-500">
              {/*  Pollos Kiara */}
              <Image src="/images/logo.png" alt="Logo" width={ 52} height={52} />
            </Link>
          </div>
          {/*   Desktop Menu */}
          <div className="hidden md:flex space-x-4  font-bold">
            <Link href="/" className="text-orange-400 hover:text-red-500">
              Home
            </Link>
            <Link href="/about" className="text-orange-400 hover:text-red-500">
              About
            </Link>
            <Link
              href="/products"
              className="text-orange-400 hover:text-red-500"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-orange-400 hover:text-red-500"
            >
              Contact
            </Link>
          </div>
          {/* mobile menu button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-orange-400 hover:text-red-500"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#menu"
              className="block text-orange-400 hover:text-red-500"
            >
              Home
            </Link>
            <Link
              href="#menu"
              className="block text-orange-400 hover:text-red-500"
            >
              menu
            </Link>
            <Link
              href="#menu"
              className="block text-orange-400 hover:text-red-500"
            >
              products
            </Link>
            <Link
              href="#menu"
              className="block text-orange-400 hover:text-red-500"
            >
              nosotros
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
