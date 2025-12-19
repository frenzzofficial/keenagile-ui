"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeEffect from "@/components/ui/custom/marquee";
import { techGiants } from "@/packages/data/data.branding";

const TrustedBrands = () => {
  return (
    <section className="pt-10 md:pt-15 pb-15 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-muted-foreground tracking-wider mb-6 uppercase">
            Trusted by Leading Brands
          </p>
        </motion.div>

        {/* Marquee Container with fade shadows */}
        <div className="relative">
          {/* Left fade shadow */}
          <div className="absolute start-0 top-0 w-20 h-full bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />

          {/* Right fade shadow */}
          <div className="absolute end-0 top-0 w-20 h-full bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee */}
          <MarqueeEffect pauseOnHover>
            {techGiants.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center gap-3 mx-8 whitespace-nowrap shrink-0 opacity-50 transition-all duration-300"
              >
                <Image
                  src={`/images/brands-logo/main-icon-logo/${company.logo}`}
                  alt={company.name}
                  width={256}
                  height={256}
                  className="block dark:hidden max-h-10"
                />
                <Image
                  src={`/images/brands-logo/inverse-logo/${company.logo}`}
                  alt={company.name}
                  width={256}
                  height={256}
                  className="hidden dark:block max-h-10"
                />
              </div>
            ))}
          </MarqueeEffect>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
