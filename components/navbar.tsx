import Link from "next/link";
import React from "react";
import HeaderAuth from "./header-auth";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 sticky top-0 bg-white dark:bg-black z-50 shadow">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"}>The Waitlist</Link>
        </div>
        <HeaderAuth />
      </div>
    </nav>
  );
};

export default Navbar;
