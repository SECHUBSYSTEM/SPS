"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Gavel,
  FileText,
  Users,
  ChevronDown,
  Search,
} from "lucide-react";
import Link from "next/link";

const OppositionsPage = () => {
  const [activeTab, setActiveTab] = useState("file");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  const tabs = [
    { id: "file", label: "File an Opposition", icon: Shield },
    { id: "defend", label: "Defend Against Opposition", icon: Gavel },
  ];

  const oppositionSteps = [
    {
      icon: FileText,
      title: "Initial Assessment",
      description:
        "We evaluate the strength of your case and the potential for success.",
    },
    {
      icon: Users,
      title: "Strategy Development",
      description:
        "Our team crafts a tailored strategy to effectively oppose the conflicting trademark.",
    },
    {
      icon: Gavel,
      title: "Filing and Proceedings",
      description:
        "We handle all necessary filings and represent you throughout the opposition proceedings.",
    },
    {
      icon: Shield,
      title: "Resolution and Appeals",
      description:
        "We work towards a favorable resolution and handle any necessary appeals.",
    },
  ];

  const faqs = [
    {
      question: "What is a trademark opposition?",
      answer:
        "A trademark opposition is a legal proceeding where a party objects to the registration of a trademark application filed by another party.",
    },
    {
      question: "How long do I have to file an opposition?",
      answer:
        "Typically, you have 30 days from the date of publication of the trademark to file an opposition. This period may be extended in some cases.",
    },
    {
      question: "What are the grounds for opposing a trademark?",
      answer:
        "Common grounds include likelihood of confusion with an existing mark, descriptiveness, genericness, and prior use of the mark.",
    },
    {
      question: "How long does the opposition process take?",
      answer:
        "The process can take several months to over a year, depending on the complexity of the case and whether settlement negotiations occur.",
    },
  ];

  useEffect(() => {
    setFilteredFAQs(
      faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 via-[#e0e7e0] to-[#d0d7d0]">
      <header className="py-6 px-4 bg-[#1a4314] text-white">
        <h1 className="text-4xl font-bold text-center">
          Trademark Oppositions
        </h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-[#2c5e1a]">
            Protect Your Rights
          </h2>
          <p className="text-gray-700 text-lg">
            Whether you&apos;re filing an opposition or defending against one,
            our experienced team is here to protect your trademark rights and
            preserve your brand&apos;s integrity.
          </p>
        </motion.section>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex-1 py-4 px-6 focus:outline-none transition-colors duration-300 flex items-center justify-center ${
                  activeTab === tab.id
                    ? "bg-[#e0e7e0] text-[#1a4314]"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6"
            >
              {activeTab === "file" ? (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#2c5e1a]">
                    Filing an Opposition
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We&apos;ll help you challenge trademark applications that
                    conflict with your rights, providing comprehensive legal
                    support throughout the opposition process.
                  </p>
                  <h4 className="text-lg font-semibold mb-2 text-[#1a4314]">
                    Our Opposition Process:
                  </h4>
                  <ul className="space-y-4">
                    {oppositionSteps.map((step, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <step.icon className="w-6 h-6 text-[#2c5e1a] mr-3 mt-1" />
                        <div>
                          <h5 className="font-semibold text-[#1a4314]">
                            {step.title}
                          </h5>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-[#2c5e1a]">
                    Defending Against Opposition
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our team will build a strong defense strategy to protect
                    your trademark application against oppositions, ensuring
                    your brand&apos;s integrity is maintained.
                  </p>
                  <h4 className="text-lg font-semibold mb-2 text-[#1a4314]">
                    Our Defense Strategy:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      • Thorough analysis of the opposition and its merits
                    </li>
                    <li>• Development of compelling counter-arguments</li>
                    <li>
                      • Collection and presentation of supporting evidence
                    </li>
                    <li>
                      • Negotiation for potential settlements when appropriate
                    </li>
                    <li>• Vigorous representation in opposition proceedings</li>
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
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
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full p-2 pl-10 border border-gray-300 text-gray-800 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer">
                  <span className="font-semibold text-[#1a4314]">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-5 h-5 text-[#2c5e1a] transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
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
            Discuss Your Case
          </Link>
        </motion.div>
      </main>
    </div>
  );
};

export default OppositionsPage;
