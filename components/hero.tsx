import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 py-32 relative flex items-center justify-center h-[calc(100svh-8rem)]">
      <div className="text-center space-y-4 relative z-10">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-[#7551d1] dark:to-[#9641ff] bg-clip-text text-transparent">
            Next.js x Supabase
          </h1>
          <h2 className="text-xl md:text-4xl font-bold mt-4 bg-gradient-to-r from-foreground/80 to-foreground bg-clip-text text-transparent">
            Auth Template
          </h2>
        </div>

        <p className="text-base md:text-xl text-foreground max-w-2xl mx-auto px-6 text-balance">
          Open-source template for building modern web applications with Next.js
          and Supabase authentication.
        </p>

        <div className="flex gap-4 justify-center">
          <Button size="lg" className="px-8" asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
