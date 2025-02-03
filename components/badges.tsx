import React from "react";
import NextLogo from "./logos/next-logo";
import SupabaseLogo from "./logos/supabase-logo";
import TailwindLogo from "./logos/tailwind-logo";

const Badges = () => {
  return (
    <section className="w-full bg-card-foreground/90 hidden sm:flex items-center justify-around py-4 gap-4">
      <SupabaseLogo />
      <NextLogo />
      <TailwindLogo />
    </section>
  );
};

export default Badges;
