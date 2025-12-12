import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type logoProps = {
  label: string;
};

const INDIGO_FILL_CLASSES = [
  "fill-indigo-300 dark:fill-indigo-600",
  "fill-indigo-400 dark:fill-indigo-500",
  "fill-indigo-500 dark:fill-indigo-400",
  "fill-indigo-600 dark:fill-indigo-300",
  "fill-indigo-700 dark:fill-indigo-200",
];

const Logo = ({ label }: logoProps) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % INDIGO_FILL_CLASSES.length);
    }, 800); // smoother cycle
    return () => clearInterval(interval);
  }, []);

  const getFillClass = (offset: number) =>
    INDIGO_FILL_CLASSES[(step + offset) % INDIGO_FILL_CLASSES.length];

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
      <svg className="size-5" viewBox="15 15 20 30" xmlns="http://www.w3.org/2000/svg">
        <g>
          {[
            { x: 15, y: 15 },
            { x: 25, y: 25 },
            { x: 15, y: 35 },
          ].map((pos, i) => (
            <rect
              key={i}
              x={pos.x}
              y={pos.y}
              width="10"
              height="10"
              rx="2"
              className={`transition-colors duration-500 ${getFillClass(i * 2)}`}
            />
          ))}
        </g>
      </svg>

      <span className="text-2xl font-bold bg-linear-to-r from-blue-700 dark:from-blue-400 to-orange-400 dark:to-orange-300 bg-clip-text text-transparent">
        {label}
      </span>
    </motion.div>
  );
};

export default Logo;
