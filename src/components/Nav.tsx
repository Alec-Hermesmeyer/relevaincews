"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui-components";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-blueback backdrop-blur-md shadow-md"
          : "bg-blueback"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/LogoPurple.png"
            alt="LegalAI Pro"
            width={80}
            height={80}
            className="w-16 sm:w-16 md:w-16 lg:w-20"
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <XIcon className="h-8 w-8 transition duration-200 cursor-pointer" aria-hidden="true" />
          ) : (
            <MenuIcon className="h-8 w-8 transition duration-200 cursor-pointer" aria-hidden="true" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/platform"
            className="text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition"
          >
            Platform
          </Link>
          <Link
            href="/security"
            className="text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition"
          >
            Security
          </Link>
          <Link
            href="/our-story"
            className="text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition"
          >
            Our Story
          </Link>
          <Button
            size="sm"
            className="bg-slate-200 hover:bg-slate-400 text-blueback py-2 px-4 rounded-lg border border-[#10275e]"
          >
            <Link href="https://prod.relevaince.ai/" className="text-blueback">Client Login</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-blueback shadow-md rounded-b-lg py-4 mt-4 md:hidden">
            <div className="flex flex-col items-center space-y-4">
              <Link
                href="/platform"
                className="block text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition"
              >
                Platform
              </Link>
              <Link
                href="/security"
                className="block text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition"
              >
                Security
              </Link>
              <Link
                href="/our-story"
                className="block text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition"
              >
                Our Story
              </Link>
              <Button
                size="sm"
                className="bg-slate-200 hover:bg-slate-400 text-blueback py-2 px-4 rounded-lg border border-[#10275e]"
              >
                <Link href="https://prod.relevaince.ai/">Client Login</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;
