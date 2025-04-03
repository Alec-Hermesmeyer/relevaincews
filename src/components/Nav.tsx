"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui-components";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  
  // Add tailwind keyframes animation
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const togglePlatformDropdown = () => {
    setIsPlatformDropdownOpen(!isPlatformDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const closeMenuOnRouteChange = () => {
      setIsOpen(false);
      setIsPlatformDropdownOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
      setIsPlatformDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    closeMenuOnRouteChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

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
            src="/LogoWhite.png"
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
          {/* Platform Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition relative group"
              onClick={() => setIsPlatformDropdownOpen(!isPlatformDropdownOpen)}
              onMouseEnter={() => setIsPlatformDropdownOpen(true)}
            >
              Platform
              <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isPlatformDropdownOpen ? 'transform rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-1/2"></span>
            </button>
            
            {/* Desktop Dropdown Menu */}
            {isPlatformDropdownOpen && (
              <div 
                className="absolute left-0 mt-2 w-64 rounded-lg shadow-xl bg-white border border-gray-200 focus:outline-none z-50 overflow-hidden transition-all duration-200 ease-in-out"
                onMouseLeave={() => setIsPlatformDropdownOpen(false)}
              >
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <div className="bg-blue-50 px-4 py-2 text-sm font-medium text-blueback border-b border-gray-200">
                    Our Solutions
                  </div>
                  <Link
                    href="/data-chat"
                    className="block px-4 py-3 text-blueback hover:bg-blue-50 transition-colors duration-150 text-sm border-b border-gray-100 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Data Chat
                  </Link>
                  <Link
                    href="/claims-analyst"
                    className="block px-4 py-3 text-blueback hover:bg-blue-50 transition-colors duration-150 text-sm border-b border-gray-100 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Claims Analyst
                  </Link>
                  <Link
                    href="/dynamic-avatar-presentations"
                    className="block px-4 py-3 text-blueback hover:bg-blue-50 transition-colors duration-150 text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Dynamic Avatar Presentations
                  </Link>
                </div>
              </div>
            )}
          </div>
          
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
              {/* Mobile Platform Dropdown */}
              <div className="w-full flex flex-col items-center">
                <button
                  onClick={togglePlatformDropdown}
                  className="flex items-center justify-center text-white px-4 py-2 rounded-md hover:bg-white hover:text-blueback transition"
                >
                  Platform
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
                
                {/* Mobile Dropdown Menu */}
                {isPlatformDropdownOpen && (
                  <div className="w-4/5 mt-2 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 animate-fadeIn">
                    <div className="bg-blue-50 px-4 py-2 text-sm font-medium text-blueback border-b border-gray-200">
                      Our Solutions
                    </div>
                    <Link
                      href="/data-chat"
                      className="block px-4 py-3 text-blueback hover:bg-blue-50 transition-colors duration-150 text-sm border-b border-gray-100 flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Data Chat
                    </Link>
                    <Link
                      href="/claims-analyst"
                      className="block px-4 py-3 text-blueback hover:bg-blue-50 transition-colors duration-150 text-sm border-b border-gray-100 flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Claims Analyst
                    </Link>
                    <Link
                      href="/dynamic-avatar-presentations"
                      className="block px-4 py-3 text-blueback hover:bg-blue-50 transition-colors duration-150 text-sm flex items-center justify-center"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Dynamic Avatar Presentations
                    </Link>
                  </div>
                )}
              </div>
              
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
                <Link href="https://prod.relevaince.ai/" className="text-blueback">Client Login</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Nav;