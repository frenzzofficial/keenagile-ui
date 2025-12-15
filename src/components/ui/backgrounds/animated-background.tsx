import React from "react";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  mouse?: { x: number; y: number };
}

const AnimatedBackground = ({ mouse }: AnimatedBackgroundProps) => {
  if (!mouse) return null;

  return (
    <div className="hidden lg:block absolute inset-0 pointer-events-none">
      {/* Light Orb 1 */}
      <motion.div
        className="absolute left-[10%] top-[15%] w-[320px] h-80 dark:w-40 dark:h-40 rounded-full bg-sky-200 dark:bg-primary opacity-90 blur-[60px]"
        animate={{
          scale: [1, 1.13, 1],
          opacity: [0.85, 1, 0.85],
          x: mouse.x * 70 + 0,
          y: mouse.y * 40 + 0,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Core hotspot for orb 1 */}
      <motion.div
        className="absolute left-[18%] top-[23%] w-[90px] h-[90px] rounded-full bg-primary/20 dark:bg-primay opacity-95 blur-[10px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.92, 1, 0.92],
          x: mouse.x * 90 + 0,
          y: mouse.y * 60 + 0,
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Light Orb 2 */}
      <motion.div
        className="absolute right-[12%] top-[30%] w-[220px] h-[220px] rounded-full bg-indigo-300 dark:bg-indigo-950 opacity-80 blur-2xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.75, 0.95, 0.75],
          x: mouse.x * -60 + 0,
          y: mouse.y * 30 + 0,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Light Orb 3 */}
      <motion.div
        className="absolute left-[35%] bottom-[18%] w-[180px] h-[180px] rounded-full bg-blue-200 dark:bg-blue-600 opacity-80 blur-[30px]"
        animate={{
          scale: [1, 1.16, 1],
          opacity: [0.7, 0.9, 0.7],
          x: mouse.x * 40 + 0,
          y: mouse.y * -60 + 0,
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Light Orb 4 */}
      <motion.div
        className="absolute right-[22%] bottom-[8%] w-[150px] h-[150px] rounded-full bg-indigo-100 opacity-90 blur-[20px]"
        animate={{
          scale: [1, 1.11, 1],
          opacity: [0.8, 1, 0.8],
          x: mouse.x * -30 + 0,
          y: mouse.y * -40 + 0,
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-indigo-400/10 via-indigo-500/10 to-indigo-600/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-linear-to-tl from-indigo-400/10 via-indigo-500/10 to-indigo-600/10"
        animate={{
          opacity: [0.2, 0.5, 0.2],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
