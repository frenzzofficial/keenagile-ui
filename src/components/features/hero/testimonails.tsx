"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "./testimonial-card";
import Marquee from "@/components/ui/custom/marquee";
import { CustomBadge } from "@/components/ui/custom/badge";
import { CustomTitle } from "@/components/ui/custom/title";
import { testimonials } from "@/packages/data/data.hero";
import { CustomSubtitle } from "@/components/ui/custom/subtitle";

const Testimonials = () => {
  const [firstColumn, secondColumn] = useMemo(() => {
    const mid = Math.ceil(testimonials.length / 2);
    return [testimonials.slice(0, mid), testimonials.slice(mid)];
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>Testimonials</CustomBadge>
          <CustomTitle>Loved by Thousands</CustomTitle>
          <CustomSubtitle>
            Discover why users love Metronic and join today to experience its transformative power
            for your business.
          </CustomSubtitle>
        </motion.div>
      </div>

      <div className="w-full mx-auto px-6">
        <motion.div
          className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1.5 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Marquee pauseOnHover className="[--duration:40s] grow">
            {firstColumn.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] grow">
            {secondColumn.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 start-0 w-1/12 bg-linear-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 end-0 w-1/12 bg-linear-to-l from-background" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
