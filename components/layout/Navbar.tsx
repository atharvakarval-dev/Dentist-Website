'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-primary">Dentis</span>
                <span className="text-emerald-500">tree</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">Contact</Link>

            <Link href="/contact" className="bg-primary hover:bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">
              Book Appointment
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <Link href="/contact" className="w-full text-center bg-primary hover:bg-sky-600 text-white mt-4 block px-3 py-2 rounded-md text-base font-medium">
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
