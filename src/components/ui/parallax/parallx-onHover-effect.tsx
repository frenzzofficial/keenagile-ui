"use client";
import { motion } from "framer-motion";

const ParallxMovementonHoverEffect = () => {
  return (
    <>
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-linear-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-linear-to-br dark:from-indigo-600/20 dark:to-indigo-400/20 rounded-full blur-xl"
        whileHover={{ x: 30, y: -20, scale: 1.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-linear-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-linear-to-br dark:from-indigo-600/20 dark:to-indigo-400/20 rounded-full blur-xl"
        whileHover={{ x: -25, y: 15, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-20 h-20 bg-linear-to-br from-indigo-400/20 to-indigo-600/20 dark:bg-linear-to-br dark:from-indigo-600/20 dark:to-indigo-400/20 rounded-full blur-xl"
        whileHover={{ x: 20, y: -30, scale: 1.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </>
  );
};

export default ParallxMovementonHoverEffect;
