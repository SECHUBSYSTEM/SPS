"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Phone } from "lucide-react";

export default function CardNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);

  useEffect(() => {
    setPreviousIndex(activeIndex);
  }, [activeIndex]);

  const pages = [
    { name: "Home", icon: <Home className="w-8 h-8" /> },
    { name: "About", icon: <User className="w-8 h-8" /> },
    { name: "Contact", icon: <Phone className="w-8 h-8" /> },
  ];

  const handlePageChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPreviousIndex(activeIndex);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[url('/bg-body.jpg')] bg-no-repeat">
      <div className="mb-8 flex gap-6">
        {pages.map((page, index) => (
          <button
            key={page.name}
            onClick={() => handlePageChange(index)}
            disabled={isAnimating}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-lg
              transition-all duration-300
              ${
                activeIndex === index
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-white text-blue-500 hover:bg-blue-50"
              }
              ${isAnimating ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {page.icon}
            <span className="font-medium">{page.name}</span>
          </button>
        ))}
      </div>
      <div className="mx-auto w-[640px] h-[460px] relative bg-[url('/papers.png')] bg-no-repeat">
        <AnimatePresence initial={false}>
          {pages.map((page, index) => (
            <motion.div
              key={page.name}
              className="absolute inset-0 bg-white shadow-2xl p-12"
              style={{
                zIndex:
                  index === activeIndex ? 3 : index === previousIndex ? 2 : 1,
              }}
              initial={index === activeIndex ? { x: 0, y: 0 } : false}
              animate={{
                zIndex:
                  index === activeIndex ? 3 : index === previousIndex ? 2 : 1,
                x: index === activeIndex ? [0, -850, 0] : 0,
                y: index === activeIndex ? [0, -60, -40, -20, 0] : 0,
              }}
              transition={{
                duration: index === activeIndex ? 2 : 0,
                times: index === activeIndex ? [0, 0.5, 1] : [0],
                ease: "easeInOut",
                zIndex: { delay: index === activeIndex ? 0 : 0.5 },
              }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  {page.icon}
                  <h2 className="text-4xl font-bold">{page.name}</h2>
                </div>
                <div className="flex-grow">
                  <p className="text-xl">
                    This is the {page.name} page content. Add your content here.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
