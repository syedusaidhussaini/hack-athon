'use client'

import { useState } from "react";
import Image from "next/image";
import carton from "@/app/Assets/carton.png";
import dil from "@/app/Assets/dil.png";
import search from "@/app/Assets/search.png";
import contact from "@/app/Assets/contact.png";
import logo from "@/app/Assets/logo.png"; // Added logo import for outside

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <div className="w-full h-[80px] fixed top-0 z-50 bg-white shadow-md flex items-center justify-between px-4 md:px-10">
        
        {/* Logo Section - Outside */}
        <div className="flex items-center space-x-4 z-20">
          <div className="w-12 h-12">
            <Image src={logo} width={50} height={50} alt="logo" />
          </div>
          <p className="font-bold text-2xl">Furniro</p>
        </div>

        {/* Menu Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-black z-30"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
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
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Links and Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
          >
            Home
          </a>
          <a
            href="#shop"
            className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
          >
            Shop
          </a>
          <a
            href="#blog"
            className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
          >
            Blog
          </a>
          <a
            href="#footer"
            className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
          >
            Contact
          </a>
        </div>

{/* Mobile Dropdown Menu - Positioned Behind the Icons */}
{isMenuOpen && (
        <div
          className="fixed top-[80px] left-0 w-full bg-white shadow-md z-10 transition-opacity duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center py-6 space-y-4">
            <a
              href="#home"
              className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#shop"
              className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#blog"
              className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#footer"
              className="text-lg text-black font-semibold hover:underline hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
        {/* Icons outside - Cart, Wishlist, Search, and Contact */}
        <div className="flex items-center space-x-4 z-10">
          <div className="w-6 h-6">
            <Image src={contact} width={25} height={25} alt="contact" />
          </div>
          <div className="w-6 h-6">
            <Image src={search} width={25} height={25} alt="search" />
          </div>
          <div className="w-6 h-6">
            <Image src={dil} width={25} height={25} alt="wishlist" />
          </div>
          <div className="w-6 h-6">
            <Image src={carton} width={25} height={25} alt="cart" />
          </div>
        </div>
      </div>

      
    </>
  );
}
