"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await response.json();
        setStatus(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
      console.error('Contact form submission error:', error);
    }
  };

  return (
    <div className="space-y-2 grid gap-6 grid-cols-2 text-[#777777] [font-family:'Comic_Sans_MS',sans-serif]">
      <div className="flex flex-col">
        <h2 className="text-base md:text-lg self-center 2xl:text-xl mb-2 text-black">Contact Us</h2>
        <div className="space-y-2">
          <p className="text-sm">
            <span className="font-bold pr-2.5">Mobile:</span> 0402 00 5522
          </p>
          <p className="text-sm">
            <span className="font-bold pr-4">Email:</span> Rod@served.net.au
          </p>
          <p className="text-sm">
            <span className="font-bold">Website:</span> www.served.net.au
          </p>
          <p className="text-sm flex items-center">
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
      
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-6 text-sm font-sans"
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-6 text-sm font-sans"
          required
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-16 text-sm font-sans"
          required
        />
        <Button
          type="submit"
          variant="secondary"
          className="w-full h-6 text-sm bg-[#555555] text-white/60 hover:bg-[#555555] hover:text-white/90 [font-family:'Comic_Sans_MS',sans-serif]"
        >
          SEND MESSAGE
        </Button>
        {status && (
          <p className="text-center text-sm mt-2">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}