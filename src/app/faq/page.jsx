"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question:
      "Where are your attorneys licensed and what jurisdictions do you cover?",
    answer:
      "Our attorneys are licensed in multiple jurisdictions across the United States. Please contact us for specific coverage information.",
  },
  {
    question:
      "How long does this all take? Am I unprotected until the application process is finished?",
    answer:
      "The process typically takes 6-12 months. You have some common law protections as soon as you start using your mark in commerce.",
  },
  {
    question: "When can I use the TM and ® symbols?",
    answer:
      "You can use ™ as soon as you start using your mark. The ® symbol can only be used after your mark is officially registered.",
  },
  {
    question: "Can you help me register with Amazon Brand Registry?",
    answer:
      "Yes, we can assist you with the Amazon Brand Registry process once your trademark is registered.",
  },
  {
    question:
      "I found a trademark similar to mine, do you think I can still register it?",
    answer:
      "It depends on various factors. We'd need to conduct a thorough analysis to determine the likelihood of success.",
  },
  {
    question:
      "Why are you much more affordable than other trademark attorney firms?",
    answer:
      "We leverage technology to streamline our processes, allowing us to offer competitive rates without compromising quality.",
  },
  {
    question: "Which trademark package should I pick?",
    answer:
      "The best package depends on your specific needs. We offer a free consultation to help you choose the right option.",
  },
  {
    question:
      "I've done my own search, is the basic package good enough for me?",
    answer:
      "While a basic search is a good start, we recommend a comprehensive search to ensure the best protection for your mark.",
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a4314] via-[#2c5e1a] to-[#32cd30] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-[#b2d2a4] drop-shadow-lg">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-[#b2d2a4] mb-12 max-w-2xl mx-auto">
          Below are some questions that we get asked a lot. If you have any
          questions about trademarks that aren&apos;t answered in this page,
          please feel free to reach out to us. We&apos;re always happy to help!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#b2d2a4] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="font-semibold text-[#1a4314]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#1a4314] transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-[#2c5e1a]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#32cd30] text-[#fffff] hover:text-[#1a4314] font-bold py-3 px-8 rounded-full hover:bg-[#b2d2a4] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Still have questions? Contact us!
          </Link>
        </div>
      </div>
    </div>
  );
}
