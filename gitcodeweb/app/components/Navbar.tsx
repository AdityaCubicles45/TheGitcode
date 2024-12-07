'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Create', href: '/create' },
    { name: 'Claim', href: '/claim' },
  ];

  return (
    <nav className="w-full h-[13vh] relative">
      {/* Desktop View */}
      <div className="hidden md:flex w-full flex-row justify-between px-8 h-[13vh]">
        <div className="flex flex-row items-center">
          <Link href="/">
            <div className="text-2xl font-bold text-[#B3EF00] cursor-pointer">{`</>GITCODE`}</div>
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center w-[700px] h-[47px] bg-black justify-around text-[#B3EF00] rounded-md font-thin">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <div
                  className={`${
                    pathname === item.href
                      ? 'font-bold text-[#B3EF00]'
                      : 'font-thin text-[#4B8B00]'
                  } cursor-pointer transition-all duration-150`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <button className="relative bg-lime-500 text-black font-mono px-6 py-3 border-2 border-black shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out">
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full flex justify-between items-center px-4 h-full">
        <Link href="/">
          <div className="text-xl font-bold text-[#B3EF00] cursor-pointer">{`</>GITCODE`}</div>
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#B3EF00] p-2 z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-black transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className={`${
                  pathname === item.href
                    ? 'font-bold text-[#B3EF00] text-2xl'
                    : 'font-thin text-[#4B8B00] text-2xl'
                } cursor-pointer transition-all duration-150`}
              >
                {item.name}
              </div>
            </Link>
          ))}
          <button className="relative bg-lime-500 text-black font-mono px-6 py-3 border-2 border-black shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out mt-8">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;