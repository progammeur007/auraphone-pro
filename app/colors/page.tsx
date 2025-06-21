"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const colorOptions = [
  {
    name: "Starlight Gold",
    colorCode: "#FFD700",
    image: "/assets/colors/gold.jpg",
  },
  {
    name: "Space Black",
    colorCode: "#1c1c1e",
    image: "/assets/colors/black.jpg",
  },
  {
    name: "Deep Titanium",
    colorCode: "#8a8a8f",
    image: "/assets/colors/titanium.jpg",
  },
  {
    name: "Ice Blue",
    colorCode: "#a8c3e5",
    image: "/assets/colors/blue.jpg",
  },
];

export default function ColorsPage() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-24">
      {/* Title */}
     <h1
  className="text-4xl md:text-6xl font-extrabold text-[#f7e7b6] text-center mb-6 select-none pointer-events-none
             animate-pulse drop-shadow-[0_0_40px_rgba(247,231,182,0.3)]"
  style={{
    textShadow: `
      0 0 20px rgba(247,231,182,0.2),
      0 0 40px rgba(247,231,182,0.3),
      0 0 60px rgba(247,231,182,0.25)
    `,
  }}
>
  Choose Your Color
</h1>


      {/* Subtitle */}
      <p className="text-white/70 mb-8 text-center max-w-xl">
        Preview AuraPhone Pro in your favorite color. Click a swatch below.
      </p>

      {/* Phone Image */}
      <motion.img
        key={selectedColor.image}
        src={selectedColor.image}
        alt={selectedColor.name}
        initial={{ opacity: 0.2, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-[260px] md:w-[400px] mb-10 rounded-xl shadow-lg"
      />

      {/* Color Swatches */}
      <div className="flex gap-6 mt-2 flex-wrap justify-center">
        {colorOptions.map((color) => (
          <button
            key={color.name}
            onClick={() => setSelectedColor(color)}
            className="w-14 h-14 rounded-full border-2 border-white/30 hover:scale-105 transition-transform"
            style={{
              backgroundColor: color.colorCode,
              border:
                selectedColor.name === color.name
                  ? "3px solid #FFD700"
                  : "2px solid rgba(255, 255, 255, 0.2)",
            }}
            title={color.name}
          />
        ))}
      </div>

      {/* Label */}
      <p className="mt-6 text-white/80 text-lg">{selectedColor.name}</p>
    </div>
  );
}
