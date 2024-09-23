"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../public/logo-RAL.png";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Applications", href: "/applications" },
      { name: "Oppositions", href: "/oppositions" },
      { name: "Cease and Desist", href: "/cease" },
      { name: "Ongoing IP Strategy and Management", href: "/strategy" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Why Us",
    href: "#",
    submenu: [
      { name: "About Us", href: "/about" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsSticky(window.scrollY > navRef.current.offsetTop);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleMobileSubmenu = (name) =>
    setActiveSubmenu(activeSubmenu === name ? null : name);

  return (
    <nav
      ref={navRef}
      className={`bg-[#1a4314] text-[#b2d2a4] ${
        isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <Image
              alt="logo image"
              src={logo}
              width={100}
              height={100}
              className="w-[70px] h-auto md:w-[100px] md:h-auto"
            />
          </Link>
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-[#b2d2a4] hover:text-[#32cd30]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden z-30 md:flex space-x-20">
            {menuItems.map((item) => (
              <div key={item.name} className="relative cursor-pointer group">
                {item.submenu ? (
                  <>
                    <button className="text-[#b2d2a4] font-semibold hover:text-[#32cd30] flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-64 bg-[#2c5e1a] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-sm font-semibold hover:bg-[#1a4314] hover:text-[#32cd30]"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#b2d2a4] font-semibold hover:text-[#32cd30]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden z-30 bg-[#2c5e1a]"
          >
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-[#1a4314]">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="flex justify-between items-center w-full px-6 py-3 text-[#b2d2a4] font-semibold hover:bg-[#1a4314] hover:text-[#32cd30]"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeSubmenu === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-[#1a4314]"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-8 py-3 text-sm font-semibold text-[#b2d2a4] hover:bg-[#2c5e1a] hover:text-[#32cd30]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-3 text-[#b2d2a4] font-semibold hover:bg-[#1a4314] hover:text-[#32cd30]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
