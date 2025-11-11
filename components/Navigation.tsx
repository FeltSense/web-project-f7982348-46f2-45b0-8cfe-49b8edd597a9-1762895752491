'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#programs', label: 'Programs' },
    { href: '#testimonials', label: 'Success Stories' },
    { href: '#pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog', isRoute: true },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            FIT<span className="text-red-600">CORE</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href === '/blog') {
                    e.preventDefault();
                    window.location.href = '/blog';
                  }
                }}
                className={`font-medium transition-colors duration-300 hover:text-red-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 bg-white rounded-lg shadow-xl p-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (link.href === '/blog') {
                    e.preventDefault();
                    window.location.href = '/blog';
                  }
                }}
                className="block text-gray-700 font-medium hover:text-red-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}