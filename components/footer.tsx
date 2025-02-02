import React from "react";
import { ThemeSwitcher } from "./theme-switcher";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 h-12 bg-white dark:bg-black">
      <p>
        Powered by{" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          nSquare.dev
        </a>
      </p>
      <ThemeSwitcher />
    </footer>
  );
};

export default Footer;
