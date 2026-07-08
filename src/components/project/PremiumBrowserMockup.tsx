"use client";

import { motion } from "framer-motion";

type PremiumBrowserMockupProps = {
  image: string;
  title: string;
  urlLabel?: string;
};

export default function PremiumBrowserMockup({
  image,
  title,
  urlLabel = "project-preview.app",
}: PremiumBrowserMockupProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-emerald-950/20"
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#09090b]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.04] px-5 py-4">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="ml-3 flex-1 rounded-full border border-white/10 bg-black/30 px-4 py-1 text-center text-xs text-zinc-500">
            {urlLabel}
          </div>
        </div>

        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </motion.div>
  );
}