"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, HelpCircle, AtSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "../../public/bg-header.png";

export default function CardNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [previousIndex, setPreviousIndex] = useState(0);

  useEffect(() => {
    setPreviousIndex(activeIndex);
  }, [activeIndex]);

  const pages = [
    {
      name: "Home",
      content: (
        <div className="space-y-2">
          <h2 className="text-base font-bold">
            Welcome to Served Process Servers
          </h2>
          <h3 className="text-sm">
            The Gold Coast&apos;s premier Process Serving company.
          </h3>
          <p className="text-xs">
            We are specialists in the field of process serving providing the
            most effective and efficient service on the Gold Coast.
          </p>
          <p className="text-xs">
            We are bound by the national privacy principles which ensures
            professionally prepared and delivered documents served on time.
          </p>
          <p className="text-xs">We are a fully Licenced Commercial Agency.</p>
          <p className="text-xs">
            We also hold a Private Investigator and Security Licence.
          </p>
          <p className="font-bold italic mt-4 text-sm">We serve you better!</p>
        </div>
      ),
    },
    {
      name: "About",
      content: (
        <div className="space-y-2">
          <h2 className="text-base mb-2">
            Legal Support Services ~ Process Serving
          </h2>
          <p className="text-xs">
            We achieve prompt service of all legal documents for all sectors of
            the legal industry and general public.
          </p>
          <p className="text-xs">
            We have an Australia-wide network of licenced affiliate process
            servers to call upon for instructions outside the Gold Coast Region.
            We are dedicated to confidentiality and our licenced agents act in
            accordance with the law and all court rules. Our clients are kept
            fully informed on all matters on a regular basis.
          </p>
          <p className="text-xs">
            All documents are handled in the strictest of confidence. We pride
            ourselves on our professionalism and integrity.
          </p>
          <p className="font-bold italic mt-4 text-sm">Served On Time!</p>
        </div>
      ),
    },
    {
      name: "Contact",
      content: (
        <div className="space-y-2">
          <h2 className="text-base mb-2">Contact Us</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-xs">
                <span className="font-bold">Mobile:</span> 0402 00 5522
              </p>
              <p className="text-xs">
                <span className="font-bold">Email:</span> Roy@served.net.au
              </p>
              <p className="text-xs">
                <span className="font-bold">Website:</span> www.served.net.au
              </p>
              <p className="text-xs">
                <span className="font-bold">Post:</span>
                <br />
                PO Box 818
                <br />
                Tugun Qld 4224
              </p>
              <p className="font-bold italic mt-4 text-sm">We Serve Better!</p>
            </div>
            <div className="space-y-2">
              <Input placeholder="Your Name" className="h-6 text-xs" />
              <Input placeholder="Your Email" className="h-6 text-xs" />
              <Textarea placeholder="Your Message" className="h-16 text-xs" />
              <Button
                variant="secondary"
                className="w-full h-6 text-xs bg-gray-300 hover:bg-gray-400"
              >
                SEND MESSAGE
              </Button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handlePageChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPreviousIndex(activeIndex);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen"
      style={{
        backgroundImage: 'url("/bg-body.jpg")',
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-[580px] h-[400px] relative">
        {/* Stacked papers background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/papers.png")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Navigation buttons */}
        <div className="absolute right-0 top-8 flex flex-col gap-2 -mr-14 z-10">
          {[
            { icon: Home, index: 0 },
            { icon: HelpCircle, index: 1 },
            { icon: AtSign, index: 2 },
          ].map(({ icon: Icon, index }) => (
            <motion.button
              key={index}
              className="p-2 rounded shadow-md transition-colors duration-200"
              onClick={() => handlePageChange(index)}
              disabled={isAnimating}
              whileHover={{ scale: activeIndex === index ? 1.2 : 1.1 }}
              animate={{ scale: activeIndex === index ? 1.15 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon
                className={`rounded shadow-2xl transition-colors duration-200 ${
                  activeIndex === index
                    ? "text-[#8B0000] bg-transparent"
                    : "bg-transparent text-white"
                }`}
                size={20}
              />
            </motion.button>
          ))}
        </div>
        <AnimatePresence initial={false}>
          {pages.map((page, index) => (
            <motion.div
              key={page.name}
              className="absolute inset-0"
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
              <Card
                className="w-full h-full border-0 outline-0 p-0 bg-transparent relative"
                style={{
                  backgroundImage: 'url("/bg-main.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  height: "360px",
                  width: "520px",
                  margin: "20px 0 0 30px",
                }}
              >
                <div className="w-full mt-3 mb-2">
                  <div className="flex justify-center items-center">
                    <div className="w-[85%]">
                      <Image
                        src={logo}
                        alt="Served Process Servers"
                        width={800}
                        height={100}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 text-gray-700">{page.content}</div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
