"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/achievements", label: "Nasze osiągnięcia" },
    { href: "/#location", label: "Lokalizacja" },
    { href: "/#exams", label: "Egzaminy" },
    { href: "/offer", label: "Znajdź termin" },
    { href: "#footer", label: "Kontakt" },
  ];

  return (
    <div>
      <nav className="flex w-full h-20 border-b-2 p-2 border-gray-200 items-center justify-between fixed z-100 top-0 left-0 bg-white">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 text-2xl text-gray-800 font-bold"
        >
          <img src="/logoFullV2.svg" className="h-16" alt="MP Academy logo" />
          MP Academy
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex justify-between items-center">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="text-xl font-medium text-gray-800 border-r-brand border-r-2 px-3 last:border-none hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span
            className="block h-0.5 w-6 bg-gray-800"
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-gray-800"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-gray-800"
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-white shadow-lg -z-10 border-gray-200 flex flex-col items-center md:hidden"
            >
              {links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg w-full text-center py-3 border-b border-gray-100 hover:bg-gray-50"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <br />
      <br />
      <br />
    </div>
  );
}
