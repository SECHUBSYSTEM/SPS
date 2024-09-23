"use client";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  User,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b2d2a4] pt-16 md:pt-4 to-[#32cd30] flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 z-0 rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl">
        <div className="md:flex">
          <div className="md:w-1/2 bg-[#1a4314] p-8 text-white">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="mb-4">
              Have questions about our trademarking process? Need advice on
              registration? Our team is ready to assist you every step of the
              way.
            </p>
            <p className="mb-8">
              We aim to respond within 24 hours, often much sooner. Your success
              is our priority!
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#32cd30] flex items-center justify-center hover:bg-[#2c5e1a] transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#2c5e1a] mb-1"
                >
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border text-black border-[#b2d2a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#32cd30]"
                    required
                  />
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2c5e1a]"
                    size={18}
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2c5e1a] mb-1"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border text-black border-[#b2d2a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#32cd30]"
                    required
                  />
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2c5e1a]"
                    size={18}
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#2c5e1a] mb-1"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-3 py-2 border text-black border-[#b2d2a4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#32cd30]"
                    required
                  ></textarea>
                  <MessageSquare
                    className="absolute left-3 top-3 text-[#2c5e1a]"
                    size={18}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#32cd30] text-white py-2 px-4 rounded-md hover:bg-[#2c5e1a] transition-colors duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
