import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-8 w-full">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <nav className="flex gap-6 text-sm text-muted-foreground">
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="https://github.com/yourusername/nextsupabase"
              target="_blank"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a href="https://nSquare.dev">nSquare.dev.</a> MIT Licensed.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
