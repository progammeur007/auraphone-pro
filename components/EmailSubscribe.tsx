"use client";
import React, { useState } from "react";

export default function EmailSubscribe() {
 const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      id="contact"
      className="w-full bg-black text-white py-24 px-4 flex flex-col items-center text-center">
      <h2
        className="text-3xl md:text-5xl font-bold text-[#f7e7b6] drop-shadow-[0_0_40px_rgba(247,231,182,0.2)] mb-4"
        style={{
          textShadow: ` 0 0 20px rgba(247,231,182,0.2),
   0 0 40px rgba(247,231,182,0.3)`,
        }}
      >
        Stay in the Loop
      </h2>

      <p className="text-white/70 mb-6 max-w-xl">
        Subscribe to receive product launch updates, news & more.
      </p>

      {submitted ? (
        <p className="text-green-400 text-lg font-medium">
          🎉 Thank you for subscribing!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-center w-full max-w-xl"
        >
         <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="your email id"
  className="px-4 py-3 w-full md:w-auto rounded-full bg-white text-black placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"/>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-medium transition" >
            Subscribe
          </button>
        </form>
      )}

      {error && <p className="text-red-400 mt-2">{error}</p>}
    </section>
  );
}
