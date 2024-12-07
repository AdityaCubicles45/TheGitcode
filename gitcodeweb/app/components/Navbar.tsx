'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover } from '@headlessui/react';
import { Award, Heart } from 'lucide-react'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [userAddress, setUserAddress] = useState<string | null>(null); 
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Create', href: '/create' },
    { name: 'Claim', href: '/claim' },
  ];

  const products = [
    {
      name: 'Contribute',
      description: 'Find bounties and contribute to projects',
      href: '/Projects/Contribute',
      icon: Award, 
    },
    {
      name: 'Sponsor Projects',
      description: 'Support contributors by funding projects',
      href: '/Projects/ponsers',
      icon: Heart, 
    },
  ];

  // Function to check if StarKey is installed
  const isStarKeyInstalled = () => {
    return 'starkey' in window;
  };

  // Function to get the provider
  const getProvider = () => {
    if (isStarKeyInstalled()) {
      return window.starkey?.supra; // StarKey provider
    }
    return null;
  };

  // Function to connect to StarKey wallet
  const connectWallet = async () => {
    const provider = getProvider();
    if (provider) {
      try {
        // Request connection to StarKey wallet
        const accounts = await provider.connect();
        setUserAddress(accounts[0]); // Store the connected address
        console.log('Connected account:', accounts[0]);
      } catch (err) {
        console.error('Error connecting to StarKey:', err);
      }
    } else {
      alert('StarKey is not installed. Please install StarKey wallet.');
    }
  };

  // Function to shorten wallet address
  const shortenAddress = (address: string | null) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  useEffect(() => {
    // If StarKey is installed, check if there's an existing connection
    const provider = getProvider();
    if (provider) {
      provider.account().then((accounts: string[]) => {
        if (accounts.length > 0) {
          setUserAddress(accounts[0]); // Set the account if it's connected
        }
      });
    }
  }, []);

  return (
    <nav className="w-full h-[13vh] relative">
      {/* Desktop View */}
      <div className="hidden md:flex w-full flex-row border-b border-[#B3EF00] justify-between px-8 h-[13vh]">
        <div className="flex flex-row items-center">
          <Link href="/">
            <div className="text-2xl font-bold text-[#B3EF00] cursor-pointer motion-preset-float ">{'</>'}GITCODE</div>
          </Link>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center w-[700px] h-[47px] bg-black justify-around text-[#B3EF00] rounded-md font-thin">
            {navItems.map((item) => (
              <div key={item.name} className="relative" onMouseLeave={() => setIsDropdownOpen(false)}>
                {item.name === 'Projects' ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`flex items-center gap-x-1 ${pathname === item.href ? 'font-bold text-[#B3EF00]' : 'font-thin text-[#4B8B00]'}`}
                    >
                      {item.name}
                    </button>
                    {isDropdownOpen && (
                      <Popover className="absolute top-full z-50 mt-1 w-[390px] rounded-2xl bg-black dark:bg-black border border-[#B3EF00] shadow-lg ring-1 ring-gray-900/5 opacity-100">
                        <div className="p-4">
                          {products.map((product) => (
                            <div key={product.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#B3EF00] dark:hover:bg-[#111] transition duration-150">
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-[#111] group-hover:bg-white dark:group-hover:bg-[#333]">
                                <product.icon className="h-6 w-6 text-gray-600 dark:text-[#999] group-hover:-[#B3EF00]" aria-hidden="true" />
                              </div>
                              <div className="flex-auto ">
                                <Link href={product.href} className="block font-semibold hover:text-black">
                                  {product.name}
                                  <span className="absolute inset-0" />
                                </Link>
                                <p className="mt-1 text-gray-200 ">{product.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover>
                    )}
                  </>
                ) : (
                  <Link href={item.href}>
                    <div
                      className={`${pathname === item.href ? 'font-bold text-[#B3EF00]' : 'font-thin text-[#4B8B00]'} cursor-pointer transition-all duration-150`}
                    >
                      {item.name}
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={connectWallet}
            className="relative bg-lime-500 text-black font-mono px-6 py-3 border-2 border-black shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out"
          >
            {userAddress ? `Connected: ${shortenAddress(userAddress)}` : 'Connect Wallet'}
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden w-full flex justify-between items-center px-4 h-full">
        <Link href="/">
          <div className="text-xl font-bold text-[#B3EF00] cursor-pointer">{'</>'}GITCODE</div>
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
        className={`md:hidden fixed inset-0 bg-black transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <div
                className={`${pathname === item.href ? 'font-bold text-[#B3EF00] text-2xl' : 'font-thin text-[#4B8B00] text-2xl'} cursor-pointer transition-all duration-150`}
              >
                {item.name}
              </div>
            </Link>
          ))}
          <button
            onClick={connectWallet}
            className="relative bg-lime-500 text-black font-mono px-6 py-3 border-2 border-black shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out"
          >
            {userAddress ? `Connected: ${shortenAddress(userAddress)}` : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
