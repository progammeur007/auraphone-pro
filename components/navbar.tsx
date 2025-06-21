"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses =
    "text-white hover:text-[#f7e7b6] transition duration-300";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex justify-between items-center
      ${
        isScrolled
          ? "bg-black/70 backdrop-blur-md shadow-md"
          : "bg-transparent"}`}  >

      <Link
        href="/loader"
        className="text-white text-xl font-extrabold tracking-widest hover:text-[#f7e7b6] transition">
        AuraPhone
      </Link>
      <div className="hidden md:flex space-x-6 text-sm md:text-base items-center">
        <Link href="/" className={navLinkClasses}>
          Home
        </Link>
        <Link href="/colors" className={navLinkClasses}>
          Color Selector
        </Link>
        <Link href="/#features" className={navLinkClasses}>
          Feature Highlights
        </Link>
        <Link
          href="/#contact"
          className="bg-yellow-400 hover:text-[#f7e7b6] text-black font-medium px-4 py-2 rounded-full transition"
        >
          Email Subscription
        </Link>
      </div>
      <button
        className="md:hidden text-yellow-400 text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col space-y-4 px-6 py-6 md:hidden shadow-lg z-40">
          <Link href="/" onClick={() => setMenuOpen(false)} className={navLinkClasses}>
            Home
          </Link>
          <Link href="/colors" onClick={() => setMenuOpen(false)} className={navLinkClasses}>
            Color Selector
          </Link>
          <Link href="/#features" onClick={() => setMenuOpen(false)} className={navLinkClasses}>
            Feature Highlights
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-yellow-400 hover:text-[#f7e7b6] text-black font-medium px-4 py-2 rounded-full transition">
            Email Subscription
          </Link>
        </div>
      )}
    </nav>
  );
}
