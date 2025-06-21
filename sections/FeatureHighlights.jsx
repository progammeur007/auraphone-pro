"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const features = [
  {
    title: "Holographic Display",
    desc: "Experience visuals like never before with 3D holographic panel.",
    img: "/assets/holo-display.jpeg",
  },
  {
    title: "A16X Neural Chip",
    desc: "Blazing-fast performance powered by next-gen AI processing capabilities.",
    img: "/assets/chip.jpeg",
  },
  {
    title: "Titanium Frame",
    desc: "Engineered for strength,style. Crafted from aerospace-grade titanium.",
    img: "/assets/titanium.jpg",
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="w-full bg-black text-white py-24 px-4 space-y-20">
      <h2
        className="text-center text-4xl md:text-5xl font-bold text-[#f7e7b6] drop-shadow-[0_0_40px_rgba(247,231,182,0.2)] mb-12"
        style={{
          textShadow: ` 0 0 20px rgba(247,231,182,0.2),  0 0 40px rgba(247,231,182,0.3)`,
        }}
      >
        AuraPhone Pro Highlights
      </h2>

      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-center gap-10 max-w-6xl mx-auto`}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={feature.img}
              alt={feature.title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#f7e7b6]">
              {feature.title}
            </h3>
            <p className="text-white/80">{feature.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
