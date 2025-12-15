"use client";
import Link from "next/link";
import { cn } from "@/packages/utils/utils.shadcn";
import { Button } from "@/components/ui/shadcn/button";
import { motion, AnimatePresence } from "framer-motion";
import Lucid_Icon from "@/components/ui/helper/Lucid_Icon";
import { CustomBadge } from "@/components/ui/custom/badge";
import { CustomTitle } from "@/components/ui/custom/title";
import { CustomSubtitle } from "@/components/ui/custom/subtitle";
import { howItWorksSteps } from "@/packages/data/data.hero";

import { useState, useEffect, useRef, useCallback } from "react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const manuallyTriggered = useRef(false);
  const stepDuration = 5000;

  useEffect(() => {
    if (isPaused) return;

    // Defer state update to avoid synchronous setState during render
    const resetProgress = requestAnimationFrame(() => setProgress(0));

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (stepDuration / 50), 100));
    }, 50);

    const stepTimeout = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % howItWorksSteps.length);
      manuallyTriggered.current = false;
    }, stepDuration);

    return () => {
      cancelAnimationFrame(resetProgress);
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [activeStep, isPaused]);

  const handleStepClick = useCallback((index: number) => {
    setIsPaused(true);
    setActiveStep(index);
    manuallyTriggered.current = true;
    setTimeout(() => setIsPaused(false), 4000);
  }, []);

  return (
    <section className="py-24 border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge>Easy Setup</CustomBadge>
          <CustomTitle>How It Works</CustomTitle>
          <CustomSubtitle>
            Our streamlined process gets you up and running quickly, with powerful AI doing the
            heavy lifting.
          </CustomSubtitle>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12 max-w-6xl mx-auto"
        >
          {/* Step Navigation */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {howItWorksSteps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "flex flex-col items-center cursor-pointer transition-all duration-300 overflow-hidden"
                )}
                onClick={() => handleStepClick(index)}
              >
                <div className="size-12 bg-indigo-100/40 dark:bg-indigo-950/60 rounded-full flex items-center justify-center">
                  <Lucid_Icon iconName={step.icon} className="size-5 text-indigo-500" />
                </div>

                <h3
                  className={cn(
                    "p-5 pb-3 text-xl font-semibold mb-0 transition-colors duration-300",
                    index === activeStep ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.title}
                </h3>

                <div className="w-full h-0.5 bg-border/60">
                  <AnimatePresence>
                    {index === activeStep && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="h-0.5 w-full overflow-hidden"
                      >
                        <motion.div
                          className="h-0.5 bg-linear-to-r from-indigo-500 to-purple-400"
                          style={{ width: `${progress}%` }}
                          transition={{ duration: 0.05, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Step Image */}
          <div className="relative w-full rounded-xl overflow-hidden border border-border shadow-xs shadow-black/5 bg-background">
            <div className="max-h-[50vh] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={howItWorksSteps[activeStep].image}
                  src={howItWorksSteps[activeStep].image}
                  alt={howItWorksSteps[activeStep].title || "Step image"}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to get started? It takes less than 5 minutes.
          </p>
          <Button size="lg" asChild>
            <Link href="#cta">Start Your Journey</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
