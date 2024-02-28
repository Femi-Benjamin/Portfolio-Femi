"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { Socials } from "./constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 z-[40] w-full items-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center xl:h-[100px] h-20">
          <Link href={"/"}>
            <div className="flex gap-3 items-center flexrow">
              <div className="md:block hidden">
                <Image
                  src="/herro-image.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h1 className="text-whit text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Benjamin.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                  Dev
                </span>
              </h1>
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="">
              <Navigation />
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white 
              focus:outline-none focus:ring-1 focus:ring-inset focus:ring-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="flex gap-10">
              {Socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.src}
                  alt={social.name}
                  width={28}
                  height={28}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}>
        <div className={`transform transition-transform ease-in-out duration-300 absolute top-0 right-0 h-full w-3/4 backdrop-blur-xl rounded-3xl z-50 ${isOpen ? 'scale-100' : 'scale-0'}`}>
          <div className="mx-7 sm:mx-7 p-3 space-y-1 rounded-2xl backdrop-blur-xl">
            <div className="border-b border-b-gray-700 pt-8 pb-4 flex justify-center">
              <Navigation />
            </div>
            <div className="pt-3">
              <div className="flex gap-10 justify-center px5">
                {Socials.map((social) => (
                  <Image
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={28}
                    height={28}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
