"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoaderPage() {
  const router = useRouter();

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-black text-white relative overflow-hidden">
   
      <h1
        className="text-[40px] md:text-[80px] font-extrabold text-[#f7e7b6] animate-pulse"
        style={{
          textShadow: `
            0 0 10px rgba(247,231,182,0.2), 0 0 20px rgba(247,231,182,0.3), 0 0 40px rgba(247,231,182,0.4)`,
        }}>
        AuraPhone
      </h1>

      <div className="absolute w-[300px] h-[300px] bg-yellow-300 blur-[100px] opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
    </div>
  );
}
