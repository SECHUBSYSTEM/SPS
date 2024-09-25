"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DollarSign, Zap, Globe, CheckSquare } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const features = [
  {
    title: "Affordable Fees",
    description:
      "Forget traditional law firms that charge over $2,000. Our transparent pricing starts at $399.",
    icon: DollarSign,
  },
  {
    title: "Streamlined Process",
    description:
      "A single order form instead of hours of back and forth — trademarking without compromise.",
    icon: Zap,
  },
  {
    title: "Global IP Coverage",
    description:
      "We can help you get a trademark in any jurisdiction, contact us for a custom quotation.",
    icon: Globe,
  },
  {
    title: "Free TM Assessment",
    description:
      "Send us your brand and we will check several basic trademark criteria for eligibility.",
    icon: CheckSquare,
  },
];
//for the slides
const images = ["/slide5.jpg", "/slide6.jpg", "/slide7.jpg"];

const heroContent = [
  {
    title: "You run your business.",
    subtitle: "We'll handle your legal affairs.",
    cta: "Free Assessment",
  },
  {
    title: "Protect your brand.",
    subtitle: "Secure your future success.",
    cta: "Get Started",
  },
  {
    title: "Innovate with confidence.",
    subtitle: "We've got your IP covered.",
    cta: "Learn More",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <main className="px-2 lg:px-0 max-w-[1550px] mx-auto">
        <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center text-left justify-center text-white bg-black bg-opacity-50 p-4">
            <AnimatePresence>
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1 }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-bold mb-2 sm:mb-4">
                  {heroContent[currentImage].title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl xl:text-3xl mb-4 sm:mb-6 md:mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  {heroContent[currentImage].subtitle}
                </p>
                <Link href="/contact" className="cursor-pointer">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="sm:text-base md:text-lg md:py-5 md:px-4"
                  >
                    {heroContent[currentImage].cta}
                  </Button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        <section className="min-h-screen bg-[#b2d2a4] flex items-center justify-center py-12 px-4">
          <div className="max-w-6xl w-full space-y-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#1a4314]">
              Bulletproof your brand
            </h1>
            <p className="text-center pb-4 text-[#2c5e1a] text-lg max-w-3xl mx-auto">
              Brand protection is essential for any business, big or small. We
              differentiate your brand in a cost-effective and transparent way.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Card 1 */}
              <Card className="bg-white hover:border-[#32cd30] hover:border-2 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-102 flex flex-col p-6">
                <CardHeader>
                  <CardTitle className="text-[#1a4314] text-2xl">
                    Brand Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center">
                  <p className="text-3xl font-bold text-[#2c5e1a]">
                    from $20
                    <span className="text-base font-normal">/month</span>
                  </p>
                  <p className="text-sm uppercase text-[#32cd30] mt-3 font-semibold">
                    STOP COPYCATS
                  </p>
                  <p className="mt-6 text-[#2c5e1a] text-lg">
                    Safeguard your brand with state of the art data intelligence
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center mt-6">
                  <Link href="#">
                    <Button
                      variant="outline"
                      className="w-auto px-8 py-3 rounded-full border-2 border-[#32cd30] text-[#32cd30] hover:bg-[#32cd30] hover:text-white text-lg"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              {/* Card 2 */}
              <Card className="bg-white border-[#32cd30] text-center border-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-102 flex flex-col p-6">
                <CardHeader>
                  <CardTitle className="text-[#1a4314] text-2xl">
                    Trademark Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center">
                  <p className="text-3xl font-bold text-[#2c5e1a]">from $600</p>
                  <p className="text-sm uppercase text-[#32cd30] mt-3 font-semibold">
                    REGISTRATION GUARANTEE
                  </p>
                  <p className="mt-6 text-[#2c5e1a] text-lg">
                    The easiest and safest way to get your trademark registered
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center mt-6">
                  <Link href="#">
                    <Button className="w-auto px-8 py-3 rounded-full text-white bg-[#32cd30] border-2 border-transparent hover:text-[#32cd30] hover:bg-transparent hover:border-[#32cd30] text-lg">
                      See Pricing
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              {/* Card 3 */}
              <Card className="bg-white hover:border-[#32cd30] hover:border-2 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-102 flex flex-col p-6">
                <CardHeader>
                  <CardTitle className="text-[#1a4314] text-2xl">
                    IP Support Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center">
                  <p className="text-3xl font-bold text-[#2c5e1a]">from $150</p>
                  <p className="text-sm uppercase text-[#32cd30] mt-3 font-semibold">
                    GET UNSTUCK
                  </p>
                  <p className="mt-6 text-[#2c5e1a] text-lg">
                    Overcome trademark roadblocks with personalized care
                  </p>
                </CardContent>
                <CardFooter className="flex justify-center mt-6">
                  <Link href="#">
                    <Button
                      variant="outline"
                      className="w-auto px-8 py-3 rounded-full border-2 border-[#32cd30] text-[#32cd30] hover:bg-[#32cd30] hover:text-white text-lg"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-gradient-to-br from-[#b2d2a4] to-[#2c5e1a] flex items-center justify-center p-8">
          <div className="max-w-5xl w-full space-y-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-2xl md:text-4xl font-bold text-[#2c5e1a] mb-4">
                Start your brand with confidence
              </h1>
              <p className="text-[#2c5e1a] font-medium max-w-2xl mx-auto">
                Our company has a wealth of experience and efficient processes,
                providing you with personalized support every step of the way
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#32cd30]"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-[#32cd30] p-2 rounded-full mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-[#1a4314]">
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-[#2c5e1a]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
