"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <nav className="bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              className="rounded-md text-xl font-bold hover:bg-gray-700 px-3 py-2"
              href="/Home"
            >
              <span className="text-yellow-400">{"{"}</span>
              <span className="text-dark-primary">( )</span>
              <span className="text-yellow-400">{" =>"}</span>
              <span className="text-white"> Slash.</span>
              <span className="text-yellow-400">{"}"}</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              href="/Home"
            >
              Home
            </Link>
            <Link
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
              href="/createPost"
            >
              Create Post
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? isAnimating
              ? "animate-slideUp"
              : "animate-slideDown"
            : "hidden"
        } md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            className="block px-3 py-2 rounded-md text-base font-medium focus:bg-gray-700"
            href="/Home"
          >
            Home
          </Link>
          <Link
            className="block px-3 py-2 rounded-md text-base font-medium focus:bg-gray-700"
            href="/createPost"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
