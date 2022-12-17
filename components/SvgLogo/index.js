import React from "react";
import { motion } from "framer-motion";

export default function SvgLogo() {
  const svgVariants = {
    start: {
      opacity: 0,
      pathLength: 0,
    },
    finished: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6em"
        height="7em"
        color="#0E49B5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        viewBox="0 0 27 27"
      >
        <motion.path
          fill="currentColor"
          fill-opacity="0"
          d="M19 6.873a2 2 0 011 1.747v6.536a2 2 0 01-1.029 1.748l-6 3.833a2 2 0 01-1.942 0l-6-3.833A2 2 0 014 15.157V8.62a2 2 0 011.029-1.748l6-3.572a2.056 2.056 0 012 0l6 3.573H19z"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
        <motion.path
          fill="currentColor"
          fill-opacity="0"
          d="M10 15a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 00-1-1h-2a1 1 0 01-1-1V9a1 1 0 011-1h2a1 1 0 011 1"
          variants={svgVariants}
          initial="start"
          animate="finished"
        />
      </svg>
    </div>
  );
}
