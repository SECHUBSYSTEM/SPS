"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Search,
  FileText,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const Applications = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }));
  }, [controls]);

  const services = [
    {
      icon: Search,
      title: "Comprehensive Search",
      description:
        "We conduct thorough searches to ensure your trademark is unique and registrable.",
    },
    {
      icon: FileText,
      title: "Application Preparation",
      description:
        "Our attorneys meticulously prepare your application to maximize chances of approval.",
    },
    {
      icon: CheckCircle,
      title: "Office Action Responses",
      description:
        "We handle any objections or office actions from the trademark office with expert responses.",
    },
    {
      icon: AlertTriangle,
      title: "Conflict Resolution",
      description:
        "If conflicts arise, we negotiate and resolve issues to protect your trademark rights.",
    },
  ];

  const faqItems = [
    {
      question: "How long does the trademark application process take?",
      answer:
        "The process typically takes 6-12 months, depending on various factors such as the complexity of the application and potential office actions.",
    },
    {
      question: "What happens if my application is rejected?",
      answer:
        "If your application is rejected, we&apos;ll analyze the reasons for rejection and develop a strategy to respond. This may involve filing a response to an office action or considering an appeal.",
    },
    {
      question: "Can I use my trademark before it&apos;s registered?",
      answer:
        "Yes, you can use the ™ symbol with your mark before registration. However, you can only use the ® symbol once your trademark is officially registered.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-[#e0e7e0] to-[#d0d7d0]">
      <header className="py-6 px-4 bg-[#1a4314] text-white">
        <h1 className="text-4xl font-bold text-center">
          Trademark Applications
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
            Protect Your Brand Identity
          </h2>
          <p className="text-gray-700 text-lg">
            Our expert team guides you through the complex process of trademark
            applications, ensuring your brand receives the protection it
            deserves in today&apos;s competitive market.
          </p>
        </motion.section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              custom={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <service.icon className="w-12 h-12 text-[#2c5e1a] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#1a4314]">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#2c5e1a]">
            Frequently Asked Questions
          </h3>
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() =>
                  setActiveAccordion(activeAccordion === index ? null : index)
                }
              >
                <span className="font-semibold text-[#1a4314]">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2c5e1a] transition-transform duration-300 ${
                    activeAccordion === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {activeAccordion === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {item.answer}
                </motion.p>
              )}
            </div>
          ))}
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
            Start Your Application
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default Applications;
