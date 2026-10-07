import React from "react";
import Image from "next/image";
import { User, Terminal, Sparkles, ExternalLink, Shield } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-zinc-800/60 bg-zinc-950 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400">
            <User className="w-3.5 h-3.5 text-zinc-300" />
            <span>Founder & Studio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            An independent studio driven by craftsmanship.
          </h2>

          <div className="prose prose-invert max-w-none text-zinc-300 text-base leading-relaxed space-y-6">
            <p className="text-lg text-zinc-200 font-medium leading-relaxed">
              ShreyX is an independent technology project founded and engineered by{" "}
              <strong className="text-white font-semibold">Shreyash Patil</strong>.
            </p>

            <p>
              Rather than building bloated platforms designed to capture watch time or harvest ad metrics,
              ShreyX operates as a focused personal lab. The goal is straightforward: build polished,
              fast, and privacy-respecting consumer software that does exactly what the user asks it to do.
            </p>

            <p>
              From direct-extraction audio streaming and hardware-accelerated video decoding to private
              on-device AI assistants, every project is built from scratch with an emphasis on low-level
              control, minimal dependencies, and offline resilience.
            </p>
          </div>

          {/* Founder Profile Card */}
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-6 sm:p-7 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center font-bold text-xl text-white shadow-inner overflow-hidden">
                  <span className="bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                    SP
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">Shreyash Patil</h3>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Founder & Lead Dev
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Building ShreyX Music · ShreyX Tube · Autonomous Systems
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto pt-2 sm:pt-0">
                <a
                  href="https://www.linkedin.com/in/shreyash-patil-33654a329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#0a66c2]/90 hover:bg-[#0a66c2] transition-colors shadow-sm active:scale-95"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="https://github.com/ShreyashPatil123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Principles Box */}
          <div className="p-6 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 space-y-3 font-mono text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2 text-zinc-200 font-semibold">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Core Principles</span>
            </div>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> No venture capital pressure to monetize private user habits.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> No mandatory user registrations for tools that do not need them.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span> Real software verified directly on target physical devices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
