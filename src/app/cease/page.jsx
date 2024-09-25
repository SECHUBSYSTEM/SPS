"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Clipboard,
  Edit,
  Send,
  PhoneCall,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const CeaseAndDesistPage = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeCase, setActiveCase] = useState(null);
  const controls = useAnimation();

  const steps = [
    {
      id: 1,
      title: "Evaluation",
      description:
        "We assess the strength of your case and potential infringement.",
      icon: Clipboard,
    },
    {
      id: 2,
      title: "Drafting",
      description:
        "Our experts craft a compelling cease and desist letter tailored to your situation.",
      icon: Edit,
    },
    {
      id: 3,
      title: "Delivery",
      description:
        "We ensure proper delivery of the letter to the infringing party.",
      icon: Send,
    },
    {
      id: 4,
      title: "Follow-up",
      description:
        "We monitor the response and advise on next steps, including potential legal action.",
      icon: PhoneCall,
    },
  ];

  const benefits = [
    "Swift action against infringement",
    "Professionally crafted legal communications",
    "Increased chances of quick resolution",
    "Protection of your brand&apos;s reputation",
    "Demonstration of active rights enforcement",
    "Potential for avoiding costly litigation",
  ];

  const casesStudies = [
    {
      title: "E-commerce Brand Protection",
      description:
        "Successfully stopped multiple sellers from using our client&apos;s trademarked logo on counterfeit products.",
    },
    {
      title: "Domain Name Dispute",
      description:
        "Resolved a cybersquatting issue, securing the transfer of a confusingly similar domain to our client.",
    },
    {
      title: "Social Media Impersonation",
      description:
        "Swiftly removed several social media accounts impersonating our client&apos;s well-known brand.",
    },
  ];

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-100 via-[#e0e7e0] to-[#d0d7d0]">
      <header className="py-6 px-4 bg-[#1a4314] text-white">
        <h1 className="text-4xl font-bold text-center">
          Cease and Desist Services
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
            Protect Your Intellectual Property
          </h2>
          <p className="text-gray-700 text-lg">
            Our cease and desist services help you take swift action against
            trademark infringement, safeguarding your brand&apos;s integrity and
            market position.
          </p>
        </motion.section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05, rotate: 2 }}
              onHoverStart={() => setHoveredStep(step.id)}
              onHoverEnd={() => setHoveredStep(null)}
            >
              <step.icon className="w-12 h-12 text-[#2c5e1a] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#1a4314]">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              {hoveredStep === step.id && (
                <motion.div
                  className="mt-4 h-1 bg-[#2c5e1a]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
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
            Benefits of Our Cease and Desist Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ChevronRight className="w-6 h-6 text-[#2c5e1a] mr-2" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#2c5e1a]">
            Case Studies
          </h3>
          {casesStudies.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
              custom={index}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() =>
                  setActiveCase(activeCase === index ? null : index)
                }
              >
                <span className="font-semibold text-[#1a4314]">
                  {caseStudy.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#2c5e1a] transition-transform duration-300 ${
                    activeCase === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {activeCase === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-600"
                >
                  {caseStudy.description}
                </motion.p>
              )}
            </motion.div>
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
            Request Cease and Desist
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default CeaseAndDesistPage;
