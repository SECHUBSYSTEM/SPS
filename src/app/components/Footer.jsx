'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Twitter, Facebook, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a4314] to-[#2c5e1a] text-[#b2d2a4] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <p className="max-w-xs font-semibold">
              Empowering your legal journey with innovative solutions and expert
              guidance.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="hover:text-[#32cd30] transition-colors"
              >
                <Twitter />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-[#32cd30] transition-colors"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#32cd30] transition-colors"
              >
                <Linkedin />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="hover:text-[#638962] transition-colors"
              >
                <Youtube />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Pricing",
                "About us",
                "Features",
                "Help Center",
                "Contact us",
                "FAQs",
                "Careers",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href="#"
                    className="hover:text-[#32cd30] transition-colors flex items-center"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">
              Subscribe to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-r-none outline-0 border-0 bg-[#b2d2a4] text-[#1a4314] placeholder-[#2c5e1a] focus:ring-[#32cd30]"
                />
                <Button
                  type="submit"
                  className="rounded-l-none bg-[#32cd30] hover:bg-[#2c5e1a]"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-[#b2d2a4] text-center"
        >
          <p>
            &copy; {new Date().getFullYear()} Rightangle Law. All rights
            reserved. |{" "}
            <Link href="#" className="hover:text-[#32cd30]">
              Privacy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-[#32cd30]">
              Terms
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-[#32cd30]">
              Sitemap
            </Link>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
