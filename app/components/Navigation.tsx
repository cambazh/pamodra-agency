'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-24 relative">
          {/* Menu Button - Sol Üst */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute left-0 text-gray-700 hover:text-black focus:outline-none transition-colors"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo - Ortada */}
          <Link href="/" className="flex flex-col items-center space-y-1 group">
            <div className="text-3xl md:text-4xl font-bold text-black tracking-tight group-hover:scale-105 transition-transform duration-300">
              PAMODRA
            </div>
            <div className="text-xs md:text-sm font-light text-gray-500 tracking-[0.3em] uppercase">
              Agency
            </div>
          </Link>
        </div>

        {/* Menu */}
        {isOpen && (
          <div className="py-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-black hover:bg-gray-50 px-4 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

