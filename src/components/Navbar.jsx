import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div id="root">
      <nav id="navbar" className="fixed w-full bg-neutral-900 text-white z-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  CampusQuest
                </span>
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#hero" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#features" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                <a href="#howItWorks" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">How It Works</a>
                <a href="#gamificationElements" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Gamification</a>
                <a href="#aiTechnology" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">AI Technology</a>
                <a href="#testimonials" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                <a href="#pricing" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#faq" className="hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                title="btn"
                id="mobile-menu-button"
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-purple-400 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    id="menu-icon"
                    className={`inline-flex ${isMobileMenuOpen ? 'hidden' : 'inline-flex'}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    id="close-icon"
                    className={`hidden ${isMobileMenuOpen ? 'inline-flex' : 'hidden'}`}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'} bg-neutral-900`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#features" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#howItWorks" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">How It Works</a>
            <a href="#gamificationElements" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Gamification</a>
            <a href="#aiTechnology" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">AI Technology</a>
            <a href="#testimonials" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
            <a href="#pricing" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#faq" className="hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
