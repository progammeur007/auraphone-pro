"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ColorIntroSection() {
  const router = useRouter();
  return (
    <section className="w-full bg-black text-white py-28 px-4 flex flex-col items-center text-center relative overflow-hidden"> 
      <div className="absolute w-[500px] h-[500px] bg-yellow-400 blur-[120px] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

      <h2
        className="text-[80px] md:text-[140px] font-extrabold text-yellow-100 z-10 select-none pointer-events-none
                   drop-shadow-[0_0_40px_rgba(255,215,0,0.4)] animate-pulse"
        style={{
          textShadow: ` 0 0 20px rgba(255,215,0,0.25), 0 0 40px rgba(255,215,0,0.3),0 0 80px rgba(255,215,0,0.25)`,
        }}
      >
        COLORS
      </h2>

      <p className="mt-6 text-white/80 text-lg max-w-2xl z-10 leading-relaxed tracking-wide">
        Choose from <span className="text-white">Starlight Gold</span>, <span className="text-white">Space Black</span>, <span className="text-white">Deep Titanium</span>, and <span className="text-white">Ice Blue</span>.  
        Every color reflects AuraPhone's premium design.
      </p>
      <button
        onClick={() => router.push("/colors")}
        className="mt-10 z-10 px-6 py-3 rounded-full bg-white/90 hover:bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 shadow-md"
      >
        Choose Your Color 
      </button>
    </section>
  );
}
