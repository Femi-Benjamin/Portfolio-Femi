// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Navigation from "./Navigation";
// import { Socials } from "./constants";

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 z-[40] w-full flex justify-between h-[100px] items-center px-10 xl:px-20">
//       <Link href={"/"}>
//         <div className="flex gap-3 items-center flexrow">
//           <Image
//             src="/herro-image.png"
//             alt="logo"
//             width={40}
//             height={40}
//             className="w-full h-full object-contain rounded-full"
//           />
//           <h1 className="text-whit text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//             Benjamin.
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
//               Dev
//             </span>
//           </h1>
//         </div>
//       </Link>

//       <div>
//         <Navigation />
//       </div>

//       <div className="flex gap-10 mb2 flexrow">
//         {Socials.map((social) => (
//           <Image
//             key={social.name}
//             src={social.src}
//             alt={social.name}
//             width={28}
//             height={28}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

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
    <div className="fixed top-0 z-[40] w-full items-center ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[100px]">
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
            <Navigation />
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
      {isOpen && (
        <div className="md:hidden">
          <div className="px-3 pt2 space-y-1 sm:px-6">
            <div className="border-b border-b-gray-700 pb-4 flex justify-center">
              <Navigation />
            </div>
            <div className="pt-4 pb3">
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
      )}
    </div>
  );
};

export default Navbar;
