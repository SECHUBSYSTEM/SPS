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
        <div className="space-y-2 flex text-[#777777] flex-col [font-family:'Comic_Sans_MS',sans-serif]">
          <h2 className="text-sm md:text-lg 2xl:text-xl text-black self-center">Welcome to Served Process Servers</h2>
          <h3 className="text-sm md:text-lg 2xl:text-xl text-black self-center">
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
          <p className="items-center text-center mt-4 text-sm md:text-lg 2xl:text-xl text-black">
            We serve you better!
          </p>
        </div>
      ),
    },
    {
      name: "About",
      content: (
        <div className="space-y-2 text-[#777777] flex flex-col [font-family:'Comic_Sans_MS',sans-serif]">
          <h2 className="text-base md:text-lg 2xl:text-xl self-center text-black mb-2">
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
          <p className="items-center text-center text-black mt-4 text-sm md:text-lg 2xl:text-xl">
            Served On Time!
          </p>
        </div>
      ),
    },
    {
      name: "Contact",
      content: (
        <div className="space-y-2 grid gap-6 grid-cols-2 text-[#777777]  [font-family:'Comic_Sans_MS',sans-serif]">
        <div className="flex flex-col">
           <h2 className="text-base md:text-lg self-center 2xl:text-xl mb-2 text-black">Contact Us</h2>
          <div className="">
            <div className="space-y-2">
              <p className="text-xs">
                <span className="font-bold pr-2.5">Mobile:</span> 0402 00 5522
              </p>
              <p className="text-xs">
                <span className="font-bold pr-4">Email:</span> Rod@served.net.au
              </p>
              <p className="text-xs">
                <span className="font-bold">Website:</span> www.served.net.au
              </p>
              <p className="text-xs flex items-center">
                <span className="font-bold pr-7">Post:</span>
                <br />
                PO Box 818
                <br />
                Tugun Qld 4224
              </p>
              <p className="items-center text-center text-black pt-4 mt-4 text-sm md:text-lg 2xl:text-xl">
                We Serve Better!
              </p>
            </div>
          
          </div>
          </div>
          <div className="space-y-2">
              <Input
                placeholder="Your Name"
                className="h-6 text-xs font-sans"
              />
              <Input
                placeholder="Your Email"
                className="h-6 text-xs font-sans"
              />
              <Textarea
                placeholder="Your Message"
                className="h-16 text-xs font-sans"
              />
              <Button
                variant="secondary"
                className="w-full h-6 text-xs bg-[#555555] text-white/60 hover:bg-[#555555] hover:text-white/90 [font-family:'Comic_Sans_MS',sans-serif]"
              >
                SEND MESSAGE
              </Button>
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
    <div className="fixed inset-0 flex flex-col justify-center items-center overflow-y-scroll overflow-x-hidden">
      <div
        className="absolute inset-0 bg-repeat bg-center"
        style={{
          backgroundImage: 'url("/bg-body.jpg")',
        }}
      />

      <div className="relative w-[650px] h-[450px] max-w-[95vw] max-h-[90vh]">
        {/* Stacked papers background */}
        <div
          className="absolute inset-0 bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("/papers.png")',
            backgroundSize: "100% 100%",
            filter: "drop-shadow(8px 28px 10px rgba(0, 0, 0, 0.8))",
          }}
        />

        {/* Navigation buttons with stacked paper effect */}
        <div className="absolute right-0 top-12 flex flex-col gap-[1/2] -mr-[1.05rem]">
          {[
            {
              bgImage: "/nav-home.png",
              activeImage: "/nav-home-active.png",
              index: 0,
            },
            {
              bgImage: "/nav-about.png",
              activeImage: "/nav-about-active.png",
              index: 1,
            },
            {
              bgImage: "/nav-work.png",
              activeImage: "/nav-work-active.png",
              index: 2,
            },
          ].map(({ bgImage, activeImage, index }) => (
            <div key={index} className="relative py-0">
              {/* Background paper image */}
              <div
                className="absolute inset-0 bg-no-repeat mt-4 bg-center"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  width: "50px",
                  height: "35px",
                  transform: "scale(1.08)",
                  filter: "drop-shadow(2px 4px 3px rgba(0, 0, 0, 0.3))",
                }}
              />

              {/* Active image overlay */}
              <motion.div
                className="absolute inset-0 bg-no-repeat mt-4 bg-center"
                style={{
                  backgroundImage: `url(${activeImage})`,
                  width: "50px",
                  height: "35px",
                  opacity: activeIndex === index ? 1 : 0,
                  transform: "scale(1.08)",
                }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 5 : 0,
                  scale: activeIndex === index ? 1.15 : 1.08,
                }}
                transition={{ duration: 0.2 }}
              />

              {/* Clickable area */}
              <motion.button
                className="relative z-20 w-[50px] h-[35px] mt-4 cursor-pointer"
                onClick={() => handlePageChange(index)}
                disabled={isAnimating}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </div>
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
                className="absolute border-0 z-20 outline-0 p-0 bg-transparent"
                style={{
                  backgroundImage: 'url("/bg-main.png")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  height: "380px",
                  width: "560px",
                  transform: "scale(1.07)",
                  transformOrigin: "center center",
                  margin: "35px 0 0 45px",
                }}
              >
                <div className="w-full mt-3 mb-2">
                  <div className="flex justify-center items-center">
                    <div className="w-[90%] pt-2">
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
                <div className="px-6 text-gray-700 overflow-y-auto max-h-[calc(100%-120px)]">
                  {page.content}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
