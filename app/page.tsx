"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/sections/HeroSection";
import ColorIntroSection from "@/sections/ColorIntroSection";
import EmailSubscribe from "@/components/EmailSubscribe";
import FatureHighlights from "@/sections/FeatureHighlights";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // ⏱ 3 seconds loader

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-black text-white relative overflow-hidden">
        <h1
          className="text-[40px] md:text-[80px] font-extrabold text-[#f7e7b6] animate-pulse"
          style={{
            textShadow: `
              0 0 10px rgba(247,231,182,0.2),
              0 0 20px rgba(247,231,182,0.3),
              0 0 40px rgba(247,231,182,0.4)
            `,
          }}
        >
          AuraPhone
        </h1>
        <div className="absolute w-[300px] h-[300px] bg-yellow-300 blur-[100px] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
      </div>
    );
  }

  return (
    <main>
      <HeroSection />
      <ColorIntroSection />
      <FatureHighlights/>
      <EmailSubscribe />
    </main>
  );
}

