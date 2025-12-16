"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/shadcn/button";
import { people } from "@/packages/data/data.hero";
import { WordRotate } from "@/components/ui/magic-ui/word-rotate";
import HeroVideoDialog from "@/components/ui/custom/hero-video-dialog";
import { AnimatedTooltip } from "@/components/ui/custom/animated-tooltip";

import { ArrowRight, Play, Gift, Star } from "lucide-react";
import { useMousePosition } from "@/packages/hooks/use-mouse";
import AnimatedBackground from "@/components/ui/backgrounds/animated-background";
import ParallxMovementonHoverEffect from "@/components/ui/parallax/parallx-onHover-effect";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  useState(() => setMounted(true));
  const rotatingWords = ["Web Apps", "Websites", "Solutions"];

  const [mainRef, mouse] = useMousePosition<HTMLDivElement>();

  return (
    <section
      className="relative lg:min-h-screen bg-linear-to-br from-gray-50 dark:from-zinc-950 via-indigo-50 dark:via-black to-indigo-50 dark:to-zinc-950 pt-25 pb-20 lg:pt-40 lg:pb-20 overflow-hidden group"
      ref={mainRef}
    >
      {/* / Animated linear background  */}
      <AnimatedBackground mouse={mouse} />
      {/* Parallax moving elements on hover */}
      <ParallxMovementonHoverEffect />

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-0.5 md:gap-1.25 justify-center text-3xl lg:text-7xl font-bold mb-4 lg:mb-8 leading-[1.2]"
          >
            <span className="bg-linear-to-r from-indigo-900 via-blue-900 to-indigo-900 dark:from-gray-50 dark:via-blue-300 dark:to-indigo-900 bg-clip-text text-transparent">
              Ship Amazing
            </span>
            <WordRotate
              words={rotatingWords}
              className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-[365px]"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-[600px] mx-auto leading-relaxed"
          >
            Create amazing apps effortlessly with our powerful platform. From idea to launch in just
            minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <Button size="lg" className="cursor-pointer hover:[&_svg]:translate-x-1 w-46">
              Get started for free
              <ArrowRight className="h-5 w-5 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer hover:[&_svg]:-translate-y-1 w-46"
              asChild
            >
              <Link href="#features">
                <Gift className="h-5 w-5 transition-transform opacity-60" />
                Explore Metronic
              </Link>
            </Button>
          </motion.div>

          {/* Loved by thousands badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2.5 mb-10"
          >
            <div className="flex gap-2.5">
              <div className="flex -space-x-2 me-2.5">
                <AnimatedTooltip items={people} />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 transition-transform opacity-60 text-yellow-500"
                  />
                ))}
              </div>
            </div>
            <div className="text-center text-muted-foreground text-sm font-medium">
              Trusted by thousands of enterprises
            </div>
          </motion.div>

          {/* Hero Video Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            {mounted && (
              <HeroVideoDialog
                trigger={
                  <div className="bg-indigo-600/10 dark:bg-indigo-300/10 backdrop-blur-md rounded-full p-4 shadow-lg">
                    <div className="bg-background rounded-full p-3 shadow-lg">
                      <Play className="size-6 text-indigo-600 dark:text-indigo-400 fill-indigo-600 dark:fill-indigo-400 ml-0.5" />
                    </div>
                  </div>
                }
                animationStyle="from-center"
                videoSrc=""
                thumbnailSrc={
                  resolvedTheme === "dark" ? "/images/icons/blank.png" : "/images/icons/blank.png"
                }
                thumbnailAlt="Product Demo"
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
