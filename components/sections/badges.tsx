"use client";
import React from "react";
import NextLogoWhite from "../../public/nextjs-logo-dark.png";
import NextLogoBlack from "../../public/nextjs-logo-light.png";
import ShadcnLogoWhite from "../../public/shadcn-logo-white.svg";
import ShadcnLogoBlack from "../../public/shadcn-logo.svg";
import SupabaseLogoWhite from "../../public/supabase-logo-dark.png";
import SupabaseLogoBlack from "../../public/supabase-logo-light.png";
import TailwindLogo from "../../public/tailwindcss-logo.svg";

import Image from "next/image";
import AutoScrollBanner from "../auto-scroll-banner";
import { useTheme } from "next-themes";

const Badges = () => {
  const { resolvedTheme } = useTheme();
  return (
    <section className="w-full flex items-center justify-around py-4 gap-4 h-16">
      <AutoScrollBanner>
        <Image
          src={resolvedTheme === "dark" ? SupabaseLogoWhite : SupabaseLogoBlack}
          alt="Supabase Logo"
          className="h-5 md:h-7 w-auto"
        />
        <Image
          src={resolvedTheme === "dark" ? NextLogoWhite : NextLogoBlack}
          alt="Nextjs Logo"
          className="h-5 md:h-5 w-auto"
        />
        {/* TailwindCSS */}
        <div className="flex items-center text-lg md:text-3xl gap-2 font-semibold h-5 md:h-7 w-auto">
          <Image
            src={TailwindLogo}
            alt="TailwindCSS Logo"
            className="h-5 md:h-7 w-auto"
          />
          tailwindcss
        </div>

        <div className="flex items-center text-base md:text-2xl gap-1 md:gap-2 font-semibold h-5 md:h-7 w-auto max-w-none">
          <Image
            src={resolvedTheme === "dark" ? ShadcnLogoWhite : ShadcnLogoBlack}
            alt="Shadcn Logo"
            className="h-5 md:h-7 w-auto"
          />
          shadcn/ui
        </div>
      </AutoScrollBanner>
    </section>
  );
};

export default Badges;
