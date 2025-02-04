import React from "react";
import NextLogoWhite from "../public/nextjs-logo-dark.png";
import NextLogoBlack from "../public/nextjs-logo-light.png";
import ShadcnLogoBlack from "../public/shadcn-logo.svg";
import ShadcnLogoWhite from "../public/shadcn-logo-white.svg";
import TailwindLogo from "../public/tailwindcss-logo.svg";
import SupabaseLogoWhite from "../public/supabase-logo-dark.png";
import SupabaseLogoBlack from "../public/supabase-logo-light.png";

import AutoScrollBanner from "./auto-scroll-banner";
import Image from "next/image";

const Badges = () => {
  return (
    <section className="w-full flex items-center justify-around py-4 gap-4 h-16">
      <AutoScrollBanner>
        <Image
          src={SupabaseLogoWhite}
          alt="Supabase Logo"
          className="h-5 md:h-7 w-auto"
        />
        <Image
          src={NextLogoWhite}
          alt="Nextjs Logo"
          className="h-5 md:h-5 w-auto"
        />
        <div className="flex items-center text-lg md:text-3xl gap-2 font-semibold h-5 md:h-7">
          <Image
            src={TailwindLogo}
            alt="TailwindCSS Logo"
            className="h-5 md:h-7 w-auto"
          />
          tailwindcss
        </div>
        <div className="flex items-center text-base md:text-2xl gap-1 md:gap-2 font-semibold h-5 md:h-7">
          <Image
            src={ShadcnLogoWhite}
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
