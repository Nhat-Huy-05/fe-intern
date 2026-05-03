"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center font-bold text-black text-sm">
            NH
          </div>
          <span className="font-semibold text-gray-900">Nhật Huy</span>
        </div>

        {/* Menu links */}
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-600 hover:text-amber-500 transition-colors font-medium">
                {link}
              </a>
            </li>
          ))}
          <li>
            <a href="/resume.pdf" target="_blank"
              className="text-sm text-gray-600 hover:text-amber-500 transition-colors font-medium">
              Resume
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a href="#contact"
          className="bg-gray-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300">
          Contact Me
        </a>

      </div>
    </nav>
  );
}