"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Users, Shield, Zap } from "lucide-react";
import Link from "next/link";

const colors = {
  limeGreen: "#32cd30",
  green: "#2c5e1a",
  forestGreen: "#1a4314",
  seafoamGreen: "#b2d2a4",
};

const RotatingGlobe = () => (
  <motion.div
    className="w-64 h-64 rounded-full bg-gradient-to-r from-[#32cd30] to-[#2c5e1a]"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    {/* Globe details */}
    <svg className="w-full h-full" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke={colors.seafoamGreen}
        strokeWidth="0.5"
      />
      <path
        d="M50 10 Q 90 50 50 90"
        fill="none"
        stroke={colors.seafoamGreen}
        strokeWidth="0.5"
      />
      <path
        d="M50 10 Q 10 50 50 90"
        fill="none"
        stroke={colors.seafoamGreen}
        strokeWidth="0.5"
      />
      <path d="M10 50 h80" stroke={colors.seafoamGreen} strokeWidth="0.5" />
      <path d="M50 10 v80" stroke={colors.seafoamGreen} strokeWidth="0.5" />
    </svg>
  </motion.div>
);

const InfoCard = ({ icon: Icon, title, content }) => (
  <motion.div
    className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon size={32} className="text-[#32cd30] mb-2" />
    <h3 className="text-[#b2d2a4] font-bold mb-2">{title}</h3>
    <p className="text-white text-sm">{content}</p>
  </motion.div>
);

const StatCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < value) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 2000 / value);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-center">
      <motion.div
        className="text-4xl font-bold text-[#32cd30]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {count}
      </motion.div>
      <div className="text-[#b2d2a4]">{label}</div>
    </div>
  );
};

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a4314] to-[#2c5e1a] text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 text-[#32cd30]">Who are we?</h1>

      <div className="relative mb-12">
        <RotatingGlobe />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          RIGHTANGLE{" "}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl w-full mb-12">
        <InfoCard
          icon={Globe}
          title="Global Reach"
          content="Serving clients across the globe with localized expertise"
        />
        <InfoCard
          icon={Users}
          title="Expert Team"
          content="Licensed attorneys and professionals working remotely"
        />
        <InfoCard
          icon={Shield}
          title="Reliable Protection"
          content="Comprehensive trademark services to safeguard your brand"
        />
        <InfoCard
          icon={Zap}
          title="Affordable Solutions"
          content="Cost-effective packages for businesses of all sizes"
        />
      </div>

      <div className="flex justify-around w-full max-w-2xl mb-12">
        <StatCounter value={11000} label="Trademark Applications" />
        <StatCounter value={99} label="Monitoring Accuracy %" />
        <StatCounter value={100} label="Registration Guarantee %" />
      </div>
      <Link href="/contact">
        <motion.button
          className="bg-[#32cd30] text-white px-6 py-3 rounded-full font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </Link>
    </div>
  );
}
