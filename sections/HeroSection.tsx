"use client";
import React from "react";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center text-center overflow-hidden px-4 py-20">

      <motion.p
        className="text-sm md:text-lg font-medium text-white/70 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AuraPhone Pro
      </motion.p>

      <motion.h1
        className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 z-10
                   drop-shadow-[0_0_20px_rgba(255,215,100,0.4)] animate-pulse"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}  >
        Built for Light Intelligence.
      </motion.h1>
      <h2
        className="absolute text-[220px] md:text-[420px] font-extrabold text-yellow-100 pointer-events-none select-none z-0
                   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   drop-shadow-[0_0_25px_rgba(255,215,100,0.3)]"
        style={{
          textShadow: '0 0 20px rgba(255, 215, 100, 0.2),0 0 40px rgba(255, 215, 100, 0.3), 0 0 60px rgba(255, 215, 100, 0.25)'
        }}
      >
        PRO
      </h2>

      <div className="relative z-10 mt-12">
        <img
          src="/assets/aurphone-hero.jpg"
          alt="AuraPhone"
          className="w-[280px] md:w-[500px] opacity-85 drop-shadow-[0_0_40px_rgba(255,215,0,0.15)] transition-opacity duration-500"
        />
      </div>

      {/* Scroll hint */}
      <p className="mt-10 text-sm text-white/40 animate-bounce z-10">
        Scroll 
      </p>
    </section>
  );
}
