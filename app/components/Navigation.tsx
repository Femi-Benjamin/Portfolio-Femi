"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NavLinks } from "./constants";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      // style={{ left: "20%" }}
      className="flex gap-10"
    >
      {isRouting && (
        <div className="md:block hidden">
          <Transition />
        </div>
      )}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className="mb16 pl4 md:min-w-[20%]"
        >
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
