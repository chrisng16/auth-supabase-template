import React from "react";
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
              href="https://www.linkedin.com/in/chrisng16"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/chrisng16/auth-supabase-template"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <a href="https://nSquare.dev" target="_blank">
            nSquare.dev.
          </a>{" "}
          MIT Licensed.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
