import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { Code2, PackageOpen, ShieldCheck, Github, Badge } from "lucide-react";
import Badges from "@/components/badges";
import Hero from "@/components/hero";
import CallToAction from "@/components/sections/call-to-action";

const features = [
  {
    title: "Authentication Ready",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    description:
      "Built-in Supabase authentication with email/password, OAuth, and magic links.",
  },
  {
    title: "Modern Stack",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    description:
      "Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.",
  },
  {
    title: "Open Source",
    icon: <PackageOpen className="h-6 w-6 text-primary" />,
    description: "MIT licensed, fully customizable, and community-driven.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#353638_1px,transparent_1px)] dark:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-25% to-transparent/30"></div>
      </div>
      <Hero />
      <Badges />
      <section className="container max-w-7xl mx-auto px-6 py-6 md:py-20">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose This Template?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to build secure, scalable web applications
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative mx-auto w-full h-full"
            >
              <div className="absolute h-full -inset-0.5 rounded bg-[#7551d1] opacity-20 blur-lg transition delay-100 duration-1000 group-hover:opacity-70 group-hover:duration-300 dark:bg-[#9641ff]" />
              <div className="relative h-full rounded-lg bg-black/80 leading-none text-white dark:bg-white/80 dark:text-black">
                <Card className="group h-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-base md:text-xl leading-tight">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CallToAction />

      {/* <section className="container max-w-7xl mx-auto px-4 py-6 md:py-20 animate-fade-in">
        <div className="relative bg-background rounded-3xl p-px overflow-hidden shadow">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9641ff70] via-[#a798b970] to-[#7551d170]"></div>
          <div className="relative bg-background rounded-3xl p-4 py-8 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-balance">
              Minimal Effort, Optimal Solution
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base text-balance">
              Like it so far? Check out our GitHub page for the complete
              template!
            </p>
            <Button
              size="lg"
              className="rounded-lg px-8 gap-2 shadow-lg hover:shadow-primary/20 transition-shadow"
              asChild
            >
              <Link
                href="https://github.com/yourusername/nextsupabase"
                target="_blank"
              >
                <GithubLogo />
                Explore on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
