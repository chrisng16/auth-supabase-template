"use client";
import React from "react";
import GithubLogoLight from "../../public/github-mark.svg";
import GithubLogoDark from "../../public/github-mark-white.svg";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const CallToAction = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="container max-w-7xl mx-auto px-4 py-6 md:py-20 animate-fade-in">
      <div className="relative bg-background rounded-3xl p-px overflow-hidden shadow">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9641ff70] via-[#a798b970] to-[#7551d170]"></div>
        <div className="relative bg-background rounded-3xl p-4 py-8 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-balance">
            Minimal Effort, Optimal Solution
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base text-balance">
            Like it so far? Check out our GitHub page for the complete template!
          </p>
          <Button
            size="lg"
            className="rounded-lg px-8 gap-2 shadow-lg hover:shadow-primary/20 transition-shadow"
            asChild
          >
            <Link
              href="https://github.com/chrisng16/auth-supabase-template"
              rel="noreferrer noopener"
              target="_blank"
            >
              Explore on GitHub
              <Image
                alt="Github Logo"
                src={
                  resolvedTheme === "dark" ? GithubLogoLight : GithubLogoDark
                }
                className="size-5"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
