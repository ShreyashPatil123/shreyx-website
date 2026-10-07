import React from "react";
import { Cpu, Code2, Server, Database, Smartphone, GitBranch } from "lucide-react";

export default function Technology() {
  const techCategories = [
    {
      category: "Client & UI Frameworks",
      icon: Smartphone,
      description: "Autonomous cross-platform and native mobile interfaces designed for high framerates and AMOLED contrast.",
      items: [
        { name: "Flutter 3 & Dart", note: "Primary cross-platform reactive UI engine" },
        { name: "Kotlin & Android NDK", note: "Native hardware acceleration & JNI pipelines" },
        { name: "Material Design 3", note: "Clean, distraction-free Android design system" },
      ],
    },
    {
      category: "Audio & Video Media Pipelines",
      icon: Cpu,
      description: "Low-level playback and direct stream extraction without webview wrappers.",
      items: [
        { name: "AndroidX Media3 (ExoPlayer 1.4.1)", note: "Hardware video decoding & MergingMediaSource (1080p/4K + Opus)" },
        { name: "just_audio & audio_service", note: "True background playback & lock-screen transport integration" },
        { name: "youtube_explode_dart & NewPipeExtractor", note: "100% on-device client stream resolution (zero PC relay)" },
      ],
    },
    {
      category: "Real-Time Systems & AI Backends",
      icon: Server,
      description: "Ultra-lean backends powering collaborative listening rooms and private local LLM inference.",
      items: [
        { name: "Go 1.22 & WebSockets", note: "Sub-second room state synchronization (gorilla/websocket) deployed on Render" },
        { name: "Python & FastAPI", note: "Private LAN API layer for local AI models (Gemma 4 12B, Qwen 3.5, DeepSeek)" },
        { name: "LRCLIB REST API", note: "Timestamp-synchronized lyrics extraction" },
      ],
    },
    {
      category: "Storage & Persistence",
      icon: Database,
      description: "Zero cloud analytics; all userdata resides exclusively in on-device databases.",
      items: [
        { name: "SQLite & sqflite", note: "Local playback history, channels, and download indexing" },
        { name: "Hive & SharedPreferences", note: "Key-value user settings and state storage" },
        { name: "On-Device Storage (.m4a)", note: "Grouped offline music vaults saved to device storage" },
      ],
    },
  ];

  return (
    <section id="technology" className="py-20 md:py-28 border-b border-zinc-800/60 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs font-mono text-zinc-400 mb-4">
            <Code2 className="w-3.5 h-3.5 text-zinc-300" />
            <span>Architecture & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
            Verified Technical Stack
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            Every library, framework, and service listed here is taken directly from our production
            <code>pubspec.yaml</code>, <code>build.gradle</code>, and Go backend codebases.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-700/80 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {cat.category}
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 mb-6 font-mono leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.items.map((tech, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs"
                      >
                        <span className="font-mono font-medium text-zinc-200">
                          {tech.name}
                        </span>
                        <span className="text-zinc-500 font-mono text-[11px]">
                          {tech.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Note */}
        <div className="mt-12 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Target Testing Device: Samsung Galaxy S24 (SM-S921E / Snapdragon 8 Gen 3)</span>
          </div>
          <span className="text-zinc-500">
            Automated ADB Deployment & Real-Device Benchmarks
          </span>
        </div>
      </div>
    </section>
  );
}
