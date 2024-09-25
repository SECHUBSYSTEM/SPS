"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Briefcase,
  RefreshCw,
  Search,
  Lightbulb,
  ChevronRight,
  PieChart,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";

const IPStrategyPage = () => {
  const [activeService, setActiveService] = useState(null);
  const [activeStat, setActiveStat] = useState(null);
  const controls = useAnimation();

  const services = [
    {
      id: 1,
      title: "Portfolio Management",
      icon: Briefcase,
      description:
        "We manage your entire IP portfolio, ensuring all your trademarks are properly maintained and protected.",
    },
    {
      id: 2,
      title: "Renewal Tracking",
      icon: RefreshCw,
      description:
        "Our system tracks and manages renewal deadlines, so you never risk losing your valuable trademarks.",
    },
    {
      id: 3,
      title: "Infringement Monitoring",
      icon: Search,
      description:
        "We actively monitor for potential infringements of your trademarks, allowing for swift action when necessary.",
    },
    {
      id: 4,
      title: "Strategic Consulting",
      icon: Lightbulb,
      description:
        "Our experts provide strategic advice to maximize the value and protection of your intellectual property assets.",
    },
  ];

  const strategies = [
    "Comprehensive IP audits",
    "Global trademark protection strategies",
    "IP valuation and monetization",
    "Licensing and technology transfer",
    "IP due diligence for mergers and acquisitions",
    "Custom IP management software solutions",
  ];

  const stats = [
    { icon: PieChart, value: "98%", label: "Client Retention Rate" },
    {
      icon: TrendingUp,
      value: "250+",
      label: "Successful IP Strategies Implemented",
    },
    { icon: Shield, value: "1000+", label: "Trademarks Protected" },
  ];

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-gray-100 via-[#e0e7e0] to-[#d0d7d0]">
      <header className="py-6 px-4 bg-[#1a4314] text-white">
        <h1 className="text-4xl font-bold text-center">
          IP Strategy and Management
        </h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#2c5e1a]">
            Comprehensive IP Management
          </h2>
          <p className="text-gray-700 text-lg">
            We offer ongoing support to manage and protect your intellectual
            property assets, ensuring long-term brand value and security in an
            ever-evolving market landscape.
          </p>
        </motion.section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer ${
                activeService === service.id ? "ring-2 ring-[#2c5e1a]" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveService(service.id)}
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <service.icon className="w-12 h-12 text-[#2c5e1a] mb-4" />
              <h3 className="text-xl font-semibold text-[#1a4314]">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {activeService ? (
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-[#2c5e1a]">
                {services.find((s) => s.id === activeService).title}
              </h3>
              <p className="text-gray-700 text-lg">
                {services.find((s) => s.id === activeService).description}
              </p>
            </div>
          ) : (
            <p className="text-gray-700 text-center text-lg">
              Select a service to learn more
            </p>
          )}
        </motion.div>
        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#2c5e1a]">
            Our IP Strategy Offerings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategies.map((strategy, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ChevronRight className="w-6 h-6 text-[#2c5e1a] mr-2" />
                <span className="text-gray-700">{strategy}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#2c5e1a] text-center">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setActiveStat(index)}
                onHoverEnd={() => setActiveStat(null)}
              >
                <stat.icon className="w-12 h-12 text-[#2c5e1a] mx-auto mb-4" />
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: activeStat === index ? 1.1 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-3xl font-bold text-[#1a4314]">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#2c5e1a] text-white font-bold py-3 px-8 rounded-full hover:bg-[#1a4314] transition-colors duration-300 text-lg"
          >
            Discuss Your IP Strategy
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default IPStrategyPage;
