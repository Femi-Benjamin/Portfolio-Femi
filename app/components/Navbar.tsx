import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { Socials } from "./constants";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full flex justify-between h-[100px] items-center px-10 xl:px-20 ">
      <Link href={"/"}>
        <div className="flex gap-3 items-center flexrow">
          <Image
            src="/herro-image.png"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
          <h1 className="text-whit text-[30px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Benjamin.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              Dev
            </span>
          </h1>
        </div>
      </Link>

      <div className="">
        <Navigation />
      </div>

      <div className="flex gap-10 mb2 flexrow">
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
  );
};

export default Navbar;
