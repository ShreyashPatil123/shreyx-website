import React from "react";
import { Shield, Smartphone, HardDrive, Zap, Lock, Terminal } from "lucide-react";

export default function WhyShreyX() {
  const pillars = [
    {
      icon: Shield,
      title: "Privacy by Architecture",
      description:
        "We don't just add a privacy policy; we design apps that cannot track you. Zero user registration, zero analytics SDKs, and no tracking cookies. Stream requests and metadata extraction happen directly on your device.",
    },
    {
      icon: Smartphone,
      title: "User Control, Not Feeds",
      description:
        "True background playback with your screen locked, clean offline downloads stored directly in device storage, and interfaces stripped of algorithmic dopamine traps, engagement banners, and unskippable ads.",
    },
    {
      icon: HardDrive,
      title: "Zero Middleman Servers",
      description:
        "Unlike apps that route your private streaming traffic through third-party proxy relays, ShreyX tools resolve media directly on-device using pure Dart and native extractors. If your phone has internet, your media plays.",
    },
    {
      icon: Zap,
      title: "Low-Level Performance",
      description:
        "Direct hardware decoders via AndroidX Media3 / ExoPlayer, lightweight Go WebSockets with sub-second synchronization, and fast local databases (SQLite & Hive) instead of heavy webview shells.",
    },
    {
      icon: Lock,
      title: "Local & Private AI",
      description:
        "Our experimental AI tooling runs models locally on your personal workstation or local area network (LAN), streaming inference to mobile devices without shipping prompts to cloud platforms.",
    },
    {
      icon: Terminal,
      title: "Independent & Open Engineering",
      description:
        "ShreyX is built independently without venture pressure to monetize attention or harvest telemetry. Code is written for functional reliability, transparent execution, and technical excellence.",
    },
  ];

  return (
    <section id="why-shreyx" className="py-20 md:py-28 border-b border-zinc-800/60 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400 mb-4">
            <Lock className="w-3.5 h-3.5 text-zinc-300" />
            <span>Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Why ShreyX?
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Modern software has traded user respect for metric-chasing, telemetry tracking, and
            forced subscriptions. ShreyX builds software that puts utility and user dignity first.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 flex flex-col justify-between hover:border-zinc-700/80 transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-zinc-700 transition-colors mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
