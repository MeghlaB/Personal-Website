"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

const customCss = `
    /* This is the key to the seamless animation.
      The @property rule tells the browser that '--angle' is a custom property
      of type <angle>. This allows the browser to smoothly interpolate it
      during animations, preventing the "jump" at the end of the loop.
    */
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }

    /* The keyframe animation simply transitions the --angle property
      from its start (0deg) to its end (360deg).
    */
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

function MenuBar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "#home",
      gradient:
        "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    },
    {
      label: "About",
      href: "#about",
      gradient:
        "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    },
    {
      label: "Skills",
      href: "#skills",
      gradient:
        "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    },
    {
      label: "Contact",
      href: "#contact",
      gradient:
        "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    },
  ];

  return (
    <div className="pt-5 pb-5">
      <motion.nav
        className="w-full max-w-2xl mx-auto  rounded-2xl 
        bg-white/60 dark:bg-black/60 backdrop-blur-lg 
        border border-gray-200/80 dark:border-gray-800/80 
        shadow-lg dark:shadow-gray-900/20 relative overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        {/* glowing background */}
        <motion.div
          className="absolute -inset-2 rounded-3xl z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(239,68,68,0.1) 100%)",
          }}
          initial="initial"
          animate="hover"
        />

        {/* Navbar content */}
        <div className="flex items-center justify-between">
          {/* Logo */}
            <img src="/src/assets/logo.png" className="w-15 h-15"></img>
          {/* <div className="text-2xl font-bold text-blue-400 dark:text-pink-400">
            Meghla<span className="text-pink-500 dark:text-blue-400">.</span>
          </div> */}

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 sm:gap-6 relative z-10">
            {menuItems.map((item) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* glow effect */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                    variants={glowVariants}
                    style={{ background: item.gradient, opacity: 0 }}
                  />

                  {/* front side */}
                  <motion.a
                    href={item.href}
                    className="px-4 py-2 rounded-xl text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-medium"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom",
                    }}
                  >
                    {item.label}
                  </motion.a>

                  {/* back side */}
                  <motion.a
                    href={item.href}
                    className="px-4 py-2 rounded-xl absolute inset-0 z-10 text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-medium"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      transform: "rotateX(90deg)",
                    }}
                  >
                    {item.label}
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}

            {/* Resume Button */}
            <li>
              <div className="flex items-center justify-center font-sans">
                <style>{customCss}</style>
                <button className="relative inline-flex items-center justify-center p-[1.5px] bg-gray-300 dark:bg-black rounded-full overflow-hidden group">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "conic-gradient(from var(--angle), transparent 25%, #06b6d4, transparent 50%)",
                      animation: "shimmer-spin 2.5s linear infinite",
                    }}
                  />
                  <span className="relative z-10 inline-flex items-center justify-center w-full h-full px-8 py-3 text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-300">
                    Resume
                  </span>
                </button>
              </div>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl font-bold"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-black/90 dark:bg-white/10 text-white rounded-xl p-4 space-y-3 flex flex-col items-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-blue-400 dark:hover:text-pink-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition">
              Resume
            </button>
          </div>
        )}
      </motion.nav>
    </div>
  );
}

export default MenuBar;
