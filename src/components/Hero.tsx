import React from "react";
import Image from "next/image";
import { ArrowDown, Music, Video, ShieldCheck, Cpu } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden border-b border-zinc-800/50">
      {/* Background ambient gradient glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-indigo-500/10 via-zinc-800/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          {/* Studio Tag & Founder Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Independent Technology Studio</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-300">Active Builds</span>
            </div>
            <a
              href="https://www.linkedin.com/in/shreyash-patil-33654a329"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-800/80 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-3 h-3 text-[#0a66c2]" />
              <span>by Shreyash Patil</span>
            </a>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.12]">
            Building technology{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
              people actually want to use.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
            ShreyX is an independent technology studio creating privacy-first consumer apps,
            standalone media engines, and AI-powered tools. Built with zero tracking,
            no middleman servers, and direct on-device execution.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-zinc-950 bg-zinc-100 hover:bg-white transition-all shadow-md shadow-white/5 active:scale-98"
            >
              <span>Explore Products</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="https://github.com/ShreyashPatil123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 transition-all active:scale-98"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repositories</span>
            </a>
          </div>

          {/* Verified Engineering Signals */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 font-mono">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
              <span>Zero telemetry tracking</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-zinc-400" />
              <span>On-device stream resolution</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
              <span>Standalone Android Builds</span>
            </div>
          </div>
        </div>

        {/* Real Product Visual Showcase Composition */}
        <div className="mt-14 sm:mt-16 relative max-w-5xl mx-auto">
          {/* Glass framing container */}
          <div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-3 sm:p-6 backdrop-blur-xl shadow-2xl">
            {/* Top window bar */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/60 px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/60" />
                <span className="ml-2 text-xs font-mono text-zinc-400">
                  shreyx://products/preview-suite
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                <span className="hidden sm:inline">Target: Samsung Galaxy S24 & Android</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[11px]">
                  Verified Builds
                </span>
              </div>
            </div>

            {/* Grid of real product cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Product 1: ShreyX Music Preview */}
              <div className="group rounded-xl border border-zinc-800/90 bg-zinc-950/70 p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/50 flex items-center justify-center text-zinc-200">
                        <Music className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                          ShreyX Music
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-800 text-emerald-400 border border-zinc-700/60">
                            Android Beta • iOS Testing
                          </span>
                        </h3>
                        <p className="text-xs text-zinc-400">
                          Autonomous Standalone Music Player
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">Flutter · Dart</span>
                  </div>

                  {/* Real screenshot mockup */}
                  <div className="relative aspect-[9/16] max-h-80 w-full mx-auto rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-inner group-hover:scale-[1.01] transition-transform">
                    <Image
                      src="/images/music/shreyx_music_deck.png"
                      alt="ShreyX Music Now Playing UI running on Samsung S24"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/60 mt-4 flex items-center justify-between text-xs text-zinc-400">
                  <span>Synced Lyrics & Vibe Rooms</span>
                  <a
                    href="#music"
                    className="text-zinc-200 hover:text-white font-medium flex items-center gap-1 group-hover:underline"
                  >
                    View Details & APK →
                  </a>
                </div>
              </div>

              {/* Product 2: ShreyX Tube Preview */}
              <div className="group rounded-xl border border-zinc-800/90 bg-zinc-950/70 p-5 flex flex-col justify-between hover:border-zinc-700 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/50 flex items-center justify-center text-zinc-200">
                        <Video className="w-4 h-4 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                          ShreyX Tube
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-800 text-sky-400 border border-zinc-700/60">
                            Android Beta • Active Development
                          </span>
                        </h3>
                        <p className="text-xs text-zinc-400">
                          Privacy Video Client & Media3 Engine
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500">Flutter · Media3</span>
                  </div>

                  {/* Real screenshot mockup */}
                  <div className="relative aspect-[9/16] max-h-80 w-full mx-auto rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 shadow-inner group-hover:scale-[1.01] transition-transform">
                    <Image
                      src="/images/tube/shreyx_tube_watch.png"
                      alt="ShreyX Tube Video Client UI running on Samsung S24"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 400px"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800/60 mt-4 flex items-center justify-between text-xs text-zinc-400">
                  <span>Adaptive 4K & ExoPlayer Merge</span>
                  <a
                    href="#tube"
                    className="text-zinc-200 hover:text-white font-medium flex items-center gap-1 group-hover:underline"
                  >
                    View Details & APK →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
