'use client';

import React from 'react';
import Link from 'next/link'; // Import Link from Next.js
import { usePathname } from 'next/navigation';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname(); // Get the current route

  // Navbar items with corresponding href
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Create', href: '/create' },
    { name: 'Claim', href: '/claim' },
  ];

  return (
    <div className="w-full h-[13vh] flex flex-row justify-between px-8">
      <div className="flex flex-row items-center">
        <div className="text-2xl font-bold text-[#B3EF00]">{`</>GITCODE`}</div>
      </div>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center w-[700px] h-[47px] bg-black justify-around text-[#B3EF00] rounded-md font-thin">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <div
                className={`${
                  pathname === item.href
                    ? 'font-bold text-[#B3EF00]' // Bright green and bold for active link
                    : 'font-thin text-[#4B8B00]' // Dark green and thin for inactive links
                } cursor-pointer transition-all duration-150`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="relative bg-lime-500 text-black font-mono px-6 py-3 border-2 border-black shadow-lg hover:translate-x-[2px] hover:translate-y-[-2px] active:translate-x-[0px] active:translate-y-[0px] hover:shadow-[-8px_8px_0px_#000000] active:shadow-[0px_0px_0px_#000000] transition-transform duration-150 ease-in-out"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Navbar;
