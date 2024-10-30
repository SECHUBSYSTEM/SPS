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
        <div className="space-y-4">
          <h2 className="text-xl font-bold">
            Welcome to Served Process Servers
          </h2>
          <h3 className="text-lg">
            The Gold Coast&apos;s premier Process Serving company.
          </h3>
          <p className="text-sm">
            We are specialists in the field of process serving providing the
            most effective and efficient service on the Gold Coast.
          </p>
          <p className="text-sm">
            We are bound by the national privacy principles which ensures
            professionally prepared and delivered documents served on time.
          </p>
          <p className="text-sm">We are a fully Licenced Commercial Agency.</p>
          <p className="text-sm">
            We also hold a Private Investigator and Security Licence.
          </p>
          <p className="font-bold italic mt-4">We serve you better!</p>
        </div>
      ),
    },
    {
      name: "About",
      content: (
        <div className="space-y-3 text-sm">
          <h2 className="text-lg mb-4">
            Legal Support Services ~ Process Serving
          </h2>
          <p>
            We achieve prompt service of all legal documents for all sectors of
            the legal industry and general public.
          </p>
          <p>
            We have an Australia-wide network of licenced affiliate process
            servers to call upon for instructions outside the Gold Coast Region.
            We are dedicated to confidentiality and our licenced agents act in
            accordance with the law and all court rules. Our clients are kept
            fully informed on all matters on a regular basis.
          </p>
          <p>
            All documents are handled in the strictest of confidence. We pride
            ourselves on our professionalism and integrity.
          </p>
          <p className="font-bold italic mt-4">Served On Time!</p>
        </div>
      ),
    },
    {
      name: "Contact",
      content: (
        <div className="space-y-3 text-sm">
          <h2 className="text-lg mb-4">Contact Us</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p>
                <span className="font-bold">Mobile:</span> 0402 00 5522
              </p>
              <p>
                <span className="font-bold">Email:</span> Roy@served.net.au
              </p>
              <p>
                <span className="font-bold">Website:</span> www.served.net.au
              </p>
              <p>
                <span className="font-bold">Post:</span>
                <br />
                PO Box 818
                <br />
                Tugun Qld 4224
              </p>
              <p className="font-bold italic mt-4">We Serve Better!</p>
            </div>
            <div className="space-y-3">
              <Input placeholder="Your Name" className="h-8 text-sm" />
              <Input placeholder="Your Email" className="h-8 text-sm" />
              <Textarea placeholder="Your Message" className="h-24 text-sm" />
              <Button
                variant="secondary"
                className="w-full h-8 text-sm bg-gray-200"
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
      <div className="mx-auto w-[640px] h-[460px] relative">
        {/* Stacked papers background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("/papers.png")',
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Navigation buttons */}
        <div className="absolute right-0 top-0 flex flex-col gap-2 -mr-12 z-10">
          <button
            className="bg-white p-2 rounded shadow-md hover:bg-gray-50"
            onClick={() => handlePageChange(0)}
            disabled={isAnimating}
          >
            <Home size={20} />
          </button>
          <button
            className="bg-white p-2 rounded shadow-md hover:bg-gray-50"
            onClick={() => handlePageChange(1)}
            disabled={isAnimating}
          >
            <HelpCircle size={20} />
          </button>
          <button
            className="bg-white p-2 rounded shadow-md hover:bg-gray-50"
            onClick={() => handlePageChange(2)}
            disabled={isAnimating}
          >
            <AtSign size={20} />
          </button>
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
              <Card className="w-full h-auto p-4 shadow-lg bg-slate-100 relative">
                <div className="w-full mb-6 relative h-auto">
                  <div className="flex justify-center items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src={logo}
                        alt="Served Process Servers"
                        width={300}
                        height={64}
                        className="mx-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 text-[#777777]">{page.content}</div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
